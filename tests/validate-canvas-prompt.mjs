import { readFileSync } from 'node:fs';

const path = 'prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt';
const prompt = readFileSync(path, 'utf8');

const requiredFragments = [
  'IF User Input contains {.cc reset}',
  'ELSE IF User Input contains {.cu}',
  'ELSE IF User Input contains {.cv}',
  'ELSE IF User Input contains {.cs}',
  'operation: \'create\'',
  'operation: \'patch\'',
  'operation: \'view\'',
  'operation: \'snapshot\'',
  'data-canvas-section="unit-header"',
  'data-canvas-section="key-terms"',
  'data-canvas-section="concept-map"',
  'data-canvas-section="case-map"',
  'data-canvas-section="weakness-list"',
  'data-canvas-section="next-action"',
  'bundle/runtime-v2.js',
  'baseRevision must equal the latest saved revision',
  'A failed multi-patch operation must restore the previous DOM'
];

for (const fragment of requiredFragments) {
  if (!prompt.includes(fragment)) {
    throw new Error(`Missing canvas prompt contract fragment: ${fragment}`);
  }
}

const commandPositions = [
  '.cc reset',
  '.cu',
  '.cv',
  '.cs',
  '.ccc',
  '.cc}'
].map(command => prompt.indexOf(command));

if (commandPositions.some(position => position < 0)) {
  throw new Error('One or more canvas commands are missing from the trigger protocol.');
}

for (let index = 1; index < commandPositions.length; index += 1) {
  if (commandPositions[index] <= commandPositions[index - 1]) {
    throw new Error('Canvas command precedence is not ordered safely.');
  }
}

if (prompt.includes('Inject <div data-component="image-placeholder" data-prompt="..."> in EVERY section')) {
  throw new Error('The legacy mandatory image-per-section rule is still active.');
}

console.log('Canvas prompt v2 contract validation passed.');
