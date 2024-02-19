const http = require('http');
const url = require('url');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  switch (parsedUrl.pathname) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/style.css':
      htmlHandler.getCSS(request, response);
      break;
    case '/getUsers':
      if (request.method === 'GET') {
        jsonHandler.getUsers(request, response);
      } else if (request.method === 'HEAD') {
        jsonHandler.getUsersMeta(request, response);
      }
      break;
    case '/notReal':
      if (request.method === 'GET') {
        jsonHandler.notFound(request, response);
      } else if (request.method === 'HEAD') {
        jsonHandler.notFoundMeta(request, response);
      }
      break;
    case '/addUser':
      if (request.method === 'POST') {
        jsonHandler.addUser(request, response);
      } else {
        jsonHandler.notFound(request, response);
      }
      break;
    default:
      jsonHandler.notFound(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);
