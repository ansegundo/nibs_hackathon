function userView(profile_avatar = "res/logo.svg", profile_name = "Stack Overflow", profile_email = "esquece@essa.merda.ai") {
    let user = document.querySelector(".userView");
    user.innerHTML = `
    <div class="background default-primary-color"></div>
    <a href="#!user"><img class="circle" src="${profile_avatar}"></a>
    <a href="#!name"><span class="white-text name">${profile_name}</span></a>
    <a href="#!email"><span class="white-text email">${profile_email}</span></a>
    `;
    return true;
}