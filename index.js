let contentIndex = 0;
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
    AFRAME.registerComponent('cursor-listener', {
        init: function () {
            contentInfo.forEach(content => {
                var videoEntity = document.getElementById("entity" + content.id.toString());
                var video = document.getElementById("video" + content.id.toString());

                this.el.addEventListener('click', function () {
                    if (!video.isPlaying) { 
                        video.play(); 
                    } else {
                        video.stop();
                    }
                    videoEntity.setAttribute('visible', 'true');
                });
            });
        }
    });

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
        assetsEl.appendChild(newAsset);
    });
    assetsDiv.parentNode.replaceChild(assetsEl, assetsDiv);

    contentInfo.forEach(content => {
        let entity = document.getElementById("entity" + content.id.toString());
        entity.setAttribute("disabled", "false");
        let video = document.getElementById("video" + content.id.toString());
        video.setAttribute("src", "#" + content.name);
        video.addEventListener("click", event => {
            console.log(event);
            video.play();
        })
    });
});
