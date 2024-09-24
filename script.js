alert('Warning: Holiday pictures ahead');

//JS that changes the content when clicking on a tab

function setupTabs () {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);
            
            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });
            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });
            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");

        });
    });
}

//JS to run after website loads


document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

 //JS to activate the first tab after loading

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
        tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
    });
});

//JS for the buttons in the tabs

function bruceButton() {
     document.getElementById("bruce__said").innerHTML = '"He who holds Stirling holds Scotland."  -Robert The Bruce';
        };

function burnsButton() {
     document.getElementById("burns__said").innerHTML = '"Wherever I wander, wherever I rove, The hills of the Highlands forever I love."  -Robert Burns';
        };

function glasgowButton() {
     document.getElementById("glasgow__said").innerHTML = '"A person from Glasgow has more fun at a funeral than a person from Edinburgh has at a wedding."  -Some guy';
        };

function oasisButton() {
     document.getElementById("oasis__said").innerHTML = '"You and I are gonna live forever!"  -Liam Gallagher';
        };
