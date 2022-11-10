const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.json({
    status: 'OK',
    message: 'This is index of api',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})