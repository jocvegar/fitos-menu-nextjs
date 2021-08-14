import React, { useState, useCallback } from "react";
// mui
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      position: "relative",
      borderRadius: 0,
    },
    media: {
      height: 350,
      display: "block",
      width: "100%",
    },
    overlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "#000000a1",
      overflow: "hidden",
      width: "100%",
      transition: "0.5s ease",
    },
    text: {
      color: "white",
      fontSize: "20px",
      position: "absolute",
      top: "20px",
      left: "20px",
    },
    mainOverlay: {
      position: "absolute",
      bottom: "0",
      left: "15px",
      right: "0",
      color: "white",
    },
  })
);

type Props = {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
};

function ItemCard({ title, description, price, imgSrc }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMdOrBigger = useMediaQuery(theme.breakpoints.up("md"));

  const [overlayHeight, setOverlayHeight] = useState("0%");
  const [showTitle, setShowTitle] = useState(true);

  const handleOverlayHeight = useCallback(() => {
    const initialState = overlayHeight === "100%" ? "0%" : "100%";
    setOverlayHeight(initialState);
    setShowTitle(!showTitle);
  }, [overlayHeight, showTitle]);

  const showOverLay = (): void => {
    setOverlayHeight("100%");
    setShowTitle(false);
  };

  const hideOverLay = (): void => {
    setOverlayHeight("0%");
    setShowTitle(true);
  };

  return (
    <Card
      className={classes.root}
      onClick={() => handleOverlayHeight()}
      onMouseEnter={() => isMdOrBigger && showOverLay()}
      onMouseLeave={() => isMdOrBigger && hideOverLay()}
    >
      <CardMedia
        className={classes.media}
        image={imgSrc || "/images/placeholder.jpg"}
        src={imgSrc || "/images/placeholder.jpg"}
        title={title}
      />

      {showTitle && (
        <Typography
          gutterBottom
          variant={"h3" as any}
          className={classes.mainOverlay}
          data-aos="fade-right"
        >
          {title}
        </Typography>
      )}

      <div className={classes.overlay} style={{ height: overlayHeight }}>
        <div className={classes.text}>
          <Typography
            gutterBottom
            variant={"h4" as any}
            align="left"
            color="primary"
          >
            {title}
          </Typography>
          <br />
          <Typography paragraph align="left">
            {description}
          </Typography>
          <br />
          <Box mr={5}>
            <Typography variant="h5" align="right" color="primary">
              Lps. {price}
            </Typography>
          </Box>
        </div>
      </div>
    </Card>
  );
}

export default React.memo(ItemCard);
