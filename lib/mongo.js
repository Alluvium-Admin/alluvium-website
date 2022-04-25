import mongoose from 'mongoose'
import {databaseURI} from '../config/index.js';
// import {User} from '../models/user.model.js'

export const connectToDatabase = handler => async (req,res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
      }

    await mongoose.connect(databaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    })

    return handler(req, res);

    // .then(()=>{
    //     return {
    //         message: 'Mongo DB connection successful',
    //         success: true,
    //         dataBase: true
    //     }
    // }).catch((err)=>{
    //     return {
    //         message: err.message,
    //         success: false,
    //         dataBase: true
    //     }
    // });
}


export const saveToDB = async (data) => {
    const userData = {...data};
    await userData.save().then(user=>{
        return {
            message: `User ${user.fullname} saved successfully`,
            success: true
        }
    }).catch(err=>({message: err.message, success: false}))
}