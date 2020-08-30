import React from 'react';

interface SquareProps {
    value: string;
}

interface State {
    value: string
}

export default class Square extends React.Component<SquareProps, State> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {
            value: ''
        };
        
    }
    render() {
        return ( 
            <button 
                className="square"    
                onClick = { () => { this.setState({ value: 'X'}) }}>
            {this.state.value}
            </button>
        )
    }
} 