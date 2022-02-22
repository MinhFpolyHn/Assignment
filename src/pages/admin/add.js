// import axios from "axios";
import axios from "axios";
import { add } from "../../api/posts";

const Add = {
    render() {
        return /* html */`      
      
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title"/><br />
                        <input type="file" class="border border-black" id="img-post" placeholder="Img" /><br />
                        <input type="text" class="border border-black" id="price" placeholder="Price"/><br />
                        <input type="text" class="border border-black" id="quantity" placeholder="Quantity"/><br />
                        <textarea name=""  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description"></textarea><br />
                        <button>Thêm</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const formAddPro = document.querySelector("#form-add-post");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dwuuepofz/image/upload";
        const CLOUDINARY_PRESET = "nk7sf5oa";

        formAddPro.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img-post").files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call API clouddinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            add({
                name: document.querySelector("#title-post").value,
                img: data.url,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc-post").value,
                quantity: document.querySelector("#quantity").value,
            });
            // window.location.href = "/admin/product";
            // reRender(ListProduct, "#content");
        });
        // tạo object và gán giá trị vào các thuộc tính formData
        // console.log(document.querySelector('#form-add-post'));
        // const formAdd = document.querySelector("#form-add-post");
        // formAdd.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     const post = {
        //         title: document.querySelector("#title-post").value,
        //         img: document.querySelector("#img-post").value,
        //         desc: document.querySelector("#desc-post").value,
        //     };
        //     add(post);
        // fetch("http://localhost:3005/post", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(post),
        // });
        // });
    },
};
export default Add;
