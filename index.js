let contentIndex = -1;
const contentInfo = [
    {
        "id": 0,
        "name": "vidMeteor",
        "src": "meteor_480p_crf16.mp4",
        "type": "video"
    },
    {
        "id": 1,
        "name": "vidWhiteButterFly",
        "src": "white_butterfly_480p_crf16.mp4",
        "type": "video",
    },
];

document.addEventListener("DOMContentLoaded", () => {


    const sceneEl = document.querySelector('a-scene');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems["mindar-image-system"];
    });
    const assetsDiv = document.getElementById("replaceMeWithAssets");
    let assetsEl = document.createElement("a-assets");
    contentInfo.forEach(content => {
        const newAsset = document.createElement("video");
        newAsset.setAttribute("id", content.name);
        newAsset.setAttribute("src", content.src);
        newAsset.setAttribute("loop", "true");
        newAsset.setAttribute("autoplay", "true");
        newAsset.setAttribute("muted", "");
        assetsEl.appendChild(newAsset);
    });
    assetsDiv.parentNode.replaceChild(assetsEl, assetsDiv);

    contentInfo.forEach(content => {
        let entity = document.getElementById("entity" + content.id.toString());
        entity.setAttribute("disabled", "false");
        let video = document.getElementById("video" + content.id.toString());
        video.setAttribute("src", "#" + content.name);
    });
    // add events
    contentInfo.forEach(content => {
        var videoEntity = document.getElementById("entity" + content.id.toString());

        videoEntity.addEventListener("targetLost", event => {
            contentIndex = -1;
            console.log("lost");
            const video = document.querySelector("#" + content.name);
            video.muted = true;
            video.pause();
            video.currentTime = 0;
        });

        videoEntity.addEventListener("targetFound", event => {
            if (event.srcElement.id === "entity" + content.id.toString()) {
                contentIndex = content.id;
                console.log("found");
                const video = document.querySelector("#" + content.name);
                video.play();
            }
        });

        // const vid = document.querySelector("#" + content.name);

        // vid.addEventListener("click", event => {
        //     console.log("click", "entity" + content.id.toString());
        //     if (event.srcElement.id === "entity" + content.id.toString()) {
        //         contentIndex = content.id;
        //         vid.muted = false;
        //         vid.play();
        //     }
        // });

        document.querySelector("#btnUnmute").addEventListener("click", (e) => {
            if (contentIndex > -1 && contentIndex === content.id) {
                console.log("muting ", contentIndex, document.querySelector("#" + content.name).muted);
                document.querySelector("#" + content.name).muted = !document.querySelector("#" + content.name).muted;
            }
        });
    });
});
