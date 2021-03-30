import mongoose from 'mongoose';
import {FileSchema} from '../models/backendModel';

const ChronicFile = mongoose.model('fs.files', FileSchema);

export const getFiles = (req, res) => {
    ChronicFile.find({}, (err, chronicFile) => {
        if (err) {
            res.send(err);
        }
        console.log(chronicFile);
        res.json(chronicFile);
    });
}