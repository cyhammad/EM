import React, {useState} from 'react';
import Root from './src/navigation/Root';
import DrawerRoot from './src/navigation/DrawerRoot';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  onAuthStateChanged(auth, user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });
  return authenticated ? <DrawerRoot /> : <Root />;
};

export default App;
