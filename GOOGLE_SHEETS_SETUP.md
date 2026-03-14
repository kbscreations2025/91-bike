# Google Sheets Integration Setup

Follow these steps to save form submissions to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it `+91Bikes Form Submissions`
3. Create two sheets (tabs):
   - **Sheet1**: Rename to `SellForm` — Add headers in Row 1:
     `Timestamp | Form Type | First Name | Phone | Brand | Model | Year | City`
   - **Sheet2**: Rename to `ContactForm` — Add headers in Row 1:
     `Timestamp | Form Type | Full Name | Phone | Email | Subject | Message`

## Step 2: Create a Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);

  if (data.formType === "sell") {
    var sellSheet = sheet.getSheetByName("SellForm");
    sellSheet.appendRow([
      data.timestamp,
      data.formType,
      data.firstName,
      data.phone,
      data.brand,
      data.model,
      data.year,
      data.city
    ]);
  } else if (data.formType === "contact") {
    var contactSheet = sheet.getSheetByName("ContactForm");
    contactSheet.appendRow([
      data.timestamp,
      data.formType,
      data.fullName,
      data.phone,
      data.email,
      data.subject,
      data.message
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (name the project `91Bikes Form Handler`)

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Select type: **Web app**
3. Set:
   - **Description**: Form submission handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize the script when prompted
6. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 4: Update Environment Variable

1. Open `.env.local` in your project root
2. Replace the placeholder URL with your actual Web App URL:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

3. Restart your Next.js dev server

## Testing

1. Submit a form on your website
2. Check your Google Sheet — a new row should appear within seconds
