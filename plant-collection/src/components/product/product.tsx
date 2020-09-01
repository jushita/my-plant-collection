import React from 'react';
import { useParams } from 'react-router-dom';


export default function Product() {
    const { id } = useParams();
    return (
        <div>
            {id}
            This will be the product page
        </div>
    )
}