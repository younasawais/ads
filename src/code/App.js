import React from 'react';
import Menu from './Menu';
import store from './store/reducers';
import {Provider} from 'react-redux';

function App() {
  console.log('App Called');
  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  );
}

export default App;
