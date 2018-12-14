import {
  ADD_FAVORITED_CARTOON,
  REMOVE_FAVORITED_CARTOON,
  POPULATE_FAVORITED_CARTOONS
} from './types';

export const addFavoritedCartoon = videoId => ({
  type: ADD_FAVORITED_CARTOON,
  id: videoId
});

export const removeFavoritedCartoon = videoId => ({
  type: REMOVE_FAVORITED_CARTOON,
  id: videoId
});

export const populateFavoritedCartoons = videoIds => ({
  type: POPULATE_FAVORITED_CARTOONS,
  ids: videoIds
});
