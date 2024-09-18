const { helloWorldHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: helloWorldHandler,
  },
];

module.exports = routes;
