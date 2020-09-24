import axios from 'axios';
import { Plant } from '../models/Plant';
import https from 'https';


export default function () {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
}


export function getPlants(): Promise<Plant[]> {
    return axios.get('http://localhost:3000/plants')
        .then(response => {
            return response.data as Plant[];
        });
}

export function getPlantById(id: string): Promise<Plant> {
    return axios.get(`http://localhost:3000/plants/${id}`)
        .then(response => {
            return response.data as Plant;
        });
}

export function addPlant(plant: Plant): Promise<Plant> {
    return axios.post(`http://localhost:3000/plants`, plant)
        .then(response => {
            return response.data as Plant;
        });
}


