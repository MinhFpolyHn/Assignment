import { reRender } from "../ultils";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/order
import toastr from "toastr";

const Header = {
    render() {
        return /* html */ `
        ${localStorage.getItem("user") ? `<ul class="flex">
                    <li><a  id="account-email" class=" :text-black block px-4 py-5 hover:bg-indigo-500 hover:text-black"></a></li>
                    <button><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></button>
                  </ul>` : ""}
        <nav
        class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
            </div>
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-blue-700 lg:flex-grow">
                <a href="/"
                   class="block mt-2 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Trang Chủ
                </a>
                <a href="/about"
                   class=" block mt-2 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Bài viết
                </a>
                <a href="/product"
                   class="block mt-2 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                   Khuyến mãi
                </a>
          <a href="admin/Dashboard"
          class="block mt-2 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
          Admin
       </a>
            </div>
            <!-- This is an example component -->
            <div class="relative mx-auto text-gray-600 lg:block hidden">
                <input
                    class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search">
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                         xml:space="preserve"
                         width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                </button>
            </div>
            <div class="flex ">
                <a href="/Signup"
                   class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Đăng ký</a>
    
                <a href="/Signin"
                   class=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Đăng nhập</a>
            </div>
        </div>
    
    </nav>
      `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        if (logout) {
            logout.addEventListener("click", () => {
                toastr.success("Bạn Đã Đăng Đăng Xuất Thành Công");
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;
