const express = require('express');
const crypto = require('crypto');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});