import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { CreatCategory } from "../../../api/categorys"

const CreateCategories = {
    render() {
        return /*html*/`
            ${HeaderAdmin.render()}
            <div class="flex justify-between px-[30px] mt-[100px]">
            ${Sidebar.render()}
            <div class="card-body h-[500px] overflow-y-scroll w-full bg-[#E5E5E5]">
            <div class="ml-[20px] w-full p-[25px] max-h-[100%] h-full">
                <div>
                    <h2 class="capitalize text-[20px] leading-[30px] text-[#5F5E61] font-bold">thêm mới danh mục sản phẩm</h2>
                    <div class="flex justify-between items-start mb-[50px]" id="fromCreat">
                        <div class="max-w-[650px] w-full pt-[30px] ml-[30px]" >
                            <div>
                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">tên danh mục</label><br>
                                    <input type="type" id="name" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" id="name">
    <span class="error-input block text-red-500 text-xs "><span>
                                </div>
                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">Icon</label><br>
                                    <input type="type" id="icon" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" id="name">
    <span class="error-input block text-red-500 text-xs "><span>
                                </div>
                                <div class="mt-[20px]">
                                    <button type="submit" class="capitalize bg-[#00B0D7] text-[#fff] rounded-lg px-[20px] py-[10px]" id="addCategory">thêm mới</button>
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
    afterRender(){
        const addCategory = document.getElementById('addCategory');
        console.log(addCategory);
        addCategory?.addEventListener('click', async function(e:any){
            e.preventDefault();
            const category = {
                name: document.getElementById('name')?.value,
                icon: document.getElementById('icon')?.value
            }
            console.log(category);
            const result = await CreatCategory(category);
            if(result){
                alert("Thêm danh mục sản phẩm thành công")
                setTimeout(function() {
                    location.href = "/admin/category"
                },3000)
            }
        })
    }
}

export default CreateCategories
