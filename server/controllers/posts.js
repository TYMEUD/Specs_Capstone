const {Post} = require("../models/posts")
const {User} = require("../models/user")

module.exports = {
  addPost: async (req, res) => {
    try {
        const {img, caption, tags, body } = req.body
        const {postId} = req.params

        await Post.create({img, caption, tags, body})

        res.sendStatus(200)
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
  },
  deletePost: async (req, res) => {
    try{
        const {img, caption, tags, body, postId } = req.body
        await Post.delete({img, caption, tags, body}, {
            where: {id: +postId}
        })
        res.sendStatus(200)


    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
  },
  getAllPosts: async (req, res) => {
    console.log('hit all posts')
    try{
        const posts = await Post.findAll()
        res.status(200).send(posts)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
  }

},
getAllUserPosts: async (req, res) => {
    try{
        const userPosts = await Posts.findAll({include: [{
            model: User,
            required: true,
            attributes: ['username']
        }]})
        res.status(200).send(posts)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
}
}
}