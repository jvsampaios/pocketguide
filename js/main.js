'use strict';
  // Or with jQuery

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
let busca = document.getElementById('txtBusca').value; 
document.getElementById('txtBuscado').value = busca;
const pesquisar = () =>{
    alert("oi");
}

document.getElementById('txtBusca').addEventListener('focusout',pesquisar);

