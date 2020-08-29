import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    renderSquare(i: any) {
        return <Square value={i} />
    }
}

