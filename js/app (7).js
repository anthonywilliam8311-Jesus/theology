const CFG={owner:'anthonywilliam8311-Jesus',repo:'theology',wa:'255703338311',mail:'anthonywilliam8311@gmail.com'};
// ===== SAINTS: quotes (Orthodox, Catholic, and saints honoured by both). =====
// Add a saint by copying one block and editing it. tradition = "Catholic" | "Orthodox" | "Catholic & Orthodox"
const SAINTS=[
  {"id": "augustine-of-hippo", "name": "Augustine of Hippo", "short": "AUGUSTINE", "dates": "354–430", "tradition": "Catholic", "feast": "August 28 (Catholic) · June 15 (Orthodox, as Blessed Augustine)", "quotes": [{"t": "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", "w": "Confessions, Book I"}, {"t": "Faith is to believe what you do not see; the reward of this faith is to see what you believe.", "w": "Sermon 43"}], "epithet": "Bishop & Doctor of the Church"},
  {"id": "thomas-aquinas", "name": "Thomas Aquinas", "short": "AQUINAS", "dates": "1225–1274", "tradition": "Catholic", "feast": "January 28 (Catholic)", "quotes": [{"t": "Grace does not destroy nature, but perfects it.", "w": "Summa Theologiae I, q.1, a.8"}], "epithet": "Priest & Doctor of the Church"},
  {"id": "anselm-of-canterbury", "name": "Anselm of Canterbury", "short": "ANSELM", "dates": "1033–1109", "tradition": "Catholic", "feast": "April 21 (Catholic)", "quotes": [{"t": "I do not seek to understand that I may believe, but I believe in order to understand.", "w": "Proslogion, chapter 1"}], "epithet": "Archbishop & Doctor of the Church"},
  {"id": "bernard-of-clairvaux", "name": "Bernard of Clairvaux", "short": "BERNARD", "dates": "1090–1153", "tradition": "Catholic", "feast": "August 20 (Catholic)", "quotes": [{"t": "The reason for loving God is God; the measure of love is to love without measure.", "w": "On Loving God"}], "epithet": "Abbot & Doctor of the Church"},
  {"id": "teresa-of-avila", "name": "Teresa of Ávila", "short": "TERESA OF ÁVILA", "dates": "1515–1582", "tradition": "Catholic", "feast": "October 15 (Catholic)", "quotes": [{"t": "Let nothing disturb you, let nothing frighten you. All things pass; God never changes. God alone suffices.", "w": "Her bookmark poem"}], "female": true, "epithet": "Virgin & Doctor of the Church"},
  {"id": "john-henry-newman", "name": "John Henry Newman", "short": "NEWMAN", "dates": "1801–1890", "tradition": "Catholic", "feast": "October 9 (Catholic)", "quotes": [{"t": "To be deep in history is to cease to be Protestant.", "w": "Essay on the Development of Christian Doctrine"}], "epithet": "Priest & Cardinal"},
  {"id": "john-paul-ii", "name": "John Paul II", "short": "JOHN PAUL II", "dates": "1920–2005", "tradition": "Catholic", "feast": "October 22 (Catholic)", "quotes": [{"t": "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.", "w": "Fides et Ratio, opening line"}], "epithet": "Pope"},
  {"id": "ignatius-of-antioch", "name": "Ignatius of Antioch", "short": "IGNATIUS", "dates": "died c. 108", "tradition": "Catholic & Orthodox", "feast": "October 17 (Catholic) · December 20 (Orthodox)", "quotes": [{"t": "Where Jesus Christ is, there is the Catholic Church.", "w": "Letter to the Smyrnaeans 8"}], "epithet": "Bishop & Martyr"},
  {"id": "irenaeus-of-lyons", "name": "Irenaeus of Lyons", "short": "IRENAEUS", "dates": "c. 130–202", "tradition": "Catholic & Orthodox", "feast": "June 28 (Catholic) · August 23 (Orthodox)", "quotes": [{"t": "The glory of God is a living man; and the life of man is the vision of God.", "w": "Against Heresies IV.20.7"}], "epithet": "Bishop & Father of the Church"},
  {"id": "cyprian-of-carthage", "name": "Cyprian of Carthage", "short": "CYPRIAN", "dates": "c. 200–258", "tradition": "Catholic & Orthodox", "feast": "September 16 (Catholic and Orthodox)", "quotes": [{"t": "He cannot have God for his Father who does not have the Church for his mother.", "w": "On the Unity of the Church 6"}], "epithet": "Bishop & Martyr"},
  {"id": "athanasius-of-alexandria", "name": "Athanasius of Alexandria", "short": "ATHANASIUS", "dates": "c. 296–373", "tradition": "Catholic & Orthodox", "feast": "May 2 (Catholic) · January 18 (Orthodox)", "quotes": [{"t": "He became man that we might become God.", "w": "On the Incarnation 54"}], "epithet": "Archbishop & Confessor"},
  {"id": "gregory-of-nazianzus", "name": "Gregory of Nazianzus", "short": "GREGORY", "dates": "c. 329–390", "tradition": "Catholic & Orthodox", "feast": "January 2 (Catholic) · January 25 (Orthodox)", "quotes": [{"t": "That which He has not assumed He has not healed.", "w": "Letter 101"}], "epithet": "Archbishop & Theologian"},
  {"id": "jerome", "name": "Jerome", "short": "JEROME", "dates": "c. 347–420", "tradition": "Catholic & Orthodox", "feast": "September 30 (Catholic) · June 15 (Orthodox, as Blessed Jerome)", "quotes": [{"t": "Ignorance of Scripture is ignorance of Christ.", "w": "Commentary on Isaiah, Prologue"}], "epithet": "Priest & Doctor of the Church"},
  {"id": "john-chrysostom", "name": "John Chrysostom", "short": "CHRYSOSTOM", "dates": "c. 347–407", "tradition": "Catholic & Orthodox", "feast": "September 13 (Catholic) · November 13 (Orthodox)", "quotes": [{"t": "Do you wish to honour the body of Christ? Do not despise him when he is naked.", "w": "Homily 50 on Matthew"}], "epithet": "Archbishop & Hierarch"},
  {"id": "vincent-of-lerins", "name": "Vincent of Lérins", "short": "VINCENT", "dates": "died c. 445", "tradition": "Catholic & Orthodox", "feast": "May 24 (Catholic and Orthodox)", "quotes": [{"t": "We hold that which has been believed everywhere, always, by all.", "w": "Commonitory 2"}], "epithet": "Monk & Priest"},
  {"id": "isaac-the-syrian", "name": "Isaac the Syrian", "short": "ISAAC", "dates": "7th century", "tradition": "Orthodox", "feast": "January 28 (Orthodox)", "quotes": [{"t": "Be at peace with your own soul, and heaven and earth will be at peace with you.", "w": "Ascetical Homilies"}], "epithet": "Bishop & Ascetic"},
  {"id": "seraphim-of-sarov", "name": "Seraphim of Sarov", "short": "SERAPHIM", "dates": "1754–1833", "tradition": "Orthodox", "feast": "January 2 (Orthodox, Julian calendar)", "quotes": [{"t": "Acquire a peaceful spirit, and thousands around you will be saved.", "w": "Attributed saying"}], "epithet": "Venerable Elder"},
  {"id": "silouan-the-athonite", "name": "Silouan the Athonite", "short": "SILOUAN", "dates": "1866–1938", "tradition": "Orthodox", "feast": "September 24 (Orthodox)", "quotes": [{"t": "Keep your mind in hell, and despair not.", "w": "Words recorded by Elder Sophrony"}], "epithet": "Venerable Elder"},
  {"id": "basil-the-great", "name": "Basil the Great", "short": "BASIL", "dates": "c. 330–379", "tradition": "Catholic & Orthodox", "feast": "January 2 (Catholic) · January 1 (Orthodox)", "epithet": "Archbishop & Hierarch", "quotes": [{"t": "The bread in your cupboard belongs to the hungry; the coat in your closet belongs to the one who needs it.", "w": "Homily on Luke 12:18 (paraphrased)"}]},
  {"id": "francis-of-assisi", "name": "Francis of Assisi", "short": "FRANCIS", "dates": "1181–1226", "tradition": "Catholic", "feast": "October 4 (Catholic)", "epithet": "Friar & Founder", "quotes": [{"t": "Where there is charity and wisdom, there is neither fear nor ignorance.", "w": "Admonitions 27"}]}
];

const KNOWN={'theology':['Theology','Doctrine of God, Scripture, Christ and the Church.'],
'islamic-dilemma':['Islamic Dilemma','Respectful questions in Christian–Muslim dialogue.'],
'apostolic-faith':['Apostolic Faith','The faith handed down from the Apostles.'],
'atheism':['Atheism','Reason, evidence and the case for God.'],
'hinduism':['Hinduism','Meeting Hindu thought in the light of Christ.'],
'buddhism':['Buddhism','Suffering, emptiness and the Christian answer.']};
const ICON={wa:'<svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5z"/><path d="M9.2 8.6c-.3 2.5 2.7 5.8 5.8 6l1-1.6-1.8-1-.9.8c-.9-.4-1.7-1.2-2.1-2.1l.8-.9-.9-1.8z"/></svg>',
mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'};
const icons=()=>`<a href="https://wa.me/${CFG.wa}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">${ICON.wa}</a><a href="mailto:${CFG.mail}" aria-label="Email" title="Email">${ICON.mail}</a>`;
// ===== VERSE OF THE DAY (Douay-Rheims, public domain). Add more lines to this list any time. =====
const VERSES=[
  {t:"Who hath ascended up into heaven, and descended? who hath held the wind in his hands? who hath bound up the waters together as in a garment? who hath raised up all the borders of the earth? what is his name, and what is the name of his son, if thou knowest?",r:"Proverbs 30:4"},
  {t:"In the beginning was the Word: and the Word was with God: and the Word was God.",r:"John 1:1"},
  {t:"Jesus saith to him: I am the way, and the truth, and the life. No man cometh to the Father, but by me.",r:"John 14:6"},
  {t:"Thy word is a lamp to my feet, and a light to my paths.",r:"Psalm 118:105"},
  {t:"Have confidence in the Lord with all thy heart, and lean not upon thy own prudence.",r:"Proverbs 3:5"},
  {t:"Now faith is the substance of things to be hoped for, the evidence of things that appear not.",r:"Hebrews 11:1"},
  {t:"But sanctify the Lord Christ in your hearts, being ready always to satisfy every one that asketh you a reason of that hope and faith which is in you.",r:"1 Peter 3:15"},
  {t:"Faith then cometh by hearing; and hearing by the word of Christ.",r:"Romans 10:17"},
  {t:"And you shall know the truth, and the truth shall make you free.",r:"John 8:32"},
  {t:"Come to me, all you that labour, and are burthened, and I will refresh you.",r:"Matthew 11:28"},
  {t:"For by the greatness of the beauty, and of the creature, the Creator of them may be seen, so as to be known thereby.",r:"Wisdom 13:5"},
  {t:"The heavens shew forth the glory of God, and the firmament declareth the work of his hands.",r:"Psalm 18:2"},
  {t:"All scripture, inspired of God, is profitable to teach, to reprove, to correct, to instruct in justice.",r:"2 Timothy 3:16"},
  {t:"Going therefore, teach ye all nations; baptizing them in the name of the Father, and of the Son, and of the Holy Ghost. Teaching them to observe all things whatsoever I have commanded you. And behold I am with you all days, even to the consummation of the world.",r:"Matthew 28:19-20"},
  {t:"For by grace you are saved through faith, and that not of yourselves, for it is the gift of God.",r:"Ephesians 2:8"},
  {t:"I can do all things in him who strengtheneth me.",r:"Philippians 4:13"},
  {t:"The church of the living God, the pillar and ground of the truth.",r:"1 Timothy 3:15"},
  {t:"And I say to thee: That thou art Peter; and upon this rock I will build my church, and the gates of hell shall not prevail against it.",r:"Matthew 16:18"},
  {t:"The fear of the Lord is the beginning of wisdom: and the knowledge of the holy is prudence.",r:"Proverbs 9:10"},
  {t:"The Lord is my light and my salvation, whom shall I fear? The Lord is the protector of my life, of whom shall I be afraid?",r:"Psalm 26:1"},
  {t:"Thomas answered, and said to him: My Lord, and my God.",r:"John 20:28"},
  {t:"Who is the image of the invisible God, the firstborn of every creature.",r:"Colossians 1:15"}
];
const VERSE_SECONDS=300; // seconds before the verse changes by itself (300 = 5 minutes; change this number for faster or slower)
const dayN=()=>{const d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5)};
const dayVerse=(o=0)=>VERSES[(((dayN()+o)%VERSES.length)+VERSES.length)%VERSES.length];
let vo=0;
function votd(){const n=VERSES.length,i=(((dayN()+vo)%n)+n)%n,v=VERSES[i];
const info=vo===0?new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):`Verse ${i+1} of ${n}`;
return `<div class="vt-top"><span class="vt-badge">✦ Verse of the Day</span><span class="vt-date">${info}</span></div><blockquote class="vt-q">${esc(v.t)}</blockquote><div class="vt-ref"><span>— ${v.r}</span><small>Douay-Rheims</small></div><div class="vt-act"><button data-a="prev" aria-label="Previous verse">‹</button><button data-a="today"${vo?'':' hidden'}>Back to today</button><button data-a="next" aria-label="Next verse">›</button><span class="sp"></span><button data-a="copy">Copy</button><button data-a="share">Share</button></div><i class="vt-bar" style="animation-duration:${VERSE_SECONDS}s"></i>`}
function bindVotd(){const el=$('#votd');if(!el)return;
const draw=()=>{el.innerHTML=votd();el.classList.remove('flip');void el.offsetWidth;el.classList.add('flip')};
const hold=on=>el.classList.toggle('paused',on);
el.addEventListener('animationend',e=>{if(e.target.classList.contains('vt-bar')){vo++;draw()}});
el.onmouseenter=()=>hold(true);el.onmouseleave=()=>hold(false);el.onfocusin=()=>hold(true);el.onfocusout=()=>hold(false);
el.ontouchstart=()=>hold(true);el.ontouchend=()=>setTimeout(()=>hold(false),4000);
el.onclick=e=>{const a=e.target.dataset&&e.target.dataset.a;if(!a)return;
if(a==='prev'){vo--;draw()}else if(a==='next'){vo++;draw()}else if(a==='today'){vo=0;draw()}
else{const v=dayVerse(vo),txt=`“${v.t}” — ${v.r} (Douay-Rheims)`,b=e.target;
if(a==='share'&&navigator.share)navigator.share({text:txt}).catch(()=>{});
else{try{navigator.clipboard.writeText(txt)}catch(x){}b.textContent='Copied ✓';setTimeout(()=>b.textContent=a==='copy'?'Copy':'Share',1500)}}}}
const SC={'Catholic':'#e8a0b4','Orthodox':'#9cc0ff','Catholic & Orthodox':'#f1d27a'};
const QUOTES=[...SAINTS.map(s=>({...s.quotes[0],s})),...SAINTS.filter(s=>s.quotes[1]).map(s=>({...s.quotes[1],s}))];
let so=0,sf='all';
const pool=()=>QUOTES.filter(q=>sf==='all'||q.s.tradition.includes(sf==='orthodox'?'Orthodox':'Catholic'));
const saintAt=o=>{const l=pool(),n=l.length,i=(((dayN()+o)%n)+n)%n;return[l[i],i,n]};
function saintHTML(){const[q,i,n]=saintAt(so),sa=q.s,tr=sa.tradition,k=tr==='Orthodox'?'o':tr==='Catholic'?'c':'b';
const tab=(t,l)=>`<button class="${sf===t?'on':''}" data-t="${t}">${l}</button>`;
return`<div class="sv k-${k}"><div class="sv-top"><span class="sv-eye"><i></i>Saint of the Day</span><div class="sv-tabs">${tab('all','All')}${tab('orthodox','Orthodox')}${tab('catholic','Catholic')}</div></div>
<blockquote class="sv-q">“${esc(q.t)}”</blockquote>
<div class="sv-bot"><div class="sv-who"><b>St. ${sa.name}</b><span>${sa.epithet} · ${sa.dates}</span></div><span class="sv-chip">${tr}</span><span class="sv-feast" title="${sa.feast}">Feast: ${sa.feast}</span><div class="sv-act"><button data-s="prev" aria-label="Previous quote">‹</button><button class="sv-n" data-s="today" title="Back to today">${so===0?'Today':`${i+1}/${n}`}</button><button data-s="next" aria-label="Next quote">›</button><button data-s="copy" aria-label="Copy quote" title="Copy">⧉</button></div></div></div>`}
function bindSaint(){const el=$('#saint');if(!el)return;const draw=()=>{el.innerHTML=saintHTML()};
el.onclick=e=>{const b=e.target;if(b.dataset.t){sf=b.dataset.t;so=0;return draw()}const a=b.dataset.s;if(!a)return;
if(a==='prev'){so--;draw()}else if(a==='next'){so++;draw()}else if(a==='today'){so=0;draw()}
else{const[q]=saintAt(so);try{navigator.clipboard.writeText(`“${q.t}” — St. ${q.s.name}`)}catch(x){}b.textContent='✓';setTimeout(()=>b.textContent='⧉',1500)}}}
const $=s=>document.querySelector(s),app=$('#app');
const esc=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const nice=id=>KNOWN[id]?KNOWN[id][0]:id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
const desc=id=>KNOWN[id]?KNOWN[id][1]:'Articles in this category.';
function md(s){const i=t=>esc(t).replace(/!\[(.*?)\]\(((?:https?:\/\/|\/|[\w.-]+\/)[^)\s]+)\)/g,'<img src="$2" alt="$1" loading="lazy">').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\*(.+?)\*/g,'<i>$1</i>').replace(/\[(.+?)\]\((https?:[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
return s.trim().split(/\n{2,}/).map(b=>{b=b.trim();const n=(b.match(/^#+/)||[''])[0].length;
if(/^-{3,}$/.test(b))return'<hr>';
if(/^#{2,3} /.test(b))return`<h${n}>${i(b.replace(/^#+ /,''))}</h${n}>`;
if(/^> /.test(b))return`<blockquote>${i(b.replace(/^> ?/gm,''))}</blockquote>`;
if(/^- /.test(b))return'<ul>'+b.split('\n').map(l=>`<li>${i(l.replace(/^- /,''))}</li>`).join('')+'</ul>';
if(/^\d+\. /.test(b))return'<ol>'+b.split('\n').map(l=>`<li>${i(l.replace(/^\d+\. /,''))}</li>`).join('')+'</ol>';
return`<p>${i(b)}</p>`}).join('')}
const slug=t=>t.toLowerCase().trim().replace(/[\s_]+/g,'-');
const ALIAS={'islamic-dillema':'islamic-dilemma','islam':'islamic-dilemma','islamic':'islamic-dilemma','budaism':'buddhism','buddism':'buddhism','budhism':'buddhism','buddha':'buddhism','hindu':'hinduism','apostolic':'apostolic-faith','apostolic-fath':'apostolic-faith'};
const norm=t=>{t=slug(t||'uncategorized');return ALIAS[t]||t};
function parse(raw,cat,file){raw=raw.replace(/^\uFEFF/,'');const m=raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/),f={};
if(m)m[1].split(/\r?\n/).forEach(l=>{const k=l.indexOf(':');if(k>0)f[l.slice(0,k).trim().toLowerCase()]=l.slice(k+1).trim().replace(/^["']|["']$/g,'')});
const body=m?m[2]:raw,name=file.replace(/\.(md|markdown)$/i,'');
return{cat:norm(f.category||cat),slug:name,title:f.title||name.replace(/-/g,' '),date:(f.date||'').slice(0,10),excerpt:f.excerpt||body.slice(0,150).replace(/[#>*\n]/g,' ')+'…',body}}
const host=location.hostname,onPages=host.endsWith('.github.io');
const OWNER=onPages?host.split('.')[0]:CFG.owner;
const seg=location.pathname.split('/')[1]||'';
const REPO=onPages?((seg&&!seg.includes('.'))?seg:host):CFG.repo;
let mem=null;
async function load(){
if(window.EMBED)return window.EMBED.map(a=>parse(a.raw,a.cat,a.file)).sort((a,b)=>b.date.localeCompare(a.date));
if(mem)return mem;const K='arts8';let c=null;try{c=JSON.parse(localStorage.getItem(K)||'null')}catch(e){}
if(c&&Date.now()-c.t<20000)return mem=c.d;
try{
const r=await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/git/trees/HEAD?recursive=1`);
if(!r.ok)throw new Error(r.status===403?'GitHub is limiting requests right now. Please try again in a few minutes.':r.status===404?`Repository ${OWNER}/${REPO} was not found. Make sure it is public.`:'GitHub error '+r.status);
const tree=(await r.json()).tree.filter(x=>x.type==='blob'&&/^articles\/.+\.(md|markdown)$/i.test(x.path)&&!/\/readme\.md$/i.test(x.path));
const out=(await Promise.all(tree.map(async x=>{const parts=x.path.split('/'),file=parts[parts.length-1],cat=parts.length>2?parts[1]:'';
try{let t=await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/HEAD/${encodeURI(x.path)}`);if(!t.ok)t=await fetch(encodeURI(x.path));if(!t.ok)return null;return parse(await t.text(),cat,file)}catch(e){return null}}))).filter(Boolean);
out.sort((a,b)=>b.date.localeCompare(a.date));try{localStorage.setItem(K,JSON.stringify({t:Date.now(),d:out}))}catch(e){}return mem=out}
catch(e){if(c)return mem=c.d;throw e}}
let A=[],fs=1.1;const cats=()=>[...Object.keys(KNOWN),...[...new Set(A.map(a=>a.cat))].filter(c=>!KNOWN[c])];
const cnt=c=>A.filter(a=>a.cat===c).length;const COL=['#1d4ed8','#047857','#b91c1c','#6d28d9','#c2410c','#0e7490','#a21caf','#4d7c0f'];const col=c=>COL[cats().indexOf(c)%COL.length];
const items=arr=>arr.length?arr.map(a=>`<div class="item" style="--c:${col(a.cat)}"><span class="tag">${nice(a.cat)}</span><h3><a href="#/article/${a.cat}/${a.slug}">${esc(a.title)}</a></h3><div class="meta">${a.date} · Anthony William</div><p>${esc(a.excerpt)}</p></div>`).join(''):'<div class="empty">No articles yet. Add a .md file to this topic folder on GitHub and it appears here automatically.</div>';
const side=()=>'';
const page=(t,sub,inner,c)=>`<div class="wrap cols" style="--c:${c||'#1d4ed8'}"><div><div class="crumb"><a href="#/">Home</a> › ${t}</div><h1 class="title">${t}</h1><p class="meta">${sub}</p>${inner}</div>${side()}</div>`;
const chap=a=>{const same=A.filter(z=>z.cat===a.cat),j=same.indexOf(a),pv=same[j+1],nx=same[j-1],L=z=>`#/article/${z.cat}/${z.slug}`;
return `<div class="chap">${pv?`<a href="${L(pv)}">‹ Previous</a>`:'<span class="n">‹ Previous</span>'}<em>${nice(a.cat)} · ${j<0?1:same.length-j} of ${same.length}</em>${nx?`<a href="${L(nx)}">Next ›</a>`:'<span class="n">Next ›</span>'}</div>`};
async function route(){try{A=await load()}catch(e){app.innerHTML='<div class="wrap"><div class="empty" style="margin:30px 0"><b>Could not load articles.</b><br>'+esc(e.message||'Unknown error')+'</div></div>';return}
const v=dayVerse();
const [,p,x,y]=location.hash.split('/').map(decodeURIComponent);let h='';
$('#nav').innerHTML=[['#/','Home',!p],['#/articles','All Articles',p==='articles'],...cats().map(c=>['#/category/'+c,nice(c),x===c&&p==='category',col(c)]),['#/about','About',p==='about']].map(n=>`<a class="${n[2]?'on':''}" ${n[3]?`style="--c:${n[3]}"`:''} href="${n[0]}">${n[1]}</a>`).join('');
if(!p)h=`<div class="wrap cols"><div><div class="votd" id="votd">${(vo=0,votd())}</div>
<h2 class="sec">Latest Articles</h2>${items(A.slice(0,6))}<p style="margin-top:18px"><a class="btn" href="#/articles">View all articles →</a></p><h2 class="sec" style="margin-top:34px">Saint of the Day</h2><div class="saint" id="saint">${(so=0,sf='all',saintHTML())}</div></div>${side()}</div>`;
else if(p==='articles')h=page('All Articles','Every article, newest first.',items(A));
else if(p==='category')h=page(nice(x),desc(x),items(A.filter(a=>a.cat===x)),col(x));
else if(p==='search'){const q=x.toLowerCase(),r=A.filter(a=>(!y||a.cat===y)&&(a.title+a.excerpt+a.body).toLowerCase().includes(q));h=page('Search Results',`${r.length} result${r.length==1?'':'s'} for “${esc(x)}”`,items(r))}
else if(p==='about')h=page('About','The author and the purpose of this site.',`<div class="passage"><p>I am <b>Anthony William</b>. This site explains the Christian faith clearly and defends it with reason, Scripture and Tradition — meeting other worldviews with honesty and charity.</p><p>Questions, corrections or conversation are welcome:</p></div><div class="side"><div class="icons">${icons()}</div></div>`);
else if(p==='article'){const a=A.find(a=>a.cat===x&&a.slug===y);
if(!a)h=page('Not found','','<div class="empty">Article not found.</div>');else{const rel=A.filter(z=>z.cat===a.cat&&z!==a).slice(0,3);
h=`<div class="wrap cols" style="--c:${col(a.cat)}"><div><div class="crumb"><a href="#/">Home</a> › <a href="#/category/${a.cat}">${nice(a.cat)}</a> › ${esc(a.title)}</div><h1 class="title">${esc(a.title)}</h1><div class="meta">By Anthony William · ${a.date}</div>${chap(a)}
<div class="tools"><button onclick="fz(-.1)">A−</button><button onclick="fz(.1)">A+</button><button onclick="print()">Print</button><button onclick="navigator.clipboard&&navigator.clipboard.writeText(location.href);this.textContent='Copied'">Copy link</button></div>
<div class="passage" id="ps" style="font-size:${fs}rem">${md(a.body)}</div>${chap(a)}${rel.length?`<h2 class="sec" style="margin-top:40px">More in ${nice(a.cat)}</h2>${items(rel)}`:''}</div>${side()}</div>`}}
const cur=p==='article'&&A.find(z=>z.cat===x&&z.slug===y);document.title=(cur?cur.title+' — ':'')+'Theology and Apologetics';
app.innerHTML=h;scrollTo(0,0);bindVotd();bindSaint()}
function fz(d){fs=Math.min(1.6,Math.max(.9,fs+d));$('#ps').style.fontSize=fs+'rem'}
$('#sf').onsubmit=e=>{e.preventDefault();const q=$('#sq').value.trim();if(q)location.hash='#/search/'+encodeURIComponent(q)};
$('#hdr-icons').innerHTML=icons();$('#yr').textContent=new Date().getFullYear();
$('#ftr').innerHTML=`<div><h4>Theology &amp; Apologetics</h4><p class="blurb">Explaining and defending the Christian faith with reason, Scripture and Tradition. By Anthony William.</p></div><div><h4>Topics</h4>${Object.keys(KNOWN).map(c=>`<a href="#/category/${c}">${nice(c)}</a>`).join('')}</div><div><h4>Site</h4><a href="#/">Home</a><a href="#/articles">All Articles</a><a href="#/about">About Anthony William</a></div><div><h4>Connect</h4><div class="icons">${icons()}</div></div>`;
$('#contact').innerHTML=`<section class="contact"><div class="wrap"><div class="ct-card"><div class="ct-txt"><small>Contact</small><h2>Get in Touch with Anthony</h2><p>Have a question about the faith, or want to discuss an article? Reach out directly — I read every message.</p></div><div class="ct-icons"><a class="ct wa" href="https://wa.me/${CFG.wa}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">${ICON.wa}</a><a class="ct ml" href="mailto:${CFG.mail}" aria-label="Email" title="Email">${ICON.mail}</a></div></div></div></section>`;
const H=document.documentElement,tv={g(){try{return localStorage.getItem('theme')}catch(e){}},s(v){try{localStorage.setItem('theme',v)}catch(e){}}};
H.dataset.theme=tv.g()||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
$('#theme').onclick=()=>{const n=H.dataset.theme==='dark'?'light':'dark';H.dataset.theme=n;tv.s(n)};
addEventListener('hashchange',route);route();
