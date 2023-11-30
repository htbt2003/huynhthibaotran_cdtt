import { Link, useNavigate } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ProductServices from '../../../services/ProductServices';
import BrandServices from '../../../services/BrandServices';
import CategoryServices from '../../../services/CategoryServices';

function ProductCreate() {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigator = useNavigate();
    const [category_id, setCategoryId] = useState(0);
    const [brand_id, setBrandId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [price_sale, setPriceSale] = useState(0);
    const [qty, setQty] = useState(1);
    const [detail, setDetail] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [status, setStatus] = useState(1);

    function ProductStore(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("category_id", category_id)
        product.append("brand_id", brand_id)
        product.append("name", name)
        product.append("price", price)
        product.append("price_sale", price_sale)
        product.append("qty", qty)
        product.append("detail", detail)
        product.append("metakey", metakey)
        product.append("metadesc", metadesc)
        product.append("status", status)
        product.append("image", image.files[0])
        ProductServices.create(product)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/product", {replace:true})
        }); 
    }
    useEffect (function(){
          (async function(){
            await BrandServices.getAll()
            .then(function(result){
                setBrands(result.data.brands)
            });
          })();
    },[]);
    useEffect (function(){
        (async function(){
          await CategoryServices.getAll()
          .then(function(result){
              setCategories(result.data.categories)
          });
        })();
   },[]);
    return (
    <form method='product' onSubmit={ProductStore}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Thêm sản phẩm
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/product" className="btn btn-info btn-sm me-2">
                    <FaPlus/> Về danh sách
                </Link>
                <button type='submit' className='btn btn-success btn-sm'>Lưu</button>
                </div>
            </div>
            </div>
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='mb-3'>
                            <label>
                                <strong>Tên sản phẩm(*)</strong>
                            </label>
                            <input name='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Giá(*)</strong>
                            </label>
                            <input value={price} onChange={(e)=> setPrice(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Khuyến mãi</strong>
                            </label>
                            <input value={price_sale} onChange={(e)=> setPriceSale(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Chi tiết(*)</strong>
                            </label>
                            <textarea value={detail} onChange={(e)=> setDetail(e.target.value)} className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Số lượng(*)</strong>
                            </label>
                            <input value={qty} onChange={(e)=> setQty(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Từ khóa(*)</strong>
                            </label>
                            <textarea value={metakey} onChange={(e)=> setMetakey(e.target.value)}  className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Mô tả(*)</strong>
                            </label>
                            <textarea value={metadesc} onChange={(e)=> setMetadesc(e.target.value)} className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className='mb-3'>
                            <label>
                                <strong>Mã danh mục(*)</strong>
                            </label>
                            <select  value={category_id} onChange={(e)=> setCategoryId(e.target.value)} className='form-control'>
                                <option value="0">None</option>
                                {categories.map(function(category, index){
                                    return <option key={index} value={category.id}>{category.name}</option>
                                })}
                            </select>
                    </div>
                    <div className='mb-3'>
                            <label>
                                <strong>Mã thương hiệu(*)</strong>
                            </label>
                            <select  value={brand_id} onChange={(e)=> setBrandId(e.target.value)} className='form-control'>
                                <option value="0">None</option>
                                {brands.map(function(brand, index){
                                    return <option key={index} value={brand.id}>{brand.name}</option>
                                })}
                            </select>
                    </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Hình</strong>
                            </label>
                            <input id="image" className='form-control' type="file"/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Trạng thái</strong>
                            </label>
                            <select  value={status} onChange={(e)=> setStatus(e.target.value)} className='form-control'>
                                <option value="1">Xuất bản</option>
                                <option value="2">Chưa xuất bản</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
}

export default ProductCreate;