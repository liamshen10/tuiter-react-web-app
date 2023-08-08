import React, { useState } from 'react';
import { FaRegComment, FaRetweet, FaThumbsDown, FaRegHeart, FaShareSquare, FaHeart } from 'react-icons/fa';
import { updateTuitDislikeThunk, updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {


const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="tuit-stat">
        <FaRegComment /> {tuit.replies}
      </div>
      <div className="tuit-stat">
        <FaRetweet /> {tuit.retuits}
      </div>
      <div className="tuit-stat" onClick={() =>
    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}>
       <FaHeart className="text-danger" /> {tuit.likes}
      </div>
      <div className="tuit-stat" onClick={() =>
    dispatch(updateTuitDislikeThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))}>
       <FaThumbsDown className="text-danger" /> {tuit.dislikes}
      </div>
      <div className="tuit-stat">
        <FaShareSquare />
      </div>
    </div>
  );
};

export default TuitStats;
