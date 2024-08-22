/*// 화면이 로드된 이후 함수를 실행
window.onload = function(){
    //alert('잘 연결되었니?');
    let b = document.querySelector("#btn");
    alert(b);
    // 선억적 함수 호출 = 함수의 이름을 불러서 호출
    // 함수 이름 뒤에 ()를 붙이면 바로 실행되어지고 끝나버림
    btn.addEventListener('click', fn_btn1_click);
    // 익명의 함수 = 이름이 없는 함수
    // 재사용이 불가능
    btn1.addEventListener('click', function(){
        console.log('버튼1이 클릭 되었습니다.');
    });
}
*/
window.addEventListener('load', function(){
    this.alert('화면 로딩 완료');
});
// 선언적 함수 = 이름이 있는 함수
// onload 이벤트 밖에다 작성 하세요!!!!!!!
function fn_btn1_click(){
    console.log('버튼이 클릭 되었습니다.');
}
