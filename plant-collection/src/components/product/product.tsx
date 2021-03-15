import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { Plant } from '../../models/Plant';
import { getPlantById } from '../../services/plant';
import useStyles from './product-styles';

export default function Product() {
    const classes = useStyles();
    const { id } = useParams();
    const [plant, setPlant] = React.useState<Plant | undefined>(undefined);
    if (plant === undefined) {
        getPlantById(id).then(data => {
            console.log(data)
            setPlant(data);
        });

        return <div>Loading...</div>
    }
    // const url = process.env.NODE_ENV === 'production' ? 'https://plants-jushita.s3-us-west-2.amazonaws.com' : '';
    // const asset_url = url + '/' + plant.PlantResource + '.png'
    const asset_url = 'https://d1bot71ci7wa6y.cloudfront.net/' + plant.PlantResource;
    console.log(asset_url)
    return (
        <AppBar position="relative" className="main-container">
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={1} className="grid-container">
                    <Grid item key={plant.id} md={8}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={`${asset_url}`}
                                title={plant.name}
                            />
                        </Card>
                        <Card className={classes.productBody}>
                            <Typography gutterBottom variant="h5" component="h2" className="card-title">
                                {plant.name}
                            </Typography>
                            <Typography gutterBottom component="p" className="card-title">
                                Plant Status: {plant.plantStatus}
                            </Typography>
                            <Typography gutterBottom component="p" className="card-title">
                                {plant.plantDescription}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    )
}