import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './add-new-plant.css';
import { Typography } from '@material-ui/core';
import { Plant } from '../../../models/Plant';
import { addPlant, addPlantImage } from '../../../services/plant';
import { stringify } from 'querystring';

interface IFormInput {
    plantName: string;
    plantStatus: string;
    plantDescription: string;
    plantResource: any;
}

export default function AddNewPlant() {
    let { register, errors, handleSubmit, reset } = useForm<IFormInput>();
    let [message, setMessage] = useState('');

    const onSubmit = (data: IFormInput) => {
        let plant: Plant = new Plant('', data.plantName, data.plantDescription, data.plantResource[0].name, data.plantStatus);
        const formData = new FormData();
        formData.append('plantResource', data.plantResource[0]);
        // formData.append('plant', JSON.stringify(plant));
        addPlantImage(formData).then(() => {
            addPlant(plant).then(() => {
                reset(new Plant('', '', '', '', ''));
                setMessage(`Plant Added to Inventory!`);
                setTimeout(() => setMessage(``), 2000);
                console.log(`Plant added successfully`)
            }).catch((e) => {
                console.log(e)
            });

        }).catch((e) => {
            console.log(e)
        });
    }

    return (
        <div className="form-box">
            <div className="form-content">
                <Typography gutterBottom variant="h6" component="h4" className="form-header">Add new Plant</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-item">
                        <label>Plant Name</label>
                        <input name="plantName" ref={register({ required: true })} className="form-input" />
                        <div className="error-message">{errors.plantName && "Your input is required"}</div>
                    </div>
                    <div className="form-item">
                        <label>Description</label>
                        <textarea name="plantDescription" ref={register({ required: true })} className="form-input" />
                        <div className="error-message">{errors.plantDescription && "Your input is required"}</div>
                    </div>
                    <div className="form-item ">
                        <label>Plant Resource</label>
                        <input ref={register({ required: true })}
                            className="form-input"
                            type="file"
                            name="plantResource"
                        />
                        <div className="error-message">{errors.plantResource && "Your input is required"}</div>
                    </div>
                    <div className="form-item">
                        <label>Status</label>
                        <select name="plantStatus" ref={register({ required: true })} className="form-select">
                            <option value="Healthy">Healthy</option>
                            <option value="Unhealthy">Unhealthy</option>
                            <option value="Deceased">Deceased</option>
                        </select>
                        <div className="error-message">{errors.plantStatus && "Your input is required"}</div>
                    </div>
                    <div className="form-item">
                        <button className="custom-button" type="submit">Submit</button>
                    </div>
                    <div>{message}</div>
                </form>
            </div>
        </div>
    )
}