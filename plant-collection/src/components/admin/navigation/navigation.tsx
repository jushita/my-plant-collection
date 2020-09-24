import React from 'react';
import { Button } from '@material-ui/core';
import './navigation.css'

export default function Navigation() {
    return (
        <div className="nav-container">
            <div>
                <p className="nav-text">Hello Plant Parent! What do you want to do today?</p>
            </div>
            <div>
                <Button variant="text" className="nav-button" type="submit" href={'/admin/add-new-plant'}>
                    Add New Plant
                </Button>
                |
                <Button variant="text" className="nav-button" type="submit" href={'/admin/remove-plant'}>
                    Remove A Plant
                </Button>
                |
                <Button variant="text" className="nav-button" type="submit">
                    Edit Existing Plant
                </Button>
            </div>
        </div>
    )
}

