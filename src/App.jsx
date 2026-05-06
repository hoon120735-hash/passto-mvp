function Landing({ setPage }) {
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState(false);

  const cleanKeyword = keyword.trim();

  const isJapan =
    cleanKeyword.includes("일본") ||
    cleanKeyword.toLowerCase().includes("japan") ||
    cleanKeyword.toLowerCase().includes("tokyo") ||
    cleanKeyword.includes("도쿄");

  const handleSearch = () => {
    if (!cleanKeyword) return;
    setSearched(true);
  };

  return (
    <main className="phone">
      <Header />

      <section className="hero-visual">
        <div className="cloud"></div>
        <Plane className="plane" size={56} />
        <div className="suitcase">🧳</div>
        <div className="passport">PASSTO<br />QR GUIDE</div>
        <div className="qr-box"><QrCode size={48} /></div>
      </section>

      <section className="content">
        <h1>
          나라를 검색하면,<br />
          <span>여행 키트를 추천해드려요.</span>
        </h1>

        <p>
          국가별 규정·준비물·기내 반입 기준을 바탕으로<br />
          PASSTO가 맞춤 여행 키트를 보여드려요.
        </p>

        <div className="search-box">
          <input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setSearched(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="예: 일본, Japan, 도쿄"
          />
          <button onClick={handleSearch}>검색</button>
        </div>

        {!searched && (
          <div className="trust-row">
            <div><ShieldCheck />규정 걱정<br /><b>ZERO</b></div>
            <div><ShoppingBag />필수 준비물<br /><b>자동 추천</b></div>
            <div><Sparkles />검색 시간<br /><b>90% 절약</b></div>
          </div>
        )}

        {searched && isJapan && (
          <div className="search-result-card">
            <div className="result-badge">검색 결과</div>
            <div className="result-image">🇯🇵</div>
            <h3>Japan Edition Full Kit</h3>
            <p>
              일본 여행에 필요한 기내 반입 규정 대응 물품과
              110V 어댑터, 동전지갑, QR 가이드를 함께 구성했어요.
            </p>

            <div className="chip-row">
              <span>110V 어댑터</span>
              <span>100ml 이하 액체</span>
              <span>QR 가이드</span>
            </div>

            <div className="price-line">
              <span>일본 여행 맞춤 키트</span>
              <strong>₩39,800</strong>
            </div>

            <button className="primary-btn" onClick={() => setPage(4)}>
              일본 여행 키트 보기 <ArrowRight size={18} />
            </button>
          </div>
        )}

        {searched && !isJapan && (
          <div className="empty-result-card">
            <div className="result-image">🔍</div>
            <h3>해당 국가 키트는 아직 없습니다</h3>
            <p>
              현재 PASSTO MVP에서는 일본 여행 키트만 제공하고 있어요.
              다른 국가는 추후 업데이트 예정입니다.
            </p>
            <button
              className="secondary-btn"
              onClick={() => {
                setKeyword("일본");
                setSearched(true);
              }}
            >
              일본 키트 보기
            </button>
          </div>
        )}
      </section>

      <BottomNav page={0} setPage={setPage} />
    </main>
    export default function App() {
  const [page, setPage] = useState(0);

  const pages = [
    <Landing setPage={setPage} />,
    <Country setPage={setPage} />,
    <InputPage setPage={setPage} />,
    <Analyze setPage={setPage} />,
    <Recommend setPage={setPage} />,
    <Cart setPage={setPage} />,
    <QRGuide setPage={setPage} />,
    <Complete setPage={setPage} />
  ];

  return <div className="app">{pages[page]}</div>;
}
  );
}
