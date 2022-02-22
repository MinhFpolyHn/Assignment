import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";
import Detailpage from "./pages/details";

import Singin from "./pages/signin";
import table from "./components/admin/table";

import edit from "./pages/edit";
import Dashboard from "./pages/admin/Dashboardpage";
import Add from "./pages/admin/add";
import index from "./pages";
import adminEdit from "./pages/admin/edit";
import tuyendung from "./pages/tuyendung";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (component, id = "") => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/tuyendung": () => {
        print(tuyendung);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/Signin": () => {
        print(Singin);
    },
    "/Signup": () => {
        print(Signup);
    },
    "/products/:id": ({ data }) => print(Detailpage, data.id),
    "/pages/table/:id/edit": ({ data }) => {
        const { id } = data;
        print(edit.render(id));
    },
    "admin/Dashboard": () => {
        print(Dashboard);
    },
    "/admin/table": () => {
        print(table);
    },
    "/admin/add": () => {
        print(Add);
    },
    "/admin/list": () => {
        print(index);
    },
    "/admin/list/:id/edit": ({ data }) => {
        print(adminEdit, data.id);
    },

});

router.resolve();
// const API = "https://5e79b4b817314d00161333da.mockapi.io/posts";
// fetch(API)
//     .then((Response) => Response.json())
//     .then((data) => console.log(data));

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.luongDuong = luongDuong;
//         this.luongBot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.luongDuong}
//             Lượng bột: ${this.luongBot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// console.log(banhDeo.luongDuong) // 10
// const banhNuong = new KhuanBanh(30, 50);
// banhDeo.luongDuong = 20
// console.log(banhDeo.luongDuong)// 20
// banhDeo.showInfo();

// banhNuong.showInfo();

// const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve("Ket noi thanh cong");
//         } catch (error) {
//             reject("Ket noi that bai");
//         }
//     }, 3000);
// });
// getProducts.then(Result => console.log(Result));
