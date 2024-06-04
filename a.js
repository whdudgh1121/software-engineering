document.addEventListener("DOMContentLoaded", function() {
    const achievements = [
        { id: "achievement-1", condition: () => true },
        { id: "achievement-2", condition: (stats) => stats.benchPress >= 0 && stats.benchPress < 70 },
        { id: "achievement-3", condition: (stats) => stats.benchPress >= 70 && stats.benchPress < 120 },
        { id: "achievement-4", condition: (stats) => stats.benchPress >= 120 },
        { id: "achievement-5", condition: (stats) => stats.deadlift >= 0 && stats.deadlift < 80 },
        { id: "achievement-6", condition: (stats) => stats.deadlift >= 80 && stats.deadlift < 130 },
        { id: "achievement-7", condition: (stats) => stats.deadlift >= 130 },
        { id: "achievement-8", condition: (stats) => stats.squat >= 0 && stats.squat < 80 },
        { id: "achievement-9", condition: (stats) => stats.squat >= 80 && stats.squat < 150 },
        { id: "achievement-10", condition: (stats) => stats.squat >= 150 },
        { id: "achievement-11", condition: (stats) => stats.total >= 100 && stats.total < 200 },
        { id: "achievement-12", condition: (stats) => stats.total >= 200 && stats.total < 300 },
        { id: "achievement-13", condition: (stats) => stats.total >= 300 && stats.total < 400 },
        { id: "achievement-14", condition: (stats) => stats.total >= 400 && stats.total < 500 },
        { id: "achievement-15", condition: (stats) => stats.total >= 500 },
        { id: "achievement-16", condition: (stats) => stats.attendance >= 3 },
        { id: "achievement-17", condition: (stats) => stats.matching },
        { id: "achievement-18", condition: (stats) => stats.attendance >= 30 }
    ];

    const stats = {
        benchPress: 80,
        deadlift: 90,
        squat: 100,
        total: 0,
        attendance: 5,
        matching: true
    };

    stats.total = stats.benchPress + stats.deadlift + stats.squat;

    function checkAchievements() {
        achievements.forEach(achievement => {
            if (achievement.condition(stats)) {
                const element = document.getElementById(achievement.id);
                element.classList.add("unlocked");
                // 요소 내 텍스트 제거 (원하지 않는 경우)
                element.textContent = '';
            }
        });
    }

    checkAchievements();
});
