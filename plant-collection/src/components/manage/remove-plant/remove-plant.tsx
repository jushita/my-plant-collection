import React from 'react';
import './remove-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants, removePlant } from '../../../services/plant';




export default function RemovePlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);

    if (plants === undefined) {
        getPlants().then(data => {
            setPlants(data);
        });
        return (<div>Loading...</div>)
    }

    const onRemove = (id: string) => {
        const newPlantList = plants.filter((item) => item.id !== id);
        removePlant(id);
        setPlants(newPlantList);
    }

    return (
        <div className="plant-box-container">
            {plants.map(plant => (
                <div key={plant.id} className="plant-item">
                    <div className="plant-item-name">
                        {plant.plantName}
                    </div>
                    <div className="plant-button">
                        <button className="custom-button" onClick={() => onRemove(plant.id)}>
                            REMOVE
                        </button>
                    </div>
                </div>

            ))}
        </div>
    )
}