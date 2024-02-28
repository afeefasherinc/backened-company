import express, { Router } from "express"
import { Userlogin, Userregister } from "../Controller/UserController"
   

const router=Router()

router.post('/userregister',Userregister)
router.post('/userlogin',Userlogin)

export default router




