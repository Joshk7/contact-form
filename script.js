const form = document.querySelector("form");
const queryItems = form.querySelectorAll(".query__list--item");

const handleQueryClick = (e) => {
    const button = e.target.querySelector("input[type=radio]");
    if (button) {
        button.click();
    }
}

queryItems.forEach((item) => {
    item.addEventListener("click", handleQueryClick);
});