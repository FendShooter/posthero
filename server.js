const express = require('express');
const mysql = require('mysql');
const path =require('path');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

const db= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database:"store"
})
db.connect((err) => {
  if (err) throw err;
  console.log('connected...');
  
})
app.get('/', (req, res) => {
 
  res.send('hello');
})
app.get('/db', (req, res) => {
  const sql = 'select * from ??';
  db.query(sql, ['employees'], (err, results) => {
    
    res.send(results);
    
  })
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server runnig...')
)