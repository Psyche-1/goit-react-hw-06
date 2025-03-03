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
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      //   const filteredContacts = state.contacts.items.filter((contact) =>
      //     contact.name.toLowerCase().includes(action.payload.trim().toLowerCase())
      //   );
      state.filters.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
