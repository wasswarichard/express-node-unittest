const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
// app.use(require('body-parser').json({ limit: '100mb' }));
// app.use("/", require("./routes"));
// app.use("/employees", require("./routes"));
app.use("/employees", require("./routes/employees/v1a"));
const port = process.env.PORT || 3002;
const hostname = 'localhost';
app.listen(port, err => {
    if(err){
        return console.log("Error", err)
    }
    console.log(`Backend Server running on http://${hostname}:${port} ...`)
});