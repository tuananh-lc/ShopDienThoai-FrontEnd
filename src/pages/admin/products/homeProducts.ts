import { $$ } from "../../utilities/utiliti"
import { reRender } from "../../utilities/utiliti"
import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { ListProducts } from "../../../Interface/IProducts"
import { ProductsGet, ProductsGetAll, ProductsGetOne, RemoveProducts, UpdateProducts } from "../../../api/products"
import { CategoryGetAll } from "../../../api/categorys"
import { ICategory } from "../../../Interface/ICategorys"
const homeProducts = {
    async render() {
        const categoryData = await CategoryGetAll()
        const productsData = await ProductsGetAll()
        const products: ListProducts[] = productsData.data
        products.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name)
        })
        const categorys: ICategory[] = categoryData.data

        const cate = categorys.map(item => `
                <option value="${item.id}" id="optionCate" class="capitalize">${item.name}</option>
            `).join("")

        return `
            ${HeaderAdmin.render()}
            
            <div class="flex justify-between px-[30px] mt-[100px]">
                ${Sidebar.render()}

                <div class="card-body h-[600px] overflow-y-scroll w-full">
                <div class="ml-[20px] p-[25px] shadow-xl w-full">
                <div class="flex justify-between">
                    <div>
                        <h2 class="mb-[20px] text-[20px] text-colorText capitalize font-semibold">
                            danh sách sản phẩm
                        </h2>
                        <div class="flex justify-between items-center w-[490px] w-[100%]">
                            <div class="mr-[10px]"><h3 class="capitalize text-[18px] font-semibold text-colorText">Bộ lọc</h3></div>
                            <div>
                                <h3 class="mb-[10px] capitalize text-[13px] leading-[19px] font-medium text-colorText">danh mục sản phẩm</h3>
                                <select name="selectCate" id="selectCate" class="capitalize w-[400px] h-[35px] leading-[35px] pl-[10px] outline-0 border-[1px] border-[#000]">
                                    <option value="all" id="optionCate" class="capitalize">Tất cả sản phẩm</option>                     
                                    ${cate}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mr-[20px] text-[30px] ">
                        <a href="/admin/createproducts"><i class="fa-solid fa-plus  border-[#00B0D7] border-[3px] p-[6px] cursor-pointer text-[#00B0D7]"></i></a>
                    </div>
                </div>

                <div class="mt-[50px]">      
                    
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    @@
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Product name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Show/Hide
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody id="showCategory">
                            
                        ${products.map(item => `
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ${item.id}
                                    </th>
                                    <td class="py-4 px-6">
                                        ${item.name}
                                    </td>
                                    <td class="py-4 px-6">
                                        ${item.price}
                                    </td>
                                    <td class="py-4 px-6">
                                    <img class="max-w-[120px] w-full" src="${item.image}">
                                    </td>
                                    <td class="py-4 px-6 ">
                                        <span class="max-w-[250px] w-full block">
                                            ${item.descriptionSort}
                                        </span>
                                    </td>
                                    <td class="py-4 px-6 text-center">
                                        <button href="#" class="text-[30px]  font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <i title="show" class="fa-solid fa-toggle-off" data-id="${item.id}" id="off"></i>
                                            <i title="hidden" class="fa-solid fa-toggle-on hidden" data-id="${item.id}" id="on"></i>
                                        </button>
                                    </td>
                                    <td class="py-4 px-6 flex justify-between items-center leading-[190px]">
                                        <a href="/admin/products/${item.id}/updateproducts" data-navigo class="text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                            <i title="edit" class="fa-solid fa-pen-to-square"></i>
                                        </a>
                                        <a href="/admin/products/${item.id}" class="mx-[10px] text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                            <i title="Eye" class="fa-solid fa-eye"></i>
                                        </a>
                                        <button data-id="${item.id}" data-navigo id="btn-remove" class="text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                            <i title="Remove" class="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                    </tr>
                            `).join("")
            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
                
            </div>


        `
    },
    async afterRender() {
        $$("#list").classList.add("text-active")
        $$("#list").classList.add("bg-blue-500")
        const showCate = $$("#showCategory")
        const productsData = await ProductsGetAll()
        const products: ListProducts[] = productsData.data
        products.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name)
        })
        const categoryData = await CategoryGetAll()
        const categorys: ICategory[] = categoryData.data

        const CateID = categorys.map(cate => cate.id)

        $$("#btn-remove").forEach((btn: any) => {
            btn.addEventListener('click', async function () {
                const btnId = this.getAttribute("data-id")
                parseInt(btnId)
                confirm("Bạn chắc có muốn xóa bản phẩm này?")
                const result = await RemoveProducts(btnId)
                if (result) {
                    reRender(homeProducts, "#app")
                    alert("Xóa sản phẩm thành công")
                }
            })

        });

        const offs = $$("#off")
        const ons = $$("#on")

        offs.forEach((off: any, index: any) => {
            off.addEventListener('click', async function () {
                this.classList.add("hidden")
                ons[index].classList.remove("hidden")

                const id = this.getAttribute("data-id")
                const { data: newData } = await ProductsGetOne(id)
                newData.ishidden = false
                UpdateProducts(newData, id)
            })
        })

        ons.forEach((on: any, index: any) => {
            on.addEventListener('click', async function () {
                this.classList.add("hidden")
                offs[index].classList.remove("hidden")

                const id = this.getAttribute("data-id")
                const { data: newData } = await ProductsGetOne(id)
                newData.ishidden = true
                UpdateProducts(newData, id)

            })
        })



        $$("#selectCate").addEventListener('change', function () {
            console.log(this.value === "all");

            if (this.value === "all") {
                reRender(homeProducts, "#app")
                // console.log(products);
            }
            const htmls = products.filter(product => product.categoryId == this.value)
            const result = htmls.map(item => `
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${item.id}
        </th>
        <td class="py-4 px-6">
            ${item.name}
        </td>
        <td class="py-4 px-6">
            ${item.price}
        </td>
        <td class="py-4 px-6">
        <img class="max-w-[120px] w-full" src="${item.image}">
        </td>
        <td class="py-4 px-6 ">
            <span class="max-w-[250px] w-full block">
                ${item.descriptionSort}
            </span>
        </td>
        <td class="py-4 px-6 text-center">
            <button href="#" class="text-[30px]  font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <i class="fa-solid fa-toggle-off"></i>
            </button>
        </td>
        <td class="py-4 px-6 flex justify-between items-center leading-[190px]">
            <a href="/updateproducts/${item.id}" class="text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                <i title="edit" class="fa-solid fa-pen-to-square"></i>
            </a>
            <a href="/products/id" class="mx-[10px] text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                <i title="Eye" class="fa-solid fa-eye"></i>
            </a>
            <button data-id="${item.id}" id="btn-remove" class="text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                <i title="Remove" class="fa-solid fa-trash"></i>
            </button>
        </td>
        </tr>
        `).join("")
            showCate.innerHTML = result
        })
    }
}


export default homeProducts