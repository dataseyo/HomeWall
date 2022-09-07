import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { useSelector, useDispatch } from 'react-redux'


import { persistedWalls } from './wallsSlice';
import { persistedWall } from './wallSlice'
import { persistedRoute } from './routeSlice';

const persistConfig = {
  key: 'root',
  storage,
}

// store all reducers
const rootReducer = combineReducers({
    persistedWall,
    persistedWalls,
    persistedRoute
})

// export actions
// export const { changeWall, resetWall } = wallSlice.actions 
// export const { saveWall, deleteWall } = wallsSlice.actions

// configure store
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

// export types
export type RootState = ReturnType<typeof store.getState>

// export selectors 
// export const selectWall = (state: RootState) => state.persistedWall.wall;
// export const selectWalls = (state: RootState) => state.persistedWalls.walls;

// export redux store persistence and store
export const persistor = persistStore(store)
export default store;

