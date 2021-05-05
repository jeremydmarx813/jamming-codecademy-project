const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const axios = require('axios');
const clientId = process.env.SPOTIFY_CLIENT_ID;


app.use(cors());

// const testToken = async () => {
//   try {
//     await axios.get(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
//   } catch (err) {
    
//   }
// }


app.get('/', (req, res) => {
    console.log('test req received', req.body);
    res.send({
      'test': 'test'
    })
})

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
})