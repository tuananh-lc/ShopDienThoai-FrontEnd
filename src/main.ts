import Navigo from "navigo";
import "./style.css";
// ********************
import homeProducts from "./pages/admin/products/homeProducts";
import createProducts from "./pages/admin/products/createProducts";
import updateProducts from "./pages/admin/products/updateProducts";
import dashboard from "./pages/admin/dashboard/dashboard";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import homePage from "./pages/home";
import DetailProducts from "./pages/detailProducts";
import cartProducts from "./pages/cartProducts";
import HomeCategories from "./pages/admin/categories/homeCategory";
import CreateCategories from "./pages/admin/categories/creatCategory";
import UpdateCategories from "./pages/admin/categories/updateCategory";
import HeaderUser from "./components/Header/User";
import HomeUsers from "./pages/admin/users/homeUsers";
import CreateUser from "./pages/admin/users/creatUsers";
import UpdateUser from "./pages/admin/users/updateUsers";
// ********************
const router = new Navigo("/", { linksSelector: "a", hash: true });
interface Ipage {
  render: (id?: string) => string;
  afterRender(id?: string): any;
}
const app = document.getElementById("app");
const print = async (page: Ipage, id?: string) => {
  if (app) {
    app.innerHTML = await page.render(id);
  }
  if (page.afterRender) await page.afterRender(id);
  if (HeaderUser.afterRender) HeaderUser.afterRender();
};

router.on({
  // Client
  "/": () => print(homePage),
  "/detailproducts/:id": (id: any) => {
    const ID = id.data.id;
    print(DetailProducts, ID);
  },
  "/cartproducts": () => print(cartProducts),
  //Admin
  "/admin/": () => print(dashboard),
  "/admin/products": () => {
    print(homeProducts);
  },
  "/admin/createproducts": () => {
    print(createProducts);
  },
  "/admin/products/:id/updateproducts": (id: any) => {
    const paramsId = id.data.id;
    print(updateProducts, paramsId);
  },
  "/admin/category": () => print(HomeCategories),
  "/admin/createcategory": () => print(CreateCategories),
  "/admin/category/:id/updatecategory": (id: any) => {
    const paramsId = id.data.id;
    print(UpdateCategories, paramsId);
  },
  "/admin/users": () => print(HomeUsers),
  "/admin/createuser": () => print(CreateUser),
  "/admin/users/:id/updateuser": (id: any) => {
    const paramsId = id.data.id;
    print(UpdateUser, paramsId);
  },
  // Lognin & Signin
  "/signin": () => print(Signin),
  "/signup": () => print(Signup),
});
router.resolve();
