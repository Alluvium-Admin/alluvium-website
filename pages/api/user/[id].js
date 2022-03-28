import {connectToDatabase} from '../../../lib/mongo'
import User from '../../../models/user.model'

const handler = async (req, res) => {
    if(req.method === 'DELETE'){
        await User.findByIdAndDelete(req.query.id)
        .then(users=>{
            return res.status(200).json({
            message: `User deleted successfully`,
            success: true,
            users
        })})
        .catch(err=>{
            console.log(err);
            return res.status(500).json({
            message: `Error: User delete unsuccessful. ${err.message}`,
            success: false,
            users: null
        })})

    } 
    else {
    res.status(422).send({message: 'req_method_not_supported', success: false});
  }
}

export default connectToDatabase(handler);