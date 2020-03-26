    const express=require('express');
    const BodyParser=require('Body-parser');
    const bcrypt=require('bcrypt');
    const cors = require('cors');
    const knex = require('knex');
    const register =require('./Controllers/register');
    const signin= require('./Controllers/signin');
    const profile=require('./Controllers/profile');
    const image=require('./Controllers/image');
    const db = knex({
      client: 'pg',
      connection: {
        host : '127.0.0.1', // this is local host
        user : 'postgres',
        password : '123456789',
        database : 'smart'
      }
    });
    const app=express();
    app.use(BodyParser.json());
    app.use(cors());
    app.get('/',(req,res)=>{
    res.send(database.users);
    })
    app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})
    app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})   
    app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})
    app.put('/image',(req,res)=>{image.handleImage(req,res,db)})
    app.post('/imageurl',(req,res)=>{image.HandleAPIcall(req,res)})

    app.listen(3000,()=>{
    console.log("app is running on 3000");
    })
