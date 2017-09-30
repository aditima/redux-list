import * as React from 'react';
import { object } from 'prop-types';
import './App.css';

export interface ICommandBarState {
    num: number;
}

export default class CommandBar extends React.Component<{}, ICommandBarState> {
  static contextTypes = {
    store: object
  };

  constructor() {
    super();
  }

  render() {
    return (
        <div className='commandBar'>
            <a onClick={ () => { this._onClick('SORT'); }}>SORT</a>
            <a onClick={ () => { this._onClick('RENAME'); }}>RENAME</a>
            <a onClick={ () => { this._onClick('UPLOAD'); }}>UPLOAD</a>
            <a onClick={ () => { this._onClick('DELETE'); }}>DELETE</a>
        </div>
    );
  }

  private _onClick(action: string) {
    const { store } = this.context;
    store.dispatch({ type: action});
  }
}