const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layers || !layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

void createTemplate(layer, sliceName).then();
