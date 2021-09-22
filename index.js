const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
var options = { height: "7.8in", width: "12in", }

const pdfTemplate = require('./documents/index');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/create-pdf', (req, res) => {
    console.log("PDF", pdfTemplate)
    pdf.create(pdfTemplate(req.body), options).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        console.log("deneme")
        res.send(Promise.resolve());

    });
});
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(` Listening on port ${port}`))
