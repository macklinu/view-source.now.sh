const { parse } = require('url')

/**
 * The HTTP request handler for fetching and returning a URL's source.
 *
 * @param {import("http").ClientRequest} req
 * @param {import("http").ServerResponse} res
 */
const viewSourceHandler = (req, res) => {
  console.log(parse(req.url))
  res.statusCode = 200
  res.end('<html><body><h1>Hello from view-source.now.sh</body></html>')
}

module.exports = viewSourceHandler
