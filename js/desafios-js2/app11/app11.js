const ex = require('express');

const app = ex();

app.get('/page', (req, res) => {
  res.send('servidor iniciado pela porta 3000');
  return res.send.json({
    metodo: 'get',
    client: 'microsoft',
  });
});

app.post('/', (req, res) => {
  res.send('testando post');
  return res.send.json({
    metodo: 'post',
    client: 'GFT',
  });
});

app.put('/', (req, res) => {
  res.send('tesnando put');
  return res.status.json({
    metodo: 'put',
    client: 'microsoft',
  });
});

app.listen(3000, () => {
  console.log('servidor ativo na porta 3000');
});
