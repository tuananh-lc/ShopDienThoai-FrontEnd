import Foodter from "../components/footer/footer"
import HeaderUser from "../components/Header/User"

const cartProducts = {
    render() {
        return`
            ${HeaderUser.render()}

                <section class="max-w-[1240px] m-auto px-[20px] mb-[80px]">
                    <div class="max-w-[570px] w-full m-auto">
                        <div class="flex mt-[10px]">
                        <div class="flex items-center justify-between w-[70px]">
                            <a href="/">
                            <i class="fa-solid fa-chevron-left"></i>
                            <span class="capitalize ml-[5px]">trở về</span>
                            </a>
                        </div>
                        <div class="text-center w-full max-w-[400px]">
                            <span class="capitalize text-[18px] font-medium text-red-500"
                            >giỏ hàng</span
                            >
                        </div>
                        </div>

                        <div
                        class="mt-[30px] shadow-xl py-[20px] px-[20px] rounded-xl flex justify-between items-start"
                        >
                        <div>
                            <img
                            src="https://image.cellphones.com.vn/200x/media/catalog/product/i/p/iphone-11_3__1.jpg"
                            alt=""
                            class="w-full max-w-[180px]"
                            />
                        </div>
                        <div class="ml-[10px]">
                            <h3 class="capitalize text-[18px] text-[#333] font-medium">
                            iPhone 11 128GB Tím
                            </h3>
                            <div class="flex items-center justify-between">
                            <span class="text-red-500 text-[16px] font-medium"
                                >13.290.000 ₫</span
                            >
                            <span class="text-[#888] line-through text-[14px]"
                                >17.290.000 ₫</span
                            >
                            <span
                                class="py-[5px] px-[10px] bg-red-600 text-white capitalize ml-[10px] rounded-lg inline-block"
                            >
                                giảm 30%
                            </span>
                            </div>

                            <div class="mt-[5px]">
                            <span class="capitalize">chọn số lượng: </span>
                            <input type="number" class="w-full" />
                            </div>
                        </div>
                        <div>
                            <button>
                            <i class="fa-solid fa-xmark text-[20px] text-[#777]"></i>
                            </button>
                        </div>
                        </div>

                        <div class="mt-[50px] shadow-lg p-[20px]">
                        <div class="flex justify-between">
                            <h3 class="text-[18px] capitalize font-medium">
                            tổng tiền tạm tính:
                            </h3>
                            <span class="text-red-500 text-[16px] font-bold">17.820.000 ₫</span>
                        </div>
                        <button
                            class="block bg-red-500 w-full mt-[10px] py-[15px] text-white capitalize font-bold transition delay-150 duration-300 ease-in-out hover:bg-red-600 rounded-lg"
                        >
                            tiến hành đặt hàng
                        </button>
                        <button
                            class="block bg-white w-full mt-[10px] py-[15px] text-red-600 capitalize border-[1px] border-red-600 font-bold transition delay-150 duration-300 ease-in-out hover:bg-red-600 hover:text-white rounded-lg"
                        >
                            chọn thêm sản phẩm khác
                        </button>
                        </div>
                    </div>
                    </section>
                ${Foodter.render()}
        `
    }
}

export default cartProducts