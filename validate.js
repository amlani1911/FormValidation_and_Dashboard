function containsCapitalLetter(input) {
    return /[A-Z]/.test(input);
}

function containsNumber(input) {
    return /\d/.test(input);
}

function validateForm(e) {
    // Clear previous error messages and remove red outlines
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Remove red outline class
    usernameInput.classList.remove('error-outline');
    passwordInput.classList.remove('error-outline');

    // Validate email format
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!usernameRegex.test(usernameInput.value)) {
        document.getElementById('usernameError').textContent = 'Username should be in a valid email format';
        // Add red outline class
        usernameInput.classList.add('error-outline');
        return false;
    }

    // Validate password format
    const regex1 = /@/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
    if (!containsCapitalLetter(passwordInput.value)) {
        document.getElementById('passwordError').textContent = 'Password should contain at least 1 uppercase letter';
        // Add red outline class
        passwordInput.classList.add('error-outline');
        return false;
    } else if (!containsNumber(passwordInput.value)) {
        document.getElementById('passwordError').textContent = 'Password should contain a digit';
        // Add red outline class
        passwordInput.classList.add('error-outline');
        return false;
    } else if (!regex1.test(passwordInput.value)) {
        document.getElementById('passwordError').textContent = 'Password should contain @ character';
        // Add red outline class
        passwordInput.classList.add('error-outline');
        return false;
    } else if (passwordInput.value.length < 8) {
        document.getElementById('passwordError').textContent = 'The length of the password should be at least 8';
        // Add red outline class
        passwordInput.classList.add('error-outline');
        return false;
    }
    else if(!passwordRegex.test(passwordInput.value)) {
        document.getElementById('passwordError').textContent = 'Password should not contain special character other than @';
        passwordInput.classList.add('error-outline');
        return false;
    }

    if(passwordInput.value === "SmartServTest@123"){
        window.open("./dashboard.html", "_self");
        return false;
    }
    // Form is valid
    alert("Login Successful!");
    window.location.href = "./index.html";
    return false;
}