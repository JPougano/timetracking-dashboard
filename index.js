function daily (){
    fetch('data.json').then(function(response){
    return response.json();
    }).then(function(data){

var duracaoWork = document.querySelector('#duracao__work');
var comparacaoWork = document.getElementById('comparacao__work');

var duracaoPlay = document.getElementById('duracao__play').innerHTML;
var comparacaoPlay = document.getElementById('comparacao__play').innerHTML;

var duracaoStudy = document.getElementById('duracao__study').innerHTML;
var comparacaoStudy = document.getElementById('comparacao__study').innerHTML;

var duracaoExercise = document.getElementById('duracao__exercise').innerHTML;
var comparacaoExercise = document.getElementById('comparacao__exercise').innerHTML;

var duracaoSocial = document.getElementById('duracao__social').innerHTML;
var comparacaoSocial = document.getElementById('comparacao__social').innerHTML;

       if(data[0].timeframes.daily.current <2 || data[0].timeframes.daily.previous <2){
            duracaoWork.innerHTML = data[0].timeframes.daily.current + 'hr'
            comparacaoWork.innerHTML = data[0].timeframes.daily.previous + 'hr'
       } else{
            duracaoWork.innerHTML = data[0].timeframes.daily.current + 'hrs'
            comparacaoWork.innerHTML = 'Last day - ' + data[0].timeframes.daily.previous + 'hrs'
       }

        console.log(data[0].timeframes.daily.current);
    })
}

