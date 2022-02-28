
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
 
import { ProductModel } from './Interfaces/product';


export async function getProductByEAN(ean13:string):Promise<ProductModel>{
  
  var product = {} as ProductModel;
  const WooCommerce = new WooCommerceRestApi({
    url: 'http://localhost:8000',
    consumerKey: 'ck_b5881ed6c5c4a04bca669137522faeebea3fb98d',
    consumerSecret: 'cs_17c4181dcc0df24f34c53551d076153ce0be4a67',
    version: 'wc/v3',
    wpAPI: true,
    queryStringAuth: true 
  });
  await WooCommerce.get("products?sku="+ean13)
  .then((response:any) => {
    product = JSON.parse(JSON.stringify(response.data));
  })
  .catch((error:any) => {
    console.log("error: "+error);
  });
  return product;
}


