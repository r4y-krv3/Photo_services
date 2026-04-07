document.addEventListener('DOMContentLoaded', function(){
const lunaAn = document.getElementById('luna-an');
const luni = [
    'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 
    'Mai', 'Iunie', 'Iulie', 'August', 
    'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
let dataCurenta = new Date();
let azi = new Date();

function redaCalendar(data) {
    const an = data.getFullYear();
    const luna = data.getMonth();
    const primaZi = new Date(year, month, 1).getDay();
    const ultimaZi = new Date(year, month + 1, 0).getDate();

    lunaAn .textContent = '${luna[luna} $(an)';
}
redaCalendar(dataCurenta);});