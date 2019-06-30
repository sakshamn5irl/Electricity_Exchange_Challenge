var mysql = require('mysql');
const express  = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

 var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPass',
  database: 'back-end',
  insecureAuth : true
 });

con.connect(function(err) {
  if (!err) 
  console.log("Connected!");
  else 
  console.log("Not Connected!");
});

app.listen(3000,()=>console.log("Server is on 3000"));

//Question1 for updating the values every second
app.put('/sitepower',(res,req)=>{
    function intervalFunc() {
        con.query("UPDATE site_power SET power =  FLOOR(rand() * 1000) + 1, time_sent = CURRENT_TIMESTAMP \
        where id > 0;",(err,rows,fields) =>{
           if(!err){ 
            console.log(rows);
           // req.write(" "+ rows);
         }
          
           else
           console.log(err);

           
       })
       
      }
     
      setInterval(intervalFunc, 1000);
})

app.put('/dsus_power',(res,req)=>{
    function intervalFunc() {
        con.query("call build_list();",(err,rows,fields) =>{
                  
            if(!err){ 
                console.log(rows);
            }
          
           else
           console.log(err);

           
       })
       
      }
     
      setInterval(intervalFunc, 1000);
})

