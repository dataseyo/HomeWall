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
  

const gridObj = new Array(100).fill(1).map((value, index) => {
    return {
        "hold" : ".",
        "id": index
    }
})

const initialState: Wall = {
    wall: gridObj
}

// individual wall slice
export const wallSlice = createSlice({
    name: 'wall',
    initialState,
    reducers: {
        changeWall: (state, action: PayloadAction<{hold: string, id: number}>) => {
            let update = state.wall.map(site => {
                if (site.id === action.payload.id) {
                    site.hold = action.payload.hold
                } 
                return site
            })

            state.wall = update
        },
        resetWall: (state) => {
            let reset = state.wall.map(site => {
                if (site.hold != ".") {
                    site.hold = "."
                }
                return site
            })

            state.wall = reset
        },
        replaceWall: (state, action: PayloadAction<{hold: string, id: number}[]>) => {
            state.wall = action.payload
        }
    },
})

export const { changeWall, resetWall, replaceWall } = wallSlice.actions 
export const selectWall = (state: RootState) => state.persistedWall.wall;
export const persistedWall = persistReducer(persistConfig, wallSlice.reducer)
