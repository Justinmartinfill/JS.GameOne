const serveStatic = require('serve-static')
console.log("some string")
module.exports = function (app) {
  // Use static middleware
  console.log(app)
  app.use(serveStatic('src/assets'))
}