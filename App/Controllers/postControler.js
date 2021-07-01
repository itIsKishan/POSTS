const postController = {}
const Post = require('../Models/posts')

postController.list = (req,res) =>{
    Post.find()
    .then((post) =>{
        res.json(post)
    })
    .catch((err) =>{
        res.json(err)
    })
}

postController.create = (req,res) =>{
    const body = req.body
    const Posts = new Post(body)
    Posts.save()
    .then((post) =>{
        res.json(post)
    })
    .catch((err) =>{
        res.json(err)
    })
}

postController.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Post.findByIdAndUpdate(id,body,{new : true})
    .then((post) =>{
        res.json(post)
    })
    .catch((err) =>{
        res.json(err)
    })
}

postController.delete = (req,res) =>{
    const id = req.params.id
    Post.findByIdAndDelete(id)
    .then((post) =>{
        res.json(post)
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports = postController