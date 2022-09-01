import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Route {
    id: number;
    name: string;
}

interface RouteSlice {
    routes: Route[];
}

const initialState: RouteSlice = {
    routes: []
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        addRoute: (state, action: PayloadAction<string>) => {
            state.routes = [
                ...state.routes,
                {
                    id: state.routes.length,
                    name: action.payload,
                },
            ]
        },
        deleteRoute: (state, action) => {
            state.routes = state.routes.filter(({ id }) => id != action.payload)
        }
    }                                      
})

export const {addRoute, deleteRoute} = routesSlice.actions

const store = configureStore({
  reducer: {
    // add reducers
    routes: routesSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const routesSelector = (state : RootState) => state.routes.routes

export default store