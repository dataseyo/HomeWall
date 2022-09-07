import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootState } from './store';

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {
    route: []
}

const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {
        changeRoute: (state, action) => {

        }
    }
})

export const { changeRoute } = routeSlice.actions 
export const selectRoute = (state: RootState) => state.persistedWall.wall;
export const persistedRoute = persistReducer(persistConfig, routeSlice.reducer)
