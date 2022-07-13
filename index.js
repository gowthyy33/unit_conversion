let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let m2f = baseValue * meterToFeet
    m2f = m2f.toFixed(2)
    
    lengthEl.textContent = `${baseValue} Meter = ${m2f} Feet` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let l2g = baseValue * literToGallon 
    l2g=l2g.toFixed(2)
    
    volumeEl.textContent = `${baseValue} Litres = ${l2g} Gallons` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let k2p = baseValue* kiloToPound
    k2p = k2p.toFixed(2)
    
    massEl.textContent = `${baseValue} Kilograms = ${k2p} Pounds` 
})