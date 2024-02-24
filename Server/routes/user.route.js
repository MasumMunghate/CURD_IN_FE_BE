import express from 'express'
import { EditUser, create, deleteUser, getAllUser, getUserByID } from '../controler/user.controler.js';

const route = express.Router(); // initialize the roouter 

route.post('/create' , create)
route.get('/getAllUser' , getAllUser)
route.get('/getUserByID/:id',getUserByID)
route.put('/EditUser/:id',EditUser)
route.delete('/deleteUser/:id' ,deleteUser)



export default route; // export the router 