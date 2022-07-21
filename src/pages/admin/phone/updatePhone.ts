import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"

const updatePhone = {
    render() {
        return`
        ${HeaderAdmin.render()}
    
        <div class="flex justify-between px-[30px] mt-[30px]">
            ${Sidebar.render()}

            <div class="ml-[20px] bg-[#E5E5E5] w-full p-[25px] max-h-[100%] h-full">
                <div>
                    <h2 class="capitalize text-[20px] leading-[30px] text-[#5F5E61] font-bold">cât nhật sản phẩm</h2>
                    
                    <div class="flex justify-between items-start mb-[50px]">
                        <div class="mt-[32px] rounded-2xl shadow-2xl overflow-hidden bg-[#fff]"">
                            <div class="shadow-xl">
                                <img class="max-w-[384px] w-full" src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-13-03.jpg">
                            </div>
                            <div class="rounded-b-2xl overflow-hidden">
                                <label for="text" class="capitalize text-[16px] text-[#5A6169] bg-[#fff] block pl-[15px] pt-[25px]">mô tả ngắn...</label>
                                <textarea id="text" name="" rows="4" cols="50" class="outline-0 px-[15px] max-w-[384px] w-full"></textarea>
                            </div>
                        </div>
                        <div class="max-w-[650px] w-full pt-[30px]" >

                            <h3 class="capitalize text-[#3D5170] text-[20px] leading-[24px] font-medium">thông tin sản phẩm</h3>
                            <hr class="bg-[#fff] text-[#555658] mt-[10px] h-[2px]">

                            <div>
                                <div class="mt-[10px]">
                                <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">tên sản phẩm</label><br>
                                <input type="type" id="name" class="w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize">
                                </div>

                                <div class="mt-[10px] flex justify-between">
                                    <div class="max-w-[300px] w-full">
                                        <label for="price" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">giá gốc</label><br>
                                        <input type="type" id="price" class="max-w-[650px] w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize">
                                    </div>
                                    <div class="max-w-[300px] w-full">
                                        <label for="sale" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">giá khuyến mãi</label><br>
                                        <input type="type" id="sale" class="max-w-[350px]w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize">
                                    </div>
                                </div>
                                <div class="mt-[10px]">
                                        <label for="category" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">danh mục</label><br>
                                        <select class="max-w-[400px] w-full mt-[5px] p-[10px] outline-0 capitalize">
                                            <option value="" class="capitalize">lattop</option>
                                            <option value="" class="capitalize">lattop</option>
                                            <option value="" class="capitalize">lattop</option>
                                        </select>
                                </div>

                                <div class="mt-[10px]">
                                    <label for="decs" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">đặc điểm nổi bật</label><br>
                                    <textarea id="text" name="" rows="5" cols="50" class="mt-[5px] py-[5px] outline-0 px-[15px] w-full"></textarea>
                                </div>
                                <div class="mt-[10px]">
                                    <label for="decs" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">mô tả dài</label><br>
                                    <textarea id="text" name="" rows="6" cols="50" class="mt-[5px] py-[5px] outline-0 px-[15px] w-full"></textarea>
                                </div>

                                <div class="mt-[20px]">
                                    <button class="capitalize bg-[#00B0D7] text-[#fff] rounded-lg px-[20px] py-[10px]">thêm mới</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>                
            </div>
        </div>
        `
    }
}

export default updatePhone