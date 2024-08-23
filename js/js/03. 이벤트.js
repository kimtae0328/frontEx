// 버튼을 클릭했을때 반가워요~!라는 메세지를 출력 하세요!
// 이벤트이름, 이벤트 발생시 실행할 함수
// 익명의함수
// window.addEventListener('load', function(){});
// 이름있는함수를 전달 할때는 ()를 붙이면 안된다!!!!
// 파라메터가 있는 경우, 익명의 함수를 이용하여 코드를 작성

// 페이지가 모두 로딩된후 실행
window.addEventListener('load', init);

function init(){
    btn1.addEventListener('click', function(){
        // id가 입력되지 않은 경우
        if(true){
            box1.innerHTML='아이디를 입력해주세요';
        }
    });
}