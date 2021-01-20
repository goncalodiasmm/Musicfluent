// SELECIONAR NOTAS
const dó = document.getElementById('dó');
const ré = document.getElementById('ré');
const mi = document.getElementById('mi');
const fá = document.getElementById('fá');
const sol = document.getElementById('sol');
const lá = document.getElementById('lá');
const si = document.getElementById('si');
const nota = document.getElementById('nota');

// SELECIONAR SONS DAS NOTAS
const pianoA = document.getElementById('piano-a');
const pianoB = document.getElementById('piano-b');
const pianoC = document.getElementById('piano-c');
const pianoD = document.getElementById('piano-d');
const pianoE = document.getElementById('piano-e');
const pianoF = document.getElementById('piano-f');
const pianoG = document.getElementById('piano-g');

// ASSOCIAR A LETRA DA NOTA AO SOLFEJO, COM SOM
dó.addEventListener('click', () => {
   nota.innerText = 'Dó'
   pianoC.play()
})
ré.addEventListener('click', () => {
   nota.innerText = 'Ré'
   pianoD.play()
})
mi.addEventListener('click', () => {
   nota.innerText = 'Mi'
   pianoE.play()
})
fá.addEventListener('click', () => {
   nota.innerText = 'Fá'
   pianoF.play()
})
sol.addEventListener('click', () => {
   nota.innerText = 'Sol'
   pianoG.play()
})
lá.addEventListener('click', () => {
   nota.innerText = 'Lá'
   pianoA.play()
})
si.addEventListener('click', () => {
   nota.innerText = 'Si'
   pianoB.play()
})