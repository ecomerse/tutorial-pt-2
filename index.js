const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('HEY!')
});
app.listen(3000,err => { console.log('Server running on port 3000')
});
