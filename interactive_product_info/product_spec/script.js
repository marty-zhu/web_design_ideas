const anchorBoxes = document.querySelectorAll('input.feature-focus-box');

// console.log(anchorBoxes);

function addPromptText(nodeList) {
    for (let elem of nodeList) {
        let promptText = document.querySelector(`label#${elem.id}-text`);
        let promptFrom = promptText.dataset.prompt;

        elem.addEventListener('mouseover', () => {
            promptText.classList.add(`slide-in-from-${promptFrom}`);
        });

        elem.addEventListener('mouseout', () => {
            promptText.classList.remove(`slide-in-from-${promptFrom}`);
        });
    };
};

addPromptText(anchorBoxes)
