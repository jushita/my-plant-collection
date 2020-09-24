import React from 'react';
import './remove-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants } from '../../../services/plant';

export default function RemovePlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);
    let plant1: Plant
    if (plants === undefined) {
        getPlants().then(data => {
            setPlants(data);
        });
        return (<div>Loading...</div>)
    } else {
        plant1 = plants[0] as Plant

    }
    return (
        <div className="remove-plant-container">
            {plants.map(plant => (
                <ul>
                    {plant.plantName}
                    X
                </ul>
            ))}
        </div>
    )
}