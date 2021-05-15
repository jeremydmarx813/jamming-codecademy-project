const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
// const bodyParser = require('body-parser'); 
// const axios = require('axios');
// const clientId = process.env.SPOTIFY_CLIENT_ID;
const SpotifyWebApi = require("spotify-web-api-node");


const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
// app.use(express.urlencoded())


app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
  // console.log(req.body);
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  // console.log(spotifyApi);
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      // console.log('test')
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400)
    })
})

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
})