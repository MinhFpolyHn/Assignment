import { get } from "../api/posts";

const Detailpage = {
    async render(id) {
        const { data } = await get(id);

        return /* html */`
                 <div>
                    <h1> ${data.title}</h1>
                    <img src="${data.img}" with="300px" alt="">
                     <p> ${data.desc}</p>    
                     <span>${data.price}   </span>
                 </div>            
                 `;
    },
};

export default Detailpage;
