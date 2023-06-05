import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";

import axios from "axios";
import Spinner from "@/components/Spinner";


export default function EditProductPage(){
    const [productInfo, setProductInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => { 
        if (!id) {
            return;
        }
        setIsLoading(true);
      axios.get('/api/products?id='+id).then(response => {
        setProductInfo(response.data);
        setIsLoading(false);
      });
    }, [id]);
    return (
        <Layout>
            <h1> Edit product</h1>
            {isLoading && (
                <Spinner />
            )}
            {productInfo && (
                 <ProductForm {...productInfo} />

            )}
           
        </Layout>
    );
}