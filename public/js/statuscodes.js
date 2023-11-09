const statusCodes = {
    STATUS_NAME_INVALID: { code: 401, title: "Alas", message: "Please enter a valid name (minimum 3 characters, alphabets only)." },
    STATUS_EMAIL_INVALID: { code: 402, title: "Alas", message: "Please enter a valid email address." },
    STATUS_PHONE_INVALID: { code: 403, title: "Alas", message: "Please enter a valid 10-digit phone number." },
    STATUS_SERVICE_EMPTY: { code: 405, title: "Alas", message: "Please specify the type of service you are interested in." },
    STATUS_SUCCESS: { code: 200, title: "Success", message: "Thank you for contacting us. We will get back to you soon." }
};
module.exports = statusCodes