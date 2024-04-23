AOS.init();

const dataDoEvento = new Date("Aug 2, 2024 09:00:00");//aponta para data no futuro
const timeStampDoEvento = dataDoEvento.getTime();

// console.log(timeStampDoEvento);


const contaAsHoras = setInterval(function(){

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento-timeStampAtual;

    console.log(distanciaDoEvento);

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMs);

    const horasAteOEvento = Math.floor((distanciaDoEvento % diasEmMs) /horasEmMs);

    const minutosAteOEvento = Math.floor((distanciaDoEvento % horasEmMs) / minEmMs);

    const segundosAteOEvento = Math.floor((distanciaDoEvento % minEmMs) / 1000);

    console.log (diasAteOEvento);
    console.log (horasAteOEvento);
    console.log(minutosAteOEvento)

    document.getElementById('contador').innerHTML=`${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`

    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML= 'Evento expirado'
    }
}, 1000)

