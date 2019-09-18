// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const { ipcMain } = require('electron')
const fetch = require('node-fetch');
const db = require('electron-db');
const axios = require('axios');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

var db_data = new Object();
db_data.name='Ichan_app_data'
db_data.location = path.join(__dirname, '')
let mainWindow


// Create the browser window.
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: false,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })



function window_content(n)
{
  if(n==0)
  mainWindow.loadFile('login.html')
  else 
  mainWindow.loadFile('ichan.html')
}

db.createTable(db_data.name ,db_data.location , (succ, msg) => {
  if (succ) {
      console.log(msg)
    } else {
      console.log('An error has occured. ' + msg)
    }
})

function authenticate()
{
  db.getAll(db_data.name,db_data.location,(succ,user) => {
    user=user[0]
    console.log(user)

    axios.post('http://127.0.0.1:5000/login', {email: data.email,password: data.password,cmp_name: process.env.COMPUTERNAME})
    
    
  })
}
  
db.count(db_data.name, db_data.location, (succ, count) => {
  if (succ) {
      if(count==0)
        window_content(0)
      else
        authenticate()
  }
})
  
  

  // and load the index.html of the app.
 //mainWindow.loadFile('index.html')

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



/*
function delete_db(username,password,email)
{
  
}


  let obj = new Object();
 
  obj.name = "Alexius Academia";
  obj.address = "Paco, Botolan, Zambales";
   
 
  if (db.valid(db_data.name ,db_data.location)) {
    db.insertTableContent(db_data.name,db_data.location,obj ,(succ, msg) => {
      // succ - boolean, tells if the call is successful
      console.log("Success: " + succ);
      console.log("Message: " + msg);
    })
  }



function register(username,password,email)
{

}

*/