
require('dotenv').config()
async function postExecution(repo, pullRequestNumber, executionResult) {
    const token = process.env.githubaceesstoken 
  
    const url = `https://api.github.com/repos/${repo}/issues/${pullRequestNumber}/comments`;
  
    try {
      const response = await axios.post(url, { body: executionResult }, {
        headers: {
          Authorization: `token ${token}`,
          'User-Agent': 'Your App Name',
        },
      });
  
      console.log('Comment posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting comment to pull request:', error);
    }
  }

  module.exports={
    postExecution
  }
  