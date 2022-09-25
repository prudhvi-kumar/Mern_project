const { exec } = require("child_process");
const express = require("express");
const app = express();
const port = 2002;
app.listen(port,a);


app.get("/",d)
function d(request,response) {
response.sendFile(__dirname + "/code.html");
}

function a() {
    console.log("server started");
}

app.get("/personal", c)
function c(request,response) {
    console.log(" reached personal");
}
app.get("/about", b)
function b(request, response) {
    console.log(" clicked on / ");
    response.send("hi");
}

app.get("/cmd_prompt", cmd)
function cmd(request, response) {
    let x = request.query.x;
    exec(x, (error, pass, fail) => {
    console.log(pass);
    console.log(fail);
    const result = {out: pass}
    //res = JSON.parse(result)
    console.log(result.out)
    //response.json(result[out])
    response.send(result.out);
});

}
