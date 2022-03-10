function animale_hero() {
    let animal = prompt('What animal is the superhero most similar to?', '');

    if (animal.length > 20 || !RegExp('^[a-zA-Z]+$').test(animal)) {
        alert('ERROR: Enter letters of the Latin alphabet. Name length must not exceed 20 characters');
        animal = null;
    }
    else
        alert('Animal name is ' + animal);
    return animal;
}

function gender_hero() {
    let gender =  prompt('Is the superhero male or female? Leave blank if unknown or other.', '');

    if (!RegExp('^male$|^female$|^$', 'i').test(gender)) {
        alert('ERROR: Accepts only male or female gender!');
        gender = null;
    }
    else
        alert('Gender is ' + gender);
    return gender;
}

function age_hero() {
    let age = prompt('How old is the superhero?', '');

    if (age.length > 5 || !RegExp(/^[1-9]|[0-9]{0,4}$/).test(age)) {
        alert('ERROR: Accepts only digits. Cannot start with a 0. No more than 5 characters!');
        age = null;
    }
    else
        alert('Age is ' + age);
    return age;
}

function main_hero() {
    let description;
    let animal, gender, age;
    while(animal == null) {
        animal = animale_hero();
    }
    while(gender == null) {
        gender = gender_hero();
    }
    while(age == null) {
        age = age_hero();
    }
    if (RegExp('^male$', 'i').test(gender) && age < 18) {
        description = "boy";
    }
    else if (RegExp('^male$', 'i').test(gender) && age >= 18) {
        description = "man";
    }
    else if (RegExp('^female$', 'i').test(gender) && age < 18) {
        description = "girl";
    }
    else if (RegExp('^female$', 'i').test(gender) && age >= 18) {
        description = "woman";
    }
    else if (RegExp('^$').test(gender) && age < 18) {
        description = "kid";
    }
    else if (RegExp('^$').test(gender) && age >= 18) {
        description = "hero";
    }

    alert(animal + '-' + description);
}

main_hero();
