"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const woocommerce_1 = require("./woocommerce");
var bodyParser = require("body-parser");
const app = (0, express_1.default)();
const port = 3000;
app.use(bodyParser.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var product = yield (0, woocommerce_1.getProductByEAN)(req.body.ean);
    res.send(product);
}));
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
