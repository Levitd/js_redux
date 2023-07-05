import taskReducer from "./task";
import { loger } from "./middleware/loger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReducer from "./errors";

const rootReducer = combineReducers({
    errors: errorReducer,
    tasks: taskReducer
})
function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loger),
        devTools: process.env.NODE_ENV !== 'production',
    }
    );
}

export default createStore;
