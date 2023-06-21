const initialState = {
  isloading: false,
  character: '',
}

function characterReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH_BEGIN':
      return {
        ...state,
        isloading: true,
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isloading: false,
        character: action.character[0],
      }
    case 'SEARCH_ERROR':
      return {
        ...state,
        isloading: false,
        error: action.error,

      }
    default:
      return state      
  }
}


export default characterReducer;