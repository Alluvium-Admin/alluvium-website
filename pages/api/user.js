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
    }).catch(err=>res.status(400).json({message: err.message, success: false}))
    } else {
    res.status(422).send({message: 'req_method_not_supported', success: false});
  }
}

export default connectToDatabase(handler);