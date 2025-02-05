document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".work-menu span");
    const workContents = document.querySelectorAll(".work-content");
    const servicesLink = document.getElementById("servicesLink");
    const subMenu = document.getElementById("subMenu");

    // services 클릭 이벤트 (서브메뉴 표시 + 페이지 이동)
    servicesLink.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 링크 이동 방지

        if (subMenu.style.display === "block") {
            window.location.href = "services.html"; // 두 번째 클릭 시 페이지 이동
        } else {
            subMenu.style.display = "block"; // 서브메뉴 보이기
        }
    });

    // 문서의 다른 곳을 클릭하면 서브메뉴 숨기기
    document.addEventListener("click", function (event) {
        if (!servicesLink.contains(event.target) && !subMenu.contains(event.target)) {
            subMenu.style.display = "none";
        }
    });

    // 필터 버튼 기능 (작업 유형 필터링)
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
