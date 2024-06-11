console.log("Windows 11 Clone");
let start_menu = document.querySelector(".start-menu");
let np_items_icon = document.querySelectorAll(".np-top-item-icon");
let notification_panel = document.querySelector(".notification-panel");
let controls = [
    document.querySelector(".cont-middle"),
    document.querySelector(".cont-right"),
];
let more_tabs = document.querySelector(".more-tabs");
let close_tab = document.querySelectorAll(".close-tab");
let home_search = document.querySelector(".home-search");
let tabs = `<div class="tab flex align-center">
                            <div class="home-icon flex align-center">
                                <svg style="height: 26px; width: 24px; padding: 2px 0; margin-bottom: 5px">
                                    <path d="M5 20 5 10 12 5 19 10 19 20 14.5 20 14.5 12 9.5 12 9.5 20 5 20" stroke="#a2a2a2" fill="#a2a2a2" stroke-linejoin="round"></path>
                                    <path d="M4.7 10 12 4 19.3 10" stroke="#ce3a0c" stroke-width="2.5" fill="none" stroke-linejoin="round"></path>
                                    <circle cx="4.7" cy="10" r="1.25" fill="#ce3a0c"></circle>
                                    <circle cx="19.3" cy="10" r="1.25" fill="#ce3a0c"></circle>
                                </svg>
                                <span>Home</span>
                            </div>
                            <div class="close-tab flex align-center justify-center">
                                <svg style="height: 24px; width: 24px;">
                                    <line x1="7" y1="7" x2="17" y2="17" stroke="white" stroke-width="1"></line>
                                    <line x1="17" y1="7" x2="7" y2="17" stroke="white" stroke-width="1"></line>
                                </svg>
                            </div>
                        </div>`;
let notifyInOut = document.querySelector(".w-v-b-icon");
windows.addEventListener("click", () => {
    if (start_menu.style.bottom === "60px") {
        start_menu.style.bottom = "-700px";
    }
    else {
        start_menu.style.bottom = "60px";
    }
});

np_items_icon.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.classList.contains("white-line")) {
            icon.classList.add("black-line");
            icon.classList.remove("white-line");
        }
        else {
            icon.classList.add("white-line");
            icon.classList.remove("black-line");
        }
    });
});

notifyInOut.addEventListener("click", () => {
    if (notification_panel.style.bottom === "60px") {
        notification_panel.style.bottom = "-375px";
    }
    else {
        notification_panel.style.bottom = "60px";
    }
});

let previousCont = null;
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        e.stopPropagation();
        if (previousCont != null) {
            previousCont.classList.remove("border");
            home_search.style.zIndex = "var(--layer-1)";
        }
        control.classList.add("border");
        if (control === controls[0]) {
            home_search.style.zIndex = "var(--layer-2)";
        }

        previousCont = control;
    });
});

more_tabs.addEventListener("click", () => {
    more_tabs.insertAdjacentHTML("beforebegin", tabs);
    close_tab = document.querySelectorAll('.close-tab');
    close_tab.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("close-tab")) {
                console.log(e.currentTarget);
                tab.parentElement.remove();
            }
        });
    });
});

if (close_tab.length === 1) {
    close_tab[0].addEventListener("click", () => {
        close_tab[0].parentElement.remove();
    });
}


home_search.children[1].addEventListener('click', () => {
    home_search.firstElementChild.value = "";
})


document.body.addEventListener("click", () => {
    controls.forEach((control) => {
        control.classList.remove("border");
        home_search.style.zIndex = "var(--layer-1)";
    });
});