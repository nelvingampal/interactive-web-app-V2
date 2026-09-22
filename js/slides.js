/* ============================================================
   SLIDE DEFINITIONS & RENDERERS (25 SLIDES — ZERO SCROLL)
   DepEd Grade 9 Araling Panlipunan: Iba't Ibang Estraktura ng Pamilihan
   Revised Daily Lesson Plan (DLP) Version
   Includes Filipino Mascots (Aling Nena & Kuya Juan)
   Section-Specific Theme Assignment & 16:9 Optimizations
   ============================================================ */

const slides = [];
function registerSlide(cfg) {
  slides.push(cfg);
}

/* 1. TITLE & KAGAMITAN */
registerSlide({
  id: "title",
  nav: "Pamagat at Kagamitan",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="background:var(--market-red); color:#FFF; padding:18px 36px; border-radius:16px; border:4px solid var(--market-yellow); box-shadow:0 10px 30px rgba(0,0,0,0.25); max-width:960px; width:100%; margin-bottom:16px;">
        <div style="font-family:'Space Grotesk',sans-serif; font-size:14.5px; font-weight:800; color:var(--market-yellow); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:6px;">
          KAGAWARAN NG EDUKASYON · ARALING PANLIPUNAN 9 (EKONOMIKS)
        </div>
        <h1 style="font-family:'Bungee',Impact,sans-serif; font-size:35px; line-height:1.2; margin-bottom:6px;">
          IBA'T IBANG ESTRAKTURA NG PAMILIHAN
        </h1>
        <div style="font-size:16.5px; font-weight:800; color:#FEF08A;">
          MELC: AP9MYK-IHe-11 · Ikalawang Markahan
        </div>
      </div>

      <!-- Mascots Welcoming the Class -->
      <div class="anim-fade-up stagger-2" style="display:flex; align-items:center; justify-content:center; gap:36px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:12px;">
          ${Mascots.alingNena('default', 95)}
          ${Mascots.speechBubble('Maligayang pagdating sa ating talakayan sa iba\'t ibang estraktura ng pamilihan!', 'left', 'yellow')}
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          ${Mascots.speechBubble('Handa na ba tayong mag-aral ng presyo, katunggali, at kumpetisyon?', 'right', 'green')}
          ${Mascots.kuyaJuan('default', 95)}
        </div>
      </div>

      <!-- Kagamitan at Sanggunian -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:1fr 1fr; gap:18px; width:100%; max-width:960px; text-align:left;">
        <div class="meta-card yellow" style="padding:14px 18px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:17px; color:var(--market-red); margin-bottom:4px;">
            📦 Mga Kagamitan:
          </h3>
          <p style="font-size:15.5px; font-weight:700; line-height:1.45;">
            PowerPoint / Interactive Presentation, mga larawan/logo ng produkto at kumpanya, <b>manila paper</b>, <b>marker</b>, at <b>meta-cards</b>.
          </p>
        </div>
        <div class="meta-card green" style="padding:14px 18px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:17px; color:var(--market-green); margin-bottom:4px;">
            📚 Sanggunian:
          </h3>
          <p style="font-size:15.5px; font-weight:700; line-height:1.45;">
            <b>Ekonomiks 9</b> (Modyul ng Mag-aaral sa Araling Panlipunan), K-12 Most Essential Learning Competencies (MELCs) AP9.
          </p>
        </div>
      </div>

      <div class="anim-fade-up stagger-4" style="margin-top:16px;">
        <button class="btn primary" style="font-size:17px; padding:10px 32px;" onclick="App.jumpToId('menu')">
          Simulan ang Aralin ➔
        </button>
      </div>
    </div>`
});

/* 2. HOME MENU */
registerSlide({
  id: "menu",
  nav: "Talaan ng Aralin (Pangunahing Talaan)",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-shrink:0;">
        <h2 class="slide-h2" style="font-size:22px; margin-bottom:0;">Talaan ng Nilalaman at Daloy ng Aralin (4A's)</h2>
        <span class="cue-badge gold" style="margin-bottom:0; font-size:11px; padding:3px 10px;">Pindutin ang bahaging nais talakayin</span>
      </div>

      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; flex:1; min-height:0;">
        <button class="meta-card yellow" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('prayer')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#78350F; color:#FEF08A; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">PANIMULA</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#991B1B; margin-bottom:2px;">📜 1. Panalangin at Pagbati</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Panalangin, masiglang pagbati, at pagtala ng liban.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#B45309;">Pumunta ➔</span>
        </button>

        <button class="meta-card green" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('rules')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#14532D; color:#BBF7D0; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">PANIMULA</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#166534; margin-bottom:2px;">📋 2. Alituntunin sa Silid</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Mga alituntunin sa loob ng silid-aralan.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#15803D;">Pumunta ➔</span>
        </button>

        <button class="meta-card white" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('review')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#0F172A; color:#94A3B8; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">BALIK-ARAL</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#0F172A; margin-bottom:2px;">⚖️ 3. Demand at Supply</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Interaksyon ng mamimili at nagtitinda sa presyo.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#C5221F;">Pumunta ➔</span>
        </button>

        <button class="meta-card pink" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('motivation-intro')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#881337; color:#FECDD3; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: GAWAIN</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#9F1239; margin-bottom:2px;">🧺 4. "Saan Sila Nabibilang?"</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">2 Kolum: Dami ng Nagtitinda at Katunggali.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#BE123C;">Pumunta ➔</span>
        </button>

        <button class="meta-card blue" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('analysis-0')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#0C4A6E; color:#BAE6FD; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: PAGSUSURI</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#0369A1; margin-bottom:2px;">💻 5. Pagsusuri (4 na Tanong)</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Pangkatang pagsusuri gamit ang laptop at 'Bakit?'.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#0284C7;">Pumunta ➔</span>
        </button>

        <button class="meta-card yellow" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('diff-pangkat1')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#78350F; color:#FEF08A; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">DIFFERENTIATED</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#991B1B; margin-bottom:2px;">👥 6. Differentiated Tasks</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Gawain ng Pangkat 1, 2, at 3 bago magtalakay.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#B45309;">Pumunta ➔</span>
        </button>

        <button class="meta-card green" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('abs-perfect')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#14532D; color:#BBF7D0; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: TALAKAYAN</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#166534; margin-bottom:2px;">🏛️ 7. Estraktura ng Pamilihan</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Ganap at Hindi Ganap na Kompetisyon (Video Clip).</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#15803D;">Pumunta ➔</span>
        </button>

        <button class="meta-card pink" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('application')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#881337; color:#FECDD3; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: PAGLALAPAT</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#9F1239; margin-bottom:2px;">🎭 8. Dula-Dulaan at Rubrik</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">4 na Sobre at Pagbuo ng Sariling Rubrik.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#BE123C;">Pumunta ➔</span>
        </button>

        <button class="meta-card blue" style="grid-column: span 2; cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 12px;" onclick="App.jumpToId('quiz')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#0C4A6E; color:#BAE6FD; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">PAGTATAYA</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#0369A1; margin-bottom:2px;">🏆 9. Pagtataya (Pagsusulit na may 5 Aytem)</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Pagtataya at pagsusulit na may awtomatikong pagmamarka.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#0284C7;">Pumunta ➔</span>
        </button>

        <button class="meta-card yellow" style="grid-column: span 2; cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 12px;" onclick="App.jumpToId('assignment')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#78350F; color:#FEF08A; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">KASUNDUAN</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#B45309; margin-bottom:2px;">📝 10. Takdang-Aralin at Pagtatapos</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Replektibong sanaysay sa kuwaderno at pagtatapos.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#B45309;">Pumunta ➔</span>
        </button>
      </div>
    </div>`
});

/* 3. PANALANGIN */
registerSlide({
  id: "prayer",
  nav: "Panimula: Panalangin",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; width:100%; max-width:860px; margin-bottom:10px;">
        <span class="cue-badge gold" style="font-size:14px; padding:5px 14px; margin:0;">⏱ Panimula · 1. Panalangin</span>
        <span style="font-family:'Space Grotesk',sans-serif; font-size:13px; font-weight:800; color:#FEF08A; background:rgba(0,0,0,0.4); padding:4px 12px; border-radius:6px; border:1px solid rgba(254,240,138,0.3);">
          🙏 Pambungad na Panalangin
        </span>
      </div>

      <h2 class="slide-h2 anim-fade-up stagger-2" style="font-size:32px; margin-bottom:12px;">Panimulang Panalangin</h2>

      <div class="anim-fade-up stagger-3" style="width:100%; max-width:860px; display:flex; flex-direction:column; align-items:center;">
        <div class="video-frame-retro" style="width:100%; max-height:380px; box-shadow:0 12px 32px rgba(0,0,0,0.5), 0 0 20px rgba(251,191,36,0.35);">
          <video id="prayerVideo" class="custom-video-player" controls playsinline preload="metadata" style="max-height:380px; width:100%;">
            <source src="videos/prayer.mp4" type="video/mp4">
            Hindi sinusuportahan ng iyong browser ang video tag.
          </video>
        </div>
        <div class="video-caption-bar" style="width:100%; max-width:860px; box-sizing:border-box; margin-top:8px;">
          <span>🎬 Bidyo ng Panalangin</span>
          <span style="color:#FDE047;">▶ Pindutin ang Play upang simulan ang panalangin</span>
        </div>
      </div>
    </div>`
});

/* 4. PAGBATI */
registerSlide({
  id: "greeting",
  nav: "Panimula: Masiglang Pagbati",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
      <span class="cue-badge green anim-fade-up stagger-1">⏱ Panimula · Pagbati</span>
      <h1 class="slide-h1 anim-fade-up stagger-2" style="font-size:42px; margin-bottom:16px;">
        Magandang Araw, Baitang 9!
      </h1>

      <div class="anim-fade-up stagger-3" style="display:flex; align-items:center; justify-content:center; gap:24px; margin-bottom:18px;">
        ${Mascots.alingNena('happy', 110)}
        ${Mascots.speechBubble('Kumusta kayong lahat? Handa na ba ang inyong isipan para sa ating talakayan sa estraktura ng pamilihan?', 'left', 'green')}
      </div>

      <div class="meta-card yellow anim-fade-up stagger-4" style="max-width:760px; font-size:22px; font-weight:800; color:var(--market-red); padding:18px 30px;">
        "Isang pinagpalang araw sa inyong lahat! Ihanda ang inyong mga kagamitan at magsaya sa ating talakayan."
      </div>
    </div>`
});

/* 5. PAGTALA NG LIBAN */
registerSlide({
  id: "attendance",
  nav: "Panimula: Pagtala ng Liban",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="margin-bottom:0;">⏱ Panimulang Gawain · 2. Pagtala ng Liban</span>
          <h2 class="slide-h2" style="margin-top:2px;">Ulat ng Pagtatala ng Liban sa Bawat Pangkat</h2>
        </div>
        <button class="btn gold anim-pulse" id="btnMarkAllPresent" style="font-size:14px; padding:10px 20px; border-radius:12px; box-shadow:0 0 16px rgba(251, 191, 36, 0.5);" onclick="App.markAllPresent()">
          🎉 ISANG PINDOT: LAHAT NARIRITO! (WALANG LIBAN)
        </button>
      </div>

      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; margin:8px 0;">
        ${[
          { num: 1, medal: '🥇', col: '#D97706', name: 'Pangkat 1' },
          { num: 2, medal: '🥈', col: '#475569', name: 'Pangkat 2' },
          { num: 3, medal: '🥉', col: '#B45309', name: 'Pangkat 3' },
          { num: 4, medal: '🏅', col: '#15803D', name: 'Pangkat 4' }
        ].map(p => {
          const absCount = App.attendanceTally[p.num] || 0;
          const isComplete = absCount === 0;
          const pillClass = isComplete ? 'complete' : (absCount === 1 ? 'absent' : 'warning');
          const statusText = isComplete ? '✅ KOMPLETO (100%)' : (absCount === 1 ? '⚠️ 1 Lumiban' : `⚠️ ${absCount} Lumiban`);
          return `
            <div class="meta-card white att-card" id="attCard-${p.num}">
              <div>
                <div style="font-size:26px; margin-bottom:2px;">${p.medal}</div>
                <h3 style="font-family:'Space Grotesk',sans-serif; font-size:20px; font-weight:900; color:${p.col}; margin-bottom:2px;">
                  ${p.name}
                </h3>
                <div style="font-size:11px; font-weight:800; color:#64748B; text-transform:uppercase; letter-spacing:0.06em;">Kalagayan ng Pangkat:</div>
              </div>

              <div class="att-status-pill ${pillClass}" id="attStatus-${p.num}">
                ${statusText}
              </div>

              <div class="att-chips-row">
                <button class="att-chip ${absCount === 0 ? 'active-complete' : ''}" onclick="App.setGroupAttendance(${p.num}, 0)" title="Itakda bilang Kompleto">
                  ✅ 0 Liban
                </button>
                <button class="att-chip ${absCount === 1 ? 'active-absent' : ''}" onclick="App.setGroupAttendance(${p.num}, 1)" title="May 1 Lumiban">
                  ⚠️ 1
                </button>
                <button class="att-chip ${absCount >= 2 ? 'active-warning' : ''}" onclick="App.setGroupAttendance(${p.num}, 2)" title="May 2 o higit pang lumiban">
                  ⚠️ 2+
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="anim-fade-up stagger-3" style="display:flex; justify-content:space-between; align-items:center; background:rgba(6,24,54,0.85); border:1.5px solid #1E4976; border-radius:12px; padding:8px 18px;">
        <div id="attSummaryText" style="font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:900; color:#F8FAFC; display:flex; align-items:center; gap:8px;">
          ${App.getAttendanceSummaryHTML()}
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn primary" style="font-size:12px; padding:6px 16px;" onclick="App.confirmAttendance()">
            💾 Kumpirmahin ang Talaan (+50 XP)
          </button>
          <button class="btn" style="font-size:12px; padding:6px 14px; background:#1E293B; border-color:#475569;" onclick="App.resetAttendance()">
            🔄 Ibalik sa Simula
          </button>
        </div>
      </div>
    </div>`
});

/* 6. ALITUNTUNIN SA LOOB NG SILID ARALAN (Step 3 in Opening Routine) */
registerSlide({
  id: "rules",
  nav: "Panimula: Alituntunin sa Silid-Aralan",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ Panimulang Gawain · 3. Alituntunin sa Loob ng Silid-Aralan</span>
          <h2 class="slide-h2" style="margin-top:2px;">Mga Alituntunin sa Loob ng Silid-Aralan</h2>
        </div>
        ${Mascots.kuyaJuan('default', 75)}
      </div>

      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:8px;">
        ${lessonData.rules.slice(0, 4).map(r => `
          <div class="meta-card white" style="display:flex; align-items:center; gap:16px; font-size:17.5px; font-weight:700;">
            <span style="font-size:34px;">${r.icon}</span>
            <div>${r.text}</div>
          </div>
        `).join('')}
        <div class="meta-card white" style="grid-column: span 2; display:flex; align-items:center; gap:16px; font-size:17.5px; font-weight:700;">
          <span style="font-size:34px;">${lessonData.rules[4].icon}</span>
          <div>${lessonData.rules[4].text}</div>
        </div>
      </div>
    </div>`
});

/* 7. BALIK-ARAL (Step 4 in Opening Routine) */
registerSlide({
  id: "review",
  nav: "Panimula: Balik-Aral",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <span class="cue-badge gold" style="margin-bottom:0;">⏱ Panimulang Gawain · 4. Balik-Aral (Interaksyon ng Demand at Supply)</span>
        ${Mascots.kuyaJuan('curious', 85)}
      </div>
      <h2 class="slide-h2 anim-fade-up stagger-2" style="margin-top:6px; margin-bottom:12px;">Tanong ng Guro:</h2>

      <div class="meta-card yellow anim-fade-up stagger-3" style="font-size:25px; font-weight:900; color:var(--market-red); margin-bottom:18px; padding:22px 28px; line-height:1.5;">
        ${lessonData.review.question}
      </div>

      <div id="reviewPrompt" class="anim-fade-up stagger-4" style="text-align:center; margin:16px 0;">
        <button class="btn gold" style="font-size:20px; font-weight:800; padding:14px 36px;" onclick="App.revealReview()">
          🔍 Pindutin upang Ipakita ang Gabay na Sagot
        </button>
      </div>

      <div id="reviewAnswer" class="meta-card green anim-fade-up" style="display:none; font-size:22px; font-weight:800; line-height:1.55; padding:22px 28px;">
        <h3 style="font-family:'Space Grotesk',sans-serif; font-size:20px; font-weight:900; color:var(--market-green-dark); margin-bottom:8px;">
          💡 Gabay na Sagot sa Talakayan:
        </h3>
        <p>${lessonData.review.answer}</p>
      </div>
    </div>`
});

/* 8. MGA TIYAK NA LAYUNIN */
registerSlide({
  id: "objectives",
  nav: "Mga Tiyak na Layunin (MELC)",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div>
          <span class="cue-badge green" style="margin-bottom:0;">🎯 ${lessonData.melcCode}</span>
          <h2 class="slide-h2" style="font-size:24px; margin-top:2px;">${lessonData.competency}</h2>
        </div>
        ${Mascots.alingNena('thinking', 75)}
      </div>

      <div class="anim-fade-up stagger-2" style="display:flex; flex-direction:column; gap:12px;">
        ${lessonData.objectives.map(obj => `
          <div class="meta-card ${obj.color}" style="padding:14px 20px;">
            <div style="font-family:'Space Grotesk',sans-serif; font-size:13.5px; font-weight:800; color:var(--market-red); text-transform:uppercase; margin-bottom:3px;">
              ${obj.type}
            </div>
            <div style="font-size:18.5px; font-weight:700; line-height:1.45;">
              ${obj.text}
            </div>
          </div>
        `).join('')}
      </div>
    </div>`
});

/* 9. ACTIVITY INTRO: "SAAN SILA NABIBILANG?" (Revised 2-Column Instructions) */
registerSlide({
  id: "motivation-intro",
  nav: "Gawain: Panuto (Saan Sila Nabibilang?)",
  theme: "theme-market",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="margin-bottom:0;">⏱ 4A's: 1. GAWAIN · Pangkatang Gawain</span>
          <h1 class="slide-h1" style="font-size:32px; margin-top:4px;">Gawain: "Saan Sila Nabibilang?"</h1>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${Mascots.alingNena('default', 90)}
        </div>
      </div>

      <div class="anim-fade-up stagger-2" style="margin-top:14px;">
        <div class="meta-card yellow" style="padding:18px 22px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:19px; color:var(--market-red); margin-bottom:8px;">
            📋 Panuto para sa Bawat Pangkat:
          </h3>
          <p style="font-size:19px; font-weight:800; line-height:1.55; color:#0F172A;">
            "Ipapangkat ng mga mag-aaral ang mga larawan batay sa tingin nilang pagkakatulad at ipoposte ng bawat pangkat ang kanilang gawa sa pisara."
          </p>
        </div>
      </div>

      <!-- Preview of 2-Column Table Structure -->
      <div class="meta-card white anim-fade-up stagger-3" style="margin-top:14px; padding:14px 20px;">
        <div style="font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:900; color:#B45309; text-transform:uppercase; margin-bottom:8px;">
          📊 Pormat ng Talaan sa Pisara (Dalawang Kolum):
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; text-align:center;">
          <div style="background:#FEF3C7; border:2px dashed #D97706; padding:10px; border-radius:8px; font-family:'Bungee',sans-serif; font-size:15px; color:#B45309;">
            DAMI NG NAGTITINDA
          </div>
          <div style="background:#E0F2FE; border:2px dashed #0284C7; padding:10px; border-radius:8px; font-family:'Bungee',sans-serif; font-size:15px; color:#0369A1;">
            KATUNGGALI O KAAGAW SA NEGOSYO
          </div>
        </div>
      </div>

      <div class="anim-fade-up stagger-4" style="margin-top:14px; text-align:center;">
        <button class="btn primary" style="font-size:18px; padding:10px 32px;" onclick="App.jumpToId('motivation-game')">
          Buksan ang Lupon ng Pag-uuri ➔
        </button>
      </div>
    </div>`
});

/* 10. REAL POINTER DRAG AND DROP SORTING GAME (2-COLUMN TABLE FORMAT) */
registerSlide({
  id: "motivation-game",
  nav: "Gawain: Laro sa Pag-uuri",
  theme: "theme-market",
  render: () => `
    <div style="display:flex; flex-direction:column; height:100%; justify-content:space-between;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ Pangkatang Gawain sa Pag-uuri</span>
          <span style="font-size:16.5px; font-weight:800;">I-pangkat ang mga produkto sa 2 kategorya ng talaan:</span>
        </div>
        <button class="btn" style="font-size:13px; padding:6px 16px;" onclick="DnDController.resetGame()">🔄 Ibalik sa Simula</button>
      </div>

      <div class="drag-layout anim-fade-up stagger-2">
        <!-- Draggable Chips Pool -->
        <div class="drag-pool-container">
          <div style="display:flex; justify-content:space-between; font-size:13.5px; font-weight:800; color:#93C5FD;">
            <span>MGA PRODUKTO AT KUMPANYA (13 AYTEM):</span>
            <span class="peso-tag" id="sortRemainingBadge" style="background:var(--slate-board);">Natitira: 13 / 13</span>
          </div>
          <div class="pool-chips-wrap" id="sortChipsPool"></div>
          <div id="sortAllDoneBanner" style="display:none; background:var(--market-green-light); border:2px solid var(--market-green); padding:10px; border-radius:8px; text-align:center; font-size:15.5px; font-weight:800; color:var(--market-green);">
            🎉 Mahusay! Lahat ng 13 produkto at kumpanya ay matagumpay na naipangkat sa dalawang kolum!
          </div>
        </div>

        <!-- 2-Column Drop Zones Table -->
        <div class="drop-zones-grid-2col">
          ${lessonData.sortCategories.map(cat => `
            <div class="drop-zone" id="zone-${cat.id}" data-category="${cat.id}">
              <div class="drop-zone-header">${cat.label}</div>
              <div class="drop-zone-items" id="items-${cat.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`,
  afterRender: () => DnDController.init()
});

/* 11-14. INTERACTIVE ANALYSIS QUESTIONS (4 QUESTIONS WITH BAKIT? AND LAPTOP FRAMING) */
lessonData.analysisQuestions.forEach((item, index) => {
  registerSlide({
    id: "analysis-" + index,
    nav: "Pagsusuri: Tanong " + (index + 1),
    theme: "theme-analysis",
    render: () => `
      <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
        <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ 2. ANALYSIS (Pagsusuri)</span>
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="peso-tag" style="background:var(--slate-board); font-size:14px;">Tanong ${index + 1} ng ${lessonData.analysisQuestions.length}</div>
            ${index % 2 === 0 ? Mascots.kuyaJuan('curious', 60) : Mascots.alingNena('thinking', 60)}
          </div>
        </div>

        <!-- Laptop Framing Banner -->
        <div class="laptop-framing-banner anim-fade-up stagger-1" style="margin-top:6px;">
          <span class="laptop-icon">💻</span>
          <span class="laptop-text">Pangkatang Gawain: Uriin ang bawat produkto sa kinabibilangan nito at ehulog sa loob ng kahon gamit ang laptop.</span>
        </div>

        <!-- 4-Dot Progress Tracker -->
        <div class="quiz-dots anim-fade-up stagger-2" id="anDots-${index}" style="margin:4px 0 6px;">
          ${lessonData.analysisQuestions.map((_, dIdx) => `
            <div class="quiz-dot ${App.analysisAnswered[dIdx] ? 'done' : ''} ${dIdx === index ? 'current' : ''}"></div>
          `).join('')}
        </div>

        <div class="meta-card yellow anim-fade-up stagger-3" style="margin-bottom:8px; padding:14px 20px;">
          <div style="font-family:'Space Grotesk',sans-serif; font-size:13.5px; font-weight:900; color:var(--market-red); text-transform:uppercase; letter-spacing:0.05em;">
            Gabay na Katanungan #${index + 1}
          </div>
          <h2 class="slide-h2" style="font-size:22px; font-weight:900; color:var(--slate-board); margin:4px 0 0; line-height:1.35;">
            ${item.q}
          </h2>
        </div>

        <div class="anim-fade-up stagger-4" style="font-size:15px; font-weight:800; color:#93C5FD; margin-bottom:6px;">
          💬 Piliin ang pinakamalapit at matalinong pagsusuri (kasama ang paliwanag):
        </div>

        <div class="anim-fade-up stagger-5" id="anChoices-${index}">
          ${item.choices.map((ch, cIdx) => `
            <button class="choice-btn" id="anBtn-${index}-${cIdx}" onclick="App.handleAnalysisChoice(${index}, ${cIdx})">
              <span>${ch}</span>
            </button>
          `).join('')}
        </div>

        <div id="anFeedback-${index}" style="min-height:45px; margin-top:4px;"></div>
      </div>`,
    afterRender: () => App.renderAnalysisSlideState(index)
  });
});

/* 15. DIFFERENTIATED INSTRUCTION — PANGKAT 1: PICTURE-CARD MATCHING */
registerSlide({
  id: "diff-pangkat1",
  nav: "Pangkat 1: Pag-uugnay ng Larawan",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ Differentiated Instruction · Pangkatang Gawain</span>
          <h2 class="slide-h2" style="font-size:22px; margin-top:2px;">${lessonData.diffPangkat1.title}</h2>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn" style="font-size:12px; padding:6px 14px;" onclick="App.resetDiffP1()">🔄 Ibalik sa Simula</button>
          <button class="btn gold" style="font-size:12px; padding:6px 14px;" onclick="App.jumpToId('diff-pangkat2')">Gawain ng Pangkat 2 ➔</button>
        </div>
      </div>

      <div class="meta-card yellow anim-fade-up stagger-2" style="padding:8px 14px; font-size:14px; font-weight:700;">
        <b>Panuto para sa Pangkat 1:</b> Piliin ang kard ng larawan, at i-click ang kolum ng estraktura kung saan ito nabibilang (Partikular sa estrukturang <i>"iisa lang ang nagtitinda"</i>):
        <span class="peso-tag" id="p1RemainingCount" style="margin-left:8px; font-size:11px;">Natitira: 5 / 5</span>
      </div>

      <!-- Draggable/Clickable Picture Cards Pool -->
      <div class="diff-pool-wrap anim-fade-up stagger-3" id="p1ChipsPool">
        ${lessonData.diffPangkat1.cards.map(c => `
          <button class="diff-chip p1-card-chip" id="p1chip-${c.id}" data-id="${c.id}" onclick="App.selectDiffP1Card('${c.id}')">
            <span>${c.label}</span>
          </button>
        `).join('')}
      </div>

      <!-- Completion Banner -->
      <div id="p1DoneBanner" style="display:none; background:#DCFCE7; border:2px solid #16A34A; color:#14532D; padding:6px 12px; border-radius:8px; text-align:center; font-weight:800; font-size:13.5px;">
        🎉 Mahusay Pangkat 1! Matagumpay ninyong napangkat ang lahat ng 5 larawan sa tamang estraktura! (+50 XP)
      </div>

      <!-- 4-Column Target Matching Table -->
      <div class="diff-grid-4col anim-fade-up stagger-4" style="flex:1; min-height:0; margin-top:6px;">
        ${lessonData.diffStructures.map(s => `
          <div class="diff-col-zone zone-${s.id}" onclick="App.placeDiffP1('${s.id}')" style="cursor:pointer;" title="Pindutin upang ilagay dito ang napiling kard">
            <div class="diff-col-header">${s.icon} ${s.label}</div>
            <div class="diff-col-items" id="p1items-${s.id}"></div>
          </div>
        `).join('')}
      </div>
    </div>`
});

/* 16. DIFFERENTIATED INSTRUCTION — PANGKAT 2: CHARACTERISTIC MATCHING */
registerSlide({
  id: "diff-pangkat2",
  nav: "Pangkat 2: Pag-uuri ng Katangian",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge green" style="margin-bottom:0;">⏱ Differentiated Instruction · Pangkatang Gawain</span>
          <h2 class="slide-h2" style="font-size:22px; margin-top:2px;">${lessonData.diffPangkat2.title}</h2>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn" style="font-size:12px; padding:6px 14px;" onclick="App.resetDiffP2()">🔄 Ibalik sa Simula</button>
          <button class="btn gold" style="font-size:12px; padding:6px 14px;" onclick="App.jumpToId('diff-pangkat3')">Gawain ng Pangkat 3 ➔</button>
        </div>
      </div>

      <div class="meta-card green anim-fade-up stagger-2" style="padding:8px 14px; font-size:14px; font-weight:700;">
        <b>Panuto para sa Pangkat 2:</b> Piliin ang pahayag ng katangian, at i-click ang tamang kolum ng estraktura:
        <span class="peso-tag" id="p2RemainingCount" style="margin-left:8px; font-size:11px;">Natitira: 4 / 4</span>
      </div>

      <!-- Statement Chips Pool -->
      <div class="diff-pool-wrap anim-fade-up stagger-3" id="p2ChipsPool">
        ${lessonData.diffPangkat2.statements.map(s => `
          <button class="diff-chip p2-stmt-chip" id="p2chip-${s.id}" data-id="${s.id}" onclick="App.selectDiffP2Stmt('${s.id}')">
            <span>📝 "${s.text}"</span>
          </button>
        `).join('')}
      </div>

      <!-- Completion Banner -->
      <div id="p2DoneBanner" style="display:none; background:#DCFCE7; border:2px solid #16A34A; color:#14532D; padding:6px 12px; border-radius:8px; text-align:center; font-weight:800; font-size:13.5px;">
        🎉 Magaling Pangkat 2! Matagumpay ninyong naihanay ang 4 na katangian sa kani-kanilang estraktura! (+50 XP)
      </div>

      <!-- 4-Column Target Matching Table -->
      <div class="diff-grid-4col anim-fade-up stagger-4" style="flex:1; min-height:0; margin-top:6px;">
        ${lessonData.diffStructures.map(s => `
          <div class="diff-col-zone zone-${s.id}" onclick="App.placeDiffP2('${s.id}')" style="cursor:pointer;" title="Pindutin upang ilagay dito ang napiling katangian">
            <div class="diff-col-header">${s.icon} ${s.label}</div>
            <div class="diff-col-items" id="p2items-${s.id}"></div>
          </div>
        `).join('')}
      </div>
    </div>`
});

/* 17. DIFFERENTIATED INSTRUCTION — PANGKAT 3: MANILA PAPER Q&A (PETRON/SHELL/CALTEX) */
registerSlide({
  id: "diff-pangkat3",
  nav: "Pangkat 3: Sitwasyon ng Langis",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="margin-bottom:0;">⏱ Differentiated Instruction · Pangkatang Gawain</span>
          <h2 class="slide-h2" style="font-size:22px; margin-top:2px;">${lessonData.diffPangkat3.title}</h2>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn" style="font-size:12px; padding:6px 14px;" onclick="App.resetDiffP3()">🔄 Isara ang Sagot</button>
          <button class="btn gold" style="font-size:12px; padding:6px 14px;" onclick="App.jumpToId('abs-video')">Pormal na Talakayan (Video Clip) ➔</button>
        </div>
      </div>

      <!-- Authentic Manila Paper Frame -->
      <div class="manila-paper-card anim-fade-up stagger-2" style="flex:1; min-height:0; margin-top:8px; display:flex; flex-direction:column; justify-content:space-between;">
        <div class="manila-tape"></div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="font-family:'Bungee',sans-serif; font-size:15px; color:#92400E;">
            📌 MANILA PAPER OUTPUT: SITWASYON NG PETRON, SHELL, AT CALTEX
          </div>
          <span class="peso-tag" style="background:#B45309; font-size:12px;">Pindutin ang sagot upang maipakita</span>
        </div>

        <!-- 2-Column Table: Mga Tanong | Mga Sagot -->
        <div class="manila-table-grid" style="flex:1; min-height:0;">
          <!-- Left: Mga Tanong -->
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="font-family:'Space Grotesk',sans-serif; font-size:13.5px; font-weight:900; color:#78350F; border-bottom:2px solid #D97706; padding-bottom:4px;">
              📋 MGA TANONG:
            </div>
            ${lessonData.diffPangkat3.qaList.map((item, idx) => `
              <div class="manila-qa-box" id="p3qbox-${idx}">
                <div style="font-size:13.5px; font-weight:900; color:#0F172A; line-height:1.35;">
                  ${item.q}
                </div>
                <div style="margin-top:6px;">
                  <button class="btn gold" id="p3btn-${idx}" style="font-size:11px; padding:4px 10px;" onclick="App.revealDiffP3(${idx})">
                    🔍 Ipakita ang Sagot
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Right: Mga Sagot at Konsepto -->
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="font-family:'Space Grotesk',sans-serif; font-size:13.5px; font-weight:900; color:#14532D; border-bottom:2px solid #16A34A; padding-bottom:4px;">
              💡 MGA SAGOT AT MAHAHALAGANG KONSEPTO:
            </div>
            ${lessonData.diffPangkat3.qaList.map((item, idx) => `
              <div id="p3ans-${idx}" style="display:none; background:#FFFFFF; border:2px solid #16A34A; border-radius:10px; padding:10px 14px; box-shadow:0 3px 8px rgba(0,0,0,0.1); margin-bottom:8px;">
                <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; font-weight:900; color:#15803D; text-transform:uppercase; letter-spacing:0.04em;">
                  ✓ Konsepto: ${item.keyConcept}
                </div>
                <p style="font-size:13px; font-weight:800; color:#0F172A; line-height:1.4; margin:4px 0 0;">
                  ${item.a}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`
});

/* 18. PORMAL NA TALAKAYAN: VIDEO CLIP PRESENTATION */
registerSlide({
  id: "abs-video",
  nav: "Talakayan: Video Clip Presentation",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-shrink:0;">
        <span class="cue-badge gold" style="font-size:14px; padding:4px 12px; margin-bottom:0;">
          ⏱ 3. ABSTRACTION · Pormal na Talakayan
        </span>
        <div style="display:flex; align-items:center; gap:8px;">
          ${Mascots.alingNena('happy', 60)}
          ${Mascots.speechBubble('Gamit ang inyong mga sagot, panoorin natin ang video clip presentation!', 'left', 'yellow')}
        </div>
      </div>

      <div class="anim-fade-up stagger-2" style="margin-bottom:6px; flex-shrink:0;">
        <h1 class="slide-h1" style="font-size:26px; margin-bottom:2px; color:var(--slate-board);">
          Pormal na Talakayan sa Pamamagitan ng Video Clip Presentation
        </h1>
        <p style="font-size:13px; font-weight:700; color:#475569; margin:0;">
          Gamit ang mga kasagutan ng bawat pangkat sa mga naunang gawain, pormal na talakayin ang iba't ibang estraktura ng pamilihan sa pamamagitan ng video clip presentation.
        </p>
      </div>

      <!-- 2-Column Display: Video Player (Left) + Gabay sa Panonood (Right) -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns: 1.45fr 1fr; gap:14px; flex:1; min-height:0; align-items:stretch;">
        <!-- Left: Video Player -->
        <div style="display:flex; flex-direction:column; justify-content:center;">
          <div class="video-frame-retro" style="height:100%; max-height:330px;">
            <video id="pamilihanVideo" class="custom-video-player" controls playsinline preload="metadata">
              <source src="videos/Istraktura ng Pamilihan.mp4" type="video/mp4">
              Hindi sinusuportahan ng iyong browser ang video tag.
            </video>
          </div>
          <div class="video-caption-bar">
            <span>🎬 Video Clip Presentation: Iba't Ibang Estraktura ng Pamilihan</span>
            <span style="color:#FDE047;">▶ Pindutin ang Play</span>
          </div>
        </div>

        <!-- Right: Gabay at Pamprosesong Puntos -->
        <div style="display:flex; flex-direction:column; justify-content:space-between; gap:8px;">
          <div class="meta-card yellow" style="padding:12px 14px; flex:1;">
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:15px; color:var(--market-red); margin-bottom:4px;">
              🎯 Mga Gabay sa Video Clip Presentation:
            </h3>
            <ul style="font-size:13px; font-weight:700; line-height:1.4; color:#0F172A; padding-left:16px; margin:0;">
              <li style="margin-bottom:4px;">Ano ang pagkakaiba ng <b>Ganap</b> at <b>Hindi Ganap na Kompetisyon</b>?</li>
              <li style="margin-bottom:4px;">Bakit tinatawag na <b>Price Taker</b> ang nagtitinda sa ganap na kompetisyon?</li>
              <li>Paano nagiging <b>Price Maker</b> ang mga negosyo sa Monopolyo at Oligopolyo?</li>
            </ul>
          </div>

          <div class="meta-card green" style="padding:10px 14px;">
            <p style="font-size:12.5px; font-weight:800; color:#14532D; margin:0;">
              💡 <b>Pansinin sa Video Clip:</b> Pagsusuri sa bigas, kuryente, tubig, at petrolyo ayon sa kanilang estraktura!
            </p>
          </div>

          <button class="btn-arcade-gold" style="padding:8px 16px; font-size:13px; width:100%; justify-content:center;" onclick="App.jumpToId('abs-perfect')">
            <span>Tumuloy sa Iba't Ibang Estraktura ng Pamilihan ➔</span>
          </button>
        </div>
      </div>
    </div>`
});

/* 19. ESTRAKTURA 1: GANAP NA KOMPETISYON */
registerSlide({
  id: "abs-perfect",
  nav: "1. Ganap na Kompetisyon",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="cue-badge gold" style="font-size:15px; padding:6px 14px; margin-bottom:0;">Iba't Ibang Estraktura ng Pamilihan</span>
        <span class="cue-badge green" style="font-size:15px; padding:6px 14px; margin-bottom:0;">Kategorya 1: Ganap na Kompetisyon</span>
      </div>
      <h2 class="slide-h2 anim-fade-up stagger-2" style="font-size:28px; margin-bottom:12px;">1. Pamilihang May Ganap na Kompetisyon (Perfect Competition)</h2>

      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:1.25fr 1fr; gap:18px; min-height:430px; flex:1;">
        <div class="meta-card yellow" style="display:flex; flex-direction:column; justify-content:space-between; padding:22px 24px;">
          <div>
            <span class="peso-tag" style="background:var(--market-green); font-size:16px; font-weight:900; padding:4px 12px; margin-bottom:10px;">PRICE TAKER</span>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:25px; font-weight:900; color:var(--market-red); margin-bottom:12px;">
              Mga Pangunahing Katangian:
            </h3>
            <ul style="font-size:20.5px; font-weight:800; line-height:1.6; color:#0F172A; padding-left:24px;">
              <li><b>Napakaraming mamimili at nagtitinda</b> sa industriya.</li>
              <li><b>Magkakatulad ang mga produkto</b> (homogeneous) — walang natatanging tatak o lasa.</li>
              <li><b>Malayang nakapapasok at nakalalabas</b> ang sinumang negosyante.</li>
              <li><b>Walang sinuman ang nakakakontrol sa presyo (₱)</b> — ang merkado ang nagtatakda.</li>
            </ul>
          </div>
          <div style="background:rgba(255,255,255,0.85); padding:12px 16px; border-radius:10px; border:2px solid var(--manila-border); font-size:19px; font-weight:800; color:#0F172A;">
            💡 <i>Price Taker</i>: Tanggap lamang ng negosyante ang umiiral na presyo sa palengke.
          </div>
        </div>

        <div class="meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:22px 24px; text-align:center;">
          <div>
            <div style="font-size:64px; margin-bottom:6px;">🌾 🐟 🥬</div>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:25px; font-weight:900; color:var(--market-green); margin-bottom:8px;">
              Halimbawa sa Palengke:
            </h3>
            <p style="font-size:22px; font-weight:800; line-height:1.5; color:#0F172A;">
              Mga nagtitinda ng <b>bigas</b>, <b>sariwang isda</b>, at <b>gulay</b> sa pampublikong palengke.
            </p>
          </div>
          <div style="background:var(--card-green); padding:14px 16px; border-radius:10px; border:2px solid var(--card-green-border); text-align:left;">
            <p style="font-size:18px; font-weight:800; line-height:1.5; color:#064E3B; margin:0;">
              Kapag nagtaas ng presyo ang isang pwesto nang walang dahilan, madaling lilipat ang mamimili sa katabing pwesto dahil pareho lang ang produkto.
            </p>
          </div>
        </div>
      </div>
    </div>`
});

/* 20. ESTRAKTURA 2: HINDI GANAP NA KOMPETISYON (3D FLIP TILES) */
registerSlide({
  id: "abs-imperfect",
  nav: "2. Hindi Ganap na Kompetisyon",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="font-size:14.5px; padding:6px 12px; margin-bottom:0;">Kategorya 2: Hindi Ganap na Kompetisyon</span>
          <h2 class="slide-h2" style="font-size:27px; margin-top:2px;">2. Pamilihang May Hindi Ganap na Kompetisyon (Imperfect Competition)</h2>
        </div>
        <span class="cue-badge gold" style="font-size:14.5px; padding:6px 12px; margin-bottom:0;">Pindutin ang kard para Baliktarin ➔</span>
      </div>

      <div class="anim-fade-up stagger-2" style="background:#FEE2E2; border:2.5px dashed var(--market-red); border-radius:10px; padding:8px 16px; font-size:18px; font-weight:900; line-height:1.45; color:var(--market-red);">
        📌 <b>PRICE MAKER (TAGAPAGTAKDA NG PRESYO):</b> Sa estrukturang ito, may kapangyarihan ang isa o iilang negosyante na maimpluwensyahan o kontrolin ang presyo (₱) sa merkado.
      </div>

      <!-- 4 3D Flip Tiles -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; flex:1; min-height:0; margin-top:8px;">
        <!-- Card a: Monopolyo -->
        <div class="flip-card-wrap" id="card-monopolyo" onclick="App.toggleCardFlip('monopolyo')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card yellow" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">⚡ 🚰</div>
                <h4 style="font-size:21px; font-weight:900; color:var(--market-red);">a. Monopolyo</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Iisa ang tagaprodyus; walang direktang kapalit.</p>
              </div>
              <div class="peso-tag" style="font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid var(--market-red);">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:var(--market-red); margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  May hadlang sa pagpasok ng bagong negosyo (barriers to entry). Walang kalaban.
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:var(--market-gold-dark); line-height:1.4;">
                  Halimbawa: Meralco (kuryente), Maynilad (tubig).
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>

        <!-- Card b: Monopsonyo -->
        <div class="flip-card-wrap" id="card-monopsonyo" onclick="App.toggleCardFlip('monopsonyo')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card blue" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">👮 🎖️</div>
                <h4 style="font-size:21px; font-weight:900; color:#0369A1;">b. Monopsonyo</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Iisa ang mamimili ngunit maraming tagaprodyus.</p>
              </div>
              <div class="peso-tag" style="background:#0284C7; font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid #0369A1;">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:#0369A1; margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  Ang mamimili ang may kontrol sa pasahod at presyo ng produkto/serbisyo.
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:#0284C7; line-height:1.4;">
                  Halimbawa: Pamahalaan (iisang bumibili ng serbisyo ng pulis at sundalo).
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>

        <!-- Card c: Oligopolyo -->
        <div class="flip-card-wrap" id="card-oligopolyo" onclick="App.toggleCardFlip('oligopolyo')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card green" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">⛽ 📶</div>
                <h4 style="font-size:21px; font-weight:900; color:var(--market-green);">c. Oligopolyo</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Kakaunti ang nagtitinda; magkakaugnay ang presyo.</p>
              </div>
              <div class="peso-tag" style="background:var(--market-green); font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid var(--market-green);">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:var(--market-green); margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  May hindi hayag na kasunduan sa presyo (collusion / cartel).
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:var(--market-green); line-height:1.4;">
                  Halimbawa: Petron, Shell, Caltex; Globe, Smart, DITO.
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>

        <!-- Card d: Monopolistic Competition -->
        <div class="flip-card-wrap" id="card-monopolistic" onclick="App.toggleCardFlip('monopolistic')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card pink" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">🍔 🧼</div>
                <h4 style="font-size:21px; font-weight:900; color:var(--market-red);">d. Monopolistic</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Maraming nagtitinda ngunit differentiated ang produkto.</p>
              </div>
              <div class="peso-tag" style="background:var(--market-red); font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid var(--market-red);">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:var(--market-red); margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  May kaunting pagkakaiba sa tatak, amoy, o lasa. Gumagamit ng patalastas.
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:var(--market-red); line-height:1.4;">
                  Halimbawa: Jollibee, McDonald's; Tide, Surf, Safeguard.
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>
      </div>
    </div>`
});

/* 21. APPLICATION: "SURIIN AT ISADULA!" (4 ENVELOPES) */
registerSlide({
  id: "application",
  nav: "Gawain: Suriin at Isadula!",
  theme: "theme-application",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ 4. APPLICATION (Paglalapat)</span>
          <h2 class="slide-h2" style="font-size:25px; margin-top:2px;">Pangkatang Dula-Dulaan: "Suriin at Isadula!"</h2>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn" style="font-size:12px; padding:6px 14px;" onclick="App.resetEnvelopes()">🔄 Isara ang mga Sobre</button>
          <button class="btn gold" style="font-size:12px; padding:6px 14px;" onclick="App.jumpToId('rubric')">Bumuo ng Rubrik ➔</button>
        </div>
      </div>

      <div class="meta-card yellow anim-fade-up stagger-2" style="padding:10px 18px; font-size:15.5px; font-weight:700;">
        <b>Panuto:</b> Ang bawat pangkat ay bubunot ng isang sobre at maghahanda ng maikling dula-dulaan (<b>1–2 minuto</b>) na nagpapakita ng totoong sitwasyon ng bentahan. Pindutin ang sobre upang buksan ang sitwasyon:
      </div>

      <!-- 4 Roleplay Envelopes -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; height:350px;">
        ${lessonData.rolePlayGroups.map((grp, idx) => `
          <div class="meta-card white" id="envCard-${idx}" style="cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; text-align:center; padding:16px;" onclick="App.openRoleEnvelope(${idx})">
            <div>
              <div style="font-size:38px;">${grp.icon}</div>
              <h3 style="font-family:'Space Grotesk',sans-serif; font-size:18px; color:var(--market-red); margin:4px 0;">${grp.label}</h3>
              <div class="peso-tag" style="background:var(--slate-board); font-size:11px;">${grp.structure.split('(')[0]}</div>
            </div>

            <div id="envStatus-${idx}" style="margin:16px 0;">
              <div style="font-size:42px;">✉️</div>
              <div style="font-size:13px; font-weight:800; color:var(--market-gold); margin-top:4px;">Pindutin upang Buksan</div>
            </div>

            <div id="envScenario-${idx}" style="display:none; text-align:left; background:#FFFFFF; padding:12px 14px; border-radius:10px; border:2px solid #D97706; font-size:14px; font-weight:800; line-height:1.45; color:#0F172A; box-shadow:0 3px 10px rgba(0,0,0,0.1);">
              <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; font-weight:900; color:#B45309; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px;">
                📜 Sitwasyon ng Dula-Dulaan:
              </div>
              ${grp.scenario}
            </div>

            <span style="font-family:'Space Grotesk',sans-serif; font-size:12px; font-weight:900; color:#334155; margin-top:6px;">⏱ Oras: 1–2 Minuto</span>
          </div>
        `).join('')}
      </div>
    </div>`
});

/* 22. STUDENT-CREATED RUBRIC BUILDER */
registerSlide({
  id: "rubric",
  nav: "Pamantayan sa Pagmamarka (Rubrik)",
  theme: "theme-application",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">Pagmamarka ng Dula-Dulaan</span>
          <h2 class="slide-h2" style="font-size:24px; margin-top:2px;">Pagbuo ng Sariling Pamantayan sa Pagmamarka (Rubrik)</h2>
        </div>
        <button class="btn primary" style="font-size:13px; padding:6px 18px;" onclick="App.jumpToId('quiz')">
          Tumuloy sa Pagtataya ➔
        </button>
      </div>

      <!-- Main Teacher Directive from Revised DLP -->
      <div class="meta-card yellow anim-fade-up stagger-2" style="padding:12px 18px;">
        <div style="font-family:'Bungee',sans-serif; font-size:15px; color:#B45309; margin-bottom:4px;">
          📢 ${lessonData.rubricGuide.instruction}
        </div>
        <p style="font-size:14px; font-weight:700; color:#0F172A; margin:0;">
          Ang bawat pangkat ay magkakasundo sa sariling pamantayan at hatol ng puntos para sa dula-dulaan.
        </p>
      </div>

      <!-- Guiding Questions & Interactive Criteria Customizer -->
      <div class="rubric-guide-card anim-fade-up stagger-3" style="flex:1; min-height:0; display:flex; flex-direction:column; justify-content:space-between;">
        <!-- Two Guiding Questions -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;">
          <div style="background:rgba(251, 191, 36, 0.12); border:1.5px solid #F59E0B; border-radius:8px; padding:8px 12px;">
            <div style="font-size:12px; font-weight:900; color:#FDE047; text-transform:uppercase;">❓ Gabay na Tanong 1:</div>
            <div style="font-size:14px; font-weight:800; color:#FFFFFF; margin-top:2px;">
              "${lessonData.rubricGuide.guideQuestions[0]}"
            </div>
          </div>
          <div style="background:rgba(56, 189, 248, 0.12); border:1.5px solid #38BDF8; border-radius:8px; padding:8px 12px;">
            <div style="font-size:12px; font-weight:900; color:#7DD3FC; text-transform:uppercase;">❓ Gabay na Tanong 2:</div>
            <div style="font-size:14px; font-weight:800; color:#FFFFFF; margin-top:2px;">
              "${lessonData.rubricGuide.guideQuestions[1]}"
            </div>
          </div>
        </div>

        <!-- Student Dynamic Criteria Rows -->
        <div style="flex:1; overflow-y:auto;">
          <div style="font-family:'Space Grotesk',sans-serif; font-size:12.5px; font-weight:900; color:#94A3B8; text-transform:uppercase; margin-bottom:6px;">
            Mungkahi / Burador ng Pamantayan ng Pangkat:
          </div>

          <div class="rubric-criteria-row">
            <div>
              <div style="font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:900; color:#F8FAFC;">1. Nilalaman at Kawastuhan ng Estraktura</div>
              <div style="font-size:12px; font-weight:700; color:#94A3B8;">Naipakita ba nang wasto ang mga katangian ng nabunot na estraktura?</div>
            </div>
            <div style="text-align:center;">
              <span class="peso-tag" id="rubricPts-nilalaman" style="background:#D97706; font-size:13px;">${App.studentRubricPoints.nilalaman} pts</span>
            </div>
            <div style="display:flex; justify-content:center; gap:6px;">
              <button class="btn" style="padding:2px 8px; font-size:13px;" onclick="App.adjustRubricPts('nilalaman', -1)">-</button>
              <button class="btn gold" style="padding:2px 8px; font-size:13px;" onclick="App.adjustRubricPts('nilalaman', 1)">+</button>
            </div>
          </div>

          <div class="rubric-criteria-row">
            <div>
              <div style="font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:900; color:#F8FAFC;">2. Pagiging Malikhain at Husay sa Pag-arte</div>
              <div style="font-size:12px; font-weight:700; color:#94A3B8;">Makatotohanan ba at nakapupukaw ng interes ang pagsasatao sa sitwasyon?</div>
            </div>
            <div style="text-align:center;">
              <span class="peso-tag" id="rubricPts-pagarte" style="background:#0284C7; font-size:13px;">${App.studentRubricPoints.pagarte} pts</span>
            </div>
            <div style="display:flex; justify-content:center; gap:6px;">
              <button class="btn" style="padding:2px 8px; font-size:13px;" onclick="App.adjustRubricPts('pagarte', -1)">-</button>
              <button class="btn gold" style="padding:2px 8px; font-size:13px;" onclick="App.adjustRubricPts('pagarte', 1)">+</button>
            </div>
          </div>

          <div class="rubric-criteria-row">
            <div>
              <div style="font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:900; color:#F8FAFC;">3. Kooperasyon at Pakikiisa ng Pangkat</div>
              <div style="font-size:12px; font-weight:700; color:#94A3B8;">Lahat ba ng miyembro ay aktibong nakiisa at sumunod sa oras?</div>
            </div>
            <div style="text-align:center;">
              <span class="peso-tag" id="rubricPts-kooperasyon" style="background:#15803D; font-size:13px;">${App.studentRubricPoints.kooperasyon} pts</span>
            </div>
            <div style="display:flex; justify-content:center; gap:6px;">
              <button class="btn" style="padding:2px 8px; font-size:13px;" onclick="App.adjustRubricPts('kooperasyon', -1)">-</button>
              <button class="btn gold" style="padding:2px 8px; font-size:13px;" onclick="App.adjustRubricPts('kooperasyon', 1)">+</button>
            </div>
          </div>
        </div>

        <!-- Total Marks Summary -->
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1.5px solid rgba(255,255,255,0.15); padding-top:8px;">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:13px; font-weight:900; color:#F8FAFC;">KABUUANG PUNTOS NA PAGKAPAGKASUNDUAN NG MAG-AARAL:</span>
          <span class="peso-tag" id="rubricTotalPts" style="background:var(--market-red); font-size:15px; font-weight:900; padding:4px 14px;">20 puntos</span>
        </div>
      </div>
    </div>`
});

/* 23. PAGTATAYA (5-ITEM SCORED EVALUATION QUIZ - ARCADE QUEST) */
registerSlide({
  id: "quiz",
  nav: "Pagtataya sa Aralin",
  theme: "theme-exam",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <!-- 5 Quest Cards Row (Matching Reference Image) -->
      <div class="anim-fade-up stagger-1" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; height:78px; margin-bottom:6px;">
        <div class="quest-card" id="qcard-0" onclick="App.renderQuizQuestion(0)" style="cursor:pointer;">
          <div class="quest-num-badge">1</div>
          <div style="font-size:20px; margin-top:2px;">🏪</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">PAMILIHAN</div>
          <div class="quest-lock-pill" id="qlock-0"><span>🔒</span></div>
        </div>

        <div class="quest-card" id="qcard-1" onclick="App.renderQuizQuestion(1)" style="cursor:pointer;">
          <div class="quest-num-badge">2</div>
          <div style="font-size:20px; margin-top:2px;">🏢</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">MONOPOLYO</div>
          <div class="quest-lock-pill" id="qlock-1"><span>🔒</span></div>
        </div>

        <div class="quest-card" id="qcard-2" onclick="App.renderQuizQuestion(2)" style="cursor:pointer;">
          <div class="quest-num-badge">3</div>
          <div style="font-size:20px; margin-top:2px;">⚖️</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">PRICE TAKER</div>
          <div class="quest-lock-pill" id="qlock-2"><span>🔒</span></div>
        </div>

        <div class="quest-card" id="qcard-3" onclick="App.renderQuizQuestion(3)" style="cursor:pointer;">
          <div class="quest-num-badge">4</div>
          <div style="font-size:20px; margin-top:2px;">🏬</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">OLIGOPOLYO</div>
          <div class="quest-lock-pill" id="qlock-3"><span>🔒</span></div>
        </div>

        <div class="quest-card" id="qcard-4" onclick="App.renderQuizQuestion(4)" style="cursor:pointer;">
          <div class="quest-num-badge">5</div>
          <div style="font-size:20px; margin-top:2px;">🏛️</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">MONOPSONYO</div>
          <div class="quest-lock-pill" id="qlock-4"><span>🔒</span></div>
        </div>
      </div>

      <!-- Question Prompt Box -->
      <div class="anim-fade-up stagger-2" style="background:linear-gradient(180deg, #0B254E 0%, #051833 100%); border:2px solid #1E4976; border-radius:10px; padding:8px 14px; margin-bottom:6px; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#FBBF24; text-transform:uppercase;" id="quizProgressTag">Tanong 1 ng 5</span>
          <span style="font-size:10.5px; font-weight:800; color:#38BDF8;">Piliin ang pinakatamang sagot sa ibaba:</span>
        </div>
        <h3 id="quizQuestionText" style="font-family:'Space Grotesk',sans-serif; font-size:15.5px; color:#FFFFFF; margin:0; line-height:1.35;"></h3>
      </div>

      <!-- Choices Area -->
      <div class="anim-fade-up stagger-3" id="quizChoicesWrap" style="display:grid; grid-template-columns:1fr 1fr; gap:8px;"></div>

      <!-- Instant Feedback Box -->
      <div id="quizFeedbackBox" style="min-height:42px;"></div>

      <!-- Summary Box when Done -->
      <div id="quizSummaryBox" style="display:none; text-align:center; padding:14px; background:rgba(6, 30, 66, 0.95); border:2px solid #FBBF24; border-radius:12px; margin-top:6px;"></div>
    </div>`,
  afterRender: () => App.renderQuizQuestion(App.quizCurrentIndex)
});

/* 24. TAKDANG-ARALIN (ASSIGNMENT) */
registerSlide({
  id: "assignment",
  nav: "V. Takdang-Aralin",
  theme: "theme-exam",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ V. TAKDANG-ARALIN</span>
          <h2 class="slide-h2" style="font-size:28px; margin-top:4px;">Kasunduan at Repleksyon sa Kuwaderno</h2>
        </div>
        ${Mascots.kuyaJuan('curious', 85)}
      </div>

      <div class="meta-card yellow anim-fade-up stagger-2" style="padding:24px 28px; margin-bottom:18px;">
        <h3 style="font-family:'Space Grotesk',sans-serif; font-size:18px; color:var(--market-red); margin-bottom:8px;">
          📝 Katanungan para sa Takdang-Aralin:
        </h3>
        <p style="font-size:22px; font-weight:800; line-height:1.5; color:var(--slate-board);">
          ${lessonData.assignment.prompt}
        </p>
      </div>

      <div class="meta-card white anim-fade-up stagger-3" style="padding:16px 24px; font-size:18px; font-weight:700;">
        📌 <b>Pormat ng Pagsusumite:</b> ${lessonData.assignment.format} Ibahagi sa klase bukas.
      </div>
    </div>`
});

/* 25. CLOSING / PAGTATAPOS */
registerSlide({
  id: "closing",
  nav: "Pagtatapos ng Aralin",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; align-items:center; justify-content:center; gap:28px; margin-bottom:18px;">
        ${Mascots.alingNena('happy', 115)}
        ${Mascots.speechBubble('Maraming salamat sa inyong aktibong pakikilahok at pagsusuri sa pamilihan!', 'left', 'yellow')}
        ${Mascots.kuyaJuan('happy', 115)}
      </div>

      <h1 class="slide-h1 anim-fade-up stagger-2" style="font-size:42px; margin-bottom:12px;">
        Maraming Salamat, Baitang 9!
      </h1>

      <div class="meta-card green anim-fade-up stagger-3" style="max-width:760px; font-size:20px; font-weight:800; color:var(--market-green-dark); padding:16px 28px; margin-bottom:20px;">
        "Maging mapanuring mamimili at responsableng negosyante para sa maunlad na ekonomiya ng bansa."
      </div>

      <div class="anim-fade-up stagger-4">
        <button class="btn outline" style="font-size:16px; padding:10px 28px;" onclick="App.jumpToId('title')">
          🔄 Bumalik sa Simula ng Presentasyon
        </button>
      </div>
    </div>`
});
