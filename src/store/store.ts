import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import {postAPI} from "../services/PostService";

const rootRedcuer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    
});

export const setupStore = () => {
    return configureStore({
        reducer: rootRedcuer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postAPI.middleware);
        }
    })
}

export type RootState = ReturnType<typeof rootRedcuer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];