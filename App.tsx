import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from './src/app/reducers';
import rootSaga from './src/app/sagas';
import Navigation from './src/navigations';

const isJest = typeof process !== 'undefined' && !!process.env.JEST_WORKER_ID;

const { store, persistor, runSaga } = createStore();
if (!isJest) {
  runSaga(rootSaga);
}

export default function App() {
  return (
    <Provider store={store}>
      {isJest ? (
        <Navigation />
      ) : (
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      )}
    </Provider>
  );
}

