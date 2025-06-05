import express from 'express'
import Profile from '../models/Profile.model.js';


const ResidentRouter = express.Router();

ResidentRouter.post('/Add-Resident', async(req,res)=>{
    const {FirstName, LastName, Email, Role, ProfilePhoto, LinkedIn,Twitter} = req.body
    if(!FirstName || !LastName || !Role || !ProfilePhoto || !Email){
        res.status(400).json({message:"Incomplete data"});
        return
    }
    try {
        const resident = await Profile.findOne({Email});
        if(resident){
            res.status(409).json({message:"Resident already exists"});
            return
        }
        
        const newResident = await Profile.create(({FirstName, LastName, Email, Role, ProfilePhoto, LinkedIn,Twitter}));

        console.log("New Resident created :", newResident)

        res.status(201).json({message:"Successfully created new resident", result:newResident})


    } catch (error) {
        console.log("Error occured in Add-Resident controller:",error.message);
        res.status(500).json({message:"Something went wrong"});
    }
})

ResidentRouter.get('/',async(req,res)=>{
    try {

        const residents = await Profile.find();
        console.log("Residents:",residents);

        res.status(200).json({message:"List of residents", result:residents});

    } catch (error) {
        console.log("Error occured in listResidents controller:", error.message);
        res.status(500).json({message:"Something went wrong"});
    }
})


export default ResidentRouter