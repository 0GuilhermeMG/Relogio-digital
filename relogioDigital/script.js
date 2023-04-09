const tick = ()=>{
    //valor dos horários
    const hoje = new Date();
    var segundos = hoje.getUTCSeconds();
    var minutos = hoje.getUTCMinutes();
    var horas = hoje.getHours();
  
    if (segundos < 10){
        segundos =`0` + segundos
    }
    if (minutos < 10){
        minutos =`0` + minutos
    }
    if (horas < 10){
        horas =`0` + horas
    }
    
    //conteúdo da div
    const horario = `${horas}:${minutos}:${segundos}`
    horarioAtual.innerText = horario;
}

const horarioAtual = document.querySelector('[data-relogio]');
setInterval(tick, 1000);