import mongoose from 'mongoose'
import { databaseURI } from '../config/index.js';
// import {User} from '../models/user.model.js'

export const connectToDatabase = handler => async (req, res) => {
    if (!databaseURI) {
        return res.status(500).json({
            message: `Error: DB connection string error.`,
            success: false,
            // users: null
        })
    }
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }

    try {
        await mongoose.connect(databaseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        })
        return handler(req, res);
    } catch (err) {
        return res.status(500).json({
            message: `Error: ${err.message}`,
            success: false
        })

    }

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
    const userData = { ...data };
    await userData.save().then(user => {
        return {
            message: `User ${user.fullname} saved successfully`,
            success: true
        }
    }).catch(err => ({ message: err.message, success: false }))
}