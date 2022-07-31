const Sidebar = {
    render: () => {
        return /*html*/`
        <div class="max-w-[20%] w-full pt-[30px]">
        <ul>
        <li class="flex pl-[8px] items-center hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="home">
          <i class="fa-solid fa-house-user text-[30px] mr-[10px]"></i>
          <a class="w-full h-full my-[15px]" href="/admin">Trang chủ</a>
        </li>
        <li class="flex  pl-[8px] items-center mt-[10px] hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="list">
          <i class="fa-solid fa-clipboard-list text-[30px] mr-[20px]"></i>
          <a class="w-full h-full my-[15px]" href="/admin/products">Danh sách sản phẩm</a>
        </li>
        <li class="flex pl-[8px] items-center mt-[10px] hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="category">
        <i class="fa-solid fa-align-justify text-[30px] mr-[10px]"></i>
        <a class="w-full h-full my-[15px]" href="/admin/category">Danh mục sản phẩm</a>
      </li>
        
      </ul>
    </div>
        `
    }
}

export default Sidebar;