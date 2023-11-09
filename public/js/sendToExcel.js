
const { v4: uuidv4 } = require('uuid');
const axios = require('axios')

function postData(data, sheetName) {
  const apiKey = process.env.API_KEY;
  const url = process.env.EXCEL_URL + "?sheet=" + sheetName;
  return new Promise((resolve, reject) => {
    const requestData = {
      requestID: uuidv4(),
      timeStamp: new Date().toISOString(),
      ...data,
    };

    axios
      .post(url, requestData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + apiKey,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error); // Reject the promise with the error
      });
  });
}

function generateUUID() {
  const crypto = window.crypto || window.msCrypto; // For browser compatibility
  const buffer = new Uint8Array(16);
  crypto.getRandomValues(buffer);

  // Set version (4) and variant (Random)
  buffer[6] = (buffer[6] & 0x0f) | 0x40;
  buffer[8] = (buffer[8] & 0x3f) | 0x80;

  return (
    bufferToHex(buffer.subarray(0, 4)) +
    bufferToHex(buffer.subarray(4, 6)) +
    bufferToHex(buffer.subarray(6, 8)) +
    bufferToHex(buffer.subarray(8, 10)) +
    bufferToHex(buffer.subarray(10))
  );
}

function bufferToHex(buffer) {
  return Array.from(buffer, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

module.exports = postData