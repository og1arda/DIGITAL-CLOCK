function getTime() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    let day = now.getDate()
    let month = now.getMonth() + 1 // js starts counting the months from 1
    let year = now.getFullYear()

    document.getElementById("hour").innerText = hour
    document.getElementById("minute").innerText = minute
    document.getElementById("second").innerText = second

    document.getElementById("date").innerText = day + "/" + month + "/" + year
}

setInterval(function () { getTime() }, 1000)