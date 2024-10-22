/**
 * Set general header on response.
 *
 * @return {Function}
 * @api public
 */
module.exports = function header(headers) {
  headers = headers || {};
  if ('object' !== typeof headers || require('util').isArray(headers)) {
    throw new Error('headers should be object, like {"key": "value"}');
  }

  return function (req, res, next) {
    if (headers) {
      for (var key in headers) {
        if (Object.hasOwnProperty(key)) continue;
        var value = headers[key];
        if (null !== value) {
          res.setHeader(key, value);
        } else {
          res.removeHeader(key);
        }
      }
    }
    next();
  }
};
