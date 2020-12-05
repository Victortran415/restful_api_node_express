const express = require("express");
const app = express()
const PORT = 5000;
const apiRoutes = require("./routes/apiRoutes")


//NOTE: set up to receive JSON and string data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//NOTE: routes as middleware
app.use("/api", apiRoutes)

//NOTE: server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))