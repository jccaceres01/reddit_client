import { useSelector } from 'react-redux'
import { postsSelector } from './postSlice';
import Card from '../../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import shortenNumber from '../../utils/shortenNumber';
import moment from 'moment';

const Post = ({post}) => {
  const posts = useSelector(postsSelector);

  return (
    <>
      <Card className="card-container">
        <div className="post-wrapper">
          <div className="post-vote">
            <button className="vote-button-up">
              <FontAwesomeIcon icon={solid('arrow-up')} style={{width: 25, height: 25}} />
            </button>
            <span className="vote">{ shortenNumber(post.ups, 1) }</span>
            <button className="vote-button-down">
              <FontAwesomeIcon icon={solid('arrow-down')} style={{width: 25, height: 25 }} />
            </button>
          </div>
          <div className="post-content">
            <h2 className="post-title">
              { post.title }
            </h2>
            <div className="img-container">
              <img src={post.url} alt="" />
            </div>
            
            <div className="post-footer">
              <p>{ post.author }</p>
              <p>{ moment.unix(post.created_utc).fromNow() }</p>
              <span>
                <FontAwesomeIcon icon={solid('comment')} style={{marginRight: 4}} />
                { shortenNumber(post.num_comments, 1) }
              </span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Post;