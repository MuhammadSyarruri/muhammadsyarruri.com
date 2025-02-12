// ANIMASI KOTAK BERWARNA
const container = document.getElementById("kontainer")

        const warna = ['cyan', 'lime', 'yellow', 'pink', 'red', 'darkmagenta', 'orange']

        function warnaRandom() {
            return warna[Math.floor(Math.random() * 7)]
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
                div.style.backgroundColor = "#71b5ff"
            })
        })
// ANIMASI KOTAK BERWARNA END

// ANIMASI OPENING
const jam = new Date().getHours()
const menyapa = document.getElementById('menyapa')

if (jam >= 1 && jam <= 3) {
    menyapa.innerHTML = "Selamat Malam"
} else if (jam >= 4 && jam <= 9) {
    menyapa.innerHTML = "Selamat Pagi"
    menyapa
} else if (jam >= 10 && jam <= 14) {
    menyapa.innerHTML = 'Selamat Siang'
} else if (jam >= 15 && jam <= 18) {
    menyapa.innerHTML = "Selamat Sore"
} else if (jam >= 19 && jam <= 24) {
    menyapa.innerHTML = "Selamat Malam"
}

// hapus div sesudah animasi
// setTimeout(function() {
//     document.querySelector('.containerOpening').style.display = "none"
// }, 3500)
// ANIMASI OPENING END