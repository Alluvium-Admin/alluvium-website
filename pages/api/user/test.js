import { connectToDatabase } from '../../../lib/mongo'
// import User from '../../../models/user.model'
import Applicant from '../../../models/applicants.model'
import mongoose from 'mongoose';

const handler = (req, res) => {
    if (req.method === 'GET') {
        // console.log(mongoose.connection.collections);
        console.log(mongoose.connection.readyState);
        let connectionStatus = mongoose.connection.readyState === 1 ? true : false;
        
        // mongoose.connection.once('')
        if (connectionStatus) {
            return res.status(200).json({
                message: `DB connected successfully`,
                success: true,
                // users
            })
        }
        else {
            return res.status(500).json({
                message: `Error: DB connection unsuccessful.`,
                success: false,
                users: null
            })
        }

    }
    else {
        res.status(422).send({ message: 'req_method_not_supported', success: false });
    }
}

export default connectToDatabase(handler);