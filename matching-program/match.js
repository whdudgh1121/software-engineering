// 성함, 운동 횟수(일주일), 경력(초보,중수,고수), 연락처 입력, (속도(거북이, 토끼))
// 입력했을 때 try, catch 넣는거 고려(성함 영어면 오류 출력, 번호 11자리 아니면 오류 출력)
// 입력 누르면 정보를 객체에 담기, 그리고 왼쪽에 출력, (입력칸 안 정보 사라짐, 입력 버튼 비활성화)
// 매칭 시작 버튼 -> 오른쪽 화면에 비슷한 정보의 이용자 정보 출력
// 9명 정도의 운동 이용자 정보 객체에 담아놓기
// 매칭 방법: 경력 같은 사람 -> 운동 횟수 같은 사람(filter 이용)
// 매칭 완성시 매칭 성공!! 문구 출력
//(부가) 리셋버튼-> 누르면 정보 초기화, 출력됬던 정보들 초기화

//파트너 정보들(성함, 연락처, frequency, history)
// 김연아, 010-1009-XXXX, rarely, beginner
// 김종국, 010-5723-XXXX, rarely, intermediate
// 이상화, 010-4254-XXXX, rarely, advanced
// 박재범, 010-7588-XXXX, normal, beginner
// 김춘리, 010-2215-XXXX, normal, intermediate
// 박태환, 010-9277-XXXX, normal, advanced
// 송아름, 010-5001-XXXX, frequent, beginner
// 윤성빈, 010-1623-XXXX, frequent, intermediate
 

// 추성훈, 010-1789-XXXX, frequent, advanced

const frequency1 = document.querySelector('#rarely');
const frequency2 = document.querySelector('#normal');
const frequency3 = document.querySelector('#frequent');
const history1 = document.querySelector('#beginner');
const history2 = document.querySelector('#intermediate');
const history3 = document.querySelector('#advanced');



let nameInput = document.getElementById("name-input");
let contactInput = document.getElementById("contact-input");

let userInfo;
let partnerInfoList=[]


getFrequencyCheckboxId=()=>{
    let frequencyResult = '';
	if(frequency1.checked == true) {
        frequencyResult = frequency1.id;
    } else if(frequency2.checked == true) {
        frequencyResult = frequency2.id;
    } else if(frequency3.checked == true) {
        frequencyResult = frequency3.id;
    } else{

    }
    return frequencyResult;
};

getFrequencyCheckboxValue1=()=>{
	if(frequency1.checked == true) {
        frequency2.checked = false;
        frequency3.checked = false;
    }
    console.log(userInfo)
}

getFrequencyCheckboxValue2=()=>{
    if(frequency2.checked == true) {
        frequency1.checked = false;
        frequency3.checked = false;
    }
}

getFrequencyCheckboxValue3=()=>{
    if(frequency3.checked == true) {
        frequency1.checked = false;
        frequency2.checked = false;
    }
}

getHistoryCheckboxId=()=>{
    let historyResult = '';
	if(history1.checked == true) {
        historyResult = history1.id;
    } else if(history2.checked == true) {
        historyResult = history2.id;
    } else if(history3.checked == true) {
        historyResult = history3.id;
    } else{

    }
    return historyResult;
}

getHistoryCheckboxValue1=()=>{
	if(history1.checked == true) {
        history2.checked = false;
        history3.checked = false;
    }
}

getHistoryCheckboxValue2=()=>{
    if(history2.checked == true) {
        history1.checked = false;
        history3.checked = false;
    }
}

getHistoryCheckboxValue3=()=>{
    if(history3.checked == true) {
        history1.checked = false;
        history2.checked = false;
    }
}



renderUser=(userInfo)=>{
    userHTML = '';
    userHTML += 
    `<img src="images/user.png" class="person-image" alt="user" id="user"/>
    <div>${userInfo.userName}</div>
    <div>${userInfo.userContact}</div>
    <div>${userInfo.userFrequency}</div>
    <div>${userInfo.userHistory}</div>`
    document.getElementById("my-info").innerHTML = userHTML;
}

submit=()=>{
    userInfo = {        
        userName: nameInput.value,
        userContact: contactInput.value,
        userFrequency: getFrequencyCheckboxId(),
        userHistory: getHistoryCheckboxId(),
    }
    renderUser(userInfo);
}

makePartnerData = (name,gender,contact,frequency, history) => {
    let partnerInfo= {
        partnerName: name,
        partnerGender: gender,
        partnerContact: contact,
        partnerFrequency: frequency,
        partnerHistory: history,
    }
    partnerInfoList.push(partnerInfo);
} 

makePartnerList = () => {
    makePartnerData("김연아", "Female", "010-1009-XXXX", "rarely", "beginner");
    makePartnerData("김종국", "Male", "010-5723-XXXX", "rarely", "intermediate");
    makePartnerData("이상화", "Female", "010-4254-XXXX", "rarely", "advanced");
    makePartnerData("박재범", "Male", "010-7588-XXXX", "normal", "beginner");
    makePartnerData("김춘리", "Female", "010-2215-XXXX", "normal", "intermediate");
    makePartnerData("박태환", "Male", "010-9277-XXXX", "normal", "advanced");
    makePartnerData("송아름", "Female", "010-5001-XXXX", "frequent", "beginner");
    makePartnerData("윤성빈", "Male", "010-1623-XXXX", "frequent", "intermediate");
}

matchPartner = () => {
    makePartnerList();
    console.log("userInfo", userInfo) //유저 정보가 안 불러와짐(저장이 안됨)
    let matchedPartnerList = partnerInfoList.filter((partner)=>{
        matches = (partner.partnerFrequency == userInfo.userFrequency && partner.partnerHistory == userInfo.userHistory)
        return matches;
    })
    matchedPartner=matchedPartnerList[0];
    console.log(matchedPartner);
    //try-catch여기에 입력하기
    renderPartner();
}

renderPartner =  () => {
    const partnerHTML =
    `<img src="images/partner${matchedPartner.partnerGender}.png" class="person-image" alt="partner" id="partner"/>
    <div>${matchedPartner.partnerName}</div>
    <div>${matchedPartner.partnerContact}</div>
    <div>${matchedPartner.partnerFrequency}</div>
    <div>${matchedPartner.partnerHistory}</div>`
    document.getElementById("partner-info").innerHTML = partnerHTML;
}


// 김연아, "010-1009-XXXX", rarely, beginner
// 김종국, "010-5723-XXXX", rarely, intermediate
// 이상화, "010-4254-XXXX", rarely, advanced
// 박재범, "010-7588-XXXX", normal, beginner
// 김춘리, "010-2215-XXXX", normal, intermediate
// 박태환, "010-9277-XXXX", normal, advanced
// 송아름, "010-5001-XXXX", frequent, beginner
// 윤성빈, "010-1623-XXXX", frequent, intermediate

