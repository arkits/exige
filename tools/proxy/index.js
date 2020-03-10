const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const PROXY_EP = 'https://host_i_want_to_hit.com';

app.all('/*', async (req, res) => {

    console.log(req.method + ' - ' + PROXY_EP + req.url);

    try {

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

        res.status(error.response.status);
        res.json(error.response.data);

    }

    return res;

});

app.listen(port, () => console.log(`Proxy listening on port ${port}!`));
