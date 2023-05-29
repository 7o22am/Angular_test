const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
 

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get('/', function (req, res) {
    res.send("welcome to server")
})

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const user = { username, email, password };
 console.log(JSON.stringify(user));
    //localStorage.setItem('user', JSON.stringify(user));
  res.json({ message: 'user registered successfully' });
});

//Error MW
app.use((error, request, response, next) => {
    response.status(500).json({ message: "error : " + error });
})
