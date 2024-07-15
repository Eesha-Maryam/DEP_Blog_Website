const express = require('express');
const router = express.Router();
const ControllerPost = require('./Controller/ControllerPost');

router.get('/', ControllerPost.index);
router.get('/blogs/new', ControllerPost.new);
router.post('/blogs', ControllerPost.create);
router.get('/post', ControllerPost.post);
router.get('/edit/:id', ControllerPost.edit);
router.put('/update/:id', ControllerPost.update);
router.delete('/blogs/:id', ControllerPost.delete);

module.exports = router;
