const express = require('express');
const crypto = require('crypto');
const { default: verifySignature } = require('./Utils/VerifySignature.Utils');
const { default: extractCode } = require('./Utils/ExtractCode.Utils');
const { executeCode } = require('./Utils/ExecuteCode.Utils');
const { postExecution } = require('./Utils/PostExecution.Utils');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post('/webhook', (req, res) => {
    const payload = req.body;
    const signature = req.header('X-Hub-Signature');
  
   
    if (!verifySignature(signature, payload)) {
      return res.status(401).send('Unauthorized');
    }
  
    
    if (prBody.includes('/execute')) {

        const codeToExecute = extractCode(prBody);
  
        
        const executionResult = executeCode(codeToExecute);
  
        
        postExecution(payload.repository.full_name, payload.number, executionResult);
      }
  
    res.status(200).send('Webhook received');
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
