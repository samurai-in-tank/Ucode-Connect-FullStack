let movies = ['SteinGate', 'Bog_bomg', 'day_91'];
let current = 'SteinGate';

let element = document.getElementsByClassName("element");
let title = document.getElementById("title");
let info = document.getElementById("info");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let description = document.getElementById("description");
let image = document.getElementById("imageSource");

function SteinGate() {
    if(current == "SteinGate")
        return;
    else {
        current = "SteinGate";
        update();
    }
}
function Bog_bomg() {
    if(current == "Bog_bomg")
        return;
    else {
        current = "Bog_bomg";
        update();
    }
}
function day_91() {
    if(current == "day_91")
        return;
    else {
        current = "day_91";
        update();
    }
}

function update() {
    if(current === movies[0]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        title.innerText = "Врата Штейна"
        info.innerHTML = "PG &nbsp;&nbsp;&#124&nbsp;&nbsp; 24 серии &nbsp;&nbsp;&#124&nbsp;&nbsp; Научная фантастика &nbsp;&nbsp;&#124&nbsp;&nbsp; 2011 г.";
        actor1.innerText = "Коммедия";
        actor2.innerText = "Драмма";
        actor3.innerText = "Триллер";
        actor4.innerText = "Путешествие во времени";
        actor5.innerText = "Сэйнэн";
        description.innerText = "Время - это не игрушка. И это правило касается как детей, так и взрослых. Японский студент Окабе Ринтаро, сторонник теорий заговоров и любитель газировки, не сразу понимает, что натворил, когда открывает способ перемещения сознания во времени. Попав в замкнутую череду событий Врат Штейна, он пытается выбраться из временной петли и спасти дорогих ему людей.";
        crossfade("assets/images/1.jpg");
    }
    else if(current === movies[1]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        title.innerText = "Бездомный Бог"
        info.innerHTML = "PG &nbsp;&nbsp;&#124&nbsp;&nbsp; 24 серии &nbsp;&nbsp;&#124&nbsp;&nbsp; Фантастика &nbsp;&nbsp;&#124&nbsp;&nbsp; 2014 г.";
        actor1.innerText = "Приключения";
        actor2.innerText = "Экшен";
        actor3.innerText = "Сверхъестественное";
        actor5.innerText = "Драмма";
        description.innerText = "Бродячего бога Ято можно считать самым никудышным божеством, ведь у него даже нет своего святилища... Но у него есть свой коварный план, как сделать так, чтобы все люди стали ему поклоняться. Для этого он на различных стенах пишет объявление, о том что всего за 5 йен может решить любые проблемы и свой номер телефона. Однажды Ято искал пропавшего кота и переходя дорогу не заметил автобус, но зато его заметила школьница Хиёри, девушка спасла парня, а сама попала в больницу. Вскоре выясняется, что она стала наполовину призраком и душа ее иногда покидает тело. Ребята начинают работать вместе уничтожая призраков, которые приносят людям вред.";
        crossfade("assets/images/2.jpg")
    }
    else if(current === movies[2]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        title.innerText = "91 День!"
        info.innerHTML = "PG &nbsp;&nbsp;&#124&nbsp;&nbsp; 12 сериq &nbsp;&nbsp;&#124&nbsp;&nbsp; Криминал &nbsp;&nbsp;&#124&nbsp;&nbsp; 2016 г.";
        actor1.innerText = "Исторический";
        actor2.innerText = "Экшен";
        actor3.innerText = "Мафия";
        actor4.innerText = "Преступность";
        actor5.innerText = "Драмма";
        description.innerText = "В центре этих событий юный Анджело Лагуса, трагически потерявший своих родных в ходе междоусобиц внутри мафии. Ему удается скрыться от убийц и покинуть город. Но спустя годы, Анджело, потерявший всякий смысл жить, получает письмо от неизвестного отправителя, в которое были вписаны имена людей, причастных к гибели его семьи. Теперь, Анджело, движимый жаждой мести отправляется в родной Лорэл с единственной целью - отплатить тем, кто забрал жизни членов его семьи...";
        crossfade("assets/images/3.png");
    }
}

function crossfade(name) {
    setTimeout(() => image.classList.add("crossfade"), 200);
    setTimeout(() => image.src = name, 250);
    setTimeout(() => image.classList.remove("crossfade"), 300);
}
