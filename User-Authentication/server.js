const express = require("express");
const {pool, Pool} = require('./dbConfig')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport');

const initializePassport = require('./passportConfig')
initializePassport(passport)


const app = express()

app.set('view engine',"ejs")
app.use (express.urlencoded({extended:false})) // send the data to the server
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())


app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/users/login", checkAuthenticated, (req, res)=>{
    res.render("login")
})

// app.get("/users/logout", (req, res)=>{
//     req.logout()
//     res.redirect("/users/login")
// })

app.get("/users/logout", (req, res)=>{
    req.logout(function(err) {
        if (err) {
            console.error(err);
        }
        res.redirect("/users/login");
    });
});


app.get("/users/register", checkAuthenticated,  (req, res)=>{
    res.render("register")
})

app.get("/users/dashboard",checkNotAuthenticated, (req, res)=>{
    res.render("dashboard", {user: req.user.name})
})

app.post('/users/register',async ( req, res) =>{
    let {name, email, password, password2} = req.body;
    console.log({name, email, password, password2})

    let errors =[]

    if(!name || !email || !password || !password2){
        errors.push({ message: "please enter all the fields"})
    }
    if(password.length < 6){
        errors.push({ message: "Password most be greater than 6 characters"})
    }
    if(password != password2){
        errors.push({ message: "Password are not the same"})
    }

if(errors.length >0){
    res.render("register", {errors})

}else{
 let hashPassword= await bcrypt.hash(password,10)
 console.log(hashPassword)

 pool.query(
    `SELECT * FROM users WHERE email=$1`,
    [email], (err, results)=>{
        if(err){
            throw err
        }
        console.log("here")
        console.log(results.rows)

        if(results.length >0 ){
            errors.push({message: " user email already register"})
            res.render("register", {errors})
        }else{
            pool.query(
                `INSERT INTO users (name, email, password)
                VALUES ($1, $2, $3)
                RETURNING id password`, [name, email, hashPassword],
                (err, results)=>{
                    if(err){
                        throw err
                    }
                    console.log("here insert")
                    console.log(results.rows)
                    req.flash('success_msg',"You are now registered. Please Login")
                    res.redirect("/users/login")
            
                }
            )
        }
    }
)
}

})
 app.post("/users/login", passport.authenticate("local",{
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true

 }))


 function checkAuthenticated( req, res, next){
    if(req.isAuthenticated()){
        return res.redirect("/users/dashboard")
    }
    next()
 }

 function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/users/login")
 }


app.listen(8800, ()=>{
    console.log("running at post 8800")
})