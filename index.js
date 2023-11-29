let contentIndex = -1;
const contentInfo = [
    {
        "id": 0,
        "name": "solir",
        "src": "./videos/vid_solir_01.mp4",
        "type": "video"
    },
    {
        "id": 1,
        "name": "tsagaanErveehei",
        "src": "./videos/vid_tsagaan_erveehei_02.mp4",
        "type": "video",
    },
    {
        "id": 2,
        "name": "gadaadErveehei",
        "src": "./videos/vid_gadaad_erveehei_03.mp4",
        "type": "video",
    },
    {
        "id": 3,
        "name": "shuteenTsoh",
        "src": "./videos/vid_shuteen_tsoh_04.mp4",
        "type": "video",
    },
    {
        "id": 4,
        "name": "vansemberuu",
        "src": "./videos/vid_vansemberuu_05.mp4",
        "type": "video"
    },
    {
        "id": 5,
        "name": "bulboo",
        "src": "./videos/vid_bulboo_06.mp4",
        "type": "video",
    },
    {
        "id": 6,
        "name": "daguurNomin",
        "src": "./videos/vid_daguur_nomin_07.mp4",
        "type": "video",
    },
    {
        "id": 7,
        "name": "kheeriinGaluu",
        "src": "./videos/vid_kheeriin_galuu_08.mp4",
        "type": "video",
    },
    {
        "id": 8,
        "name": "numrugtTas",
        "src": "./videos/vid_numrugt_tas_09.mp4",
        "type": "video"
    },
    {
        "id": 9,
        "name": "tsookhorIrves",
        "src": "./videos/vid_tsookhor_irves_10.mp4",
        "type": "video",
    },
    {
        "id": 10,
        "name": "daguurZaraa",
        "src": "./videos/vid_daguur_zaraa_11.mp4",
        "type": "video",
    },
    {
        "id": 11,
        "name": "argali",
        "src": "./videos/vid_argali_12.mp4",
        "type": "video",
    },
    {
        "id": 12,
        "name": "bambaiKhoshuutMogoi",
        "src": "./videos/vid_b_h_mogoi_13.mp4",
        "type": "video"
    },
    {
        "id": 13,
        "name": "gurvel",
        "src": "./videos/vid_gurvel_14.mp4",
        "type": "video",
    },
    {
        "id": 14,
        "name": "bakh",
        "src": "./videos/vid_bakh_15.mp4",
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
