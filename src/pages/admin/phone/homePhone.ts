import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"

const homePhone = {
    render() {
        return`
            ${HeaderAdmin.render()}
            
            <div class="flex justify-between px-[30px] mt-[30px]">
                ${Sidebar.render()}

                <div class="ml-[20px] bg-[#E5E5E5] w-full p-[25px] max-h-[100%] h-full">
                    
                    <div class="flex justify-between">
                        <div>
                            <h2 class="mb-[20px] text-[20px] text-colorText capitalize font-semibold">
                                Điện thoại
                            </h2>
                            <div class="flex justify-between items-center w-[490px] w-full">
                                <div class=""><h3>Bộ lọc</h3></div>
                                <div>
                                    <h3 class="mb-[10px] capitalize text-[13px] leading-[19px]">danh mục sản phẩm</h3>
                                    <select name="" id="" class="w-[400px] h-[35px] leading-[35px] pl-[10px]  outline-0">
                                        <option value="" >Lattop</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mr-[20px] text-[30px] ">
                            <a href="/createphone"><i class="fa-solid fa-plus  border-[#00B0D7] border-[3px] p-[6px] cursor-pointer text-[#00B0D7]"></i></a>
                        </div>
                    </div>

                    <div class="mt-[50px]">      
                        <table class="table-fixed max-w-[1110px]">
                        <thead>
                        <tr class="border-t-[1px] border-[#333] ">
                            <th class="capitalize text-center">#</th>
                            <th class="capitalize text-center">tên sản phẩm</th>
                            <th class="capitalize text-center">thành tiền</th>
                            <th class="capitalize text-center">mô tả</th>
                            <th class="capitalize text-center">ẩn hiện</th>
                            <th class="capitalize text-center">thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="border-t-[1px] border-[#333]">
                            <td class="text-center py-[10px] px-[50px] tracking-wider">0</td>
                            <td class="text-center py-[10px] px-[50px] tracking-wider">iphone</td>
                            <td class="text-center py-[10px] px-[50px] tracking-wider">100.000đ</td>
                            <td class="text-justify py-[10px] px-[50px]">
                            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,Lorem Ipsum chỉ đơn
                            giản là một đoạn văn bản giả,Lorem Ipsum chỉ đơn giản là một đoạn văn
                            bản giả,
                            </td>
                            <td class="text-center py-[10px] px-[50px] tracking-wider"></td>
                            <td class="text-center py-[10px] px-[50px] tracking-wider"></td>
                        </tr>

                        
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>


        `
    }
}

export default homePhone