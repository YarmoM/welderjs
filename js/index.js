$.ready().then(function(){
  var globalOpts = {
    duration: 600,
    easing: 'cubic-bezier(0.55,0,.1,1)'
  }
  welder.init(globalOpts);

  window.addEventListener('onScrollStop', toggleMenu);
  $$('.showcase').forEach(function(el, i) {
    el.addEventListener('click', toggleShowcase);
  });
});

function toggleMenu(e) {
  var menu = document.querySelector('.menu');
  if(document.getScroll()[1]>(window.innerHeight+32)) {
    if(menu.getAttribute('data-state')=="inline") {
      welder.transition(menu, 'fixed');
    }
  } else {
    if(menu.getAttribute('data-state')=="fixed") {
      var options = {
        relativeTo: menu.parentNode
      }
      welder.transition(menu, 'inline', options);
    }
  }
}
function toggleShowcase(e) {
  var sc = e.target;
  if(sc.getAttribute('data-state')=="small") {
    welder.transition(sc, 'large');
  } else {
    var options = {
      relativeTo: sc.parentNode
    }
    welder.transition(sc, 'small', options);
  }
}

document.getScroll = function(){
 if(window.pageYOffset!= undefined){
  return [pageXOffset, pageYOffset];
 }
 else{
  var sx, sy, d= document, r= d.documentElement, b= d.body;
  sx= r.scrollLeft || b.scrollLeft || 0;
  sy= r.scrollTop || b.scrollTop || 0;
  return [sx, sy];
 }
}

;(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle ("scroll", "optimizedScroll");
})();

(function() {
  var timer;
  window.addEventListener('optimizedScroll',function () {
    clearTimeout(timer);
    timer = setTimeout(refresh, 150);
  });
  var refresh = function () {
    window.dispatchEvent(new CustomEvent('onScrollStop'));
  };
})();
