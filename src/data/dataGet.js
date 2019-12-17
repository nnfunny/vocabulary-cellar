const Store = window.require("electron-store");
const store = new Store();

function dataGet(property) {
    let value = store.get(property);

    return value
}

export default dataGet;
