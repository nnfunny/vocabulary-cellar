const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

// Reload Electron App
// if(isDev) {
// require("electron-reload")(__dirname, {
// electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
// hardResetMethod: 'exit',
// });
// }

let mainWindow;

// Update app from Github repository
// require("update-electron-app")({
// repo: "",
// updateInterval: "1 hour"
// })

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 775,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// console.log(app.getPath("userData"));
