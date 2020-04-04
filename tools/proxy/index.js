const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const config = require('./config');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const port = 8786;

const PROXY_EP = config.PROXY_EP;

app.use(cors());

app.all('/*', async (req, res) => {

    console.log(req.method + ' - ' + PROXY_EP + req.url);

    try {

        console.log(req.headers.authorization);

        let proxy_result = await axios({
            method: req.method,
            url: PROXY_EP + req.url,
            body: req.body,
            headers: {
                Authorization: req.headers.authorization
            }
        });

        res.status(proxy_result.status);
        res.json(proxy_result.data);

    } catch (error) {

        console.error(`Caught Error - code=${error.response.status}`);

        res.status(error.response.status);
        res.json(error.response.data);

    }

    return res;

});

app.listen(port, 'localhost',  () => console.log(`Proxy listening on port ${port}!`));
