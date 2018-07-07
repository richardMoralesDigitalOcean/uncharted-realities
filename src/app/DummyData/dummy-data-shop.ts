interface ShopItem {
    type: string;
    colors?: string[];
    sizes?: string[];
    name: string;
    quantity: number;
    src: string;
    desc: string;
    tags: string[];
}

const shirt1: ShopItem = {
    type: 'shirt',
    colors: ['blue', 'red', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Long Sleeve Tee',
    quantity: 10,
    src: 'assets/Images/shop/shirt1.png',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['sale']
};
const shirt2: ShopItem = {
    type: 'shirt',
    colors: ['blue', 'red', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Logo Tee',
    quantity: 10,
    src: 'assets/Images/shop/shirt2.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const shirt3: ShopItem = {
    type: 'shirt',
    colors: ['blue', 'red', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Plain Tee',
    quantity: 10,
    src: 'assets/Images/shop/shirt3.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const shirt4: ShopItem = {
    type: 'shirt',
    colors: ['blue', 'red', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Crew Neck Tee',
    quantity: 10,
    src: 'assets/Images/shop/shirt4.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['sale']
};
const pants1: ShopItem = {
    type: 'pants',
    colors: ['red', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Pant',
    quantity: 10,
    src: 'assets/Images/shop/pants1.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const pants2: ShopItem = {
    type: 'pants',
    colors: ['red', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Snow Pant',
    quantity: 10,
    src: 'assets/Images/shop/pants2.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['sale']
};
const pants3: ShopItem = {
    type: 'pants',
    colors: ['red'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Basic Pant',
    quantity: 10,
    src: 'assets/Images/shop/pants3.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['sale']
};
const pants4: ShopItem = {
    type: 'pants',
    colors: ['green', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Cargo Pant',
    quantity: 10,
    src: 'assets/Images/shop/pants4.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const jacket1: ShopItem = {
    type: 'outerwear',
    colors: ['green', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Light Jacket',
    quantity: 10,
    src: 'assets/Images/shop/jacket1.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const jacket2: ShopItem = {
    type: 'outerwear',
    colors: ['green', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Heavy Jacket',
    quantity: 10,
    src: 'assets/Images/shop/jacket2.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['sale']
};
const hoodie1: ShopItem = {
    type: 'outerwear',
    colors: ['green', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Zip Hoodie',
    quantity: 10,
    src: 'assets/Images/shop/hoodie1.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const hoodie2: ShopItem = {
    type: 'outerwear',
    colors: ['green', 'black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Basic Hoodie',
    quantity: 10,
    src: 'assets/Images/shop/hoodie2.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};
const hat1: ShopItem = {
    type: 'accessory',
    colors: ['black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Basic Hat',
    quantity: 10,
    src: 'assets/Images/shop/hat1.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['sale']
};
const hat2: ShopItem = {
    type: 'accessory',
    colors: ['black'],
    sizes: ['small', 'medium', 'large'],
    name: 'Uncharted Reality Logo Hat',
    quantity: 10,
    src: 'assets/Images/shop/hat2.jpg',
    desc: `This one of a kind item is the future of apparel. Using space age technology, we crafted a item
    with a style that's out of this world!`,
    tags: ['new']
};

export const shopDummy: ShopItem[] = [
    shirt1, shirt2, shirt3, shirt4,
    pants1, pants2, pants3, pants4,
    jacket1, jacket2, hoodie1, hoodie2,
    hat1, hat2
];
