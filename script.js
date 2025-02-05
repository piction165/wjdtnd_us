document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".work-menu span");
    const workContents = document.querySelectorAll(".work-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const workType = this.getAttribute("data-work");

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            workContents.forEach(content => {
                if (workType === "all") {
                    content.style.display = "block";
                } else if (content.classList.contains(workType)) {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });
        });
    });
});
