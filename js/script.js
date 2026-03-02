// script.js
function loadLayout() {
    // 1. Header Load + Active Menu Logic
    fetch('header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Active Menu Logic
            const page = window.location.pathname.split("/").pop() || "index.html";
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            navLinks.forEach(link => {
                if (link.getAttribute('href') === page) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Spinner handling (Optional: if spinner is inside header)
            const spinner = document.getElementById("spinner");
            if(spinner) {
                setTimeout(() => {
                    spinner.classList.remove("show");
                    spinner.style.opacity = "0";
                    setTimeout(() => spinner.style.display = "none", 400);
                }, 500);
            }
        });

    // 2. Footer Load
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

window.onload = loadLayout;