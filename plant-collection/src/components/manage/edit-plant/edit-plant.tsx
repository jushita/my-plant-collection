import React from 'react';
import './edit-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants, removePlant } from '../../../services/plant';


export default function EditPlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);

    if (plants === undefined) {
        getPlants().then(data => {
            setPlants(data);
        });
        return (<div>Loading...</div>)
    }

    const onEdit = (id: string) => {
        const newPlantList = plants.filter((item) => item.id !== id);
        removePlant(id);
        setPlants(newPlantList);
    }

    return (
        <div className="remove-plant-container">
            {plants.map(plant => (
                <div key={plant.id} className="plant-item">
                    <div className="plant-item-name">
                        {plant.plantName}
                    </div>
                    <div className="plant-button">
                        <button className="remove-button" onClick={() => onEdit(plant.id)}>
                            Edit
                        </button>
                    </div>
                </div>

            ))}
        </div>
    )
}