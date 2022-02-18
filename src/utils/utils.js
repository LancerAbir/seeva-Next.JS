export const stickNav = () => {
    let offset = window.scrollY;
    const sticky = document.querySelector("#wsmainfull");
    if (sticky) {
        if (offset > 80) {
            sticky.classList.add("scroll");
        } else {
            sticky.classList.remove("scroll");
        }
    }
};

export const aTagClick = () => {
    const aTag = document.querySelectorAll("[href='#']");
    for (let i = 0; i < aTag.length; i++) {
        const a = aTag[i];
        a.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }
};
