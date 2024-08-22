import { google } from 'googleapis';
import * as CryptoJS from 'crypto-js';
import * as fs from 'fs';

const secretKey = process.env.SECRET_KEY || 'your-32-character-random-secret-key';

// Function to decrypt the encrypted file
function decryptFile(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Path to the encrypted file
const encryptedFilePath = 'credentials.json.enc';

// Read the encrypted file content
const encryptedData = fs.readFileSync(encryptedFilePath, 'utf8');

// Decrypt the file content
const decryptedData = decryptFile(encryptedData);

// Parse the decrypted JSON
const credentials = JSON.parse(decryptedData);

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// The ID of the spreadsheet to update
const spreadsheetId = '1qMru_D3E8xZmk_Nw2PptvlKgxZQALBxTfxSEFWkCeqg';

export async function updateVisitorGoogleSheet(formData: any, ) {
  const sheets = google.sheets({ version: 'v4', auth });
  // The range to update in the spreadsheet (e.g., Sheet1!A1:C1)
  const range = 'aitex_visitor!A:P';
  const values = [
    [
      "",
      formData.firstName,
      formData.lastName,
      formData.registrationType,
      formData.organizations,
      formData.jobTitle,
      formData.nationality,
      formData.age,
      "",
      "",
      "",
      "",
      "",
      "",
      formData.email,
      formData.phone,
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

    console.log('Updated Google Sheet Visitor:', response.data);
  } catch (error) {
    console.error('Error updating Google Sheet Visitor:', error);
  }
}

export async function updateConferenceGoogleSheet(formData: any, ) {
  const sheets = google.sheets({ version: 'v4', auth });
  // The range to update in the spreadsheet (e.g., Sheet1!A1:C1)
  const range = 'aitex_conference!A:P';
  const values = [
    [
      "",
      formData.firstName,
      formData.lastName,
      formData.conferenceType,
      formData.organizations,
      formData.jobTitle,
      formData.nationality,
      formData.age,
      "",
      "",
      "",
      "",
      "",
      "",
      formData.email,
      formData.phone,
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

    console.log('Updated Google Sheet Conference:', response.data);
  } catch (error) {
    console.error('Error updating Google Sheet Conference:', error);
  }
}

export async function updateExhibitorGoogleSheet(formData: any, ) {
  const sheets = google.sheets({ version: 'v4', auth });
  // The range to update in the spreadsheet (e.g., Sheet1!A1:C1)
  const range = 'aitex_exhibitor!A:Q';
  const values = [
    [
      "",
      formData.prefix, 
      formData.firstName, 
      formData.lastName, 
      formData.email, 
      formData.companyName, 
      formData.jobTitle, 
      formData.website, 
      formData.businessAddress1, 
      formData.businessAddress2, 
      formData.city, 
      formData.stateOrProvince, 
      formData.postcode, 
      formData.country, 
      formData.phone, 
      formData.standSize, 
      formData.companyActivity
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

    console.log('Updated Google Sheet Exhibitor:', response.data);
  } catch (error) {
    console.error('Error updating Google Sheet Exhibitor:', error);
  }
}

export async function updateExhibitorFinalGoogleSheet(formData: any, ) {
  const sheets = google.sheets({ version: 'v4', auth });
  // The range to update in the spreadsheet (e.g., Sheet1!A1:C1)
  const range = 'aitex_exhibitor_final!A:P';
  const values = [
    [
      "",
      formData.primaryContact, 
      formData.organization, 
      formData.jobTitle, 
      formData.address, 
      formData.city, 
      formData.stateOrProvince, 
      formData.postcode, 
      formData.country, 
      formData.email, 
      formData.phone, 
      formData.boothLocation, 
      formData.boothSize, 
      formData.amount, 
      formData.firstPreference, 
      formData.secondPreference
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

    console.log('Updated Google Sheet Exhibitor Final:', response.data);
  } catch (error) {
    console.error('Error updating Google Sheet Exhibitor Final:', error);
  }
}

export async function updateWITAGoogleSheet(formData: any, ) {
  const sheets = google.sheets({ version: 'v4', auth });
  // The range to update in the spreadsheet (e.g., Sheet1!A1:C1)
  const range = 'wita!A:AD';
  const values = [
    [
      "",
      formData.nomineeName,
      formData.awardsTitle,
      formData.organisationName,
      formData.organisationWebsite,
      formData.organisationFounded,
      formData.organisationSocialMedia,
      formData.billingAddress1,
      formData.billingAddress2,
      formData.billingAddress3,
      formData.city,
      formData.stateOrProvince,
      formData.postcode,
      formData.country,
      formData.contactFirstName,
      formData.contactLastName,
      formData.contactJobTitle,
      formData.contactEmail,
      formData.contactPhone,
      formData.additionalContactFirstName,
      formData.additionalContactLastName,
      formData.additionalContactJobTitle,
      formData.additionalContactEmail,
      formData.additionalContactPhone,
      formData.nomineeDescription,
      formData.authorisedPersonFirstName,
      formData.authorisedPersonLastName,
      formData.authorisedPersonJobTitle,
      formData.authorisedPersonEmail,
      formData.authorisedPersonPhone,
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

    console.log('Updated Google Sheet WITA:', response.data);
  } catch (error) {
    console.error('Error updating Google Sheet WITA:', error);
  }
}