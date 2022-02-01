/* eslint-disable @next/next/no-img-element */
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
// mui
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AOS from "aos"
import "aos/dist/aos.css"
import type { NextPage } from "next"
import { GetStaticProps } from "next"
import Head from "next/head"
import React, { useEffect } from "react"
// components
import ItemList from "../components/ItemList"
// utils
import firebase from "../firebase/clientApp"
import { IMenuItem } from "../Interfaces"
// styles
import styles from "../styles/Home.module.css"

const drawerWidth = 240

const theme = createTheme({
  typography: {
    fontFamily: ["MYRIADPRO", "Helvetica Neue", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#de5200",
    },
    secondary: {
      main: "#ff9d2d",
    },
  },
})

const cardStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "1rem",
    margin: "0 auto",
  },
  main: {
    display: "flex",
  },
  media: {
    height: 300,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "whitesmoke",
    borderRight: "none",
  },
  content: {
    flexGrow: 1,
  },
})

const Home: NextPage = ({ menu }: any) => {
  const classes = cardStyles()

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  const goToTop = (): void => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  const goToElment = (idx: number): void => {
    let elementId = ""
    switch (idx) {
      case 0:
        elementId = "entrees"
        break
      case 1:
        elementId = "sandwiches"
        break
      case 2:
        elementId = "burgers"
        break
      case 3:
        elementId = "tenders"
        break
      case 4:
        elementId = "wings"
        break
      case 5:
        elementId = "suaces"
        break
      case 6:
        elementId = "salads"
        break
      case 7:
        elementId = "boxes"
        break
      case 8:
        elementId = "ribs"
        break
      case 9:
        elementId = "pizzas"
        break
      case 10:
        elementId = "drinks"
        break
      case 11:
        elementId = "postres"
        break
      default:
        elementId = "entrees"
        break
    }
    const element = document.getElementById(elementId)!
    const elementPosition = element.offsetTop

    window.scrollTo({
      top: elementPosition - 60, //add your necessary value
      behavior: "smooth", //Smooth transition to roll
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fitos</title>
        <meta name="description" content="Sientete como en casa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${classes.main} App`}>
        <ThemeProvider theme={theme}>
          <AppBar
            position="fixed"
            style={{ backgroundColor: "whitesmoke", zIndex: 9999 }}
          >
            <Toolbar>
              <img
                src="/images/logo.png"
                alt="logo"
                height="50"
                width="50"
                style={{ cursor: "pointer" }}
                onClick={goToTop}
              />
            </Toolbar>
          </AppBar>
          <Hidden mdDown>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left"
            >
              <Box style={{ marginTop: "4em" }}>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  height="150"
                  width="250"
                />
              </Box>

              <List style={{ marginTop: "1em" }} className="navDrawer">
                {[
                  "Para Picar",
                  "Sandwiches",
                  "Burgers",
                  "Chicken Tenders",
                  "Chicken Wings",
                  "Salsas",
                  "Ensaladas",
                  "Boxes",
                  "Ribs",
                  "Pizzas",
                  "Drinks",
                  "Postres",
                ].map((text, idx) => (
                  <ListItem button key={text} style={{ textAlign: "end" }}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="h4"
                            color="primary"
                            onClick={() => goToElment(idx)}
                          >
                            {text}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Hidden>
          <main className={`${classes.content} pa-0 pa-md-8 mt-5`}>
            <ItemList menu={menu} />
          </main>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  let menu: IMenuItem[] = []

  try {
    const querySnapshot = await firebase
      .firestore()
      .collection("menu")
      .where("available", "==", true)
      .get()
    querySnapshot.forEach(async function (doc) {
      menu.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        price: doc.data().price,
        imgSrc: doc.data().imgSrc || "",
        category: doc.data().category,
        position: doc.data().position,
      })
    })
  } catch (error) {
    console.log("Error getting documents: ", error)
    menu = []
  }

  return {
    props: {
      menu,
    },
  }
}
