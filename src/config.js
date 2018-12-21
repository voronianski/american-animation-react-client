const config = {
  apiUrl:
    process.env.REACT_APP_API_URL ||
    'https://american-animation-api.herokuapp.com/graphql',
  cacheKey: process.env.REACT_APP_CACHE_KEY || 'american-animation-cache',

  // https://en.wikipedia.org/wiki/The_50_Greatest_Cartoons
  fiftyGreatest: {
    title: 'The 50 Greatest Cartoons',
    description:
      'List of animated shorts from the Golden Age period that were mentioned in the 1994 book "The 50 Greatest Cartoons: As Selected by 1,000 Animation Professionals" by Jerry Beck.',
    ids: [
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
  },

  // https://en.wikipedia.org/wiki/Red_(Tex_Avery)
  texAveryRed: {
    title: `Tex Avery's Red`,
    description: `List of seven animated shorts that were produced during the Golden Age period and feature popular Red character, nightclub singer and dancer created by Tex Avery in MGM studio.`,
    ids: [
      'KV6Qq8B3cX',
      'S3Zwct0aH',
      'EH26BGFx7',
      'zxGrQjdmwJ',
      'gE6q1AUIO',
      'NXp0EaraK',
      'cwEcHEt6O_'
    ]
  }
};

export default config;
