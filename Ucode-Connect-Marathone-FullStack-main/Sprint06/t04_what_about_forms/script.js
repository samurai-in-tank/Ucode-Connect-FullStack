function onClick() {
    const input = document.querySelectorAll("input"),
        div = document.querySelector(".reply");
        for (let i = 0; i < 3; i++) {
        if (input[i].checked) {
            if (input[i].classList.contains("coffee")) {
                div.innerText = ` Твой выбор пал на настоящих мужчин? Включай гачи и время смотреть ДЖО ДЖОООООООО`;
            }
            else if (input[i].classList.contains("tea")) {
                div.innerText = ` Романтик проснулся и вошел в залу, ну что ж... Время для трогательных историй`;
            }
            else if (input[i].classList.contains("water")) {
                div.innerText = ` Гы-гы-гы-гы, а это вообще отпаааааад, как раз наночь :)`;
            } 
        }
    }
}
