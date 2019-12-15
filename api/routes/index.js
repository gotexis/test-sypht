import sypht, {InvalidFileError} from "../utils/sypht"
import express from "express"
import multer from "multer"
import collection from "../utils/db";
import {replaceDotWithUnderscore} from "../utils/sanitize";

const mongo = require("mongodb");

export const router = express.Router();
const upload = multer({dest: 'public/uploads/'});

/*
* Main upload handler
*/
router.post('/upload', upload.single('file'), async (req, res, next) => {
    const {path: uploadFile} = req.file
    const {fieldSets} = req.body
    let data, syphtResponse
    try {
        data = await sypht.fileUpload(
            JSON.parse(fieldSets), uploadFile
        );
        syphtResponse = await sypht.fetchResults(data.fileId);

        const result = replaceDotWithUnderscore({
            ...syphtResponse, // record response from server
            file: req.file, // record local file
        })

        collection.insertOne(result)
        res.json(result)
    } catch (e) {
        res.status(400);
        console.log(e);
        if (e instanceof InvalidFileError) {
            return res.json({
                error: 'File is invalid.'
            })
        }
        return res.json({
            error: 'Something bad happened and I have no idea what is.'
        })
    }
});


/*
* Get documents
*/
router.get('/documents', async (req, res, next) => {
    const {skip = 0, limit = 30} = req.query;
    const documents = await collection.find().limit(limit).skip(parseInt(skip)).toArray()
    res.jsonp(documents)
});

/*
* Get document by ID
*/
router.get('/document/:id', async (req, res, next) => {
    const document = await collection.findOne({_id: new mongo.ObjectID(req.params.id)})
    res.jsonp(document)
});
