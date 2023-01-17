import { configureStore } from '@reduxjs/toolkit';
import postReducer from  '../features/post/postSlice';
import subRedditsReducer  from '../features/subreddit/subrreditSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    subReddits: subRedditsReducer
  },
});
