import axios from 'axios';
import { Plant } from '../models/Plant';

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