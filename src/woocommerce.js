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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByEAN = void 0;
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
function getProductByEAN(ean13) {
    return __awaiter(this, void 0, void 0, function* () {
        var product = {};
        const WooCommerce = new WooCommerceRestApi({
            url: 'http://localhost:8000',
            consumerKey: 'ck_b5881ed6c5c4a04bca669137522faeebea3fb98d',
            consumerSecret: 'cs_17c4181dcc0df24f34c53551d076153ce0be4a67',
            version: 'wc/v3',
            wpAPI: true,
            queryStringAuth: true
        });
        yield WooCommerce.get("products?sku=" + ean13)
            .then((response) => {
            product = JSON.parse(JSON.stringify(response.data));
        })
            .catch((error) => {
            console.log("error: " + error);
        });
        return product;
    });
}
exports.getProductByEAN = getProductByEAN;
