// Electron Store

const Store = require("electron-store");
const store = new Store();

function dataDelete(key) {
    store.delete(key);
}


function dataGet(property) {
    let value = store.get(property);

    return value
}


function dataSetKV(key, value) {
    store.set(key, value)
}

function dataSetObj(obj) {
    store.set(obj)
}
