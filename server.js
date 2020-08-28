const express=require('express');
const app=express();
const db=require('./db/model')
const passport=require('./passport')
const session=require('express-session')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
	secret:"some random text",
	resave:false,
	saveUnintializeed:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth',require('./route/auth'))
app.use('/admin',require('./route/admin'))
app.use('/api',require('./route/api'))
app.listen(3000,()=>
	console.log("http://localhost:3000")
)