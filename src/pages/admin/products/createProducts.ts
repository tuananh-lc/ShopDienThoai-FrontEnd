import { CategoryGetAll } from "../../../api/categorys"
import { upload } from "../../../api/image"
import { CreatrProducts } from "../../../api/products"
import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { ICategory } from "../../../Interface/ICategorys"
import { $$ } from "../../utilities/utiliti"

const createProducts = {
    async render() {
        const categoryData = await CategoryGetAll()
        const category:ICategory[] = categoryData.data
        const cate = category.map(item =>`
             <option value="${item._id}" class="capitalize">${item.name}</option>
        `).join("")
        return/*html*/`
        ${HeaderAdmin.render()}
            
        <div class="flex justify-between px-[30px] mt-[100px]">
            ${Sidebar.render()}
            <div class="card-body h-[500px] overflow-y-scroll w-full bg-[#E5E5E5]">
            <div class="ml-[20px] w-full p-[25px] max-h-[100%] h-full">
                <div>
                    <h2 class="capitalize text-[20px] leading-[30px] text-[#5F5E61] font-bold">thêm mới sản phẩm</h2>
                    
                    <div class="flex justify-between items-start mb-[50px]" id="fromCreat">
                        <div class="mt-[32px] rounded-2xl shadow-2xl overflow-hidden bg-[#fff]">
                            <div class="shadow-xl">
                                <img id="preview-image" class="max-w-[384px] w-full" >
                                <input id="edit-file" type="file" type="file" accept="image/png, image/jpg, image/jpeg" >
                            </div>
                            <div class="rounded-b-2xl overflow-hidden">
                                <label for="text" class="capitalize text-[16px] text-[#5A6169] bg-[#fff] block pl-[15px] pt-[25px]">mô tả ngắn...</label>
                                <textarea id="descSort" name="" rows="4" cols="50" class="check-validate outline-0 px-[15px] max-w-[384px] w-full"></textarea>
                                <span class="error-input block ml-[8px] text-red-500 text-xs "><span>
                            </div>
                        </div>
                        <div class="max-w-[650px] w-full pt-[30px] ml-[30px]" >

                            <h3 class="capitalize text-[#3D5170] text-[20px] leading-[24px] font-medium">thông tin sản phẩm</h3>
                            <hr class="bg-[#fff] text-[#555658] mt-[10px] h-[2px]">

                            <div>
                                <div class="mt-[10px]">
                                <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">tên sản phẩm</label><br>
                                <input type="type" id="name" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" id="name">
                                <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[10px] flex justify-between">
                                    <div class="max-w-[300px] w-full">
                                        <label for="price" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">giá gốc</label><br>
                                        <input type="type" id="price" class="check-validate max-w-[650px] w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" id="price">
                                        <span class="error-input block text-red-500 text-xs "><span>
                                    </div>
                                    <div class="max-w-[300px] w-full">
                                        <label for="sale" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">giá khuyến mãi</label><br>
                                        <input type="type" id="sale" class="check-validate max-w-[350px]w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize" id="sale">
                                        <span class="error-input block text-red-500 text-xs "><span>
                                    </div>
                                </div>
                                <div class="mt-[10px]">
                                        <label for="category" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">danh mục</label><br>
                                        <select class="max-w-[400px] w-full mt-[5px] p-[10px] outline-0 capitalize" id="selectCate">
                                            ${cate}
                                        </select>
                                </div>

                                <div class="mt-[10px]">
                                    <label for="outstanding"  class="capitalize text-[16px] leading-[19px] text-[#5A6169]">đặc điểm nổi bật</label><br>
                                    <textarea id="outstanding" name="outstanding" rows="5" cols="50" class="check-validate mt-[5px] py-[5px] outline-0 px-[15px] w-full"></textarea>
                                    <span class="error-input block text-red-500 text-xs "><span>
                                </div>
                                <div class="mt-[10px]">
                                    <label for="decsLong" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">mô tả dài</label><br>
                                    <textarea id="descLong" name="decsLong" rows="6" cols="50" class="check-validate mt-[5px] py-[5px] outline-0 px-[15px] w-full"></textarea>
                                    <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[20px]">
                                    <button type="submit" class="capitalize bg-[#00B0D7] text-[#fff] rounded-lg px-[20px] py-[10px]" id="addProducts">thêm mới</button>
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
    afterRender() {
        $$('#list').classList.add("text-active")
        $$('#list').classList.add("bg-blue-500")
        let checkValidate = false
        const editFile = $$('#edit-file')
		const previewImage = document.querySelector('#preview-image')

		editFile?.addEventListener('change', (event:any) => {
			const file = event.target.files[0]
			const reader = new FileReader()
            console.log(reader);
            
			reader.readAsDataURL(file)
			reader.onloadend = async () => {
				const res = await upload(reader.result)
				console.log(res)
				const data = res.data
				previewImage.src = data.url
			}
		})

        $$(".check-validate").forEach((item:any, index:number) => {
            console.log(item);
            
            item.onblur = () => {
                if(item.value) {
                    $$(".error-input")[index].innerHTML = ""
                    checkValidate = true
                }else{
                    $$(".error-input")[index].innerHTML = "Giá trị chưa được nhập";
                    checkValidate = false
                }
            }
        }) 
        $$("#addProducts").addEventListener('click', function(e:any) {
            e.preventDefault()
            $$("#selectCate").value
            $$(".check-validate").forEach((item:any, index:number) => {                
            if (item.value?.trim() == "" || item.value == null) {
              $$(".error-input")[index].innerHTML = "Giá trị chưa được nhập";
              checkValidate =  false
            } else {
              $$(".error-input")[index].innerHTML = "";
              checkValidate = true
            }
          })
        })
        $$("#addProducts").addEventListener('click',async function(e:any) {
            e.preventDefault()
          if(checkValidate){
            const price = $$("#price").value
            const sale = $$("#sale").value
            const cate = $$("#selectCate").value

            const product = {
                name:$$("#name").value,
                price:parseInt(price),
                sale:parseInt(sale),
                image:previewImage?.src,
                categoryId: String(cate),
                feature:$$("#outstanding").value,
                descriptionLong:$$("#descLong").value,
                descriptionShort:$$("#descSort").value,
                ishidden:true
            }
           console.log(product);
            const result = await CreatrProducts(product)
            if(result){
                alert("Thêm sản phẩm thành công đợi 3s để quay lại")
                setTimeout(function() {
                    location.href = "/admin/products"
                },3000)
            }
          }
        })
        
        
    }
}

export default createProducts
