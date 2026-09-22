/* ============================================================
   LESSON DATA — PHILIPPINE DEPED GRADE 9 ARALING PANLIPUNAN
   MELC: AP9MYK-IHe-11 (Iba't Ibang Estraktura ng Pamilihan)
   Verbatim Content from Revised Official Lesson Plan (DLP)
   ============================================================ */

const lessonData = {
  title: "IBA'T IBANG ESTRAKTURA NG PAMILIHAN",
  gradeLevel: "Ekonomiks 9 · Ikalawang Markahan",
  melcCode: "MELC AP9MYK-IHe-11",
  competency: "Nasusuri ang iba't ibang estraktura ng pamilihan.",
  
  kagamitan: "PowerPoint / Interactive Presentation, mga larawan/logo ng produkto at kumpanya, manila paper, marker, at meta-cards.",
  sanggunian: "Ekonomiks 9 (Modyul ng Mag-aaral sa Araling Panlipunan), K-12 Most Essential Learning Competencies (MELCs) AP9.",

  rules: [
    { icon: "🙋", text: "<b>Itaas ang kamay</b> bago magsalita o magtanong." },
    { icon: "👂", text: "<b>Makinig nang mabuti</b> — isa lamang ang magsasalita bawat sandali." },
    { icon: "🤝", text: "<b>Igalang at suportahan</b> ang bawat miyembro ng pangkat sa gawain." },
    { icon: "⏱️", text: "<b>Sundin ang oras</b> — bantayan ang timer upang matapos sa takdang oras." },
    { icon: "📵", text: "<b>Ituon ang pansin sa aralin</b> — ilagay muna sa silent mode ang cellphone kung hindi kailangan." }
  ],

  objectives: [
    {
      type: "1. Pangkabatiran (Cognitive)",
      color: "yellow",
      text: "Naipaliliwanag ang kahulugan ng pamilihan at natutukoy ang mga katangian ng iba't ibang estraktura nito."
    },
    {
      type: "2. Pandamdamin / Pagpapahalaga (Affective)",
      color: "green",
      text: "Napahahalagahan ang papel ng pamilihan at ng tamang kompetisyon sa pang-araw-araw na buhay ng mga mamimili at tagaprodyus."
    },
    {
      type: "3. Pangkasanayan (Psychomotor)",
      color: "blue",
      text: "Nasusuri at naipapangkat ang mga karaniwang produkto at kumpanya ayon sa kanilang kinabibilangang estraktura ng pamilihan sa pamamagitan ng pangkatang gawain."
    }
  ],

  review: {
    question: "\"Sino sa inyo ang nakatanda ng ating nakaraang paksa tungkol sa interaksyon ng demand at supply?\"",
    answer: "Nagkakasundo ang mamimili (demand) at nagtitinda (supply) sa pinagkasunduang <b>Presyong Ekwilibriyo (₱)</b> at <b>Dami ng Produkto</b> sa pamilihan. Kapag nagbago ang presyo o dami, nagkakaroon ng kakulangan (shortage) o kalabisan (surplus)."
  },

  // Motivation Activity: 2-Column Table Format
  sortCategories: [
    { id: "dami", label: "DAMI NG NAGTITINDA" },
    { id: "katunggali", label: "KATUNGGALI O KAAGAW SA NEGOSYO" }
  ],

  sortItems: [
    { id: "s1", label: "🌾 Bigas", correct: "dami", price: "₱52/kilo", hint: "Maraming nagtitinda ng magkakatulad na butil sa palengke" },
    { id: "s2", label: "🥬 Gulay sa palengke", correct: "dami", price: "₱25/tali", hint: "Maraming magsasaka at tindera sa bawat talipapa" },
    { id: "s3", label: "⚡ Meralco", correct: "katunggali", price: "₱ Bill", hint: "Walang katunggali; nag-iisang tagapamahagi ng kuryente" },
    { id: "s4", label: "🚰 Maynilad", correct: "katunggali", price: "₱ Bill", hint: "Walang kaagaw sa nasasakupang distribusyon ng tubig" },
    { id: "s5", label: "⛽ Petron", correct: "katunggali", price: "₱62/L", hint: "May iilang higanteng katunggali (Big 3 ng langis)" },
    { id: "s6", label: "⛽ Shell", correct: "katunggali", price: "₱63/L", hint: "Katuwang na katunggali sa industriya ng petrolyo" },
    { id: "s7", label: "📶 Globe", correct: "katunggali", price: "₱ Load", hint: "May mahigpit na katunggali sa telekomunikasyon" },
    { id: "s8", label: "📶 Smart", correct: "katunggali", price: "₱ Load", hint: "Kaagaw sa mga serbisyong cellular at data" },
    { id: "s9", label: "🍔 Jollibee", correct: "katunggali", price: "₱89 Meal", hint: "May katunggali sa fast food na may tatak at patalastas" },
    { id: "s10", label: "🍔 McDonald's", correct: "katunggali", price: "₱95 Meal", hint: "Pangunahing katunggali sa burgers at manok" },
    { id: "s11", label: "🧼 Tide", correct: "katunggali", price: "₱14 Sachet", hint: "May katunggaling sabon panlaba sa pamilihan" },
    { id: "s12", label: "🧼 Surf", correct: "katunggali", price: "₱12 Sachet", hint: "Kaagaw sa bentahan ng sabon na may ibang bango" },
    { id: "s13", label: "👮 Pulis / Sundalo", correct: "dami", price: "₱ Sahod", hint: "Maraming nag-aalok ng serbisyo at lakas-paggawa sa iisang mamimili" }
  ],

  // Analysis Questions: Revised to exactly 4 questions with explicit "Bakit?" reasoning
  analysisQuestions: [
    {
      q: "1. Ano ang naging batayan ng inyong pangkat sa pagpapangkat ng mga larawan?",
      choices: [
        "A) Batay sa kulay ng logo at dalas ng patalastas sa telebisyon.",
        "B) Batay sa dami ng nagtitinda at kung mayroon silang katunggali o kaagaw sa negosyo.",
        "C) Batay sa kung aling produkto ang pinakamurang bilhin ngayong linggo."
      ],
      bestIndex: 1,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ito ang dalawang pangunahing pamantayan sa pagsusuri ng estraktura ng pamilihan — ang dami ng prodyuser at ang antas ng katunggali sa merkado."
    },
    {
      q: "2. Aling mga produkto o kumpanya ang napansin ninyong walang gaanong kapareho o kalaban sa merkado? Bakit?",
      choices: [
        "A) Bigas at gulay sa palengke — Dahil magkakaiba ang presyo nila araw-araw.",
        "B) Meralco at Maynilad — Dahil sila ang nag-iisang binigyan ng karapatan at prangkisa na maghatid ng kuryente at tubig, kaya walang ibang kumpanyang maaaring magtinda nito sa kanilang nasasakupan.",
        "C) Jollibee at McDonald's — Dahil sila ang pinakapaborito ng mga kabataan."
      ],
      bestIndex: 1,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ang Meralco at Maynilad ay walang kalaban dahil sa mga 'barrier to entry' at legal na prangkisa ng gobyerno — katangian ng isang Monopolyo kung saan iisa lamang ang nagtitinda."
    },
    {
      q: "3. Alin naman ang may napakaraming katunggali o pagpipilian ang mga mamimili? Bakit?",
      choices: [
        "A) Gulay at bigas sa palengke, gayundin ang fast food (Jollibee/McDo) at sabon (Tide/Surf) — Dahil napakaraming nagtitinda at malayang nakapapasok ang negosyante, kaya may kalayaan ang mamimili na pumili batay sa presyo, tatak, o kalidad.",
        "B) Kumpanya ng kuryente at tubig — Dahil maraming poste ng kuryente at tubo ng tubig sa buong lungsod.",
        "C) Serbisyong militar ng mga sundalo at pulis — Dahil maraming tanggapan ang pamahalaan."
      ],
      bestIndex: 0,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Sa Ganap na Kompetisyon at Monopolistic Competition, maraming prodyuser kaya matindi ang kumpetisyon at malawak ang pagpipilian ng mamimili."
    },
    {
      q: "4. Paano nakatutulong ang mga negosyo at pamilihang ito sa ating pang-araw-araw na pamumuhay?",
      choices: [
        "A) Pinipilit lamang nila ang mamamayan na gumastos kahit hindi naman kailangan.",
        "B) Sinisiguro nito ang maayos na suplay ng ating pangunahing pangangailangan (pagkain, kuryente, tubig, komunikasyon) at nagbibigay ng trabaho at kabuhayan.",
        "C) Nagbibigay lamang sila ng libangan ngunit walang epekto sa pangkalahatang ekonomiya."
      ],
      bestIndex: 1,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ang pamilihan ang nagtitiyak na ang mga yaman at produkto ng lipunan ay makakarating sa mga mamamayan upang matugunan ang kanilang pang-araw-araw na pangangailangan."
    }
  ],

  // Differentiated Instruction (Pangkatang Gawain bago ang Pormal na Talakayan)
  diffStructures: [
    { id: "monopolyo", label: "Monopolyo", icon: "⚡" },
    { id: "monopsonyo", label: "Monopsonyo", icon: "👮" },
    { id: "oligopolyo", label: "Oligopolyo", icon: "⛽" },
    { id: "monopolistic", label: "Monopolistic", icon: "🍔" }
  ],

  // Pangkat 1: Picture Card Matching
  diffPangkat1: {
    title: "Pangkat 1: Pag-uugnay ng mga Larawan sa Estraktura",
    taskDesc: "Ipares ang bawat larawan o logo sa tamang estraktura ng pamilihan (Partikular sa estrukturang 'iisa lang ang nagtitinda' at iba pa):",
    cards: [
      { id: "p1_meralco", label: "⚡ Meralco Logo", correct: "monopolyo", desc: "Nag-iisang tagapamahagi ng kuryente sa NCR" },
      { id: "p1_maynilad", label: "🚰 Maynilad", correct: "monopolyo", desc: "Nag-iisang tagapagkaloob ng tubig sa Kanlurang Maynila" },
      { id: "p1_jollibee", label: "🍔 Jollibee", correct: "monopolistic", desc: "Fast food na may sariling tatak at maraming katunggali" },
      { id: "p1_petron", label: "⛽ Petron", correct: "oligopolyo", desc: "Kabilang sa iilang higanteng kumpanya ng petrolyo" },
      { id: "p1_pnp", label: "👮 PNP Logo", correct: "monopsonyo", desc: "Serbisyo ng pulisya na tanging gobyerno ang bumibili" }
    ]
  },

  // Pangkat 2: Characteristic Matching
  diffPangkat2: {
    title: "Pangkat 2: Pag-uuri ng mga Katangian ng Pamilihan",
    taskDesc: "Suriin ang 4 na katangian at ilagay sa angkop na kolum ng estraktura ng pamilihan:",
    statements: [
      { id: "p2_s1", text: "Iisa lamang ang tagaprodyus o nagtitinda", correct: "monopolyo", hint: "Walang direktang kapalit ang produkto" },
      { id: "p2_s2", text: "Iisa lamang ang mamimili (buyer) ngunit maraming tagaprodyus", correct: "monopsonyo", hint: "Pamahalaan ang tanging bumibili" },
      { id: "p2_s3", text: "Kakaunti lamang ang nagtitinda ng magkakatulad o magkakaugnay na produkto", correct: "oligopolyo", hint: "May sabwatan o cartel sa presyo" },
      { id: "p2_s4", text: "Maraming nagtitinda at mamimili ngunit ang mga produkto ay may kaunting pagkakaiba", correct: "monopolistic", hint: "Differentiated products at may patalastas" }
    ]
  },

  // Pangkat 3: Q&A using Manila Paper (Petron/Shell/Caltex Scenario)
  diffPangkat3: {
    title: "Pangkat 3: Sitwasyon ng Petron, Shell, at Caltex",
    taskDesc: "Pagsusuri sa Sitwasyon gamit ang Manila Paper Format (2 Kolum: Mga Tanong at Mga Sagot):",
    qaList: [
      {
        q: "1. Bakit pare-pareho ang taas ng presyo ng Petron, Shell at Caltex?",
        a: "Dahil kakaunti lamang silang nagtitinda sa merkado (Oligopolyo), magkakaugnay ang kanilang presyo. Kapag nagtaas ang isa dulot ng pandaigdigang presyo ng krudo, sumusunod din ang iba upang maiwasan ang matinding pagkalugi o price war.",
        keyConcept: "Magkakaugnay na Presyo (Interdependence / Price Leadership)"
      },
      {
        q: "2. Anong uri ito ng pamilihan nabibilang?",
        a: "Nabibilang ito sa <b>Oligopolyo (Oligopoly)</b> — isang estraktura ng hindi ganap na kompetisyon kung saan iilan lamang ang higanteng prodyuser na nagtitinda ng magkakatulad o magkakaugnay na produkto.",
        keyConcept: "Estraktura: OLIGOPOLYO"
      },
      {
        q: "3. Paano nakakaapekto sa atin bilang mamimili?",
        a: "Direkta itong nakakaapekto sa ating gastusin: tumataas ang pamasahe, presyo ng bilihin, at kuryente. Dahil iilan lang ang mapagpipilian, limitado ang kalayaan ng mamimili na makahanap ng higit na murang gasolina.",
        keyConcept: "Epekto sa Mamimili: Pagtaas ng Pangkalahatang Bilihin"
      }
    ]
  },

  // Role Play Groups (Unchanged Scenarios)
  rolePlayGroups: [
    {
      label: "Pangkat 1",
      structure: "Ganap na Kompetisyon (Perfect Competition)",
      scenario: "Sitwasyon ng tawaran at bentahan ng gulay o isda sa palengke kung saan maraming nagtitinda ng magkakatulad na produkto.",
      icon: "🥬"
    },
    {
      label: "Pangkat 2",
      structure: "Monopolyo (Monopoly)",
      scenario: "Sitwasyon ng pagbabayad ng bill sa kuryente o tubig at kawalan ng ibang mapagpipilian dahil iisa lang ang kumpanya.",
      icon: "⚡"
    },
    {
      label: "Pangkat 3",
      structure: "Oligopolyo (Oligopoly)",
      scenario: "Sitwasyon ng sabay-sabay na pagtataas ng presyo ng langis (₱/litro) ng mga pangunahing kumpanya tulad ng Petron at Shell.",
      icon: "⛽"
    },
    {
      label: "Pangkat 4",
      structure: "Monopolistic Competition",
      scenario: "Sitwasyon ng pagpili ng mamimili ng fast food o sabon batay sa napanood na patalastas, packaging, at tatak.",
      icon: "🍔"
    }
  ],

  // Student-Created Rubric Guidance & Criteria Options
  rubricGuide: {
    instruction: "Gagawa ang mga mag-aaral ng sariling pamantayan sa Pagmamarka ng Dula-dulaan (Rubrik)",
    guideQuestions: [
      "Ano ang dapat bigyang-diin sa inyong pagmamarka sa dula-dulaan?",
      "Ilang puntos ang ilalaan sa bawat pamantayan upang maging patas ang hatol?"
    ],
    suggestedCriteria: [
      { id: "nilalaman", label: "Nilalaman at Kawastuhan ng Estraktura", defaultPts: 10, prompt: "Naipakita ba nang wasto ang mga katangian ng estraktura?" },
      { id: "pag-arte", label: "Kagalingan sa Pag-arte at Pagiging Makatotohanan", defaultPts: 5, prompt: "Buhay ba at nakakaengganyo ang pagsasatao sa eksena?" },
      { id: "kooperasyon", label: "Kooperasyon at Pakikiisa ng Bawat Miyembro", defaultPts: 5, prompt: "Lahat ba ng miyembro ay may gampanin at nagtulungan?" }
    ]
  },

  // 5-Item Scored Evaluation Quiz (Fully Unchanged, Answer key C-B-C-D-A)
  quizQuestions: [
    {
      q: "1. Ano ang tumutukoy sa isang mekanismo kung saan ang mamimili at nagtitinda ay nagkakaroon ng interaksyon upang magkasundo sa presyo at dami ng produkto?",
      choices: ["A) Alokasyon", "B) Demand", "C) Pamilihan", "D) Supply"],
      correct: 2, // C
      explanation: "Ang pamilihan ay ang mismong mekanismo ng pagkakasundo ng mamimili at nagtitinda sa presyo at dami."
    },
    {
      q: "2. Ang mga kumpanyang Meralco at Maynilad ay nag-iisang tagapagkaloob ng serbisyo ng kuryente at tubig sa kani-kanilang nasasakupan. Sa anong estraktura ng pamilihan sila nabibilang?",
      choices: ["A) Oligopolyo", "B) Monopolyo", "C) Monopsonyo", "D) Ganap na Kompetisyon"],
      correct: 1, // B
      explanation: "Monopolyo ang tawag dahil iisa lamang ang nagtitinda o nagkakaloob ng serbisyo na walang direktang kapalit."
    },
    {
      q: "3. Bakit itinuturing na \"price taker\" ang mga nagtitinda sa pamilihang may ganap na kompetisyon?",
      choices: [
        "A) Dahil kontrolado nila ang presyo sa merkado.",
        "B) Dahil idinidikta ng pamahalaan ang lahat ng presyo.",
        "C) Dahil nakabase ang presyo sa pangkalahatang interaksyon ng demand at supply sa merkado.",
        "D) Dahil maaari silang magkasundo sa presyo kasama ang ibang negosyante."
      ],
      correct: 2, // C
      explanation: "Sa ganap na kompetisyon, walang sinumang negosyante ang may kapangyarihang magdikta; ang merkado ang nagtatakda ng presyo."
    },
    {
      q: "4. Ang Petron, Shell, at Caltex ay iilan lamang sa mga kumpanyang nagtitinda ng langis sa bansa. Anong estraktura ng pamilihan ang inilalarawan nito?",
      choices: ["A) Monopolistic Competition", "B) Monopsonyo", "C) Monopolyo", "D) Oligopolyo"],
      correct: 3, // D
      explanation: "Oligopolyo ang estraktura kung saan kakaunti lamang ang malalaking kumpanyang nagtitinda ng magkakatulad o magkakaugnay na produkto."
    },
    {
      q: "5. Sa anong estraktura ng pamilihan nabibilang ang pamahalaan bilang iisang bumibili ng serbisyo ng mga sundalo at pulis?",
      choices: ["A) Monopsonyo", "B) Monopolyo", "C) Oligopolyo", "D) Ganap na Kompetisyon"],
      correct: 0, // A
      explanation: "Monopsonyo ang tawag kapag may iisa lamang na mamimili (tulad ng Pamahalaan) ngunit maraming nag-aalok ng serbisyo o produkto."
    }
  ],

  assignment: {
    prompt: "\"Bilang isang mamimili, aling estraktura ng pamilihan ang sa tingin mo ay pinakamakabubuti sa mga mamamayan? Ipaliwanag ang iyong dahilan.\"",
    format: "Isulat sa kuwaderno ang sagot sa 5 hanggang 8 pangungusap."
  }
};

