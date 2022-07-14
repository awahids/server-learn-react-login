const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app = express();

app.use(cookieSession(
  {
    name: 'session',
    keys: ['awhds'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
))

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:5000',
    method: 'GET, POST, PUT, DELETE',
    credentials: true
  })
)

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});