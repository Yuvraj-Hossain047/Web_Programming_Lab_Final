const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phonebook'
});

db.connect(err => {
  if (err) {
    console.log("DB connection error:", err);
    throw err;
  }
  console.log("MySQL connected.");
});

// Get Data for login page
app.post('/users', (req, res) => {
  const {userId, password} = req.body;
  const userInfo = `SELECT userId, userName FROM users WHERE users.userId = ? AND users.userPassword = ?`;
  let query = db.query(userInfo, [userId, password], (err,result) =>{
    if(err){
      console.log("Error from server:",err);
      throw err;
    }
    else{
      res.send(result);
    }
  });
});

// GET contacts for phonebook page
app.get('/contacts/:userId', (req, res) => {
  const userId = req.params.userId;
  const sql = 'SELECT * FROM contacts WHERE ownerUserId = ? ORDER BY contactName ASC';
  db.query(sql, [userId], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// ADD a data in phonebook
app.post('/addContact', (req, res) => {
  const { ownerUserId, contactName, contactPhone } = req.body;
  const sql = 'INSERT INTO contacts (ownerUserId, contactName, contactPhone) VALUES (?, ?, ?)';
  db.query(sql, [ownerUserId, contactName, contactPhone], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// EDIT a data in phonebook
app.put('/editContact/:contactId', (req, res) => {
  const { contactName, contactPhone } = req.body;
  const contactId = req.params.contactId;
  const sql = 'UPDATE contacts SET contactName = ?, contactPhone = ? WHERE contactId = ?';
  db.query(sql, [contactName, contactPhone, contactId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// DELETE a data in phonebook
app.delete('/deleteContact/:contactId', (req, res) => {
  const contactId = req.params.contactId;
  const sql = 'DELETE FROM contacts WHERE contactId = ?';
  db.query(sql, [contactId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});