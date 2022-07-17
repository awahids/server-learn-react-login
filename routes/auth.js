const router = require('express').Router();
const passport = require('passport');

router.get('/login/success', (req, res) => {
  if(req.user) {
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: req.user,
      cookies: req.cookies
    });
  }
})

router.get('/login/failure', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'Login failed',
  });
})

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({
    success: true,
    message: 'Logout successful',
  });
  res.redirect('http://localhost:3000/');
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: '/login/failure'
}))

router.get('/github', passport.authenticate('github', {
  scope: ['profile']
}))

router.get('/github/callback', passport.authenticate('github', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: '/login/failure'
}))

router.get('/twitter', passport.authenticate('twitter', {
  scope: ['profile']
}))

router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: '/login/failure'
}))

module.exports = router;