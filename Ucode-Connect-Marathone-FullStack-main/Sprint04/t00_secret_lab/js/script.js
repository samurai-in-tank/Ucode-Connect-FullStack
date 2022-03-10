function transformation() {
    let new_lab = document.getElementById("lab");
    let new_hero = document.getElementById("hero");

    if (new_hero.innerText === "Bruce Banner") {
        new_hero.innerText = 'Hulk';
        new_lab.style.fontSize = '130px';
        new_lab.style.letterSpacing = '6px';
        new_lab.style.background = '#70964b';
        new_lab.style.transitionDuration = '1s';
        new_lab.style.transitionProperty = 'all';
        new_lab.style.transitionTimingFunction = 'ease-in-out';
        btn.style.outline = 'none';
    }
    else {
        new_hero.innerText = 'Bruce Banner';
        new_lab.style.fontSize = '60px';
        new_lab.style.letterSpacing = '2px';
        new_lab.style.background = '#ffb300';
    }
}
