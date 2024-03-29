const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

// Logged in dashboard route
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({ where: { userId: req.session.userId }});
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
    // rendering with a different layout than main
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// Create new post route
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    // rendering with a different layout than main
    layout: 'dashboard',
  });
});

// Edit post route
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit-post', {
      // rendering with a different layout than main
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
