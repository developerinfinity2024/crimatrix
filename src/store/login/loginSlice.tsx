import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Service } from "../../config/commonFetch"
export interface UserState {
  loading: boolean;
  response: string[];
  error: string | undefined;
}
const initialState: UserState = {
  loading: false,
  response: [],
  error: undefined,
};


export const userLogin = createAsyncThunk(
  "userLogin",
  async() => {
    try {
      const response = await Service.commonPost("your-url", "");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
)
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state:any, action:any) => {
      state.response = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.response = [];
      state.error = action.error.message;
    });
  },
})
export const { login } = loginSlice.actions;
export default loginSlice.reducer;
