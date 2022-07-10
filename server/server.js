const path = require('path');
const express = require('express');
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 3000;
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "..", "build", "index.html"))
    );
} else {

    app.get('/', (req, res) => {
        res.send('Hello Nitish!')
    });
}

app.listen(port, () => {
    console.log(`Applistening on port ${port}`)
})