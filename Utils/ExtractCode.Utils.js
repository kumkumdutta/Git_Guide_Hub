 function extractCode(prBody) {
    
    const executeIndex = prBody.indexOf('/execute');
    
    if (executeIndex === -1) {
      
      return '';
    }
    
    
    const codeStart = prBody.indexOf('```', executeIndex);
    const codeEnd = prBody.indexOf('```', codeStart + 3);
  
    if (codeStart !== -1 && codeEnd !== -1) {
      
      const codeToExecute = prBody.slice(codeStart + 3, codeEnd).trim();
  
      
  
      return codeToExecute;
    }
  
   
    return '';
  }

  module.exports={
    extractCode
  }