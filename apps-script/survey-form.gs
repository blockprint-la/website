/**
 * Blockprint post-event fan survey — Apps Script Web App backend.
 *
 * Container-bound to "Website Submissions — 2026 Fan Survey"
 * (Drive: 26.08.22 - Blockprint Venice / 03. PLANNING + LOGISTICS,
 * spreadsheet 1j4-R2tl6BhzykyPMtG6Rq4nRUZ0MOGIqIEY27Kc2jUk).
 *
 * Deployed as a Web App: Execute as = Me, Access = Anyone. The /exec URL
 * lives in src/data/site.ts as `surveyFormUrl`.
 *
 * Contract (mirrors the Partners form backend):
 *  - Client POSTs a JSON string with Content-Type text/plain (no preflight).
 *  - Honeypot: if `website` is non-empty, answer ok:true but write nothing.
 *  - Response body is JSON: { ok: true } or { ok: false, error: "…" }.
 *
 * Column order MUST match the header row in the Responses tab:
 * timestamp | improve | loved | lineup | spend | heard | returning
 * | email | phone | waitlist | source
 * (v3, 8/26: overall rating cut too — fully qualitative. v2 same day had
 * cut the rating grid + timing and added spend, per Evan's survey pass.)
 *
 * This file is the canonical source — if you edit the script in the Apps
 * Script editor, copy the change back here. (The Partners form's backend
 * source was never saved anywhere and now lives only in Google's editor;
 * let's not do that twice.)
 */

var TAB = "Responses";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Honeypot — bots fill the hidden "website" field. Pretend success so
    // they don't retry, write nothing.
    if (data.website) {
      return jsonOut({ ok: true });
    }

    var row = [
      new Date().toISOString(),
      clean(data.improve, 5000),
      clean(data.loved, 5000),
      clean(data.lineup, 500),
      clean(data.spend, 100),
      clean(data.heard, 300),
      clean(data.returning, 100),
      clean(data.email, 300),
      clean(data.phone, 100),
      clean(data.waitlist, 10),
      clean(data.source, 300),
    ];

    var sheet = SpreadsheetApp.getActive().getSheetByName(TAB);
    if (!sheet) throw new Error("tab not found: " + TAB);
    sheet.appendRow(row);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

/**
 * Stringify, trim, cap length, and neutralize spreadsheet formula
 * injection (a value starting with = + - @ would otherwise be
 * interpreted as a formula by appendRow).
 */
function clean(v, max) {
  if (v === undefined || v === null) return "";
  var s = String(v).trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
