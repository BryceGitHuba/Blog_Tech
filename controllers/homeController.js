const { Post } = require('../models');

exports.getHomePage = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render('home', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};