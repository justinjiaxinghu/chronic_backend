import { ObjectId } from 'bson';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FileSchema = new Schema({
    // id: {
    //     type: ObjectId
    // },
    length: {
        type: Number
    },
    chunkSize : {
        type: Number
    },
    uploadDate : {
        type: Date
    },
    fileName : {
        type: String
    },
    metadata : {
        type: Object
    }
});