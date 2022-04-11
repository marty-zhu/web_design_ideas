const anchorBoxes = document.querySelectorAll('input.feature-focus-box');

// console.log(anchorBoxes);

function addPromptText(nodeList) {
    for (let elem of nodeList) {
        let promptFrom = elem.dataset.prompt;
        let promptText = document.querySelector(`label#${elem.id}-text`);

        elem.addEventListener('mouseover', () => {
            promptText.classList.add(`slide-in-from-${promptFrom}`);
        });

        elem.addEventListener('mouseout', () => {
            promptText.classList.remove(`slide-in-from-${promptFrom}`);
        });
    };
};

addPromptText(anchorBoxes);
