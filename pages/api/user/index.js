import {connectToDatabase} from '../../../lib/mongo'
// import User from '../../../models/user.model'
import Applicant from '../../../models/applicants.model'
import mongoose from 'mongoose';

const handler = async (req, res) => {
    if(req.method === 'POST'){
        let userExists = await Applicant.findOne({ phoneNumber: req.body.phoneNumber.trim() });
        if(userExists){
            return res.status(403).json({
                message: `Phone number ${userExists.phoneNumber} exits already, Thank you.`,
                success: false
            })
        }
        userExists = await Applicant.findOne({ email: req.body.email.trim() });
        if(userExists){
            return res.status(403).json({
                message: `Applicant email ${userExists.email} exits already, Thank you.`,
                success: false
            })
        }
        const userData = new Applicant({...req.body});
    await userData.save().then(user=>{
        return res.status(201).json({
            message: `Hello ${user.fullname}, Thank you for reaching out to us. We'll get in touch with you.`,
            success: true
        })
    }).catch(err=>res.status(400).json({message: err.message, success: false}))
    } else if(req.method === 'GET'){
        console.log(mongoose.connection.collections);
        await Applicant.find({}).sort({createdAt: 'desc'})
        .then(users=>{
            return res.status(200).json({
            message: `Users fetched successfully`,
            success: true,
            users
        })})
        .catch(err=>{
            console.log(err);
            return res.status(500).json({
            message: `Error: Users fetch unsuccessful. ${err.message}`,
            success: false,
            users: null
        })})

    } 
    else {
    res.status(422).send({message: 'req_method_not_supported', success: false});
  }
}

export default connectToDatabase(handler);