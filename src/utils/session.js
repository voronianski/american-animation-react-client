const videoIdsKey = 'favorite-video-ids';

const getVideoIds = () => {
  let ids = [];

  try {
    const idsString = window.sessionStorage.getItem(videoIdsKey);

    if (idsString) {
      ids = JSON.parse(idsString);
    }
  } catch (err) {
    console.error(`Failed to parse "${videoIdsKey}" from sessionStorage`, err);
  }

  return ids;
};

const saveVideoIds = (ids = []) => {
  sessionStorage.setItem(videoIdsKey, JSON.stringify(ids));
};

export default {
  getVideoIds,
  saveVideoIds
};
