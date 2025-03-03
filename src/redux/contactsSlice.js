import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      //   {...state,action.payload  }
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      //   {...state,action.payload  }
      // state.contacts.items.push(action.payload);
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
      //   console.log(state);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
