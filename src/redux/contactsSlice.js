import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const exists = state.items.some(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (!exists) {
        state.items.push({
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        });
      } else {
        alert("Contact with this name already exists!");
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
