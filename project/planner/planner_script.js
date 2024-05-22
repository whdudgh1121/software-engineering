document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const plannerForm = document.getElementById('planner-form');
    const recordForm = document.getElementById('record-form');
    const displayPlanner = document.getElementById('display-planner');
    const displayRecords = document.getElementById('display-records');
    
    let selectedDate = null;

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            selectedDate = info.dateStr;
            highlightSelectedDate(info.dateStr);
            fetchDataForDate(selectedDate);
        }
    });

    calendar.render();

    function highlightSelectedDate(dateStr) {
        document.querySelectorAll('.fc-daygrid-day').forEach(dayEl => {
            if (dayEl.getAttribute('data-date') === dateStr) {
                dayEl.classList.add('selected-date');
            } else {
                dayEl.classList.remove('selected-date');
            }
        });
    }

    function fetchDataForDate(date) {
        fetch(`server/get_data.php?date=${date}`)
            .then(response => response.json())
            .then(data => {
                displayPlanner.innerHTML = data.planner ? `
                    <h3>운동 계획</h3>
                    <p><strong>제목:</strong> ${data.planner.title}</p>
                    <p><strong>내용:</strong> ${data.planner.content}</p>
                ` : '<h3>운동 계획</h3><p>데이터 없음</p>';

                displayRecords.innerHTML = data.records.length ? '<h3>운동 기록</h3>' + data.records.map(record => `
                    <p><strong>운동 종류:</strong> ${record.type}</p>
                    <p><strong>횟수:</strong> ${record.reps}</p>
                    <p><strong>무게:</strong> ${record.weight} kg</p>
                    <p><strong>세트:</strong> ${record.sets}</p>
                    <hr>
                `).join('') : '<h3>운동 기록</h3><p>데이터 없음</p>';
            });
    }

    // 운동 계획 폼 제출
    plannerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (selectedDate) {
            const title = document.getElementById('planner-title').value;
            const content = document.getElementById('planner-content').value;

            fetch('server/save_planner.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date: selectedDate, title, content })
            }).then(response => response.json())
              .then(data => {
                  alert('운동 계획 저장 완료!');
                  fetchDataForDate(selectedDate);
              });
        } else {
            alert('날짜를 선택해주세요.');
        }
    });

    // 운동 기록 폼 제출
    recordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (selectedDate) {
            const type = document.getElementById('exercise-type').value;
            const reps = document.getElementById('exercise-reps').value;
            const weight = document.getElementById('exercise-weight').value;
            const sets = document.getElementById('exercise-sets').value;

            fetch('server/save_record.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date: selectedDate, type, reps, weight, sets })
            }).then(response => response.json())
              .then(data => {
                  alert('운동 기록 저장 완료!');
                  fetchDataForDate(selectedDate);
              });
        } else {
            alert('날짜를 선택해주세요.');
        }
    });
});
