/* ============================================================
   MAIN APPLICATION ROUTER & STATE CONTROLLER
   Marketplace Economics Quest: Arcade UI, Scoring, XP & Stepper
   ============================================================ */

const App = {
  currentSlideIdx: 0,
  isTransitioning: false,

  // Gamified Economy Stats
  score: 250,
  level: 1,
  xp: 250,
  maxXp: 500,

  // Attendance Tally State
  attendanceTally: { 1: 0, 2: 0, 3: 0, 4: 0 },
  attendanceConfirmed: false,

  // Background Music Controller (Para sa Interactive Games lamang)
  isMusicMuted: false,
  fadeInterval: null,

  // Group Leaderboard Scores
  groupScores: { 1: 500, 2: 350, 3: 250, 4: 200 },

  // Analysis Questions State (4 Questions in Revised DLP)
  analysisAnswered: [false, false, false, false],
  analysisPicks: [null, null, null, null],

  // Differentiated Instruction State (Pangkat 1, 2, 3)
  diffP1SelectedCard: null,
  diffP1PlacedCount: 0,
  diffP2SelectedStmt: null,
  diffP2PlacedCount: 0,
  diffP3Revealed: [false, false, false],

  // Student-Created Rubric Points State
  studentRubricPoints: { nilalaman: 10, pagarte: 5, kooperasyon: 5 },

  // Quiz State
  quizCurrentIndex: 0,
  quizAnswers: [null, null, null, null, null],
  quizScore: 0,

  init: () => {
    StageController.init();

    // Render Market Props (Sack of Rice & Coins)
    const leftProp = document.getElementById('leftMarketPropContainer');
    if (leftProp && typeof Mascots.leftMarketPropSVG === 'function') {
      leftProp.innerHTML = Mascots.leftMarketPropSVG();
    }
    const rightCoin = document.getElementById('coinStackWrap');
    if (rightCoin && typeof Mascots.rightMarketPropSVG === 'function') {
      rightCoin.innerHTML = Mascots.rightMarketPropSVG();
    }

    // Render Glowing Marquee Bulbs
    const bulbsWrap = document.getElementById('marqueeBulbsContainer');
    if (bulbsWrap && typeof Mascots.renderMarqueeBulbs === 'function') {
      bulbsWrap.innerHTML = Mascots.renderMarqueeBulbs(28);
    }

    App.initAudio();
    App.updateHudStats();
    App.updateLeaderboardUI();
    App.updateMusicButtonUI();
    App.renderSlide(0, 'init');
  },

  addScore: (pts = 50) => {
    App.score += pts;
    App.xp += pts;
    if (App.xp >= App.maxXp) {
      App.level++;
      App.xp = App.xp - App.maxXp;
      App.maxXp += 250;
    }
    App.updateHudStats(true);
  },

  updateHudStats: (animate = false) => {
    const scoreVal = document.getElementById('hudScoreVal');
    if (scoreVal) {
      scoreVal.textContent = App.score;
      if (animate) {
        scoreVal.classList.remove('anim-celebrate');
        void scoreVal.offsetWidth;
        scoreVal.classList.add('anim-celebrate');
      }
    }

    const levelNum = document.getElementById('hudLevelNum');
    if (levelNum) levelNum.textContent = App.level;

    const xpText = document.getElementById('hudXpText');
    if (xpText) xpText.textContent = `${App.xp} / ${App.maxXp}`;

    const xpBar = document.getElementById('hudXpBar');
    if (xpBar) {
      const pct = Math.min(100, (App.xp / App.maxXp) * 100);
      xpBar.style.width = pct + '%';
    }
  },

  // 3D Perspective Slide Transition Handler
  renderSlide: (targetIdx, direction = 'next') => {
    if (targetIdx < 0 || targetIdx >= slides.length) return;
    if (App.isTransitioning && direction !== 'init') return;

    const canvas = document.getElementById('slideCanvas');
    if (!canvas) return;

    const oldSlideView = canvas.querySelector('.slide-view.active');
    const newSlideCfg = slides[targetIdx];
    App.currentSlideIdx = targetIdx;

    // Update Marquee Titles based on Slide
    App.updateMarqueeHeaders(newSlideCfg, targetIdx);

    // Create new slide container
    const newSlideView = document.createElement('div');
    newSlideView.className = 'slide-view';
    newSlideView.id = 'slide-' + newSlideCfg.id;
    newSlideView.innerHTML = newSlideCfg.render();

    if (direction === 'init') {
      canvas.innerHTML = '';
      newSlideView.classList.add('active');
      canvas.appendChild(newSlideView);
      if (typeof newSlideCfg.afterRender === 'function') {
        newSlideCfg.afterRender();
      }
      App.updateNavigationLabels(targetIdx);
      App.handleSlideAudio(newSlideCfg.id);
      return;
    }

    App.isTransitioning = true;
    App.handleSlideAudio(newSlideCfg.id);

    // I-pause ang anumang tumutugtog na bidyo bago lumipat ng slide
    if (oldSlideView) {
      oldSlideView.querySelectorAll('video').forEach(v => {
        try { v.pause(); } catch(e) {}
      });
    }

    // Position new slide for 3D entry
    if (direction === 'next') {
      newSlideView.classList.add('enter-next');
      if (oldSlideView) oldSlideView.classList.add('exit-left');
    } else {
      newSlideView.classList.add('enter-prev');
      if (oldSlideView) oldSlideView.classList.add('exit-right');
    }

    canvas.appendChild(newSlideView);
    void newSlideView.offsetWidth;

    newSlideView.classList.remove('enter-next', 'enter-prev');
    newSlideView.classList.add('active');

    setTimeout(() => {
      if (oldSlideView && oldSlideView.parentNode === canvas) {
        canvas.removeChild(oldSlideView);
      }
      if (typeof newSlideCfg.afterRender === 'function') {
        newSlideCfg.afterRender();
      }
      App.isTransitioning = false;
    }, 400);

    App.updateNavigationLabels(targetIdx);
  },

  updateMarqueeHeaders: (slideCfg, index) => {
    const titleEl = document.getElementById('marqueeTitle');
    const subtitleEl = document.getElementById('marqueeSubtitle');
    if (!titleEl || !subtitleEl) return;

    if (slideCfg.id === 'quiz') {
      titleEl.textContent = "PAGTATAYA SA ARALIN!";
      subtitleEl.textContent = "★ ★ PILIIN ANG TAMANG SAGOT! ★ ★";
    } else if (slideCfg.id.startsWith('analysis')) {
      titleEl.textContent = "PAGSUSURI SA ARALIN!";
      subtitleEl.textContent = "★ ★ MATALINONG PAGSUSURI NG MAG-AARAL ★ ★";
    } else if (slideCfg.id === 'motivation-game') {
      titleEl.textContent = "HAMON SA PAG-UURI NG PAMILIHAN!";
      subtitleEl.textContent = "★ ★ I-PANGKAT SA DALAWANG KOLUM ★ ★";
    } else if (slideCfg.id.startsWith('diff-')) {
      titleEl.textContent = "DIFFERENTIATED INSTRUCTION!";
      subtitleEl.textContent = "★ ★ PANGKATANG GAWAIN BAGO ANG TALAKAYAN ★ ★";
    } else if (slideCfg.id === 'abs-video') {
      titleEl.textContent = "BIDYO PAMPAGKATUTO!";
      subtitleEl.textContent = "★ ★ VIDEO CLIP PRESENTATION ★ ★";
    } else if (slideCfg.id === 'abs-perfect' || slideCfg.id === 'abs-imperfect') {
      titleEl.textContent = "IBA'T IBANG ESTRAKTURA NG PAMILIHAN";
      subtitleEl.textContent = "★ ★ ARALIN AT MGA KATANGIAN ★ ★";
    } else if (slideCfg.id === 'application' || slideCfg.id === 'rubric') {
      titleEl.textContent = "SURIIN AT ISADULA!";
      subtitleEl.textContent = "★ ★ PANGKATANG DULA-DULAAN AT RUBRIK ★ ★";
    } else {
      titleEl.textContent = slideCfg.nav.toUpperCase();
      subtitleEl.textContent = "★ ★ EKONOMIKS 9 · ARALING PANLIPUNAN ★ ★";
    }
  },

  updateNavigationLabels: (index) => {
    const total = slides.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const backLabel = document.getElementById('backPageLabel');
    const nextLabel = document.getElementById('nextPageLabel');

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;

    if (backLabel) backLabel.textContent = `(PAHINA ${Math.max(1, index)})`;
    if (nextLabel) nextLabel.textContent = `(PAHINA ${Math.min(total, index + 2)})`;

    // Update bottom stepper (1 to 5 mapping across major phases)
    let activeStep = 1;
    if (index >= 2 && index <= 7) activeStep = 1; // Panimula (Panalangin -> Layunin)
    else if (index >= 8 && index <= 9) activeStep = 2; // Aktibiti (Gawain sa Pag-uuri)
    else if (index >= 10 && index <= 13) activeStep = 3; // Pagsusuri (4 na Tanong)
    else if (index >= 14 && index <= 19) activeStep = 4; // Abstraction (Differentiated + Video + Estraktura)
    else if (index >= 20) activeStep = 5; // Paglalapat & Pagtataya

    for (let i = 1; i <= 5; i++) {
      const node = document.getElementById(`stepNode-${i}`);
      if (node) {
        node.className = 'step-node';
        if (i === activeStep) node.classList.add('active');
        else if (i < activeStep) node.classList.add('done');
      }
    }
  },

  nextSlide: () => {
    if (App.currentSlideIdx < slides.length - 1) {
      App.renderSlide(App.currentSlideIdx + 1, 'next');
    }
  },

  prevSlide: () => {
    if (App.currentSlideIdx > 0) {
      App.renderSlide(App.currentSlideIdx - 1, 'prev');
    }
  },

  jumpToId: (slideId) => {
    const idx = slides.findIndex(s => s.id === slideId);
    if (idx !== -1) {
      const dir = idx >= App.currentSlideIdx ? 'next' : 'prev';
      App.renderSlide(idx, dir);
    } else {
      console.warn(`Slide ID "${slideId}" not found`);
    }
  },

  // Group Leaderboard Dynamic Updates
  updateLeaderboardUI: () => {
    [1, 2, 3, 4].forEach(num => {
      const el = document.getElementById(`lbScore${num}`);
      if (el) {
        el.textContent = App.groupScores[num];
        el.classList.remove('anim-celebrate');
        void el.offsetWidth;
        el.classList.add('anim-celebrate');
      }
    });
  },

  // Quick Attendance Logic (Single-Tap & 1-Click System)
  setGroupAttendance: (groupNum, count) => {
    App.attendanceTally[groupNum] = count;
    App.updateAttendanceCardUI(groupNum);
    App.updateAttendanceSummaryUI();
  },

  updateAttendance: (groupNum, delta) => {
    const current = App.attendanceTally[groupNum] || 0;
    App.setGroupAttendance(groupNum, Math.max(0, current + delta));
  },

  updateAttendanceCardUI: (groupNum) => {
    const card = document.getElementById(`attCard-${groupNum}`);
    const pill = document.getElementById(`attStatus-${groupNum}`);
    if (!pill || !card) return;

    const absCount = App.attendanceTally[groupNum] || 0;
    const isComplete = absCount === 0;

    pill.className = 'att-status-pill ' + (isComplete ? 'complete' : (absCount === 1 ? 'absent' : 'warning'));
    pill.textContent = isComplete ? '✅ KOMPLETO (100%)' : (absCount === 1 ? '⚠️ 1 Lumiban' : `⚠️ ${absCount} Lumiban`);

    // Update active chip classes
    const chips = card.querySelectorAll('.att-chip');
    if (chips.length >= 3) {
      chips[0].className = 'att-chip' + (absCount === 0 ? ' active-complete' : '');
      chips[1].className = 'att-chip' + (absCount === 1 ? ' active-absent' : '');
      chips[2].className = 'att-chip' + (absCount >= 2 ? ' active-warning' : '');
    }
  },

  markAllPresent: () => {
    [1, 2, 3, 4].forEach(g => {
      App.attendanceTally[g] = 0;
      App.updateAttendanceCardUI(g);
    });
    App.attendanceConfirmed = true;
    App.addScore(50);
    // Award +50 bonus to all 4 groups on leaderboard
    [1, 2, 3, 4].forEach(g => {
      App.groupScores[g] = (App.groupScores[g] || 200) + 50;
    });
    App.updateLeaderboardUI();
    App.updateAttendanceSummaryUI();

    // Visual celebration animation on summary banner
    const summary = document.getElementById('attSummaryText');
    if (summary) {
      summary.classList.remove('anim-celebrate');
      void summary.offsetWidth;
      summary.classList.add('anim-celebrate');
    }
  },

  confirmAttendance: () => {
    App.attendanceConfirmed = true;
    const totalAbsent = Object.values(App.attendanceTally).reduce((a, b) => a + b, 0);
    if (totalAbsent === 0) {
      App.addScore(50);
      [1, 2, 3, 4].forEach(g => {
        App.groupScores[g] = (App.groupScores[g] || 200) + 50;
      });
      App.updateLeaderboardUI();
    } else {
      App.addScore(25);
    }
    App.updateAttendanceSummaryUI();
  },

  resetAttendance: () => {
    [1, 2, 3, 4].forEach(g => {
      App.attendanceTally[g] = 0;
      App.updateAttendanceCardUI(g);
    });
    App.attendanceConfirmed = false;
    App.updateAttendanceSummaryUI();
  },

  getAttendanceSummaryHTML: () => {
    const totalAbsent = Object.values(App.attendanceTally).reduce((a, b) => a + b, 0);
    const completeCount = [1, 2, 3, 4].filter(g => (App.attendanceTally[g] || 0) === 0).length;

    if (totalAbsent === 0) {
      return `<span style="color:#4ADE80; font-size:18px;">🌟</span> <span><b>100% PAGDALO:</b> Lahat ng 4 na Pangkat ay Kompleto! (+50 Karagdagang XP)</span>`;
    } else {
      return `<span style="color:#FBBF24; font-size:18px;">📋</span> <span><b>TALAAN:</b> ${completeCount} sa 4 na Pangkat ang Kompleto · May kabuuang <b>${totalAbsent} lumiban</b>.</span>`;
    }
  },

  updateAttendanceSummaryUI: () => {
    const summary = document.getElementById('attSummaryText');
    if (summary) {
      summary.innerHTML = App.getAttendanceSummaryHTML();
    }
  },

  // Balik-Aral Reveal Logic
  revealReview: () => {
    const prompt = document.getElementById('reviewPrompt');
    const ans = document.getElementById('reviewAnswer');
    if (prompt && ans) {
      prompt.style.display = 'none';
      ans.style.display = 'block';
      App.addScore(25);
    }
  },

  // 3D Flip Card Toggle
  toggleCardFlip: (structureId) => {
    const card = document.getElementById('card-' + structureId);
    if (card) {
      card.classList.toggle('flipped');
    }
  },

  // Roleplay Envelopes Reveal
  openRoleEnvelope: (idx) => {
    const status = document.getElementById('envStatus-' + idx);
    const scenario = document.getElementById('envScenario-' + idx);
    const card = document.getElementById('envCard-' + idx);
    if (status && scenario && card) {
      status.style.display = 'none';
      scenario.style.display = 'block';
      card.style.background = 'linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)';
      card.style.borderColor = '#F59E0B';
      card.style.boxShadow = '0 0 18px rgba(251, 191, 36, 0.45), 0 8px 22px rgba(0, 0, 0, 0.25)';
      App.addScore(20);
      App.playSfx('correct');
      App.ensureGameMusicPlaying('application');
    }
  },

  resetEnvelopes: () => {
    lessonData.rolePlayGroups.forEach((_, idx) => {
      const status = document.getElementById('envStatus-' + idx);
      const scenario = document.getElementById('envScenario-' + idx);
      const card = document.getElementById('envCard-' + idx);
      if (status && scenario && card) {
        status.style.display = 'block';
        scenario.style.display = 'none';
        card.style.background = 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)';
        card.style.borderColor = '#CBD5E1';
        card.style.boxShadow = '0 5px 0 #94A3B8, 0 8px 18px rgba(0, 0, 0, 0.2)';
      }
    });
  },

  // Interactive Analysis Question Handlers
  handleAnalysisChoice: (qIdx, choiceIdx) => {
    const item = lessonData.analysisQuestions[qIdx];
    App.analysisAnswered[qIdx] = true;
    App.analysisPicks[qIdx] = choiceIdx;

    const isBest = choiceIdx === item.bestIndex;
    if (isBest) {
      App.addScore(50);
      App.playSfx('correct');
    } else {
      App.playSfx('wrong');
    }

    item.choices.forEach((_, cIdx) => {
      const btn = document.getElementById(`anBtn-${qIdx}-${cIdx}`);
      if (btn) {
        btn.disabled = true;
        if (cIdx === item.bestIndex) {
          btn.classList.add('best-pick');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✓</span>`;
        }
        if (cIdx === choiceIdx && choiceIdx !== item.bestIndex) {
          btn.classList.add('wrong');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✕</span>`;
        }
      }
    });

    const fb = document.getElementById('anFeedback-' + qIdx);
    if (fb) {
      fb.innerHTML = `
        <div class="anim-fade-up ${isBest ? 'anim-celebrate' : 'anim-shake'}" style="padding:12px 18px; border-radius:10px; background:${isBest ? 'rgba(20, 83, 45, 0.95)' : 'rgba(120, 53, 15, 0.95)'}; border:2px solid ${isBest ? '#22C55E' : '#F59E0B'}; box-shadow:0 0 16px ${isBest ? 'rgba(34, 197, 94, 0.6)' : 'rgba(245, 158, 11, 0.6)'};">
          <div style="font-family:'Space Grotesk',sans-serif; font-weight:900; font-size:18px; color:${isBest ? '#86EFAC' : '#FDE047'}; margin-bottom:4px;">
            ${isBest ? '🎉 Pinakamalapit sa tamang pagsusuri ✓ (+50 PUNTOS!)' : '💡 Pagpapalalim ng Guro sa Talakayan:'}
          </div>
          <p style="font-size:17px; font-weight:800; line-height:1.45; color:#FFFFFF; margin:0;">
            ${item.insight}
          </p>
          <div style="margin-top:10px;">
            ${qIdx < lessonData.analysisQuestions.length - 1 
              ? `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.nextSlide()">Susunod na Tanong (Tanong ${qIdx + 2}) ➔</button>`
              : `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.jumpToId('diff-pangkat1')">Tumuloy sa Pangkatang Gawain (Differentiated Tasks) ➔</button>`
            }
          </div>
        </div>`;
    }
  },

  renderAnalysisSlideState: (qIdx) => {
    if (!App.analysisAnswered[qIdx]) return;
    const item = lessonData.analysisQuestions[qIdx];
    const picked = App.analysisPicks[qIdx];
    const isBest = picked === item.bestIndex;

    item.choices.forEach((_, cIdx) => {
      const btn = document.getElementById(`anBtn-${qIdx}-${cIdx}`);
      if (btn) {
        btn.disabled = true;
        if (cIdx === item.bestIndex) {
          btn.classList.add('best-pick');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✓</span>`;
        }
        if (cIdx === picked && picked !== item.bestIndex) {
          btn.classList.add('wrong');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✕</span>`;
        }
      }
    });

    const fb = document.getElementById('anFeedback-' + qIdx);
    if (fb && !fb.innerHTML.trim()) {
      fb.innerHTML = `
        <div class="anim-fade-up" style="padding:12px 18px; border-radius:10px; background:${isBest ? 'rgba(20, 83, 45, 0.95)' : 'rgba(120, 53, 15, 0.95)'}; border:2px solid ${isBest ? '#22C55E' : '#F59E0B'};">
          <div style="font-family:'Space Grotesk',sans-serif; font-weight:900; font-size:18px; color:${isBest ? '#86EFAC' : '#FDE047'}; margin-bottom:4px;">
            ${isBest ? '🎉 Pinakamalapit sa tamang pagsusuri ✓' : '💡 Pagpapalalim ng Guro sa Talakayan:'}
          </div>
          <p style="font-size:17px; font-weight:800; line-height:1.45; color:#FFFFFF; margin:0;">
            ${item.insight}
          </p>
          <div style="margin-top:10px;">
            ${qIdx < lessonData.analysisQuestions.length - 1 
              ? `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.nextSlide()">Susunod na Tanong (Tanong ${qIdx + 2}) ➔</button>`
              : `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.jumpToId('diff-pangkat1')">Tumuloy sa Pangkatang Gawain (Differentiated Tasks) ➔</button>`
            }
          </div>
        </div>`;
    }
  },

  // ============================================================
  // DIFFERENTIATED INSTRUCTION CONTROLLERS (PANGKAT 1, 2, 3)
  // ============================================================
  
  // Pangkat 1: Picture Card Matching (4 Columns)
  selectDiffP1Card: (cardId) => {
    App.diffP1SelectedCard = cardId;
    document.querySelectorAll('.p1-card-chip').forEach(c => {
      if (c.dataset.id === cardId) c.classList.add('selected');
      else c.classList.remove('selected');
    });
  },

  placeDiffP1: (structId) => {
    if (!App.diffP1SelectedCard) return;
    const card = lessonData.diffPangkat1.cards.find(c => c.id === App.diffP1SelectedCard);
    if (!card) return;

    const chip = document.getElementById('p1chip-' + card.id);
    if (!chip || chip.classList.contains('placed')) return;

    chip.classList.add('placed');
    chip.classList.remove('selected');

    const targetZone = document.getElementById('p1items-' + structId);
    if (targetZone) {
      const isCorrect = card.correct === structId;
      if (isCorrect) {
        App.addScore(25);
        App.playSfx('correct');
      } else {
        App.playSfx('wrong');
      }
      const itemEl = document.createElement('div');
      itemEl.className = 'diff-placed-card ' + (isCorrect ? 'correct' : 'wrong');
      itemEl.innerHTML = `<span>${card.label}</span> <span>${isCorrect ? '✓' : '✕ (Iwasto)'}</span>`;
      targetZone.appendChild(itemEl);

      App.diffP1PlacedCount++;
      const total = lessonData.diffPangkat1.cards.length;
      const countEl = document.getElementById('p1RemainingCount');
      if (countEl) countEl.textContent = `Natitira: ${total - App.diffP1PlacedCount} / ${total}`;

      if (App.diffP1PlacedCount >= total) {
        const banner = document.getElementById('p1DoneBanner');
        if (banner) banner.style.display = 'block';
        App.addScore(50);
      }
    }
    App.diffP1SelectedCard = null;
  },

  resetDiffP1: () => {
    App.diffP1SelectedCard = null;
    App.diffP1PlacedCount = 0;
    document.querySelectorAll('.p1-card-chip').forEach(c => {
      c.classList.remove('placed', 'selected');
      c.style.display = 'flex';
    });
    ['monopolyo', 'monopsonyo', 'oligopolyo', 'monopolistic'].forEach(s => {
      const z = document.getElementById('p1items-' + s);
      if (z) z.innerHTML = '';
    });
    const countEl = document.getElementById('p1RemainingCount');
    if (countEl) countEl.textContent = `Natitira: 5 / 5`;
    const banner = document.getElementById('p1DoneBanner');
    if (banner) banner.style.display = 'none';
  },

  // Pangkat 2: Characteristic Matching (4 Columns)
  selectDiffP2Stmt: (stmtId) => {
    App.diffP2SelectedStmt = stmtId;
    document.querySelectorAll('.p2-stmt-chip').forEach(c => {
      if (c.dataset.id === stmtId) c.classList.add('selected');
      else c.classList.remove('selected');
    });
  },

  placeDiffP2: (structId) => {
    if (!App.diffP2SelectedStmt) return;
    const stmt = lessonData.diffPangkat2.statements.find(s => s.id === App.diffP2SelectedStmt);
    if (!stmt) return;

    const chip = document.getElementById('p2chip-' + stmt.id);
    if (!chip || chip.classList.contains('placed')) return;

    chip.classList.add('placed');
    chip.classList.remove('selected');

    const targetZone = document.getElementById('p2items-' + structId);
    if (targetZone) {
      const isCorrect = stmt.correct === structId;
      if (isCorrect) {
        App.addScore(25);
        App.playSfx('correct');
      } else {
        App.playSfx('wrong');
      }
      const itemEl = document.createElement('div');
      itemEl.className = 'diff-placed-card ' + (isCorrect ? 'correct' : 'wrong');
      itemEl.innerHTML = `<span>${stmt.text}</span> <span>${isCorrect ? '✓' : '✕ (Iwasto)'}</span>`;
      targetZone.appendChild(itemEl);

      App.diffP2PlacedCount++;
      const total = lessonData.diffPangkat2.statements.length;
      const countEl = document.getElementById('p2RemainingCount');
      if (countEl) countEl.textContent = `Natitira: ${total - App.diffP2PlacedCount} / ${total}`;

      if (App.diffP2PlacedCount >= total) {
        const banner = document.getElementById('p2DoneBanner');
        if (banner) banner.style.display = 'block';
        App.addScore(50);
      }
    }
    App.diffP2SelectedStmt = null;
  },

  resetDiffP2: () => {
    App.diffP2SelectedStmt = null;
    App.diffP2PlacedCount = 0;
    document.querySelectorAll('.p2-stmt-chip').forEach(c => {
      c.classList.remove('placed', 'selected');
      c.style.display = 'flex';
    });
    ['monopolyo', 'monopsonyo', 'oligopolyo', 'monopolistic'].forEach(s => {
      const z = document.getElementById('p2items-' + s);
      if (z) z.innerHTML = '';
    });
    const countEl = document.getElementById('p2RemainingCount');
    if (countEl) countEl.textContent = `Natitira: 4 / 4`;
    const banner = document.getElementById('p2DoneBanner');
    if (banner) banner.style.display = 'none';
  },

  // Pangkat 3: Manila Paper Q&A (Petron/Shell/Caltex Scenario)
  revealDiffP3: (idx) => {
    App.diffP3Revealed[idx] = true;
    const ansBox = document.getElementById(`p3ans-${idx}`);
    const btn = document.getElementById(`p3btn-${idx}`);
    const qBox = document.getElementById(`p3qbox-${idx}`);
    if (ansBox && btn) {
      btn.style.display = 'none';
      ansBox.style.display = 'block';
      if (qBox) qBox.classList.add('active-reveal');
      App.addScore(25);
      App.playSfx('correct');
    }
  },

  resetDiffP3: () => {
    App.diffP3Revealed = [false, false, false];
    [0, 1, 2].forEach(idx => {
      const ansBox = document.getElementById(`p3ans-${idx}`);
      const btn = document.getElementById(`p3btn-${idx}`);
      const qBox = document.getElementById(`p3qbox-${idx}`);
      if (ansBox) ansBox.style.display = 'none';
      if (btn) btn.style.display = 'inline-block';
      if (qBox) qBox.classList.remove('active-reveal');
    });
  },

  // Student-Created Rubric Points Controller
  adjustRubricPts: (key, delta) => {
    const current = App.studentRubricPoints[key] || 5;
    const nextVal = Math.max(1, Math.min(20, current + delta));
    App.studentRubricPoints[key] = nextVal;
    const ptsEl = document.getElementById('rubricPts-' + key);
    if (ptsEl) ptsEl.textContent = nextVal + ' pts';
    App.updateRubricTotal();
  },

  updateRubricTotal: () => {
    const total = Object.values(App.studentRubricPoints).reduce((a, b) => a + b, 0);
    const totEl = document.getElementById('rubricTotalPts');
    if (totEl) totEl.textContent = `${total} puntos`;
  },

  // Interactive Quiz Handlers (Verbatim Question Rendering & Scoring)
  renderQuizQuestion: (qIdx) => {
    App.quizCurrentIndex = qIdx;
    const q = lessonData.quizQuestions[qIdx];
    const qText = document.getElementById('quizQuestionText');
    const cWrap = document.getElementById('quizChoicesWrap');
    const fbBox = document.getElementById('quizFeedbackBox');
    const sumBox = document.getElementById('quizSummaryBox');

    if (!qText || !cWrap) return;

    if (sumBox) sumBox.style.display = 'none';
    if (fbBox) {
      fbBox.style.display = 'block';
      fbBox.innerHTML = '';
    }

    qText.textContent = q.q;

    // Update 5 Quest Cards states (Matching reference image)
    for (let i = 0; i < 5; i++) {
      const cardEl = document.getElementById(`qcard-${i}`);
      const lockEl = document.getElementById(`qlock-${i}`);
      if (cardEl) {
        if (i === qIdx) cardEl.classList.add('active-quest');
        else cardEl.classList.remove('active-quest');
      }
      if (lockEl) {
        const isAns = App.quizAnswers[i] !== null;
        if (isAns) {
          const isCorr = App.quizAnswers[i] === lessonData.quizQuestions[i].correct;
          lockEl.className = 'quest-lock-pill unlocked';
          lockEl.style.background = isCorr ? 'linear-gradient(135deg, #16A34A, #15803D)' : 'linear-gradient(135deg, #DC2626, #991B1B)';
          lockEl.style.color = '#FFFFFF';
          lockEl.innerHTML = `<span>${isCorr ? '✓' : '✕'}</span> <span>${isCorr ? 'TAMA' : 'MALI'}</span>`;
        } else {
          lockEl.className = 'quest-lock-pill';
          lockEl.style.background = '#334155';
          lockEl.style.color = '#94A3B8';
          lockEl.innerHTML = `<span>🔒</span>`;
        }
      }
    }

    const answered = App.quizAnswers[qIdx] !== null;
    const pickedIdx = App.quizAnswers[qIdx];

    cWrap.innerHTML = q.choices.map((ch, cIdx) => {
      let extraClass = '';
      let mark = '';
      if (answered) {
        if (cIdx === q.correct) {
          extraClass = 'correct';
          mark = '✓';
        } else if (cIdx === pickedIdx) {
          extraClass = 'wrong';
          mark = '✕';
        }
      }
      return `
        <button class="arcade-choice-btn ${extraClass}" id="quizBtn-${cIdx}" ${answered ? 'disabled' : ''} onclick="App.handleQuizChoice(${cIdx})">
          <span>${ch}</span>
          ${mark ? `<span style="font-weight:900; font-size:18px;">${mark}</span>` : ''}
        </button>
      `;
    }).join('');

    if (answered && fbBox) {
      const isCorrect = pickedIdx === q.correct;
      fbBox.innerHTML = `
        <div class="anim-fade-up" style="padding:8px 14px; border-radius:8px; background:${isCorrect ? 'rgba(20, 83, 45, 0.95)' : 'rgba(127, 29, 29, 0.95)'}; border:2px solid ${isCorrect ? '#22C55E' : '#EF4444'}; box-shadow:0 0 14px ${isCorrect ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'};">
          <div style="font-weight:900; font-size:14.5px; color:${isCorrect ? '#86EFAC' : '#FCA5A5'}; margin-bottom:2px;">
            ${isCorrect ? '✓ TAMA ANG SAGOT! (+50 PUNTOS!)' : '✕ MALI ANG SAGOT!'}
          </div>
          <p style="font-size:13.5px; font-weight:700; color:#F8FAFC; margin:0;">
            ${q.explanation}
          </p>
          <div style="margin-top:6px;">
            ${qIdx < lessonData.quizQuestions.length - 1 
              ? `<button class="btn-arcade-gold" style="font-size:12px; padding:4px 16px;" onclick="App.renderQuizQuestion(${qIdx + 1})">Susunod na Tanong ➔</button>`
              : `<button class="btn-arcade-gold" style="font-size:12px; padding:4px 16px;" onclick="App.showQuizSummary()">Tingnan ang Resulta ➔</button>`
            }
          </div>
        </div>
      `;
    }
  },

  handleQuizChoice: (choiceIdx) => {
    const qIdx = App.quizCurrentIndex;
    const q = lessonData.quizQuestions[qIdx];
    App.quizAnswers[qIdx] = choiceIdx;

    if (choiceIdx === q.correct) {
      App.quizScore++;
      App.addScore(50);
      App.playSfx('correct');
    } else {
      App.playSfx('wrong');
    }

    App.ensureGameMusicPlaying('quiz');
    App.renderQuizQuestion(qIdx);
  },

  showQuizSummary: () => {
    const fbBox = document.getElementById('quizFeedbackBox');
    const sumBox = document.getElementById('quizSummaryBox');
    const cWrap = document.getElementById('quizChoicesWrap');
    const qText = document.getElementById('quizQuestionText');

    if (fbBox) fbBox.style.display = 'none';
    if (cWrap) cWrap.innerHTML = '';
    if (qText) qText.textContent = 'Pagtataya: Resulta ng Pagsusulit';

    if (sumBox) {
      sumBox.style.display = 'block';
      const pct = (App.quizScore / lessonData.quizQuestions.length) * 100;
      sumBox.innerHTML = `
        <div class="anim-fade-up anim-celebrate">
          <h2 style="font-family:'Bungee',sans-serif; font-size:26px; color:#FDE047; text-shadow:0 0 16px rgba(253, 224, 71, 0.7); margin-bottom:4px;">
            KABUUANG ISKOR: ${App.quizScore} / ${lessonData.quizQuestions.length} (${pct}%)
          </h2>
          <p style="font-size:16px; font-weight:800; color:#F8FAFC; margin-bottom:12px;">
            ${App.quizScore >= 4 ? '🎉 Napakahusay! Nakamit mo ang Medalya ng Henyo sa Pagsusulit!' : '💡 Magaling! Pagbalik-aralan ang mga katangian ng bawat estraktura.'}
          </p>
          <div style="display:flex; justify-content:center; gap:14px;">
            <button class="btn-arcade-blue" style="font-size:12px; padding:6px 18px;" onclick="App.resetQuiz()">🔄 Ulitin ang Pagsusulit</button>
            <button class="btn-arcade-gold" style="font-size:12px; padding:6px 18px;" onclick="App.jumpToId('assignment')">Tumuloy sa Takdang-Aralin ➔</button>
          </div>
        </div>
      `;
    }
  },

  resetQuiz: () => {
    App.quizCurrentIndex = 0;
    App.quizAnswers = [null, null, null, null, null];
    App.quizScore = 0;
    App.renderQuizQuestion(0);
  },

  // ============================================================
  // BACKGROUND MUSIC & SFX CONTROLLER (INTERACTIVE GAMES ONLY)
  // ============================================================
  audioCtx: null,

  initAudio: () => {
    const bgm1 = document.getElementById('gameBgmAudio');
    const bgm2 = document.getElementById('gameBgmQuizAudio');
    const sfx = document.getElementById('gameSfxAudio');
    const wrong = document.getElementById('gameWrongAudio');
    if (bgm1) bgm1.volume = 0.65;
    if (bgm2) bgm2.volume = 0.65;
    if (sfx) sfx.volume = 0.85;
    if (wrong) wrong.volume = 0.75;
  },

  isGameSlide: (slideId) => {
    // Tanging ang interactive games at activities lamang ang may masiglang musika
    return slideId === 'motivation-intro' || 
           slideId === 'motivation-game' || 
           (slideId && slideId.startsWith('diff-')) ||
           slideId === 'application' || 
           slideId === 'quiz';
  },

  synthSfx: (type) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!App.audioCtx) App.audioCtx = new AudioCtx();
      if (App.audioCtx.state === 'suspended') {
        App.audioCtx.resume();
      }
      const ctx = App.audioCtx;
      const now = ctx.currentTime;

      if (type === 'wrong') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.22);
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.24);
      } else {
        // Bright sparkling victory chime (C6, E6, G6, C7)
        const notes = [1046.5, 1318.5, 1567.98, 2093.0];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.05);
          gain.gain.setValueAtTime(0.22, now + idx * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.05);
          osc.stop(now + idx * 0.05 + 0.38);
        });
      }
    } catch (e) {}
  },

  playSfx: (type = 'correct') => {
    if (App.isMusicMuted) return;
    const targetAudio = type === 'wrong' 
      ? document.getElementById('gameWrongAudio') 
      : document.getElementById('gameSfxAudio');

    if (targetAudio && typeof targetAudio.play === 'function') {
      try {
        targetAudio.currentTime = 0;
        const p = targetAudio.play();
        if (p !== undefined) {
          p.catch(() => {
            App.synthSfx(type);
          });
        }
      } catch (e) {
        App.synthSfx(type);
      }
    } else {
      App.synthSfx(type);
    }
  },

  handleSlideAudio: (slideId) => {
    if (App.isGameSlide(slideId)) {
      if (!App.isMusicMuted) {
        App.playGameMusic(slideId);
      }
    } else {
      App.stopGameMusic();
    }
    App.updateMusicButtonUI();
  },

  playGameMusic: (slideId) => {
    if (App.isMusicMuted) return;
    const targetAudioId = slideId === 'quiz' ? 'gameBgmQuizAudio' : 'gameBgmAudio';
    const otherAudioId = slideId === 'quiz' ? 'gameBgmAudio' : 'gameBgmQuizAudio';

    // Itigil ang kabilang track kung tumutugtog
    const otherAudio = document.getElementById(otherAudioId);
    if (otherAudio && !otherAudio.paused) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
    }

    const audio = document.getElementById(targetAudioId) || document.getElementById('gameBgmAudio');
    if (!audio) return;
    if (App.fadeInterval) clearInterval(App.fadeInterval);

    if (typeof audio.play !== 'function') return;

    audio.volume = 0.65;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        App.updateMusicButtonUI();
      }).catch(err => {
        console.log('Autoplay: magpe-play sa unang pagkilos ng user.');
        const startOnUserAction = () => {
          if (!App.isMusicMuted && App.isGameSlide(slides[App.currentSlideIdx]?.id)) {
            audio.play().catch(() => {});
            App.updateMusicButtonUI();
          }
          window.removeEventListener('pointerdown', startOnUserAction);
          window.removeEventListener('keydown', startOnUserAction);
        };
        window.addEventListener('pointerdown', startOnUserAction, { once: true });
        window.addEventListener('keydown', startOnUserAction, { once: true });
      });
    }
  },

  ensureGameMusicPlaying: (slideId) => {
    if (App.isMusicMuted) return;
    const targetAudioId = slideId === 'quiz' ? 'gameBgmQuizAudio' : 'gameBgmAudio';
    const audio = document.getElementById(targetAudioId);
    if (audio && audio.paused) {
      audio.volume = 0.65;
      audio.play().catch(() => {});
      App.updateMusicButtonUI();
    }
  },

  stopGameMusic: () => {
    const audios = [
      document.getElementById('gameBgmAudio'),
      document.getElementById('gameBgmQuizAudio')
    ].filter(Boolean);

    if (App.fadeInterval) clearInterval(App.fadeInterval);

    audios.forEach(audio => {
      if (audio.paused) return;
      if (typeof audio.pause !== 'function') return;

      let vol = audio.volume;
      if (vol <= 0.05) {
        audio.pause();
        audio.currentTime = 0;
        return;
      }

      App.fadeInterval = setInterval(() => {
        vol = Math.max(0, +(vol - 0.1).toFixed(2));
        if (audio) audio.volume = vol;
        if (vol <= 0) {
          clearInterval(App.fadeInterval);
          if (audio) {
            audio.pause();
            audio.currentTime = 0;
          }
        }
      }, 40);
    });
  },

  toggleMusic: () => {
    App.isMusicMuted = !App.isMusicMuted;
    const currentSlide = slides[App.currentSlideIdx];
    if (App.isMusicMuted) {
      App.stopGameMusic();
    } else {
      if (currentSlide && App.isGameSlide(currentSlide.id)) {
        App.playGameMusic(currentSlide.id);
      }
    }
    App.updateMusicButtonUI();
  },

  updateMusicButtonUI: () => {
    const btn = document.getElementById('musicToggleBtn');
    const icon = document.getElementById('musicToggleIcon');
    const label = document.getElementById('musicToggleLabel');
    if (!btn || !icon || !label) return;

    const currentSlide = slides[App.currentSlideIdx];
    const isGame = currentSlide && App.isGameSlide(currentSlide.id);

    if (App.isMusicMuted) {
      btn.className = 'hud-btn-music is-muted';
      icon.textContent = '🔇';
      label.textContent = 'WALANG TUGTOG';
      btn.title = 'Naka-mute ang musika (Pindutin o pindutin ang M para I-on)';
    } else {
      btn.className = 'hud-btn-music' + (isGame ? ' is-playing' : '');
      icon.textContent = '🎵';
      label.textContent = isGame ? 'TUMUTUGTOG' : 'MUSIKA';
      btn.title = isGame ? 'Tumutugtog ang musika sa laro (Pindutin o M para I-mute)' : 'Naka-on ang musika para sa laro (Pindutin o M para I-mute)';
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
