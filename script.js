function calculateAge() {
    // Get the birthdate from input (HTML date input format: YYYY-MM-DD)
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    // Validate input
    if (birthdate === "Invalid Date" || birthdate > today) {
        document.getElementById('result').textContent = "Please enter a valid date of birth!";
        return;
    }

    // Calculate age
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Check if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Display result
    document.getElementById('result').textContent = `Your age is ${age} years.`;
}