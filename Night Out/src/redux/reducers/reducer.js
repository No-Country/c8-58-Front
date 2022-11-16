import { GET_USER, POST_USER } from "../actions/action";

const initialState = {
  Usuario: [],
};

export function reducers(state = initialState, { payload, type }) {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        Usuario: payload,
      };
    case POST_USER:
      return {
        ...state,
        Usuario: payload,
      };
    default:
      return state;
  }
}

//export default reducers;
