const form = document.querySelector("form");
const queryItems = form.querySelectorAll(".query__list--item");

const validations = {
    "given-name": (value) => {

    },
    "family-name": (value) => {

    },
    "email": (value) => {

    },
    "query": (value) => {

    },
    "message": (value) => {

    },
    "consent": (value) => {
        
    },
}

const validate = (formData) => {
    for (const key in validations) {
        if (!Object.hasOwn(formData, key)) {
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