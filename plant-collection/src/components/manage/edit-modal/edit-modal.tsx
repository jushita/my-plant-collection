import React, { useState } from 'react';
import useStyles from './edit-modal-styles';
import Modal from '@material-ui/core/Modal';
import { Plant } from '../../../models/Plant';
import Editable from '../editable';
import { updatePlant } from '../../../services/plant';

interface EditModalProps {
    plant: Plant,
    onClose: (plant?: Plant) => void;
}


export default function EditModal(props: EditModalProps) {
    const classes = useStyles();
    const [description, setDescription] = useState(props.plant.plantDescription);
    const [name, setName] = useState(props.plant.plantName);
    const [status, setStaus] = useState(props.plant.plantStatus);
    const [resource, setResource] = useState(props.plant.plantResource)
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
            <h2 id="simple-modal-title">Edit {props.plant.plantName}</h2>
            <div id="simple-modal-description">
                Name:
                <Editable
                    text={name}
                    placeholder={name}
                    type="input"
                >
                    <input
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                        placeholder={props.plant.plantName}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Editable>
                <br />
                Status:
                <Editable
                    text={status}
                    placeholder={status}
                    type="input"
                >
                    <input
                        name="status"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                        placeholder={props.plant.plantStatus}
                        value={status}
                        onChange={e => setStaus(e.target.value)}
                    />
                </Editable>
                <br />
                Description:
                <Editable
                    text={description}
                    placeholder={description}
                    type="textarea"
                >
                    <textarea
                        name="description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                        placeholder={props.plant.plantDescription}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Editable>

                <br />
                Resource:

                <Editable
                    text={resource}
                    placeholder={resource}
                    type="input"
                >
                    <input
                        name="resource"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                        placeholder={props.plant.plantResource}
                        value={resource}
                        onChange={e => setResource(e.target.value)}
                    />
                </Editable>
            </div>

            <button onClick={update}>Submit</button>
            <div>{message}</div>
        </div>
    );

    function update() {
        let plant = new Plant(props.plant.id, name, description, resource, status);
        setMessage(`Plant info submitted to be updated`);
        updatePlant(plant).then(plant => {
            setTimeout(() => {
                handleClose();
                props.onClose(plant);
            }, 2000);
        });
    }

    return (
        <div>
            <button type="button" className="remove-button" onClick={handleOpen}>
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
