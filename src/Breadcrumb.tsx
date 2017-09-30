import * as React from 'react';
import { object } from 'prop-types';
import './App.css';

export interface IBreadcrumbState {
    title: string;
}

export default class Breadcrumb extends React.Component<{}, IBreadcrumbState> {
  static contextTypes = {
    store: object
  };

  constructor() {
    super();
    this.state = {
        title: ''
    };
  }

  componentDidMount() {
    const { store } = this.context;
    store.subscribe(() => {
        this.setState({
            title: store.getState().breadcrumb
        });
    });
  }

  render() {
    const { store } = this.context;
    return (
        <div className='breadcrumb'>
            <a onClick={() => {
                store.dispatch({
                    type: 'GET_DATA'
                });
            }}>
            {'Breadcrumb ' + this.state.title}
        </a>
    </div>
    );
  }
}