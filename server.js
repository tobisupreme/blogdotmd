const express = require("express")
const articleRouter = require("./routes/articles")
const app = express()

app.set("view engine", "ejs")

app.use("/articles/", articleRouter)

app.get("/", (req, res) => {
  const articles = [
    {
      title: "The first of it",
      createdAt: new Date(),
      description: "We have described!",
    },
    {
      title: "The second of it",
      createdAt: new Date(),
      description: "We have described, again!",
    },
  ]
  res.render("articles/index", { articles: articles })
})

const PORT = 8020
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
