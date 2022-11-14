/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga>. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/express-request-headers-filter/LICENSE
 */

/**
 * Truncate unrequired headers from response and apply it to express response
 * @param {request.Request} req
 * @param {express.Response} res
 * @param {string[]} headersToSave
 * @return {void}
 */
function expressRequestHeaders(req, res, headersToSave) {
  req.on('response', (reply) => {
    // Back-up all required headers
    const savedHeaders = headersToSave
      ? headersToSave.map(header => [header, reply.caseless.get(header)])
      : Object.entries(reply.headers);

    // Clean-up reply headers
    for (let k in reply.headers) delete reply.headers[k];

    // Apply saved headers to response
    savedHeaders.map(header => {
      res.set(header[0], header[1]);
    });
  });
}

module.exports = expressRequestHeaders;
