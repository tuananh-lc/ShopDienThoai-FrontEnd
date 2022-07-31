import { signup } from "../api/auth";
import { $$ } from "./utilities/utiliti"

const Signup = {
    render() {
        return`
        <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div
            class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div class="text-center mb-[30px]"><h2 class="uppercase tracking-normal text-3xl font-semibold text-gray-800">Signup</h2></div>  
            <div>
                <div class="mb-6">
                  <input
                    type="email"
                    class="check-error form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email"
                  />
                  <span class="error-input block text-red-500 text-xs ml-[10px] mt-[5px]"><span>
                </div>
      
                <div class="mb-6">
                  <input
                    type="password"
                    class="check-error form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                  />
                  <span class="error-input block text-red-500 text-xs ml-[10px] mt-[5px]"><span>
                </div>
      
                
      
                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    id="btnSubmit"
                  >
                    Signup
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        `
    },
    afterRender() {
        // console.log($$(".check-error"));
        let checkValidate = false
        $$(".check-error").forEach((item:any, index:number) => {
            item.onblur = () => {
                if(item.value) {
                    $$(".error-input")[index].innerHTML = ""
                    checkValidate = true
                }else{
                    $$(".error-input")[index].innerHTML = "Giá trị chưa được nhập";
                    checkValidate = false
                }
            }            
        });
        
        $$("#btnSubmit").addEventListener('click', function(e:any) {
            e.preventDefault()
            $$(".check-error").forEach((item:any, index:any) => {                
                if(item.value.trim() === "" || item.value == null) {
                    $$(".error-input")[index].innerHTML = "Giá trị chưa được nhập"
                    checkValidate = false
                }else{
                    $$(".error-input")[index].innerHTML = "";
                    checkValidate = true
                }
            })
        })

        $$("#btnSubmit").addEventListener("click", async function(e:any) {
            e.preventDefault()

            if(checkValidate){
                const user = {
                    email:$$("#email").value,
                    password:$$("#password").value,
                    role:0
                }
                console.log(user);
                const result = await signup(user)
                if(result){
                    confirm("Đăng ký thành công")
                    location.href = "/signin"
                }
            }          
        })

    }
}

export default Signup