var slider = document.querySelector('.slider'); // slider container
var list = slider.querySelector('.slider-list');
var show = slider.querySelector('.show'); // placeholder for currently active image
var onimage = false; // detect if the mouse is on the image
var slideactive = false; // flag for slider in use
var xpos = 0; // placeholder for x position of current image
var cursorpos = 0; // placeholder for cursor position
var time = 0;
var slidestart = [];
for(var i = 0; i < list.querySelectorAll('.slider-list-item').length; i++) {
  slidestart.push((i * -500)); // this is whole chunk is garbage
}

slider.addEventListener('mousedown', function(event) {
  slideactive = true;
  onimage = true;
  cursorpos = event.offsetX;
  time = new Date().getTime();
  // slider.querySelector('.show').classList.add('in-motion');
});
slider.addEventListener('mouseup', function(event) {
  slideactive = false;
  snapTo();
  // slider.querySelector('.show').classList.remove('in-motion');
});
slider.addEventListener('mousemove', function(event) { // maybe mousemove
  var newtime = new Date().getTime();
  if(onimage && slideactive && (newtime - time > 5)) { // time in ms (very botched debounce)
    time = newtime;
    var offset = event.offsetX - cursorpos; // calculate offset based on cursor position
    cursorpos += offset;
    slideImages(offset);
  }
});
slider.addEventListener('mouseout', function(event) {
  if(slideactive) {
    slideactive = false;
    snapTo();
  }
  onimage = false;
});
slider.addEventListener('transitionend', function(event) {
  event.target.classList.remove('in-motion');
});

function slideImages(offset, snap) { // set new position for current image
  var images = slider.querySelectorAll('.slider-list-item');
  
  if(snap) { // this is to normalize offset for snapping (should probably make this better)
    xpos = 0;
  }
  for(var i = 0; i < images.length; i++) {
    if(snap) {
      images[i].classList.add('in-motion');
    }
    images[i].style.left = (xpos + offset) + 'px';
  }
  xpos = parseInt(images[0].style.left);
};

function snapTo() {
  if(-250 < xpos) {
    slideImages(slidestart[0], true);
  } else if(-750 < xpos && xpos < -250) {
    slideImages(slidestart[1], true);
  } else if(-1250 < xpos && xpos < -750) {
    slideImages(slidestart[2], true);
  } else if(xpos < -1250) {
    slideImages(slidestart[3], true);
  }
};