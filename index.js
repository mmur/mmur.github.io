let contentIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    // let arSystem;
    // sceneEl.addEventListener('loaded', function () {
    //     arSystem = sceneEl.systems["mindar-image-system"];
    // });

    var eBakh = document.getElementById("entity1");
    var vBakh = document.querySelector("#bakh");
    eBakh.addEventListener("targetFound", event => {
        console.log("found");
        contentIndex = 1;
        console.log(bakh);
        vBakh.play();
    });

    eBakh.addEventListener("targetLost", event => {
        console.log("lost");
        contentIndex = -1;
        vBakh.muted = true;
        vBakh.pause();
        vBakh.currentTime = 0;
    });

    var eMogoi = document.getElementById("entity0");
    var vMogoi = document.querySelector("#bambaiKhoshuutMogoi");
    eMogoi.addEventListener("targetFound", event => {
        console.log("found");
        contentIndex = 0;
        console.log(bakh);
        vMogoi.play();
    });

    eMogoi.addEventListener("targetLost", event => {
        console.log("lost");
        contentIndex = -1;
        vMogoi.muted = true;
        vMogoi.pause();
        vMogoi.currentTime = 0;
    });

    var eGurvel = document.getElementById("entity2");
    var vGurvel = document.querySelector("#gurvel");
    eGurvel.addEventListener("targetFound", event => {
        console.log("found");
        contentIndex = 2;
        console.log(bakh);
        vGurvel.play();
    });

    eGurvel.addEventListener("targetLost", event => {
        console.log("lost");
        contentIndex = -1;
        vGurvel.muted = true;
        vGurvel.pause();
        vGurvel.currentTime = 0;
    });

    window.addEventListener("click", () => {
        console.log("click");
        if (contentIndex > -1) {
            switch(contentIndex) {
                case 0:
                    document.querySelector("#bambaiKhoshuutMogoi").muted = !document.querySelector("#bambaiKhoshuutMogoi").muted;
                    break;
                case 1:
                    document.querySelector("#bakh").muted = !document.querySelector("#bakh").muted;
                    break;
                case 2:
                    document.querySelector("#gurvel").muted = !document.querySelector("#gurvel").muted;
                    break;
            }
        }
    });

    console.log(document.querySelector('a-assets').fileLoader);
});
