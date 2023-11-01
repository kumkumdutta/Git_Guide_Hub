export default function extractCode(prBody) {
    // Search for '/execute' in the PR body
    const executeIndex = prBody.indexOf('/execute');
    
    if (executeIndex === -1) {
      // '/execute' not found, return an empty string
      return '';
    }
    
    // Extract the code following '/execute' (assuming code is written in triple backticks)
    const codeStart = prBody.indexOf('```', executeIndex);
    const codeEnd = prBody.indexOf('```', codeStart + 3);
  
    if (codeStart !== -1 && codeEnd !== -1) {
      // Extract the code between triple backticks
      const codeToExecute = prBody.slice(codeStart + 3, codeEnd).trim();
  
      // Ensure to sanitize and validate the code as needed
  
      return codeToExecute;
    }
  
    // No valid code found, return an empty string
    return '';
  }