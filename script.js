let characterStats = {
    health : 20,
    name : ""
}

const scenes = {
    start: {
        text: "You wake up in a dark forest. What do you do?",
        image: "img-start.png",
        options: [
            { text: "Explore the forest", nextScene: "forest" },
            { text: "Go back to sleep", nextScene: "sleep" }
        ]
    },

    forest: {
        text: "The forest is eerie and quiet. You hear a noise behind you.",
        image: "img-forest.png",
        options: [
            { text: "Investigate the noise", nextScene: "noise" },
            { text: "Run away", nextScene: "run" }
        ]
    },

    sleep: {
        text: "You fall asleep and dream of a warm, cozy bed. The end.",
        image: "img-sleep.png",
        options: [] // No options, click to go forward
    },

    noise: {
        text: "You find a friendly squirrel who gives you a magical acorn. The end.",
        image: "img-noise.jpg",
        options: []
    },

    run: {
        text: "You run and stumble upon a hidden village. The end.",
        image: "img-run.jpg",
        options: []
    }
};

// Game logic
let currentScene = "start";

function renderScene(sceneKey) {
    const scene                 = scenes[sceneKey];
    const textElement           = document.getElementById("text");
    const optionsElement        = document.getElementById("options");
    const sceneImage            = document.getElementById("scene-image")

    textElement.textContent     = scene.text;
    optionsElement.innerHTML    = ""; // Clear previous options

       // Update the image source
    sceneImage.src = scene.image;


    if (scene.options.length === 0) {
        // No options, advance on click
        optionsElement.innerHTML = "<div class='option'>Click to continue</div>";
        optionsElement.firstChild.onclick = () => {
            currentScene = "start"; // Restart or set to another scene
            renderScene(currentScene);
        };
    } else {
        scene.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.text;
            button.className = "option";
            button.onclick = () => {
                currentScene = option.nextScene;
                renderScene(currentScene);
            };
            optionsElement.appendChild(button);
        });
    }
}

// Initialize the game
renderScene(currentScene);


const clamp = (num, min, max) => Math.min(Math.max(num, min), max)