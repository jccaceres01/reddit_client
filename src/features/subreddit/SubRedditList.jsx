import { subRedditsSelector, setSelectedSubReddit } from './subrreditSlice';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import reddit from '../../imgs/reddit.png';
import Card from '../../components/Card';
import { setSearchTerm } from '../post/postSlice';
import { showMenuSelector, toggleShowMenu } from '../rendering/renderingSlice';

const SubRedditList = () => {

  const subReddits = useSelector(subRedditsSelector);
  const showMenu = useSelector(showMenuSelector);
  const dispatch = useDispatch();

  const selectSubReddit = (subreddit) => {
    dispatch(setSearchTerm(''));
    dispatch(setSelectedSubReddit(subreddit.url));
  }

  return (
    <>
      { 
        showMenu && 
          <Card className="subreddit-card-container">
          
          <h2 className="subreddit-title">Sub Reddits</h2>
          <ul className="subreddit-list">
            { subReddits.map(subReddit =>
            <li
              key={subReddit.id}
              onClick={() => selectSubReddit(subReddit)}
            >
              <Link to={subReddit.url}>
                <img src={subReddit.icon_img || reddit } alt="" />
                <span>{ subReddit.display_name }</span>
              </Link>
            </li>)}
          </ul>
        </Card>
      }
    </>
  );
}

export default SubRedditList;