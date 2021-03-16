import React from 'react';
import './edit-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants } from '../../../services/plant';
import EditModal from '../edit-modal';
import Search from '../../common/search';


export default function EditPlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);
    const [searchResults, setSearchResults] = React.useState<Plant[] | undefined>([]);

    if (plants === undefined || searchResults === undefined) {
        getPlants().then(data => {
            setPlants(data);
            setSearchResults(data);
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
            setSearchResults(copy);
        }
    }

    function onSearch(plants: Plant[]) {
        setSearchResults(plants);
    }

    return (
        <div className="manage-container">
            <div className="search-bar">
                <Search plants={plants}
                    search={onSearch}
                    onResults={onSearch}
                />
            </div>
            <div className="plant-box-container">
                {searchResults.map((plant, i) => (
                    <div key={plant.PlantId} className="plant-item">
                        <div className="plant-item-name">
                            {plant.PlantName}
                        </div>
                        <div className="plant-button" >
                            <EditModal plant={plant} onClose={(plant?: Plant) => handleChange(i, plant)}></EditModal>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}