// styles
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      position: "relative",
      borderRadius: 0,
    },
    content: {
      height: 350,
      display: "block",
      width: "100%",
      backgroundColor: "#de5200",
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
};

function ItemCard({ title }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          gutterBottom
          variant={"h3" as any}
          className={classes.mainOverlay}
          data-aos="fade-right">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
