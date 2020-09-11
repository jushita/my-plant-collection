import * as React from 'react';
import axios from 'axios';
import { Plant } from '../models/Plant';


export class Product extends React.Component<any> {
    async getPlants() {
        let plants = await axios.get('/plants')

    }
}