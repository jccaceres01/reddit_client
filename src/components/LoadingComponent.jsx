import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Card from '../components/Card';
import Skeleton from 'react-loading-skeleton';

const LoadingComponent = () => {
  return (
    <>
      <Card className="card-container" style={{ backgroundColor: 'red' }}>
        <div className="post-wrapper">
          <div className="post-vote">
            <button className="vote-button-up">
              <Skeleton radius={8} width={20} height={20} />
            </button>
            <span className="vote"><Skeleton width={16} height={12} /></span>
            <button className="vote-button-down">
              <Skeleton radius={8} width={20} height={20} />
            </button>
          </div>
          <div className="post-content">
            <h2 className="post-title">
              <Skeleton height={30} width={'44rem'} />
            </h2>
            <div className="img-container">
              <Skeleton count={8} />
            </div>
            
            <div className="post-footer">
              <p><Skeleton width={120} /></p>
              <p><Skeleton width={120} /></p>
              <span>
                <FontAwesomeIcon icon={solid('comment')} style={{marginRight: 4}} />
                <Skeleton width={40} />
              </span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default LoadingComponent;