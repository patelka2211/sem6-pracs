import { elements } from "./elements";

function checkName() {
    const nameRegex = /^[a-zA-Z ]+$/;
    let value = (elements.name as HTMLInputElement).value;

    if (nameRegex.exec(value) == null) {
        alert("Error in name input");
        throw Error("Error in name input");
    }
}

function checkPhone() {
    const phoneRegex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    let value = (elements.phoneno as HTMLInputElement).value;

    if (phoneRegex.exec(value) == null) {
        alert("Error in phone number input");
        throw Error("Error in phone number input");
    }
}

function checkEmail() {
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let value = (elements.emailid as HTMLInputElement).value;

    if (emailRegex.exec(value) == null) {
        alert("Error in email input");
        throw Error("Error in email input");
    }
}

function checkPassword() {
    const passwordRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let value = (elements.password as HTMLInputElement).value;

    if (passwordRegex.exec(value) == null) {
        alert("Error in password input");
        throw Error("Error in password input");
    }
}

function recheckPassword() {
    let password = (elements.password as HTMLInputElement).value,
        reenter_password = (elements.reenter_password as HTMLInputElement)
            .value;

    if (password != reenter_password) {
        alert("Enter same password");
        throw Error("Enter same password");
    }
}

(elements.submit_btn as HTMLElement).onclick = () => {
    checkName();
    checkPhone();
    checkEmail();
    checkPassword();
    recheckPassword();

    (
        [
            elements.name,
            elements.phoneno,
            elements.emailid,
            elements.password,
            elements.reenter_password,
        ] as HTMLInputElement[]
    ).forEach((element) => {
        element.value = "";
    });
    alert("Registered");
};
