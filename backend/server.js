const config = require('./.env')
const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json());
const mongoose = require("mongoose");
const Items = require("./schemes/Items");
const Users = require("./schemes/Users");
const bcrypt = require("bcrypt");
const { log } = require('console');
const saltRounds = 10

mongoose.connect(`mongodb+srv://${process.env.uName}:${process.env.password}@cluster0.kqamisi.mongodb.net/webshop`)
app.use(cors())


app.post('/login', async (req, res) => {
    console.log(await req.body.email)
    const email = req.body.email;
    let password = req.body.password;
    try {
        const user = await Users.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        res.json({ success: passwordMatch });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.post('/register', async (req, res) => {
    const email = req.body.email;
    let password = req.body.password
    let newUser = Users

    bcrypt
    .genSalt(saltRounds)
    .then(salt => {
      console.log('Salt: ', salt)
      return bcrypt.hash(password, salt)
    })
    .then(hash => {
        newUser = new Users({
            email: email,
            password: hash
        });
        newUser.save()
    })
    .catch(err => console.error(err.message));

    
    res.json(newUser);
})

app.post('/product', async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const active = req.body.active;

    let newItem = Items

    newItem = new Items({
        name: name,
        price: price,
        image: image,
        active: active
    })
    
    newItem.save()

    res.json(newItem);
})

app.get('/products', async (req, res) => {
    const productList = await Items.find({active: true})

    res.json(productList);
})

app.listen(3001, () => console.log('Server started on port 3001'));