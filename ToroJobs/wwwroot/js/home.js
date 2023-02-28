var slideIndex = 0;
var comments = [
    '«Якби мені потрібно було знайти роботу, я б скористався саме цим сервісом:)»',
    '«Я вже двічі знаходив роботу на ToroJobs і кожного разу все краще:) Так тримати!»',
    '«ToroJobs - це простий та зручний спосіб найняти розробників для вашого продукту на повний день.Я не можу перехвалити. Відмінний сервіс і 5 - зіркова підтримка».',
    '«Шукаю роботу тільки тут»',
    '«Приголомшливий сервіс, допоміг мені за тиждень знайти постійного замовника, з яким працюю вже майже 3 роки».'
];
var authors = [
    'Микита, full - stack розробник',
    'Назар Токар',
    'Єгор Зубарець',
    'Влад, Software Engineer',
    'Сергій Щербаченко, Frontend Developer'
];

window.onload = function () {
    var slogans = [" програмістів.", " тестувальників.", " DevOps.", " UX/UI дизайнерів.", " PM.", " всіх, хто працює в IT."];
    var subtitle = document.getElementById("subtitle");
    const baseSubtitle = subtitle.innerHTML;
    var index = 0;
    start(slogans, subtitle, index, baseSubtitle);

    showSlides();
};

async function start(slogans, subtitle, index, baseSubtitle) {
    subtitle.innerHTML = baseSubtitle;

    if (index >= slogans.length) {
        index = 0;
    }
    var counter = 0;
    for (var i = 0; i < slogans[index].length; i++) {
        await sleep(150);
        subtitle.innerHTML += slogans[index][i];
        counter += 1;
    }
    while (counter) {
        await sleep(150);
        subtitle.innerHTML = subtitle.innerHTML.slice(0, -1);
        counter -= 1;
    }
    index++;
    start(slogans, subtitle, index, baseSubtitle);
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}



async function showSlides() {
    var container = document.querySelector('.comment-slide');
    var author = document.querySelector('.text-author');
    var comment = document.querySelector('.text-comment');
    while (true) {
        container.classList.add("pre-animation");
        if (slideIndex >= comments.length) { slideIndex = 0 }
        await sleep(1500);
        container.classList.remove('pre-animation');

        author.innerHTML = authors[slideIndex];
        comment.innerHTML = comments[slideIndex];

        slideIndex++;
        await sleep(5500);
        container.classList.add('post-animation');
        await sleep(1500);
        container.classList.remove('post-animation');

    }
}