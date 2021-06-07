import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  main: {
    minHeight: "100vh",
  },
}));

export const Album = (props) => {
  const classes = useStyles();
  const { openLightbox } = useLightbox();
  return (
    <React.Fragment>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Sandy Art Gallery
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something about your self.....
          </Typography>
        </Container>
      </div>
      <main className={classes.main}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <SRLWrapper>
            <Grid container spacing={4}>
              {props.data.map((img) => (
                <Grid item key={img.Id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={img.ImageURL}
                      title={img.ImageDescription}
                      onClick={() => openLightbox(img.Id - 1)}
                    >
                      <img
                        src={img.ImageURL}
                        alt={img.ImageDescription}
                        style={{ display: "none" }}
                      />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography>{img.ImageDescription}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </SRLWrapper>
        </Container>
      </main>
    </React.Fragment>
  );
};
