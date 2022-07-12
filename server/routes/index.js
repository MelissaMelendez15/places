module.exports = app => {

  // Base URLS
  app.use('/api', require('./sites.routes.js'))
  app.use('/api', require('./auth.routes.js'))
  app.use('/api', require('./comment.routes.js'))
  app.use('/api', require('./rating.routes.js'))
  app.use('/api/files', require('./file.routes'))
}
