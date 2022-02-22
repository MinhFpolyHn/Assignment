import { signup } from "../api/user";

const Signup = {
    render() {
        return /* html */`
        <body>
        <div class="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
          <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
            <h1 class="font-bold text-center text-4xl text-yellow-500">MI<span class="text-blue-500">NI</span></h1>
            <form id="formSignup">
              <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                <h1 class="font-bold text-xl text-center">ĐĂNG KÝ</h1>
      
                <div class="flex flex-col space-y-1">
                  <input id="username" type="text" name="username" id="username" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" />
                </div>
                
                <div class="flex flex-col space-y-1">
                  <input id="email" type="text" name="Email Address" id="Email Address" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Email Address" />
                </div>
      
      
                <div class="flex flex-col space-y-1">
                  <input id="password" type="password" name="password" id="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
                </div>
      
                <div class="relative">
                  <input type="checkbox" name="remember" id="remember" checked class="inline-block align-middle" />
                  <label class="inline-block align-middle" for="remember">Nhớ mật khẩu?</label>
                </div>
      
                <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  <button type="submit" class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Đăng Ký</button>
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
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default Signup;
