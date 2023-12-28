import httpAxios from "../httpAxios";


function getAll()
{
    return httpAxios.get("banner/index");
}
function getById(id)
{
    return httpAxios.get("banner/show/" + id);
}
function create(data)
{
    return httpAxios.post("banner/store", data);
}
function update(data, id)
{
    return httpAxios.post("banner/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("banner/destroy/" + id);
}
function getByPosition(position)
{
    return httpAxios.get(`banner_list/${position}`);
}
const BannerService = {
    getByPosition:getByPosition,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default BannerService;