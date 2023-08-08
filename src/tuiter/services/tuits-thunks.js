import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";

export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
);

export const updateTuitDislikeThunk =
  createAsyncThunk(
    'tuits/updateDislikeTuit',
    async (tuit) =>
      await service.updateDislikeTuit(tuit)
)


export const findTuitsThunk = createAsyncThunk(
 "tuits/findTuits",
 async () => await service.findTuits()
);

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
      const newTuit = await service.createTuit(tuit)
      return newTuit
  })
  

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
  })
  