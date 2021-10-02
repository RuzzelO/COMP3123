let express = require('express')

let app = express()


//http://localhost:8089/
app.get("/hello", (req, res) => {
    res.send("<h1>Hello ExpressJS</h1>")
})

//http://localhost:8089/user?fnm=Pritesh&lnm=Patel 
app.get("/user", (req, res) => {
    let first_name = req.query.fnm
    let last_name = req.query.lnm

    let response = {
        status: 'success',
        first_name,
        last_name
    }

    res.send(response)
})


//http://localhost:8089/user/Pritesh/Patel
app.post("/user/:fname/:lname", (req, res) => {
    let first_name = req.params.fname
    let last_name = req.params.lname

    let response = {
        status: 'success',
        first_name,
        last_name
    }

    res.send(response)
})

let server = app.listen(8089, ()=> {
    let host = server.address().address
    let port = server.address().host
    console.log("server running at http://%s:%s", host, port)
})