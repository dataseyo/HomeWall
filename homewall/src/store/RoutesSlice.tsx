import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootState } from './store';

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {
    routes: []
}

const routesSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {
        addRoute: (state, action) => {

        }
    }
})

export const { addRoute } = routesSlice.actions 
export const selectRoutes = (state: RootState) => state.persistedWall.wall;
export const persistedRoutes = persistReducer(persistConfig, routesSlice.reducer)
