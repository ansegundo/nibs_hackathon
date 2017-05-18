function userView(profile_bg = "res/profile-bg.jpg", bgColor = "white", profile_avatar = "res/logo.svg", profile_name = "Stack Overflow", profile_email = "esquece@essa.merda.ai") {
    let user = document.querySelector(".userView");
    user.innerHTML = `
    <div class="background">
        <img src="${profile_bg}">
    </div>
    <a href="#!user"><img class="circle" src="${profile_avatar}"></a>
    <a href="#!name"><span class="${bgColor}-text name">${profile_name}</span></a>
    <a href="#!email"><span class="${bgColor}-text email">${profile_email}</span></a>
    `;
    return true;
}