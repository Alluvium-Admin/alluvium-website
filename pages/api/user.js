import {connectToDatabase} from '../../lib/mongo'
import User from '../../models/user.model'

const handler = async (req, res) => {
    if(req.method === 'POST'){
        const userData = new User({...req.body});
    await userData.save().then(user=>{
        return res.status(201).json({
            message: `User ${user.fullname} saved successfully, Thank you.`,
            success: true
        })
    }).catch(err=>res.status(500).json({message: err.message, success: false}))
    } else if(req.method === 'GET'){
        await User.find({}).sort({createdAt: 'desc'})
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

    } else {
    res.status(422).send({message: 'req_method_not_supported', success: false});
  }
}

export default connectToDatabase(handler);