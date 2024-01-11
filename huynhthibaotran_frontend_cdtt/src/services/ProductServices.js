import httpAxios from "../httpAxios";


function getAll(page)
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

const ProductService = {
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
    filter:(category_id=0, brand_id=0) =>
    {
        return httpAxios.get(`product/filter/${category_id}/${brand_id}`);
    },
    delete:(id) =>
    {
        return httpAxios.get("product/delete/" + id);
    },
    restore:(id) =>
    {
        return httpAxios.get("product/restore/" + id);
    },
    trash:(page) =>
    {
        return httpAxios.get(`product/trash?page=${page}`);
    },
}
export default ProductService;