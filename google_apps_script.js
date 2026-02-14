function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, new Date().toLocaleString()]);
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var result = [];
  for (var i = 1; i < data.length; i++) {
    result.push({ name: data[i][0], time: data[i][1] });
  }
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
