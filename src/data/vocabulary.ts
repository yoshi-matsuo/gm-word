// 英単語データ（レベル別）
export type Level = "low" | "middle" | "high";

export interface Word {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
  examples: string[];
  level: Level;
}

export const levelLabels: Record<Level, string> = {
  low: "ローレベル",
  middle: "ミドルレベル",
  high: "ハイレベル",
};

export const levelDescriptions: Record<Level, string> = {
  low: "TOEIC 400〜600点 / 英検準2級〜2級",
  middle: "TOEIC 600〜800点 / 英検準1級前後",
  high: "TOEIC 800点以上 / 英検準1級以上",
};

export const vocabulary: Word[] = [
  // ==================== ローレベル（TOEIC 400-600, 英検準2級〜2級）====================
  {
    id: 101,
    word: "achieve",
    phonetic: "/əˈtʃiːv/",
    meaning: "達成する、成し遂げる",
    examples: [
      "She achieved her goal of becoming a doctor.",
      "We achieved great success this year.",
      "He achieved high scores on the test."
    ],
    level: "low"
  },
  {
    id: 102,
    word: "afford",
    phonetic: "/əˈfɔːrd/",
    meaning: "〜する余裕がある、〜できる",
    examples: [
      "I can't afford to buy a new car.",
      "We can afford to take a vacation this summer.",
      "She couldn't afford the expensive restaurant."
    ],
    level: "low"
  },
  {
    id: 103,
    word: "announce",
    phonetic: "/əˈnaʊns/",
    meaning: "発表する、告知する",
    examples: [
      "The company announced a new product.",
      "They announced the winner of the contest.",
      "The president announced his resignation."
    ],
    level: "low"
  },
  {
    id: 104,
    word: "appropriate",
    phonetic: "/əˈprəʊpriət/",
    meaning: "適切な、ふさわしい",
    examples: [
      "Please wear appropriate clothing for the interview.",
      "Is this gift appropriate for a child?",
      "He made an appropriate decision."
    ],
    level: "low"
  },
  {
    id: 105,
    word: "available",
    phonetic: "/əˈveɪləbl/",
    meaning: "利用可能な、入手できる",
    examples: [
      "The manager is not available right now.",
      "This product is available online.",
      "Are there any seats available?"
    ],
    level: "low"
  },
  {
    id: 106,
    word: "benefit",
    phonetic: "/ˈbenɪfɪt/",
    meaning: "利益、恩恵、〜に利益をもたらす",
    examples: [
      "Exercise has many health benefits.",
      "The new policy will benefit all employees.",
      "What are the benefits of this plan?"
    ],
    level: "low"
  },
  {
    id: 107,
    word: "confident",
    phonetic: "/ˈkɒnfɪdənt/",
    meaning: "自信のある、確信している",
    examples: [
      "She is confident about passing the exam.",
      "He gave a confident presentation.",
      "I'm confident that we will succeed."
    ],
    level: "low"
  },
  {
    id: 108,
    word: "consider",
    phonetic: "/kənˈsɪdər/",
    meaning: "考慮する、検討する",
    examples: [
      "Please consider my proposal carefully.",
      "We are considering moving to a new office.",
      "Have you considered all the options?"
    ],
    level: "low"
  },
  {
    id: 109,
    word: "convenient",
    phonetic: "/kənˈviːniənt/",
    meaning: "便利な、都合の良い",
    examples: [
      "The hotel is in a convenient location.",
      "Is this time convenient for you?",
      "Online shopping is very convenient."
    ],
    level: "low"
  },
  {
    id: 110,
    word: "deadline",
    phonetic: "/ˈdedlaɪn/",
    meaning: "締め切り、期限",
    examples: [
      "The deadline for the report is Friday.",
      "We must meet the project deadline.",
      "Can you extend the deadline?"
    ],
    level: "low"
  },
  {
    id: 111,
    word: "decision",
    phonetic: "/dɪˈsɪʒn/",
    meaning: "決定、決断",
    examples: [
      "It was a difficult decision to make.",
      "The final decision is yours.",
      "We need to make a decision soon."
    ],
    level: "low"
  },
  {
    id: 112,
    word: "effort",
    phonetic: "/ˈefərt/",
    meaning: "努力、取り組み",
    examples: [
      "Success requires a lot of effort.",
      "I appreciate your effort on this project.",
      "She made an effort to arrive on time."
    ],
    level: "low"
  },
  {
    id: 113,
    word: "encourage",
    phonetic: "/ɪnˈkʌrɪdʒ/",
    meaning: "励ます、促進する",
    examples: [
      "Teachers encourage students to ask questions.",
      "We encourage feedback from customers.",
      "His words encouraged me to try again."
    ],
    level: "low"
  },
  {
    id: 114,
    word: "experience",
    phonetic: "/ɪkˈspɪəriəns/",
    meaning: "経験、体験する",
    examples: [
      "She has five years of work experience.",
      "I experienced many challenges abroad.",
      "It was an unforgettable experience."
    ],
    level: "low"
  },
  {
    id: 115,
    word: "improve",
    phonetic: "/ɪmˈpruːv/",
    meaning: "改善する、向上する",
    examples: [
      "I want to improve my English skills.",
      "The weather is expected to improve tomorrow.",
      "We need to improve our customer service."
    ],
    level: "low"
  },
  {
    id: 116,
    word: "increase",
    phonetic: "/ɪnˈkriːs/",
    meaning: "増加する、増やす",
    examples: [
      "Sales increased by 20% this year.",
      "We need to increase production.",
      "The population continues to increase."
    ],
    level: "low"
  },
  {
    id: 117,
    word: "maintain",
    phonetic: "/meɪnˈteɪn/",
    meaning: "維持する、保つ",
    examples: [
      "It's important to maintain good health.",
      "We maintain high quality standards.",
      "She maintains a positive attitude."
    ],
    level: "low"
  },
  {
    id: 118,
    word: "opportunity",
    phonetic: "/ˌɒpərˈtjuːnəti/",
    meaning: "機会、チャンス",
    examples: [
      "This is a great opportunity for you.",
      "I don't want to miss this opportunity.",
      "We provide opportunities for growth."
    ],
    level: "low"
  },
  {
    id: 119,
    word: "participate",
    phonetic: "/pɑːrˈtɪsɪpeɪt/",
    meaning: "参加する",
    examples: [
      "Everyone is encouraged to participate.",
      "She participated in the conference.",
      "Would you like to participate in the event?"
    ],
    level: "low"
  },
  {
    id: 120,
    word: "prefer",
    phonetic: "/prɪˈfɜːr/",
    meaning: "〜の方を好む",
    examples: [
      "I prefer coffee to tea.",
      "She prefers working from home.",
      "Which color do you prefer?"
    ],
    level: "low"
  },
  {
    id: 121,
    word: "prepare",
    phonetic: "/prɪˈpeər/",
    meaning: "準備する",
    examples: [
      "We need to prepare for the meeting.",
      "She prepared a delicious meal.",
      "Are you prepared for the exam?"
    ],
    level: "low"
  },
  {
    id: 122,
    word: "prevent",
    phonetic: "/prɪˈvent/",
    meaning: "防ぐ、妨げる",
    examples: [
      "We must prevent accidents from happening.",
      "The rain prevented us from going out.",
      "How can we prevent this problem?"
    ],
    level: "low"
  },
  {
    id: 123,
    word: "purpose",
    phonetic: "/ˈpɜːrpəs/",
    meaning: "目的、意図",
    examples: [
      "What is the purpose of this meeting?",
      "He did it on purpose.",
      "The purpose of the study is clear."
    ],
    level: "low"
  },
  {
    id: 124,
    word: "recommend",
    phonetic: "/ˌrekəˈmend/",
    meaning: "推薦する、勧める",
    examples: [
      "I recommend this restaurant highly.",
      "The doctor recommended more rest.",
      "Can you recommend a good book?"
    ],
    level: "low"
  },
  {
    id: 125,
    word: "require",
    phonetic: "/rɪˈkwaɪər/",
    meaning: "必要とする、要求する",
    examples: [
      "This job requires experience.",
      "All employees are required to attend.",
      "The project requires more time."
    ],
    level: "low"
  },
  {
    id: 126,
    word: "responsible",
    phonetic: "/rɪˈspɒnsəbl/",
    meaning: "責任がある",
    examples: [
      "Who is responsible for this project?",
      "She is responsible for the budget.",
      "We are responsible for our own actions."
    ],
    level: "low"
  },
  {
    id: 127,
    word: "satisfy",
    phonetic: "/ˈsætɪsfaɪ/",
    meaning: "満足させる",
    examples: [
      "The results satisfied everyone.",
      "We aim to satisfy our customers.",
      "Nothing seems to satisfy him."
    ],
    level: "low"
  },
  {
    id: 128,
    word: "schedule",
    phonetic: "/ˈʃedjuːl/",
    meaning: "予定、スケジュール",
    examples: [
      "What's your schedule for tomorrow?",
      "The meeting is scheduled for 3 PM.",
      "We need to adjust the schedule."
    ],
    level: "low"
  },
  {
    id: 129,
    word: "suggest",
    phonetic: "/səˈdʒest/",
    meaning: "提案する、示唆する",
    examples: [
      "I suggest we take a break.",
      "The data suggests a different conclusion.",
      "Can you suggest a solution?"
    ],
    level: "low"
  },
  {
    id: 130,
    word: "various",
    phonetic: "/ˈveəriəs/",
    meaning: "様々な、いろいろな",
    examples: [
      "There are various options to choose from.",
      "She has various hobbies.",
      "We discussed various topics."
    ],
    level: "low"
  },

  // ==================== ミドルレベル（TOEIC 600-800, 英検準1級前後）====================
  {
    id: 201,
    word: "accommodate",
    phonetic: "/əˈkɒmədeɪt/",
    meaning: "収容する、対応する",
    examples: [
      "The hotel can accommodate 200 guests.",
      "We will try to accommodate your request.",
      "The schedule was adjusted to accommodate everyone."
    ],
    level: "middle"
  },
  {
    id: 202,
    word: "acquisition",
    phonetic: "/ˌækwɪˈzɪʃn/",
    meaning: "取得、買収",
    examples: [
      "The acquisition of the company was completed.",
      "Language acquisition takes time.",
      "The museum's latest acquisition is impressive."
    ],
    level: "middle"
  },
  {
    id: 203,
    word: "adversely",
    phonetic: "/ˈædvɜːrsli/",
    meaning: "不利に、悪影響を及ぼして",
    examples: [
      "The weather adversely affected the crops.",
      "Stress can adversely impact your health.",
      "The new policy adversely affected sales."
    ],
    level: "middle"
  },
  {
    id: 204,
    word: "advocate",
    phonetic: "/ˈædvəkeɪt/",
    meaning: "提唱する、支持者",
    examples: [
      "She advocates for environmental protection.",
      "He is a strong advocate of education reform.",
      "The group advocates peaceful solutions."
    ],
    level: "middle"
  },
  {
    id: 205,
    word: "allocate",
    phonetic: "/ˈæləkeɪt/",
    meaning: "割り当てる、配分する",
    examples: [
      "We need to allocate resources more efficiently.",
      "The budget was allocated to different departments.",
      "Time should be allocated for each task."
    ],
    level: "middle"
  },
  {
    id: 206,
    word: "attribute",
    phonetic: "/əˈtrɪbjuːt/",
    meaning: "〜に帰する、特性",
    examples: [
      "She attributed her success to hard work.",
      "Leadership is an important attribute.",
      "The failure was attributed to poor planning."
    ],
    level: "middle"
  },
  {
    id: 207,
    word: "comprehensive",
    phonetic: "/ˌkɒmprɪˈhensɪv/",
    meaning: "包括的な、総合的な",
    examples: [
      "We offer a comprehensive training program.",
      "The report provides a comprehensive overview.",
      "A comprehensive study was conducted."
    ],
    level: "middle"
  },
  {
    id: 208,
    word: "conscientious",
    phonetic: "/ˌkɒnʃiˈenʃəs/",
    meaning: "良心的な、誠実な",
    examples: [
      "She is a conscientious worker.",
      "He made a conscientious effort to improve.",
      "Conscientious employees are valued."
    ],
    level: "middle"
  },
  {
    id: 209,
    word: "consolidate",
    phonetic: "/kənˈsɒlɪdeɪt/",
    meaning: "統合する、強固にする",
    examples: [
      "The company plans to consolidate its operations.",
      "We need to consolidate our position in the market.",
      "The data was consolidated into one report."
    ],
    level: "middle"
  },
  {
    id: 210,
    word: "contingent",
    phonetic: "/kənˈtɪndʒənt/",
    meaning: "〜次第の、偶発的な",
    examples: [
      "The deal is contingent on board approval.",
      "Success is contingent upon preparation.",
      "We have a contingent plan ready."
    ],
    level: "middle"
  },
  {
    id: 211,
    word: "deter",
    phonetic: "/dɪˈtɜːr/",
    meaning: "思いとどまらせる、抑止する",
    examples: [
      "High prices deter many customers.",
      "The security measures deter crime.",
      "Don't let failure deter you from trying."
    ],
    level: "middle"
  },
  {
    id: 212,
    word: "deviate",
    phonetic: "/ˈdiːvieɪt/",
    meaning: "逸脱する、それる",
    examples: [
      "We cannot deviate from the original plan.",
      "The results deviated from expectations.",
      "He never deviates from his routine."
    ],
    level: "middle"
  },
  {
    id: 213,
    word: "diligent",
    phonetic: "/ˈdɪlɪdʒənt/",
    meaning: "勤勉な、熱心な",
    examples: [
      "She is a diligent student.",
      "Diligent effort leads to success.",
      "He was diligent in completing his tasks."
    ],
    level: "middle"
  },
  {
    id: 214,
    word: "discretion",
    phonetic: "/dɪˈskreʃn/",
    meaning: "裁量、思慮深さ",
    examples: [
      "Use your own discretion in this matter.",
      "The decision is at the manager's discretion.",
      "Handle the information with discretion."
    ],
    level: "middle"
  },
  {
    id: 215,
    word: "disparity",
    phonetic: "/dɪˈspærəti/",
    meaning: "格差、不均衡",
    examples: [
      "There is a disparity in wages between regions.",
      "The disparity between rich and poor is growing.",
      "We aim to reduce the disparity in education."
    ],
    level: "middle"
  },
  {
    id: 216,
    word: "diversify",
    phonetic: "/daɪˈvɜːrsɪfaɪ/",
    meaning: "多様化する",
    examples: [
      "The company plans to diversify its products.",
      "Investors should diversify their portfolios.",
      "We need to diversify our revenue streams."
    ],
    level: "middle"
  },
  {
    id: 217,
    word: "feasible",
    phonetic: "/ˈfiːzəbl/",
    meaning: "実行可能な、実現できる",
    examples: [
      "Is this plan feasible within our budget?",
      "We need a feasible solution.",
      "The project is technically feasible."
    ],
    level: "middle"
  },
  {
    id: 218,
    word: "fluctuate",
    phonetic: "/ˈflʌktʃueɪt/",
    meaning: "変動する、揺れ動く",
    examples: [
      "Stock prices fluctuate daily.",
      "Temperatures fluctuate throughout the day.",
      "Demand tends to fluctuate seasonally."
    ],
    level: "middle"
  },
  {
    id: 219,
    word: "implement",
    phonetic: "/ˈɪmplɪment/",
    meaning: "実施する、導入する",
    examples: [
      "We will implement the new policy next month.",
      "The changes were successfully implemented.",
      "How do we implement this strategy?"
    ],
    level: "middle"
  },
  {
    id: 220,
    word: "incentive",
    phonetic: "/ɪnˈsentɪv/",
    meaning: "動機、報奨金",
    examples: [
      "The company offers incentives to top performers.",
      "Tax incentives encourage investment.",
      "What incentive do they have to change?"
    ],
    level: "middle"
  },
  {
    id: 221,
    word: "integrate",
    phonetic: "/ˈɪntɪɡreɪt/",
    meaning: "統合する、融合する",
    examples: [
      "We need to integrate the new system.",
      "The company integrated sustainability into its strategy.",
      "Different cultures can integrate successfully."
    ],
    level: "middle"
  },
  {
    id: 222,
    word: "legitimate",
    phonetic: "/lɪˈdʒɪtɪmət/",
    meaning: "正当な、合法的な",
    examples: [
      "That's a legitimate concern.",
      "Is this a legitimate business?",
      "He has a legitimate claim to the property."
    ],
    level: "middle"
  },
  {
    id: 223,
    word: "mandatory",
    phonetic: "/ˈmændətəri/",
    meaning: "義務的な、必須の",
    examples: [
      "Attendance at the meeting is mandatory.",
      "Safety training is mandatory for all employees.",
      "Wearing a helmet is mandatory."
    ],
    level: "middle"
  },
  {
    id: 224,
    word: "preliminary",
    phonetic: "/prɪˈlɪmɪnəri/",
    meaning: "予備的な、準備の",
    examples: [
      "The preliminary results are promising.",
      "We conducted a preliminary investigation.",
      "This is just a preliminary draft."
    ],
    level: "middle"
  },
  {
    id: 225,
    word: "proficient",
    phonetic: "/prəˈfɪʃnt/",
    meaning: "熟達した、堪能な",
    examples: [
      "She is proficient in three languages.",
      "Applicants must be proficient in Excel.",
      "He became proficient through practice."
    ],
    level: "middle"
  },
  {
    id: 226,
    word: "reimburse",
    phonetic: "/ˌriːɪmˈbɜːrs/",
    meaning: "払い戻す、弁償する",
    examples: [
      "The company will reimburse travel expenses.",
      "You will be reimbursed for your costs.",
      "Please submit receipts to be reimbursed."
    ],
    level: "middle"
  },
  {
    id: 227,
    word: "robust",
    phonetic: "/rəʊˈbʌst/",
    meaning: "頑丈な、力強い",
    examples: [
      "The economy shows robust growth.",
      "We need a more robust system.",
      "The company has a robust business model."
    ],
    level: "middle"
  },
  {
    id: 228,
    word: "stringent",
    phonetic: "/ˈstrɪndʒənt/",
    meaning: "厳格な、厳しい",
    examples: [
      "The company has stringent quality controls.",
      "Stringent regulations are in place.",
      "We follow stringent safety standards."
    ],
    level: "middle"
  },
  {
    id: 229,
    word: "subsequent",
    phonetic: "/ˈsʌbsɪkwənt/",
    meaning: "その後の、続いて起こる",
    examples: [
      "Subsequent events proved him right.",
      "In subsequent meetings, we discussed details.",
      "The subsequent chapters explain the theory."
    ],
    level: "middle"
  },
  {
    id: 230,
    word: "viable",
    phonetic: "/ˈvaɪəbl/",
    meaning: "実行可能な、生存能力のある",
    examples: [
      "Is this a viable option?",
      "We need to find a viable alternative.",
      "The business became financially viable."
    ],
    level: "middle"
  },

  // ==================== ハイレベル（TOEIC 800点以上, 英検準1級以上）====================
  {
    id: 1,
    word: "ubiquitous",
    phonetic: "/juːˈbɪkwɪtəs/",
    meaning: "どこにでもある、遍在する",
    examples: [
      "Smartphones have become ubiquitous in modern society.",
      "The company's logo is ubiquitous in major cities.",
      "Coffee shops are now ubiquitous in urban areas."
    ],
    level: "high"
  },
  {
    id: 2,
    word: "meticulous",
    phonetic: "/məˈtɪkjələs/",
    meaning: "細心の、綿密な",
    examples: [
      "She is meticulous about keeping records.",
      "The project requires meticulous planning.",
      "He gave a meticulous description of the process."
    ],
    level: "high"
  },
  {
    id: 3,
    word: "eloquent",
    phonetic: "/ˈeləkwənt/",
    meaning: "雄弁な、説得力のある",
    examples: [
      "She delivered an eloquent speech at the conference.",
      "His eloquent arguments convinced the jury.",
      "The author's eloquent prose captivated readers."
    ],
    level: "high"
  },
  {
    id: 4,
    word: "pragmatic",
    phonetic: "/præɡˈmætɪk/",
    meaning: "実用的な、現実的な",
    examples: [
      "We need a pragmatic approach to solve this problem.",
      "She's known for her pragmatic decision-making.",
      "The pragmatic solution saved both time and money."
    ],
    level: "high"
  },
  {
    id: 5,
    word: "tenacious",
    phonetic: "/təˈneɪʃəs/",
    meaning: "粘り強い、執拗な",
    examples: [
      "Her tenacious pursuit of justice inspired many.",
      "The tenacious reporter uncovered the scandal.",
      "Success requires tenacious effort over time."
    ],
    level: "high"
  },
  {
    id: 6,
    word: "precarious",
    phonetic: "/prɪˈkeəriəs/",
    meaning: "不安定な、危うい",
    examples: [
      "The company is in a precarious financial situation.",
      "He maintained a precarious balance on the ledge.",
      "Their precarious living conditions need attention."
    ],
    level: "high"
  },
  {
    id: 7,
    word: "exacerbate",
    phonetic: "/ɪɡˈzæsərbeɪt/",
    meaning: "悪化させる、激化させる",
    examples: [
      "The new policy may exacerbate the housing crisis.",
      "Stress can exacerbate health problems.",
      "His comments only exacerbated the tension."
    ],
    level: "high"
  },
  {
    id: 8,
    word: "scrutinize",
    phonetic: "/ˈskruːtənaɪz/",
    meaning: "詳しく調べる、精査する",
    examples: [
      "Auditors will scrutinize the financial records.",
      "The committee scrutinized every detail of the proposal.",
      "Journalists scrutinized the politician's claims."
    ],
    level: "high"
  },
  {
    id: 9,
    word: "substantiate",
    phonetic: "/səbˈstænʃieɪt/",
    meaning: "実証する、裏付ける",
    examples: [
      "Can you substantiate your claims with evidence?",
      "The research substantiated the theory.",
      "He failed to substantiate his allegations."
    ],
    level: "high"
  },
  {
    id: 10,
    word: "ameliorate",
    phonetic: "/əˈmiːliəreɪt/",
    meaning: "改善する、良くする",
    examples: [
      "The government aims to ameliorate living conditions.",
      "New measures were introduced to ameliorate the situation.",
      "Education can ameliorate social inequality."
    ],
    level: "high"
  },
  {
    id: 11,
    word: "circumvent",
    phonetic: "/ˌsɜːrkəmˈvent/",
    meaning: "回避する、迂回する",
    examples: [
      "They found a way to circumvent the regulations.",
      "The software helps circumvent geographical restrictions.",
      "He tried to circumvent the approval process."
    ],
    level: "high"
  },
  {
    id: 12,
    word: "conundrum",
    phonetic: "/kəˈnʌndrəm/",
    meaning: "難問、ジレンマ",
    examples: [
      "The budget deficit presents a difficult conundrum.",
      "Scientists face the conundrum of limited resources.",
      "This ethical conundrum has no easy solution."
    ],
    level: "high"
  },
  {
    id: 13,
    word: "ephemeral",
    phonetic: "/ɪˈfemərəl/",
    meaning: "短命な、はかない",
    examples: [
      "Fame in social media is often ephemeral.",
      "The ephemeral beauty of cherry blossoms attracts tourists.",
      "Trends in fashion are notoriously ephemeral."
    ],
    level: "high"
  },
  {
    id: 14,
    word: "commensurate",
    phonetic: "/kəˈmenʃərət/",
    meaning: "釣り合った、相応の",
    examples: [
      "Salary will be commensurate with experience.",
      "The punishment should be commensurate with the crime.",
      "We expect results commensurate with our investment."
    ],
    level: "high"
  },
  {
    id: 15,
    word: "expedite",
    phonetic: "/ˈekspədaɪt/",
    meaning: "促進する、迅速に処理する",
    examples: [
      "We need to expedite the approval process.",
      "Technology can expedite business operations.",
      "The manager expedited the shipment of goods."
    ],
    level: "high"
  },
  {
    id: 16,
    word: "disseminate",
    phonetic: "/dɪˈseməneɪt/",
    meaning: "広める、普及させる",
    examples: [
      "Social media helps disseminate information quickly.",
      "The organization works to disseminate knowledge.",
      "Researchers disseminate their findings through journals."
    ],
    level: "high"
  },
  {
    id: 17,
    word: "proliferate",
    phonetic: "/prəˈlɪfəreɪt/",
    meaning: "急増する、増殖する",
    examples: [
      "Fake news continues to proliferate online.",
      "Startups have proliferated in the tech sector.",
      "The cells began to proliferate rapidly."
    ],
    level: "high"
  },
  {
    id: 18,
    word: "mitigate",
    phonetic: "/ˈmɪtɪɡeɪt/",
    meaning: "軽減する、和らげる",
    examples: [
      "Steps were taken to mitigate the environmental impact.",
      "Insurance helps mitigate financial risks.",
      "The medicine helps mitigate the symptoms."
    ],
    level: "high"
  },
  {
    id: 19,
    word: "corroborate",
    phonetic: "/kəˈrɒbəreɪt/",
    meaning: "裏付ける、確証する",
    examples: [
      "Witnesses corroborated the victim's account.",
      "Evidence corroborates the scientific hypothesis.",
      "Can anyone corroborate your alibi?"
    ],
    level: "high"
  },
  {
    id: 20,
    word: "juxtapose",
    phonetic: "/ˈdʒʌkstəpəʊz/",
    meaning: "並置する、対比する",
    examples: [
      "The exhibit juxtaposes modern and classical art.",
      "The author juxtaposes wealth and poverty in the novel.",
      "The documentary juxtaposes different perspectives."
    ],
    level: "high"
  },
  {
    id: 21,
    word: "vindicate",
    phonetic: "/ˈvɪndɪkeɪt/",
    meaning: "正当性を証明する、潔白を証明する",
    examples: [
      "The new evidence vindicated the defendant.",
      "Time will vindicate our decision.",
      "She felt vindicated when her theory proved correct."
    ],
    level: "high"
  },
  {
    id: 22,
    word: "pertinent",
    phonetic: "/ˈpɜːrtɪnənt/",
    meaning: "関連のある、適切な",
    examples: [
      "Please provide only pertinent information.",
      "Her question was highly pertinent to the discussion.",
      "The report includes all pertinent details."
    ],
    level: "high"
  },
  {
    id: 23,
    word: "conducive",
    phonetic: "/kənˈduːsɪv/",
    meaning: "助けとなる、〜に資する",
    examples: [
      "The environment is conducive to learning.",
      "Quiet spaces are conducive to concentration.",
      "Good communication is conducive to teamwork."
    ],
    level: "high"
  },
  {
    id: 24,
    word: "inherent",
    phonetic: "/ɪnˈhɪərənt/",
    meaning: "固有の、本来備わっている",
    examples: [
      "There are inherent risks in any investment.",
      "Creativity is inherent in human nature.",
      "The system has some inherent limitations."
    ],
    level: "high"
  },
  {
    id: 25,
    word: "discrepancy",
    phonetic: "/dɪˈskrepənsi/",
    meaning: "不一致、矛盾",
    examples: [
      "There's a discrepancy between the two reports.",
      "Auditors found a discrepancy in the accounts.",
      "The discrepancy in data needs to be resolved."
    ],
    level: "high"
  },
  {
    id: 26,
    word: "detrimental",
    phonetic: "/ˌdetrɪˈmentl/",
    meaning: "有害な、不利益な",
    examples: [
      "Smoking is detrimental to your health.",
      "The scandal was detrimental to his reputation.",
      "Excessive screen time can be detrimental to children."
    ],
    level: "high"
  },
  {
    id: 27,
    word: "indispensable",
    phonetic: "/ˌɪndɪˈspensəbl/",
    meaning: "不可欠な、必須の",
    examples: [
      "Clean water is indispensable for survival.",
      "She became indispensable to the team.",
      "Technology has become indispensable in education."
    ],
    level: "high"
  },
  {
    id: 28,
    word: "propensity",
    phonetic: "/prəˈpensəti/",
    meaning: "傾向、性向",
    examples: [
      "He has a propensity for taking risks.",
      "The study examined the propensity to save money.",
      "There's a propensity for errors in manual processes."
    ],
    level: "high"
  },
  {
    id: 29,
    word: "antithesis",
    phonetic: "/ænˈtɪθəsɪs/",
    meaning: "正反対、対照",
    examples: [
      "His approach is the antithesis of traditional methods.",
      "The character represents the antithesis of heroism.",
      "Their policies are the antithesis of ours."
    ],
    level: "high"
  },
  {
    id: 30,
    word: "ramification",
    phonetic: "/ˌræmɪfɪˈkeɪʃn/",
    meaning: "影響、派生的結果",
    examples: [
      "We must consider the ramifications of this decision.",
      "The policy change has far-reaching ramifications.",
      "The legal ramifications could be severe."
    ],
    level: "high"
  },
];
