/* ░░░░░░░░░░ ПЕТУХ.JS ░░░░░░░░░░ */
'use strict';

/* ────── DATA ────── */
const BREEDS = [
  {
    id:'brahma', name:'Брама', origin:'США / Шанхай', tag:'Тяжеловес',
    img:'images/breeds/brahma.jpg',
    desc:'Великан в перьевых валенках. До 5 кг живого веса. Спокойный, как монастырский настоятель, и большой, как сторож.',
    weight:'5 кг', mood:'Спокоен'
  },
  {
    id:'leghorn', name:'Леггорн', origin:'Италия', tag:'Яичный машинист',
    img:'images/breeds/leghorn.jpg',
    desc:'Италия, начало 19 века. Худой, белый, истеричный, но кладёт 300 яиц в год. Промышленный стандарт планеты.',
    weight:'2.5 кг', mood:'Нервный'
  },
  {
    id:'orloff', name:'Орловский', origin:'Россия', tag:'Бакенбарды',
    img:'images/breeds/orloff.jpg',
    desc:'Граф Орлов вывел его в 18 веке. Морозостойкий, бородатый, с орлиным взглядом. Идёт по двору, как боярин по Кремлю.',
    weight:'4 кг', mood:'Воинственный'
  },
  {
    id:'pavlovskaya', name:'Павловская', origin:'Россия', tag:'Корона',
    img:'images/breeds/pavlovskaya.jpg',
    desc:'Старейшая русская декоративная — село Павлово, 18 век. Хохол вертикальный, ноги в перьях, цвет — золото с серебром.',
    weight:'2 кг', mood:'Кокетлив'
  },
  {
    id:'cochin', name:'Кохинхин', origin:'Китай', tag:'Перьевые штаны',
    img:'images/breeds/cochin.jpg',
    desc:'Подарок королеве Виктории, запустивший «куриную лихорадку» 1845 года. Шар из перьев на коротких ножках. Чёрный — особенно зловещий.',
    weight:'4.5 кг', mood:'Дзен'
  },
  {
    id:'wyandotte', name:'Виандот', origin:'США', tag:'Серебрянное кружево',
    img:'images/breeds/wyandotte.jpg',
    desc:'Двухцелевой американский: и яйцо, и мясо. Перо в чёрно-белом кружеве — будто стоит в смокинге. Лучший позер на ферме.',
    weight:'3.8 кг', mood:'Хладнокровен'
  },
  {
    id:'bantam', name:'Бентамка', origin:'Юго-Восточная Азия', tag:'Карлик-боец',
    img:'images/breeds/bantam.jpg',
    desc:'Самая компактная боевая. Весит как яблоко, но дерётся как боксёр-полусредний. Голос — звонкий мини-фанфар на восходе.',
    weight:'0.7 кг', mood:'Дерзкий'
  },
  {
    id:'australorp', name:'Австралорп', origin:'Австралия', tag:'Чёрная молния',
    img:'images/breeds/australorp.jpg',
    desc:'Зелёно-чёрный перелив, мировой рекорд по яйцам (364 яйца за 365 дней, 1922). Тихий, серьёзный, фотогеничный.',
    weight:'4 кг', mood:'Невозмутим'
  }
];

const ANATOMY = {
  comb:{
    title:'Гребень',
    text:'Кожный нарост на голове. Регулирует температуру, демонстрирует здоровье и статус. Чем краснее и крупнее — тем выше петух в табели о рангах. Куры выбирают по нему.'
  },
  wattle:{
    title:'Серёжки (борода)',
    text:'Парные кожные лоскуты под клювом. Тоже терморегуляция + сексуальный сигнал. Болтаются при кукареке — добавляют театральности.'
  },
  beak:{
    title:'Клюв',
    text:'Многофункциональный инструмент: еда, оборона, уход за пером, выяснение отношений. Растёт всю жизнь, стачивается о зерно и землю.'
  },
  hackle:{
    title:'Грива (хэкл)',
    text:'Длинные узкие перья на шее. У петуха — острые и блестящие, у курицы — короче и тусклее. Главный визуальный маркер пола.'
  },
  sickle:{
    title:'Косицы хвоста',
    text:'Длинные изогнутые перья в хвосте — серповидные. Только у петуха. У орловского и феникса достигают полуметра. Чистая декоративная заявка.'
  },
  saddle:{
    title:'Поясница',
    text:'Зона перед хвостом, покрыта «седельными» перьями. У петуха они длинные, нарядные. По форме седла можно отличить породу даже со спины.'
  },
  spur:{
    title:'Шпоры',
    text:'Костяные шипы на плюснах. Растут с возрастом, у пожилых петухов — кривые, как сабли. Главное оружие в драке. У боевых пород их подпиливают.'
  },
  foot:{
    title:'Плюсна',
    text:'Голеноподобный участок ноги. У кохинхинов и брамы оперённая — петух идёт будто в валенках. У леггорна голая, жёлтая, спортивная.'
  }
};

const QUIZ = [
  {
    q:'Во сколько ты встаёшь?',
    options:[
      {label:'4:30 утра и счастлив', score:{orloff:3, brahma:2, australorp:1}},
      {label:'7:00, как все', score:{wyandotte:2, australorp:2, brahma:1}},
      {label:'Когда захочу — но громко', score:{bantam:3, leghorn:2}},
      {label:'Я ложусь в 4:30', score:{pavlovskaya:2, cochin:2}}
    ]
  },
  {
    q:'Твой стиль в одежде?',
    options:[
      {label:'Тяжёлая шуба и валенки', score:{brahma:3, cochin:3}},
      {label:'Бакенбарды и борода', score:{orloff:3, australorp:1}},
      {label:'Хохол на голове', score:{pavlovskaya:3}},
      {label:'Чёрно-белый смокинг', score:{wyandotte:3, australorp:2}},
      {label:'Я в спортивном, я худой', score:{leghorn:3, bantam:2}}
    ]
  },
  {
    q:'Как ты решаешь конфликт?',
    options:[
      {label:'Прихожу телом, никто не дерётся', score:{brahma:3, cochin:2}},
      {label:'Орём друг на друга, пока не устанем', score:{leghorn:3}},
      {label:'Сразу шпоры, разговоры потом', score:{bantam:3, orloff:2}},
      {label:'Холодный взгляд — оппонент уходит сам', score:{australorp:3, wyandotte:2}},
      {label:'Я слишком красив для драки', score:{pavlovskaya:3}}
    ]
  },
  {
    q:'Что ты делаешь по вечерам?',
    options:[
      {label:'Считаю кур и поголовье', score:{wyandotte:2, australorp:2, brahma:1}},
      {label:'Отрабатываю кукарек', score:{leghorn:2, bantam:3, orloff:1}},
      {label:'Позирую перед лужей', score:{pavlovskaya:3, wyandotte:1}},
      {label:'Сплю в обнимку с курицей', score:{cochin:3, brahma:2}},
      {label:'Точно не сплю — ночь моя', score:{orloff:2, bantam:1}}
    ]
  },
  {
    q:'Если бы ты был музыкой:',
    options:[
      {label:'Тяжёлый рок с органом', score:{brahma:2, orloff:3}},
      {label:'Гранж, нервно и быстро', score:{leghorn:3, bantam:2}},
      {label:'Минимализм Эрика Сати', score:{cochin:3, australorp:2}},
      {label:'Барочный концерт с трубами', score:{pavlovskaya:3, wyandotte:2}},
      {label:'Чёрный металл', score:{australorp:3, orloff:1}}
    ]
  }
];

const QUIZ_DESC = {
  orloff:'Тёмный гангстер двора. Молчит часами, бьёт первым, голос как из бочки. Тебя боятся даже коты.',
  brahma:'Тяжёлый мирный гигант. Никогда не торопишься, никогда не злишься, но если сел — никто тебя не сдвинет.',
  leghorn:'Промышленный кочет на скорости. Высокий метаболизм, громкий голос, 300 идей в день, ни одна не реализована.',
  pavlovskaya:'Декоративная редкость. Ты на встречах больше следишь за светом, чем за повесткой. И правильно делаешь.',
  cochin:'Кочет-дзен. Перьевые штаны, тихий характер, цикл сна 14 часов. Курицы у тебя в безопасности.',
  wyandotte:'Эталонный американский middle-cock. Двойного назначения, в смокинге, говоришь спокойно, но имеешь мнение.',
  bantam:'Маленький, но опасный. Карликовый боец с энергией промышленной кофемашины. Не дай Бог дать тебе кофе.',
  australorp:'Чёрная молния. Молчун-рекордсмен. Делаешь по 364 кукарека в год, но никто не знает, как ты это успеваешь.'
};

/* ────── CURTAIN ────── */
document.addEventListener('DOMContentLoaded', () => {
  const curtain = document.getElementById('curtain');
  setTimeout(() => curtain && curtain.remove(), 3200);
});

/* ────── WEB AUDIO: COCK-A-DOODLE-DOO SYNTH ────── */
let _ac;
function ac(){
  if(!_ac){
    try{ _ac = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e){ _ac = null; }
  }
  if(_ac && _ac.state === 'suspended'){ _ac.resume(); }
  return _ac;
}

/**
 * Crow synthesised from a frequency arc + harmonics + noise burst.
 * Pattern: short rising cluck → long sustained shout → drop.
 */
function crow(){
  const a = ac();
  if(!a) return;
  const now = a.currentTime;

  // Master with soft compression-ish gain
  const master = a.createGain();
  master.gain.setValueAtTime(0, now);
  master.gain.linearRampToValueAtTime(0.35, now + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  master.connect(a.destination);

  // Pattern: kuh-ka-ree-koooo
  // We do 4 notes with falling pitch on the last one
  const notes = [
    { f0: 380, f1: 520, t0: 0.00, t1: 0.12, kind:'saw' },   // КУ
    { f0: 600, f1: 720, t0: 0.13, t1: 0.30, kind:'square' },// КА
    { f0: 820, f1: 920, t0: 0.31, t1: 0.55, kind:'saw' },   // РЕ
    { f0: 700, f1: 280, t0: 0.55, t1: 1.10, kind:'sawtooth-fall' } // КУУУ
  ];

  notes.forEach(n => {
    const osc = a.createOscillator();
    const sub = a.createOscillator();
    const g = a.createGain();
    const filt = a.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.value = (n.f0+n.f1)/2;
    filt.Q.value = 4;

    osc.type = (n.kind === 'square') ? 'square' : 'sawtooth';
    sub.type = 'triangle';
    osc.frequency.setValueAtTime(n.f0, now + n.t0);
    osc.frequency.linearRampToValueAtTime(n.f1, now + n.t1);
    sub.frequency.setValueAtTime(n.f0/2, now + n.t0);
    sub.frequency.linearRampToValueAtTime(n.f1/2, now + n.t1);

    const peak = 0.5;
    g.gain.setValueAtTime(0, now + n.t0);
    g.gain.linearRampToValueAtTime(peak, now + n.t0 + 0.025);
    g.gain.exponentialRampToValueAtTime(0.0001, now + n.t1);

    osc.connect(filt); sub.connect(filt);
    filt.connect(g); g.connect(master);
    osc.start(now + n.t0); sub.start(now + n.t0);
    osc.stop(now + n.t1 + 0.02); sub.stop(now + n.t1 + 0.02);
  });

  // Noise burst at the front — adds gritty rooster rasp
  const bufSize = a.sampleRate * 0.3;
  const buf = a.createBuffer(1, bufSize, a.sampleRate);
  const data = buf.getChannelData(0);
  for(let i=0;i<bufSize;i++){ data[i] = (Math.random()*2-1) * (1 - i/bufSize) * 0.6; }
  const src = a.createBufferSource(); src.buffer = buf;
  const nFilt = a.createBiquadFilter(); nFilt.type = 'bandpass'; nFilt.frequency.value = 1800; nFilt.Q.value = 0.8;
  const nGain = a.createGain();
  nGain.gain.setValueAtTime(0, now);
  nGain.gain.linearRampToValueAtTime(0.25, now + 0.03);
  nGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
  src.connect(nFilt); nFilt.connect(nGain); nGain.connect(master);
  src.start(now); src.stop(now + 0.6);
}

/* ────── SCREEN SHAKE ────── */
function shake(){
  const root = document.body;
  if(root.classList.contains('is-shaking')) return;
  root.classList.add('is-shaking');
  setTimeout(() => root.classList.remove('is-shaking'), 650);
}

/* ────── METER ────── */
const LS_KEY = 'petukhi.crowCount';
const LS_RATE = 'petukhi.crowRate';

let crowCount = parseInt(localStorage.getItem(LS_KEY) || '0', 10);
let bestRate = parseInt(localStorage.getItem(LS_RATE) || '0', 10);
let lastClicks = []; // timestamps for rate calc

const TIERS = [
  [1,'Цыплёнок'],
  [10,'Подросток'],
  [50,'Кочет'],
  [200,'Хозяин двора'],
  [1000,'Бог рассвета'],
];

function tierFor(n){
  let label = 'Яйцо';
  for(const [thr,name] of TIERS){
    if(n >= thr) label = name;
  }
  return label;
}

function refreshMeterUI(){
  const cntEl = document.getElementById('meterCount');
  const rateEl = document.getElementById('meterRate');
  const tierEl = document.getElementById('meterTier');
  const barEl = document.getElementById('meterBar');
  if(cntEl) cntEl.textContent = crowCount.toLocaleString('ru-RU');
  if(rateEl) rateEl.textContent = bestRate;
  if(tierEl) tierEl.textContent = tierFor(crowCount);
  if(barEl){
    // Progress to next tier
    let prev = 0, next = TIERS[TIERS.length-1][0];
    for(const [thr] of TIERS){
      if(crowCount >= thr){ prev = thr; }
      else { next = thr; break; }
    }
    const pct = (next === prev) ? 100 : Math.min(100, ((crowCount - prev) / (next - prev)) * 100);
    barEl.style.width = pct + '%';
  }
}

function recordCrow(){
  crowCount += 1;
  const now = performance.now();
  lastClicks.push(now);
  // keep only last 1s
  lastClicks = lastClicks.filter(t => now - t < 1000);
  if(lastClicks.length > bestRate){
    bestRate = lastClicks.length;
    localStorage.setItem(LS_RATE, String(bestRate));
  }
  localStorage.setItem(LS_KEY, String(crowCount));
  refreshMeterUI();
}

/* ────── ALL CROW BUTTONS ────── */
function hookCrowButton(el, opts = {}){
  if(!el) return;
  el.addEventListener('click', (e) => {
    crow();
    if(opts.shake !== false) shake();
    if(opts.count !== false) recordCrow();
    if(opts.pulse){
      el.classList.add('is-active');
      setTimeout(() => el.classList.remove('is-active'), 200);
    }
    // Emoji puff
    if(opts.puff){
      const r = el.getBoundingClientRect();
      puff(r.left + r.width/2, r.top + r.height/2);
    }
  });
}

function puff(x, y){
  const stage = document.getElementById('rainStage');
  if(!stage) return;
  for(let i=0;i<6;i++){
    const d = document.createElement('div');
    d.className = 'rain__drop';
    d.style.left = x + 'px';
    d.style.top = y + 'px';
    d.style.setProperty('--d', (0.8 + Math.random()*0.7) + 's');
    const dx = (Math.random()-0.5) * 220;
    d.textContent = '🐓';
    d.style.transform = `translate(-50%,-50%)`;
    d.animate(
      [
        { transform:`translate(-50%,-50%) scale(.4)`, opacity:1 },
        { transform:`translate(calc(-50% + ${dx}px), calc(-50% + 160px)) scale(1.1) rotate(${(Math.random()-0.5)*240}deg)`, opacity:0 }
      ],
      { duration: 800 + Math.random()*400, easing:'cubic-bezier(.2,.7,.2,1)' }
    );
    stage.appendChild(d);
    setTimeout(() => d.remove(), 1300);
  }
}

/* ────── BREEDS RENDER ────── */
function renderBreeds(){
  const grid = document.getElementById('breedsGrid');
  if(!grid) return;
  grid.innerHTML = BREEDS.map(b => `
    <article class="breed reveal" data-breed="${b.id}">
      <div class="breed__media"><img src="${b.img}" alt="${b.name}" loading="lazy" /></div>
      <div class="breed__body">
        <div class="breed__head">
          <h3 class="breed__name">${b.name}</h3>
          <span class="breed__origin">${b.origin}</span>
        </div>
        <p class="breed__tag">${b.tag}</p>
        <p class="breed__desc">${b.desc}</p>
        <div class="breed__stats">
          <span>Вес <b>${b.weight}</b></span>
          <span>·</span>
          <span>Темперамент <b>${b.mood}</b></span>
        </div>
      </div>
    </article>
  `).join('');
  // Tap a breed → crow
  grid.querySelectorAll('.breed').forEach(card => {
    card.addEventListener('click', () => { crow(); });
  });
}

/* ────── ANATOMY ────── */
function hookAnatomy(){
  const pins = document.querySelectorAll('.anatomy__pin');
  const info = document.getElementById('anatomyInfo');
  if(!info) return;
  const setActive = (key) => {
    pins.forEach(p => p.classList.toggle('is-active', p.dataset.pin === key));
    const data = ANATOMY[key];
    if(!data) return;
    info.innerHTML = `<h3 class="anatomy__info-title">${data.title}</h3><p class="anatomy__info-text">${data.text}</p>`;
  };
  pins.forEach(p => {
    const handler = () => setActive(p.dataset.pin);
    p.addEventListener('click', handler);
    p.addEventListener('mouseenter', handler);
    p.addEventListener('focus', handler);
  });
}

/* ────── QUIZ ────── */
let quizState = { step:0, scores:{} };

function renderQuiz(){
  const stage = document.getElementById('quizStage');
  if(!stage) return;

  if(quizState.step >= QUIZ.length){
    return renderQuizResult();
  }

  const q = QUIZ[quizState.step];
  stage.innerHTML = `
    <div class="quiz__step-counter">Вопрос ${quizState.step+1} / ${QUIZ.length}</div>
    <h3 class="quiz__question">${q.q}</h3>
    <div class="quiz__options">
      ${q.options.map((o,i) => `
        <button class="quiz__option" data-i="${i}">
          <span class="quiz__option-mark">${String.fromCharCode(65+i)}</span>
          <span>${o.label}</span>
        </button>
      `).join('')}
    </div>
  `;
  stage.querySelectorAll('.quiz__option').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.i, 10);
      const sc = q.options[i].score;
      for(const k in sc){ quizState.scores[k] = (quizState.scores[k]||0) + sc[k]; }
      quizState.step++;
      renderQuiz();
    });
  });
}

function renderQuizResult(){
  const stage = document.getElementById('quizStage');
  let best = null, bestVal = -1;
  for(const k in quizState.scores){
    if(quizState.scores[k] > bestVal){ bestVal = quizState.scores[k]; best = k; }
  }
  const breed = BREEDS.find(b => b.id === best) || BREEDS[0];
  stage.innerHTML = `
    <div class="quiz__result">
      <p class="quiz__result-eyebrow">Ты — кочет породы</p>
      <img class="quiz__result-img" src="${breed.img}" alt="${breed.name}" />
      <h3 class="quiz__result-name">${breed.name}</h3>
      <p class="quiz__result-desc">${QUIZ_DESC[breed.id] || breed.desc}</p>
      <button class="quiz__restart" type="button" id="quizRestart">Пройти ещё раз</button>
    </div>
  `;
  // Bonus crow on result
  crow();
  document.getElementById('quizRestart').addEventListener('click', () => {
    quizState = { step:0, scores:{} };
    renderQuiz();
  });
}

/* ────── REVEAL ON SCROLL ────── */
function hookReveal(){
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });
  const targets = document.querySelectorAll('section, .breed, .fact, .legend');
  targets.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
  // Safety: anything still hidden after 1.6s gets revealed (avoids broken state in static snapshots)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight){ el.classList.add('is-visible'); }
    });
  }, 1600);
}

/* ────── KONAMI: ↑↑↓↓←→←→BA ────── */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiBuf = [];
function hookKonami(){
  window.addEventListener('keydown', (e) => {
    konamiBuf.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
    if(konamiBuf.length > KONAMI.length) konamiBuf.shift();
    if(konamiBuf.length === KONAMI.length && konamiBuf.every((k,i)=>k===KONAMI[i])){
      konamiBuf = [];
      roosterRain();
    }
  });
}
function roosterRain(){
  const stage = document.getElementById('rainStage');
  if(!stage) return;
  const N = 80;
  for(let i=0;i<N;i++){
    setTimeout(() => {
      const d = document.createElement('div');
      d.className = 'rain__drop';
      d.style.left = (Math.random() * 100) + 'vw';
      d.style.setProperty('--d', (2.5 + Math.random()*3) + 's');
      d.textContent = '🐓';
      stage.appendChild(d);
      setTimeout(() => d.remove(), 6500);
    }, i * 60);
  }
  // Triple-crow + shake on activation
  crow();
  setTimeout(crow, 220);
  setTimeout(crow, 460);
  shake();
}

/* ────── BOOT ────── */
document.addEventListener('DOMContentLoaded', () => {
  renderBreeds();
  hookAnatomy();
  renderQuiz();
  hookReveal();
  hookKonami();
  refreshMeterUI();
  hookCrowButton(document.getElementById('navCrow'), { shake:true, count:true, pulse:true, puff:true });
  hookCrowButton(document.getElementById('heroCrow'), { shake:true, count:true, pulse:true, puff:true });
  hookCrowButton(document.getElementById('meterButton'), { shake:false, count:true, pulse:true, puff:true });
  const reset = document.getElementById('meterReset');
  if(reset){
    reset.addEventListener('click', () => {
      crowCount = 0; bestRate = 0;
      localStorage.removeItem(LS_KEY); localStorage.removeItem(LS_RATE);
      refreshMeterUI();
    });
  }
});
