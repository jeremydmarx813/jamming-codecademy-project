const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const SpotifyWebApi = require("spotify-web-api-node");
const path = require('path');
const mode = process.env.MODE;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET
const redirectUri = process.env.REDIRECT_URI;
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());



app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId,
    clientSecret,
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
      console.log(err);
      res.sendStatus(400)
    })
})

// console.log('production code block')
app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
// if(mode === 'production'){
// } 
// else {
//   console.log('dev code block test')
// }

app.listen(port, () => {
  console.log(`app listening at port ${port} in ${mode} mode.`);
})