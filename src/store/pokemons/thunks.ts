

import { AnyAction } from 'redux'
// import { sendMessage } from './store/chat/actions'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

import axios from "axios";

import { getPokemons } from "./getPokemonSlice";

export const getData = (): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
    
		try {
      const req = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const data = await req.data.results
			dispatch(getPokemons(data))
		} catch (error) {
			console.log(error);
		}
	};
};