"use strict";

var _require = require("electron"),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var createWindow = function createWindow() {
  var window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      autoplayPolicy: "document-user-activation-required",
      nodeIntegration: true
    }
  });
  window.loadFile('public/index.html');
};

app.whenReady().then(createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});