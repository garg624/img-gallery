import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    
}, { timestamps: true });

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;