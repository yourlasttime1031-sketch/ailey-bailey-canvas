import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'gpt_builder_package/00_START_HERE.md',
  'gpt_builder_package/01_BUILDER_INSTRUCTIONS.txt',
  'gpt_builder_package/02_CONVERSATION_STARTERS.txt',
  'gpt_builder_package/03_KNOWLEDGE_UPLOAD_MANIFEST.md',
  'gpt_builder_package/04_VALIDATION_CHECKLIST.md',
  'gpt_builder_package/05_BUILDER_FIELD_MAP.md',
  'gpt_builder_package/06_IPAD_BUILDER_STEPS.md',
  'gpt_builder_package/knowledge/02_save_load_dual_layer_v2.md',
  'gpt_builder_package/knowledge/03_constitution_project_instructions.md',
  'gpt_builder_package/knowledge/04_chat_partition_plan.md',
  'gpt_builder_package/knowledge/05_restore_validation_protocol.md',
  'gpt_builder_package/knowledge/06_integrated_operating_manual.md',
  'gpt_builder_package/knowledge/07_quick_checkpoint_example.json',
  'prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt'
];

for (const file of requiredFiles) {
  if (!existsSync(file)) throw new Error(`Missing builder package file: ${file}`);
}

const instructions = readFileSync('gpt_builder_package/01_BUILDER_INSTRUCTIONS.txt', 'utf8');
const manifest = readFileSync('gpt_builder_package/03_KNOWLEDGE_UPLOAD_MANIFEST.md', 'utf8');
const canvas = readFileSync('prompt_src/04_canvas_engine/M_C_canvas_engine.prompt.txt', 'utf8');
const checkpoint = JSON.parse(readFileSync('gpt_builder_package/knowledge/07_quick_checkpoint_example.json', 'utf8'));

const requiredInstructionFragments = [
  '1. .cc reset',
  '2. .cu',
  '3. .cv',
  '4. .cs',
  '5. .ccc',
  '6. .cc',
  'unit-header',
  'case-map',
  'zero-beat',
  '이미지는 사용자가 명시적으로 이미지 모드를 켜기 전까지 생성하지 않는다.'
];

for (const fragment of requiredInstructionFragments) {
  if (!instructions.includes(fragment)) throw new Error(`Builder instructions missing: ${fragment}`);
}

if (!manifest.includes('구형 `cc_canvas.md`')) {
  throw new Error('Knowledge manifest must warn against the legacy cc_canvas.md file.');
}

if (!canvas.includes('runtime-v2.js') || !canvas.includes('[M-C] Canvas Engine v2')) {
  throw new Error('Latest canvas engine is not connected to runtime v2.');
}

if (checkpoint.packet_type !== 'ailey_bailey_quick_checkpoint') {
  throw new Error('Quick checkpoint example has the wrong packet type.');
}

console.log('Personal constitution GPT builder package validation passed.');
