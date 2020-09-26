import React, { useState, useRef } from 'react';
import useStyles from './edit-modal-styles';
import Modal from '@material-ui/core/Modal';
import { Plant } from '../../../models/Plant';
import Editable from '../editable';

interface EditModalProps {
    plant: Plant
}


export default function EditModal(props: EditModalProps) {
    const inputRef = useRef();
    const [task, setTask] = useState("");

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Edit {props.plant.plantName}</h2>
            <p id="simple-modal-description">
                Name: {props.plant.plantName} <br />
                Status: {props.plant.plantStatus} <br />
                Description: {props.plant.plantDescription} <br />
                Resource: {props.plant.plantResource}
            </p>

            <Editable
                text={task}
                placeholder={props.plant.plantName}
                type="input"
            >
                <input
                    type="text"
                    name="task"
                    placeholder={props.plant.plantName}
                    value={props.plant.plantName}
                    onChange={e => setTask(e.target.value)}
                />

            </Editable>
        </div>
    );

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
