//-----------------------------Compatibility Code----------------------------------//
var fileAjax = function fileAjax() {
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
};
//---------------------------------------------------------------//

//---------------------------Call json------------------------------------//

//-----------------------------Click----------------------------------//
function infoItemClick(){
  var area = document.getElementById('info');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/infoItems.json", true);
  xhr.send();
  var cl = document.getElementById('infoClick')

  cl.addEventListener('click', function(){
      if(xhr.readyState == 4){
       if (xhr.status == 200) {
        console.log('Complete')
        var data = JSON.parse(xhr.responseText);
        var area = document.getElementById('info');
        area.innerHTML = '';
        for (var i = 0; i < data.click.length; i++) {
          var li = document.createElement('p');
          li.innerHTML = data.click[i];
          area.appendChild(li);
          area.style.display = "inline-block"
        }
      }
      else{
        console.log('Incomplete')
      }
    }
  });
  area.addEventListener('click',function(){
    var area = document.getElementById('info');
    area.style.display = "none";
  })
}

infoItemClick();

//-----------------------------Chef----------------------------------//
function infoItemChef(){
  var area = document.getElementById('info');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/infoItems.json", true);
  xhr.send();
  var cl = document.getElementById('infoChef')
  cl.addEventListener('click', function(){
    if(xhr.readyState == 4){
     if (xhr.status == 200) {
      console.log('Complete')
      var data = JSON.parse(xhr.responseText);
      var area = document.getElementById('info');
      area.innerHTML = '';
        for (var i = 0; i < data.chef.length; i++) {
          var li = document.createElement('p');
          li.innerHTML = data.chef[i];
          area.appendChild(li);
          area.style.display = "inline-block"
        }
      }
      else{
        console.log('Incomplete')
      }
      document.getElementById("infoChef").disabled = true;
    }
  });
  area.addEventListener('click',function(){
    var area = document.getElementById('info');
    area.style.display = "none";
  })
}

infoItemChef();

//-----------------------------Town----------------------------------//
function infoItemTown(){
  var area = document.getElementById('info');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/infoItems.json", true);
  xhr.send();
  var cl = document.getElementById('infoTown')
  cl.addEventListener('click', function(){
    if(xhr.readyState == 4){
     if (xhr.status == 200) {
      console.log('Complete')
      var data = JSON.parse(xhr.responseText);
      var area = document.getElementById('info');
      area.innerHTML = '';
        for (var i = 0; i < data.town.length; i++) {
          var li = document.createElement('p');
          li.innerHTML = data.town[i];
          area.appendChild(li);
          area.style.display = "inline-block"
        }
      }
      else{
        console.log('Incomplete')
      }
      document.getElementById("infoTown").disabled = true;
    }
  });
  area.addEventListener('click',function(){
    var area = document.getElementById('info');
    area.style.display = "none";
  })
}

infoItemTown();

//-----------------------------Town----------------------------------//
function infoItemCity(){
  var area = document.getElementById('info');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/infoItems.json", true);
  xhr.send();
  var cl = document.getElementById('infoCity')
  cl.addEventListener('click', function(){
    if(xhr.readyState == 4){
     if (xhr.status == 200) {
      console.log('Complete')
      var data = JSON.parse(xhr.responseText);
      var area = document.getElementById('info');
      area.innerHTML = '';
        for (var i = 0; i < data.city.length; i++) {
          var li = document.createElement('p');
          li.innerHTML = data.city[i];
          area.appendChild(li);
          area.style.display = "inline-block"
        }
      }
      else{
        console.log('Incomplete')
      }
      document.getElementById("infoCity").disabled = true;
    }
  });
  area.addEventListener('click',function(){
    var area = document.getElementById('info');
    area.style.display = "none";
  })
}

infoItemCity();
