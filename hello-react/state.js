const initialState = {
  counter: {
    value: 0,
    status: 'idle',
  },
  users: {
    filters: {
      text: 'ABC',
      genre: '',
    },
    data: [
      {
        id: 1,
        name: 'Toto',
        genre: 'Homme',
      },
    ],
    loading: false,
    page: 3,
  },
};

// Cette version modifie le paramètre d'entrée state (NE PAS FAIRE)
// function usersReducer(state = initialState.users, action) {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//       state.filters.text = action.value;
//       return;
//     default:
//       return state;
//   }
// }

function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: action.value,
        }
      };
    default:
      return state;
  }
}


usersReducer(initialState.users, { type: 'SET_TEXT_FILTER', value: 'ABCD' });
