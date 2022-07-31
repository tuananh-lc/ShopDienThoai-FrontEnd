import { UsersGetAll } from "../../../api/auth"
import { ProductsGetAll } from "../../../api/products"
import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { ListProducts } from "../../../Interface/IProducts"
import { $$ } from "../../utilities/utiliti"

const dashboard = {
    async render() {
        const productsData = await ProductsGetAll()
        const products= productsData.data
        const usersData = await UsersGetAll()
        const Users = usersData.data
        
        return`
            ${HeaderAdmin.render()}

            <div class="flex justify-between px-[30px] mt-[100px]">
                ${Sidebar.render()}
                <div class="w-full ml-[20px] pl-[20px] pt-[20px] shadow-xl h-[640px]">
                    <h3 class="mb-[20px] text-[20px] text-colorText capitalize font-semibold ">trang chủ</h3>
                    <div class="mt-[20px] flex justify-start items-center flex-wrap">
                        
                            <div class="mt-[50px] border-[1px] flex justify-end text-end max-w-[400px] h-[110px] w-full shadow-xl relative">
                                <div class=" absolute top-[-30px] left-[30px] bg-blue-500 px-[10px] py-[10px]">
                                    <i class="fa-solid fa-user text-[60px] text-[#fff]"></i>
                                </div>
                                <a class="inline-block w-full" href="#">
                                    <div class="mt-[10px] mr-[30px]">
                                        <p class="uppercase text-[20px] text-[#999999] font-bold">tài khoản</p> 
                                        <h3 class="capitalize mt-[5px] text-[20px] text-[#333] font-medium">${Users.length} user</h3>
                                    </div>
                                </a>
                            </div>

                            <div class="ml-[100px] mt-[50px] border-[1px] flex justify-end text-end max-w-[400px] h-[110px] w-full shadow-xl relative">
                            <div class=" absolute top-[-30px] left-[30px] bg-green-500 px-[10px] py-[10px]">
                                <i class="fa-brands fa-product-hunt text-[60px] text-[#fff]"></i>
                            </div>
                            <a class="inline-block w-full" href="#">
                                <div class="mt-[10px] mr-[30px]">
                                    <p class="uppercase text-[20px] text-[#999999] font-bold">sản phẩm</p> 
                                    <h3 class="capitalize mt-[5px] text-[20px] text-[#333] font-medium">${products.length} sản phẩm</h3>
                                </div>
                            </a>
                        </div>

                            
                        
                </div>
            </div>
        `
    },
    afterRender() {
        $$("#home").classList.add("text-active")
        $$("#home").classList.add("bg-blue-500")
        $$("#home").classList.add("hover:none")
    }
}

export default dashboard
