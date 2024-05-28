const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.listen(3001)

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    paddword:'',
    database:'mern'
})

app.post('/login',function(req,res){
    const name=req.body.name
    const password=req.body.password
    con.query("insert into login(name,password) values (?,?)",[name,password],(err,res)=>{
        if(err){
            throw err
        }else{
            res.send("inserted successfully")
        }
    })
})
app.get('/home', (req, res) => {
    // Serve home page content
    res.send('Welcome to the home page');
});

