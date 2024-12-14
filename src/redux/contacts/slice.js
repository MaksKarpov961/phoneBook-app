import { createSlice } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContacts,
  editContacts,
  fetchContacts,
} from "./operations";

const initialState = {
  contacts: {
    items: [],
  },
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(editContacts.fulfilled, (state, { payload }) => {
        const item = state.contacts.items.find(
          (item) => item.id === payload.id
        );
        item.name = payload.name;
        item.number = payload.number;
      });
  },
});

export default contactSlice.reducer;
