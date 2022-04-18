const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');
const cors = require('cors');
const bodyparser = require('body-parser')
const path = require('path')
const fs  = require('fs')
const https = require('https')


const PORT = process.env.PORT || 5000

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(cors())

const transporter = nodemailer.createTransport(sendGridTransport({
  auth:{
    api_key: process.env.api_key 
  }
}))

app.post('/send' , cors() , async(req,res) => {
  let {name , message ,contact,email} = req.body
  await transporter.sendMail({
    to : 'nikhilsinghns01@gmail.com',
    from: 'nsbooks07@gmail.com',
    subject : 'Contact Details',     
    html: `<h1> My name is ${name} </h1>          
            <p> ${message} </p>
            <p>My Contact Details are : ${contact} my email id is  : ${email}
            </p>`
  }).then(res => {
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
})

// Serve static assests if in production/

if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))
  app.get('*' , (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(PORT , () => {
  console.log('Server Running')
})