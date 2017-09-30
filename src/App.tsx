import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import List from './List';
import CommandBar from './CommandBar';
import Breadcrumb from './Breadcrumb';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CommandBar />
          <Breadcrumb />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
