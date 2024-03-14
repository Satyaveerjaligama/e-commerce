import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import ProductsWithCategory from "../Components/ProductsWithCategory";
import { phoneList, routes, watchList } from "../Utilities/Constants";

const Home = () => {
    const navigate = useNavigate();

    const productOnClick = (productId) => {
        navigate(`/${routes.productView}?productId=${productId}`);
    }

    return (
        <Layout>
            <ProductsWithCategory 
                productsList={phoneList}
                productOnClick={productOnClick}
            />
            <ProductsWithCategory 
                productsList={watchList}
                productOnClick={productOnClick}
            />
        </Layout>
    )
};

export default Home;