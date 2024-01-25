import { useEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import ProductServices from '../../../services/ProductServices';
import { Link } from "react-router-dom";

function ProductHome(props) {
    const [products, setProducts] = useState([])
    useEffect(function(){
        (async function(){
          await ProductServices.getProductHome(4, props.category.id)
          .then(function(result){
            setProducts(result.products)
          });
        })();
      },[])
        return ( 
          <div className="new_product_area" style={{marginRight:20}}>
          <div className="block_title">
            <h3>{props.category.name}</h3>
          </div>
          <div className="row">
            <div className="row" >
              {
                  (products && products.length > 0 && products.map(function (product, index) {
                      return (
                         <ProductItem product={product} key={index}/>
        
                        );
                    }))
              }
            </div>
          </div>
          <div className="text-center my-3" >
                    <Link to={"danh-muc-san-pham/" + props.category.slug} className="btn btn-success">Xem thêm</Link>
                </div>
        </div>
          );
    // }
}

export default ProductHome;