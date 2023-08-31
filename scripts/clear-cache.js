const path = require('path');
const fs = require('fs');

const dir = path.join(process.cwd(), 'node_modules', '.cache');

fs.rmSync(dir, { recursive: true, force: true });
