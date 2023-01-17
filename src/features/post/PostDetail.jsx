import { useEffect } from 'react';
import Card from '../../components/Card';
import { selectedPostSelector, fetchPostComments, postCommentsSelector, loadingCommentsSelector} from './postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';
import CommentsLoading from '../../components/CommentsLoading';

const PostDetail = () => {

  const post = useSelector(selectedPostSelector);
  const comments = useSelector(postCommentsSelector);
  const loadingComments = useSelector(loadingCommentsSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPostComments(post.permalink));
  }, []);

  const renderCommentsLoading = () => {
    return  [...Array(5).keys()].map(item => <CommentsLoading key={item} />)
  }

  const renderComments = () => {
    return comments.map(item => (
      <fieldset key={item.id} className="comment">
        <legend><strong>{item.author}</strong> - <span>{moment.unix(item.created_utc).fromNow()} </span></legend>
        { item.body }
      </fieldset>
    ));
  }

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
            <div className="header">
              <span>Postted By:</span> { post.author } { moment.unix(post.created_utc).fromNow() }
            </div>
            <h2 className="post-title">
              { post.title }
            </h2>
            <div className="img-container">
              <img src={post.url} alt="" />
            </div>
            
            <div className="post-footer-comments">
              <hr />
              <div>
                { (loadingComments) ? renderCommentsLoading() : renderComments() }
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PostDetail;