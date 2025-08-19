document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector("h1");
    const name = "Your Name";
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(typeName, 100);
        }
    }

    typeName();
});

