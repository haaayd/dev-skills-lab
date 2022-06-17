import { Skill } from "../models/skill.js"

function index (req, res ) {
  // just know that ({}) <- empty query object selects ALL documents.
  Skill.find({})
  .then(skills =>{
    res.render("skills/index", {
    skills : skills,
    time: req.time

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

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    console.log(skill)
    // this is where the redirect happens!
    res.redirect("/skills")
  })
  .catch(error => {
    console.log(error)
    res.redirect("/skills")
  })
}

function show (req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render("skills/show", {
      skill: skill,
      time: req.time
    })
    
  })
  .catch(error => {
    console.log(error)
    res.redirect("/skills")
  }) 
}

export {
  index, 
  newSkill as new,
  create, 
  show
}