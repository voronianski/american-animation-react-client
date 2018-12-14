const config = {
  apiUrl:
    process.env.REACT_APP_API_URL ||
    'https://american-animation-api.herokuapp.com/graphql',
  cacheKey: process.env.REACT_APP_CACHE_KEY || 'american-animation-cache',

  // https://en.wikipedia.org/wiki/The_50_Greatest_Cartoons
  fiftyGreatestIds: [
    '9OxQsvoFyG', // 1
    'yiOzqsYwkI', // 2
    'hFL-2QDZo', // 3
    'KV6Qq8B3cX', // 7
    'EQdgAoAEl', // 10
    'YcbwIeKl0z', // 12
    'BhNiP9I5zs', // 16
    'y_OflTbOKY', // 17
    'aWPiHWFm5G', // 22
    'EH26BGFx7', // 23
    'hub4tFxaW-' // 31
  ]
};

export default config;
