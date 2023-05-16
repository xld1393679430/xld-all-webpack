const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    devTools: true,
    webPreferences: {
      nodeIntegration: true,
      // enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  win.on("show", function () {
    win.webContents.openDevTools();
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:8080/home");
  } else {
    win.loadFile(path.join(app.getAppPath(), "home.html"));
  }
}

ipcMain.on("win.click", function () {
  console.log("---win.click----");
});

console.log("index-1")
app.whenReady().then(() => {
  createWindow();

  console.log("index-2")
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
