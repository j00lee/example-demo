const canvas = document.querySelector('#drawing-canvas');
const canvasFrame = document.querySelector('.canvas-frame');
const hint = document.querySelector('#canvas-hint');
const status = document.querySelector('#status');
const sizeControl = document.querySelector('#size-control');
const sizeOutput = document.querySelector('#size-output');
const clearButton = document.querySelector('#clear-button');
const toolButtons = [...document.querySelectorAll('[data-tool]')];
const context = canvas.getContext('2d');

const state = {
  tool: 'pencil',
  size: Number(sizeControl.value),
  drawing: false,
  hasMarks: false,
  lastPoint: null,
};

function resizeCanvas() {
  const previous = document.createElement('canvas');
  previous.width = canvas.width;
  previous.height = canvas.height;
  previous.getContext('2d').drawImage(canvas, 0, 0);

  const ratio = window.devicePixelRatio || 1;
  const bounds = canvasFrame.getBoundingClientRect();
  canvas.width = Math.round(bounds.width * ratio);
  canvas.height = Math.round(bounds.height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.lineCap = 'round';
  context.lineJoin = 'round';

  if (previous.width && previous.height) {
    context.drawImage(previous, 0, 0, previous.width, previous.height, 0, 0, bounds.width, bounds.height);
  }
}

function pointFromEvent(event) {
  const bounds = canvas.getBoundingClientRect();
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
}

function drawLine(from, to) {
  context.save();
  context.globalCompositeOperation = state.tool === 'eraser' ? 'destination-out' : 'source-over';
  context.strokeStyle = '#17201c';
  context.lineWidth = state.size;
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  context.restore();
}

function startDrawing(event) {
  state.drawing = true;
  state.lastPoint = pointFromEvent(event);
  canvas.setPointerCapture(event.pointerId);
  drawLine(state.lastPoint, { x: state.lastPoint.x + .01, y: state.lastPoint.y + .01 });
  state.hasMarks = true;
  hint.classList.add('is-hidden');
  status.textContent = state.tool === 'eraser' ? 'Erasing' : 'Drawing';
}

function continueDrawing(event) {
  if (!state.drawing) return;
  const nextPoint = pointFromEvent(event);
  drawLine(state.lastPoint, nextPoint);
  state.lastPoint = nextPoint;
}

function stopDrawing() {
  if (!state.drawing) return;
  state.drawing = false;
  state.lastPoint = null;
  status.textContent = 'Ready to draw';
}

function selectTool(tool) {
  state.tool = tool;
  toolButtons.forEach((button) => {
    const isActive = button.dataset.tool === tool;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  canvas.style.cursor = tool === 'eraser' ? 'cell' : 'crosshair';
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  state.hasMarks = false;
  hint.classList.remove('is-hidden');
  status.textContent = 'Canvas cleared';
}

toolButtons.forEach((button) => button.addEventListener('click', () => selectTool(button.dataset.tool)));
sizeControl.addEventListener('input', (event) => {
  state.size = Number(event.target.value);
  sizeOutput.value = `${state.size} px`;
  sizeOutput.textContent = `${state.size} px`;
});
clearButton.addEventListener('click', clearCanvas);
canvas.addEventListener('pointerdown', startDrawing);
canvas.addEventListener('pointermove', continueDrawing);
canvas.addEventListener('pointerup', stopDrawing);
canvas.addEventListener('pointercancel', stopDrawing);
window.addEventListener('resize', resizeCanvas);
window.addEventListener('keydown', (event) => {
  if (event.target.matches('input')) return;
  if (event.key.toLowerCase() === 'p') selectTool('pencil');
  if (event.key.toLowerCase() === 'e') selectTool('eraser');
});

resizeCanvas();