const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      autoplayPolicy: "document-user-activation-required",
      nodeIntegration: true
    }
  });

  window.loadFile('public/index.html')
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})