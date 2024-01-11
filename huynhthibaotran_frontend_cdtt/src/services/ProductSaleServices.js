import httpAxios from "../httpAxios";


function getAll(page=1)
{
    return httpAxios.get(`product/index?page=${page}`);
}
function getById(id)
{
    return httpAxios.get("product/show/" + id);
}
function create(data)
{
    return httpAxios.post("product/store", data);
}
function update(data, id)
{
    return httpAxios.post("product/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("product/destroy/" + id);
}
function getProductHome(limit, category_id)
{
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductAll(limit, page=1)
{
    return httpAxios.get(`product_all/${limit}/${page}`);
}
function getProductBySlug(slug)
{
    return httpAxios.get(`product_detail/${slug}`);
}
function getProductByCategoryId(limit, category_id)
{
    return httpAxios.get(`product_category/${limit}/${category_id}`);
}
function getProductByBrandId(limit, brand_id)
{
    return httpAxios.get(`product_brand/${limit}/${brand_id}`);
}
function getProductSearch(key)
{
    return httpAxios.get(`product_search/${key}`);
}

const ProductSaleService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getProductHome:getProductHome,
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductSearch:getProductSearch,
    changeStatus:(id) =>
    {
        return httpAxios.get("product/change_status/" + id);
    },
}
export default ProductSaleService;