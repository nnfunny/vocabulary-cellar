const Store = window.require("electron-store");
const store = new Store();

function dataSetKV(key, value) {
    store.set(key, value)
}

function dataSetObj(obj) {
    store.set(obj)
}

export { dataSetKV, dataSetObj };
