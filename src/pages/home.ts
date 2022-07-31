import { CategoryGetAll } from "../api/categorys";
import { ProductsGetAll } from "../api/products";
import Foodter from "../components/footer/footer";
import HeaderUser from "../components/Header/User";
import { ICategory } from "../Interface/ICategorys";
import { ListProducts } from "../Interface/IProducts";
import { $$ } from "./utilities/utiliti";

const homePage = {
    async render() {
        const CategoryData =await CategoryGetAll()
        const categorys:ICategory[] = CategoryData.data
        const ProductsData =await ProductsGetAll()
        const products:ListProducts[] = ProductsData.data
        console.log(products);
        
        return`
         ${HeaderUser.render()}
         <section class="md:flex md:justify-between md:items-start max-w-[1240px] m-auto md:mt-[30px]">
            <div class="hidden md:block px-[20px] capitalize  shadow-[#333]-500/50 shadow-2xl max-w-[300px] w-full h-[384px]">
                <ul>
                ${categorys.map((category:any) => `
                        <li class="mt-[15px] hover:text-red-600 transition ease-in-out delay-150 text-[#727272]">
                                <i class="fa-solid fa-phone"></i>
                                <a href="#!" class="ml-[10px]">${category.name}</a>
                        </li>
                `).join("")}
                    
                    
                </ul>
            </div>
            <div class="w-full md:ml-[20px]">        
                <div id="controls-carousel" class="relative" data-carousel="static">
                <!-- Carousel wrapper -->
                <div class="overflow-hidden relative h-56 md:rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                        <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/CPS_690x300_19July22.jpg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                    <!-- Item 2 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                        <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/khai-truong-mien-nam.png" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                    <!-- Item 3 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                        <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/poco%20f4.png" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
                </div>

            </div>
         </section>
        
        <section>
            <div class="bg-white">
                <div class="max-w-2xl mx-auto py-7 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="uppercase font-bold text-[20px] md:text-[25px] text-[#444]">sản phẩm nổi bật</h2>
            
                <div class="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-[15px]">
                    
                    ${products.map((product:any) => `

                                <a href="/detailproducts/${product.id}" class="group hover:shadow-lg px-[15px] py-[25px] rounded-md">
                                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="${product.image}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                                </div>
                                <div class="pr-[10px]">
                                    <h3 class="mt-4 text-sm text-gray-700 capitalize">${product.name}</h3>
                                    <div class="mt-[10px] flex justify-start items-center">
                                        <p class="text-red-500">${product.price}₫</p>
                                        <p class="text-gray-500 ml-2 line-through">${product.sale}₫</p>
                                    </div>
                                    <div class="bg-[#F3F4F6] p-[10px] mt-3">
                                        <span class="text-[12px] capitalize">${product.outstanding}</span>
                                    </div>
                                    <div class="mt-3">
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>                                        
                                    </div>
                                </div>
                                </a>
                    `).join("")}
                </div>
                </div>
            </div>
        </section>
        ${Foodter.render()}
        `
    },
    afterRender() {
        
        
    }
}

export default homePage;