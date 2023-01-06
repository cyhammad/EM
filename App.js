import React, { useEffect, useState } from 'react';
import Root from './src/navigation/Root';
import auth from '@react-native-firebase/auth';
import DrawerRoot from './src/navigation/DrawerRoot';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user2) {
    setUser(user2);
    if (initializing) {setInitializing(false);}
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {return null;}

  if (!user) {return <Root />;}

  return <DrawerRoot user={user} />;
};

export default App;
