import axios from 'axios';
import { Plant } from '../models/Plant';


export default function () {
    // const agent = new https.Agent({
    //     rejectUnauthorized: false
    // });
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


export function removePlant(id: string): Promise<string> {
    return axios.delete(`http://localhost:3000/plants/${id}`)
        .then(response => {
            return response.data as string;
        })
}

export function updatePlant(plant: Plant): Promise<Plant> {
    return axios.put(`http://localhost:3000/plants/${plant.id}`, plant)
        .then(response => {
            console.log(response)
            return response.data as Plant;
        })
}

