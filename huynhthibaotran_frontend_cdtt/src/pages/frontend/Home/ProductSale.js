import { useEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import ProductServices from '../../../services/ProductServices';

function ProductSale() {
    const [products, setProducts] = useState([])
    useEffect(function(){
        (async function(){
          await ProductServices.getProductSale(8)
          .then(function(result){
            setProducts(result.products)
          });
        })();
      },[])
        return ( 
            <div className="new_product_area" style={{marginRight:20}}>
            <div className="block_title">
              <h3>Sale Products</h3>
            </div>
            <div className="row">
              <div className="row" style={{ position:'relative'}}>
                {
                    (products && products.length > 0 && products.map(function (product, index) {
                        return (
                           <ProductItem product={product} key={index}/>
          
                          );
                      }))
                }
              </div>
            </div>
          </div>
    );
}

export default ProductSale;