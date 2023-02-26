window.onload = function () {
    var slogans = [" програмістів.", " тестувальників.", " DevOps.", " UX/UI дизайнерів.", " PM.", " всіх, хто працює в IT."];
    var subtitle = document.getElementById("subtitle");
    const baseSubtitle = subtitle.innerHTML;
    subtitle.style.transition = "all 2s";
    var index = 0;
    start(slogans, subtitle, index, baseSubtitle);
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