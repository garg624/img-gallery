import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    width:{
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required: true
        }

    
}, { timestamps: true });

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;