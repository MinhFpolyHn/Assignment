import { add, get } from "../../api/posts";

const adminEdit = {

    async render(id) {
        const { data } = await get(id);
        return /* html */`      
     
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title" value="${data.id}"/><br />
                        <img src=${data.img} />
                        <input type="text" class="border border-black" id="img-post" placeholder="Img" value="${data.img}" /><br />
                        <textarea name=""  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description">${data.desc}</textarea><br />
                        <button> Update ${data.id}</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        // console.log(document.querySelector('#form-edit-post'));
        const formEdit = document.querySelector("#form-add-post");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            const post = {
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            };
            add(post);
        });
    },
};
export default adminEdit;
