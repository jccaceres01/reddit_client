import Post from './Post';
import { filteredPostSelector, fetchPosts, loadingSelector, setSelectedPost, searchTermSelector, setSearchTerm  } from './postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingComponent from '../../components/LoadingComponent';

const renderMatchTerm = (dispatch) => {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
    <h1>Term not match any post</h1>
    <button className="btn" onClick={() => dispatch(setSearchTerm(''))}>Clear Search</button>
  </div>
}

const renderPosts = (posts, loadingPost, selectPost) => {
  return <div>
    {
      (loadingPost) 
      ? [...Array(10).keys()].map((item, index) => <LoadingComponent key={index} />)
      : posts.map((post, index) => <a className="link" onClick={() => selectPost(post)} key={index}><Post post={post} /></a>)
    }
  </div>
}

const PostList = () => {
  const baseUrl = process.env.REACT_APP_API_BASE;
  const posts = useSelector(filteredPostSelector);
  const searchTerm = useSelector(searchTermSelector);
  const dispatch = useDispatch();
  const { subreddit } = useParams();
  const loadingPost = useSelector(loadingSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts(`/r/${subreddit}`));
  }, [subreddit]);

  const selectPost = (post) => {
    dispatch(setSelectedPost(post));
    navigate(post.permalink);
  }

  if (searchTerm.trim() === '' && posts.length > 0) {
    return renderPosts(posts, loadingPost, selectPost);
  } else if(searchTerm !== '' && posts.length > 0) {
    return renderPosts(posts, loadingPost, selectPost);
  }else if(searchTerm !== '' && posts.length <= 0) {
    return renderMatchTerm(dispatch);
  } 
}

export default PostList;