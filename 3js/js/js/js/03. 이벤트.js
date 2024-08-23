// 버튼을 눌렀을때 반가워요 라는 메세지 출력
// 이벤트 이름, 이벤트 발생시 실행할 함수
// 익명의 함수
// window.addEventListener('load', function(){});
// 이름있는 함수를 전달할땐 ()를 붙이면 안됨
// 파라메터가 있는 경우, 익명의 함수를 이용하여 코드작성

// 페이지가 모두 로딩된 후 실행
window.addEventListener('load', init);

function init() {
    btn1.addEventListener('click', function () {
        // 아이디가 입력되지 않은 경우
        if (true) {
            box1.innerHTML = '아이디를 입력해 주세요.';
        }
    });

    //고전 이벤트 모델 - 중복적용 x
    // 이벤트 객체 - 매개변수로 이벤트 객체를 받아올수 있음
    // 이벤트 객체 : 이벤트가 발생한 정보를 담고있는 객체

    btn2.onclick = function (e) {
        console.log(e);
        console.log(e.target);

    }




    // this : window
    btn2.onclick = (e) => {
        console.log('버튼2 클릭');
        console.log(e);
        console.log(e.target);
        console.log(this);
    }

    // this - 보통은 window 객체
    //              표준모델이벤트의 익명의 함수에서는 이벤트가 발생한 요소
    //              화살표 함수에서는 window 객체
    btn3.addEventListener('click', function (e) {
        console.log('표준이벤트모델 실행');
        console.log(e)
        console.log(e.target);
        console.log(this)
    });
    btn3.addEventListener('click', (e) => {
        console.log('표준이벤트모델 실행 ======== 화살표 함수');
        console.log(e)
        console.log(e.target);
        console.log(this)
    });

    btn4.addEventListener('click', (e) => {
        // userId1.value==''

        // 정규식을 이용한 패턴체크
        let regExp = /^[a-zA-Z0-9]{5,12}$/;

        alert(userId.value);
        alert(ergExp.test(userId.value));
        // 패턴검사
        if (!regExp.test(userId1.value)) {
            alert('아이디는 영어 대소문자와 숫자만 입력 가능합니다.\n길이는 5~12까지 입력 가능합니다.')
            // 기본이벤트를 제거하는 함수
            e.preventDefault();
        }

    })


}

function print(target) {
    console.log(target);
    console.log(target.innerText);
    target.style.display='none';
    console.log('print');
}

// 유효성 검사 후 반환값에 따라 폼을 전송할지 말지 결정
// submit이벤트를 실행할지 말지를 결정
// 반환값이 false이면 이벤트를 실행하지 않음
function fn_check_form() {
    if (userId == '') {
        alert('아이디를 입력해 주세요.');
        return false;
    }
    return true;
}