var id;
var password;
var passwordRe;
var name;
var email;
var date;
var sex; //네임테그
var tel; // 클레스 테그
var from;
var checkbox;
var loginId;
var loginPassword;
var loginPasswordRe;
var loginName;
var loginEmail;
var loginDate;
var loginSex;
var loginTel;
var loginFrom;
var loginCheckbox;



// html 정보 불러오기
window.onload = function () {
    loginId = document.getElementById("id");
    loginPassword = document.getElementById("password");
    loginPasswordRe = document.getElementById("password_re");
    loginName = document.getElementById("name");
    loginEmail = document.getElementById("email");
    loginDate = document.getElementById("date");
    loginSex = document.getElementsByName("sex");
    loginTel = document.getElementsByClassName("tel");
    loginFrom = document.getElementsByName("from");
    loginCheckbox = document.getElementsByName("checkbox");




}




function check(chak) {

    if (chak.length >= 4 && chak.length <= 12) {
        console.log(chak + "성공");
        return true;
    } else {
        console.log(chak + "실패");
        return false;
    }
}





// 버튼 누를시 동작
function join() {
    //html 에서 정보 불러오기
    for (var i = 0; i < loginSex.length; i++) {     // 성별 체크 하는거, radio의 경우에는 정보가 배열로 저장되기때문에 몇번째가 체크되어 있는지 확인해야함
        // 배열의 칸수도 글자수에 포함되기 때문에 배열 글자수를 최대치로 잡고 i를 증가시켜 확인한다
        if (loginSex[i].checked == true) { // 체크 되있는곳이 true, 안됀곳이 false 이기 때문에 if문을 사용하여 true 인 값을 저장해준다
            sex = loginSex[i].value;

        }
    }
    for (var a = 0; a < loginFrom.length; a++) {
        if (loginFrom[a].checked == true) {
            from = loginFrom[a].value;
        }
    }

    if (loginCheckbox[0].checked && loginCheckbox[1].checked  && loginCheckbox[2].checked && loginCheckbox[3].checked && loginCheckbox[4].checked ) {
        checkbox = true;
    } else {
        checkbox = false;
    }




    id = loginId.value;
    password = loginPassword.value;
    passwordRe = loginPasswordRe.value;
    name = loginName.value;
    email = loginEmail.value;
    date = loginDate.value;
    tex = loginTel.value;


    //글자수 비교
    check(id);
    check(password);
    check(passwordRe);
    check(email);


    console.log(sex);
    console.log(from);
    console.log(date)
    console.log(checkbox);

    if(checkbox && check(id) && check(password) && check(passwordRe)&&check(email) && password == passwordRe){
        console.log("로그인 성공");
    } else {
        console.log("로그인 실패");
    }


}