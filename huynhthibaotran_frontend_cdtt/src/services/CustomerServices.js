import httpAxios from "../httpAxios";


function getAll()
{
    return httpAxios.get("customer/index");
}
function getById(id)
{
    return httpAxios.get("customer/show/" + id);
}
function create(data)
{
    return httpAxios.post("customer/store", data);
}
function update(data, id)
{
    return httpAxios.post("customer/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("customer/destroy/" + id);
}
const CustomerService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default CustomerService;