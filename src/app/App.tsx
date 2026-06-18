import React from 'react';
import {Users} from '../features/users/Users';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
