import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    name: 'Sindrezoth',
    bio: "I'm sindrezoth, hello.",
    postsIds: [

    ]
  },
  {
    id: nanoid(),
    name: 'Lolita',
    bio: "I'm Lolita, hello.",
    postsIds: [

    ]
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(postsIds) {

      }
    }
  }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
