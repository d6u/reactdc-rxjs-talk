let box = $('#box');
let body = $('body');

box.on('mousedown', handleMouseEvent);
body.on('mouseup', handleMouseEvent);

let mousemoveHandler;

function handleMouseEvent(event) {
  if (event.type !== 'mousedown') {
    body.off('mousemove', mousemoveHandler);
    mousemoveHandler = null;
    return;
  }

  let offsetX = event.pageX - box[0].offsetLeft;
  let offsetY = event.pageY - box[0].offsetTop;

  mousemoveHandler = ({pageX, pageY}) => {
    let x = pageX - offsetX;
    let y = pageY - offsetY;

    box[0].style.left = `${x}px`;
    box[0].style.top = `${y}px`;
  };

  body.on('mousemove', mousemoveHandler);
}
