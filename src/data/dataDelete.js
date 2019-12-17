const Store = window.require("electron-store");
const store = new Store();

function dataDelete(key) {
    store.delete(key);
}

export default dataDelete;
