import httpAxios from "../httpAxios";


function getAll(page)
{
    return httpAxios.get(`order/index?page=${page}`);
}
function getById(id)
{
    return httpAxios.get("order/show/" + id);
}
function create(data)
{
    return httpAxios.post("order/store", data);
}
function update(data, id)
{
    return httpAxios.post("order/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("order/destroy/" + id);
}
function getOrderByUserId(user_id)
{
    return httpAxios.get(`order/${user_id}`);
}
function creatOrderDetail(productCart)
{
    return httpAxios.post("orderDetail/doCheckout", productCart);
}

const OrderService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getOrderByUserId:getOrderByUserId,
    creatOrderDetail:creatOrderDetail,
    changeStatus:(id) =>
    {
        return httpAxios.get("order/change_status/" + id);
    },
    delete:(id) =>
    {
        return httpAxios.get("order/delete/" + id);
    },
    restore:(id) =>
    {
        return httpAxios.get("order/restore/" + id);
    },
    trash:(page) =>
    {
        return httpAxios.get(`order/trash?page=${page}`);
    },
}
export default OrderService;