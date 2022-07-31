import { CategoryGetAll } from "../../../api/categorys"
import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { ICategory } from "../../../Interface/ICategorys"
import { $$ } from "../../utilities/utiliti"

const HomeCategories = {
    async render() {
        const CategoryData = await CategoryGetAll()
        const categorys:ICategory[] = CategoryData.data
        // console.log(categorys);
        
        return`
            ${HeaderAdmin.render()}
            <div class="flex justify-between px-[30px] mt-[100px]">
                ${Sidebar.render()}
                
                <div class="w-full ml-[20px]">
                    <div class="flex items-end justify-between">
                        <div>
                            <h3 class="capitalize text-[#545454] text-[20px] font-bold">danh sách danh mục sản phẩm</h3>
                        </div>
                        <div class="flex items-center mr-[20px] text-[30px] ">
                            <a href="/admin/createcategory"><i class="fa-solid fa-plus  border-[#00B0D7] border-[3px] p-[6px] cursor-pointer text-[#00B0D7]"></i></a>
                        </div>
                    </div>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-[20px]">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="text-center py-3 px-6">
                                    @@
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Category Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        ${categorys.map((category:any) => `
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" class="text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                ${category.id}
                                        </th>
                                        <td class="py-4 px-6">
                                                ${category.name}
                                        </td>
                                    
                                        <td class="py-4 px-6">
                                        <a href="/admin/category/${category.id}/updatecategory" data-navigo class="text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                        <i title="edit" class="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <button data-id="${category.id}" data-navigo id="btn-remove" class="ml-[10px] text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                        <i title="Remove" class="fa-solid fa-trash"></i>
                                    </button>
                                        </td>
                                </tr>
                        `).join("")}
                        </tbody>
                    </table>
                    </div>

                </div>
                

            </div>

        `
    },
    afterRender() {
        $$("#category").classList.add("text-active")
        $$("#category").classList.add("bg-blue-500")
    }
}

export default HomeCategories