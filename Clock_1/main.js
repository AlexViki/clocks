function displayCanvas() {
  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');

  // расчет кординат центра и радиуса часов
  var rariusClock = canvas.width/2 - 10;
  var xCenterClock = canvas.width/2;
  var yCenterClock = canvas.width/2;

  // очистка екрана, если этого не сделать то после появления новой стрелки предыдучая будет оставатся на екране тоже, таким образом циферблат будет весь в стрелках
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // рисуем контур часов
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(xCenterClock, yCenterClock, rariusClock, 0, 2*Math.PI, true);
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.stroke();
  ctx.closePath();

  // Рисование делений
  var radiusNum = rariusClock - 10; // радиус для росположения дилений
  var radiusPoint;
  for ( var tm = 0; tm < 60; tm++ ){
    ctx.beginPath();
    if ( tm % 5 == 0 ){
      radiusPoint = 5;
    }else {
      radiusPoint = 2;
    };
    var xPointM = xCenterClock + radiusNum * Math.cos( -6 * tm * (Math.PI/180) + Math.PI/2 );
    var yPointM = xCenterClock + radiusNum * Math.sin( -6 * tm * (Math.PI/180) + Math.PI/2 );
    ctx.arc(xPointM, yPointM, radiusPoint, 0, 2*Math.PI, true);
    ctx.stroke();
    ctx.closePath();
  }

// цыфры для часов
for( var th = 1; th <=12; th ++ ){
  ctx.beginPath();
  ctx.font = 'bold 25px sans-serif';
  var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI/180) + Math.PI/2 );
  var yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI/180) + Math.PI/2);
  if( th <=9 ){
    ctx.strokeText(th, xText - 5, yText + 10);
  }else {
    ctx.strokeText(th, xText - 15, yText + 10 );
  };
  ctx.stroke();
  ctx.closePath();
};

// стрелки часов
var lengthSecond = radiusNum - 10;
var lengthMinutes = radiusNum - 25;
var lengthHours = lengthMinutes / 1.3;
var d = new Date();
var t_sec = 6 * d.getSeconds();
var t_min = 6 * ( d.getMinutes() + (1/60) * d.getSeconds() );
var t_hor = 30 * ( d.getHours() + (1/60) * d.getMinutes() )
// рисуем струлку секунд
ctx.beginPath();
ctx.strokeStyle = '#FF0000';
ctx.lineWidth = 3;
ctx.moveTo(xCenterClock, yCenterClock);
ctx.lineTo(xCenterClock + lengthSecond * Math.cos( Math.PI/2 - t_sec * ( Math.PI/180 ) ),
          yCenterClock - lengthSecond * Math.sin( Math.PI/2 - t_sec * ( Math.PI/180 ) ));
ctx.stroke();
ctx.closePath();
// рисуем стрелку минут
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.lineWidth = 5;
ctx.moveTo(xCenterClock, yCenterClock);
ctx.lineTo(xCenterClock + lengthMinutes * Math.cos( Math.PI/2 - t_min * ( Math.PI/180 ) ),
          yCenterClock - lengthMinutes * Math.sin( Math.PI/2 - t_min * ( Math.PI/180 ) ));
ctx.stroke();
ctx.closePath();
// рисуем стрклку часов
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.lineWidth = 7;
ctx.moveTo(xCenterClock, yCenterClock);
ctx.lineTo(xCenterClock + lengthHours * Math.cos( Math.PI/2 - t_hor * ( Math.PI/180 ) ),
          yCenterClock - lengthHours * Math.sin( Math.PI/2 - t_hor * ( Math.PI/180 ) ));
ctx.stroke();
ctx.closePath();
return;
};


window.onload = function () {
  window.setInterval(
    function () {
      var d = new Date();
      document.getElementById('clock').innerHTML = d.toLocaleTimeString();
      displayCanvas();
    }, 1000
  );

};
