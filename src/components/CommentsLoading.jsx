import Skeleton from 'react-loading-skeleton';

const CommentsLoading = () => {
  return (
    <>
      <div>
        <fieldset className="comment">
          <legend style={{display: 'flex'}}><Skeleton width={20} /> - <Skeleton width={120} /></legend>
          <Skeleton count={5} width={500} />
        </fieldset>
      </div>
    </>
  );
}

export default CommentsLoading;