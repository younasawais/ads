import React from 'react';
import RouterAll from './RouterAll';
import store from './store/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <RouterAll/>
        </BrowserRouter>
      </Provider>
  );
}
//testing
export default App;
