import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { fetchPosts } from './features/post/postSlice';
import { fillSubReddits } from './features/subreddit/subrreditSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectedSubRedditSelector } from './features/subreddit/subrreditSlice';
import SubRedditList from './features/subreddit/SubRedditList';

function App() {

  const dispatch = useDispatch();
  const selectedSubReddit = useSelector(selectedSubRedditSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fillSubReddits());
    navigate('/r/popular');
  }, []);

  // useEffect(() => {
  //   dispatch(fetchPosts(selectedSubReddit));
  // }, [selectedSubReddit]);

  return (
    <div className="grid-container">
      <header>
        <Header />
      </header>
      
      <main>
        <Outlet />
      </main>

      <aside>
        <SubRedditList />
      </aside>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
