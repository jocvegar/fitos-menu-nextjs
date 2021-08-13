import { useState, useMemo, useEffect } from "react";
import ItemCard from "./ItemCard";
import ItemSuaceCard from "./ItemSuaceCard";
import { IMenuItem } from "../Interfaces";
// styles
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  menu: any;
}

const ItemList = ({ menu }: Props) => {
  const responsiveTheme = useTheme();
  const isSmall = useMediaQuery(responsiveTheme.breakpoints.down("sm"));
  const [test, setTest] = useState<any>([]);
  console.log("menu.docs[0].data() :>> ", menu.docs[0].data());

  useEffect(() => {
    let items: IMenuItem[] = [];
    menu.docs.forEach((doc: any) => {
      items.push(
        Object.assign({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          price: doc.data().price,
          imgSrc: doc.data().imgSrc,
          category: doc.data().category,
          position: doc.data().position,
        })
      );
    });
    setTest(items);
  }, [menu]);

  console.log("test :>> ", test);

  const sandwichMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "sandwiches")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const burgerMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "burgers")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const tendersMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "tenders")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const saladMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "salads")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const entreesMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "entrees")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const boxMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "boxes")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const pizzaMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "pizzas")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

  const drinkMenu = useMemo(() => {
    return test
      .filter((item: IMenuItem) => item.category === "drinks")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [test]);

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
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
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
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
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
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
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
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
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
            ].map((item, idx) => {
              return (
                <Grid item xs={12} md={4} key={idx}>
                  <ItemSuaceCard title={item} />
                </Grid>
              );
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
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
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
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>

        <div id="pizzas">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Pizzas</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {pizzaMenu &&
              pizzaMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>

        <div id="drinks">
          <Typography variant="h4" color="primary" className="mt-10">
            <strong>Drinks</strong>
          </Typography>
          <Grid container spacing={isSmall ? 1 : 4}>
            {drinkMenu &&
              drinkMenu.map((menuItem: IMenuItem) => {
                return (
                  <Grid item xs={12} md={4} key={menuItem.id}>
                    <ItemCard
                      title={menuItem.title}
                      description={menuItem.description}
                      price={menuItem.price}
                      imgSrc={menuItem.imgSrc}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default ItemList;
