import React from 'react';
import axios from 'axios'

const Rebuild = () => {

  const makeTheCall = () => {
    axios.post('https://api.netlify.com/build_hooks/5e81a13dba4c82f7cdddcce9')
    .then(response => {
      window.alert('Build started');
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <button onClick={() => makeTheCall()}>Rebuild website</button>
  );
};

export default Rebuild;
