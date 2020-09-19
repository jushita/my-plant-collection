import React from 'react';
import { useParams } from 'react-router-dom';
import { Plant } from '../../models/Plant';
import { getPlantById } from '../../services/plant';


export default function Product() {
    const { id } = useParams();
    const [plant, setPlant] = React.useState<Plant | undefined>(undefined);

    if (plant === undefined) {
        getPlantById(id).then(data => {
            setPlant(data);
            console.log(data)
        });

        return <div>Loading...</div>
    }
    return (
        <div>
            {plant.plantName}
            {plant.plantStatus}
            {plant.plantDescription}
            {plant.plantResource}
        </div>
    )
}