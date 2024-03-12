const { Post } = require('../models');

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const userPosts = await Post.findAll({ where: { UserId: userId } });
    res.render('dashboard', { userPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.session.user.id;
    const newPost = await Post.create({ title, content, UserId: userId });
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.session.user.id;
    await Post.destroy({ where: { id: postId, UserId: userId } });
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};