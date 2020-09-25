import React from 'react';
import './remove-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants } from '../../../services/plant';
import { Button } from '@material-ui/core';




export default function RemovePlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);
    if (plants === undefined) {
        getPlants().then(data => {
            setPlants(data);
        });
        return (<div>Loading...</div>)
    }

    const onRemove = () => {
        console.log(hii)
    }


    return (
        <div className="remove-plant-container">
            {plants.map(plant => (
                <div key={plant.id} className="plant-item">
                    <div className="plant-item-name">
                        {plant.plantName}
                    </div>
                    <div className="plant-button">
                        <Button variant="contained" color="primary" className="remove-button" type="submit" >
                            Remove
                        </Button>
                    </div>
                </div>

            ))}
        </div>
    )
}