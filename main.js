const path = require('path');
const { app, BrowserWindow } = require('electron');
const { screen } = require('electron');

const isDev =  process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const {width,height} = screen.getPrimaryDisplay().workAreaSize;
    const mainWindow = new BrowserWindow({
      title: "Example",
      frame: true,
      width: width - width/2,
      height: height,
      useContentSize: true,
      backgroundColor: "#000000",
      resizable: true,
      x: 0,
      y: 0,
      visibleOnAllWorkspaces: true,
      webPreferences: {
        nodeIntegration: false,
      },
    });

    // Open devtools if in dev enviroment
    /*
    if(isDev) {
        mainWindow.webContents.openDevTools();
    }*/
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));


}
//open main window when starting the app
app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
    })
});

//close app if not on mac(standard)
app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
})