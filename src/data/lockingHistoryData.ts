import { HistoryChapter, TimelineEvent, LockingMove, Pioneer } from '../types';

export const HISTORY_CHAPTERS: HistoryChapter[] = [
  {
    id: 'origins',
    number: 1,
    titleZh: '誕生與命名：一個美麗的意外',
    titleEn: 'Origins & Etymology: A Beautiful Mistake',
    period: '1969 - 1970',
    summaryZh: 'Locking 並不是在傳統舞蹈學院中被設計出來的，而是在洛杉磯由 Don Campbell 於即興模仿流行舞步時，因「無法完成連貫動作而產生的停頓」意外創造出的劃時代風格。',
    summaryEn: 'Locking was not engineered in a traditional dance conservatory. It was accidentally birthed in Los Angeles by Don Campbell while attempting to improvise popular dances, creating an epoch-making style out of his inability to execute fluid moves.',
    quote: {
      textZh: '「我當時不太會跳 Robot，所以在半空中突然卡住了。同伴 Sam Williams 笑著對我大喊：『快看！做那個 Campbell-lock！』這一切就此拉開序幕。」',
      textEn: '"I couldn’t do the Robot, so I would stop and freeze. Sam Williams laughed and shouted: \'Do that Campbell-lock!\' And that is where everything began."',
      authorZh: '唐·坎貝爾 (Don Campbell, 1951–2020)',
      authorEn: 'Don Campbell, Founder of Campbellocking'
    },
    paragraphs: [
      {
        id: 'orig-1',
        zh: '在1960年代末期，美國西岸的非裔美國青年社群正深受放克音樂（Funk Music）的律動洗禮。當時洛杉磯最熱門的舞步是「Funky Chicken」與早期的機械人動作（The Robot）。青年唐·坎貝爾（Don "Campbellock" Campbell）在當地的夜總會（如 The Citadel、The Maverick\'s Flat）與校園派對中跳舞時，因為身體柔韌度與協調性限制，經常在嘗試連貫舞步時猛然「鎖住（Lock / Freeze）」停在特定姿勢。',
        en: 'In the late 1960s, African American youth communities across the West Coast were immersed in the deep grooves of Funk music. The prevailing dance fads in Los Angeles included the "Funky Chicken" and early iterations of the "Robot." When young Don Campbell danced at local clubs like The Citadel and Maverick’s Flat, his physical constraints caused him to abruptly freeze or "lock" in mid-action whenever he failed to execute a fluid step.',
        keyTerms: ['Funky Chicken', 'The Robot', 'Don Campbell', 'Freeze / Lock']
      },
      {
        id: 'orig-2',
        zh: '出乎意料的是，唐·坎貝爾並沒有因此感到羞赧，反而將錯就錯，利用這種強烈、富有彈性且幽默的卡頓停頓（The Lock），結合誇張的手腕旋轉（Wrist Twirls）、指向人群的自信動作（Points）與熱情的拍手律動，轉化為一種前所未有的個人舞風。他最初稱這種風格為「Campbellocking」。',
        en: 'Rather than being embarrassed, Don Campbell leaned into the blunder. He transformed these sharp, snappy, humorous freezes (The Lock) into a personal style, combining them with wrist rolls, assertive finger points at the crowd, and jubilant hand claps. He originally named this revolutionary dance "Campbellocking."',
        keyTerms: ['Campbellocking', 'Wrist Twirls', 'Points', 'Claps']
      },
      {
        id: 'orig-3',
        zh: '隨著坎貝爾在洛杉磯各大俱樂部的舞王爭霸中接連奪冠，年輕舞者們紛紛湧向他學習。最初，這個動作被形容為「他在跳舞時突然鎖住了關節」，而詞彙「Lock」很快成為這套融合速度、停頓與喜劇表演風格的正式代名詞。',
        en: 'As Campbell continued to triumph in nightclub dance contests across Los Angeles, young dancers flocked to learn his style. Initially described as someone whose joints suddenly locked up mid-groove, the term "Lock" quickly became the definitive moniker for this dance of speed, stops, and comedic theatricality.',
        keyTerms: ['Lock', 'Nightclub contests', 'Comedic theatricality']
      }
    ],
    keyTakeaways: [
      {
        zh: 'Locking 源自於 Don Campbell 模仿 Funky Chicken / Robot 時的「失敗停頓」。',
        en: 'Locking originated from Don Campbell’s failure to perform the Funky Chicken / Robot fluently.'
      },
      {
        zh: '原始全名為「Campbellocking」，核心特徵是快速動作間的突發性停頓（Lock）。',
        en: 'The original name was "Campbellocking," characterized by sudden sharp halts (Locks) between rapid movements.'
      }
    ]
  },
  {
    id: 'soul-train',
    number: 2,
    titleZh: 'Soul Train 與電視媒介的傳播奇蹟',
    titleEn: 'Soul Train & The Television Breakthrough',
    period: '1971 - 1973',
    summaryZh: '傳奇音樂節目《Soul Train》從芝加哥移師洛杉磯後，成為 Locking 舞者向全美國觀眾展示這一獨特風格的終極舞台。電視螢幕將街頭地下文化推向了全國大眾文化的核心。',
    summaryEn: 'When the legendary music television show Soul Train relocated to Los Angeles, it became the ultimate platform for Lockers to showcase their unique craft to millions across America, propelling an underground street art form into mainstream pop culture.',
    paragraphs: [
      {
        id: 'st-1',
        zh: '1971年，電視節目製作人唐·科尼利厄斯（Don Cornelius）將《Soul Train》（靈魂列車）帶到加州洛杉磯。為了尋找最熱情、最前衛的舞池舞者，製作團隊在洛杉磯街頭俱樂部發掘了唐·坎貝爾以及圍繞在他身邊的第一代 Locking 舞者們。唐·坎貝爾迅速成為節目的常駐明星，他那充滿活力、滑稽自嘲又極具節奏感的舞姿吸引了數百萬每週六準時守候在電視機前的青少年。',
        en: 'In 1971, creator Don Cornelius moved "Soul Train" to Los Angeles. Seeking the freshest, most electrifying club dancers, producers recruited Don Campbell and the first wave of Lockers from LA nightclubs. Campbell quickly became a regular sensation; his high-energy, self-deprecating humor and rhythm captured millions of teenagers watching on Saturday mornings.',
        keyTerms: ['Don Cornelius', 'Soul Train', 'Television broadcast']
      },
      {
        id: 'st-2',
        zh: '在《Soul Train》標誌性的雙排舞道（The Soul Train Line）中，Locking 的手部快速旋轉、指尖指向鏡頭、劈腿與滑稽步伐透過彩色電視信號傳播到全美各地。許多非裔與拉丁裔青年看著電視自學動作，鎖舞不再只是洛杉磯某些社區俱樂部的秘密語言，而成為全美街舞青年爭相模仿的潮流象徵。',
        en: 'Down the iconic "Soul Train Line," Lockers flashed rapid wrist twirls, pointed sharply into cameras, executed knee drops, and paraded down the aisle. Millions of Black and Latino youths practiced in front of their televisions. Locking was no longer a localized LA nightclub phenomenon—it was a national dance phenomenon.',
        keyTerms: ['Soul Train Line', 'Knee drops', 'Youth culture']
      }
    ],
    keyTakeaways: [
      {
        zh: '電視節目《Soul Train》是讓 Locking 走向全美乃至世界的關鍵催化劑。',
        en: 'The TV program "Soul Train" served as the vital catalyst introducing Locking to nationwide audiences.'
      },
      {
        zh: '舞者藉由 Soul Train Line 的個人即興表演，樹立了 Locking 的大眾視覺標準。',
        en: 'Dancers solidified the iconic visual signature of Locking through personal solos in the Soul Train Line.'
      }
    ]
  },
  {
    id: 'the-lockers',
    number: 3,
    titleZh: 'The Lockers 舞團：專業化與服飾符號的建立',
    titleEn: 'The Lockers: Professionalization & Iconic Attire',
    period: '1973 - 1976',
    summaryZh: '由唐·坎貝爾與女編舞家托妮·巴西爾（Toni Basil）共同組建的「The Lockers」（原名 The Campbellock Dancers），是歷史上第一個將街舞搬上專業舞台與主流綜藝節目的職業舞團。',
    summaryEn: 'Co-founded by Don Campbell and choreographer Toni Basil, "The Lockers" (originally The Campbellock Dancers) was the very first street dance company to transition onto professional theatrical stages and mainstream prime-time television.',
    quote: {
      textZh: '「我們不僅是在跳舞，我們是在台上創造一場純粹快樂的卡通式喜劇風暴！」',
      textEn: '"We weren’t just dancing; we were unleashing an animated, cartoonish whirlwind of pure joyful comedy on stage!"',
      authorZh: '阿道夫·沙巴杜·奎諾尼斯 (Shabba-Doo, 1955–2020)',
      authorEn: 'Adolfo "Shabba-Doo" Quiñones, Legendary Member of The Lockers'
    },
    paragraphs: [
      {
        id: 'crew-1',
        zh: '1973年，唐·坎貝爾意識到需要保護這門舞步並提升其藝術與商業價值，於是他與才華橫溢的白人編舞家托妮·巴西爾（Toni Basil）以及格雷格·坎貝爾小克（Greg Campbellock Jr.）合作組建了傳奇舞團。創始黃金陣容包括：Don Campbell、Greg Campbellock Jr.、Fred "Rerun" Berry、Leo "Fluky Luke" Williamson、Adolfo "Shabba-Doo" Quiñones、Bill "Slim the Robot" Williams 以及 Toni Basil。',
        en: 'In 1973, recognizing the need to protect the dance and elevate its commercial and artistic standing, Don Campbell joined forces with choreographer Toni Basil and Greg Campbellock Jr. to form the legendary ensemble. The original lineup featured: Don Campbell, Greg Campbellock Jr., Fred "Rerun" Berry, Leo "Fluky Luke" Williamson, Adolfo "Shabba-Doo" Quiñones, Bill "Slim the Robot" Williams, and Toni Basil.',
        keyTerms: ['The Lockers', 'Toni Basil', 'Greg Campbellock Jr.', 'Fred Berry', 'Shabba-Doo']
      },
      {
        id: 'crew-2',
        zh: 'The Lockers 確立了名留青史的標誌性裝扮：色彩鮮明誇張的直條紋高筒長襪（Striped Knee-High Socks）、吊帶褲（Suspenders）、七分小燈籠短褲（Knickers）、七彩花襯衫、寬版領帶、白色手套以及大號報童帽（Apple Boy Caps）。這套服裝既致敬了早期非裔雜耍與喜劇演員，又巧妙避免了黑幫街頭街頭青年的負面刻板印象，賦予他們親切友善的卡通動漫感。',
        en: 'The Lockers established the iconic uniform that defined the genre: brightly colored striped knee-high socks, suspenders, knickers (baggy shorts), vibrant satin shirts, oversized bowties/ties, white gloves, and voluminous apple-boy caps. This attire paid homage to vaudeville performers while consciously steering away from street-gang stereotypes, projecting a vibrant cartoon-like charisma.',
        keyTerms: ['Striped socks', 'Knickers', 'Suspenders', 'Apple boy caps', 'White gloves']
      },
      {
        id: 'crew-3',
        zh: '他們登上了《週六夜現場》（Saturday Night Live）、《卡森今夜秀》（The Tonight Show Starring Johnny Carson）、《葛萊美獎頒獎典禮》（Grammy Awards），甚至為法蘭克·辛納屈（Frank Sinatra）暖場。The Lockers 證明了來自街頭的非裔青年舞蹈能夠擁有百老匯等級的商業票房與藝術敬意。',
        en: 'They graced Saturday Night Live, The Tonight Show Starring Johnny Carson, the Grammy Awards, and even opened for Frank Sinatra. The Lockers proved that street dance forged by Black urban youths possessed world-class theatrical appeal and could command high-profile respect.',
        keyTerms: ['Saturday Night Live', 'Johnny Carson', 'Frank Sinatra']
      }
    ],
    keyTakeaways: [
      {
        zh: 'The Lockers 是街舞歷史上首個取得商業主流巨大成功的職業表演團體。',
        en: 'The Lockers was the first street dance troupe in history to achieve massive mainstream commercial success.'
      },
      {
        zh: '吊帶褲、條紋襪與報童帽的經典視覺裝束在此時期被確立為 Locking 的文化符號。',
        en: 'The visual aesthetic of suspenders, striped socks, and apple-boy caps was codified as the cultural symbol of Locking.'
      }
    ]
  },
  {
    id: 'culture-philosophy',
    number: 4,
    titleZh: '放克音樂、文化根基與舞者哲學',
    titleEn: 'Funk Music, Cultural Roots & Dancer Philosophy',
    period: '放克年代精神 (The Funk Spirit)',
    summaryZh: 'Locking 與 Funk 音樂密不可分。與其他強調攻擊性或嚴肅比拼的街舞不同，Locking 的靈魂在於「喜悅、自嘲、互動與生命力」。',
    summaryEn: 'Locking is intrinsically inseparable from Funk music. Unlike competitive styles that emphasize hostility or grim aggression, Locking’s core philosophy is anchored in joy, self-deprecating wit, human connection, and boundless vitality.',
    paragraphs: [
      {
        id: 'phil-1',
        zh: 'Locking 的節奏基石建立在1970年代的放克音樂上，尤其是詹姆斯·布朗（James Brown）、The Jimmy Castor Bunch、Kool & The Gang、Earth Wind & Fire 以及 Tower of Power 的重低音節奏與銅管切分音。放克音樂中強調的「第1拍強拍（The One）」以及搖擺沉重的切分節奏，賦予了 Locking 動作爆發後瞬間停格的戲劇張力。',
        en: 'The rhythmic heartbeat of Locking relies on 1970s Funk music—especially the heavy basslines and brass syncopation of James Brown, The Jimmy Castor Bunch, Kool & The Gang, Earth Wind & Fire, and Tower of Power. Funk’s emphasis on "The One" (the heavy first downbeat) gives Locking its explosive propulsion followed by instant dramatic freezes.',
        keyTerms: ['James Brown', 'The One', 'Syncopation', 'Funk Music']
      },
      {
        id: 'phil-2',
        zh: '在舞蹈哲學層面，Don Campbell 常說：「Locking 是一種社交表演，你必須看著觀眾、與他們交流、向他們微笑、逗他們發笑。」因此，Locking 舞者常常用手指指向台下某個觀眾（Pointing），在驚訝的表情中拍拍手（Clapping），甚至在誇張的跌倒中瞬間轉化為華麗劈腿（Split）。這種喜劇天分與自娛娛人的精神，使 Locking 成為最具感染力的舞蹈形式。',
        en: 'In terms of philosophy, Don Campbell frequently noted: "Locking is a social conversation. You must look into people\'s eyes, smile with them, make them laugh, and communicate." Hence, Lockers constantly point at audience members, clap in joyous surprise, and turn clumsy stumbles into athletic splits. This comedic spirit makes Locking one of the most infectious dance forms in existence.',
        keyTerms: ['Social conversation', 'Eye contact', 'Comedy', 'Joy']
      }
    ],
    keyTakeaways: [
      {
        zh: '音樂是靈魂：Locking 動作完全對齊放克音樂的切分音與強拍（The One）。',
        en: 'Music is the soul: Locking technique is tightly locked with the syncopation and downbeats (The One) of Funk.'
      },
      {
        zh: '精神是感染力：強調與觀眾的目光交流、微笑、驚喜感與正面幽默。',
        en: 'Spirit is contagious: Emphasis on audience eye contact, smiling, element of surprise, and uplifting humor.'
      }
    ]
  },
  {
    id: 'global-renaissance',
    number: 5,
    titleZh: '全球擴散與當代復興',
    titleEn: 'Global Spread & Contemporary Renaissance',
    period: '1980s - 至今 (Present)',
    summaryZh: '從原創者遠赴日本播撒火種，到歐洲世界大賽 Juste Debout 的盛況，Locking 在全球跨越了文化藩籬，成為無數舞者珍視的世界級舞蹈遺產。',
    summaryEn: 'From original pioneers planting seeds in Japan to prestigious world championships like Juste Debout in Europe, Locking crossed geographical and cultural borders to become a revered global dance heritage.',
    paragraphs: [
      {
        id: 'glob-1',
        zh: '1980年代初，Tony Go-Go（The Go-Go Brothers 成員、後來的 The Lockers 成員）移居日本福岡，創立了「Tony Gogo Dance School」，將純正的第一代 Locking 理念傳授予日本年輕人，培養出包括 GOGO BROTHERS（Rei & Yuu）在內的大批世界頂尖舞者。日本與亞洲舞者對技巧細節的嚴謹打磨與放克律動的深入鑽研，推動了現代 Locking 技巧的規範化與極致進化。',
        en: 'In the early 1980s, Tony Go-Go (member of The Go-Go Brothers and later The Lockers) relocated to Fukuoka, Japan, founding the Tony Gogo Dance School. He transmitted authentic first-generation Locking directly to Japanese youths, cultivating world champions including the legendary GOGO BROTHERS (Rei & Yuu). Asian dancers’ meticulous technical discipline elevated modern Locking mechanics to new heights of precision.',
        keyTerms: ['Tony Go-Go', 'Japan', 'GOGO BROTHERS', 'Pedagogy']
      },
      {
        id: 'glob-2',
        zh: '進入21世紀，法國的 Juste Debout、荷蘭的 Summer Dance Forever、英國的 UK B-Boy Championships 等頂級世界大賽，均將 Locking 列為核心舞種。世界各地的新世代舞者在保留 Don Campbell 與 The Lockers 原始歷史幽默感與步法的同時，不斷融入現代音樂理解與多元個人風格，讓這項起源於1969年加州的「歡樂之舞」持續在全世界舞台上生生不息。',
        en: 'In the 21st century, major international battle stages such as Juste Debout (France), Summer Dance Forever (Netherlands), and UK B-Boy Championships cemented Locking as an essential core discipline. Contemporary generations continue to preserve Don Campbell’s foundation while infusing progressive musicality, keeping this joyful California art form vibrant across the globe.',
        keyTerms: ['Juste Debout', 'Summer Dance Forever', 'Global community']
      }
    ],
    keyTakeaways: [
      {
        zh: 'Tony Go-Go 移居日本是 Locking 邁向亞洲乃至全球專業傳承的重要里程碑。',
        en: 'Tony Go-Go’s move to Japan was a monumental milestone in transmitting Locking into Asia and globally.'
      },
      {
        zh: '當代世界賽事讓 Locking 成為跨越世代與國界的普世街舞文化遺產。',
        en: 'Modern international battles have established Locking as a universal street dance heritage across borders.'
      }
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't-1969',
    year: '1969',
    titleZh: '唐·坎貝爾在洛杉磯「鎖住」',
    titleEn: 'Don Campbell Freezes in Los Angeles',
    descZh: 'Don Campbell 在試圖跳出連貫的 Funky Chicken 舞步失敗後猛然停住，同伴 Sam Williams 激動讚賞，由此誕生了名為 Campbellocking 的獨特停頓舞步。',
    descEn: 'While attempting the Funky Chicken dance, Don Campbell abruptly froze when his coordination faltered. Sam Williams cheered him on, sparking the creation of Campbellocking.',
    significanceZh: '歷史開端：將生理失誤轉化為舞蹈創新。',
    significanceEn: 'The Genesis: Turning a physical mistake into artistic innovation.',
    tag: 'origin'
  },
  {
    id: 't-1971',
    year: '1971',
    titleZh: 'Soul Train 登陸加州，走入全國千家萬戶',
    titleEn: 'Soul Train Airs Nationally from Los Angeles',
    descZh: '《Soul Train》將節目製作基地遷至洛杉磯，Don Campbell 與早期的 Locking 舞者們受邀成為舞林明星，每週在電視上展示神乎其技的手腕旋轉與停頓。',
    descEn: 'Soul Train relocated to Los Angeles; Don Campbell and early Lockers were recruited as featured dancers, broadcasting their rapid twirls and dramatic freezes every Saturday.',
    significanceZh: '媒介突破：黑人街頭青年文化正式登陸全國彩色電視螢幕。',
    significanceEn: 'Media Breakthrough: Urban street culture premiered on nationwide television.',
    tag: 'media'
  },
  {
    id: 't-1973',
    year: '1973',
    titleZh: '傳奇舞團 The Lockers 正式組建',
    titleEn: 'Formation of The Lockers (The Campbellock Dancers)',
    descZh: 'Don Campbell、Toni Basil、Greg Campbellock Jr.、Fred Berry、Fluky Luke、Shabba-Doo、Slim the Robot 正式創立職業舞團，並確立了彩色條紋長襪、吊帶褲與報童帽的統一形象。',
    descEn: 'Don Campbell, Toni Basil, Greg Campbellock Jr., Fred Berry, Fluky Luke, Shabba-Doo, and Slim the Robot formed the company, codifying the striped socks and suspenders uniform.',
    significanceZh: '職業化先河：街舞界歷史上首個進入專業演藝經紀體系的團隊。',
    significanceEn: 'Professional Milestone: First street dance crew with professional representation.',
    tag: 'crew'
  },
  {
    id: 't-1975',
    year: '1975',
    titleZh: '橫掃主流殿堂：登上週六夜現場與電視大獎',
    titleEn: 'Mainstream Triumph: Saturday Night Live & Carson Show',
    descZh: 'The Lockers 成為第一批受邀登上《Saturday Night Live》表演的非裔街舞團隊，並參與了無數黃金檔節目，甚至在拉斯維加斯為法蘭克·辛納屈暖場。',
    descEn: 'The Lockers became among the first street dance groups on Saturday Night Live, prime-time television specials, and opened for Frank Sinatra in Las Vegas.',
    significanceZh: '文化認同：街頭舞蹈贏得主流高雅演藝殿堂與學院評論界的一致敬意。',
    significanceEn: 'Cultural Validation: Street dancing earned critical acclaim on world-class stages.',
    tag: 'media'
  },
  {
    id: 't-1982',
    year: '1982',
    titleZh: 'Tony Go-Go 赴日教學，播撒亞洲火種',
    titleEn: 'Tony Go-Go Relocates to Japan & Educates Next Generation',
    descZh: 'The Lockers 成員 Tony Go-Go 移居日本福岡，建立正規街舞學院，奠定了日本乃至整個東亞地區嚴謹且深厚的 Locking 技術體系與師承文化。',
    descEn: 'The Lockers member Tony Go-Go moved to Fukuoka, Japan, setting up a formal dance school and establishing rigorous foundational pedagogy across Asia.',
    significanceZh: '全球化開端：推動 Locking 成為具備完整師承體系的世界級藝術。',
    significanceEn: 'Global Renaissance: Standardizing pedagogy for future generations.',
    tag: 'global'
  },
  {
    id: 't-2002',
    year: '2002',
    titleZh: 'Juste Debout 與當代世界頂級大賽時代',
    titleEn: 'Juste Debout & Modern World Battle Era',
    descZh: '法國巴黎創立 Juste Debout 世界街舞大賽，Locking 作為四大官方核心項目之一，吸引全球各大洲數千名頂尖舞者在巴黎雅高體育館同台競技。',
    descEn: 'Founded in Paris, Juste Debout placed Locking front and center as one of its core battle categories, attracting thousands of elite dancers to Accor Arena.',
    significanceZh: '當代傳承：全球青年舞者在保持原汁原味的歷史同時開拓新視野。',
    significanceEn: 'Modern Heritage: New generations honor historical foundations on grand arenas.',
    tag: 'global'
  }
];

export const LOCKING_MOVES: LockingMove[] = [
  {
    id: 'the-lock',
    nameEn: 'The Lock',
    nameZh: '鎖定 / 鎖步',
    phonetic: '/ðə lɑːk/',
    category: 'foundation',
    inventorZh: 'Don Campbell',
    inventorEn: 'Don Campbell',
    originStoryZh: 'Locking 的母體核心動作。1969年唐·坎貝爾在洛杉磯夜總會嘗試跳 Funky Chicken 與 Robot 時，因身體無法跟上節奏而卡住，雙膝微屈、手肘在胸前抱住並突兀停住，意外創造了標誌性的靜止張力。',
    originStoryEn: 'The quintessential mother foundation of the style. In 1969 Don Campbell locked up when his muscles hesitated during a dance step. Bending his knees and snapping his arms into an angular freeze, he invented the dance’s defining isometric halt.',
    techniqueZh: '膝蓋半蹲下壓、重心放低，雙臂以折角形式向胸前或側面有力停格，臉部通常搭配誇張的自信或驚喜神情，在強烈切分節奏上瞬間定格。',
    techniqueEn: 'Bend your knees and sink your weight low into a stable stance. Snap your elbows inward or forward at sharp angles into an abrupt freeze on the downbeat, accompanied by an expressive face.',
    keywords: ['Foundation', 'Freeze', 'Downbeat', 'Sharpness']
  },
  {
    id: 'wrist-twirl',
    nameEn: 'Wrist Twirl / Twirls',
    nameZh: '手腕轉動 / 旋手',
    phonetic: '/rɪst twɜːrl/',
    category: 'twirls_points',
    inventorZh: 'Don Campbell & Early Lockers',
    inventorEn: 'Don Campbell & Early Lockers',
    originStoryZh: '源自非裔舞者在夜總會隨著快節奏 Funk 鼓點揮動手臂時的動作。唐·坎貝爾將手腕圍繞頭部或身體側面進行連續兩到三圈的快速旋轉，如同雜耍般炫目。',
    originStoryEn: 'Originating from Black club dancers rolling their forearms and wrists to rapid Funk snare hits. Campbell developed swift double or triple rotations near the ears or shoulders.',
    techniqueZh: '以手腕為軸心，手掌半握拳或微張，快速向內或向外翻轉畫圓，雙手可同步、非同步或在頭部上方、耳側甚至腰間進行靈動旋轉。',
    techniqueEn: 'Pivot from the wrist socket with relaxed loose fists. Spin outward or inward in clean circular orbits beside the ears, above the head, or near the hips in rapid succession.',
    keywords: ['Wrist roll', 'Speed', 'Orbit', 'Dexterity']
  },
  {
    id: 'points',
    nameEn: 'Points / Uncle Sam Point',
    nameZh: '指向 / 指人 (山姆大叔指)',
    phonetic: '/pɔɪnts/',
    category: 'twirls_points',
    inventorZh: 'Don Campbell',
    inventorEn: 'Don Campbell',
    originStoryZh: '唐·坎貝爾在舞會中常常跳到一半轉向特定朋友或嘲笑他的觀眾，用食指直指對方，展現出挑釁中帶著幽默自信的喜劇效果，靈感也借鑒了美國徵兵海報「山姆大叔需要你」的經典手勢。',
    originStoryEn: 'Don Campbell loved singling out buddies or hecklers on the dance floor by pointing his index finger straight at them with mischievous swagger, reminiscent of the famous "Uncle Sam Wants You" recruitment poster.',
    techniqueZh: '手臂由胸前或身側迅速彈出，食指如槍般精準筆直地指向空間或觀眾，身體軀幹微側傾，通常伴隨眼神直視與戲劇化笑容。',
    techniqueEn: 'Thrust your arm outward in an assertive, snappy line, extending your index finger directly at an audience member with head tilted and engaging eye contact.',
    keywords: ['Pointing', 'Engagement', 'Humor', 'Uncle Sam']
  },
  {
    id: 'pace',
    nameEn: 'The Pace',
    nameZh: '拍胸拍手 / 踩拍節奏步',
    phonetic: '/ðə peɪs/',
    category: 'foundation',
    inventorZh: 'Don Campbell',
    inventorEn: 'Don Campbell',
    originStoryZh: '原為早期舞者在跳舞中調整呼吸與節奏的換拍動作。舞者用手在胸前、手掌間或大腿輕拍，像是在為自己打節奏，賦予舞蹈一種輕鬆自如的爵士藍調底蘊。',
    originStoryEn: 'Originally used by early pioneers to reset their breathing and lock into syncopated grooves. Dancers slapped their own chests, palms, or thighs to self-accompany their rhythm.',
    techniqueZh: '一隻手在胸前或側面向下或向上拍擊虛空或另一隻手掌，腳部配合彈性下壓，展現從容不迫但暗含爆發力的律動。',
    techniqueEn: 'Slap your chest, open palm, or thigh with a crisp rebound motion while your knees bounce in an elastic cadence, establishing groove control before a sudden lock.',
    keywords: ['Rhythm reset', 'Slap', 'Cadence', 'Bounce']
  },
  {
    id: 'giving-yourself-five',
    nameEn: 'Giving Yourself Five (Clap)',
    nameZh: '自擊掌 / 拍手',
    phonetic: '/ˈɡɪvɪŋ jʊərˈsɛlf faɪv/',
    category: 'foundation',
    inventorZh: 'Don Campbell',
    inventorEn: 'Don Campbell',
    originStoryZh: '當沒有人為舞者精彩的即興動作鼓掌時，唐·坎貝爾便自己高舉雙手拍手，「既然你們不拍，我就自己給自己一個 High-Five！」，這體現了 Locking 最核心的自嘲樂觀哲學。',
    originStoryEn: 'Whenever crowd applause was absent after a solo, Campbell cheekily clapped his own hands together overhead, quipping, "If you won’t clap for me, I’ll give myself five!"—embodying Locking’s signature playful self-love.',
    techniqueZh: '雙手抬高至胸前或頭頂上方，擊掌出清脆響聲，通常緊接手腕轉動或鎖步，帶動台下觀眾一同為節奏歡呼。',
    techniqueEn: 'Elevate your arms in front of the torso or above the brow, delivering a distinct, audible clap that rallies audience participation, smoothly transitioning into a twirl or lock.',
    keywords: ['Clap', 'High Five', 'Optimism', 'Celebration']
  },
  {
    id: 'skeeter-rabbit',
    nameEn: 'Skeeter Rabbit',
    nameZh: '跳躍換步 (兔子跳步)',
    phonetic: '/ˈskiːtər ˈræbɪt/',
    category: 'footwork',
    inventorZh: 'James "Skeeter Rabbit" Higgins',
    inventorEn: 'James "Skeeter Rabbit" Higgins',
    originStoryZh: '以傳奇舞者 James Higgins 的藝名「Skeeter Rabbit」命名。他以迅雷不及掩耳的下肢靈活性和兔子般的敏捷跳躍聞名，後來由 Greg Campbellock Jr. 將其編排進標準技術教案中。',
    originStoryEn: 'Named in honor of James "Skeeter Rabbit" Higgins, an extraordinarily agile original Locker known for his swift rabbit-like foot transitions, later formalized into teaching pedagogy by Greg Campbellock Jr.',
    techniqueZh: '一腳踢出後向後滑踏，另一腳快速踢出交替，伴隨骨盆的微擺與身體彈跳，是 Locking 中極具動感與行進感的步法。',
    techniqueEn: 'Kick one leg outward, snap it back into a quick step-behind, while instantly kicking the opposite foot out in a buoyant, syncopated hopping rhythm across the floor.',
    keywords: ['Footwork', 'Agility', 'James Higgins', 'Hop']
  },
  {
    id: 'scooby-doo',
    nameEn: 'Scooby Doo',
    nameZh: '史酷比跳步',
    phonetic: '/ˈskuːbi duː/',
    category: 'footwork',
    inventorZh: 'The Campbellock Dancers',
    inventorEn: 'The Campbellock Dancers',
    originStoryZh: '源自經典美國卡通《史酷比狗》（Scooby-Doo）中角色受驚逃跑時在原地空轉四肢的滑稽形象。舞者將這種卡通動作轉化為高抬膝與輕盈換腿跳步。',
    originStoryEn: 'Inspired by the Saturday morning cartoon "Scooby-Doo," where characters scramble comically in place when frightened. Dancers adapted this into high-knee, syncopated jumping step-outs.',
    techniqueZh: '雙膝輪流高抬跳起，雙臂如同卡通人物般在身側前後擺動或配合手腕旋轉，展現極致的彈性與童趣喜感。',
    techniqueEn: 'Lift alternate knees high into hopping step-overs with a spring-loaded vertical bounce, letting your arms swing or twirl with cartoon-like animation.',
    keywords: ['Cartoon', 'High knees', 'Playfulness', 'Bounce']
  },
  {
    id: 'leo-walk',
    nameEn: 'Leo Walk',
    nameZh: '里奧漫步 (Leo 步)',
    phonetic: '/ˈliːoʊ wɔːk/',
    category: 'footwork',
    inventorZh: 'Leo "Fluky Luke" Williamson',
    inventorEn: 'Leo "Fluky Luke" Williamson',
    originStoryZh: '由 The Lockers 原始成員 Leo "Fluky Luke" Williamson 發明。Leo 擁有極具辨識度的誇張肢體語言，他創造了這種如同木偶在舞台上滑步漫步的悠閒步伐。',
    originStoryEn: 'Created by original The Lockers member Leo "Fluky Luke" Williamson. Renowned for his elongated puppet-like limbs, he designed this nonchalant, stylized stage stroll.',
    techniqueZh: '側向踏出一步，身體略帶波浪起伏或停頓，另一腳隨即滑動跟上，手臂伴隨步伐擺盪，給人一種既悠哉瀟灑又精準扣合音樂節拍的視覺感受。',
    techniqueEn: 'Step laterally with a smooth hip sway, trailing the rear leg in a dragging slide while the upper body counter-balances with loose, theatrical arm swings on beat.',
    keywords: ['Fluky Luke', 'Stroll', 'Groove', 'Smoothness']
  },
  {
    id: 'stop-and-go',
    nameEn: 'Stop and Go',
    nameZh: '走走停停 (急停再行步)',
    phonetic: '/stɑːp ænd ɡoʊ/',
    category: 'footwork',
    inventorZh: 'Greg "Campbellock Jr." Pope',
    inventorEn: 'Greg "Campbellock Jr." Pope',
    originStoryZh: '由 Greg Campbellock Jr. 開創。這個動作以假裝要轉身離開、卻突然急停拉回的方式，欺騙觀眾的預期，是舞台表演中製造戲劇衝突與驚嘆的王牌招式。',
    originStoryEn: 'Pioneered by Greg Campbellock Jr., this trick deceives the audience into thinking the dancer is walking off, only to snap backward instantly in mid-stride for a dramatic false-exit surprise.',
    techniqueZh: '向前或向側方跨步假裝走動，突然在第2拍或第4拍強行剎車轉身，藉由慣性反向拉扯回原來位置並施加一次乾脆俐落的 Lock。',
    techniqueEn: 'Take two forward strides as if leaving, brake suddenly with high muscle tension, snap your torso backward into an abrupt freeze, then pivot cleanly back to front.',
    keywords: ['Illusion', 'Deception', 'Greg Campbellock Jr', 'Sudden stop']
  },
  {
    id: 'knee-drop',
    nameEn: 'Knee Drop / Split',
    nameZh: '跪地落地 / 劈腿下潛',
    phonetic: '/niː drɑːp/',
    category: 'stunts_humor',
    inventorZh: 'Fred "Rerun" Berry & The Lockers',
    inventorEn: 'Fred "Rerun" Berry & The Lockers',
    originStoryZh: '受非裔雜耍歌舞（Vaudeville）以及詹姆斯·布朗跪滑舞台動作啟發。Fred Berry 與 Shabba-Doo 經常在激昂的高潮處突然滑跪或騰空一躍劈腿著地，引爆全場尖叫。',
    originStoryEn: 'Inspired by traditional Vaudeville stunts and James Brown’s fiery stage drops. Fred Berry and Shabba-Doo electrified audiences by plummeting into split-second knee slides and splits.',
    techniqueZh: '由站立或旋轉動作迅速下潛，以小腿內側與腳踝緩衝觸地（非直接拿髕骨砸地），或直接下探成橫劈，隨即在極短時間內彈起恢復站姿。',
    techniqueEn: 'From an upright turn, drop your weight downward using inner calf and ankle control to safely cushion ground contact without pounding patella, popping back up in rhythm.',
    keywords: ['Stunt', 'Acrobatics', 'Climax', 'Floorwork']
  }
];

export const PIONEERS: Pioneer[] = [
  {
    id: 'don-campbell',
    name: 'Don Campbell',
    stageName: 'Don "Campbellock" Campbell',
    years: '1951 - 2020',
    roleZh: 'Locking 創始發明人 / 街舞先驅教父',
    roleEn: 'Creator & Founder of Locking / Godfather of Street Dance',
    bioZh: '出生於密蘇里州聖路易斯，在洛杉磯長大。1969年他在洛杉磯 Trade Tech 大學與當地夜店發明了 Campbellocking。他創立了 The Lockers，將街頭舞蹈帶進全世界電視螢幕。2020年因心臟驟停離世，被全球街舞界奉為永恆傳奇。',
    bioEn: 'Born in St. Louis and raised in Los Angeles, Don invented Campbellocking in 1969 while attending LA Trade-Tech College. He co-founded The Lockers, bringing street culture to international TV screens. Passed away in 2020, forever honored as a street dance titan.',
    signatureMoves: ['The Lock', 'Points', 'Giving Yourself Five', 'Pace'],
    keyQuote: {
      zh: '「這門舞蹈不是為了證明你比別人強，而是為了分享那份純粹的快樂與微笑。」',
      en: '"This dance was never about proving you\'re better than someone else; it was about sharing joy and smiles."'
    }
  },
  {
    id: 'greg-campbellock-jr',
    name: 'Greg Pope',
    stageName: 'Greg "Campbellock Jr." Pope',
    years: '1952 - 2010',
    roleZh: 'The Lockers 核心大師 / 現代 Locking 教學體系奠基人',
    roleEn: 'Master of The Lockers / Architect of Modern Locking Pedagogy',
    bioZh: '原創 The Lockers 核心成員之一。Greg 將 Don Campbell 的直覺式即興動作歸納整理，創立了「Stop and Go」等複雜步法，並在晚年巡迴全球講學，建立了現代 Locking 的標準動作術語規範。',
    bioEn: 'A founding pillar of The Lockers. Greg organized Campbell’s intuitive freestyle into structured syllabus steps including "Stop and Go," touring worldwide to establish modern pedagogical terminology.',
    signatureMoves: ['Stop and Go', 'Skeeter Rabbit variations', 'Crazy Horse'],
    keyQuote: {
      zh: '「每一個招式背後都有它的靈魂與故事，學動作前，先去理解它為什麼叫這個名字。」',
      en: '"Every move carries a soul and history. Before mimicking the motion, understand why it was christened with that name."'
    }
  },
  {
    id: 'fred-berry',
    name: 'Fred Berry',
    stageName: 'Fred "Rerun" Berry / Mr. Penguin',
    years: '1951 - 2003',
    roleZh: '傳奇喜劇表演者 / 著名電視演員',
    roleEn: 'Legendary Comedic Showman / Renowned TV Actor',
    bioZh: '身材圓潤但動作極致靈活輕盈，被譽為「舞池上的企鵝大師」。他後來在熱播情景喜劇《What\'s Happening!!》中飾演角色 Rerun，成為全美家喻戶曉的黑人喜劇與舞蹈巨星。',
    bioEn: 'Though portly in stature, Fred danced with astonishing lightness and blistering speed. He subsequently starred as Rerun on the hit ABC sitcom "What\'s Happening!!", becoming a household celebrity.',
    signatureMoves: ['Knee Drops', 'Penguin Slide', 'Pacing'],
    keyQuote: {
      zh: '「你的體型永遠不能阻止你飛翔，節奏是刻在骨子裡的！」',
      en: '"Your size will never prevent you from taking flight. Rhythm is etched into your very bones!"'
    }
  },
  {
    id: 'shabba-doo',
    name: 'Adolfo Quiñones',
    stageName: 'Adolfo "Shabba-Doo" Quiñones',
    years: '1955 - 2020',
    roleZh: '特技雜耍先鋒 / 電影《Breakin\'》主演',
    roleEn: 'Acrobatic Pioneer / Star of the Cult Film "Breakin\'"',
    bioZh: '波多黎各與非裔血統，以驚人的滯空騰躍、旋轉劈腿和優雅帥氣的舞台魅力著稱。他在1984年主演了震撼全球青少年的街舞電影《Breakin\'》（霹靂舞）中的角色 Ozone，引發了全球霹靂舞與鎖舞熱潮。',
    bioEn: 'Of African-American and Puerto Rican descent, Shabba-Doo was famous for aerial flips, acrobatics, and magnetic stage charisma. He starred as Ozone in the 1984 global blockbuster movie "Breakin\'".',
    signatureMoves: ['Acrobatic Splits', 'Which-A-Way', 'Speed Twirls'],
    keyQuote: {
      zh: '「街頭是我們的殿堂，每一次跳躍都是向天空索取自由。」',
      en: '"The streets were our cathedral. Every leap was a demand for freedom from the sky."'
    }
  },
  {
    id: 'toni-basil',
    name: 'Antonia Christina Basilotta',
    stageName: 'Toni Basil',
    years: '1943 - 至今',
    roleZh: '金牌編舞家 / 經紀人 / 流行巨星 (《Mickey》演唱者)',
    roleEn: 'Master Choreographer / Manager / Pop Superstar ("Mickey")',
    bioZh: '知名好萊塢編舞家與歌手。在洛杉磯夜總會見到 Don Campbell 後，敏銳地發現了街舞的巨大藝術價值，作為經紀人與編舞將 The Lockers 帶上電視大銀幕，是推動 Locking 專業化最關鍵的幕後推手。',
    bioEn: 'Renowned Hollywood choreographer and recording artist. Upon witnessing Don Campbell in LA clubs, she recognized street dance’s vast potential, becoming the manager who steered The Lockers into prime-time acclaim.',
    signatureMoves: ['Staged Choreography', 'Vaudeville Integration', 'Musical Direction'],
    keyQuote: {
      zh: '「他們不是業餘的，他們是這個時代最偉大、最真實的肢體詩人。」',
      en: '"They were not amateurs; they were the truest and most electrifying physical poets of our era."'
    }
  }
];

export const CS_LOCKING_BONUS = {
  titleZh: '知識小延伸：計算機科學中的「Locking（鎖機制）」',
  titleEn: 'Knowledge Bonus: "Locking" in Computer Science & Databases',
  introZh: '在資訊科技與資料庫領域中，「Locking（鎖定機制）」同樣擁有深厚且迷人的演進歷史！若您在技術領域搜尋 Locking，以下為其歷史源流與英文對照：',
  introEn: 'In information technology and database systems, "Locking" likewise boasts a profound developmental history. Here is an overview of its historical evolution and English terminology:',
  milestones: [
    {
      year: '1965',
      termEn: 'Mutual Exclusion (Mutex) & Semaphore',
      termZh: '互斥鎖與號誌（艾茲赫爾·戴克斯特拉提出）',
      descZh: '計算機科學先驅 Edsger Dijkstra 發表經典論文，首次形式化提出了多行程協同作業中的互斥（Mutex）問題與 Semaphore 原語，防止多個進程同時寫入共享記憶體。',
      descEn: 'Pioneer Edsger Dijkstra published his seminal paper introducing the Mutual Exclusion (Mutex) problem and Semaphore primitives to prevent concurrent write conflicts.'
    },
    {
      year: '1976',
      termEn: 'Two-Phase Locking (2PL)',
      termZh: '二階段鎖定協定 (2PL) 與 ACID 保證',
      descZh: '吉姆·格雷（Jim Gray）等人在 IBM System R 中提出二階段鎖定（擴展階段與收縮階段），確保了關聯式資料庫交易的「可序列化（Serializability）」，成為現代 SQL 資料庫並行控制的基石。',
      descEn: 'Jim Gray and IBM System R researchers formalized Two-Phase Locking (growing and shrinking phases), guaranteeing strict Serializability for transactional SQL databases.'
    },
    {
      year: '1990s - 現在',
      termEn: 'Optimistic vs. Pessimistic Locking & Distributed Locks',
      termZh: '樂觀鎖、悲觀鎖與分散式鎖 (如 Redis Redlock, Zookeeper)',
      descZh: '隨著雲端微服務與分散式架構爆發，鎖機制從單機記憶體延伸到叢集協調，利用版本號（MVCC/樂觀鎖）或租約算法解決跨伺服器並發安全。',
      descEn: 'With cloud microservices, locking evolved from single-node memory locks into cluster-level coordination, utilizing MVCC, leases, and distributed algorithms like Redlock.'
    }
  ]
};
