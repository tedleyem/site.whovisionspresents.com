var app = document.getElementById('app');

var appriter = new Typewriter(typew, {
    loop: true
});

typewriter.typeString('We capture memories')
    .pauseFor(2500)
    .deleteAll()
    .typeString('We capture beauty')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('We capture culture')
    .pauseFor(2500)
    .start();
