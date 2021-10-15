const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) =>{
    console.log(response.data);
    res.send(response.data);
  });
});

app.listen(3000, () => {
  console.log('api iniciou')
});
