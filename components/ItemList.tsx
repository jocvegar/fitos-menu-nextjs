import { useMemo } from "react"
// mui
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
// components
import ItemCard from "./ItemCard"
import ItemSuaceCard from "./ItemSuaceCard"
// utils
import { IMenuItem } from "../Interfaces"
import LazyLoad from "react-lazyload"

interface Props {
  menu: any
}

const ItemList = ({ menu }: Props) => {
  const responsiveTheme = useTheme()
  const isSmall = useMediaQuery(responsiveTheme.breakpoints.down("sm"))

  const sandwichMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "sandwiches")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  const burgerMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "burgers")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  const tendersMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "tenders")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  const wingsMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "wings")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  const saladMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "salads")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  const entreesMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "entrees")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  const boxMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "boxes")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  // const pizzaMenu = useMemo(() => {
  //   return menu
  //     .filter((item: IMenuItem) => item.category === "pizzas")
  //     .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  // }, [menu])

  // const ribMenu = useMemo(() => {
  //   return menu
  //     .filter((item: IMenuItem) => item.category === "ribs")
  //     .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  // }, [menu])

  const drinkMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "drinks")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  }, [menu])

  // const postresMenu = useMemo(() => {
  //   return menu
  //     .filter((item: IMenuItem) => item.category === "postres")
  //     .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1))
  // }, [menu])

  return (
    <div>
      <Box mb={10}>
        <div id="entrees">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Para Picar</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {entreesMenu &&
              entreesMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        <div id="sandwiches">
          <div className="titleWrapper">
            <Typography variant="h4" color="primary" className="mt-10 mr-2">
              <strong>Sandwiches</strong>
            </Typography>
            <Typography variant="h6" color="secondary">
              Incluye Papas (+ Lps. 45 con Dirty Fries)
            </Typography>
          </div>
          <Grid container spacing={isSmall ? 1 : 4}>
            {sandwichMenu &&
              sandwichMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        <div id="burgers">
          <div className="titleWrapper">
            <Typography variant="h4" color="primary" className="mt-10 mr-2">
              <strong>Burgers</strong>
            </Typography>
            <Typography variant="h6" color="secondary">
              Incluye Papas (+ Lps. 45 con Dirty Fries)
            </Typography>
          </div>
          <Grid container spacing={isSmall ? 1 : 4}>
            {burgerMenu &&
              burgerMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        <div id="tenders">
          <div className="titleWrapper">
            <Typography variant="h4" color="primary" className="mt-10 mr-2">
              <strong>Chicken Tendres</strong>
            </Typography>
            <Typography variant="h6" color="secondary">
              + Lps. 30 orden Papas || + Lps. 45 con Dirty Fries
            </Typography>
          </div>

          <Grid container spacing={isSmall ? 1 : 4}>
            {tendersMenu &&
              tendersMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        <div id="wings">
          <div className="titleWrapper">
            <Typography variant="h4" color="primary" className="mt-10 mr-2">
              <strong>Chicken Wings</strong>
            </Typography>
            <Typography variant="h6" color="secondary">
              + Lps. 30 orden Papas || + Lps. 45 con Dirty Fries
            </Typography>
          </div>

          <Grid container spacing={isSmall ? 1 : 4}>
            {wingsMenu &&
              wingsMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        <div id="suaces">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Salsas</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {[
              "Berry BBQ",
              "El Amado",
              "Buffalo Habanero",
              "Strawberry Honey",
              "Chipotle",
              "Teriyaki",
            ].map((item, idx) => {
              return (
                <Grid item xs={12} md={4} key={idx}>
                  <ItemSuaceCard title={item} />
                </Grid>
              )
            })}
          </Grid>
        </div>

        <div id="salads">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Ensaladas</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {saladMenu &&
              saladMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        <div id="boxes">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Boxes</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {boxMenu &&
              boxMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        {/* <div id="ribs">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Ribs</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {ribMenu &&
              ribMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div> */}

        {/* <div id="pizzas">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Pizzas</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {pizzaMenu &&
              pizzaMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div> */}

        <div id="drinks">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Drinks</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {drinkMenu &&
              drinkMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div>

        {/* <div id="postres">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Postres</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {postresMenu &&
              postresMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <LazyLoad height={200} once>
                      <ItemCard
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imgSrc={menuItem.imgSrc}
                      />
                    </LazyLoad>
                  </Grid>
                )
              })}
          </Grid>
        </div> */}
      </Box>
    </div>
  )
}

export default ItemList
