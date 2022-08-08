const Sidebar = {
  render: () => {
    return /*html*/ `
        <div class="max-w-[20%] w-full pt-[30px]">
        <ul>
        <li class="flex pl-[8px] items-center hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="home">
          <a class="w-full h-full my-[15px]" href="/#/admin">  
            <i class="fa-solid fa-house-user text-[30px] mr-[10px]"></i>
          Trang chủ</a>
        </li>
        <li class="flex  pl-[8px] items-center mt-[10px] hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="list">
          <a class="w-full h-full my-[15px]" href="/#/admin/products">  
          <i class="fa-solid fa-clipboard-list text-[30px] mr-[20px]"></i>
          Danh sách sản phẩm</a>
        </li>
        <li class="flex pl-[8px] items-center mt-[10px] hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="category">
        <a class="w-full h-full my-[15px]" href="/#/admin/category">
        <i class="fa-solid fa-align-justify text-[30px] mr-[10px]"></i>
        Danh mục sản phẩm</a>
        </li>
        <li class="flex pl-[8px] items-center mt-[10px] hover:bg-pkBlue hover:text-[#515151] font-medium delay-150 rounded-md text-[#9b9b9b]" id="users">
        <a class="w-full h-full my-[15px]" href="/#/admin/users">
        <i class="fa-solid fa-users text-[30px] mr-[10px]"></i>
        Danh sách tài khoản</a>
        </li>
        
      </ul>
    </div>
        `;
  },
};

export default Sidebar;
