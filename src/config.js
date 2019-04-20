module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 'b35b9b60-dd4b-4910-b002-91ed66f8944a',
    DB_URL: process.env.DB_URL || 'postgresql://dunder-mifflin@localhost/bookmarks',
  }