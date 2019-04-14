const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Lego',
    url: 'https://www.Lego.com',
    description: 'Build it Together',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Search Google or type a URL',
    rating: 4 },
  { id: uuid(),
    title: 'Vivaldi',
    url: 'https://vivaldi.com',
    description: 'A new way to Browse',
    rating: 5 },
]

module.exports = { bookmarks }