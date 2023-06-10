var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event) {
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
speak()
}

function speak() {
    var synth = speechSynthesis
    speakdata = document.getElementById("textbox").innerHTML
    utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)

    Webcam.attach(camera)
}
camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
})
