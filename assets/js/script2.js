const nameTextarea = document.querySelector("#name");
const email = document.querySelector("#email");
const messageTextarea = document.querySelector("#write-requests");
const confirm = document.querySelector(".submit");
const number = document.querySelector("#number");
const labelName = document.querySelector(".label-name");
const labelEmail = document.querySelector(".label-email");
const labelMessageTextarea = document.querySelector(".label-name");
const labelNumber = document.querySelector(".label-number");
const writeRequests = document.querySelector(".write-requests");
const select = document.querySelector("select");
const option = document.querySelector(".selec");
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('.nav-items');
const burgerMenu = document.querySelector('.fa-bars');
const croix = document.querySelector('#close');
const container = document.querySelector(".container3")
const notif = document.querySelector(".notif")
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function emailError() {
    if (email.value === "") {
        email.style.borderColor = "red"
        labelEmail.style.color = "red"
        return true
    }
    else {
        email.style.borderColor = "#4EE1A0";
        labelEmail.style.color = "#4EE1A0";
        return false
    }
}
function emailPattern() {
    if (pattern.test(email.value)) {
        email.style.borderColor = "#4EE1A0";
        labelEmail.style.color = "#4EE1A0";
        return false
    }
    else {
        email.style.borderColor = "red";
        labelEmail.style.color = "red";
        return true
    }
}
function specialRequestsError() {
    if (messageTextarea.value === "") {
        messageTextarea.style.borderColor = "red";
        writeRequests.style.color = "red";
        return true
    }
    else {
        messageTextarea.style.borderColor = "#4EE1A0";
        writeRequests.style.color = "#4EE1A0";
        return false
    }
}
function numberError () {
    if (number.value === "") {
        number.style.borderColor = "red";
        labelNumber.style.color = "red";
        return true
    }
    else {
        number.style.borderColor = "#4EE1A0";
        labelNumber.style.color = "#4EE1A0";
        return false
    }
}
function nameError() {
    if (nameTextarea.value === "") {
        nameTextarea.style.borderColor = "red";
        labelName.style.color = "red";
        return true;
    }
    else {
        nameTextarea.style.borderColor = "#4EE1A0";
        labelName.style.color = "#4EE1A0";
        return false;
    }
}
confirm.addEventListener("click", function (e) {
    e.preventDefault();
    let emailHasError = emailError();
    let specialRequestsHasError = specialRequestsError();
    let numberHasError = numberError();
    let nameHasError = nameError();
    let emailHasPattern = emailPattern();

    if (emailHasError === false && specialRequestsHasError === false && numberHasError === false && nameHasError === false && emailHasPattern === false) {
        let userEmail = email.value;
        window.location.href = "mailto:" + userEmail;
    }
    
    if (emailHasError === false && specialRequestsHasError === false && numberHasError === false && nameHasError === false && emailHasPattern === false) {
      notif.style.display = "flex";
      notif.style.flexDirection = "column";
      notif.style.justifyContent = "center";
      notif.style.alignItems = "center";
      notif.style.height = "500px";
    }
});

burgerMenu.addEventListener('click', function() {
        nav.style.position = "fixed";
        nav.style.transition = "0.3s ease";
        nav.style.height = "290px";
        ul.style.marginTop = "50px";
        for (let i = 0; i < li.length; i++) {
            li[i].style.position = "relative";
            li[i].style.top = "5px";
            li[i].style.display = "block";
        }
        li[5].style.right = "7px";
        main.style.opacity = "0.2";
        burgerMenu.style.display = "none";
        burgerMenu.style.cursor = "pointer";
        croix.style.display = "block";
        croix.style.position = "relative";
        croix.style.bottom = "25px";
})
croix.addEventListener('click', function() {
        nav.style.position = "initial";
        nav.style.height = "100px";
        ul.style.marginTop = "0px";
        li.forEach(item => {
            item.style.position = "relative";
            item.style.top = "0px";
            item.style.display = "none";
            item.style.right = "0";
        });
        main.style.marginTop = "20px";
        main.style.opacity = "1";
        burgerMenu.style.marginTop = "20px";
        burgerMenu.style.display = "block";
        croix.style.cursor = "pointer";
        croix.style.display = "none";
    }
);
