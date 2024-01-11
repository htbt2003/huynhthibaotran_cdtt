import httpAxios from "../httpAxios";


function getAll(page)
{
    return httpAxios.get(`page/index?page=${page}`);
}
function getById(id)
{
    return httpAxios.get("page/show/" + id);
}
function create(data)
{
    return httpAxios.post("page/store", data);
}
function update(data, id)
{
    return httpAxios.post("page/update/" + id, data);
}
function remove(id)
{
    return httpAxios.delete("page/destroy/" + id);
}
function getByType(limit, type)
{
    return httpAxios.get(`page_list/${limit}/${type}`);
}
function getpageAll(limit, page=1)
{
    return httpAxios.get(`page_all/${limit}/${page}`);
}
function getpageByTopicId(limit, topic_id)
{
    return httpAxios.get(`page_topic/${limit}/${topic_id}`);
}
function getpageNew()
{
    return httpAxios.get("page_new");
}
function getTopicBySlug(slug)
{
    return httpAxios.get(`page_detail/${slug}`);
}

const PageServices = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getByType:getByType,
    getpageAll:getpageAll,
    getpageByTopicId:getpageByTopicId,
    getpageNew:getpageNew,
    getTopicBySlug:getTopicBySlug,
    changeStatus:(id) =>
    {
        return httpAxios.get("page/change_status/" + id);
    },
    delete:(id) =>
    {
        return httpAxios.get("page/delete/" + id);
    },
    restore:(id) =>
    {
        return httpAxios.get("page/restore/" + id);
    },
    trash:(page) =>
    {
        return httpAxios.get(`page/trash?page=${page}`);
    },
}
export default PageServices;