const Blog = require('../models/Post');

// Display all blogs on the index page(Home)
exports.index = (req, res) => {
    Blog.all((err, blogs) => {
        if (err) {
            res.render('error', { message: 'Error fetching blogs', error: err });
        } else {
            res.render('index', { blogs });
        }
    });
};

exports.new = (req, res) => {
    res.render('new');
};

// Compose a new blog(post)
exports.create = (req, res) => {
    const { title, content } = req.body;
    const blog = { title, content };
    //flash shows the success message or error message after composeing blog successfully
    Blog.create(blog, (err, result) => {
        if (err) {
            req.flash('error', 'Error creating blog');
        } else {
            req.flash('success', 'Blog created successfully!');
        }
        res.redirect('/post');
    });
};

// Edit blog 
exports.edit = (req, res) => {
    const { id } = req.params;
    Blog.find(id, (err, blog) => {
        if (err) {
            res.render('error', { message: 'Error fetching blog', error: err });
        } else if (!blog) {
            res.render('error', { message: 'Blog not found', error: {} });
        } else {
            res.render('edit', { blog });
        }
    });
};

// Updation in blog post
exports.update = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlog = { title, content };

    Blog.update(id, updatedBlog, (err, result) => {
        //flash shows the success message or error message after editing successfully
        if (err) {
            req.flash('error', 'Error updating blog');
        } else {
            req.flash('success', 'Blog updated successfully!');
        }
        res.redirect('/post');
    });
};

// Deletes a blog 
exports.delete = (req, res) => {
    const { id } = req.params;
    //flash shows the success message or error message after feleting blog successfully
    Blog.delete(id, (err, result) => {
        if (err) {
            req.flash('error', 'Error deleting blog');
        } else {
            req.flash('success', 'Blog deleted successfully!');
        }
        res.redirect('/post');
    });
};

// Displays all blogs in the post page
exports.post = (req, res) => {
    Blog.all((err, blogs) => {
        if (err) {
            res.render('error', { message: 'Error fetching blogs', error: err });
        } else {
            //all flash messages shown in post page
            res.render('post', { blogs, success: req.flash('success'), error: req.flash('error') });
        }
    });
};
