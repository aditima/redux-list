import * as React from 'react';
import { object } from 'prop-types';
import './App.css';

export interface IListState {
    items: string[];
}

export default class List extends React.Component<{}, IListState> {
  static contextTypes = {
    store: object
  };

  constructor() {
    super();
    this.state = {
        items: []
    };
  }

  componentDidMount() {
    const { store } = this.context;
    store.subscribe(() => {
        this.setState({
            items: store.getState().items
        });
    });
    store.dispatch({
        type: 'GET_DATA',
        data: undefined
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className='List'>
        <div>List Header</div>
        <div>
            {
                items.map((item: string) => (
                    <div>
                        <a onClick={() => { this._itemClick(item); }}>{ item }</a>
                    </div>
                ))
            }
        </div>
      </div>
    );
  }

  private _itemClick(item: string) {
    const { store } = this.context;
    store.dispatch({
        type: 'GET_DATA',
        data: item
    });
  }
}