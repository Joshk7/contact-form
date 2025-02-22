const form = document.querySelector("form");
const queryItems = form.querySelectorAll(".query__list--item");

const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validations = {
    "given-name": (value) => {
        return !!value.trim();
    },
    "family-name": (value) => {
        return !!value.trim();
    },
    "email": (value) => {
        return value.length !== 0 && emailRegExp.test(value);
    },
    "query": (value) => {
        return !!value.trim();
    },
    "message": (value) => {
        return !!value.trim();
    },
    "consent": (value) => {
        return !!value.trim();
    },
}

const validate = (formData) => {
    for (const key in validations) {
        if (!Object.hasOwn(formData, key)) {
            return false;
        }

        if (!validations[key](formData[key])) {
            console.log(key);
            return false;
        }
    }

    return true;
}

const handleQueryClick = (e) => {
    const button = e.target.querySelector("input[type=radio]");
    if (button) {
        button.click();
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));
    console.log(data, validate(data));
}

queryItems.forEach((item) => {
    item.addEventListener("click", handleQueryClick);
});

form.addEventListener("submit", handleFormSubmit);