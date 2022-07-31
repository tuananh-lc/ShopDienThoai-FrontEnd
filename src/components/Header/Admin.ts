const HeaderAdmin = {
	render: () => {
		return (
            /*html*/`
                <div class="fixed top-0 w-full">
					<div class="flex bg-pkBlue justify-between items-center px-[30px]">
					<img class="max-w-[120px] w-full" src="https://cdn-img-v2.webbnc.net/uploadv2/web/82/8269/news/2020/11/19/11/03/1605753605_23578.png
					">
					<div class="max-w-[600px] w-full flex items-center justify-between">
						<input id="search-inputs" class="max-w-[600px] w-full h-[45px] outline-0 pl-[25px] focus:bg-slate-100 rounded-l-lg text-[16px]" placeholder="Tìm kiếm ở đấy...">
						<i class="fa-solid fa-magnifying-glass bg-[#fff] max-w-[50px] w-full h-[45px] leading-[45px] cursor-pointer rounded-r-lg  flex justify-center "></i>
					</div>
					<div>
						<h2 class="capitalize text-[20px] leading-[30px] font-medium text-[#fff]">
							xin chào abc
						</h2>
					</div>
					</div>
				</div>
            `
		)
	}
}

export default HeaderAdmin