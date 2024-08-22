import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

// Load the service account key JSON file
// const credentialsPath = path.join(__dirname, 'credentials.json');
// const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// The ID of the spreadsheet to update
const spreadsheetId = '1qMru_D3E8xZmk_Nw2PptvlKgxZQALBxTfxSEFWkCeqg';

export async function updateVisitorGoogleSheet(req: any, ) {
  const sheets = google.sheets({ version: 'v4', auth });
  // The range to update in the spreadsheet (e.g., Sheet1!A1:C1)
  const range = 'aitex_visitor!A:P';
  const values = [
    [
      "",
      req.formData.firstName,
      req.formData.lastName,
      req.formData.registrationType,
      req.formData.organizations,
      req.formData.jobTitle,
      req.formData.nationality,
      req.formData.age,
      "",
      "",
      "",
      "",
      "",
      req.formData.email,
      req.formData.phone,
    ],
  ];
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values,
      },
    });

    console.log('Updated Google Sheet:', response.data);
  } catch (error) {
    console.error('Error updating Google Sheet:', error);
  }
}