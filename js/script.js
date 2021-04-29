{
    const welcome = () => {
        console.log("Cześć wszystkim!")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js-nextColorName");

        body.classList.toggle("body--dark");
        nextColorName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}