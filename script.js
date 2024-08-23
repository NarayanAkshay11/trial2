function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
}

document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        let target = +counter.getAttribute('data-target');
        let count = 0;
        let interval = setInterval(() => {
            if (count < target) {
                count++;
                counter.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 50);
    });
});
