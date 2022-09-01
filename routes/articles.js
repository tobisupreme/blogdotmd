const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render("articles/new")
})

router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
  try {
    article = await article.save()
    res.redirect(`/articles/`)
  } catch (e) {
    console.log(e)
  }

})

module.exports = router