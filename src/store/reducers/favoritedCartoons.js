import {
  ADD_FAVORITED_CARTOON,
  REMOVE_FAVORITED_CARTOON,
  POPULATE_FAVORITED_CARTOONS
} from '../actions/types';

const favoritedCartoons = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITED_CARTOON:
      return [action.id, ...state.filter(id => id !== action.id)];
    case REMOVE_FAVORITED_CARTOON:
      return [...state.filter(id => id !== action.id)];
    case POPULATE_FAVORITED_CARTOONS:
      return [...action.ids];
    default:
      return state;
  }
};

export default favoritedCartoons;
