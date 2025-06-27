import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, FileText, Settings, ArrowLeft, Play, CheckCircle, XCircle, ChevronRight, ChevronLeft } from 'lucide-react';

// 單字資料結構 - Unit 1 已更新為實際內容
const vocabularyData = {
  units: [
    {
      id: 'unit1',
      title: 'Unit 1',
      description: 'General Business - 商業基礎單字',
      subUnits: [
        {
          id: 'unit1-1',
          title: 'Advertisement',
          description: '廣告相關單字',
          words: [
            { english: 'pop-up ad', chinese: ['彈出式廣告'] },
            { english: 'banner', chinese: ['橫幅廣告'] },
            { english: 'pay-per-click ad', chinese: ['點擊付費廣告'] },
            { english: 'EDM', chinese: ['電子郵件行銷'] },
            { english: 'advertisement', chinese: ['廣告', '宣傳'] },
            { english: 'commercial', chinese: ['電視廣告'] },
            { english: 'spot', chinese: ['節目間的廣告插播'] },
            { english: 'product placement', chinese: ['置入性行銷'] },
            { english: 'infomercial', chinese: ['電視購物節目'] },
            { english: 'billboard', chinese: ['廣告看板'] },
            { english: 'mobile billboard', chinese: ['動態看板'] },
            { english: 'poster', chinese: ['海報'] },
            { english: 'classified ad', chinese: ['分類廣告'] },
            { english: 'front-page ad', chinese: ['頭版廣告'] },
            { english: 'full-page ad', chinese: ['全版廣告'] },
            { english: 'advertorial', chinese: ['業配文'] }
          ]
        },
        {
          id: 'unit1-2',
          title: 'Agreement',
          description: '協議相關單字',
          words: [
            { english: 'agreement', chinese: ['協定', '協議'] },
            { english: 'trade agreement', chinese: ['貿易協定'] },
            { english: 'NDA', chinese: ['保密協定'] },
            { english: 'waiver', chinese: ['棄權書'] },
            { english: 'guaranty', chinese: ['保證書'] },
            { english: 'power of attorney', chinese: ['委任書'] },
            { english: 'reach/strike an agreement', chinese: ['達成協議'] },
            { english: 'in agreement', chinese: ['意見相同'] },
            { english: 'binding', chinese: ['有約束力的'] },
            { english: 'legally binding agreement', chinese: ['具法律約束力協議'] },
            { english: 'obligate', chinese: ['使有義務或責任'] },
            { english: 'be obligated to', chinese: ['有義務'] },
            { english: 'LOI', chinese: ['意向書'] }
          ]
        },
        {
          id: 'unit1-3',
          title: 'Auction',
          description: '拍賣相關單字',
          words: [
            { english: 'auction', chinese: ['拍賣'] },
            { english: 'bid', chinese: ['價競'] },
            { english: 'bid price', chinese: ['投票價格'] },
            { english: 'opening bid', chinese: ['第一次喊價'] },
            { english: 'outmatch', chinese: ['勝過'] },
            { english: 'cutthroat', chinese: ['競爭激烈的'] },
            { english: 'win the bid', chinese: ['得票'] },
            { english: 'hammer price', chinese: ['成交價'] },
            { english: 'invalid bid', chinese: ['流標'] },
            { english: 'antique', chinese: ['古董', '古玩'] },
            { english: 'artwork', chinese: ['藝術品'] },
            { english: 'collectible', chinese: ['蒐藏品', '珍藏物'] },
            { english: 'collection', chinese: ['收藏', '館藏'] },
            { english: 'rare', chinese: ['稀有的', '罕見的'] },
            { english: 'unique', chinese: ['獨特的', '唯一的'] },
            { english: 'valuable', chinese: ['有價值的', '貴重的'] },
            { english: 'forword auction', chinese: ['正向拍賣'] },
            { english: 'auctioneer', chinese: ['拍賣商'] },
            { english: 'auction (sth.) off', chinese: ['把...拍賣掉'] },
            { english: 'at auction', chinese: ['拍賣中'] }
          ]
        },
        {
          id: 'unit1-4',
          title: 'Collaborate',
          description: '合作相關單字',
          words: [
            { english: 'collaborate', chinese: ['合作'] },
            { english: 'partner', chinese: ['合作', '夥伴'] },
            { english: 'teamwork', chinese: ['團隊合作'] },
            { english: 'efficient', chinese: ['有效率的'] },
            { english: 'inefficient', chinese: ['沒效率的'] },
            { english: 'efficiency', chinese: ['效率'] },
            { english: 'complete', chinese: ['完成'] },
            { english: 'submit', chinese: ['提交', '呈遞'] },
            { english: 'hand in', chinese: ['呈交'] },
            { english: 'project', chinese: ['專案'] },
            { english: 'project manager(PM)', chinese: ['專案經理'] },
            { english: 'coordinate', chinese: ['協調'] },
            { english: 'coordinator', chinese: ['統籌者', '協調者'] },
            { english: 'deadline', chinese: ['時限', '截止日期'] },
            { english: 'time frame', chinese: ['時間範圍'] },
            { english: 'collaboration', chinese: ['合作'] },
            { english: 'collaborator', chinese: ['合作夥伴', '搭檔'] }
          ]
        },
        {
          id: 'unit1-5',
          title: 'Conference',
          description: '會議相關單字',
          words: [
            { english: 'agenda', chinese: ['議程', '討論主題'] },
            { english: 'take/keep minutes', chinese: ['做會議記錄'] },
            { english: 'turnout', chinese: ['(集會)出席者', '聚集人數'] },
            { english: 'brainstorm', chinese: ['集思廣益'] },
            { english: 'brainstorming', chinese: ['腦力激盪'] },
            { english: 'come up with', chinese: ['想出', '提供'] },
            { english: 'figure out', chinese: ['想出'] },
            { english: 'propose', chinese: ['提議'] },
            { english: 'proposal', chinese: ['計畫', '提案'] },
            { english: 'conclude', chinese: ['作結論'] },
            { english: 'adjourn', chinese: ['始終止', '休會'] },
            { english: 'wrap up', chinese: ['概括總結'] },
            { english: 'call it a day', chinese: ['今天就到此為止'] },
            { english: 'chairperson', chinese: ['主席'] },
            { english: 'sb. take the floor', chinese: ['由某人發言'] },
            { english: 'the floor is yours', chinese: ['接下來交由你發言'] },
            { english: 'teleconference', chinese: ['視訊會議'] }
          ]
        },
        {
          id: 'unit1-6',
          title: 'Consumer',
          description: '消費者相關單字',
          words: [
            { english: 'consumer', chinese: ['消費者'] },
            { english: 'customer', chinese: ['顧客'] },
            { english: 'client', chinese: ['客戶'] },
            { english: 'buyer', chinese: ['買家'] },
            { english: 'purchase', chinese: ['購買'] }
          ]
        },
        {
          id: 'unit1-7',
          title: 'Contract',
          description: '合約相關單字',
          words: [
            { english: 'contract', chinese: ['合約'] },
            { english: 'legal', chinese: ['法律的'] },
            { english: 'binding', chinese: ['有約束力的'] },
            { english: 'signature', chinese: ['簽名'] },
            { english: 'document', chinese: ['文件'] }
          ]
        },
        {
          id: 'unit1-8',
          title: 'Distribution',
          description: '配銷相關單字',
          words: [
            { english: 'distribution', chinese: ['配銷'] },
            { english: 'supply', chinese: ['供應'] },
            { english: 'delivery', chinese: ['交付'] },
            { english: 'logistics', chinese: ['物流'] },
            { english: 'warehouse', chinese: ['倉庫'] }
          ]
        },
        {
          id: 'unit1-9',
          title: 'Entrepreneur',
          description: '企業家相關單字',
          words: [
            { english: 'entrepreneur', chinese: ['企業家'] },
            { english: 'startup', chinese: ['新創公司'] },
            { english: 'innovation', chinese: ['創新'] },
            { english: 'venture', chinese: ['創業投資'] },
            { english: 'business', chinese: ['商業'] }
          ]
        },
        {
          id: 'unit1-10',
          title: 'Market',
          description: '市場相關單字',
          words: [
            { english: 'market', chinese: ['市場'] },
            { english: 'demand', chinese: ['需求'] },
            { english: 'supply', chinese: ['供給'] },
            { english: 'competition', chinese: ['競爭'] },
            { english: 'trend', chinese: ['趨勢'] }
          ]
        },
        {
          id: 'unit1-11',
          title: 'Merchandise',
          description: '商品相關單字',
          words: [
            { english: 'merchandise', chinese: ['商品'] },
            { english: 'product', chinese: ['產品'] },
            { english: 'goods', chinese: ['貨物'] },
            { english: 'inventory', chinese: ['庫存'] },
            { english: 'stock', chinese: ['存貨'] }
          ]
        },
        {
          id: 'unit1-12',
          title: 'Negotiate',
          description: '談判相關單字',
          words: [
            { english: 'negotiate', chinese: ['談判'] },
            { english: 'bargain', chinese: ['議價'] },
            { english: 'compromise', chinese: ['妥協'] },
            { english: 'deal', chinese: ['交易'] },
            { english: 'settlement', chinese: ['和解'] }
          ]
        },
        {
          id: 'unit1-13',
          title: 'Presentation',
          description: '簡報相關單字',
          words: [
            { english: 'presentation', chinese: ['簡報'] },
            { english: 'slide', chinese: ['投影片'] },
            { english: 'speaker', chinese: ['演講者'] },
            { english: 'audience', chinese: ['觀眾'] },
            { english: 'visual', chinese: ['視覺的'] }
          ]
        },
        {
          id: 'unit1-14',
          title: 'Promote',
          description: '推廣相關單字',
          words: [
            { english: 'promote', chinese: ['推廣'] },
            { english: 'advertise', chinese: ['廣告'] },
            { english: 'publicity', chinese: ['宣傳'] },
            { english: 'campaign', chinese: ['活動'] },
            { english: 'exposure', chinese: ['曝光'] }
          ]
        },
        {
          id: 'unit1-15',
          title: 'Salesperson',
          description: '銷售人員相關單字',
          words: [
            { english: 'salesperson', chinese: ['銷售人員'] },
            { english: 'representative', chinese: ['代表'] },
            { english: 'commission', chinese: ['佣金'] },
            { english: 'quota', chinese: ['配額'] },
            { english: 'target', chinese: ['目標'] }
          ]
        },
        {
          id: 'unit1-16',
          title: 'Task',
          description: '任務相關單字',
          words: [
            { english: 'task', chinese: ['任務'] },
            { english: 'assignment', chinese: ['指派'] },
            { english: 'responsibility', chinese: ['責任'] },
            { english: 'duty', chinese: ['職責'] },
            { english: 'objective', chinese: ['目標'] }
          ]
        }
      ]
    },
    // 其他 Units 保持原樣，等待後續更新
    ...Array.from({ length: 12 }, (_, unitIndex) => ({
      id: `unit${unitIndex + 2}`,
      title: `Unit ${unitIndex + 2}`,
      description: `Unit ${unitIndex + 2} 描述 - 待更新`,
      subUnits: Array.from({ length: 3 }, (_, subIndex) => ({
        id: `unit${unitIndex + 2}-${subIndex + 1}`,
        title: `單元 ${unitIndex + 2}-${subIndex + 1}`,
        description: `單元 ${unitIndex + 2}-${subIndex + 1} 描述 - 待更新`,
        words: [
          { english: 'example', chinese: ['範例'] },
          { english: 'word', chinese: ['單字'] },
          { english: 'practice', chinese: ['練習'] },
          { english: 'study', chinese: ['學習'] },
          { english: 'english', chinese: ['英文'] }
        ]
      }))
    }))
  ]
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedSubUnit, setSelectedSubUnit] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completedWords, setCompletedWords] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedUnit(null);
    setSelectedSubUnit(null);
    closeSidebar();
  };

  const selectUnit = (unit) => {
    setSelectedUnit(unit);
    setCurrentPage('unit-detail');
  };

  const selectSubUnit = (subUnit) => {
    setSelectedSubUnit(subUnit);
    setCurrentWordIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setScore(0);
    setCompletedWords(0);
    setCurrentPage('practice');
  };

  const checkAnswer = () => {
    const currentWord = selectedSubUnit.words[currentWordIndex];
    const correct = userAnswer.trim().toLowerCase() === currentWord.chinese.join(' ').toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      setScore(score + 1);
    }
    setCompletedWords(completedWords + 1);
  };

  const nextWord = () => {
    if (currentWordIndex < selectedSubUnit.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setCurrentPage('result');
    }
  };

  const resetToUnits = () => {
    setCurrentPage('practice-units');
    setSelectedUnit(null);
    setSelectedSubUnit(null);
  };

  const backToUnitDetail = () => {
    setCurrentPage('unit-detail');
    setSelectedSubUnit(null);
  };

  const navigationItems = [
    { icon: Home, label: '主頁', page: 'home' },
    { icon: BookOpen, label: '單字練習', page: 'practice-units' },
    { icon: FileText, label: '單字考試', page: 'test' },
    { icon: Settings, label: '設定', page: 'settings' },
  ];

  const renderHomePage = () => (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            歡迎來到
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              單字學習平台
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            透過我們精心設計的學習系統，讓您輕鬆掌握英文單字。
            從基礎練習到進階測驗，全方位提升您的英語能力。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('practice-units')}
              className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              開始學習
            </button>
            <button className="px-8 py-4 bg-white text-slate-800 rounded-lg font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">學習特色</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              我們結合創新的學習方法與可靠的教學系統，為您提供最佳的學習體驗
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "階層式學習",
                description: "從 Unit 1 到 Unit 13，循序漸進的學習結構，讓您系統性地掌握英文單字"
              },
              {
                icon: FileText,
                title: "智能測驗",
                description: "個人化的測驗系統，根據您的學習進度調整難度與內容"
              },
              {
                icon: Settings,
                title: "學習追蹤",
                description: "詳細的學習記錄與進度分析，幫助您掌握學習成效"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">準備開始學習了嗎？</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            加入數千名學習者的行列，透過我們的平台提升您的英語單字能力
          </p>
          <button 
            onClick={() => navigateTo('practice-units')}
            className="px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            立即開始學習
          </button>
        </div>
      </section>
    </main>
  );

  const renderPracticeUnits = () => (
    <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>返回主頁</span>
          </button>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">選擇學習單元</h1>
          <p className="text-xl text-slate-600">選擇您想要學習的 Unit，每個 Unit 包含多個練習單元</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vocabularyData.units.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
              onClick={() => selectUnit(unit)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{unit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{unit.description}</p>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-slate-500">
                  {unit.subUnits.length} 個單元
                </span>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                <span>選擇單元</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );

  const renderUnitDetail = () => (
    <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button
            onClick={resetToUnits}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>返回單元選擇</span>
          </button>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{selectedUnit.title}</h1>
          <p className="text-xl text-slate-600">{selectedUnit.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedUnit.subUnits.map((subUnit) => (
            <div
              key={subUnit.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{subUnit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{subUnit.description}</p>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-slate-500">
                  {subUnit.words.length} 個單字
                </span>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>

              <button
                onClick={() => selectSubUnit(subUnit)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="h-4 w-4" />
                <span>開始練習</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );

  const renderPractice = () => {
    const currentWord = selectedSubUnit.words[currentWordIndex];
    const progress = ((currentWordIndex + 1) / selectedSubUnit.words.length) * 100;

    return (
      <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <button
              onClick={backToUnitDetail}
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>返回單元選擇</span>
            </button>
            
            <div className="mb-4">
              <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                <span>{selectedUnit.title}</span>
                <ChevronRight className="h-4 w-4" />
                <span>{selectedSubUnit.title}</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">{selectedSubUnit.title}</h1>
              <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                <span>進度: {currentWordIndex + 1} / {selectedSubUnit.words.length}</span>
                <span>得分: {score} / {completedWords}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-sm text-slate-500 mb-2">請翻譯以下英文單字</h2>
              <div className="text-4xl font-bold text-slate-800 mb-6 p-4 bg-slate-50 rounded-lg">
                {currentWord.english}
              </div>
            </div>

            {!showResult ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="請輸入中文翻譯"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && userAnswer.trim() && checkAnswer()}
                />
                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim()}
                  className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  確認答案
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className={`flex items-center justify-center space-x-2 text-2xl font-bold ${
                  isCorrect ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isCorrect ? <CheckCircle className="h-8 w-8" /> : <XCircle className="h-8 w-8" />}
                  <span>{isCorrect ? '正確！' : '錯誤'}</span>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-600 mb-2">正確答案：</p>
                  <p className="text-2xl font-bold text-slate-800">{currentWord.chinese.join(' ')}</p>
                  {!isCorrect && (
                    <p className="text-slate-500 mt-2">您的答案：{userAnswer}</p>
                  )}
                </div>

                <button
                  onClick={nextWord}
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-200"
                >
                  {currentWordIndex < selectedSubUnit.words.length - 1 ? '下一個單字' : '完成練習'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  };

  const renderResult = () => {
    const percentage = Math.round((score / selectedSubUnit.words.length) * 100);
    
    return (
      <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">練習完成！</h1>
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <span>{selectedUnit.title}</span>
                <ChevronRight className="h-4 w-4" />
                <span>{selectedSubUnit.title}</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-800">{score}</div>
                  <div className="text-sm text-slate-600">正確</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">{selectedSubUnit.words.length - score}</div>
                  <div className="text-sm text-slate-600">錯誤</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">{percentage}%</div>
                  <div className="text-sm text-slate-600">正確率</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => selectSubUnit(selectedSubUnit)}
                className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-200"
              >
                重新練習
              </button>
              <button
                onClick={backToUnitDetail}
                className="w-full px-6 py-3 bg-white text-slate-800 rounded-lg font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                選擇其他單元
              </button>
              <button
                onClick={resetToUnits}
                className="w-full px-6 py-3 bg-white text-slate-600 rounded-lg font-medium border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                返回 Unit 選擇
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'practice-units':
        return renderPracticeUnits();
      case 'unit-detail':
        return renderUnitDetail();
      case 'practice':
        return renderPractice();
      case 'result':
        return renderResult();
      case 'test':
        return (
          <main className="relative z-10 py-20 px-4 text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">單字考試</h1>
            <p className="text-xl text-slate-600">此功能即將推出</p>
          </main>
        );
      case 'settings':
        return (
          <main className="relative z-10 py-20 px-4 text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">設定</h1>
            <p className="text-xl text-slate-600">此功能即將推出</p>
          </main>
        );
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu Button */}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-xl font-bold text-slate-800">單字學習平台</h1>
            </div>
            
            {/* Placeholder for future actions */}
            <div className="w-9"></div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">選單</h2>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => navigateTo(item.page)}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 group text-left"
              >
                <Icon className="h-5 w-5 text-slate-500 group-hover:text-amber-500 transition-colors duration-200" />
                <span className="font-medium text-base">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500 text-center">© 2025 單字學習平台</p>
        </div>
      </div>

      {/* Main Content */}
      {renderCurrentPage()}
    </div>
  );
}

export default App;