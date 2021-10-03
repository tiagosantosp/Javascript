const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

ipcMain.on('canal' , (event, args) => {
    console.log(args)

    event.reply('canal', 'dados recebidos')
})