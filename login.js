var id
var password
var loginId
var loginPassword
var plz

window.onload = function(){
    loginId = document.getElementById("id");
    loginPassword = document.getElementById("password");
    plz = document.getElementById("login_plz")
}

function onck(){
    id = loginId.value;
    password = loginPassword.value;
    if(id == "cat" && password == "1234"){
        alert("로그인에 성공하였습니다.");
        plz.innerHTML = "id 회원님 감사합니다."

    } else { 
        alert("로그인에 실패하였습니다.");
        plz.innerHTML = "로그인 실패";
    }

}


