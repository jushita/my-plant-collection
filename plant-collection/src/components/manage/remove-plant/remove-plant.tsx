import React from 'react';
import './remove-plant.css';
import { Plant } from '../../../models/Plant';
import { getPlants, removePlant } from '../../../services/plant';
import Search from '../../common/search';




export default function RemovePlant() {
    const [plants, setPlants] = React.useState<Plant[] | undefined>(undefined);
    const [searchResults, setSearchResults] = React.useState<Plant[] | undefined>([]);

    if (plants === undefined || searchResults === undefined) {
        getPlants().then(data => {
            setPlants(data);
            setSearchResults(data);
        });
        return (<div>Loading...</div>)
    }

    const onRemove = (id: string) => {
        const newPlantList = plants.filter((item) => item.PlantId !== id);
        removePlant(id);
        setPlants(newPlantList);
        setSearchResults(newPlantList);
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
                {searchResults.map(plant => (
                    <div key={plant.PlantId} className="plant-item">
                        <div className="plant-item-name">
                            {plant.PlantName}
                        </div>
                        <div className="plant-button">
                            <button className="custom-button" onClick={() => onRemove(plant.PlantId)}>
                                REMOVE
                        </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    )
}