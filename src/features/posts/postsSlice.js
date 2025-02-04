import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'First post',
    content: 'This first post containing some random sentence.',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 1,
      heart: 0,
      rocket: 2,
      coffee: 4
    }
  }, 
  {
    id: '2',
    title: 'The Second Post',
    content: 'So I need to bring some water home because its gone.',
    date: sub(new Date(), {minutes: 55555}).toISOString(),
    reactions: {
      thumbsUp: 3,
      wow: 0,
      heart: 1,
      rocket: 0,
      coffee: 0
    }
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title, 
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;

      const existingPost = state.find(post => post.id === postId);
      if(existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
  }
});

export const selectAllPosts = state => state.posts;

export const { addPost, addReaction } = postsSlice.actions

export default postsSlice.reducer;

