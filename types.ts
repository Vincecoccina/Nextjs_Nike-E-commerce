export type Link = {
    name: string;
    link: string;
};

export type ProductCart = {
    name: string;
    desc: string;
    img: string;
    price: number;
    qty: number;
};

export type Product = {
    name: string;
    discount: string;
    desc: string;
    img: string;
    price: number
    slug: string;
    allSizes: string[],
    availableSizes: string[],
};

export type Category = {
    id : number,
    name : string,
    slug : string
    img: string
}

