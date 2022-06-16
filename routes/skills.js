import { Router } from "express"
import * as skillsCtrl from "../controllers/skills.js"

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get("/new", skillsCtrl.new)


//create UI that will intitial this request- look at the CHART!!

export {
  router
}

