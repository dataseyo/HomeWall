import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

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
    walls: Wall[]
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
        }
    },
})

const persistedReducer = persistReducer(persistConfig, wallSlice.reducer)


export const { changeWall, resetWall } = wallSlice.actions 

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>

export const selectWall = (state: RootState) => state.wall;
  
export default store;

export const persistor = persistStore(store)

// const initialState: Walls = {
//     walls: []
// }

// export const wallsSlice = createSlice({
//     name: 'walls',
//     initialState,
//     reducers: {
//         saveWall: (state, action: PayloadAction<{hold: string, id: number}>) => {
//             state.walls = [
//                 ...state.walls,
//                 {

//                 }
//             ]
//         }
//     },
// })
