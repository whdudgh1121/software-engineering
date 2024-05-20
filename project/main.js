function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.getElementById("modalBackdrop").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("modalBackdrop").style.display = "none";
}
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        var profileSection = document.querySelector(".profile-section");
        profileSection.innerHTML = `<p>${username}님! 환영합니다!</p><button class="logout-button" onclick="logout()">로그아웃</button>`;
        closeLoginModal();
    } else {
        alert("사용자 이름 또는 비밀번호가 잘못되었습니다.");
    }
}
function logout() {
    var profileSection = document.querySelector(".profile-section");
    profileSection.innerHTML = "<p>로그인 해주세요.</p>"; // 프로필을 재설정
}