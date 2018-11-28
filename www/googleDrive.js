function GoogleDrive() {}

GoogleDrive.prototype.downloadFile = function (destinationURL,fileid,successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GoogleDrive", "downloadFile", [destinationURL,fileid]);
};

GoogleDrive.prototype.uploadFile = function (fpath,appfolder,successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GoogleDrive", "uploadFile", [fpath,appfolder]);
};

GoogleDrive.prototype.uploadFileUnderParent = function(fpath,parentId,successCallback,errorCallback){
    cordova.exec(successCallback,errorCallback,"GoogleDrive","uploadFileUnderParent",[fpath,parentId]);
};

GoogleDrive.prototype.addFolder = function (name,resourceId,successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GoogleDrive", "addFolder", [name,resourceId]);
};

GoogleDrive.prototype.listFolder = function (appfolder,resourceId,successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GoogleDrive", "listFolder", [appfolder,resourceId]);
};

GoogleDrive.prototype.fileList = function (appfolder,successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GoogleDrive", "fileList", [appfolder]);
};

GoogleDrive.prototype.deleteFile = function (fileid,successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GoogleDrive", "deleteFile", [fileid]);
};

GoogleDrive.prototype.requestSync = function(returnFiles,successCallback,errorCallback){
    cordova.exec(successCallback,errorCallback,"GoogleDrive","requestSync",[returnFiles]);
};

GoogleDrive.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.gdrive = new GoogleDrive();
    return window.plugins.gdrive;
};

cordova.addConstructor(GoogleDrive.install);
