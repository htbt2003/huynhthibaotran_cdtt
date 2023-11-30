import httpAxios from "../httpAxios";


function checkout(listCart)
{
    return httpAxios.post(`checkout/${listCart}`);
}
const CheckoutServices = {
    checkout:checkout
}
export default CheckoutServices;