document.addEventListener('DOMContentLoaded', () => {
    const loginButtons = document.querySelectorAll('.loginBtn');

    loginButtons.forEach((button) => {
        button.addEventListener('click', () => {
            loginButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

const loginForm = document.getElementById('loginForm');
const idInput = document.querySelector('.idInput');
const pwInput = document.querySelector('.pwInput');
const loginSubmitBtn = document.querySelector('.loginSubmitBtn');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');

function setErrorBorder(input) {
    input.style.border = '1px solid #EB5757';
    input.style.borderRadius = '5px';
}

function resetBorder(input) {
    input.style.border = '';
    input.style.borderRadius = '';
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('로그인 시도');

    // 모든 에러 메시지 및 테두리 초기화
    idErrorMessage.textContent = '';
    pwErrorMessage.textContent = '';
    resetBorder(idInput);
    resetBorder(pwInput);

    const isIdEmpty = idInput.value === '';
    const isPwEmpty = pwInput.value === '';

    if (isIdEmpty && isPwEmpty) {
        idErrorMessage.textContent = '아이디를 입력해 주세요.';
        idErrorMessage.setAttribute('style', 'display:block;');
        pwErrorMessage.textContent = '비밀번호를 입력해 주세요.';
        pwErrorMessage.setAttribute('style', 'display:block;');
        setErrorBorder(idInput);
        setErrorBorder(pwInput);
        console.log('아이디와 비밀번호 모두 비어있음');
    } else if (isIdEmpty) {
        idErrorMessage.textContent = '아이디를 입력해 주세요.';
        idErrorMessage.setAttribute('style', 'display:block;');
        setErrorBorder(idInput);
        console.log('아이디 오류 메시지 표시');
    } else if (isPwEmpty) {
        pwErrorMessage.textContent = '비밀번호를 입력해 주세요.';
        pwErrorMessage.setAttribute('style', 'display:block;');
        setErrorBorder(pwInput);
        console.log('비밀번호 오류 메시지 표시');
    } else if (idInput.value !== 'correctID' || pwInput.value !== 'correctPassword') {
        pwErrorMessage.textContent = '아이디 또는 비밀번호가 일치하지 않습니다';
        pwErrorMessage.setAttribute('style', 'display:block;');
        setErrorBorder(idInput);
        setErrorBorder(pwInput);
    } else {
        console.log('로그인 성공!');
        // 여기에 로그인 성공 후 처리 로직 추가
    }
});

// 입력 필드에 포커스가 갈 때 테두리 초기화
idInput.addEventListener('focus', () => resetBorder(idInput));
pwInput.addEventListener('focus', () => resetBorder(pwInput));
