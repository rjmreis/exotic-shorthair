import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './reducer';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  blacklist: ['counterReducer'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer);

// Middleware: Redux Persistor
const persistor = persistStore(store);

export { store, persistor };
