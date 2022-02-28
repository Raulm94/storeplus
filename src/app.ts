import express from 'express';
import {getProductByEAN} from './woocommerce';

var bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());


app.get('/', async (req, res) => {
  var product = await getProductByEAN(req.body.ean);
  res.send(product);
});
app.listen(port, () => {
  
  return console.log(`server is listening on ${port}`);
});

