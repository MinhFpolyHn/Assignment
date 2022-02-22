import adminNav from "../components/admin/adminNav";
import table from "../components/admin/table";

const adimTable = {
    render() {
        return `
        ${adminNav.render()}
        ${table.render()}`;
    },
};
export default adimTable;
