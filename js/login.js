// 클릭 시 loginBtn에 active 클래스를 부여할 것
// 전에 ative 클래스를 가지고 있던 아이는 클래스를 삭제할 것
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
