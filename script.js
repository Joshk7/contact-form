const form = document.querySelector("form");
const given = document.getElementById("given-name");
const errorGiven = document.getElementById("error_given");
const family = document.getElementById("family-name");
const errorFamily = document.getElementById("error_family");
const email = document.getElementById("email");
const errorEmail = document.getElementById("error_email");
const errorQuery = document.getElementById("error_query");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error_message");
const errorConsent = document.getElementById("error_consent");
const queryItems = form.querySelectorAll(".query__list--item");
const toast = document.getElementById("toast");

const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validations = {
    "given-name": (value) => {
        const trimmed = value.trim();
        if (trimmed === "") {
            errorGiven.classList.remove("invisible");
            given.classList.add("error__outline");
            given.ariaInvalid = true;
            return false;
        } else {
            errorGiven.classList.add("invisible");
            given.classList.remove("error__outline");
            given.ariaInvalid = false;
            return true;
        }
    },
    "family-name": (value) => {
        const trimmed = value.trim();
        if (trimmed === "") {
            errorFamily.classList.remove("invisible");
            family.classList.add("error__outline");
            family.ariaInvalid = true;
            return false;
        } else {
            errorFamily.classList.add("invisible");
            family.classList.remove("error__outline");
            family.ariaInvalid = false;
            return true;
        }
    },
    "email": (value) => {
        if (value.length !== 0 && emailRegExp.test(value)) {
            errorEmail.classList.add("invisible");
            email.classList.remove("error__outline");
            email.ariaInvalid = false;
            return true;
        } else {
            errorEmail.classList.remove("invisible");
            email.classList.add("error__outline");
            email.ariaInvalid = true;
            return false;
        }
    },
    "query": (value) => {
        const trimmed = value.trim();
        if (trimmed === "") {
            errorQuery.classList.remove("invisible");
            return false;
        } else {
            errorQuery.classList.add("invisible");
            return true;
        }
    },
    "message": (value) => {
        const trimmed = value.trim();
        if (trimmed === "") {
            errorMessage.classList.remove("invisible");
            message.classList.add("error__outline");
            message.ariaInvalid = true;
            return false;
        } else {
            errorMessage.classList.add("invisible");
            message.classList.remove("error__outline");
            message.ariaInvalid = false;
            return true;
        }
    },
    "consent": (value) => {
        const trimmed = value.trim();
        if (trimmed === "") {
            errorConsent.classList.remove("invisible");
            consent.ariaInvalid = true;
            return false;
        } else {
            errorConsent.classList.add("invisible");
            consent.ariaInvalid = false;
            return true;
        }
    },
};

const errors = {
    "given-name": errorGiven,
    "family-name": errorFamily,
    email: errorEmail,
    query: errorQuery,
    message: errorMessage,
    consent: errorConsent,
};

const validate = (formData) => {
    let valid = true;
    for (const key in validations) {
        if (!Object.hasOwn(formData, key)) {
            valid = false;
            validations[key]("");
        } else {
            if (!validations[key](formData[key])) {
                valid = false;
            }
        }
    }

    return valid;
};

const handleQueryClick = (e) => {
    const button = e.target.querySelector("input[type=radio]");
    if (button) {
        button.click();
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));
    const valid = validate(data);
    handleSuccess();
    if (valid) {
        // do something with the data.
        console.log("valid query!");
    }
};

queryItems.forEach((item) => {
    item.addEventListener("click", handleQueryClick);
});

form.addEventListener("submit", handleFormSubmit);

function handleSuccess() {
    toast.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(() => { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
  }