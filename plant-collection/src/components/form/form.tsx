import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import { Typography, Button } from '@material-ui/core';
import { Plant } from '../../models/Plant';
import { addPlant } from '../../services/plant';

enum StatusEnum {
    healthy = "Healthy",
    unhealthy = "Unhealthy",
    decesed = "Decesed"
}

interface IFormInput {
    plantName: string;
    plantStatus: StatusEnum;
    plantDescription: string;
    plantResource: string;
}

export default function Form() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const [plant] = useState(0);

    const onSubmit = (data: IFormInput) => {
        let plant = new Plant('', data.plantName, data.plantDescription, data.plantStatus, data.plantResource);
        addPlant(plant).then(function (response) {
            console.log(response)
        });
    };

    return (

        <div className="form-box">
            <div className="form-content">
                <Typography gutterBottom variant="h6" component="h4" className="form-header">Add new Plant</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-item">
                        <label>Plant Name</label>
                        <input name="plantName" ref={register} className="form-input" />
                    </div>
                    <div className="form-item">
                        <label>Description</label>
                        <input name="plantDescription" ref={register} className="form-input" />
                    </div>
                    <div className="form-item">
                        <label>Plant Resource</label>
                        <input name="plantResource" ref={register} className="form-input" />
                    </div>
                    <div className="form-item">
                        <label>Status</label>
                        <select name="plantStatus" ref={register} className="form-select">
                            <option value="healthty">Healthy</option>
                            <option value="unhealthy">Unhealthy</option>
                            <option value="decesed">Decesed</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <Button variant="contained" color="primary" className="admin-button" type="submit">
                            Submit
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}