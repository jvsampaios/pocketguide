window.onload = function (){  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

$(document).ready(function(){
  // TABS
  $('ul.tabs').tabs();
});

//Modal
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

const pesquisar = () =>{
  const pesquisa = document.getElementById('txtBusca').value;
  window.location.href = 'resultadopesquisa.html';    
 alert(pesquisa);
 
}

document.getElementById('txtBusca').addEventListener('keypress',function (e) {
  if (e.key === 'Enter') {
pesquisar();
  }
});

}