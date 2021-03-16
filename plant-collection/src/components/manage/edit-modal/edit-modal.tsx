import React, { useState } from 'react';
import useStyles from './edit-modal-styles';
import Modal from '@material-ui/core/Modal';
import { Plant } from '../../../models/Plant';
import Editable from '../../common/editable';
import { updatePlant } from '../../../services/plant';
import './edit-modal.css';

interface EditModalProps {
    plant: Plant,
    onClose: (plant?: Plant) => void;
}


export default function EditModal(props: EditModalProps) {
    const classes = useStyles();
    const [description, setDescription] = useState(props.plant.PlantDescription);
    const [name, setName] = useState(props.plant.PlantName);
    const [status, setStaus] = useState(props.plant.PlantStatus);
    const [resource, setResource] = useState(props.plant.PlantResource)
    const [message, setMessage] = useState("");

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setMessage(``);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 className="modal-title">Edit {props.plant.PlantName}</h2>
            <hr />
            <div id="modal-description">
                <div className="input-area">
                    <div className="input-container">
                        <span className="label-area">Name: </span>
                        <Editable
                            text={name}
                            placeholder={name}
                            type="input"
                        >
                            <input
                                name="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder={props.plant.PlantName}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
                <hr />

                <div className="input-area">
                    <div className="input-container">
                        <span className="label-area">Status:</span>
                        <Editable
                            text={status}
                            placeholder={status}
                            type="input"
                        >
                            <input
                                name="status"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder={props.plant.PlantStatus}
                                value={status}
                                onChange={e => setStaus(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
                <hr />

                <div className="input-area">
                    <div className="input-container">
                        <span className="label-area">Description: </span>
                        <Editable
                            text={description}
                            placeholder={description}
                            type="textarea"
                        >
                            <textarea
                                name="description"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder={props.plant.PlantDescription}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
                <hr />

                <div className="input-area">
                    <div className="input-container">
                        <span className="label-area">Resource: </span>
                        <Editable
                            text={resource}
                            placeholder={resource}
                            type="input"
                        >
                            <input
                                name="resource"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder={props.plant.PlantResource}
                                value={resource}
                                onChange={e => setResource(e.target.value)}
                            />
                        </Editable>
                    </div>
                </div>
            </div>
            <hr />

            <button className="custom-button" onClick={update}>Submit</button>
            <div className="message">{message}</div>
        </div>
    );

    function update() {
        console.log(props.plant)
        let plant = new Plant(props.plant.PlantId, name, description, resource, status);
        setMessage(`Plant info submitted to be updated!!!`);
        updatePlant(plant).then(plant => {
            setTimeout(() => {
                handleClose();
                props.onClose(plant);
            }, 2000);
        });
    }

    return (
        <div>
            <button type="button" className="custom-button" onClick={handleOpen}>
                Edit
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
