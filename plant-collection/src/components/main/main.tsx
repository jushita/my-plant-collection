import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './main.css'
import useStyles from './main-styles';
import { Link } from 'react-router-dom';
import { getPlants } from '../../services/plant';
import { Plant } from '../../models/Plant';

export default function Main() {
  const classes = useStyles();
  const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);

  if (plants === undefined) {
    getPlants().then(data => {
      setPlants(data);
    });

    return (<div>Loading...</div>);
  }

  return (
    <AppBar position="relative" className="main-container">
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {plants.map(plant => (
            <Grid item key={plant.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {plant.plantName}
                  </Typography>
                  <Typography>
                    {plant.plantDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to={`/product/${plant.id}`}>Details</Link>

                  </Button>

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AppBar>
  )
}
