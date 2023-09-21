import { createSlice } from "@reduxjs/toolkit";
export const nameSlice = createSlice({
  name: "names",
  initialState: "",
  reducers: {
    setName: function (state, action) {
      return action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
