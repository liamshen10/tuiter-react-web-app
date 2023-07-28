import React, { useState } from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaShareSquare, FaHeart } from 'react-icons/fa';

const TuitStats = ({ tuit }) => {
  const [liked, setLiked] = useState(true);
  const [likes, setLikes] = useState(tuit.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="tuit-stat">
        <FaRegComment /> {tuit.replies}
      </div>
      <div className="tuit-stat">
        <FaRetweet /> {tuit.retuits}
      </div>
      <div className="tuit-stat" onClick={handleLike}>
        {liked ? <FaHeart className="text-danger" /> : <FaRegHeart />} {likes}
      </div>
      <div className="tuit-stat">
        <FaShareSquare />
      </div>
    </div>
  );
};

export default TuitStats;
