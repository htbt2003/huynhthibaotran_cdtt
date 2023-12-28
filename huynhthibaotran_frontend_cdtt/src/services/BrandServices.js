import httpAxios from "../httpAxios";


const BrandService = {
    getAll: () =>{
        return httpAxios.get("brand/index");
    },
    getById:(id) =>
    {
        return httpAxios.get("brand/show/" + id);
    },
    create:(data) =>
    {
        return httpAxios.post("brand/store", data);
    },
    update:(data, id) =>
    {
        return httpAxios.post("brand/update/" + id, data);
    },
    remove:(id) =>
    {
        return httpAxios.delete("brand/destroy/" + id);
    },

};
export default BrandService;