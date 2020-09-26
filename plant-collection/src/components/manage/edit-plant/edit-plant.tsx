import React from 'react';
import './edit-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants } from '../../../services/plant';
import EditModal from '../edit-modal';


export default function EditPlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);

    if (plants === undefined) {
        getPlants().then(data => {
            setPlants(data);
        });
        return (<div>Loading...</div>)
    }

    // const onEdit = (id: string) => {

    // }

    return (
        <div className="remove-plant-container">
            {plants.map(plant => (
                <div key={plant.id} className="plant-item">
                    <div className="plant-item-name">
                        {plant.plantName}
                    </div>
                    <div className="plant-button">
                        <EditModal plant={plant}></EditModal>
                    </div>
                </div>

            ))}
        </div>
    )
}