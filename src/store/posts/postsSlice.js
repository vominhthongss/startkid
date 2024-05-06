import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";

const initialState = {
  posts: undefined,
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await api.get("/api/health-posts");
    if (response.data) {
      return response.data.post;
    }
  } catch (error) {
    throw error;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const { posts } = action.payload;
      state.posts = posts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
