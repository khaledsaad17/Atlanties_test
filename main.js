require('dotenv').config();
const  express = require('express');
const mongoose = require('mongoose');
const login_route = require('./routers/login');
const register_route = require('./routers/register');

const app = express()




app.use(express.urlencoded({extended:true}))
app.use(express.json());


// database connection
const local_db_url = process.env.local_db_url
console.log(local_db_url)
try {
    mongoose.connect(local_db_url).then(console.log("database is running"))
} catch (err) {
    console.log("error in database connection \n"+err)
}


// server listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// login route
app.use('/login',login_route)


// register route

app.use('/register',register_route)


app.get('/', (req, res) => res.send('Hello World!'))
