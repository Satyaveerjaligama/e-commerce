import iphone from "../Assets/Images/Phones/iphone.jpeg";
import moto from "../Assets/Images/Phones/moto.jpeg";
import nothingPhone from "../Assets/Images/Phones/nothingPhone.webp";
import oneplus from "../Assets/Images/Phones/oneplus.jpeg";
import pixel from "../Assets/Images/Phones/pixel.jpeg";
import samsungUltra from "../Assets/Images/Phones/samsung.jpeg";
import samsungFold from "../Assets/Images/Phones/samsungFold.jpeg";
import apple from "../Assets/Images/Watches/apple.jpeg";
import boat from "../Assets/Images/Watches/boat.jpg";
import fastrack from "../Assets/Images/Watches/fastrack.jpg";
import noise from "../Assets/Images/Watches/noise.jpg";
import samsung from "../Assets/Images/Watches/samsung.avif";

export const routes = {
    login: "login",
    home: "home",
    productView: "product-view",
    cart: "cart",
    account: "account",
};

export const phoneList = [
    {
        productName: "iPhone",
        productPrice: 120000,
        productImage: iphone,
        productId: "1001",
    },
    {
        productName: "Samsung Ultra",
        productPrice: 110000,
        productImage: samsungUltra,
        productId: "1002",
    },
    {
        productName: "One Plus",
        productPrice: 80000,
        productImage: oneplus,
        productId: "1003",
    },
    {
        productName: "Moto",
        productPrice: 40000,
        productImage: moto,
        productId: "1004",
    },
    {
        productName: "Nothing Phone",
        productPrice: 60000,
        productImage: nothingPhone,
        productId: "1005",
    },
    {
        productName: "Pixel",
        productPrice: 80000,
        productImage: pixel,
        productId: "1006",
    },
    {
        productName: "Galaxy Fold",
        productPrice: 160000,
        productImage: samsungFold,
        productId: "1007",
    },
]

export const watchList = [
    {
        productName: "Apple Watch",
        productPrice: 48999,
        productImage: apple,
        productId: "2001",
    },
    {
        productName: "Boat",
        productPrice: 2399,
        productImage: boat,
        productId: "2002",
    },
    {
        productName: "Fastrack",
        productPrice: 4999,
        productImage: fastrack,
        productId: "2003",
    },
    {
        productName: "Noise",
        productPrice: 2899,
        productImage: noise,
        productId: "2004",
    },
    {
        productName: "Samsung",
        productPrice: 28999,
        productImage: samsung,
        productId: "2005",
    },
];