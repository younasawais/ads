import React from 'react';
import Menu from './Menu';
import store from './store/reducers';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

function App() {
  console.log('App Called');
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
      </Provider>
  );
}
//testing
export default App;
