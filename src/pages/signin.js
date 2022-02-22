import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { signin } from "../api/user";

const Singin = {
    render() {
        return /* html */`
        <body>
  <div class="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
    <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
      <h1 class="font-bold text-center text-4xl text-yellow-500">MI<span class="text-blue-500">NI</span></h1>
      <form id="formSignin">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
          <h1 class="font-bold text-xl text-center">ĐĂNG NHẬP</h1>
          <div class="flex flex-col space-y-1">
            <input type="text" name="Email Address" id="email" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Email Address" />
          </div>


          <div class="flex flex-col space-y-1">
            <input type="password" name="password" id="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
          </div>

          <div class="relative">
            <input type="checkbox" name="remember" id="remember" checked class="inline-block align-middle" />
            <label class="inline-block align-middle" for="remember">Nhớ mật khẩu?</label>
          </div>

          <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
            <button type="submit" class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Đăng Nhập</button>
          </div>
        </div>
      </form>
      <div class="flex justify-center text-gray-500 text-sm">
        <p>&copy;2021. All right reserved.</p>
      </div>
    </div>
  </div>
</body>
         `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            const { data } = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            localStorage.setItem("user", JSON.stringify(data.user));
            toastr.success("Bạn đã đăng nhập thành công, chờ vài giây để chuyển trang");
            setTimeout(() => {
                // kiểm tra quyền dựa trên ID
                if (data.user.id === 1) {
                    document.location.href = "admin/Dashboard";
                } else {
                    document.location.href = "/";
                }
            }, 3000);
        });
    },
};
export default Singin;
