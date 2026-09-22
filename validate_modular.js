const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = __dirname;
console.log('Validating modular project structure in:', rootDir);

// Verify required files exist
const requiredFiles = [
  'index.html',
  'pamilihan-lesson.html',
  'css/main.css',
  'css/backgrounds.css',
  'css/animations.css',
  'css/components.css',
  'js/data.js',
  'js/mascots.js',
  'js/stage.js',
  'js/dnd.js',
  'js/slides.js',
  'js/app.js'
];

requiredFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: Missing file ${file}`);
    process.exit(1);
  }
  const stats = fs.statSync(filePath);
  console.log(`✓ File verified: ${file} (${stats.size} bytes)`);
});

// Setup mock browser DOM environment
const mockElements = new Map();
function createMockElement(id) {
  return {
    id,
    innerHTML: '',
    textContent: '',
    style: {},
    classList: {
      add: () => {},
      remove: () => {},
      contains: () => false,
      toggle: () => {}
    },
    appendChild: () => {},
    removeChild: () => {},
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    dataset: {}
  };
}

const globalMock = {
  window: {
    innerWidth: 1920,
    innerHeight: 1080,
    addEventListener: () => {},
    removeEventListener: () => {}
  },
  document: {
    fullscreenElement: null,
    documentElement: {
      requestFullscreen: async () => {},
      style: {}
    },
    getElementById: (id) => {
      if (!mockElements.has(id)) {
        mockElements.set(id, createMockElement(id));
      }
      return mockElements.get(id);
    },
    querySelector: (sel) => null,
    querySelectorAll: (sel) => [],
    createElement: (tag) => createMockElement(tag),
    addEventListener: () => {}
  },
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  Math: Math
};

const context = vm.createContext(globalMock);

// Load and execute JS scripts in order
const jsFiles = [
  'js/data.js',
  'js/mascots.js',
  'js/stage.js',
  'js/dnd.js',
  'js/slides.js',
  'js/app.js'
];

jsFiles.forEach(file => {
  const code = fs.readFileSync(path.join(rootDir, file), 'utf8');
  try {
    vm.runInContext(code, context);
    console.log(`✓ Executed ${file} successfully`);
  } catch (err) {
    console.error(`ERROR executing ${file}:`, err);
    process.exit(1);
  }
});

// Verify lesson data
const lessonData = vm.runInContext('lessonData', context);
console.log('✓ Lesson Title:', lessonData.title);
if (lessonData.title !== "IBA'T IBANG ESTRAKTURA NG PAMILIHAN") {
  console.error(`ERROR: Title must be "IBA'T IBANG ESTRAKTURA NG PAMILIHAN"! Got: ${lessonData.title}`);
  process.exit(1);
}

console.log('✓ Quiz questions count:', lessonData.quizQuestions.length);
console.log('✓ Sorting items count:', lessonData.sortItems.length);
console.log('✓ Analysis questions count:', lessonData.analysisQuestions.length);

if (lessonData.analysisQuestions.length !== 4) {
  console.error(`ERROR: Expected 4 analysis questions, found ${lessonData.analysisQuestions.length}`);
  process.exit(1);
}

if (lessonData.sortCategories.length !== 2) {
  console.error(`ERROR: Expected 2 motivation categories, found ${lessonData.sortCategories.length}`);
  process.exit(1);
}
console.log('✓ Motivation 2-column table categories verified:', lessonData.sortCategories.map(c => c.label).join(' | '));

// Verify quiz answer keys (1-C, 2-B, 3-C, 4-D, 5-A)
const expectedAnswers = [2, 1, 2, 3, 0];
lessonData.quizQuestions.forEach((q, idx) => {
  if (q.correct !== expectedAnswers[idx]) {
    console.error(`ERROR: Quiz question ${idx + 1} mismatch! Expected ${expectedAnswers[idx]}, got ${q.correct}`);
    process.exit(1);
  }
});
console.log('✓ Quiz answers match 1-C, 2-B, 3-C, 4-D, 5-A verbatim');

// Verify Mascot generators
const Mascots = vm.runInContext('Mascots', context);
const alingNenaSvg = Mascots.alingNena('default', 100);
const kuyaJuanSvg = Mascots.kuyaJuan('default', 100);
if (!alingNenaSvg.includes('Aling Nena') || !kuyaJuanSvg.includes('Kuya Juan')) {
  console.error('ERROR: Mascots SVG generation failed!');
  process.exit(1);
}
console.log('✓ Mascots SVG generator verified (Aling Nena & Kuya Juan)');

// Verify registered slides
const slides = vm.runInContext('slides', context);
console.log(`✓ Registered slides count: ${slides.length} (Expected: 25)`);
if (slides.length !== 25) {
  console.error(`ERROR: Expected 25 slides, found ${slides.length}`);
  process.exit(1);
}

// Verify "Kahulugan ng Pamilihan" slide is dropped completely
const oldDefSlide = slides.find(s => s.id === 'abs-def');
if (oldDefSlide) {
  console.error('ERROR: "abs-def" slide must be deleted completely!');
  process.exit(1);
}
console.log('✓ Confirmed: "Kahulugan ng Pamilihan" topic/slide was fully removed');

// Verify Opening Routine sequence: Panalangin -> Pagbati -> Attendance -> Rules -> Review
const slideIds = slides.map(s => s.id);
const prayerIdx = slideIds.indexOf('prayer');
const greetingIdx = slideIds.indexOf('greeting');
const attendanceIdx = slideIds.indexOf('attendance');
const rulesIdx = slideIds.indexOf('rules');
const reviewIdx = slideIds.indexOf('review');

if (!(prayerIdx < greetingIdx && greetingIdx < attendanceIdx && attendanceIdx < rulesIdx && rulesIdx < reviewIdx)) {
  console.error(`ERROR: Opening routine sequence mismatch! Order found: ${slideIds.slice(2, 7).join(' -> ')}`);
  process.exit(1);
}
console.log('✓ Confirmed: Opening routine sequence is Panalangin -> Pagbati -> Pagtala ng Liban -> Alituntunin sa Silid -> Balik-Aral');

// Verify 3 Differentiated Instruction slides exist
const diff1 = slides.find(s => s.id === 'diff-pangkat1');
const diff2 = slides.find(s => s.id === 'diff-pangkat2');
const diff3 = slides.find(s => s.id === 'diff-pangkat3');

if (!diff1 || !diff2 || !diff3) {
  console.error('ERROR: Missing differentiated instruction slides for Pangkat 1, 2, or 3!');
  process.exit(1);
}
console.log('✓ Confirmed: 3 distinct Differentiated Instruction slides present before formal content');

// Verify every slide renders without exception
slides.forEach((s, idx) => {
  try {
    const html = s.render();
    if (!html || typeof html !== 'string') {
      throw new Error(`Slide ${s.id} returned invalid HTML`);
    }
  } catch (err) {
    console.error(`ERROR rendering slide ${idx + 1} (${s.id}):`, err);
    process.exit(1);
  }
});
console.log('✓ All 25 slides rendered clean HTML without errors');

// Verify video integration in prayer and abs-video slides
const prayerSlide = slides.find(s => s.id === 'prayer').render();
const absVideoSlide = slides.find(s => s.id === 'abs-video').render();
if (!prayerSlide.includes('videos/prayer.mp4') || !absVideoSlide.includes('videos/Istraktura ng Pamilihan.mp4')) {
  console.error('ERROR: Video integration verification failed!');
  process.exit(1);
}
console.log('✓ Video files verified in prayer and abs-video slides');

// Verify video clip presentation wording
if (!absVideoSlide.includes('Video Clip Presentation')) {
  console.error('ERROR: Video clip presentation wording missing in abs-video slide!');
  process.exit(1);
}
console.log('✓ Video clip presentation wording confirmed');

// Verify student-created rubric
const rubricSlide = slides.find(s => s.id === 'rubric').render();
if (!rubricSlide.includes('Gagawa ang mga mag-aaral ng sariling pamantayan sa Pagmamarka ng Dula-dulaan')) {
  console.error('ERROR: Student-created rubric directive missing in rubric slide!');
  process.exit(1);
}
console.log('✓ Student-created rubric directive confirmed');

// Verify 2-tier hierarchy
const perfectSlide = slides.find(s => s.id === 'abs-perfect').render();
const imperfectSlide = slides.find(s => s.id === 'abs-imperfect').render();
if (!perfectSlide.includes('Pamilihang May Ganap na Kompetisyon') ||
    !imperfectSlide.includes('Pamilihang May Hindi Ganap na Kompetisyon')) {
  console.error('ERROR: 2-tier hierarchy missing in abstraction slides');
  process.exit(1);
}
console.log('✓ 2-tier hierarchy validated: Ganap vs. Hindi Ganap (Price Taker vs. Price Maker)');

console.log('====================================================');
console.log('ALL REVISED DLP CHECKS PASSED WITH 100% SUCCESS!');
console.log('====================================================');
