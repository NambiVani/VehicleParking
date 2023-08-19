const express = require("express");
const app = express();
const PORT = 1122;

app.listen(PORT,()=>{
    console.log("Server Runing At PORT  " +PORT);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/vehicleParking.html');
  });