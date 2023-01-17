import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PostList from '../features/post/PostList';
import PostDetail from '../features/post/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'r/:subreddit',
        element: <PostList />,
      },
      {
        path: 'r/:subreddit/comments/:post_id/:title',
        element: <PostDetail />
      }
    ]
  }
]);

export default router;
