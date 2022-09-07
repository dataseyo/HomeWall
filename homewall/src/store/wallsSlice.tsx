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
        saveWall: (state, action: PayloadAction<{hold: string, id: number}[]>) => {
            state.walls = [
                ...state.walls,
                action.payload
            ]
        },
        doSomething: (state, action: PayloadAction<number>) => {
            // this is broken
            state.walls = [
                ...state.walls.slice(0, action.payload),
                ...state.walls.slice(action.payload + 1)
            ]
        }
    },
})

export const { saveWall, doSomething } = wallsSlice.actions

export const persistedWalls = persistReducer(persistConfig, wallsSlice.reducer)
export const selectWalls = (state: RootState) => state.persistedWalls.walls;


