import { Skill } from "../models/skill.js"

function index (req, res ) {
  // just know that ({}) <- empty query object selects ALL documents.
  Skill.find({})
  .then(skills =>{
    res.render("skills/index", {
    skills : skills

    })

  })
  .catch(error => {
    console.log(error)
    res.redirect("/")
  })
}

function newSkill(req, res) {
  res.render("skills/new")
}


export {
  index, 
  newSkill as new,
}