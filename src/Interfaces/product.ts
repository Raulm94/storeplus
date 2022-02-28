export interface ProductCategory {
    id: number;
    name: string;
    description?: string;
}

export interface ProductImage {
    type: "url" | "base64";
    data?: string;
}

export interface ProductDimensions {
    width?: number;
    height?: number;
    depth?: number;
    weight?: number;
}

export interface Attribute {
    type?: "select" | "color";
    attribute_id?: number | string; //prestashop: attributeGroup id
    attribute_code?: string; //magento
    attribute_name?: string;
    value_id?: number; // prestashop: product option value id
    value?: string;
    color?: string;
}

// Generalmente las variantes de un producto también son consideradas como un producto aparte, por eso los datos ed ID y EAN13
export interface ProductCombination {
    id: number;
    ean13?: string;
    stock_quantity?: number;
    final_price?: number;
    attributes: Attribute[];
    images: ProductImage[];
}

export interface ProductModel {
    platform: "prestashop" | "magento" | "shopify" | "woocommerce";
    brand_code?: string; // Código de la tienda que vende el producto
    brand_id?: string; // Id de la tienda que vende el producto
    brand_name?: string; // Nombre de la tienda que vende el producto
    product_sku: string;
    ean13: string;
    id: number;
    type: string; // prestashop: virtual (es un producto descargable), simple (producto tradicional), pack(conjunto de varios productos)
    dimensions: ProductDimensions;
    product_type?: "combinations" | "standard" | string;
    minimal_quantity: number; // cantidad minima de venta: solo se puede comprar esta cantidad como minimo
    active: boolean; // activo o no en la tienda
    name: string;
    description: string;
    description_short: string;
    final_price?: number;
    images: ProductImage[];
    default_image: ProductImage;
    stock_quantity?: number;
    combinations?: ProductCombination[]; // Variaciones en términos de talle, color, etc
    categories: ProductCategory[];
}