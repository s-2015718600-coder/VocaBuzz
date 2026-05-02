// ============================================================
// VOCABUZZ — WORD DATA FILE
// প্রতিটি list এ sets আছে। প্রতি set এ ৫টি শব্দ।
// নতুন set যোগ করতে নিচের pattern অনুসরণ করুন।
// ============================================================

const WORD_DATA = {

  // ════════════════════════════════════════
  // GRE 333
  // ════════════════════════════════════════
  gre: {
    name: "GRE 333",
    totalWords: 333,
    color: "#4f46e5",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Aberrant",
            pos: "adjective",
            ph: "/æˈbɛr.ənt/",
            def: "স্বাভাবিকের বাইরে, অস্বাভাবিক আচরণ বা বৈশিষ্ট্য",
            adv: "Departing from an accepted standard; deviating from what is normal or expected in a way that is considered undesirable.",
            syn: ["deviant", "anomalous", "atypical", "abnormal"],
            ant: ["normal", "typical", "standard", "conventional"],
            example: "The scientist noted aberrant behavior in the test subjects after administering the new compound.",
            bangla: "পরীক্ষাগারে নতুন যৌগ প্রয়োগের পর বিজ্ঞানী পরীক্ষার্থীদের মধ্যে অস্বাভাবিক আচরণ লক্ষ্য করলেন।"
          },
          {
            w: "Abeyance",
            pos: "noun",
            ph: "/əˈbeɪ.əns/",
            def: "সাময়িক স্থগিতাবস্থা, কিছু সময়ের জন্য বন্ধ থাকা",
            adv: "A state of temporary disuse or suspension; something held in abeyance is paused but not permanently stopped.",
            syn: ["suspension", "dormancy", "inactivity", "deferral"],
            ant: ["activity", "continuance", "operation", "resumption"],
            example: "The project was held in abeyance until additional funding could be secured.",
            bangla: "অতিরিক্ত তহবিল না পাওয়া পর্যন্ত প্রকল্পটি স্থগিত রাখা হলো।"
          },
          {
            w: "Abscond",
            pos: "verb",
            ph: "/æbˈskɒnd/",
            def: "গোপনে ও দ্রুত পালিয়ে যাওয়া, বিশেষত আইনি পরিণতি এড়াতে",
            adv: "To leave hurriedly and secretly, typically to escape from custody or avoid consequences of wrongdoing.",
            syn: ["flee", "escape", "bolt", "run away"],
            ant: ["stay", "remain", "surrender", "face"],
            example: "The embezzler absconded with the company funds before authorities could arrest him.",
            bangla: "কর্তৃপক্ষ গ্রেফতার করার আগেই আত্মসাৎকারী কোম্পানির সমস্ত অর্থ নিয়ে পালিয়ে গেল।"
          },
          {
            w: "Acrimony",
            pos: "noun",
            ph: "/ˈæk.rɪ.mə.ni/",
            def: "তিক্ততা, রাগ ও বিরোধিতা, বিশেষত কথাবার্তায়",
            adv: "Bitterness or ill feeling, especially as it appears in speech or manner during a disagreement or dispute.",
            syn: ["bitterness", "resentment", "hostility", "rancor"],
            ant: ["goodwill", "warmth", "friendliness", "amity"],
            example: "The divorce proceedings were marked by considerable acrimony between the two parties.",
            bangla: "দুই পক্ষের মধ্যে ব্যাপক তিক্ততার মধ্যে বিবাহবিচ্ছেদের কার্যক্রম পরিচালিত হলো।"
          },
          {
            w: "Adumbrate",
            pos: "verb",
            ph: "/ˈæd.ʌm.breɪt/",
            def: "অস্পষ্টভাবে ইঙ্গিত করা বা রূপরেখা দেওয়া",
            adv: "To report or represent in outline; to indicate or suggest something faintly without going into full detail.",
            syn: ["outline", "sketch", "foreshadow", "suggest"],
            ant: ["clarify", "detail", "elaborate", "specify"],
            example: "The architect's preliminary sketch adumbrated the building's final grand design.",
            bangla: "স্থপতির প্রাথমিক স্কেচ ভবনের চূড়ান্ত বিশাল নকশার একটি অস্পষ্ট আভাস দিল।"
          }
        ]
      },
      // ── Set 2 এখানে যোগ করুন ──
      // {
      //   setNumber: 2,
      //   words: [ ... ]
      // },
    ]
  },

  // ════════════════════════════════════════
  // KAPLAN 52
  // ════════════════════════════════════════
  kaplan: {
    name: "Kaplan 52",
    totalWords: 52,
    color: "#0891b2",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Accolade",
            pos: "noun",
            ph: "/ˈæk.ə.leɪd/",
            def: "প্রশংসা বা পুরস্কার, কোনো বিশেষ স্বীকৃতি বা সম্মান",
            adv: "An award or privilege granted as a special honor or as an acknowledgment of merit.",
            syn: ["award", "honor", "tribute", "recognition"],
            ant: ["criticism", "blame", "censure", "condemnation"],
            example: "Winning the Nobel Prize is the highest accolade a scientist can receive.",
            bangla: "নোবেল পুরস্কার জেতা একজন বিজ্ঞানীর পাওয়া সর্বোচ্চ সম্মান।"
          },
          {
            w: "Ambivalent",
            pos: "adjective",
            ph: "/æmˈbɪv.ə.lənt/",
            def: "দ্বিধাগ্রস্ত, একই সময়ে দুটি বিপরীত অনুভূতি থাকা",
            adv: "Having mixed feelings or contradictory ideas about something or someone; unable to decide.",
            syn: ["uncertain", "undecided", "conflicted", "hesitant"],
            ant: ["certain", "decisive", "resolved", "determined"],
            example: "She felt ambivalent about moving abroad — excited but also nervous about leaving family.",
            bangla: "বিদেশে যাওয়া নিয়ে তিনি দ্বিধায় ছিলেন — উত্তেজিত ছিলেন, কিন্তু পরিবার ছেড়ে যাওয়া নিয়েও উদ্বিগ্ন।"
          },
          {
            w: "Ameliorate",
            pos: "verb",
            ph: "/əˈmiː.li.ə.reɪt/",
            def: "উন্নত করা, কোনো খারাপ পরিস্থিতিকে ভালো করা",
            adv: "To make something bad or unsatisfactory better; to improve a difficult or unpleasant situation.",
            syn: ["improve", "enhance", "better", "alleviate"],
            ant: ["worsen", "aggravate", "deteriorate", "impair"],
            example: "The government took steps to ameliorate the living conditions in flood-affected areas.",
            bangla: "সরকার বন্যাদুর্গত এলাকার জীবনযাত্রার মান উন্নত করতে পদক্ষেপ নিল।"
          },
          {
            w: "Anachronism",
            pos: "noun",
            ph: "/əˈnæk.rə.nɪ.z(ə)m/",
            def: "সময়ের সাথে বেমানান কিছু, ভুল সময়কালে কোনো বস্তু বা ধারণা",
            adv: "A thing belonging or appropriate to a period other than that in which it exists; something out of its proper time.",
            syn: ["archaism", "relic", "throwback", "oddity"],
            ant: ["contemporary", "modern", "current", "timely"],
            example: "Using a typewriter in a modern office would be a glaring anachronism.",
            bangla: "আধুনিক অফিসে টাইপরাইটার ব্যবহার করা সময়ের সাথে সম্পূর্ণ বেমানান হবে।"
          },
          {
            w: "Anodyne",
            pos: "adjective",
            ph: "/ˈæn.ə.daɪn/",
            def: "বিতর্ক এড়ানো, এতটাই নিরীহ যে কোনো আবেগ বা বিতর্ক জাগায় না",
            adv: "Not likely to provoke dissent or offense; inoffensive but also somewhat bland or uninteresting.",
            syn: ["bland", "inoffensive", "harmless", "neutral"],
            ant: ["provocative", "controversial", "offensive", "stimulating"],
            example: "The politician gave an anodyne speech that pleased no one but offended no one either.",
            bangla: "রাজনীতিবিদ একটি নিরীহ বক্তৃতা দিলেন যা কাউকে খুশিও করল না, কাউকে বিরক্তও করল না।"
          }
        ]
      },
      // ── Set 2 এখানে যোগ করুন ──
    ]
  },

  // ════════════════════════════════════════
  // BARRON'S 800
  // ════════════════════════════════════════
  barron: {
    name: "Barron's 800",
    totalWords: 800,
    color: "#7c3aed",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Abase",
            pos: "verb",
            ph: "/əˈbeɪs/",
            def: "অবমানিত করা, মর্যাদা কমিয়ে দেওয়া",
            adv: "To lower in rank, office, prestige, or esteem; to behave in a way that makes one appear less worthy of respect.",
            syn: ["humiliate", "degrade", "demean", "belittle"],
            ant: ["honor", "elevate", "exalt", "dignify"],
            example: "He refused to abase himself by begging for forgiveness from someone who had wronged him.",
            bangla: "যে তার ক্ষতি করেছে তার কাছে ক্ষমা ভিক্ষা করে নিজেকে অবমানিত করতে তিনি অস্বীকার করলেন।"
          },
          {
            w: "Abate",
            pos: "verb",
            ph: "/əˈbeɪt/",
            def: "কমে আসা, তীব্রতা বা শক্তি হ্রাস পাওয়া",
            adv: "To become less intense or widespread; to reduce in degree, intensity, amount, or force.",
            syn: ["diminish", "subside", "decrease", "lessen"],
            ant: ["increase", "intensify", "grow", "escalate"],
            example: "The storm finally began to abate after three days of heavy rain and strong winds.",
            bangla: "তিন দিন ভারি বৃষ্টি ও তীব্র বাতাসের পর অবশেষে ঝড় কমে আসতে শুরু করল।"
          },
          {
            w: "Abdicate",
            pos: "verb",
            ph: "/ˈæb.dɪ.keɪt/",
            def: "ক্ষমতা বা দায়িত্ব ছেড়ে দেওয়া, সিংহাসন ত্যাগ করা",
            adv: "To renounce a throne, high office, or responsibility, especially in a formal manner.",
            syn: ["resign", "relinquish", "renounce", "step down"],
            ant: ["claim", "assume", "retain", "maintain"],
            example: "King Edward VIII abdicated the throne of England in 1936 to marry Wallis Simpson.",
            bangla: "রাজা অষ্টম এডওয়ার্ড ওয়ালিস সিম্পসনকে বিয়ে করার জন্য ১৯৩৬ সালে ইংল্যান্ডের সিংহাসন ত্যাগ করেন।"
          },
          {
            w: "Aberration",
            pos: "noun",
            ph: "/ˌæb.əˈreɪ.ʃən/",
            def: "স্বাভাবিক থেকে বিচ্যুতি, অপ্রত্যাশিত ব্যতিক্রম",
            adv: "A departure from what is normal, expected, or typical; a deviation from a moral standard or expected behavior.",
            syn: ["deviation", "anomaly", "irregularity", "oddity"],
            ant: ["norm", "standard", "regularity", "conformity"],
            example: "The sudden drop in temperature in June was a meteorological aberration.",
            bangla: "জুন মাসে তাপমাত্রার হঠাৎ পতন একটি আবহাওয়াগত অস্বাভাবিকতা ছিল।"
          },
          {
            w: "Abhor",
            pos: "verb",
            ph: "/əbˈhɔːr/",
            def: "ঘৃণা করা, প্রচণ্ড অপছন্দ বা বিরক্তি অনুভব করা",
            adv: "To regard with disgust and hatred; to feel a strong aversion to something considered morally reprehensible.",
            syn: ["detest", "loathe", "despise", "hate"],
            ant: ["admire", "love", "adore", "cherish"],
            example: "She abhorred violence of any kind and dedicated her life to peaceful conflict resolution.",
            bangla: "তিনি যেকোনো ধরনের সহিংসতা ঘৃণা করতেন এবং শান্তিপূর্ণ দ্বন্দ্ব নিরসনে নিজের জীবন উৎসর্গ করেছিলেন।"
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════
  // MAGOOSH 1000
  // ════════════════════════════════════════
  magoosh: {
    name: "Magoosh 1000",
    totalWords: 1000,
    color: "#059669",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Abjure",
            pos: "verb",
            ph: "/æbˈdʒʊər/",
            def: "শপথ করে ত্যাগ করা, কোনো বিশ্বাস বা অভ্যাস আনুষ্ঠানিকভাবে ছেড়ে দেওয়া",
            adv: "To solemnly renounce a belief, cause, or claim; to formally reject or abandon something previously held.",
            syn: ["renounce", "forswear", "recant", "repudiate"],
            ant: ["embrace", "affirm", "adopt", "uphold"],
            example: "The spy was forced to abjure his loyalty to his home country after being captured.",
            bangla: "গুপ্তচরকে ধরা পড়ার পর তার স্বদেশের প্রতি আনুগত্য শপথ করে ত্যাগ করতে বাধ্য করা হলো।"
          },
          {
            w: "Acerbic",
            pos: "adjective",
            ph: "/əˈsɜː.bɪk/",
            def: "তীক্ষ্ণ ও কঠোর, বিশেষত মন্তব্য বা সমালোচনার ক্ষেত্রে",
            adv: "Sharp and forthright; (of a person or their remarks) having a sharply critical or biting quality.",
            syn: ["sharp", "caustic", "biting", "cutting"],
            ant: ["mild", "gentle", "kind", "pleasant"],
            example: "The drama critic was known for her acerbic reviews that spared no one's feelings.",
            bangla: "নাটকের সমালোচক তার তীক্ষ্ণ পর্যালোচনার জন্য পরিচিত ছিলেন যা কারো অনুভূতির পরোয়া করত না।"
          },
          {
            w: "Acumen",
            pos: "noun",
            ph: "/ˈæk.jʊ.mən/",
            def: "তীক্ষ্ণ বুদ্ধিমত্তা, দ্রুত ও সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা",
            adv: "The ability to make good judgments and quick decisions, typically in a particular domain.",
            syn: ["shrewdness", "insight", "sharpness", "astuteness"],
            ant: ["stupidity", "obtuseness", "dullness", "ignorance"],
            example: "Her business acumen helped her turn a small startup into a multinational company.",
            bangla: "তার ব্যবসায়িক বুদ্ধিমত্তা তাকে একটি ছোট স্টার্টআপকে বহুজাতিক কোম্পানিতে পরিণত করতে সাহায্য করেছিল।"
          },
          {
            w: "Adroit",
            pos: "adjective",
            ph: "/əˈdrɔɪt/",
            def: "দক্ষ ও চতুর, বিশেষত হাত বা মনের ব্যবহারে",
            adv: "Clever or skillful in using the hands or mind; showing aptitude or cleverness in dealing with difficulties.",
            syn: ["skillful", "deft", "clever", "adept"],
            ant: ["clumsy", "inept", "awkward", "incompetent"],
            example: "The adroit negotiator managed to secure a deal that satisfied both parties.",
            bangla: "দক্ষ আলোচনাকারী এমন একটি চুক্তি সম্পাদন করতে সক্ষম হলেন যা উভয় পক্ষকেই সন্তুষ্ট করেছিল।"
          },
          {
            w: "Adulation",
            pos: "noun",
            ph: "/ˌæd.jʊˈleɪ.ʃən/",
            def: "অতিরিক্ত প্রশংসা বা তোষামোদ, অন্ধ ভক্তি",
            adv: "Excessive admiration or praise; obsequious flattery or devotion, often to an unreasonable degree.",
            syn: ["flattery", "worship", "idolization", "fawning"],
            ant: ["criticism", "censure", "condemnation", "disparagement"],
            example: "The pop star was overwhelmed by the adulation of thousands of screaming fans.",
            bangla: "হাজারো চিৎকারকারী ভক্তদের অন্ধ প্রশংসায় পপ তারকা অভিভূত হয়ে পড়লেন।"
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════
  // IBA PREVIOUS WORDS
  // ════════════════════════════════════════
  iba: {
    name: "IBA Previous",
    totalWords: 150,
    color: "#d97706",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Alacrity",
            pos: "noun",
            ph: "/əˈlæk.rɪ.ti/",
            def: "উৎসাহী ও দ্রুত সাড়া দেওয়া, আগ্রহী তৎপরতা",
            adv: "Brisk and cheerful readiness; eager willingness to do something, especially when the task is challenging.",
            syn: ["eagerness", "enthusiasm", "willingness", "promptness"],
            ant: ["reluctance", "slowness", "apathy", "indifference"],
            example: "The volunteers accepted the challenging mission with alacrity and enthusiasm.",
            bangla: "স্বেচ্ছাসেবীরা উৎসাহ ও আগ্রহের সাথে চ্যালেঞ্জিং মিশনটি গ্রহণ করল।"
          },
          {
            w: "Alleviate",
            pos: "verb",
            ph: "/əˈliː.vi.eɪt/",
            def: "কষ্ট বা সমস্যা লাঘব করা, কিছুটা উপশম করা",
            adv: "To make suffering, deficiency, or a problem less severe; to provide partial relief without completely solving.",
            syn: ["ease", "relieve", "reduce", "lessen"],
            ant: ["aggravate", "worsen", "intensify", "exacerbate"],
            example: "The new medicine helped alleviate the patient's chronic pain significantly.",
            bangla: "নতুন ওষুধটি রোগীর দীর্ঘস্থায়ী ব্যথা উল্লেখযোগ্যভাবে লাঘব করতে সাহায্য করল।"
          },
          {
            w: "Ambiguous",
            pos: "adjective",
            ph: "/æmˈbɪɡ.ju.əs/",
            def: "দ্ব্যর্থবোধক, একাধিক অর্থ হতে পারে এমন",
            adv: "Open to more than one interpretation; not having one obvious meaning; unclear or inexact in expression.",
            syn: ["vague", "unclear", "equivocal", "indefinite"],
            ant: ["clear", "definite", "explicit", "unambiguous"],
            example: "The contract contained several ambiguous clauses that led to a lengthy legal dispute.",
            bangla: "চুক্তিতে বেশ কিছু দ্ব্যর্থবোধক ধারা ছিল যা দীর্ঘ আইনি বিবাদের কারণ হলো।"
          },
          {
            w: "Amiable",
            pos: "adjective",
            ph: "/ˈeɪ.mi.ə.bəl/",
            def: "মিষ্টি স্বভাবের, বন্ধুত্বপূর্ণ ও সহজে মেলামেশার যোগ্য",
            adv: "Having or displaying a friendly and pleasant manner; easy to like and be around.",
            syn: ["friendly", "pleasant", "agreeable", "likable"],
            ant: ["unfriendly", "hostile", "disagreeable", "surly"],
            example: "Despite being the company's CEO, she was known for her amiable and approachable nature.",
            bangla: "কোম্পানির সিইও হওয়া সত্ত্বেও তিনি তার বন্ধুত্বপূর্ণ ও সহজলভ্য স্বভাবের জন্য পরিচিত ছিলেন।"
          },
          {
            w: "Anachronistic",
            pos: "adjective",
            ph: "/əˌnæk.rəˈnɪs.tɪk/",
            def: "বর্তমান যুগের সাথে বেমানান, সময়ের বাইরের",
            adv: "Belonging to a period other than that being portrayed; outdated and no longer suited to the current time.",
            syn: ["outdated", "archaic", "obsolete", "dated"],
            ant: ["modern", "current", "contemporary", "up-to-date"],
            example: "His anachronistic views on gender roles made him difficult to work with in a modern office.",
            bangla: "লিঙ্গ ভূমিকা সম্পর্কে তার সময়োচিত নয় এমন দৃষ্টিভঙ্গি আধুনিক অফিসে তার সাথে কাজ করা কঠিন করে তুলেছিল।"
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════
  // BANK VOCABULARY
  // ════════════════════════════════════════
  bank: {
    name: "Bank Vocab",
    totalWords: 200,
    color: "#dc2626",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Apathy",
            pos: "noun",
            ph: "/ˈæp.ə.θi/",
            def: "উদাসীনতা, কোনো কিছুতে আগ্রহ বা অনুভূতির অভাব",
            adv: "Lack of interest, enthusiasm, or concern; a state of indifference or suppression of emotions.",
            syn: ["indifference", "lethargy", "disinterest", "passivity"],
            ant: ["enthusiasm", "interest", "passion", "zeal"],
            example: "Voter apathy was a major concern as less than 30% of eligible citizens cast their ballots.",
            bangla: "ভোটারদের উদাসীনতা একটি বড় উদ্বেগের বিষয় হয়ে দাঁড়াল কারণ ৩০% এরও কম যোগ্য নাগরিক ভোট দিলেন।"
          },
          {
            w: "Appease",
            pos: "verb",
            ph: "/əˈpiːz/",
            def: "শান্ত করা, কাউকে সন্তুষ্ট রাখতে তার ইচ্ছা মেটানো",
            adv: "To pacify or placate someone by acceding to their demands; to relieve or satisfy a feeling.",
            syn: ["pacify", "placate", "satisfy", "mollify"],
            ant: ["aggravate", "provoke", "antagonize", "infuriate"],
            example: "The manager tried to appease the angry client by offering a full refund and an apology.",
            bangla: "ম্যানেজার রাগান্বিত গ্রাহককে সম্পূর্ণ অর্থ ফেরত ও ক্ষমা চেয়ে শান্ত করার চেষ্টা করলেন।"
          },
          {
            w: "Arbitrary",
            pos: "adjective",
            ph: "/ˈɑː.bɪ.trər.i/",
            def: "খেয়ালখুশিমতো, কোনো নির্দিষ্ট কারণ বা নিয়ম ছাড়া",
            adv: "Based on random choice or personal whim rather than any reason or system; using unrestrained power.",
            syn: ["random", "capricious", "whimsical", "erratic"],
            ant: ["reasoned", "rational", "systematic", "deliberate"],
            example: "The judge's arbitrary decision shocked both legal teams who expected a more reasoned verdict.",
            bangla: "বিচারকের খেয়ালখুশিমতো সিদ্ধান্ত উভয় আইনি দলকে অবাক করে দিল যারা আরও যুক্তিসংগত রায় আশা করেছিল।"
          },
          {
            w: "Ardent",
            pos: "adjective",
            ph: "/ˈɑː.dənt/",
            def: "উৎসাহী ও একনিষ্ঠ, আবেগপূর্ণভাবে নিবেদিত",
            adv: "Very enthusiastic or passionate; having or showing very strong feelings about something.",
            syn: ["passionate", "fervent", "zealous", "enthusiastic"],
            ant: ["apathetic", "indifferent", "lukewarm", "unenthusiastic"],
            example: "She was an ardent supporter of environmental causes and spent every weekend volunteering.",
            bangla: "তিনি পরিবেশ আন্দোলনের একজন উৎসাহী সমর্থক ছিলেন এবং প্রতি সপ্তাহান্ত স্বেচ্ছাসেবী কাজে কাটাতেন।"
          },
          {
            w: "Arid",
            pos: "adjective",
            ph: "/ˈær.ɪd/",
            def: "শুষ্ক ও বৃষ্টিবিহীন; নীরস ও অনাগ্রহী",
            adv: "Having little or no rain; too dry or barren to support vegetation. Also: lacking interest or imagination.",
            syn: ["dry", "parched", "barren", "desiccated"],
            ant: ["fertile", "lush", "moist", "verdant"],
            example: "The arid landscape of the Sahara Desert receives less than 25mm of rainfall per year.",
            bangla: "সাহারা মরুভূমির শুষ্ক ভূদৃশ্য প্রতি বছর ২৫ মিলিমিটারেরও কম বৃষ্টিপাত পায়।"
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════
  // WORD SMART 1
  // ════════════════════════════════════════
  wordsmart1: {
    name: "Word Smart 1",
    totalWords: 250,
    color: "#be185d",
    sets: [
      {
        setNumber: 1,
        words: [
          {
            w: "Articulate",
            pos: "adjective/verb",
            ph: "/ɑːˈtɪk.jʊ.lət/",
            def: "স্পষ্টভাবে কথা বলতে পারা; সুস্পষ্ট ও প্রাঞ্জল বক্তা",
            adv: "Having or showing the ability to speak fluently and coherently; able to express thoughts clearly.",
            syn: ["eloquent", "fluent", "expressive", "well-spoken"],
            ant: ["inarticulate", "tongue-tied", "incoherent", "mumbling"],
            example: "The articulate young lawyer impressed the courtroom with her clear and persuasive arguments.",
            bangla: "প্রাঞ্জলবাক তরুণ আইনজীবী তার স্পষ্ট ও প্রভাবশালী যুক্তি দিয়ে আদালতকে মুগ্ধ করলেন।"
          },
          {
            w: "Ascetic",
            pos: "noun/adjective",
            ph: "/əˈset.ɪk/",
            def: "সন্ন্যাসী জীবনযাপনকারী, ইন্দ্রিয়সুখ ত্যাগকারী",
            adv: "Characterized by the practice of severe self-discipline and abstention from all forms of indulgence.",
            syn: ["austere", "abstemious", "self-denying", "spartan"],
            ant: ["hedonistic", "indulgent", "sybaritic", "self-indulgent"],
            example: "The ascetic monk lived on simple food and spent hours each day in silent meditation.",
            bangla: "সন্ন্যাসী সাদামাটা খাবার খেতেন এবং প্রতিদিন ঘন্টার পর ঘন্টা নীরব ধ্যানে কাটাতেন।"
          },
          {
            w: "Assiduous",
            pos: "adjective",
            ph: "/əˈsɪd.ju.əs/",
            def: "পরিশ্রমী ও অক্লান্ত, সতর্কতার সাথে ও ধারাবাহিকভাবে কাজ করা",
            adv: "Showing great care and perseverance; working diligently and unremittingly to achieve a goal.",
            syn: ["diligent", "industrious", "persevering", "hardworking"],
            ant: ["lazy", "negligent", "careless", "idle"],
            example: "Her assiduous study habits helped her graduate at the top of her class despite early struggles.",
            bangla: "তার পরিশ্রমী পড়াশোনার অভ্যাস প্রাথমিক সংগ্রাম সত্ত্বেও তাকে ক্লাসে শীর্ষে স্নাতক হতে সাহায্য করেছিল।"
          },
          {
            w: "Assuage",
            pos: "verb",
            ph: "/əˈsweɪdʒ/",
            def: "প্রশমিত করা, কষ্ট বা উদ্বেগ কমিয়ে আনা",
            adv: "To make an unpleasant feeling less intense; to satisfy an appetite or desire fully.",
            syn: ["relieve", "ease", "alleviate", "soothe"],
            ant: ["aggravate", "intensify", "worsen", "inflame"],
            example: "Nothing could assuage her grief after losing her beloved companion of fifteen years.",
            bangla: "পনেরো বছরের প্রিয় সঙ্গীকে হারানোর পর কিছুই তার দুঃখ প্রশমিত করতে পারছিল না।"
          },
          {
            w: "Astute",
            pos: "adjective",
            ph: "/əˈstjuːt/",
            def: "চালাক ও বিচক্ষণ, পরিস্থিতি দ্রুত বোঝার ক্ষমতাসম্পন্ন",
            adv: "Having or showing an ability to accurately assess situations or people and turn this to one's advantage.",
            syn: ["shrewd", "clever", "perceptive", "sharp"],
            ant: ["stupid", "naive", "obtuse", "dull"],
            example: "The astute investor sold his shares just before the market crashed, saving millions.",
            bangla: "বিচক্ষণ বিনিয়োগকারী বাজার ধসের ঠিক আগে তার শেয়ার বিক্রি করে দিলেন, লক্ষ লক্ষ টাকা বাঁচালেন।"
          }
        ]
      }
    ]
  }
};
