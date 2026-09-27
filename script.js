const STORAGE_KEY = "qa-automation-roadmap";


const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]'
);


function loadProgress() {

    const savedProgress =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


    checkboxes.forEach((checkbox) => {

        checkbox.checked =
            savedProgress[checkbox.dataset.task] || false;

    });
}


function saveProgress() {

    const progress = {};


    checkboxes.forEach((checkbox) => {

        progress[checkbox.dataset.task] =
            checkbox.checked;

    });


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}


function calculateProgress() {

    const total = checkboxes.length;

    const completed =
        [...checkboxes].filter(
            checkbox => checkbox.checked
        ).length;


    const percentage =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);


    document.getElementById(
        "overallProgress"
    ).textContent = `${percentage}%`;


    document.getElementById(
        "overallProgressBar"
    ).style.width = `${percentage}%`;


    document.getElementById(
        "phase1Progress"
    ).textContent = `${percentage}%`;
}


function updateTopicStatus(topic) {

    const topicCheckboxes =
        topic.querySelectorAll(
            'input[type="checkbox"]'
        );


    const completed =
        [...topicCheckboxes].filter(
            checkbox => checkbox.checked
        ).length;


    const total = topicCheckboxes.length;


    const status =
        topic.querySelector(".status");


    if (completed === 0) {

        status.textContent =
            "NOT STARTED";

    } else if (completed === total) {

        status.textContent =
            "DONE";

    } else {

        status.textContent =
            "IN PROGRESS";
    }
}


function updateAllTopicStatuses() {

    document
        .querySelectorAll(".topic")
        .forEach(updateTopicStatus);

}


document
    .querySelectorAll(".topic-header")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const topic =
                button.closest(".topic");

            topic.classList.toggle("open");

        });

    });


checkboxes.forEach((checkbox) => {

    checkbox.addEventListener("change", () => {

        saveProgress();

        calculateProgress();

        updateAllTopicStatuses();

    });

});


loadProgress();

calculateProgress();

updateAllTopicStatuses();
