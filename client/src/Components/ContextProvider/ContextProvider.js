import React, { createContext, useReducer } from 'react';

export const ProjectContext = createContext();

const stateObj = {
	        term                      : '',
			accessToken               : '',
		    searchResults             : [],
			playlistName              : '',
			playlistTracks            : [],
			userInfo                  : {}
}

const contextReducer = (state, action) => {
   switch(action.type) {
	case "UPDATE_TERM":
		return {
		  ...state,
		  term: action.payload
		};
	case "UPDATE_PLAYLIST_NAME":
			return {
			  ...state,
			  playlistName: action.payload
			};
	case "ADD_PLAYLIST_TRACK":
			return {
				...state,
				playlistTracks: [...state.playlistTracks, action.payload]
				};
	 case "REMOVE_PLAYLIST_TRACK":
		  return {
			  ...state,
			  playlistTracks: [...state.playlistTracks].filter(e => e.id !== action.payload)
		  }
	 case "RESET_PLAYLIST":
		   return {
			   ...state,
			   term          : '',
			   searchResults : [],
			   playlistName   : '',
			   playlistTracks: []
		   }
	 case "ACCESS_TOKEN":
		 return {
			 ...state,
			 accessToken: action.payload
		 }
	case "USER_INFO":
		 return {
			 ...state,
			 userInfo: action.payload
			}
	 case 'SEARCH_RESULTS':
		 return {
			 ...state,
            searchResults: action.payload
		 }
	 default:
		throw new Error();
   }
}

export const ContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(contextReducer, stateObj);
   
   return (
	   <ProjectContext.Provider value={[state, dispatch]}>
            {children}
	   </ProjectContext.Provider>
   )
}