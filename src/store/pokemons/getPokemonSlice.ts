import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { pokemonsType } from '../../interfaces/pokemons';


// Define a type for the slice state
interface pokemonsState {
	pokemons: pokemonsType[]
}

// Define the initial state using that type
const initialState: pokemonsState = {
	pokemons: [],
}

export const pokemonsSlice = createSlice({
	name: 'pokemonsSlice',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		getPokemons: (state: pokemonsState, action: PayloadAction<pokemonsType[]>) => {
			state.pokemons = action.payload;
			console.log(action.payload)
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
});

export const { getPokemons } = pokemonsSlice.actions;

export const pokemons = (state: RootState) => state.pokemonsArr.pokemons;

export default pokemonsSlice.reducer;