let box = $('#box');
let body = $('body');

box.on('mousedown', mouseEventHandler);
body.on('mouseup', mouseEventHandler);

let mouseMoveHandler;

function mouseEventHandler(event) {
  if (event.type !== 'mousedown') {
    body.off('mousemove', mouseMoveHandler);
    mouseMoveHandler = null;
    return;
  }

  let offsetX = event.pageX - box[0].offsetLeft;
  let offsetY = event.pageY - box[0].offsetTop;

  mouseMoveHandler = ({pageX, pageY}) => {
    let x = pageX - offsetX;
    let y = pageY - offsetY;

    box[0].style.left = `${x}px`;
    box[0].style.top = `${y}px`;
  };

  body.on('mousemove', mouseMoveHandler);
}
