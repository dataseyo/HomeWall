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
    rotation: number;
}

// type of single wall
interface Wall {
    wall: Hold[],
    name: string
}

// type of all walls
interface Walls {
    walls: Wall[]
}

const gridObj = new Array(100).fill(1).map((value, index) => {
    return {
        "hold" : ".",
        "id": index,
        "rotation": 0
    }
})

const initialState: Walls = {
    walls: [
        {
            wall: gridObj,
            name: "initial state test"
        }
    ]
}

// set of all walls slice
export const wallsSlice = createSlice({
    name: 'walls',
    initialState,
    reducers: {
        // saveWall: (state, action: PayloadAction<{hold: string, id: number, rotation: number}[]>) => {
        //     state.walls = [
        //         ...state.walls,
        //         action.payload
        //     ]
        // },
        saveWall: (state, action: PayloadAction<Wall>) => {
            state.walls = state.walls.concat(
                {wall: action.payload.wall, name: action.payload.name}
            )
        },
        doSomething: (state, action: PayloadAction<number>) => {
            // this is broken
            state.walls = [
                ...state.walls.slice(0, action.payload),
                ...state.walls.slice(action.payload + 1)
            ]
        },
        saveWallTest: (state, action: PayloadAction<Wall>) => {
            state.walls = state.walls.concat(
                {wall: action.payload.wall, name: action.payload.name}
            )
        }
    },
})

export const { saveWall, doSomething, saveWallTest } = wallsSlice.actions

export const persistedWalls = persistReducer(persistConfig, wallsSlice.reducer)
export const selectWalls = (state: RootState) => state.persistedWalls.walls;


