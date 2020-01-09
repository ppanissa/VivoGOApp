import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import '~/config/ReactotronConfig';
import StatusBar from '~/config/StatusBar';
import { store, persistor } from '~/store';
import App from '~/App';

// import { Container } from './styles';

export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MenuProvider>
          <StatusBar />
          <App />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
}
