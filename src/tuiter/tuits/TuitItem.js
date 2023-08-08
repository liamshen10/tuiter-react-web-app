import React from 'react';
import TuitStats from './TuitStats';
import { FaCheckCircle } from 'react-icons/fa';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
import { FiX } from 'react-icons/fi'; 

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img width={50} className="rounded-circle" src={`/images/${tuit.image}`} alt="profile" />
        </div>
        <div className="col-11">
        <FiX 
              className="float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
              style={{cursor: "pointer"}}
            />
          <div className="d-flex align-items-center">
            <div className="fw-bold mr-1">{tuit.userName}</div>
            <FaCheckCircle className="text-primary"/>
            <div className="mx-2">{tuit.handle}</div>
            <div className="text-muted mr-1">&bull;</div>
            <div>{tuit.time}</div>
          </div>
          <div className="my-2">{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
