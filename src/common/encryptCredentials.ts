import * as CryptoJS from 'crypto-js';
import * as fs from 'fs';

// Your secret key (store it securely, e.g., in an environment variable)
const secretKey = process.env.SECRET_KEY || 'KLSAG7I3pUkOB2Zy';

// Encrypt the file
function encryptFile(data: string): string {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Paths to your files
const filePath = 'credentials.json';
const encryptedFilePath = 'credentials.json.enc';

// Read the JSON file
const fileData = fs.readFileSync(filePath, 'utf8');

// Encrypt the content
const encryptedData = encryptFile(fileData);

// Write the encrypted content to a new file
fs.writeFileSync(encryptedFilePath, encryptedData);

console.log('File encrypted and saved to', encryptedFilePath);