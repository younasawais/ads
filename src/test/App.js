import React from 'react';
// import store from './store/reducers';
// import {Provider} from 'react-redux';
import TestComp1 from './components/TestComp1';
import TestComp2 from './components/TestComp2';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, NavLink, Route, Switch} from 'react-router-dom';

function App() {
  console.log('App Called');
  return (
      <BrowserRouter>
        <NavLink to='/testcomp1'>TestComp1</NavLink>
        <NavLink to='/testcomp2'>TestComp2</NavLink>
        <Switch>
            <Route
                path='/testcomp1'
                component={TestComp1}
                // render={() => <TestComp1 {...props}/>}    
            />
            <Route
                path='/testcomp2'
                component={TestComp2}
                // render={() => <TestComp2 {...props}/>}    
            />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
