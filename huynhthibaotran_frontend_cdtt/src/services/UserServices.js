import httpAxios from "../httpAxios";


function getAll(page)
{
    return httpAxios.get(`user/index?page=${page}`);
}
function getById(id)
{
    return httpAxios.get("user/show/" + id);
}
function create(data)
{
    return httpAxios.post("user/store", data);
}
function update(data, id)
{
    return httpAxios.post("user/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("user/destroy/" + id);
}
const UserService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    changeStatus:(id) =>
    {
        return httpAxios.get("user/change_status/" + id);
    },
    delete:(id) =>
    {
        return httpAxios.get("user/delete/" + id);
    },
    restore:(id) =>
    {
        return httpAxios.get("user/restore/" + id);
    },
    trash:(page) =>
    {
        return httpAxios.get(`user/trash?page=${page}`);
    },
    register:(data) =>
    {
        return httpAxios.post("register", data);
    },
    login:(data) =>
    {
        return httpAxios.post("login", data);
    },
    logout:() =>
    {
        return httpAxios.post("logout");
    },
    updateAccount:(data, id) =>
    {
        return httpAxios.post("updateAccount/" + id, data);
    },
}
export default UserService;