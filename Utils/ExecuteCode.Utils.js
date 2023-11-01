const axios = require('axios');

async function executeCode(code) {
  const result = await axios.post('PISTON_API_ENDPOINT', {
    language: 'python', // Replace with the desired programming language
    code: code,
  });

  return result.data.output;
}
module.exports={
    executeCode
}
