import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://67516657d1983b9597b2978d.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
