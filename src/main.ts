import Navigo from 'navigo'
import './style.css'
// ********************
import homePhone from './pages/admin/phone/homePhone'
import createPhone from './pages/admin/phone/createPhone'
import updatePhone from './pages/admin/phone/updatePhone'

const router = new Navigo('/', {linksSelector: "a"})
interface Ipage {
  render: (id?:number) => string
}
const app = document.getElementById('app')
const print = (page:Ipage, id?:number) => {
  if(app){
    app.innerHTML = page.render(id)
  }
}

router.on({
  "/phone": () => {
    print(homePhone)
  },
  "/createphone": () => {
    print(createPhone)
  },
  "/updatephone": () => {
    print(updatePhone)
  }
})
router.resolve()