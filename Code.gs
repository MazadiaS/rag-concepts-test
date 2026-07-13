/**
 * Google Apps Script — receives test results and writes them to the Sheet.
 * Paste this into Extensions → Apps Script of your Google Sheet, then Deploy as a Web App.
 * (Old Rhino-safe style: var only, no const/let, no arrow functions, no spread.)
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Results");
    if (!sheet) {
      sheet = ss.getSheets()[0]; // fallback to the first tab
    }

    // Add a header row once.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Group", "Score", "Correct",
                       "Total", "Percent", "Per-topic", "Answers"]);
    }

    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || "",
      data.group || "",
      data.score || 0,
      data.correct || 0,
      data.total || 0,
      data.percent || 0,
      data.topics || "",
      data.answers || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the Web App URL in a browser to confirm it is live.
function doGet(e) {
  return ContentService.createTextOutput("AI/ML Concepts test endpoint is live.");
}
