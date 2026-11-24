const app = require('./app');

app.listen(3001, '127.0.0.1', () => {
  console.log('API do Bolo disponível em http://127.0.0.1:3001');
});
