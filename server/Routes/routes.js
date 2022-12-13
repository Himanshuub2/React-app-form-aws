import express,{Router} from "express";
import { addUser,getUsers,getUser,editUser,deleteUser } from "../controllers/controls.js";


const router = express.Router();

router.post("/add",addUser)
router.get("/all",getUsers)
router.get("/:id",getUser)
router.post("/:id",editUser);    //this one is for editing the data 

router.delete("/:id",deleteUser)

export default router;