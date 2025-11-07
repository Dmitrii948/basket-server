const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Используем порт из переменной окружения или по умолчанию 8000
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port, 'localhost', () => {
  console.log(`JSON Server запущен по адресу http://localhost:${port}`);
});
