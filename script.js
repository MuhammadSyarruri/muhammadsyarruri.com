const container = document.getElementById("kontainer")

        const warna = ['cyan', 'lime', 'yellow', 'pink', 'red']

        function warnaRandom() {
            return warna[Math.floor(Math.random() * 5)]
        }

        for (let i = 0; i < 180; i++) {
            const createDiv = document.createElement("div");
            createDiv.className = "kotak"
            createDiv.id = `kotak${i + 1}`
            container.appendChild(createDiv)
        }

        const a = document.querySelectorAll(".kotak")
        a.forEach((div) => {
            div.addEventListener("mouseover", function () {
                div.style.backgroundColor = warnaRandom()
            })

            div.addEventListener("mouseout", function () {
                div.style.backgroundColor = "#C5BAFF"
            })
        })