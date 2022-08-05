import HeaderAdmin from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar/slibarAdmin"
import { CreatUser } from "../../../api/users"

const CreateUser = {
    render() {
        return /*html*/`
            ${HeaderAdmin.render()}
            <div class="flex justify-between px-[30px] mt-[100px]">
            ${Sidebar.render()}
            <div class="card-body h-[500px] overflow-y-scroll w-full bg-[#E5E5E5]">
            <div class="ml-[20px] w-full p-[25px] max-h-[100%] h-full">
                <div>
                    <h2 class="capitalize text-[20px] leading-[30px] text-[#5F5E61] font-bold">thêm mới tài khoản</h2>
                    <div class="flex justify-between items-start mb-[50px]" id="fromCreat">
                        <div class="max-w-[650px] w-full pt-[30px] ml-[30px]" >
                            <div>

                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">tên người dùng</label><br>
                                    <input type="text" id="name" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] capitalize">
    <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">email</label><br>
                                    <input type="text" id="email" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px]" >
    <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">password</label><br>
                                    <input type="password" id="password" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px] ">
    <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[10px]">
                                    <label for="name" class="capitalize text-[16px] leading-[19px] text-[#5A6169]">role</label><br>
                                    <input type="number" id="role" class="check-validate w-full mt-[5px] h-[35px] rounded-sm outline-0 pl-[10px]">
    <span class="error-input block text-red-500 text-xs "><span>
                                </div>

                                <div class="mt-[20px]">
                                    <button type="submit" class="capitalize bg-[#00B0D7] text-[#fff] rounded-lg px-[20px] py-[10px]" id="addUser">thêm mới</button>
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
    afterRender(){
        const addUser = document.getElementById('addUser');
        
        addUser?.addEventListener('click', async function(e:any){
            e.preventDefault();
            const users = {
                name: document.getElementById('name')?.value,
                email: document.getElementById('email')?.value,
                password: document.getElementById('password')?.value,
                role: Number(document.getElementById('role')?.value)
            }
            console.log(users);
            const result = await CreatUser(users);
            if(result){
                alert("Thêm mới tài khoản thành công!!")
                setTimeout(function() {
                    location.href = "/admin/users"
                },3000)
            }
        })
    }
}

export default CreateUser
