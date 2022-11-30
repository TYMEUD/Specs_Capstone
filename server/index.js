require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require ('./util/database')
const {User} = require ("./models/user")
const {Post} = require ("./models/posts")
const {SavedPosts} = require ("./models/savedPosts")

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(SavedPosts)
Post.hasMany(SavedPosts)
SavedPosts.belongsTo(User)
SavedPosts.belongsTo(Post)

const {register, login} = require ('./controllers/authCtrl')

app.post('/register',  register)
app.post('/login', login)

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log(`Server running on ${SERVER_PORT}!`))
})
.catch(err => console.log(err))