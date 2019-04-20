function makeBookmarksArray() {
    return [
      {
        id: 1,
        title: 'Lego',
        url: 'https://www.lego.com',
        description: 'Brick it',
        rating: 5,
      },
      {
        id: 2,
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Hey Google',
        rating: 4,
      },
      {
        id: 3,
        title: 'Netflix',
        url: 'https://Netflix.com',
        description: 'Blockbusters Demise',
        rating: 5,
      },
    ]
  }
  
  module.exports = {
    makeBookmarksArray,
  }