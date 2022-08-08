import HeaderAdmin from "../../../components/Header/Admin";
import { reRender } from "../../utilities/utiliti";
import Sidebar from "../../../components/Sidebar/slibarAdmin";
import { $$ } from "../../utilities/utiliti";
import { RemoveUser, userGetAll } from "../../../api/users";
import { IUsers } from "../../../Interface/IUsers";

const HomeUsers = {
  async render() {
    const usersData = await userGetAll();
    const users: IUsers[] = usersData.data;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user.user.role !== 1) {
        location.href = "/#/";
      }
    } else {
      location.href = "/#/";
    }
    return /*html*/ `
            ${HeaderAdmin.render()}
            <div class="flex justify-between px-[30px] mt-[100px]">
                ${Sidebar.render()}
                
                <div class="w-full ml-[20px]">
                    <div class="flex items-end justify-between">
                        <div>
                            <h3 class="capitalize text-[#545454] text-[20px] font-bold">danh sách danh mục sản phẩm</h3>
                        </div>
                        <div class="flex items-center mr-[20px] text-[30px] ">
                            <a href="/admin/createuser"><i class="fa-solid fa-plus  border-[#00B0D7] border-[3px] p-[6px] cursor-pointer text-[#00B0D7]"></i></a>
                        </div>
                    </div>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-[20px]">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="text-center py-3 px-6">
                                    @@
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    User Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        ${users
                          .map(
                            (user: any, index) => `
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" class="text-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                ${index + 1}
                                        </th>
                                        <td class="py-4 px-6">
                                                ${user.name}
                                        </td>
                                    
                                        <td class="py-4 px-6">
                                        <a href="/admin/users/${
                                          user._id
                                        }/updateuser" data-navigo class="text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                        <i title="edit" class="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <button data-id="${
                                      user._id
                                    }" data-navigo id="btn-remove" class="ml-[10px] text-[15px] font-medium hover:text-blue-600 dark:text-blue-500 hover:underline">
                                        <i title="Remove" class="fa-solid fa-trash"></i>
                                    </button>
                                        </td>
                                </tr>
                        `
                          )
                          .join("")}
                        </tbody>
                    </table>
                    </div>

                </div>
                

            </div>

        `;
  },
  afterRender() {
    $$("#users").classList.add("text-active");
    $$("#users").classList.add("bg-blue-500");
    const btns = document.querySelectorAll("#btn-remove");
    btns.forEach((btn: any) => {
      btn.addEventListener("click", async function () {
        const btnId = this.getAttribute("data-id");

        const confirm = window.confirm("Bạn chắc có muốn xóa tài khoản này?");
        if (confirm) {
          const result = await RemoveUser(btnId);
          if (result) {
            reRender(HomeUsers, "#app");
            alert("Xóa tài khoản thành công");
          }
        }
      });
    });
  },
};

export default HomeUsers;
