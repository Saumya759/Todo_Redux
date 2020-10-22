import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";



export const todos = (state = [], action) => {
  switch (action.type) {  
    case ADD_TODO: {
        console.log(action,'sssssssssssssssssssssss')
      return {
        ...state,
        data: {
          ...state.data,
          [state.nextId]: {
            completed: false,
            content: action.payload.content,
          },
        },

        nextId: state.nextId + 1,
      };
    }
    case TOGGLE_TODO: {
      console.log(action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            completed: !state.data[action.payload.id].completed,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};
