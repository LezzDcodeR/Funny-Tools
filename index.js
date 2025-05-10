const readline = require("readline")

const input = (teks) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve) => {
        rl.question(teks, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

async function back() {
let aw = await input("Kembali?n/y: ")
if (aw === "y") {
startTools()
} else {
console.log("Lu Mau Ngapain?")
}
}

async function startTools() {
console.log(`\x1Bc`)
let gokgok = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣷⣄⡀⣀⣴⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⣀⣀⣀⣀⣀⣠⣤⣶⣾⣿⣿⣶⣦⣤⣤⣤⣤⡤⠤⠶⠾⠿⠷⠶⠦⠤⠀⠀⠀⠀⠀⠀\n⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣃⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀\n⠀⠀⠀⠀⠀⠀⣀⣉⣉⠉⢉⠉⠋⠛⠛⠛⠛⠛⠛⠉⠉⠉⢉⣉⣀⡀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⢀⣴⣾⣿⣿⣿⣆⠹⢿⣿⣿⠟⠉⠉⠻⣿⣿⡿⠁⢸⣿⣿⣿⣷⣄⠀⠀⠀⠀\n⠀⠀⠐⠛⠻⠿⠿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡿⠿⠿⠛⠛⠂⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⣿⣦⡀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠚⠿⢿⣿⣿⣿⣦⡀⠀⠀⣰⣿⣿⣿⣿⠿⠟⠂⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠻⢿⣿⠇⣼⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢰⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
const anu = await input(`${gokgok} \n\n\nLIST FITUR\n1. cekganteng\n2. cekcantik\n\n`)
switch (anu) {
case "cekganteng": case "1": {
let namanye = await input("Masukan Nama Anda: ")
if (!namanye.trim()) return console.log("Anda Belum Memasukan Nama")
console.log(`HASIL CEK GANTENG\nNama: ${namanye}\nNilai Kegantengan: ${Math.floor(Math.random() * 100)}%`)
back()
}
break
case "cekcantik": case "2": {
let namanye = await input("Masukan Nama Anda: ")
if (!namanye.trim()) return console.log("Anda Belum Memasukan Nama")
console.log(`HASIL CEK CANTIK\nNama: ${namanye}\nNilai Kecantikan: ${Math.floor(Math.random() * 100)}%`)
back()
}
break
default:
console.log("[ 404 ] Command Not Found")
}
}
startTools()
