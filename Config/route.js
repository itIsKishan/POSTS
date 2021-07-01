const express = require('express')
const router = express.Router()
const postController = require('../App/Controllers/postControler')

router.get('/api/posts',postController.list)
router.post('/api/posts',postController.create)
router.put('/api/posts/:id',postController.update)
router.delete('/api/posts/:id',postController.delete)

module.exports = router