import { CategoryGetOne, UpdateCategory } from "../../../api/categorys"
import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { ICategory } from "../../../Interface/ICategorys";

const UpdateCategories = {
    async render(id: any) {
        console.log(typeof id);

        const categoryData = await CategoryGetOne(id);
        const category: ICategory = categoryData.data
        console.log(category);

        return `
            ${HeaderAdmin.render()}
            <div class="flex justify-between px-[30px] mt-[100px]">
            ${Sidebar.render()}
            <div class="card-body h-[600px] overflow-y-scroll w-full bg-[#E5E5E5]">
            <div class="ml-[20px] w-full p-[25px] max-h-[100%] h-full">
                <div class="">
                    <h2 class="capitalize text-[20px] leading-[30px] text-[#5F5E61] font-bold">cập nhật danh mục</h2>
                    
                    <div class="flex justify-between items-start mb-[50px]">
                        <div class="max-w-[600px] w-full pt-[30px]" >

                            <div>
                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">tên danh mục</label><br>
                                    <input type="type" id="name" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" value="${category.category.name}">
                                    <span class="error-input block text-red-500 text-xs "><span>
                                </div>
                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">icon</label><br>
                                    <input type="type" id="icon" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" value="${category.category.icon}">
                                    <span class="error-input block text-red-500 text-xs "><span>
                                </div>
                                <div class="mt-[20px]">
                                    <button type="submit" class="capitalize bg-[#00B0D7] text-[#fff] rounded-lg px-[20px] py-[10px]" id="btnUpdate">cập nhật</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>                
            </div>
        </div>
    </div>

        `
    },
    afterRender(id: any) {
        const btnUpdate = document.getElementById('btnUpdate');
        console.log(btnUpdate);
        btnUpdate?.addEventListener("click", async function (e: any) {
            e.preventDefault();
            const category = {
                _id: id,
                name: document.getElementById('name')?.value,
                icon: document.getElementById('icon')?.value
            };
            console.log(category);
            const result = await UpdateCategory(category, id);
            if(result){
                alert("Cập nhật thành công");
                location.href = "/admin/category"
            }


        });
    }
}

export default UpdateCategories
