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
  ctx.font = 'bold 25 sans-serif';
  var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI/180) + Math.PI/2 );
  var yText = xCenterClock + (radiusNum - 30) * Math.sin(-30 * th * (Math.PI/180) + Math.PI/2);
  ctx.strokeText(th, xText, yText);
  ctx.stroke();
  ctx.closePath();
};
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
