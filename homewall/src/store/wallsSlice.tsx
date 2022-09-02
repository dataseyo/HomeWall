import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { RootState } from './store';

const persistConfig = {
    key: 'root',
    storage,
  }

// type of single grid site on wall
interface Hold {
    hold: string;
    id: number;
}

// type of single wall
interface Wall {
    wall: Hold[]
}

// type of all walls
interface Walls {
    walls: Hold[][]
}

const initialState: Walls = {
    walls: []
}

// set of all walls slice
export const wallsSlice = createSlice({
    name: 'walls',
    initialState,
    reducers: {
        saveWall: (state, action: PayloadAction<Hold[]>) => {
            state.walls = [
                ...state.walls,
                action.payload
            ]
        },
        deleteWall: (state) => {

        }
    },
})

export const { saveWall, deleteWall } = wallsSlice.actions

export const persistedWalls = persistReducer(persistConfig, wallsSlice.reducer)
export const selectWalls = (state: RootState) => state.persistedWalls.walls;
