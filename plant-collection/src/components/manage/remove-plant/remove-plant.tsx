import React from 'react';
import './remove-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants } from '../../../services/plant';




export default function RemovePlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);
    if (plants === undefined) {
        getPlants().then(data => {
            setPlants(data);
        });
        return (<div>Loading...</div>)
    }

    return (
        <div className="remove-plant-container">
            {plants.map(plant => (
                <ul key={plant.id}>
                    {plant.plantName}
                    X
                </ul>
            ))}
        </div>
    )
}