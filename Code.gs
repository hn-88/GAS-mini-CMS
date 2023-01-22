const contentsheetname = "ContentChamps";

function doGet() {
  return HtmlService
      .createTemplateFromFile('Content')
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function getData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(contentsheetname);
  var fileid = '1Q_QbjGCriujiXoT_WVtKDYGuqIuwiZsc';
  var drivefile = Drive.Files.get(fileid, {supportsAllDrives: true});
  Logger.log(drivefile.thumbnailLink)
  return sheet.getDataRange().getValues();
}
