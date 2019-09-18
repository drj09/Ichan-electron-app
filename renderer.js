// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const db = require('electron-db');
const path = require('path')
var $ = require("jquery");


var db_data = new Object();
db_data.name='Ichan_app_data'
db_data.location = path.join(__dirname, '')


db.createTable(db_data.name ,db_data.location , (succ, msg) => {
    if (succ) {
        console.log(msg)
      } else {
        console.log('An error has occured. ' + msg)
      }
  })

  
db.count(db_data.name, db_data.location, (succ, data) => {
    if (succ) {
        if(data==0)
            ipcRenderer.send('page_to_load', 0)
        else
            console.log('hello')
            data_count=data
            db.getAll(db_data.name, db_data.location, (succ, data) => {
                data=data[0]
                console.log(data)
                $.post("http://127.0.0.1:5000/authenticate",{auth_id: data.auth_id,system_id: process.env.COMPUTERNAME} ,
                    function( res ){
                        console.log(res)
                        if(res.access_code==151){
                            db.clearTable(db_data.name, db_data.location, (succ, msg) => {
                                if (succ) {console.log(msg)}
                                ipcRenderer.send('page_to_load', 0)
                            })

                        }
                        else
                            ipcRenderer.send('page_to_load', 1)
                    })
            })
            }

            
})





/*
if(data_count==0){
    //ipcRenderer.send('page_to_load', 0)
    let obj = new Object();

    obj.name = "Alexius Academia";
    obj.address = "Paco, Botolan, Zambales";
        
    if (db.valid(db_name,dblocation)) {
        db.insertTableContent(db_name, dblocation,obj, (succ, msg) => {
        // succ - boolean, tells if the call is successful
        console.log("Success: " + succ);
        console.log("Message: " + msg);
        })
    }

}
*/

console.log('ready')



/*
function fun(){
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

    
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})


ipcRenderer.send('asynchronous-message', 'ping')
}

*/