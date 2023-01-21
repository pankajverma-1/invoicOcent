const express = require('express');
const path = require('path');
const dirname = path.resolve();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./models/Router');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.use(express.static(path.join(dirname, '/client/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(dirname, '/client/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log(`server ${port}`));