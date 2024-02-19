const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

const getBadRequest = (request, response) => {
  const badRequestHTML = '<html><body><h1>400 Bad Request</h1><p>Your request is missing required parameters.</p></body></html>';
  response.writeHead(400, { 'Content-Type': 'text/html' });
  response.write(badRequestHTML);
  response.end();
};

const getNotFound = (request, response) => {
  const notFoundHTML = '<html><body><h1>404 Not Found</h1><p>The page you are looking for was not found.</p></body></html>';
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(notFoundHTML);
  response.end();
};

module.exports = {
  getIndex,
  getCSS,
  getBadRequest,
  getNotFound,
};
