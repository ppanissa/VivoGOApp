import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: '@VivoGO',
      storage: AsyncStorage,
      whitelist: ['auth', 'device'],
    },
    reducers
  );
  return persistedReducer;
};
