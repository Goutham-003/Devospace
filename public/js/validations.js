const statusCodes = {
    STATUS_NAME_INVALID: { code: 401, title: "Alas", message: "Please enter a valid name (minimum 3 characters, alphabets only)." },
    STATUS_EMAIL_INVALID: { code: 402, title: "Alas", message: "Please enter a valid email address." },
    STATUS_PHONE_INVALID: { code: 403, title: "Alas", message: "Please enter a valid 10-digit phone number." },
    STATUS_SERVICE_EMPTY: { code: 405, title: "Alas", message: "Please specify the type of service you are interested in." },
    STATUS_SUCCESS: { code: 200, title: "Success", message: "Thank you for contacting us. We will get back to you soon." }
};

function validateName(name) {
    const nameRegex = /^[A-Za-z ]{3,}$/;
    return nameRegex.test(name);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateService(service) {
    return service.trim() !== '';
}

function validateExcelData(formData) {
    if ('name' in formData && !validateName(formData.name)) {
        return statusCodes.STATUS_NAME_INVALID;
    }

    if ('phoneNumber' in formData && !validatePhoneNumber(formData.phoneNumber)) {
        return statusCodes.STATUS_PHONE_INVALID;
    }

    if ('email' in formData && !validateEmail(formData.email)) {
        return statusCodes.STATUS_EMAIL_INVALID;
    }

    if ('service' in formData && !validateService(formData.service)) {
        return statusCodes.STATUS_SERVICE_EMPTY;
    }
    return statusCodes.STATUS_SUCCESS;
}

module.exports = validateExcelData
