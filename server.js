const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const axios = require('axios');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const SpotifyWebApi = require("spotify-web-api-node");


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

app.post('/', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
})