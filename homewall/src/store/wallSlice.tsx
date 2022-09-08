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

const gridObj = new Array(100).fill(1).map((value, index) => {
    return {
        "hold" : ".",
        "id": index,
        "rotation": 0
    }
})

const initialState: Wall = {
    wall: gridObj,
    name: ""
}

// individual wall slice
export const wallSlice = createSlice({
    name: 'wall',
    initialState,
    reducers: {
        changeWall: (state, action: PayloadAction<{hold: string, id: number, rotation: number}>) => {
            let update = state.wall.map(site => {
                if (site.id === action.payload.id) {
                    site.hold = action.payload.hold
                    site.rotation = action.payload.rotation
                } 
                return site
            })

            state.wall = update
        },
        resetWall: (state) => {
            let reset = state.wall.map(site => {
                if (site.hold != ".") {
                    site.hold = "."
                    site.rotation = 0
                }
                return site
            })

            state.wall = reset
        },
        replaceWall: (state, action: PayloadAction<Wall>) => {
            state.wall = action.payload.wall
            state.name = action.payload.name
        },
        // replaceWall: (state, action: PayloadAction<{hold: string, id: number, rotation: number}[]>) => {
        //     state.wall = action.payload
        // }
    },
})

export const { changeWall, resetWall, replaceWall } = wallSlice.actions 
export const selectWall = (state: RootState) => state.persistedWall.wall;
export const persistedWall = persistReducer(persistConfig, wallSlice.reducer)
