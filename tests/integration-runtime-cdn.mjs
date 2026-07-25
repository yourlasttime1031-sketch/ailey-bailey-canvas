import { readFileSync } from 'node:fs';

const runtimeUrl = 'https://cdn.jsdelivr.net/gh/yourlasttime1031-sketch/Singulari-Tea-Codex-Canvas@main/bundle/runtime-v2.js';
const promptPath = 'prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt';
const prompt = readFileSync(promptPath, 'utf8');

if (!prompt.includes(runtimeUrl)) {
  throw new Error('Canvas prompt does not reference the expected runtime CDN URL.');
}

const response = await fetch(runtimeUrl, {
  headers: {
    'cache-control': 'no-cache',
    'user-agent': 'ailey-canvas-runtime-smoke-test'
  }
});

if (!response.ok) {
  throw new Error(`Runtime CDN request failed with HTTP ${response.status}.`);
}

const source = await response.text();
const requiredRuntimeFragments = [
  'var VERSION = "2.0.0"',
  'root.renderCanvasOperation = api.execute',
  'operation === "create"',
  'operation === "patch"',
  'operation === "view"',
  'operation === "snapshot"',
  'REVISION_CONFLICT',
  'SECTION_NOT_FOUND'
];

for (const fragment of requiredRuntimeFragments) {
  if (!source.includes(fragment)) {
    throw new Error(`Runtime CDN payload is missing: ${fragment}`);
  }
}

console.log(`Runtime CDN smoke test passed: ${runtimeUrl}`);
