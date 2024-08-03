// 구매회원 로그인, 판매회원 로그인을 클릭할 경우
document.addEventListener('DOMContentLoaded', () => {
    const loginButtons = document.querySelectorAll('.loginBtn');

    loginButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // 모든 버튼에서 active 클래스 제거
            loginButtons.forEach((btn) => btn.classList.remove('active'));

            // 클릭한 버튼에 active 클래스 추가
            button.classList.add('active');
        });
    });
});

// 입력란 모두 공란이거나, 비밀번호만 입력했을 경우
// : 아이디를 입력해 주세요 (idInput 밑에 생성)
// 아이디만 입력했을 경우
// : 비밀번호를 입력해 주세요 (pwInput 밑에 생성)
// 아이디, 비밀번호가 일치하지 않을 경우
// : 아이디 또는 비밀번호가 일치하지 않습니다 (pwInput 밑에 생성)

const loginForm = document.getElementById('loginForm');
const idInput = document.querySelector('.idInput');
const pwInput = document.querySelector('.pwInput');
const loginSubmitBtn = document.querySelector('.loginSubmitBtn');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');

loginForm.addEventListener('submit', (e) => {
    console.log('로그인 됨?');
    e.preventDefault();

    // 모든 에러 메시지 초기화
    idErrorMessage.textContent = '';
    idErrorMessage.hidden = true;
    pwErrorMessage.textContent = '';
    pwErrorMessage.hidden = true;

    if (idInput.value === '') {
        idErrorMessage.textContent = '아이디를 입력해 주세요.';
        idErrorMessage.setAttribute('style', 'display:block;');
        console.log('아이디 메시지 뜸?');
    } else if (pwInput.value === '') {
        pwErrorMessage.textContent = '비밀번호를 입력해 주세요.';
        pwErrorMessage.setAttribute('style', 'display:block;');
        console.log('비밀번호 메시지 뜸?');
    } else if (idInput.value !== 'correctID' || pwInput.value !== 'correctPassword') {
        pwErrorMessage.textContent = '아이디 또는 비밀번호가 일치하지 않습니다';
        pwErrorMessage.setAttribute('style', 'display:block;');
    } else {
        console.log('로그인 성공!');
        // 여기에 로그인 성공 후 처리 로직 추가
    }
});
