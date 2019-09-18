// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const { ipcMain } = require('electron')
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

const db = require('electron-db');
var db_data = new Object();
db_data.name='Ichan_app_data'
db_data.location = path.join(__dirname, '')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 650,
    webPreferences: {
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
    transparent: true ,
    frame : false
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
   mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/*ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})
*/

ipcMain.on('page_to_load', (event, arg) => {
  console.log(arg)
  if(arg==0)
    {event.returnValue = 'login'
      mainWindow.loadFile('login.html')
    }
  if(arg==1)
  {
    event.returnValue = 'ichan'
    mainWindow.loadFile('ichan.html')
  }
  })


ipcMain.on('user_login', (event, arg) => {
console.log(arg.email)
console.log(arg.password)
$.post("http://127.0.0.1:5000/login",
    {email: arg.email,password: arg.password,system_id: process.env.COMPUTERNAME} ,
    function( res ){
        if(res.access_code==141){
          console.log('hey boiii')
          db.clearTable(db_data.name, db_data.location, (succ, msg) => {if (succ) {console.log(msg)}})
          db.insertTableContent(db_data.name, db_data.location, res , (succ, msg) => {
            console.log("Success: " + succ);
            console.log("Message: " + msg);
            event.returnValue = 141
            //mainWindow.loadFile('ichan.html')
          })

        }
        else{
          console.log('what the helll')
          event.returnValue = 151
        }
    })
})


ipcMain.on('user_register', (event, arg) => {
  console.log(arg.email)
  console.log(arg.password)
  $.post("http://127.0.0.1:5000/register",
      {user_name:arg.name,email: arg.email,password: arg.password,system_id: process.env.COMPUTERNAME} ,
      function( res ){
          console.log(res)
          if(res.access_code==141){
            console.log('hey boiii')
            db.clearTable(db_data.name, db_data.location, (succ, msg) => {if (succ) {console.log(msg)}})
            db.insertTableContent(db_data.name, db_data.location, res , (succ, msg) => {
              console.log("Success: " + succ);
              console.log("Message: " + msg);
              event.returnValue = 141
              //mainWindow.loadFile('ichan.html')
            })
            
          }
          event.returnValue = 151
      })
  })
  
