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


    function handleChange(index: number, plant?: Plant) {
        if (plant) {
            const copy: Plant[] = [];
            if (plants) {
                copy.push(...plants);
            }

            copy[index] = plant;
            setPlants(copy);
        }
    }

    return (
        <div className="plant-box-container">
            {plants.map((plant, i) => (
                <div key={plant.id} className="plant-item">
                    <div className="plant-item-name">
                        {plant.plantName}
                    </div>
                    <div className="plant-button" >
                        <EditModal plant={plant} onClose={(plant?: Plant) => handleChange(i, plant)}></EditModal>
                    </div>
                </div>

            ))}
        </div>
    )
}