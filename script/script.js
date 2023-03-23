//dohod
const input_plus1 = document.querySelector('.input-plus1'),
      input_plus2 = document.querySelector('.input-plus2'),
      input_plus3 = document.querySelector('.input-plus3'),
      input_plus4 = document.querySelector('.input-plus4');

//rashod
const input_minus1 = document.querySelector('.input-minus1'),
      input_minus2 = document.querySelector('.input-minus2'),
      input_minus3 = document.querySelector('.input-minus3'),
      input_minus4 = document.querySelector('.input-minus4');


const totalMonth = ()=>{
    let plus = +input_plus1.value + +input_plus2.value + +input_plus3.value + +input_plus4.value;
    let minus = +input_minus1.value  + +input_minus2.value + +input_minus3.value + +input_minus4.value;
    const MonthResalt = plus - minus;
    let itogMonth = document.querySelector('.inp__dost-v-mes');
    itogMonth.value = (MonthResalt);
}

const inputs = document.querySelectorAll('.input');
for (item of inputs){
    item.addEventListener('input', ()=>{
        totalMonth();
        proc();
    })
}

const range = document.querySelector('.range');
range.addEventListener('input', ()=>{
    proc();
})

const proc = ()=>{

    let plus = +input_plus1.value + +input_plus2.value + +input_plus3.value + +input_plus4.value;
    let minus = +input_minus1.value  + +input_minus2.value + +input_minus3.value + +input_minus4.value;
    const MonthResalt = plus - minus;

    let proc_range = document.querySelector('.proc-range');
    let qwer = range.value;
    proc_range.innerHTML = qwer;
    let kopim_inp = document.querySelector('.kopim-inp');
    let kopim =  ((MonthResalt * qwer) / 100).toFixed();
    kopim_inp.value = kopim;

    let tratim_inp = document.querySelector('.tratim-inp');
    let tratim =  MonthResalt - kopim;
    tratim_inp.value = tratim;

    const DayResalt = Math.floor(tratim/30);
    let itogDay = document.querySelector('.inp__dost-v-den');
    itogDay.value = (DayResalt);

    let inp__za_god = document.querySelector('.inp__za-god');
    let za_god = kopim * 12;
    inp__za_god.value = za_god;
}






