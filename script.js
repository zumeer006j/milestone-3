var _a;
// Function to handle form submission and generate resume dynamically
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Build resume output HTML
    var resumeHTML = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display resume in the 'resumeOutput' div
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
});
