import axios from 'axios';
import { Plant } from '../models/Plant';

// const API = 'https://api.plantinventory.com';
const API = 'http://localhost:3000'
export function getPlants(): Promise<Plant[]> {
    return axios.get(`${API}/plants`)
        .then(response => {
            return response.data as Plant[];
        });
}

export function getPlantById(id: string): Promise<Plant> {
    return axios.get(`${API}/plants/${id}`)
        .then(response => {
            return response.data as Plant;
        });
}

export function addPlant(plant: Plant): Promise<Plant> {
    return axios.post(`${API}/plants`, plant)
        .then(response => {
            return response.data as Plant;
        });
}


export function removePlant(id: string): Promise<string> {
    return axios.delete(`${API}/plants/${id}`)
        .then(response => {
            return response.data as string;
        })
}

export function updatePlant(plant: Plant): Promise<Plant> {
    return axios.put(`${API}/plants/${plant.PlantId}`, plant)
        .then(response => {
            console.log(response)
            return response.data as Plant;
        })
}

export function addPlantImage(photo: FormData) {
    return axios.post(`${API}/plants/upload`, photo);
}
