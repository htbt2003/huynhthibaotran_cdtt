import Dashboard from "../pages/backend/Dashboard";

import BrandList from '../pages/backend/Brand/BrandList';
import BrandTrashList from '../pages/backend/Brand/BrandTrashList';
import BrandShow from '../pages/backend/Brand/BrandShow';
import BrandCreate from '../pages/backend/Brand/BrandCreate';
import BrandUpdate from '../pages/backend/Brand/BrandUpdate';

import CategoryList from '../pages/backend/Category/CategoryList';
import CategoryShow from '../pages/backend/Category/CategoryShow';
import CategoryCreate from '../pages/backend/Category/CategoryCreate';
import CategoryUpdate from '../pages/backend/Category/CategoryUpdate';

import ProductList from '../pages/backend/Product/ProductList';
import ProductShow from '../pages/backend/Product/ProductShow';
import ProductCreate from '../pages/backend/Product/ProductCreate';
import ProductUpdate from '../pages/backend/Product/ProductUpdate';

import ContactList from '../pages/backend/Contact/ContactList';
import ContactShow from '../pages/backend/Contact/ContactShow';
import ContactUpdate from '../pages/backend/Contact/ContactUpdate';

import MenuList from '../pages/backend/Menu/MenuList';
import MenuShow from '../pages/backend/Menu/MenuShow';
import MenuCreate from '../pages/backend/Menu/MenuCreate';
import MenuUpdate from '../pages/backend/Menu/MenuUpdate';

import OrderList from '../pages/backend/Order/OrderList';
import OrderShow from '../pages/backend/Order/OrderShow';
import OrderUpdate from '../pages/backend/Order/OrderUpdate';

import PostList from '../pages/backend/Post/PostList';
import PostShow from '../pages/backend/Post/PostShow';
import PostCreate from '../pages/backend/Post/PostCreate';
import PostUpdate from '../pages/backend/Post/PostUpdate';

import PageList from '../pages/backend/Page/PageList';
import PageShow from '../pages/backend/Page/PageShow';
import PageCreate from '../pages/backend/Page/PageCreate';
import PageUpdate from '../pages/backend/Page/PageUpdate';

import BannerList from '../pages/backend/Banner/BannerList';
import BannerShow from '../pages/backend/Banner/BannerShow';
import BannerCreate from '../pages/backend/Banner/BannerCreate';
import BannerUpdate from '../pages/backend/Banner/BannerUpdate';
import TopicList from '../pages/backend/Topic/TopicList';
import TopicShow from '../pages/backend/Topic/TopicShow';
import TopicCreate from '../pages/backend/Topic/TopicCreate';
import TopicUpdate from '../pages/backend/Topic/TopicUpdate';
import UserList from '../pages/backend/User/UserList';
import UserShow from '../pages/backend/User/UserShow';
import UserCreate from '../pages/backend/User/UserCreate';
import UserUpdate from '../pages/backend/User/UserUpdate';
import CustomerList from '../pages/backend/Customer/CustomerList';
import CustomerShow from '../pages/backend/Customer/CustomerShow';
import CustomerCreate from '../pages/backend/Customer/CustomerCreate';
import CustomerUpdate from '../pages/backend/Customer/CustomerUpdate';
import ContactResponse from "../pages/backend/Contact/ContactResponse";
import Config from '../pages/backend/Config';

// import ProductStoreList from '../pages/backend/ProductStore/ProductStoreList';
// import ProductStoreShow from '../pages/backend/ProductStore/ProductStoreShow';
// import ProductStoreCreate from '../pages/backend/ProductStore/ProductStoreCreate';
// import ProductStoreUpdate from '../pages/backend/ProductStore/ProductStoreUpdate';

// import ProductSaleList from '../pages/backend/ProductSale/ProductSaleList';
// import ProductSaleShow from '../pages/backend/ProductSale/ProductSaleShow';
// import ProductSaleCreate from '../pages/backend/ProductSale/ProductSaleCreate';
// import ProductSaleUpdate from '../pages/backend/ProductSale/ProductSaleUpdate';

const RouterPrivate = [
  { path: "/admin", component: Dashboard },

  { path: "/admin/brand", component: BrandList },
  { path: "/admin/bran/trash", component: BrandTrashList },
  { path: "/admin/brand/show/:id", component: BrandShow },
  { path: "/admin/brand/create", component: BrandCreate },
  { path: "/admin/brand/update/:id", component: BrandUpdate },

  { path: "/admin/category", component: CategoryList },
  { path: "/admin/category/show/:id", component: CategoryShow },
  { path: "/admin/category/create", component: CategoryCreate },
  { path: "/admin/category/update/:id", component: CategoryUpdate },

  { path: "/admin/product", component: ProductList },
  { path: "/admin/product/show/:id", component: ProductShow },
  { path: "/admin/product/create", component: ProductCreate },
  { path: "/admin/product/update/:id", component: ProductUpdate },

// { path: "/admin/productStore", component:ProductStoreList },
// { path: "/admin/productStore/show/:id", component: ProductStoreShow },
// { path: "/admin/productStore/create", component: ProductStoreCreate },
// { path: "/admin/productStore/update/:id", component: ProductStoreUpdate },

// { path: "/admin/productSale", component: ProductSaleList },
// { path: "/admin/productSale/show/:id", component: ProductSaleShow },
// { path: "/admin/productSale/create", component: ProductSaleCreate },
// { path: "/admin/productSale/update/:id", component: ProductSaleUpdate },

  { path: "/admin/contact", component: ContactList },
//   { path: "/admin/contact/show/:id", component: ContactShow },
//   { path: "/admin/contact/update/:id", component: ContactUpdate },
//   { path: "/admin/contact/response/:id", component: ContactResponse },


  { path: "/admin/menu", component: MenuList },
  { path: "/admin/menu/show/:id", component: MenuShow },
  { path: "/admin/menu/create", component: MenuCreate },
  { path: "/admin/menu/update/:id", component: MenuUpdate },

  { path: "/admin/order", component: OrderList },
  { path: "/admin/order/show", component: OrderShow },
  { path: "/admin/order/update/:id", component: OrderUpdate },

  { path: "/admin/post", component: PostList },
  { path: "/admin/post/show/:id", component: PostShow },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/update/:id", component: PostUpdate },

  { path: "/admin/page", component: PageList },
  { path: "/admin/page/show/:id", component: PageShow },
  { path: "/admin/page/create", component: PageCreate },
  { path: "/admin/page/update/:id", component: PageUpdate },

  { path: "/admin/banner", component: BannerList },
  { path: "/admin/banner/show/:id", component: BannerShow },
  { path: "/admin/banner/create", component: BannerCreate },
  { path: "/admin/banner/update/:id", component: BannerUpdate },
  
    { path: "/admin/topic", component: TopicList },
  { path: "/admin/topic/show/:id", component: TopicShow },
  { path: "/admin/topic/create", component: TopicCreate },
  { path: "/admin/topic/update/:id", component: TopicUpdate },

  { path: "/admin/user", component: UserList },
  { path: "/admin/user/show/:id", component: UserShow },
  { path: "/admin/user/create", component: UserCreate },
  { path: "/admin/user/update/:id", component: UserUpdate },
  
  { path: "/admin/config", component: Config },

  { path: "/admin/customer", component: CustomerList },
  { path: "/admin/customer/show/:id", component: CustomerShow },
  { path: "/admin/customer/create", component: CustomerCreate },
  { path: "/admin/customer/update/:id", component: CustomerUpdate },
];
export default RouterPrivate;