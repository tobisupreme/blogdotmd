const express = require("express")
const app = express()

const PORT = 8020
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
