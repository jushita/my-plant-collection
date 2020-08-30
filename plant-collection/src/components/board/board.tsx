import React from 'react';
import Square from './square';


interface BoardProps {
    squares: string;
    onClick: any;
}

interface State {
    squares: string[];
    xIsNext: boolean;
}

export default class Board extends React.Component<BoardProps, State> {
   
    renderSquare(i: any) {
        return <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            />
    }

    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }

      
}
