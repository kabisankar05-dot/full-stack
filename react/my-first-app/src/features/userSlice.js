import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    password: "",
  },
  users: [], // 👈 final array store
  theme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },

    submitUser: (state) => {
      state.users.push(state.formData); // 👈 array push
      state.formData = { name: "", email: "", phone: "", password: "" };
    },

    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setInput, submitUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;