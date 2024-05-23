document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq li").forEach(item => {
        item.addEventListener("click", () => {
            const answer = item.querySelector("p");
            const icon = item.querySelector("i");

            item.classList.toggle("active");
            answer.style.display = item.classList.contains("active") ? "block" : "none";
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-minus");
        });
    });
});
