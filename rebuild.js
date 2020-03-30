const axios = require('axios');

axios.post('https://api.netlify.com/build_hooks/5e81a13dba4c82f7cdddcce9')
  .then(response => {
    console.log('Build started');
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  