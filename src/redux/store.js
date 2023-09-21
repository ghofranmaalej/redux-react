import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import nameSlice from "./nameSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    names: nameSlice,
  },
});
