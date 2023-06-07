import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducers';

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = RootState;
export type AppDispatch = typeof store.dispatch;

export default store;
