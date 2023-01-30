const elements = {
    name: (() => {
        return document.getElementById("name");
    })(),
    phoneno: (() => {
        return document.getElementById("phoneno");
    })(),
    emailid: (() => {
        return document.getElementById("emailid");
    })(),
    password: (() => {
        return document.getElementById("password");
    })(),
    reenter_password: (() => {
        return document.getElementById("reenter-password");
    })(),
    submit_btn: (() => {
        return document.getElementById("submit-btn");
    })(),
};

function checkName() {
    const nameRegex = /^[a-zA-Z ]+$/;
    let value = elements.name.value;
    if (nameRegex.exec(value) == null) {
        alert("Error in name input");
        throw Error("Error in name input");
    }
}
function checkPhone() {
    const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let value = elements.phoneno.value;
    if (phoneRegex.exec(value) == null) {
        alert("Error in phone number input");
        throw Error("Error in phone number input");
    }
}
function checkEmail() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let value = elements.emailid.value;
    if (emailRegex.exec(value) == null) {
        alert("Error in email input");
        throw Error("Error in email input");
    }
}
function checkPassword() {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let value = elements.password.value;
    if (passwordRegex.exec(value) == null) {
        alert("Error in password input");
        throw Error("Error in password input");
    }
}
function recheckPassword() {
    let password = elements.password.value, reenter_password = elements.reenter_password
        .value;
    if (password != reenter_password) {
        alert("Enter same password");
        throw Error("Enter same password");
    }
}
elements.submit_btn.onclick = () => {
    checkName();
    checkPhone();
    checkEmail();
    checkPassword();
    recheckPassword();
    [
        elements.name,
        elements.phoneno,
        elements.emailid,
        elements.password,
        elements.reenter_password,
    ].forEach((element) => {
        element.value = "";
    });
    alert("Registered");
};
