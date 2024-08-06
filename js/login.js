// DOM (Document Object Model): 웹 페이지의 구조화된 표현, HTML 요소들을 객체로 표현한 것
// DOMContentLoaded: HTML 문서가 완전히 로드되고 파싱되었을 때 발생하는 이벤트
document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소 선택 및 변수 할당
    // getElementById: 특정 ID를 가진 요소를 선택하는 메서드
    const loginForm = document.getElementById('loginForm');
    // querySelector: CSS 선택자로 요소를 선택하는 메서드
    const idInput = document.querySelector('.idInput');
    const pwInput = document.querySelector('.pwInput');
    const errorMessages = {
        // 객체 리터럴: 키-값 쌍으로 구성된 데이터 구조
        id: document.querySelector('.idErrorMessage'),
        pw: document.querySelector('.pwErrorMessage'),
    };
    // let: 재할당 가능한 변수 선언 키워드
    let loginType = 'BUYER';

    // querySelectorAll: 조건에 맞는 모든 요소를 NodeList로 반환하는 메서드
    const loginButtons = document.querySelectorAll('.loginBtn');

    // forEach: 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드
    loginButtons.forEach((btn) => {
        // addEventListener: 요소에 이벤트 리스너를 추가하는 메서드
        btn.addEventListener('click', () => {
            // classList: 요소의 클래스 목록에 접근하고 조작하는 속성
            loginButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            // 삼항 연산자: 조건 ? 참일 때 값 : 거짓일 때 값
            loginType = btn.classList.contains('buyer') ? 'BUYER' : 'SELLER';
        });
    });

    // 함수 선언: 재사용 가능한 코드 블록을 정의
    function showError(field, message) {
        // textContent: 노드의 텍스트 내용을 설정하거나 반환하는 속성
        errorMessages[field].textContent = message;
        // style: 요소의 인라인 스타일에 접근하는 속성
        errorMessages[field].style.display = 'block';
        // 템플릿 리터럴: 문자열 내에 표현식을 포함할 수 있는 문자열 리터럴
        document.querySelector(`.${field}Input`).style.border = '1px solid #EB5757';
    }

    function redirectToDashboard() {
        // window.location: 현재 문서의 URL 정보를 담고 있는 객체
        const dashboardUrl = loginType === 'BUYER' ? 'index.html' : 'seller-dashboard.html';
        window.location.href = dashboardUrl;
    }

    // submit 이벤트: 폼이 제출될 때 발생하는 이벤트
    loginForm.addEventListener('submit', async (e) => {
        // preventDefault: 이벤트의 기본 동작을 취소하는 메서드
        e.preventDefault();
        // Object.values: 객체의 모든 값을 배열로 반환하는 메서드
        Object.values(errorMessages).forEach((msg) => (msg.style.display = 'none'));
        [idInput, pwInput].forEach((input) => (input.style.border = ''));

        if (!idInput.value) {
            showError('id', '아이디를 입력해 주세요.');
            return;
        }
        if (!pwInput.value) {
            showError('pw', '비밀번호를 입력해 주세요.');
            return;
        }

        // try-catch: 예외 처리를 위한 구문
        try {
            // fetch: 네트워크 요청을 보내고 응답을 받아오는 API
            // async/await: 비동기 작업을 동기적으로 표현하는 문법
            const response = await fetch('https://openmarket.weniv.co.kr/accounts/login/', {
                method: 'POST',
                // headers: HTTP 요청 헤더를 설정하는 객체
                headers: { 'Content-Type': 'application/json' },
                // JSON.stringify: JavaScript 객체를 JSON 문자열로 변환하는 메서드
                body: JSON.stringify({
                    username: idInput.value,
                    password: pwInput.value,
                    login_type: loginType,
                }),
            });

            // response.json(): 응답 본문을 JSON으로 파싱하는 메서드
            const data = await response.json();

            // response.ok: 응답의 상태 코드가 200-299 범위인지 확인하는 속성
            if (response.ok) {
                console.log('로그인 성공!');
                // localStorage: 브라우저에 데이터를 저장하는 웹 스토리지 API
                localStorage.setItem('token', data.token);
                localStorage.setItem('user_type', loginType);
                redirectToDashboard();
            } else {
                // ||: 논리 OR 연산자
                showError('pw', data.message || '아이디 또는 비밀번호가 일치하지 않습니다');
                idInput.style.border = '1px solid #EB5757';
                pwInput.style.border = '1px solid #EB5757';
            }
        } catch (error) {
            // console.error: 콘솔에 에러 메시지를 출력하는 메서드
            console.error('Error:', error);
            showError('pw', '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
        }
    });

    // focus 이벤트: 요소가 포커스를 받았을 때 발생하는 이벤트
    [idInput, pwInput].forEach((input) => input.addEventListener('focus', () => (input.style.border = '')));
});
