var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var User = require('./models/User.js')
var Post = require('./models/Post.js')
var auth = require('./auth.js')


mongoose.Promise = Promise;

var app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/posts/:id', async (req,res) => {
    var author = req.params.id
    var posts = await Post.find({author})

    try {
        res.send(posts);    
    } catch (error) {
        console.error(error)
        res.sendStatus('500')
    }
})

app.post('/post', (req,res) => {
    var postData = req.body
    postData.author = '5ba3a971c7f1b6605011f64a'

    console.log(postData)

    var post = new Post(postData)

    post.save((err, result) => {
        if(err) {
            console.error('saving post error')
            return res.status(500).send({message: 'Saving post error'})
        }

        res.sendStatus(200)
    })    
})

app.get('/users', async (req,res) => {
    try {
        var users = await User.find({}, '-pwd -__v');
        res.send(users);    
    } catch (error) {
        console.error(error)
        res.sendStatus('500')
    }

})

app.get('/profile/:id', async (req,res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v');
        res.send(user);    
    } catch (error) {
        console.error(error)
        res.sendStatus('500')
    }
})

mongoose.connect('mongodb://test:test123@ds261332.mlab.com:61332/pssocial', { useNewUrlParser: true }, (err) => {
    if(!err)
        console.log("connected to mongo")
})

app.use('/auth', auth)

app.listen(3000)
