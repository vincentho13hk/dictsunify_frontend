import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./slices/wordSlice";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
const middlewares = [loggerMiddleware, thunkMiddleware];
const reducer = {
  word: wordReducer,
};
export const store = configureStore({
  reducer: reducer,
  middleware: middlewares,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
