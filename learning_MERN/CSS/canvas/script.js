const canvas = document.getElementById("paintCanvas")
const ctx = canvas.getContext("2d")
const clearBtn = document.getElementById("clearBtn")

let isDrawing = false
let brushColor = "#424242"
let brushWidth = 5

// mousedown & mouseup
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY)
})

canvas.addEventListener("mouseup", () => {
    isDrawing = false
    ctx.closePath()
})

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return

    ctx.lineWidth = brushWidth
    ctx.lineCap = "round"
    ctx.strokeStyle = brushColor

    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
})