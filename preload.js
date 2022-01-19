const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("methodToggle", () => {
  ipcRenderer.invoke("toggle");
});

contextBridge.exposeInMainWorld("methodSystem", () => {
  ipcRenderer.invoke("system");
});
