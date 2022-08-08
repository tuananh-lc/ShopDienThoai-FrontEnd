import { result } from "lodash";
import { CategoryGetAll, CategoryGetOne } from "../api/categorys";
import { ProductsGetAll } from "../api/products";
import { search } from "../api/search";
import Foodter from "../components/footer/footer";
import HeaderUser from "../components/Header/User";
import { ICategory } from "../Interface/ICategorys";
import { ListProducts } from "../Interface/IProducts";
import { $$, reRender } from "./utilities/utiliti";

const homePage = {
  async render() {
    const CategoryData = await CategoryGetAll();
    const categorys: ICategory[] = CategoryData.data;
    const ProductsData = await ProductsGetAll();
    const products: ListProducts[] = ProductsData.data;
    // console.log(categorys);

    return `
         ${HeaderUser.render()}
         <section class="md:flex md:justify-between md:items-start max-w-[1240px] m-auto md:mt-[100px] mt-[80px]">
            <div class="hidden md:block px-[20px] capitalize  shadow-[#333]-500/50 shadow-2xl max-w-[250px] w-full h-[384px]">
                <ul>
                ${categorys
                  .map(
                    (category: any) => `
                        <li class="mt-[15px] hover:text-red-600 transition ease-in-out delay-150 text-[#727272]">
                                <i class="${category.icon}"></i>
                                <button data-id="${category._id}" id="btn-cate" class="ml-[10px]">${category.name}</button>
                        </li>
                `
                  )
                  .join("")}
                    
                    
                </ul>
            </div>
            <div class="w-full md:ml-[20px]">        
                <div id="controls-carousel" class="relative" data-carousel="static">
                <!-- Carousel wrapper -->
                <div class="overflow-hidden relative h-56 md:rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                    <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/poco%20f4.png" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    </div>
                    <!-- Item 2 -->
                    <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/khai-truong-mien-nam.png" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                    </div>
                    <!-- Item 3 -->
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                    <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/CPS_690x300_19July22.jpg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
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
            <div class="bg-white" id="valueProducts">
                <div class="max-w-2xl mx-auto py-7 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="uppercase font-bold text-[20px] md:text-[25px] text-[#444]">sản phẩm nổi bật</h2>
            
                <div class="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-[15px]" id="showProducts">
                    
                    ${products
                      .map((product: any) => {
                        if (product.ishidden) {
                          return `
                                <a href="/#/detailproducts/${
                                  product._id
                                }" class="relative group hover:shadow-lg px-[15px] py-[25px] rounded-md">
                                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="${
                                      product.image
                                    }" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                                </div>
                                <div class="pr-[10px]">
                                    <h3 class="mt-4 text-sm text-gray-700 capitalize">${
                                      product.name
                                    }</h3>
                                    <div class="mt-[10px] flex justify-start items-center">
                                        <p class="text-red-500">${product.sale.toLocaleString(
                                          "vi",
                                          { style: "currency", currency: "VND" }
                                        )}</p>
                                        <p class="text-gray-500 ml-2 line-through">${product.price.toLocaleString(
                                          "vi",
                                          { style: "currency", currency: "VND" }
                                        )}</p>
                                    </div>
                                    <div class="bg-[#F3F4F6] p-[10px] mt-3">
                                        <span class="text-[12px] capitalize">${
                                          product.feature
                                        }</span>
                                    </div>
                                    <div class="mt-3">
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>                                        
                                    </div>
                                </div>

                                <div class="absolute top-0 left-0">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU2IDEwMCI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGltYWdlIHdpZHRoPSIyNTYiIGhlaWdodD0iMTAwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBQmtDQVlBQUFCcFlPNmVBQUFOKzBsRVFWUjRuTzNkQ1hCZDFYMEc4TytjZSs5YkpWdDYxbVpKbG1RNXRyQUQzaGNnWUUvQkpWQWdtWTZocVFuVXVDbkVVNUxNbERiTk1pUnBRcEp1NlRiTkRKM1M2VXpqSkpPR2FTY1pHakpBM2NRYlJzUVlPNVozNGQzV2duYTk5VzZuYzY1a1ljY0d5WGpUZSsvN3pad1pZTUM4KzZUejNmOVo3cmtpMDdvVFJsa1pjbS91aHIybkRTSlJCdmY0cVRuT29TT2Y5cnJlV1FMWHExYVpqSUJoK0NDaWlWRktpSERJTlJMbEtiOS9zRWRGSTRNeUh1dXhHbWNjOEpPcFhVYmpqUGJRcktZK3I2TUx4c3hHK0oxZDhIcjZBQ0VnNGxFWU5kV3dEeHlHZ0lKUUNpb2VSM2o1RXJoNzJ1QU5EQUttQ2FPNlF2ZFZHUFcxY0E2MUk3cnlOc1RXZkF4K2J6K1VQN0h1YXNMem9RQVlEZlh3TjIrYm1uMzFsei9xUFhENDNuNGZpQW9nREtCRUFMN2dENTdvY21RVTBIWDhES3JseUgraysxUm81eDdVQ2tERVl5b2RDUjh6cXFzMm0vUG12R29tRWkvSlJObWc3dGhCNTFYcXVuelhwbTlJR0lreU9OdDJmTGo5UDM2OGRVaWhmRTdJUkpscFhMY1BRVlNJOU0yejdMenJHdnRyZlVkUFo4UmdLdDFzOS9RM1ovWWRXdDhRaTJTTW1xb2RSdDMwSDRXWExkcG8xRTdQeXE1dXFMNStxR3ZZRDgzUW92bXczOWhWc2YrcEwyeXlnZktXZUFTNGpnbEVWSFIwbVIreXhnSkJDQUUvazQyZU9ucnlMdS9veWJzYTl1ejdKMnZoelJ0bG92eTdvZG5OZTJFNzhISzVhL0l0bWY2SlV4aDQ1cHZQbmZaUnZYeEtETXAxK1F0SmRCM3BPN3dJaDFBblJCQU96bkF5ZW1EejYwOVdDenhaK2VHV0Y4MzYyajhQMzdIaW9GbFZBZGYzb1pTUHF6VWlONGRmK01rdEIzYnNlbWhweUdEbko3cVJkTld0Rkt4d0NITjFHSGdlenV3NzlLQzk3OUNEVFNkUC8weVk1aDhiTStwTytvNERsYk92eWdlVlR1dXV0Y01LUVVsQ1JKT0VEZ01wVVJNTm95RnM0Y0QrSS9kM2ZmbWJKMUkvZmVsckloeUdUSXdNSUs2MEVwQnVSK2Y4bVA1VEpyaHNRRVRYa1E0Q0lYQlRhUXdHZ0xZdHJYOHgvRzhiajN0ZDNiT015a3BBVDlaZlFkK1ZLcFd1bjhvbFBxSkpUUS9QOWRDZ0pSWkc3M0Nxc1hQakMrMlpsemR0TU1yTElXTFJZSytBK0FEejloS09JeU1NQUtMOG9CUXFZaEhFQUJ6NjJhYm5rdi81M3h0RkpBSTVMUUc5cCtkeVNRanBjOFdQS0kvNFBxeG9CRTBoRS92UGREK2FmUDU3dS8ydTdyaXNxUnJaWTNBWkhWcnk1MDZVaC9TNDM1Q1lWeHJEc2JkUExOajU0cXY3QUZWdlZWVUdrNGVCMFdYRjkyc01BS0k4cHVjR0dxTmhQU1JvN1BuY0YzZWt0cnhXYVZRa3hwWVV4MnNNQUtKOHB4Um1UWW5qWU45US9aWjdIdDZjZWVVWFU2elp6VUFtQ3pqTyt6YVRQM3lpL0tjY0p4Z083QnBLeiszN3M2LzgzR3hxK0loUlhRbjM5RmtJODcyN09Tc0FvZ0toaHdPTHA4YXhzMmZ3OXQ3MW4zbEJKTk9RZWo2Z2Z4QnE0TktOQVVCVVFIUWxzQ3dlUnV1eDB3OE5mT3M3enhqVlZSQ1crWjQ3QmhrQVJBVm9zUUZzLzhuTHo2WmYvUGxLT2FzSlNsY0NsblZSWXdBUUZScWxZTVpqU0FpZy82dC90ZEh2N29sWnpVM0I4ejRpRXI2Z01RQ0lDcENlRDVoWkdzT2JqdDh3OE8yL2Z6YllONUJNQTBQSkN4b0RnS2hBNlJCWWFnQ3RyMng1T3JmenJjWGhWYmNINXdjYURYVmpqY3VBUkFWTXhtUEFVQm9ELy9EYzN4cDEwKzkyejNZRzV3eWN3d3FBcUlEcEttQ1JYaFZvTzN4WFp0UG0rNk4zcjRRNXN4Rm1jMVBRR0FCRVJVQWZVSnJiL05vWGtFcVBQQnVnVC85eVhRWUFVY0ZUQ3ZQallienh4cDQ3Qi8vdXV4L1hJZUFlT1Fxbi9Tam5BSWlLU2E3OTJHTlRtaHArQ3NNSU5nZXhBaUFxQmtwaGdTblF0YTExVGZybFRUY3BmZnB3VHk4RGdLaFl5RWdZSnowZzkvck94OHdaZFRDbkpSZ0FSRVhEOTFFcEFXZDMyNzI1clR2Zy9Ib2ZBNENvbU5TSFRBd2VQN2s0dDN2dklzU2pEQUNhZ0hPbnlsRCtNd3djOFFDVnlkd1RYcmFFQVVBVG9KOGswMDN3K09qTGRxbnorRzRrcGFCZkEyQy91ZWNCL1dweUxnUFN1SVJoQlAvSzJEdm5XUTFNbkQ2dlh3aU1mV1BuQXVBR2ZvZDFCdUIxZE01MVQ1eU1NUUJvWEdwMDc3aisxV1hYdjN3WEhOTTkrcWFmb04yZ0VMQWc0QXdscHdHWXpTRUFUWmppWE1EVmNlNTd2RUhEQVdtWjZGQ0F2WGZmQWdZQWpTdjROV1hIdi9wdTFIY3FCSHdkQUFlUExHUUEwTGpZOVF1VTY5VXhBR2g4dlBzWEhDa0FQNTJwWWdEUXU3ak1WelNxSmZTeDRGTVpBUFF1M3VtTGhxT0N5Y0FTQmdCUkVZb2pHQUpFR0FCRXhVaS9Mc3h4VFFZQVVSSFNtN3VVZ004QUlDcENXU2pJa25pT0FVQlVoRUo2TTZManBoa0FSRVdvUjY4Q2xKWU1NZ0NJaXRDZ2ZoU2hiR29mQTRDb1dKbEdCd09BcUFqWnV2L1gxeDVoQUJBVkdlWDUwRThCV1RmUGZZMEJRRlJrZk5kRkloSjJoVFNPTVFDSWlzdzdlZ1VnVVhiWXJKdk9PUUNpb2lJRXVuekFiSm45ZjJaOUxVOEZKaW9xU3FGRUFLSFpzLzVYRFE0ekFJaUt5VURPeHF5cXhGbHIyYUtYUE50bUFCQVZEU0dDZHdOYXpZMmJqUmwxRG55UDd3VWdLaHBLSWF6TC81dm4vVkIxZE1FN2M1WUJRRlFzVG1SdHpHMnFiNHZkdC9wL2xPUENySy9qRUlDb0dBalRSTGNQV0l2bmY4K3NxNFd5N2VCa1VGWUFSRVZnT0pYRzBsaW9MM0xyMHVlenUzOE5QNWtPTHBvQlFGVG9wRVNiQjZ4K2N0MWZsMzN1MHdQMjI4ZkdUb0JtQUJBVk1pSFFuODVpaFNtNlEwc1cva3Y2RjF2aDkvYVBCUURuQUlnS1hMc1B4Sjk0N0puUXZKWWgvNTFlQ0NtRE54YnJ4Z3FBcUZCSmlUM0pMRmJNckcrZHN2N1I1NzNoSkdSRjRvS0xaUUFRRlNJaDRHYXkwQzkyTC92R2wvNDBORzhPN0VQdCtoU2dDeTZXQVVCVW9IWjZ3S28xdi9PMTZPcFYyN083OXdLK2Y5R0ZjZzZBcU1BSXk4S3ZVam5jMWpoOVM4WGZmUDBiZms4ZjRQa2pFMysvMFZnQkVCVVMwOFQrb1JRYUpMcXFmL0N2djJ2V1ZNRTVlZ0pXVmNVbEw1SUJRRlFvcEVReWxZWUxZTTQvLytXYThMTEZmZmJCSXhDR0VSd0RkaWtjQWhBVkFMM1YxOGxrc2NzRlZxei94TytWL2RFZmJNOGRQUTRsSlhUWGY2L0dDb0FvMzBtSlZEcU5neDV3MytjM1BEYjFpWFV2Mk8xSG9UTFpjUytNRlFCUkh0TjMvb0ZNRnUwdXNPcExuMzJpNGx0ZitiNmVCMUJEU1FoZmpkdFlBUkRsS3luUnI4ZjhDbGh5NTdKUGxLNWIrMlBuK0VuNGc4UDZwUjhUdWlnR0FGRytHZDNIZnp5VjFRZDhlQi9hc0c2VkxDM1o3aHc4QW5OMnMzN3ROOFFFTDRrQlFKUlBwSVRLNXREbUtjeWZVYk9yWk8yYWoxb3ptM3B5Tzk4Q2ZIWFpGOElBSU1vSG94dDR6cVN6eUNsZzBlMUx2bFB5eVljL0x4d1hibWNubE85Ti9MWi9IZ1lBMFNRWExQR2wwdGp2QWJja1NydW1QUDdJeDgyNWMxcjFrMzErT2cxWUg3d2JNd0NJSmluZDhlMVVHbTFwR3dzc2ljVjNMUHRxL0lHUFBtdldUb2R6OUJoVXpvWXdybXdoandGQU5ObElpWFEyaTlNWkc3UERKcFl0YVBuM3lKS0ZYN2FXTCs3U2QzM3ZiQWVVVXNHWmZsZUtBVUEwQ2VqRE9Yekh4WURyb1ZzQkxWUGkyWnRxcW41WStxbEh2MjQxTlo3TWJYOGRia2NuWURzd3k4dXYyZ2RtQUJEZENFSkFlUjVzMTBXSGZsbUhBS29GTUsyeGZrdFZjK01QNHF0WGZWOWxzbWxqV2lLWTVQT0hoeUdubFVOY2hidisrZDQzQUlTNCtIK21YQStYdjloQVZGeDB6d242aWVzQ2hoRThpKzhxaFJ5QVhoVzhvd05sRWloUGxBMDBWMVh1Tm1xcVhnN05hOW1vaERoanphZ0R3aUc0SjA2UEhPQ2h4L21YNkl0WHcwVUJJRWFYRy9TNVljRTRRNm5nUXZUZjY0dEpleTZpMHJobUg0aW9FSnk3U2VvSGJxVHVUOUdJYTRWRFBhRndxS2VzZHZwZW82YnFEV042elZ2RzlLcHRWc01NeiszcURpYjljZ2NPd2V2b2dxRWYzeFc0NXYzc2dnQUlPcmtRR1BKY2RMZzVEQ3AvNUVLVUNrcVZhTVUwZCtsdjNmT2dkZXJzRVVRaTA0SVB4M0tBNkdLT0xVUjVtUis5ZTZXVGJYMHpLUXhqMEtxczZGTUNuakg3UXhDak4xWU1ETUFmSElMZjJ3ZEVJaU9sZ2JoMDlYMHRtT2Q2c0RSTnBGd0grendiSGI2THJQSmhRb3g5a0M3UFJaMXIyOTRqRDdXVzdHN3J6MjNaOGJaUmtZRFM2Y2FmUDlHRnNqbkltbXFFRnkrQWUrb01sSDRSUnl3S2xVeEI5ZmJCeTJVaEl4SDR1UndNeTdwaFgxNVFBZWdYQnZaNURyWTVhV1NVd2hRcEVSVW1mUFh1N2IwY0V0Rk16bFNwZENoMzkwcWd1d2ZlN3IwUWlmS1JNWTVpS1VCMGpsNmpSem9OVDIvV1NhV0JYQmJJNVlLSnY2Q25USklodERSTUUwbWxzTTBlT1Vta1hFZ0loUXM2L3puQnBvTmtDc2hrWVQ5d0Q3RHdGdmg5L1lEbmNVNkFLQS9wQ2tDODV0dHc5SXlrTUhEcGc0UE9vMHYrZEFidzNDQUVRa0JRQ2NoRWVYRDBFQ3NCb3Z3aHV4d2JuY3JIbElsMC9uUGthQWhrTWtFSWlORktRTEVTSU1vclpxZnlsSDU1Z0tGM0lsM08zVnUvWGlpZENjWXo5djIvRFV1UGJmYnVCMWdKRU9VTk13VWxkQmsvd2M0djRIbENid2FDYnZvZkRDV0R6VUhPZmF0aDZSY1A3RDBBVkNRWUFrUjVRR2FVTXNJVFdNanpSelkzS0NNZTg2MlNFc2g0YktTVmxnVFZneG15NEQreUJsaStDSDUzRDRjRFJIbkF0S0tSd1dFbzFJenpXYjJSWFlLZWtVaDRJbEVHNHpmUEhOTjMvMmdVNmc4L0NXa1k4TGUrRHFPbWlrdUVSSk9ZdEVwTERqcnFNdFlsOVozOVVrMTM4c0doa1htQng5ZEMzSGtydks1M3VFUklOSW5KeWtVTFh6SUVyczVkV204bEhrNENldVBENDJzaDcxZ0JyN09iSVVBMFNjbkdlMWYvMTAxVFN3OGZzaDNJQ1I0bC9MN09Dd0ZXQWtTVG00elgxV0xCWnpaOGRsZ0JBNW5jeUFOQlYrcFNsUUJEZ0dqU2tXWXNoaVZmZlBxVjlVOC85U2R2K3dxbnN2YllJOEZYWkRRRWdvY2ZHQUpFazVMVWh3M29sd3Jldk9GVC8vamd2WGQ5ckQ1a2VnZHpOcnB6VHZBSXNCcHRLVDFOb1BjQStMNEl6Z2p3L2ZHYm5sdlVsVUF5QlgvZDcwTitaUG5JbklEdk13U0lKZ0g5eUIvY1RBYkR4MCtodktYbHhlcmJibzAwSFRqNFZNY3Z0ejdzNVhJTnZ1dnFod1hkbW5TbXpJekZPb1ZoZUhxVGozNThlS0pVS2gwc0RlcEt3QWlINGYvcUxZaFk5T29NTjRqb2d3SHcvMzVkQzNWclB5YUxBQUFBQUVsRlRrU3VRbUNDIi8+PC9nPjwvZz48L3N2Zz4="
                                        class="max-w-[90px] w-full relative"
                                    >
                                    <span class="absolute top-0 left-[10%] text-white font-normal capitalize">
                                        giảm ${(
                                          ((product.price - product.sale) /
                                            product.price) *
                                          100
                                        ).toFixed(0)}%
                                    </span>
                                </div>
                                </a>
                            `;
                        }
                      })
                      .join("")}
                </div>
                </div>
            </div>
        </section>
        ${Foodter.render()}
        `;
  },
  afterRender() {
    $$("#btn-cate").forEach((btn: any) => {
      btn.addEventListener("click", async function () {
        const idCate = this.getAttribute("data-id");
        const { data } = await CategoryGetOne(idCate);
        const products = data.products;

        const htmls = products
          .map((product: any) => {
            if (product.ishidden) {
              return `
                                <a href="/detailproducts/${
                                  product._id
                                }" data-navigo class="relative group hover:shadow-lg px-[15px] py-[25px] rounded-md">
                                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="${
                                      product.image
                                    }" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                                </div>
                                <div class="pr-[10px]">
                                    <h3 class="mt-4 text-sm text-gray-700 capitalize">${
                                      product.name
                                    }</h3>
                                    <div class="mt-[10px] flex justify-start items-center">
                                        <p class="text-red-500">${product.price.toLocaleString(
                                          "vi",
                                          { style: "currency", currency: "VND" }
                                        )}</p>
                                        <p class="text-gray-500 ml-2 line-through">${product.sale.toLocaleString(
                                          "vi",
                                          { style: "currency", currency: "VND" }
                                        )}</p>
                                    </div>
                                    <div class="bg-[#F3F4F6] p-[10px] mt-3">
                                        <span class="text-[12px] capitalize">${
                                          product.feature
                                        }</span>
                                    </div>
                                    <div class="mt-3">
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                        <i class="fa-solid fa-star text-[#f59e0b]"></i>                                        
                                    </div>
                                </div>

                                <div class="absolute top-0 left-0">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU2IDEwMCI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGltYWdlIHdpZHRoPSIyNTYiIGhlaWdodD0iMTAwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBQmtDQVlBQUFCcFlPNmVBQUFOKzBsRVFWUjRuTzNkQ1hCZDFYMEc4TytjZSs5YkpWdDYxbVpKbG1RNXRyQUQzaGNnWUUvQkpWQWdtWTZocVFuVXVDbkVVNUxNbERiTk1pUnBRcEp1NlRiTkRKM1M2VXpqSkpPR2FTY1pHakpBM2NRYlJzUVlPNVozNGQzV2duYTk5VzZuYzY1a1ljY0d5WGpUZSsvN3pad1pZTUM4KzZUejNmOVo3cmtpMDdvVFJsa1pjbS91aHIybkRTSlJCdmY0cVRuT29TT2Y5cnJlV1FMWHExYVpqSUJoK0NDaWlWRktpSERJTlJMbEtiOS9zRWRGSTRNeUh1dXhHbWNjOEpPcFhVYmpqUGJRcktZK3I2TUx4c3hHK0oxZDhIcjZBQ0VnNGxFWU5kV3dEeHlHZ0lKUUNpb2VSM2o1RXJoNzJ1QU5EQUttQ2FPNlF2ZFZHUFcxY0E2MUk3cnlOc1RXZkF4K2J6K1VQN0h1YXNMem9RQVlEZlh3TjIrYm1uMzFsei9xUFhENDNuNGZpQW9nREtCRUFMN2dENTdvY21RVTBIWDhES3JseUgraysxUm81eDdVQ2tERVl5b2RDUjh6cXFzMm0vUG12R29tRWkvSlJObWc3dGhCNTFYcXVuelhwbTlJR0lreU9OdDJmTGo5UDM2OGRVaWhmRTdJUkpscFhMY1BRVlNJOU0yejdMenJHdnRyZlVkUFo4UmdLdDFzOS9RM1ovWWRXdDhRaTJTTW1xb2RSdDMwSDRXWExkcG8xRTdQeXE1dXFMNStxR3ZZRDgzUW92bXczOWhWc2YrcEwyeXlnZktXZUFTNGpnbEVWSFIwbVIreXhnSkJDQUUvazQyZU9ucnlMdS9veWJzYTl1ejdKMnZoelJ0bG92eTdvZG5OZTJFNzhISzVhL0l0bWY2SlV4aDQ1cHZQbmZaUnZYeEtETXAxK1F0SmRCM3BPN3dJaDFBblJCQU96bkF5ZW1EejYwOVdDenhaK2VHV0Y4MzYyajhQMzdIaW9GbFZBZGYzb1pTUHF6VWlONGRmK01rdEIzYnNlbWhweUdEbko3cVJkTld0Rkt4d0NITjFHSGdlenV3NzlLQzk3OUNEVFNkUC8weVk1aDhiTStwTytvNERsYk92eWdlVlR1dXV0Y01LUVVsQ1JKT0VEZ01wVVJNTm95RnM0Y0QrSS9kM2ZmbWJKMUkvZmVsckloeUdUSXdNSUs2MEVwQnVSK2Y4bVA1VEpyaHNRRVRYa1E0Q0lYQlRhUXdHZ0xZdHJYOHgvRzhiajN0ZDNiT015a3BBVDlaZlFkK1ZLcFd1bjhvbFBxSkpUUS9QOWRDZ0pSWkc3M0Nxc1hQakMrMlpsemR0TU1yTElXTFJZSytBK0FEejloS09JeU1NQUtMOG9CUXFZaEhFQUJ6NjJhYm5rdi81M3h0RkpBSTVMUUc5cCtkeVNRanBjOFdQS0kvNFBxeG9CRTBoRS92UGREK2FmUDU3dS8ydTdyaXNxUnJaWTNBWkhWcnk1MDZVaC9TNDM1Q1lWeHJEc2JkUExOajU0cXY3QUZWdlZWVUdrNGVCMFdYRjkyc01BS0k4cHVjR0dxTmhQU1JvN1BuY0YzZWt0cnhXYVZRa3hwWVV4MnNNQUtKOHB4Um1UWW5qWU45US9aWjdIdDZjZWVVWFU2elp6VUFtQ3pqTyt6YVRQM3lpL0tjY0p4Z083QnBLeiszN3M2LzgzR3hxK0loUlhRbjM5RmtJODcyN09Tc0FvZ0toaHdPTHA4YXhzMmZ3OXQ3MW4zbEJKTk9RZWo2Z2Z4QnE0TktOQVVCVVFIUWxzQ3dlUnV1eDB3OE5mT3M3enhqVlZSQ1crWjQ3QmhrQVJBVm9zUUZzLzhuTHo2WmYvUGxLT2FzSlNsY0NsblZSWXdBUUZScWxZTVpqU0FpZy82dC90ZEh2N29sWnpVM0I4ejRpRXI2Z01RQ0lDcENlRDVoWkdzT2JqdDh3OE8yL2Z6YllONUJNQTBQSkN4b0RnS2hBNlJCWWFnQ3RyMng1T3JmenJjWGhWYmNINXdjYURYVmpqY3VBUkFWTXhtUEFVQm9ELy9EYzN4cDEwKzkyejNZRzV3eWN3d3FBcUlEcEttQ1JYaFZvTzN4WFp0UG0rNk4zcjRRNXN4Rm1jMVBRR0FCRVJVQWZVSnJiL05vWGtFcVBQQnVnVC85eVhRWUFVY0ZUQ3ZQallienh4cDQ3Qi8vdXV4L1hJZUFlT1Fxbi9Tam5BSWlLU2E3OTJHTlRtaHArQ3NNSU5nZXhBaUFxQmtwaGdTblF0YTExVGZybFRUY3BmZnB3VHk4RGdLaFl5RWdZSnowZzkvck94OHdaZFRDbkpSZ0FSRVhEOTFFcEFXZDMyNzI1clR2Zy9Ib2ZBNENvbU5TSFRBd2VQN2s0dDN2dklzU2pEQUNhZ0hPbnlsRCtNd3djOFFDVnlkd1RYcmFFQVVBVG9KOGswMDN3K09qTGRxbnorRzRrcGFCZkEyQy91ZWNCL1dweUxnUFN1SVJoQlAvSzJEdm5XUTFNbkQ2dlh3aU1mV1BuQXVBR2ZvZDFCdUIxZE01MVQ1eU1NUUJvWEdwMDc3aisxV1hYdjN3WEhOTTkrcWFmb04yZ0VMQWc0QXdscHdHWXpTRUFUWmppWE1EVmNlNTd2RUhEQVdtWjZGQ0F2WGZmQWdZQWpTdjROV1hIdi9wdTFIY3FCSHdkQUFlUExHUUEwTGpZOVF1VTY5VXhBR2g4dlBzWEhDa0FQNTJwWWdEUXU3ak1WelNxSmZTeDRGTVpBUFF1M3VtTGhxT0N5Y0FTQmdCUkVZb2pHQUpFR0FCRXhVaS9Mc3h4VFFZQVVSSFNtN3VVZ004QUlDcENXU2pJa25pT0FVQlVoRUo2TTZManBoa0FSRVdvUjY4Q2xKWU1NZ0NJaXRDZ2ZoU2hiR29mQTRDb1dKbEdCd09BcUFqWnV2L1gxeDVoQUJBVkdlWDUwRThCV1RmUGZZMEJRRlJrZk5kRkloSjJoVFNPTVFDSWlzdzdlZ1VnVVhiWXJKdk9PUUNpb2lJRXVuekFiSm45ZjJaOUxVOEZKaW9xU3FGRUFLSFpzLzVYRFE0ekFJaUt5VURPeHF5cXhGbHIyYUtYUE50bUFCQVZEU0dDZHdOYXpZMmJqUmwxRG55UDd3VWdLaHBLSWF6TC81dm4vVkIxZE1FN2M1WUJRRlFzVG1SdHpHMnFiNHZkdC9wL2xPUENySy9qRUlDb0dBalRSTGNQV0l2bmY4K3NxNFd5N2VCa1VGWUFSRVZnT0pYRzBsaW9MM0xyMHVlenUzOE5QNWtPTHBvQlFGVG9wRVNiQjZ4K2N0MWZsMzN1MHdQMjI4ZkdUb0JtQUJBVk1pSFFuODVpaFNtNlEwc1cva3Y2RjF2aDkvYVBCUURuQUlnS1hMc1B4Sjk0N0puUXZKWWgvNTFlQ0NtRE54YnJ4Z3FBcUZCSmlUM0pMRmJNckcrZHN2N1I1NzNoSkdSRjRvS0xaUUFRRlNJaDRHYXkwQzkyTC92R2wvNDBORzhPN0VQdCtoU2dDeTZXQVVCVW9IWjZ3S28xdi9PMTZPcFYyN083OXdLK2Y5R0ZjZzZBcU1BSXk4S3ZVam5jMWpoOVM4WGZmUDBiZms4ZjRQa2pFMysvMFZnQkVCVVMwOFQrb1JRYUpMcXFmL0N2djJ2V1ZNRTVlZ0pXVmNVbEw1SUJRRlFvcEVReWxZWUxZTTQvLytXYThMTEZmZmJCSXhDR0VSd0RkaWtjQWhBVkFMM1YxOGxrc2NzRlZxei94TytWL2RFZmJNOGRQUTRsSlhUWGY2L0dDb0FvMzBtSlZEcU5neDV3MytjM1BEYjFpWFV2Mk8xSG9UTFpjUytNRlFCUkh0TjMvb0ZNRnUwdXNPcExuMzJpNGx0ZitiNmVCMUJEU1FoZmpkdFlBUkRsS3luUnI4ZjhDbGh5NTdKUGxLNWIrMlBuK0VuNGc4UDZwUjhUdWlnR0FGRytHZDNIZnp5VjFRZDhlQi9hc0c2VkxDM1o3aHc4QW5OMnMzN3ROOFFFTDRrQlFKUlBwSVRLNXREbUtjeWZVYk9yWk8yYWoxb3ptM3B5Tzk4Q2ZIWFpGOElBSU1vSG94dDR6cVN6eUNsZzBlMUx2bFB5eVljL0x4d1hibWNubE85Ti9MWi9IZ1lBMFNRWExQR2wwdGp2QWJja1NydW1QUDdJeDgyNWMxcjFrMzErT2cxWUg3d2JNd0NJSmluZDhlMVVHbTFwR3dzc2ljVjNMUHRxL0lHUFBtdldUb2R6OUJoVXpvWXdybXdoandGQU5ObElpWFEyaTlNWkc3UERKcFl0YVBuM3lKS0ZYN2FXTCs3U2QzM3ZiQWVVVXNHWmZsZUtBVUEwQ2VqRE9Yekh4WURyb1ZzQkxWUGkyWnRxcW41WStxbEh2MjQxTlo3TWJYOGRia2NuWURzd3k4dXYyZ2RtQUJEZENFSkFlUjVzMTBXSGZsbUhBS29GTUsyeGZrdFZjK01QNHF0WGZWOWxzbWxqV2lLWTVQT0hoeUdubFVOY2hidisrZDQzQUlTNCtIK21YQStYdjloQVZGeDB6d242aWVzQ2hoRThpKzhxaFJ5QVhoVzhvd05sRWloUGxBMDBWMVh1Tm1xcVhnN05hOW1vaERoanphZ0R3aUc0SjA2UEhPQ2h4L21YNkl0WHcwVUJJRWFYRy9TNVljRTRRNm5nUXZUZjY0dEpleTZpMHJobUg0aW9FSnk3U2VvSGJxVHVUOUdJYTRWRFBhRndxS2VzZHZwZW82YnFEV042elZ2RzlLcHRWc01NeiszcURpYjljZ2NPd2V2b2dxRWYzeFc0NXYzc2dnQUlPcmtRR1BKY2RMZzVEQ3AvNUVLVUNrcVZhTVUwZCtsdjNmT2dkZXJzRVVRaTA0SVB4M0tBNkdLT0xVUjVtUis5ZTZXVGJYMHpLUXhqMEtxczZGTUNuakg3UXhDak4xWU1ETUFmSElMZjJ3ZEVJaU9sZ2JoMDlYMHRtT2Q2c0RSTnBGd0grendiSGI2THJQSmhRb3g5a0M3UFJaMXIyOTRqRDdXVzdHN3J6MjNaOGJaUmtZRFM2Y2FmUDlHRnNqbkltbXFFRnkrQWUrb01sSDRSUnl3S2xVeEI5ZmJCeTJVaEl4SDR1UndNeTdwaFgxNVFBZWdYQnZaNURyWTVhV1NVd2hRcEVSVW1mUFh1N2IwY0V0Rk16bFNwZENoMzkwcWd1d2ZlN3IwUWlmS1JNWTVpS1VCMGpsNmpSem9OVDIvV1NhV0JYQmJJNVlLSnY2Q25USklodERSTUUwbWxzTTBlT1Vta1hFZ0loUXM2L3puQnBvTmtDc2hrWVQ5d0Q3RHdGdmg5L1lEbmNVNkFLQS9wQ2tDODV0dHc5SXlrTUhEcGc0UE9vMHYrZEFidzNDQUVRa0JRQ2NoRWVYRDBFQ3NCb3Z3aHV4d2JuY3JIbElsMC9uUGthQWhrTWtFSWlORktRTEVTSU1vclpxZnlsSDU1Z0tGM0lsM08zVnUvWGlpZENjWXo5djIvRFV1UGJmYnVCMWdKRU9VTk13VWxkQmsvd2M0djRIbENid2FDYnZvZkRDV0R6VUhPZmF0aDZSY1A3RDBBVkNRWUFrUjVRR2FVTXNJVFdNanpSelkzS0NNZTg2MlNFc2g0YktTVmxnVFZneG15NEQreUJsaStDSDUzRDRjRFJIbkF0S0tSd1dFbzFJenpXYjJSWFlLZWtVaDRJbEVHNHpmUEhOTjMvMmdVNmc4L0NXa1k4TGUrRHFPbWlrdUVSSk9ZdEVwTERqcnFNdFlsOVozOVVrMTM4c0doa1htQng5ZEMzSGtydks1M3VFUklOSW5KeWtVTFh6SUVyczVkV204bEhrNENldVBENDJzaDcxZ0JyN09iSVVBMFNjbkdlMWYvMTAxVFN3OGZzaDNJQ1I0bC9MN09Dd0ZXQWtTVG00elgxV0xCWnpaOGRsZ0JBNW5jeUFOQlYrcFNsUUJEZ0dqU2tXWXNoaVZmZlBxVjlVOC85U2R2K3dxbnN2YllJOEZYWkRRRWdvY2ZHQUpFazVMVWh3M29sd3Jldk9GVC8vamd2WGQ5ckQ1a2VnZHpOcnB6VHZBSXNCcHRLVDFOb1BjQStMNEl6Z2p3L2ZHYm5sdlVsVUF5QlgvZDcwTitaUG5JbklEdk13U0lKZ0g5eUIvY1RBYkR4MCtodktYbHhlcmJibzAwSFRqNFZNY3Z0ejdzNVhJTnZ1dnFod1hkbW5TbXpJekZPb1ZoZUhxVGozNThlS0pVS2gwc0RlcEt3QWlINGYvcUxZaFk5T29NTjRqb2d3SHcvMzVkQzNWclB5YUxBQUFBQUVsRlRrU3VRbUNDIi8+PC9nPjwvZz48L3N2Zz4="
                                        class="max-w-[90px] w-full relative"
                                    >
                                    <span class="absolute top-0 left-[10%] text-white font-normal capitalize">
                                        giảm ${(
                                          ((product.price - product.sale) /
                                            product.price) *
                                          100
                                        ).toFixed(0)}%
                                    </span>
                                </div>
                                </a>
                        `;
            }
          })
          .join("");
        if (htmls) {
          $$("#showProducts").innerHTML = htmls;
        } else {
          const err = `
                        <div class="text-center w-full">
                            <h1 class="text-[#888] text-[13px]  py-[20px] px-[20px] rounded-lg">
                                Danh sách chưa có sản phẩm nào!!!
                            </h1>
                        </div>
                    `;
          $$("#showProducts").innerHTML = err;
        }
      });
    });

    $$("#voice-search").addEventListener("keyup", async function () {
      $$("#loading").classList.remove("hidden");
      $$("#exitValueSearch").classList.add("hidden");

      setTimeout(async function () {
        $$("#loading").classList.add("hidden");
        const searchValue = $$("#voice-search").value;
        console.log(searchValue);

        if (searchValue.trim()) {
          const { data } = await search(searchValue.trim());
          $$("#exitValueSearch").classList.remove("hidden");

          // console.log("search", data);
          if (data) {
            const result = `
            <div class="max-w-2xl mx-auto py-7 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="uppercase font-bold text-[20px] md:text-[25px] text-[#444]">Kết quả tìm kiếm</h2>
            
            <div class="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-[15px]" id="showProducts">
                
                ${data
                  .map((product: any) => {
                    if (product.ishidden) {
                      return `
                            <a href="/#/detailproducts/${
                              product._id
                            }" class="relative group hover:shadow-lg px-[15px] py-[25px] rounded-md">
                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="${
                                  product.image
                                }" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                            </div>
                            <div class="pr-[10px]">
                                <h3 class="mt-4 text-sm text-gray-700 capitalize">${
                                  product.name
                                }</h3>
                                <div class="mt-[10px] flex justify-start items-center">
                                    <p class="text-red-500">${product.sale.toLocaleString(
                                      "vi",
                                      { style: "currency", currency: "VND" }
                                    )}</p>
                                    <p class="text-gray-500 ml-2 line-through">${product.price.toLocaleString(
                                      "vi",
                                      { style: "currency", currency: "VND" }
                                    )}</p>
                                </div>
                                <div class="bg-[#F3F4F6] p-[10px] mt-3">
                                    <span class="text-[12px] capitalize">${
                                      product.feature
                                    }</span>
                                </div>
                                <div class="mt-3">
                                    <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                    <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                    <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                    <i class="fa-solid fa-star text-[#f59e0b]"></i>
                                    <i class="fa-solid fa-star text-[#f59e0b]"></i>                                        
                                </div>
                            </div>

                            <div class="absolute top-0 left-0">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU2IDEwMCI+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGltYWdlIHdpZHRoPSIyNTYiIGhlaWdodD0iMTAwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBQmtDQVlBQUFCcFlPNmVBQUFOKzBsRVFWUjRuTzNkQ1hCZDFYMEc4TytjZSs5YkpWdDYxbVpKbG1RNXRyQUQzaGNnWUUvQkpWQWdtWTZocVFuVXVDbkVVNUxNbERiTk1pUnBRcEp1NlRiTkRKM1M2VXpqSkpPR2FTY1pHakpBM2NRYlJzUVlPNVozNGQzV2duYTk5VzZuYzY1a1ljY0d5WGpUZSsvN3pad1pZTUM4KzZUejNmOVo3cmtpMDdvVFJsa1pjbS91aHIybkRTSlJCdmY0cVRuT29TT2Y5cnJlV1FMWHExYVpqSUJoK0NDaWlWRktpSERJTlJMbEtiOS9zRWRGSTRNeUh1dXhHbWNjOEpPcFhVYmpqUGJRcktZK3I2TUx4c3hHK0oxZDhIcjZBQ0VnNGxFWU5kV3dEeHlHZ0lKUUNpb2VSM2o1RXJoNzJ1QU5EQUttQ2FPNlF2ZFZHUFcxY0E2MUk3cnlOc1RXZkF4K2J6K1VQN0h1YXNMem9RQVlEZlh3TjIrYm1uMzFsei9xUFhENDNuNGZpQW9nREtCRUFMN2dENTdvY21RVTBIWDhES3JseUgraysxUm81eDdVQ2tERVl5b2RDUjh6cXFzMm0vUG12R29tRWkvSlJObWc3dGhCNTFYcXVuelhwbTlJR0lreU9OdDJmTGo5UDM2OGRVaWhmRTdJUkpscFhMY1BRVlNJOU0yejdMenJHdnRyZlVkUFo4UmdLdDFzOS9RM1ovWWRXdDhRaTJTTW1xb2RSdDMwSDRXWExkcG8xRTdQeXE1dXFMNStxR3ZZRDgzUW92bXczOWhWc2YrcEwyeXlnZktXZUFTNGpnbEVWSFIwbVIreXhnSkJDQUUvazQyZU9ucnlMdS9veWJzYTl1ejdKMnZoelJ0bG92eTdvZG5OZTJFNzhISzVhL0l0bWY2SlV4aDQ1cHZQbmZaUnZYeEtETXAxK1F0SmRCM3BPN3dJaDFBblJCQU96bkF5ZW1EejYwOVdDenhaK2VHV0Y4MzYyajhQMzdIaW9GbFZBZGYzb1pTUHF6VWlONGRmK01rdEIzYnNlbWhweUdEbko3cVJkTld0Rkt4d0NITjFHSGdlenV3NzlLQzk3OUNEVFNkUC8weVk1aDhiTStwTytvNERsYk92eWdlVlR1dXV0Y01LUVVsQ1JKT0VEZ01wVVJNTm95RnM0Y0QrSS9kM2ZmbWJKMUkvZmVsckloeUdUSXdNSUs2MEVwQnVSK2Y4bVA1VEpyaHNRRVRYa1E0Q0lYQlRhUXdHZ0xZdHJYOHgvRzhiajN0ZDNiT015a3BBVDlaZlFkK1ZLcFd1bjhvbFBxSkpUUS9QOWRDZ0pSWkc3M0Nxc1hQakMrMlpsemR0TU1yTElXTFJZSytBK0FEejloS09JeU1NQUtMOG9CUXFZaEhFQUJ6NjJhYm5rdi81M3h0RkpBSTVMUUc5cCtkeVNRanBjOFdQS0kvNFBxeG9CRTBoRS92UGREK2FmUDU3dS8ydTdyaXNxUnJaWTNBWkhWcnk1MDZVaC9TNDM1Q1lWeHJEc2JkUExOajU0cXY3QUZWdlZWVUdrNGVCMFdYRjkyc01BS0k4cHVjR0dxTmhQU1JvN1BuY0YzZWt0cnhXYVZRa3hwWVV4MnNNQUtKOHB4Um1UWW5qWU45US9aWjdIdDZjZWVVWFU2elp6VUFtQ3pqTyt6YVRQM3lpL0tjY0p4Z083QnBLeiszN3M2LzgzR3hxK0loUlhRbjM5RmtJODcyN09Tc0FvZ0toaHdPTHA4YXhzMmZ3OXQ3MW4zbEJKTk9RZWo2Z2Z4QnE0TktOQVVCVVFIUWxzQ3dlUnV1eDB3OE5mT3M3enhqVlZSQ1crWjQ3QmhrQVJBVm9zUUZzLzhuTHo2WmYvUGxLT2FzSlNsY0NsblZSWXdBUUZScWxZTVpqU0FpZy82dC90ZEh2N29sWnpVM0I4ejRpRXI2Z01RQ0lDcENlRDVoWkdzT2JqdDh3OE8yL2Z6YllONUJNQTBQSkN4b0RnS2hBNlJCWWFnQ3RyMng1T3JmenJjWGhWYmNINXdjYURYVmpqY3VBUkFWTXhtUEFVQm9ELy9EYzN4cDEwKzkyejNZRzV3eWN3d3FBcUlEcEttQ1JYaFZvTzN4WFp0UG0rNk4zcjRRNXN4Rm1jMVBRR0FCRVJVQWZVSnJiL05vWGtFcVBQQnVnVC85eVhRWUFVY0ZUQ3ZQallienh4cDQ3Qi8vdXV4L1hJZUFlT1Fxbi9Tam5BSWlLU2E3OTJHTlRtaHArQ3NNSU5nZXhBaUFxQmtwaGdTblF0YTExVGZybFRUY3BmZnB3VHk4RGdLaFl5RWdZSnowZzkvck94OHdaZFRDbkpSZ0FSRVhEOTFFcEFXZDMyNzI1clR2Zy9Ib2ZBNENvbU5TSFRBd2VQN2s0dDN2dklzU2pEQUNhZ0hPbnlsRCtNd3djOFFDVnlkd1RYcmFFQVVBVG9KOGswMDN3K09qTGRxbnorRzRrcGFCZkEyQy91ZWNCL1dweUxnUFN1SVJoQlAvSzJEdm5XUTFNbkQ2dlh3aU1mV1BuQXVBR2ZvZDFCdUIxZE01MVQ1eU1NUUJvWEdwMDc3aisxV1hYdjN3WEhOTTkrcWFmb04yZ0VMQWc0QXdscHdHWXpTRUFUWmppWE1EVmNlNTd2RUhEQVdtWjZGQ0F2WGZmQWdZQWpTdjROV1hIdi9wdTFIY3FCSHdkQUFlUExHUUEwTGpZOVF1VTY5VXhBR2g4dlBzWEhDa0FQNTJwWWdEUXU3ak1WelNxSmZTeDRGTVpBUFF1M3VtTGhxT0N5Y0FTQmdCUkVZb2pHQUpFR0FCRXhVaS9Mc3h4VFFZQVVSSFNtN3VVZ004QUlDcENXU2pJa25pT0FVQlVoRUo2TTZManBoa0FSRVdvUjY4Q2xKWU1NZ0NJaXRDZ2ZoU2hiR29mQTRDb1dKbEdCd09BcUFqWnV2L1gxeDVoQUJBVkdlWDUwRThCV1RmUGZZMEJRRlJrZk5kRkloSjJoVFNPTVFDSWlzdzdlZ1VnVVhiWXJKdk9PUUNpb2lJRXVuekFiSm45ZjJaOUxVOEZKaW9xU3FGRUFLSFpzLzVYRFE0ekFJaUt5VURPeHF5cXhGbHIyYUtYUE50bUFCQVZEU0dDZHdOYXpZMmJqUmwxRG55UDd3VWdLaHBLSWF6TC81dm4vVkIxZE1FN2M1WUJRRlFzVG1SdHpHMnFiNHZkdC9wL2xPUENySy9qRUlDb0dBalRSTGNQV0l2bmY4K3NxNFd5N2VCa1VGWUFSRVZnT0pYRzBsaW9MM0xyMHVlenUzOE5QNWtPTHBvQlFGVG9wRVNiQjZ4K2N0MWZsMzN1MHdQMjI4ZkdUb0JtQUJBVk1pSFFuODVpaFNtNlEwc1cva3Y2RjF2aDkvYVBCUURuQUlnS1hMc1B4Sjk0N0puUXZKWWgvNTFlQ0NtRE54YnJ4Z3FBcUZCSmlUM0pMRmJNckcrZHN2N1I1NzNoSkdSRjRvS0xaUUFRRlNJaDRHYXkwQzkyTC92R2wvNDBORzhPN0VQdCtoU2dDeTZXQVVCVW9IWjZ3S28xdi9PMTZPcFYyN083OXdLK2Y5R0ZjZzZBcU1BSXk4S3ZVam5jMWpoOVM4WGZmUDBiZms4ZjRQa2pFMysvMFZnQkVCVVMwOFQrb1JRYUpMcXFmL0N2djJ2V1ZNRTVlZ0pXVmNVbEw1SUJRRlFvcEVReWxZWUxZTTQvLytXYThMTEZmZmJCSXhDR0VSd0RkaWtjQWhBVkFMM1YxOGxrc2NzRlZxei94TytWL2RFZmJNOGRQUTRsSlhUWGY2L0dDb0FvMzBtSlZEcU5neDV3MytjM1BEYjFpWFV2Mk8xSG9UTFpjUytNRlFCUkh0TjMvb0ZNRnUwdXNPcExuMzJpNGx0ZitiNmVCMUJEU1FoZmpkdFlBUkRsS3luUnI4ZjhDbGh5NTdKUGxLNWIrMlBuK0VuNGc4UDZwUjhUdWlnR0FGRytHZDNIZnp5VjFRZDhlQi9hc0c2VkxDM1o3aHc4QW5OMnMzN3ROOFFFTDRrQlFKUlBwSVRLNXREbUtjeWZVYk9yWk8yYWoxb3ptM3B5Tzk4Q2ZIWFpGOElBSU1vSG94dDR6cVN6eUNsZzBlMUx2bFB5eVljL0x4d1hibWNubE85Ti9MWi9IZ1lBMFNRWExQR2wwdGp2QWJja1NydW1QUDdJeDgyNWMxcjFrMzErT2cxWUg3d2JNd0NJSmluZDhlMVVHbTFwR3dzc2ljVjNMUHRxL0lHUFBtdldUb2R6OUJoVXpvWXdybXdoandGQU5ObElpWFEyaTlNWkc3UERKcFl0YVBuM3lKS0ZYN2FXTCs3U2QzM3ZiQWVVVXNHWmZsZUtBVUEwQ2VqRE9Yekh4WURyb1ZzQkxWUGkyWnRxcW41WStxbEh2MjQxTlo3TWJYOGRia2NuWURzd3k4dXYyZ2RtQUJEZENFSkFlUjVzMTBXSGZsbUhBS29GTUsyeGZrdFZjK01QNHF0WGZWOWxzbWxqV2lLWTVQT0hoeUdubFVOY2hidisrZDQzQUlTNCtIK21YQStYdjloQVZGeDB6d242aWVzQ2hoRThpKzhxaFJ5QVhoVzhvd05sRWloUGxBMDBWMVh1Tm1xcVhnN05hOW1vaERoanphZ0R3aUc0SjA2UEhPQ2h4L21YNkl0WHcwVUJJRWFYRy9TNVljRTRRNm5nUXZUZjY0dEpleTZpMHJobUg0aW9FSnk3U2VvSGJxVHVUOUdJYTRWRFBhRndxS2VzZHZwZW82YnFEV042elZ2RzlLcHRWc01NeiszcURpYjljZ2NPd2V2b2dxRWYzeFc0NXYzc2dnQUlPcmtRR1BKY2RMZzVEQ3AvNUVLVUNrcVZhTVUwZCtsdjNmT2dkZXJzRVVRaTA0SVB4M0tBNkdLT0xVUjVtUis5ZTZXVGJYMHpLUXhqMEtxczZGTUNuakg3UXhDak4xWU1ETUFmSElMZjJ3ZEVJaU9sZ2JoMDlYMHRtT2Q2c0RSTnBGd0grendiSGI2THJQSmhRb3g5a0M3UFJaMXIyOTRqRDdXVzdHN3J6MjNaOGJaUmtZRFM2Y2FmUDlHRnNqbkltbXFFRnkrQWUrb01sSDRSUnl3S2xVeEI5ZmJCeTJVaEl4SDR1UndNeTdwaFgxNVFBZWdYQnZaNURyWTVhV1NVd2hRcEVSVW1mUFh1N2IwY0V0Rk16bFNwZENoMzkwcWd1d2ZlN3IwUWlmS1JNWTVpS1VCMGpsNmpSem9OVDIvV1NhV0JYQmJJNVlLSnY2Q25USklodERSTUUwbWxzTTBlT1Vta1hFZ0loUXM2L3puQnBvTmtDc2hrWVQ5d0Q3RHdGdmg5L1lEbmNVNkFLQS9wQ2tDODV0dHc5SXlrTUhEcGc0UE9vMHYrZEFidzNDQUVRa0JRQ2NoRWVYRDBFQ3NCb3Z3aHV4d2JuY3JIbElsMC9uUGthQWhrTWtFSWlORktRTEVTSU1vclpxZnlsSDU1Z0tGM0lsM08zVnUvWGlpZENjWXo5djIvRFV1UGJmYnVCMWdKRU9VTk13VWxkQmsvd2M0djRIbENid2FDYnZvZkRDV0R6VUhPZmF0aDZSY1A3RDBBVkNRWUFrUjVRR2FVTXNJVFdNanpSelkzS0NNZTg2MlNFc2g0YktTVmxnVFZneG15NEQreUJsaStDSDUzRDRjRFJIbkF0S0tSd1dFbzFJenpXYjJSWFlLZWtVaDRJbEVHNHpmUEhOTjMvMmdVNmc4L0NXa1k4TGUrRHFPbWlrdUVSSk9ZdEVwTERqcnFNdFlsOVozOVVrMTM4c0doa1htQng5ZEMzSGtydks1M3VFUklOSW5KeWtVTFh6SUVyczVkV204bEhrNENldVBENDJzaDcxZ0JyN09iSVVBMFNjbkdlMWYvMTAxVFN3OGZzaDNJQ1I0bC9MN09Dd0ZXQWtTVG00elgxV0xCWnpaOGRsZ0JBNW5jeUFOQlYrcFNsUUJEZ0dqU2tXWXNoaVZmZlBxVjlVOC85U2R2K3dxbnN2YllJOEZYWkRRRWdvY2ZHQUpFazVMVWh3M29sd3Jldk9GVC8vamd2WGQ5ckQ1a2VnZHpOcnB6VHZBSXNCcHRLVDFOb1BjQStMNEl6Z2p3L2ZHYm5sdlVsVUF5QlgvZDcwTitaUG5JbklEdk13U0lKZ0g5eUIvY1RBYkR4MCtodktYbHhlcmJibzAwSFRqNFZNY3Z0ejdzNVhJTnZ1dnFod1hkbW5TbXpJekZPb1ZoZUhxVGozNThlS0pVS2gwc0RlcEt3QWlINGYvcUxZaFk5T29NTjRqb2d3SHcvMzVkQzNWclB5YUxBQUFBQUVsRlRrU3VRbUNDIi8+PC9nPjwvZz48L3N2Zz4="
                                    class="max-w-[90px] w-full relative"
                                >
                                <span class="absolute top-0 left-[10%] text-white font-normal capitalize">
                                    giảm ${(
                                      ((product.price - product.sale) /
                                        product.price) *
                                      100
                                    ).toFixed(0)}%
                                </span>
                            </div>
                            </a>
                        `;
                    }
                  })
                  .join("")}
            </div>
            </div>
            `;
            $$("#valueProducts").innerHTML = result;
          }
          if (data.length == 0) {
            const result = `
            <div class="max-w-2xl mx-auto py-7 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="uppercase font-bold text-[20px] md:text-[25px] text-[#444]">Kết quả tìm kiếm</h2>
            <span class="mt-[10px] text-[14px] text-[#777]">Không tìm thấy kết quả tìm kiếm!!!</span>
            </div>
            `;
            $$("#valueProducts").innerHTML = result;
          }
        } else {
          reRender(homePage, "#app");
        }
      }, 2000);
    });

    $$("#exitValueSearch").addEventListener("click", function () {
      $$("#voice-search").value = null;
      $$("#voice-search").focus();
      $$("#exitValueSearch").classList.add("hidden");
      reRender(homePage, "#app");
    });
  },
};

export default homePage;
