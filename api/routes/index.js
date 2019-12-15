import sypht, {InvalidFileError} from "../utils/sypht"
import express from "express"
import multer from "multer"
import collection from "../utils/db";
import {replaceDotWithUnderscore} from "../utils/sanitize";

export const router = express.Router();
const upload = multer({dest: 'uploads/'});

/*
* Main upload handler
*
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
