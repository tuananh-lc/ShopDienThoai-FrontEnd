import { ProductsGet, UpdateProducts } from "../../../api/products"
import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { $$ } from "../../utilities/utiliti"
import { ListProducts } from "../../../Interface/IProducts"
import { ICategory } from "../../../Interface/ICategorys"
import { CategoryGetAll } from "../../../api/categorys"
const updateProducts = {
    async render(id: any) {
        // console.log(typeof id);

        const ProductData = await ProductsGet(id)
        const product: ListProducts = ProductData.data
        // console.log(product);
        const categoryData = await CategoryGetAll()
        const category: ICategory[] = categoryData.data
        const cate = category.map(item => `
             <option value="${item.id}" class="capitalize">${item.name}</option>
        `).join("")
        // console.log(cate);

        return `
        ${HeaderAdmin.render()}
    
        <div class="flex justify-between px-[30px] mt-[100px]">
            ${Sidebar.render()}
            <div class="card-body h-[600px] overflow-y-scroll w-full bg-[#E5E5E5]">
            <div class="ml-[20px] w-full p-[25px] max-h-[100%] h-full">
                <div class="">
                    <h2 class="capitalize text-[20px] leading-[30px] text-[#5F5E61] font-bold">cập nhật sản phẩm</h2>
                    
                    <div class="flex justify-between items-start mb-[50px]">
                        <div class="mt-[32px] rounded-2xl shadow-2xl overflow-hidden bg-[#fff]"">
                            <div class="shadow-xl">
                                <img class="max-w-[384px] w-full" src="${product.image}" id="image">
                            </div>
                            <div class="rounded-b-2xl overflow-hidden">
                                <label for="descSort" class="capitalize text-[16px] text-[#5A6169] bg-[#fff] block pl-[15px] pt-[25px]">mô tả ngắn...</label>
                                <textarea id="descSort" name="descSort" rows="4" cols="50" class="check-validate outline-0 px-[15px] max-w-[384px] w-full">${product.descriptionSort}</textarea>
                                <span class="error-input block text-red-500 text-xs "><span>
                            </div>
                        </div>
                        <div class="max-w-[600px] w-full pt-[30px]" >

                            <h3 class="capitalize text-[#3D5170] text-[20px] leading-[24px] font-medium">thông tin sản phẩm</h3>
                            <hr class="bg-[#fff] text-[#555658] mt-[10px] h-[2px]">

                            <div>
                                <div class="mt-[10px]">
                                <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">tên sản phẩm</label><br>
                                <input type="type" id="name" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" value="${product.name}">
                                <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[10px] flex justify-between">
                                    <div class="max-w-[300px] w-full">
                                        <label for="price" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">giá gốc</label><br>
                                        <input type="type" id="price" class="check-validate max-w-[650px] w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" value="${product.price}">
                                        <span class="error-input block text-red-500 text-xs "><span>
                                    </div>
                                    <div class="max-w-[300px] w-full ml-[10px]">
                                        <label for="sale" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">giá khuyến mãi</label><br>
                                        <input type="type" id="sale" class="check-validate max-w-[350px]w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" value="${product.sale}">
                                        <span class="error-input block text-red-500 text-xs "><span>
                                    </div>
                                </div>
                                <div class="mt-[10px]">
                                        <label for="category" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">danh mục</label><br>
                                        <select class="max-w-[400px] w-full mt-[5px] p-[10px] outline-0 capitalize" id="selectCate">
                                            <option value="${product.categoryId}">${product.category.name}</option>
                                            ${cate}
                                        </select>
                                </div>

                                <div class="mt-[10px]">
                                    <label for="outstanding" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">đặc điểm nổi bật</label><br>
                                    <textarea id="outstanding" name="outstanding" rows="5" cols="50" class="check-validate mt-[5px] py-[5px] outline-0 px-[15px] w-full">${product.outstanding}</textarea>
                                    <span class="error-input block text-red-500 text-xs "><span>
                                </div>
                                <div class="mt-[10px]">
                                    <label for="descLong" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">mô tả dài</label><br>
                                    <textarea id="descLong" name="descLong" rows="6" cols="50" class="check-validate mt-[5px] py-[5px] outline-0 px-[15px] w-full">${product.descriptionLong}</textarea>
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
    afterRender(id:any) {

        $$('#list').classList.add("text-active")
        $$('#list').classList.add("bg-blue-500")

        let checkValidate: boolean = false
        $$(".check-validate").forEach((item: any, index: number) => {
            // console.log(item);

            item.onblur = () => {
                if (item.value) {
                    $$(".error-input")[index].innerHTML = ""
                    return checkValidate = true
                } else {
                    $$(".error-input")[index].innerHTML = "Giá trị chưa được nhập";
                    checkValidate = false
                }
            }
        })
        $$("#btnUpdate").addEventListener('click', function () {
            $$(".check-validate").forEach((item: any, index: any) => {
                if (item.value?.trim() == "" || item.value == null) {
                    $$(".error-input")[index].innerHTML = "Giá trị chưa được nhập";
                    checkValidate = false
                } else {
                    $$(".error-input")[index].innerHTML = "";
                    return checkValidate = true
                }

            })
        })
        $$("image").src
        $$("#btnUpdate").addEventListener('click', async function () {
            if (checkValidate) {
                const imgInfo = $$("#image").src
                const price = $$("#price").value
                const sale = $$("#sale").value
                const cate = $$("#selectCate").value

                const product = {
                    id: id,
                    name: $$("#name").value,
                    price:parseInt(price),
                    sale:parseInt(sale),
                    image: imgInfo,
                    categoryId: parseInt(cate),
                    outstanding: $$("#outstanding").value,
                    descriptionLong: $$("#descLong").value,
                    descriptionSort: $$("#descSort").value,
                    ishidden: true
                }
                // console.log(product);

                const NewProduct = await UpdateProducts(product, id)
                // console.log(NewProduct);
                if(NewProduct){
                    confirm("Cập nhật thành công")
                    location.href = "/admin/products"
                }

            }
        })




    }
}

export default updateProducts