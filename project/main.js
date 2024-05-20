function login() {
    // Get username and password input values
    var username = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    // Check if username and password match
    if (username === "admin" && password === "1234") {
        // Set user's name in localStorage for later use
        localStorage.setItem("username", username);
        // Hide login form
        document.querySelector(".login-container").style.display = "none";
        // Show welcome message
        document.querySelector(".content-area").innerHTML = "<h2>메인 콘텐츠</h2><p>" + username + "님, 환영합니다!</p>";
    } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
}

function logout() {
    // Remove user's name from localStorage
    localStorage.removeItem("username");
    // Show login form
    document.querySelector(".login-container").style.display = "block";
    // Reset content area
    document.querySelector(".content-area").innerHTML = "<h2>메인 콘텐츠</h2><p>여기에 주요 콘텐츠가 표시됩니다.</p>";
}

// Check if user is already logged in
document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username");
    if (username) {
        // Hide login form
        document.querySelector(".login-container").style.display = "none";
        // Show welcome message
        document.querySelector(".content-area").innerHTML = "<h2>메인 콘텐츠</h2><p>" + username + "님, 환영합니다!</p>";
    }
});

function selectbutton1() {
    window.location.href = "./planner/exercise_planner.html"; // 운동플래너 페이지로 이동
}

// 운동 파트너 매칭과 업적 버튼도 같은 방식으로 구현합니다.
function selectbutton2() {
    window.location.href = "exercise_partner_matching.html";
}

function selectbutton3() {
    window.location.href = "achievement.html";
}
