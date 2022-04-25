import mongoose from 'mongoose'

const applicantSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    currentEngagement: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    traineeProgram: {
        type: String,
        required: true,
        trim: true
    },
    threeYearsAvailability: {
        type: String,
        required: true,
        trim: true
    },
    experienceLevel: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

const Applicants = mongoose.models.Applicants || mongoose.model('Applicants', applicantSchema);

export default Applicants;