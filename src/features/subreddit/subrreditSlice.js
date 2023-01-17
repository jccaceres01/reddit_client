import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fillSubReddits = createAsyncThunk('subreddits/fillSubReddits', async () => {
  try {
    const subRedditRes = await fetch(`${process.env.REACT_APP_API_BASE}/subreddits.json`);
    const subRedditData = await subRedditRes.json();

    return subRedditData.data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  subReddits: [],
  errors: []
};

const subredditSlice =  createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    setSelectedSubReddit: (state, action) => {
      state.selectedSubReddit = action.payload;
    }
  },
  extraReducers: {
    [fillSubReddits.fulfilled]: (state, action) => {
      state.subReddits = action.payload;
    }
  }
});

export const {
  setSelectedSubReddit
} = subredditSlice.actions;

export const subRedditsSelector = (state) => state.subReddits.subReddits;
export const selectedSubRedditSelector = (state) => state.subReddits
  .selectedSubReddit;

export default subredditSlice.reducer;
