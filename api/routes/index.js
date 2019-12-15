import sypht from "sypht-node-client"
import express from "express"
import axios from "axios"
import multer from "multer"
import collection from "../utils/db";

export const router = express.Router();
const upload = multer({dest: 'uploads/'});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/upload', upload.single('file'), async (req, res, next) => {
    // const data = await sypht.fileUpload(['sypht.invoice', 'sypht.document'], './sample_invoice.pdf');
    // const result = await sypht.fetchResults(data['fileId']);
    // console.log(JSON.stringify(data, null, 2));
    console.log(req.file);
    // console.log(result);
    const sample = {
        fieldname: 'file',
        originalname: 'les.gif',
        encoding: '7bit',
        mimetype: 'image/gif',
        destination: 'uploads/',
        filename: 'e41d1874f2d3638023d37a71d96472d6',
        path: 'uploads\\e41d1874f2d3638023d37a71d96472d6',
        size: 3029358
    }
    collection.insertOne(sample)

    res.send('success!')
});


const GENERIC = 'sypht.generic'
const DOCUMENT = 'sypht.document'
const INVOICE = 'sypht.invoice'
const BILL = 'sypht.bill'
const BANK = 'sypht.bank'

