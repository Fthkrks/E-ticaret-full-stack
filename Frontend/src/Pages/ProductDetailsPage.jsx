/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import {useParams} from "react-router-dom"




const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const params = useParams();
  const productId = params.id;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${productId}`);


        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.error("Veri hatası:", error);
      }
    };
    fetchSingleProduct();
  }, [apiUrl, productId]);



  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} setSingleProduct={setSingleProduct} />
  ) : (
    <p>Ürün Yükleniyor</p>
  );
}

export default ProductDetailsPage