let contentIndex = -1;

document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    // let arSystem;
    // sceneEl.addEventListener('loaded', function () {
    //     arSystem = sceneEl.systems["mindar-image-system"];
    // });

    for (let i = 0; i < 3; i++) {
        var videoEntity = document.getElementById("entity" + i.toString());

        videoEntity.addEventListener("targetLost", event => {
            console.log("lost");
            contentIndex = -1;
            var video = document.getElementById("video" + i.toString());
            video.muted = true;
            video.pause();
            video.currentTime = 0;
        });

        videoEntity.addEventListener("targetFound", event => {
            console.log(event);
            if (event.srcElement.id === "entity" + i.toString()) {
                console.log("video" + i.toString());
                contentIndex = i;
                var video = document.getElementById("video" + i.toString());
                console.log(video);
                video.muted = true;
                video.play();
            }
        });
    };

    window.addEventListener("click", () => {
        console.log("clicked", contentIndex);
        if (contentIndex > -1) {
            document.getElementById("video" + contentIndex.toString()).muted = !document.getElementById("video" + contentIndex.toString()).muted;
        }
    });
});
