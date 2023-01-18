import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const baseApi = process.env.REACT_APP_API_BASE;

export const fetchPosts = createAsyncThunk('post/fetchPost', async (category, thunkApi) => {
  thunkApi.dispatch(toggleLoading(true));

  try {
    const res = await fetch(`${baseApi}/${category || 'Popular'}.json`);
    const json = await res.json();
    thunkApi.dispatch(toggleLoading(false));
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.log(error);
    thunkApi.dispatch(toggleLoading(false));
  }
});

export const fetchPostComments = createAsyncThunk('post/fetchComments', async (permalink, thunkApi) => {
  thunkApi.dispatch(toggleLoadingComments(true));

  try {
    let perma = permalink?.substring(0, permalink.length - 1);
    // console.log(permalink);
    const res = await fetch(`${baseApi}${perma}.json`);
    const json = await res.json();
    thunkApi.dispatch(toggleLoadingComments(false));
    return json[1].data.children.map(comments => comments.data);
  } catch (error) {
    console.log(error);
    thunkApi.dispatch(toggleLoadingComments(false));
  }
});

const initialState = {
  posts: [],
  postComments: [],
  searchTerm: '',
  selectedPost: {},
  errors: [],
  loading: false,
  loadingComments: false
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    toggleLoading: (state, action) => {
      state.loading = action.payload
    },
    toggleLoadingComments: (state, action) => {
      state.loadingComments = action.payload;
    },
    setSearchTerm: (state, action ) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      // console.log(action.payload[0]);
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.errors = [...state.errors, action.payload];
    },
    [fetchPostComments.fulfilled]: (state, action) => {
      state.postComments = action.payload;
    },
    [fetchPostComments.rejected]: (state, action) => {
      state.errors = [...state.errors, action.payload];
    }
  }
});

export const {
  setSelectedPost,
  toggleLoading,
  toggleLoadingComments,
  setSearchTerm
} = postSlice.actions;

export const postsSelector = state => state.posts.posts;
export const postCommentsSelector = state => state.posts.postComments;
export const selectedPostSelector = state => state.posts.selectedPost;
export const loadingSelector = state => state.posts.loading;
export const loadingCommentsSelector = state => state.posts.loadingComments;
export const searchTermSelector = state => state.posts.searchTerm;
export const filteredPostSelector = state => {
  if (state.posts.searchTerm.trim() !== '') {
    return state.posts.posts.filter(term => term.title.toLowerCase()
      .indexOf(state.posts.searchTerm.toLowerCase()) !== -1);
  }

  return state.posts.posts;
}

export default postSlice.reducer;
