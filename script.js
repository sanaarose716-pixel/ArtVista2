
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            if (!email || !password) {
                message.textContent = "Please fill in all fields.";
                return;
            }

            message.textContent =
                "Demo login submitted! A real account system needs a backend.";
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword =
                document.getElementById("confirmPassword").value;
            const message = document.getElementById("message");

            if (!name || !email || !password || !confirmPassword) {
                message.textContent = "Please fill in all fields.";
                return;
            }

            if (password.length < 6) {
                message.textContent =
                    "Password must contain at least 6 characters.";
                return;
            }

            if (password !== confirmPassword) {
                message.textContent = "Passwords do not match.";
                return;
            }

            message.textContent =
                "Form validated! A real account system needs a backend.";
        });
    }
});
