import sypht from "../utils/sypht"
import express from "express"
import multer from "multer"
import collection from "../utils/db";
import {replaceDotWithUnderscore} from "../utils/sanitize";

export const router = express.Router();
const upload = multer({dest: 'uploads/'});

router.post('/upload', upload.single('file'), async (req, res, next) => {
    const {path: uploadFile} = req.file
    const {fieldSets} = req.body
    const data = await sypht.fileUpload(
        JSON.parse(fieldSets), uploadFile
    );

    const syphtResponse = await sypht.fetchResults(data.fileId);

    const result = replaceDotWithUnderscore({
        ...syphtResponse, // record response from server
        file: req.file, // record local file
    })

    collection.insertOne(result)
    await res.json(result)
});
