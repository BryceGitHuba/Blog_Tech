const { Post } = require('../models');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.session.user.id; // Assuming you have stored user information in session

    const newPost = await Post.create({
      title,
      content,
      UserId: userId
    });

    res.redirect('/dashboard'); // Redirect to dashboard after successful post creation
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.session.user.id; // Assuming you have stored user information in session

    await Post.destroy({
      where: {
        id: postId,
        UserId: userId
      }
    });

    res.redirect('/dashboard'); // Redirect to dashboard after successful post deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.session.user.id; // Assuming you have stored user information in session
    const { title, content } = req.body;

    await Post.update(
      { title, content },
      {
        where: {
          id: postId,
          UserId: userId
        }
      }
    );

    res.redirect('/dashboard'); // Redirect to dashboard after successful post update
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};