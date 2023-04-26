const express = require('express');
const fileUpload = require('express-fileupload');
const mysql = require('mysql');
const app = express();
 // Database connection
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test'
});
 // Middleware for file upload
app.use(fileUpload());
 // POST route for file upload
app.post('/api/upload', (req, res) => {
  const { file } = req.files;
   // Move the file to the uploads folder
  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
     // Insert file information into the database
    const sql = `INSERT INTO files (name, path) VALUES (?, ?)`;
    connection.query(sql, [file.name, `${__dirname}/uploads/${file.name}`], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
       res.send('File uploaded successfully');
    });
  });
});
 app.listen(3000, () => {
  console.log('Server started on port 3000');
});