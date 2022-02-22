import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../components/logo";
import News from "../components/news";

const HomePage = {
    async  render() {
        return /* html */`
             <div class="logo">
                 ${logo.render()}
            </div>
            <div id="header">
                 ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${await News.render()}
            </div>

            <div class="footer">
                ${Footer.render()}
            </div>

            
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
