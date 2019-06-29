const express = require('express');
const pg = require('pg');
const {client,Pool} = require("pg");

const app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async (req,res) =>{

    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString: connectionString,
    })
    
    await pool.query('SELECT * FROM person', (err, res) => {
      console.log(err, res)
      pool.end()
    })

})

app.get('/home',(req,res) => {
  res.json({
    msg: 'welcome'
  })
})



app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})