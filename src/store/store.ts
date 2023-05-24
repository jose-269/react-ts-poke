import { configureStore } from '@reduxjs/toolkit'
import { pokemonsSlice } from './pokemons/getPokemonSlice'
// ...

export const store = configureStore({
  reducer: {
    pokemonsArr: pokemonsSlice.reducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch