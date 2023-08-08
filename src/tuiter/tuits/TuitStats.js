import React, { useState } from 'react';
import { FaRegComment, FaRetweet, FaThumbsDown, FaRegThumbsDown, FaRegHeart, FaShareSquare, FaHeart } from 'react-icons/fa';
import { updateTuitThunk, updateTuitDislikeThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  // Use local states to manage whether the "tuit" is liked and disliked
  const [liked, setLiked] = useState(true);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      // If already liked, then unlike
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }));
      setLiked(false);
    } else {
      // If unliked, then like
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
      setLiked(true);
      if (disliked) {
        // If it was disliked, remove the dislike
        dispatch(updateTuitDislikeThunk({ ...tuit, dislikes: tuit.dislikes - 1 }));
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      // If already disliked, then remove dislike
      dispatch(updateTuitDislikeThunk({ ...tuit, dislikes: tuit.dislikes - 1 }));
      setDisliked(false);
    } else {
      // If not disliked, then dislike
      dispatch(updateTuitDislikeThunk({ ...tuit, dislikes: tuit.dislikes + 1 }));
      setDisliked(true);
      if (liked) {
        // If it was liked, remove the like
        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }));
        setLiked(false);
      }
    }
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
        {liked ? <FaHeart className="text-danger" /> : <FaRegHeart />} {tuit.likes}
      </div>
      <div className="tuit-stat" onClick={handleDislike}>
        {disliked ? <FaThumbsDown className="text-danger" /> : <FaRegThumbsDown />} {tuit.dislikes}
      </div>
      <div className="tuit-stat">
        <FaShareSquare />
      </div>
    </div>
  );
};

export default TuitStats;
