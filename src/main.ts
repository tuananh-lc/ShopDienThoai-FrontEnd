import Navigo from 'navigo'
import './style.css'
// ********************
import homeProducts from './pages/admin/products/homeProducts'
import createProducts from './pages/admin/products/createProducts'
import updateProducts from './pages/admin/products/updateProducts'
import dashboard from './pages/admin/dashboard/dashboard'
import Signin from './pages/signin'
import Signup from './pages/signup'
import homePage from './pages/home'
import DetailProducts from './pages/detailProducts'
import cartProducts from './pages/cartProducts'
import HomeCategories from './pages/admin/categories/homeCategory'
import CreateCategories from './pages/admin/categories/creatCategory'
import UpdateCategories from './pages/admin/categories/updateCategory'
// ********************
const router = new Navigo('/', {linksSelector: "a"})
interface Ipage {
  render: (id?:number) => string
  afterRender(id?:number) : any
}
const app = document.getElementById('app')
const print =async (page:Ipage, id?:number) => {
  if(app){
    app.innerHTML =await page.render(id)
  }
  if(page.afterRender) await page.afterRender(id)
}

router.on({
  // Client
  "/": () => print(homePage),
  "/detailproducts/:id": (id:any) => {
    const ID = +id.data.id    
    print(DetailProducts, ID)
  },
  "/cartproducts": () => print(cartProducts),
  //Admin
  "admin/": () => print(dashboard),
  "admin/products": () => {
    print(homeProducts)
  },
  "admin/createproducts": () => {
    print(createProducts)
  },
  "admin/products/:id/updateproducts": (id:any) => {
    const paramsId = +id.data.id
    print(updateProducts, paramsId)
  },
  "admin/category": () => print(HomeCategories),
  "admin/createcategory": () => print(CreateCategories),
  "admin/category/:id/updatecategory": () => print(UpdateCategories),
  // Lognin & Signin
  "/signin": () => print(Signin),
  "/signup": () => print(Signup)
})
router.resolve()