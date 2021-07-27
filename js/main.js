
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

function pesquisa(url){
    let request = XMLHttpRequest()
    request.open("GET",url,false);
    request.send();
    return request.responseText
}