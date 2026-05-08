import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Plane,
  CreditCard,
  Heart
} from "lucide-react";

const PRODUCT_PRICE = 39800;
const QR_LINK =
  "https://claude.ai/public/artifacts/c259cd38-f8cb-49c2-bf99-9c378c00d1c8";

const HOME_BG_IMAGE = "/images/airport-bg.jpg";

function Header({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  const goProtected = (target) => {
    if (!isLoggedIn) setPage("auth");
    else setPage(target);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setPage("intro");
  };

  return (
    <header className="site-header">
      <button className="logo" onClick={() => goProtected("home")}>
        <Plane size={24} />
        <span>PASSTO</span>
      </button>

      <nav>
        <button onClick={() => goProtected("home")}>HOME</button>
        <button onClick={() => goProtected("vas")}>VAS</button>
        <button onClick={() => goProtected("home")}>SHOP</button>
        <button onClick={() => goProtected("orders")}>ORDERS</button>
      </nav>

      {isLoggedIn ? (
        <div className="login-state">
          <span>{userId}님</span>
          <button onClick={logout}>LOGOUT</button>
        </div>
      ) : (
        <button className="login-mini" onClick={() => setPage("auth")}>
          <User size={18} />
          LOGIN
        </button>
      )}

      <button className="mobile-menu" onClick={() => goProtected("home")}>
        <Menu />
      </button>
    </header>
  );
}

function Intro({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="intro-hero">
        <div className="intro-overlay">
          <p className="eyebrow">COUNTRY-BASED TRAVEL KIT</p>
          <h1>
            검색은 줄이고,
            <br />
            여행은 더 가볍게.
          </h1>
          <p>
            나라별 규정과 준비물을 한 번에 정리해주는
            <br />
            PASSTO 여행 키트 브랜드몰
          </p>
          <button className="primary-btn" onClick={() => setPage("auth")}>
            PASSTO 시작하기 <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Auth({ setPage, setIsLoggedIn, userId, setUserId }) {
  const [password, setPassword] = useState("");

  const login = () => {
    if (!userId.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    setIsLoggedIn(true);
    setPage("home");
  };

  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={false}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="auth-page">
        <div className="auth-card">
          <p className="eyebrow">WELCOME TO PASSTO</p>
          <h2>로그인 / 회원가입</h2>
          <p>아이디와 비밀번호를 입력하면 홈 화면으로 이동합니다.</p>

          <input
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="primary-btn" onClick={login}>
            로그인하기
          </button>
          <button className="secondary-btn" onClick={login}>
            회원가입하고 시작하기
          </button>

          <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
            <button
              onClick={() => setPage("naverAuth")}
              style={{
                width: "100%",
                height: "52px",
                border: "none",
                borderRadius: "4px",
                background: "#03c75a",
                color: "white",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              N &nbsp;&nbsp; 네이버 로그인
            </button>

            <button
              onClick={() => setPage("kakaoAuth")}
              style={{
                width: "100%",
                height: "52px",
                border: "none",
                borderRadius: "4px",
                background: "#fee500",
                color: "#191919",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              ● &nbsp;&nbsp; 카카오 로그인
            </button>

            <button
              onClick={() => setPage("googleAuth")}
              style={{
                width: "100%",
                height: "52px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                background: "white",
                color: "#222",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              G &nbsp;&nbsp; Google 로그인
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function NaverAuth({ setPage, setIsLoggedIn, setUserId }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const login = () => {
    if (!id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (!pw.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    setUserId(id);
    setIsLoggedIn(true);
    setPage("home");
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f5f6f7", padding: "40px 20px" }}>
      <div style={{ maxWidth: "420px", margin: "0 auto", textAlign: "center" }}>
        <button
          onClick={() => setPage("auth")}
          style={{
            float: "left",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          ← 뒤로
        </button>

        <h1 style={{ color: "#03c75a", fontSize: "44px", margin: "60px 0 30px" }}>
          NAVER
        </h1>

        <div
          style={{
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            textAlign: "left"
          }}
        >
          <div style={{ display: "flex", borderBottom: "1px solid #eee" }}>
            <button style={{ flex: 1, padding: "14px", border: "none", background: "white" }}>
              ID 로그인
            </button>
            <button style={{ flex: 1, padding: "14px", border: "none", background: "#fafafa" }}>
              일회용 번호
            </button>
            <button style={{ flex: 1, padding: "14px", border: "none", background: "#fafafa" }}>
              QR코드
            </button>
          </div>

          <div style={{ padding: "24px" }}>
            <p style={{ fontSize: "13px", color: "#555", textAlign: "center", lineHeight: 1.6 }}>
              네이버에 로그인하여 PASSTO 서비스를 이용하실 수 있습니다.
            </p>

            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디"
              style={{
                width: "100%",
                height: "48px",
                border: "1px solid #03c75a",
                padding: "0 14px",
                fontSize: "15px",
                boxSizing: "border-box",
                marginTop: "16px"
              }}
            />
            <input
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호"
              type="password"
              style={{
                width: "100%",
                height: "48px",
                border: "1px solid #ddd",
                padding: "0 14px",
                fontSize: "15px",
                boxSizing: "border-box"
              }}
            />

            <div style={{ fontSize: "13px", color: "#777", margin: "12px 0" }}>
              ⭕ 로그인 상태 유지
            </div>

            <button
              onClick={login}
              style={{
                width: "100%",
                height: "52px",
                border: "none",
                borderRadius: "6px",
                background: "#03c75a",
                color: "white",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              로그인
            </button>
          </div>
        </div>

        <div style={{ marginTop: "18px", fontSize: "13px", color: "#777" }}>
          비밀번호 찾기 &nbsp; | &nbsp; 아이디 찾기 &nbsp; | &nbsp; 회원가입
        </div>
      </div>
    </main>
  );
}

function KakaoAuth({ setPage, setIsLoggedIn, setUserId }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const login = () => {
    if (!id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (!pw.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    setUserId(id);
    setIsLoggedIn(true);
    setPage("home");
  };

  return (
    <main style={{ minHeight: "100vh", background: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <button
          onClick={() => setPage("auth")}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "40px"
          }}
        >
          ← 뒤로
        </button>

        <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "400", marginBottom: "40px" }}>
          kakao
        </h1>

        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="카카오메일 아이디, 이메일, 전화번호"
          style={{
            width: "100%",
            height: "54px",
            border: "none",
            borderBottom: "1px solid #ddd",
            fontSize: "16px",
            boxSizing: "border-box",
            outline: "none"
          }}
        />
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호"
          type="password"
          style={{
            width: "100%",
            height: "54px",
            border: "none",
            borderBottom: "1px solid #ddd",
            fontSize: "16px",
            boxSizing: "border-box",
            outline: "none"
          }}
        />

        <div style={{ margin: "20px 0", color: "#333", fontSize: "14px" }}>
          ⭕ 로그인 상태 유지
        </div>

        <button
          onClick={login}
          style={{
            width: "100%",
            height: "52px",
            border: "none",
            borderRadius: "4px",
            background: "#fee500",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          로그인
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "22px 0" }}>
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid #eee" }} />
          <span style={{ color: "#aaa", fontSize: "13px" }}>또는</span>
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid #eee" }} />
        </div>

        <button
          style={{
            width: "100%",
            height: "52px",
            border: "none",
            borderRadius: "4px",
            background: "#f5f5f5",
            fontSize: "16px"
          }}
        >
          ▦ &nbsp; QR코드 로그인
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "28px",
            fontSize: "13px",
            color: "#555"
          }}
        >
          <span>회원가입</span>
          <span>카카오계정 &nbsp; | &nbsp; 비밀번호 찾기</span>
        </div>
      </div>
    </main>
  );
}

function GoogleAuth({ setPage, setIsLoggedIn, setUserId }) {
  const [email, setEmail] = useState("");

  const login = () => {
    if (!email.trim()) {
      alert("이메일 또는 아이디를 입력해주세요.");
      return;
    }

    setUserId(email);
    setIsLoggedIn(true);
    setPage("home");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef5fb",
        padding: "90px 40px",
        boxSizing: "border-box"
      }}
    >
      <button
        onClick={() => setPage("auth")}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "14px",
          marginBottom: "30px"
        }}
      >
        ← 뒤로
      </button>

      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          background: "white",
          borderRadius: "28px",
          padding: "46px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px"
        }}
      >
        <div>
          <div style={{ fontSize: "44px", fontWeight: "700", marginBottom: "34px" }}>
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "#fbbc05" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
          </div>

          <h1 style={{ fontSize: "46px", fontWeight: "400", margin: "0 0 18px" }}>
            Sign in
          </h1>
          <p style={{ fontSize: "18px" }}>Use your Google Account</p>
        </div>

        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or phone"
            style={{
              width: "100%",
              height: "58px",
              border: "1px solid #777",
              borderRadius: "4px",
              padding: "0 16px",
              fontSize: "17px",
              boxSizing: "border-box",
              marginTop: "68px"
            }}
          />

          <p style={{ color: "#0b57d0", fontWeight: "600", marginTop: "12px" }}>
            Forgot email?
          </p>

          <p style={{ color: "#555", lineHeight: 1.6, marginTop: "46px" }}>
            Not your computer? Use Guest mode to sign in privately.
            <span style={{ color: "#0b57d0", fontWeight: "600" }}> Learn more</span>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "28px",
              marginTop: "46px"
            }}
          >
            <button
              style={{
                border: "none",
                background: "white",
                color: "#0b57d0",
                fontWeight: "700",
                fontSize: "15px"
              }}
            >
              Create account
            </button>
            <button
              onClick={login}
              style={{
                width: "92px",
                height: "46px",
                border: "none",
                borderRadius: "24px",
                background: "#0b57d0",
                color: "white",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Home({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState(false);

  const value = keyword.trim().toLowerCase();

  const isJapan =
    value.includes("일본") ||
    value.includes("japan") ||
    value.includes("tokyo") ||
    value.includes("도쿄");

  const handleSearch = () => {
    if (!value) return;
    setSearched(true);
  };

  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section
        className="home-airport-hero"
        style={{
          backgroundImage: `url(${HOME_BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="home-airport-overlay">
          <div className="home-airport-copy">
            <p className="home-user-text">
              {userId}님, 여행 준비를 시작해볼까요?
            </p>

            <h1>
              여행할 나라를 검색하면
              <br />
              맞춤 키트를 추천합니다.
            </h1>

            <div className="airport-search-area">
              <Search size={26} />
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
          </div>
        </div>
      </section>

      {searched && isJapan && (
        <section className="result-section">
          <p className="eyebrow">SEARCH RESULT</p>
          <h2>일본 여행 키트를 찾았어요.</h2>

          <div className="product-result">
            <div className="product-image">🎒</div>
            <div className="product-info">
              <p className="badge">Japan Edition</p>
              <h3>일본 여행 키트</h3>
              <p>
                기내 반입 규정 대응 물품과 일본 실사용 아이템,
                QR 여행 가이드를 함께 구성한 PASSTO 대표 키트입니다.
              </p>
              <div className="tag-row">
                <span>110V 어댑터</span>
                <span>100ml 이하 액체</span>
                <span>QR 가이드</span>
              </div>
              <div className="price">
                <strong>₩39,800</strong>
                <del>₩52,700</del>
              </div>
              <button className="primary-btn" onClick={() => setPage("detail")}>
                상품 상세 보기 <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {searched && !isJapan && (
        <section className="empty-section">
          <h2>해당 국가 키트는 아직 없습니다.</h2>
          <p>현재 PASSTO MVP에서는 일본 여행 키트만 제공하고 있습니다.</p>
          <button
            className="secondary-btn"
            onClick={() => {
              setKeyword("일본");
              setSearched(true);
            }}
          >
            일본 키트 보기
          </button>
        </section>
      )}

      <BestItem setPage={setPage} />
      <AboutSection />
      <Footer />
    </main>
  );
}

function BestItem({ setPage }) {
  return (
    <section className="best-section">
      <p className="eyebrow">BEST ITEM</p>
      <h2>가장 먼저 준비해야 할 일본 여행 키트</h2>

      <div className="best-card" onClick={() => setPage("detail")}>
        <div className="best-img">🧴 🛂 🔌</div>
        <h3>일본 여행 키트</h3>
        <div className="price center-price">
          <strong>₩39,800</strong>
          <del>₩52,700</del>
        </div>
        <p>기내 반입 대응 + 일본 실사용 패키지</p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <p className="eyebrow">ABOUT PASSTO</p>
      <h2>단순 쇼핑몰이 아니라, 여행 준비 불안을 줄이는 플랫폼</h2>

      <div className="about-grid">
        <div>
          <h3>Before</h3>
          <p>블로그 검색, 규정 비교, 공항 압수 걱정, 준비물 누락</p>
        </div>
        <div>
          <h3>After</h3>
          <p>국가별 키트 추천, 기내 반입 가이드, QR 체크리스트 제공</p>
        </div>
      </div>
    </section>
  );
}

function Detail({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  const [tab, setTab] = useState("detail");
  const [liked, setLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");
  const [question, setQuestion] = useState("");

  const productImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg"
  ];

  const [reviews, setReviews] = useState([
    { rating: "5", text: "일본 처음 가는데 준비물이 한 번에 정리돼서 좋았어요." },
    { rating: "4", text: "QR 가이드가 있어서 공항에서 확인하기 편했습니다." }
  ]);

  const [questions, setQuestions] = useState([
    {
      q: "기내용 캐리어만 가져가도 괜찮나요?",
      a: "네, 기내 반입 가능한 용량 중심으로 구성되어 있습니다."
    }
  ]);

  const submitReview = () => {
    if (!review.trim()) return;
    setReviews([{ rating, text: review }, ...reviews]);
    setReview("");
    setRating("5");
  };

  const submitQuestion = () => {
    if (!question.trim()) return;
    setQuestions([{ q: question, a: "답변 대기 중입니다." }, ...questions]);
    setQuestion("");
  };

  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="detail-page">
        <div style={{ width: "100%", maxWidth: "640px" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              background: "#f3f3f3",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative"
            }}
          >
            <img
              src={productImages[currentImage]}
              alt="상품 이미지"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.style.display = "flex";
                e.currentTarget.parentElement.style.alignItems = "center";
                e.currentTarget.parentElement.style.justifyContent = "center";
                e.currentTarget.parentElement.style.fontSize = "80px";
                e.currentTarget.parentElement.textContent = "🎒";
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

            <div
              style={{
                position: "absolute",
                right: "16px",
                bottom: "16px",
                background: "rgba(0,0,0,0.45)",
                color: "white",
                padding: "6px 12px",
                borderRadius: "999px",
                fontSize: "14px"
              }}
            >
              {currentImage + 1}/{productImages.length}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "18px"
            }}
          >
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? productImages.length - 1 : prev - 1
                )
              }
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                border: "2px solid #111",
                background: "white",
                fontSize: "28px",
                cursor: "pointer"
              }}
            >
              ‹
            </button>

            <div style={{ display: "flex", gap: "10px" }}>
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: currentImage === index ? "3px solid #111" : "1px solid #ddd",
                    padding: 0,
                    background: "#f3f3f3",
                    cursor: "pointer",
                    opacity: currentImage === index ? 1 : 0.5
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.textContent = "🎒";
                      e.currentTarget.parentElement.style.fontSize = "24px";
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === productImages.length - 1 ? 0 : prev + 1
                )
              }
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                border: "2px solid #111",
                background: "white",
                fontSize: "28px",
                cursor: "pointer"
              }}
            >
              ›
            </button>
          </div>
        </div>

        <div className="detail-info">
          <p className="badge">Japan Edition</p>
          <h1>일본 여행 키트</h1>
          <p>
            일본 여행 준비에 필요한 기내 반입 가능 구성품,
            110V 어댑터, 동전지갑, QR 가이드를 한 번에 담았습니다.
          </p>

          <div className="price">
            <strong>₩39,800</strong>
            <del>₩52,700</del>
          </div>

          <button className="primary-btn" onClick={() => setPage("cart")}>
            장바구니 담기 <ShoppingBag size={18} />
          </button>

          <button
            onClick={() => setLiked(!liked)}
            style={{
              width: "100%",
              height: "72px",
              borderRadius: "22px",
              border: liked ? "4px solid #111" : "2px solid #d9d9d9",
              background: "white",
              marginTop: "18px",
              fontSize: "24px",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              transition: "0.25s",
              transform: liked ? "scale(1.02)" : "scale(1)"
            }}
          >
            <Heart
              size={34}
              color={liked ? "#e4573d" : "black"}
              fill={liked ? "#e4573d" : "transparent"}
              strokeWidth={2.5}
            />
            {liked ? "찜 완료" : "찜하기"}
          </button>
        </div>
      </section>

      <section className="product-tabs-wrap">
        <div className="product-tabs">
          <button className={tab === "detail" ? "active" : ""} onClick={() => setTab("detail")}>
            상품상세
          </button>
          <button className={tab === "review" ? "active" : ""} onClick={() => setTab("review")}>
            상품평 ({reviews.length})
          </button>
          <button className={tab === "qna" ? "active" : ""} onClick={() => setTab("qna")}>
            상품문의
          </button>
          <button
            className={tab === "delivery" ? "active" : ""}
            onClick={() => setTab("delivery")}
          >
            배송/교환/반품 안내
          </button>
        </div>

        {tab === "detail" && (
          <div className="tab-content">
            <h2>필수 표기 정보</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>상품명</th>
                  <td>일본 여행 키트 Japan Edition</td>
                  <th>제품 주요 사항</th>
                  <td>기내 반입 규정 대응 + 일본 실사용 패키지</td>
                </tr>
                <tr>
                  <th>구성품</th>
                  <td>
                    샴푸 50ml, 바디워시 50ml, 치약 25ml, 지퍼백,
                    110V 어댑터, 동전지갑, QR 가이드
                  </td>
                  <th>사용방법</th>
                  <td>QR 가이드를 통해 기내 반입 가능 여부와 체크리스트를 확인하세요.</td>
                </tr>
                <tr>
                  <th>제조국</th>
                  <td>대한민국 / 일부 구성품 OEM</td>
                  <th>주의사항</th>
                  <td>항공사 및 국가별 규정은 변경될 수 있으므로 출국 전 확인을 권장합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === "review" && (
          <div className="tab-content">
            <h2>상품평</h2>

            <div className="write-box">
              <label>평점</label>
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="5">★★★★★ 5점</option>
                <option value="4">★★★★☆ 4점</option>
                <option value="3">★★★☆☆ 3점</option>
                <option value="2">★★☆☆☆ 2점</option>
                <option value="1">★☆☆☆☆ 1점</option>
              </select>

              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="제품 리뷰를 작성해주세요."
              />

              <button className="primary-btn" onClick={submitReview}>
                리뷰 등록
              </button>
            </div>

            <div className="review-list">
              {reviews.map((item, index) => (
                <div key={index}>
                  <strong>
                    {"★".repeat(Number(item.rating))}
                    {"☆".repeat(5 - Number(item.rating))}
                  </strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "qna" && (
          <div className="tab-content">
            <h2>상품문의</h2>

            <div className="write-box">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="상품에 대해 궁금한 점을 작성해주세요."
              />
              <button className="primary-btn" onClick={submitQuestion}>
                문의 등록
              </button>
            </div>

            <div className="review-list">
              {questions.map((item, index) => (
                <div key={index}>
                  <strong>Q. {item.q}</strong>
                  <p>A. {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "delivery" && (
          <div className="tab-content">
            <h2>배송정보</h2>

            <table className="info-table">
              <tbody>
                <tr>
                  <th>배송방법</th>
                  <td>순차배송</td>
                  <th>배송비</th>
                  <td>무료배송 / 도서산간 지역 추가비용 없음</td>
                </tr>
                <tr>
                  <th>배송기간</th>
                  <td colSpan="3">주문 및 결제 완료 후 1~3일 이내 도착 예정입니다.</td>
                </tr>
              </tbody>
            </table>

            <h2>교환/반품 안내</h2>

            <table className="info-table">
              <tbody>
                <tr>
                  <th>교환/반품 비용</th>
                  <td>단순 변심의 경우 왕복 배송비가 발생할 수 있습니다.</td>
                </tr>
                <tr>
                  <th>신청 기준일</th>
                  <td>제품 수령 후 7일 이내 신청 가능합니다.</td>
                </tr>
                <tr>
                  <th>제한사항</th>
                  <td>상품 개봉, 구성품 분실, 사용 흔적이 있는 경우 제한될 수 있습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

function Cart({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  const [qty, setQty] = useState(1);
  const total = PRODUCT_PRICE * qty;

  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="cart-page">
        <h1>장바구니</h1>

        <div className="cart-layout">
          <div className="cart-item">
            <div className="cart-img">🎒</div>
            <div>
              <h3>일본 여행 키트</h3>
              <p>기내용 규정 대응 + 일본 실사용 패키지</p>
              <strong>₩39,800</strong>
            </div>

            <div className="qty-box">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>
                <Minus size={16} />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="order-box">
            <h3>주문 요약</h3>
            <p>
              <span>상품 금액</span>
              <strong>₩{total.toLocaleString()}</strong>
            </p>
            <p>
              <span>배송비</span>
              <strong>무료</strong>
            </p>
            <hr />
            <p className="total">
              <span>결제 예정 금액</span>
              <strong>₩{total.toLocaleString()}</strong>
            </p>

            <button className="primary-btn" onClick={() => setPage("checkout")}>
              결제하기 <CreditCard size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Checkout({ setPage, isLoggedIn, userId, setIsLoggedIn, setOrderHistory }) {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const createOrderNumber = () => {
    return "PASSTO-" + Math.floor(10000000 + Math.random() * 90000000);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const completePayment = () => {
    if (
      !deliveryInfo.name.trim() ||
      !deliveryInfo.phone.trim() ||
      !deliveryInfo.address.trim()
    ) {
      alert("배송 정보를 모두 입력해주세요.");
      return;
    }

    if (!paymentMethod) {
      alert("결제 방법을 선택해주세요.");
      return;
    }

    const newOrder = {
      productName: "일본 여행 키트",
      paymentTime: getCurrentTime(),
      paymentAmount: "₩39,800",
      paymentMethod,
      orderNumber: createOrderNumber()
    };

    setOrderHistory((prev) => [newOrder, ...prev]);
    setPage("complete");
  };

  const paymentOptions = ["카카오페이", "신용카드", "무통장입금"];

  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="checkout-page">
        <h1>결제</h1>

        <div className="checkout-grid">
          <div className="payment-form">
            <h3>배송 정보</h3>

            <input
              placeholder="이름"
              value={deliveryInfo.name}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, name: e.target.value })
              }
            />

            <input
              placeholder="연락처"
              value={deliveryInfo.phone}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })
              }
            />

            <input
              placeholder="주소"
              value={deliveryInfo.address}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
              }
            />

            <h3>결제 방법</h3>

            {paymentOptions.map((method) => (
              <button
                key={method}
                className="pay-option"
                onClick={() => setPaymentMethod(method)}
                style={{
                  border: paymentMethod === method ? "2px solid #111" : "1px solid #ddd",
                  background: paymentMethod === method ? "#fff7e6" : "white",
                  fontWeight: paymentMethod === method ? "700" : "400",
                  transform: paymentMethod === method ? "scale(1.02)" : "scale(1)",
                  transition: "0.2s"
                }}
              >
                {method}
                {paymentMethod === method && " ✓"}
              </button>
            ))}
          </div>

          <div className="order-box">
            <h3>최종 주문</h3>
            <p>
              <span>일본 여행 키트</span>
              <strong>₩39,800</strong>
            </p>
            <p>
              <span>배송비</span>
              <strong>무료</strong>
            </p>
            <p>
              <span>결제 방법</span>
              <strong>{paymentMethod || "미선택"}</strong>
            </p>
            <hr />
            <p className="total">
              <span>총 결제 금액</span>
              <strong>₩39,800</strong>
            </p>
            <button className="primary-btn" onClick={completePayment}>
              결제 완료하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Complete({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="complete-page">
        <CheckCircle size={90} />
        <h1>구매가 완료되었습니다.</h1>
        <p>
          이제 여행 준비는 끝!
          <br />
          QR 가이드와 함께 일본 여행을 준비해보세요.
        </p>

        <a
          href={QR_LINK}
          target="_blank"
          rel="noreferrer"
          className="primary-btn external-link-btn"
        >
          QR 가이드 보기
        </a>
      </section>

      <Footer />
    </main>
  );
}

function Vas({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="guide-page">
        <p className="eyebrow">VAS</p>
        <h1>Travel Value Added Service</h1>
        <p>
          PASSTO는 여행 키트 구매 이후에도 QR 가이드와 항공 규정 정보를
          함께 제공합니다.
        </p>

        <div className="guide-grid">
          <a href={QR_LINK} target="_blank" rel="noreferrer">
            <h3>QR 코드 가이드</h3>
            <p>여행 준비 체크리스트와 키트 사용 정보를 확인할 수 있습니다.</p>
          </a>

          <a
            href="https://www.airport.kr/ap_ko/906/subview.do"
            target="_blank"
            rel="noreferrer"
          >
            <h3>인천공항 제한 물품 안내</h3>
            <p>기내 반입 및 위탁 수하물 제한 물품을 확인할 수 있습니다.</p>
          </a>

          <div>
            <h3>PASSTO 안내</h3>
            <p>국가별 여행 키트와 규정 기반 준비 서비스를 확장할 예정입니다.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Orders({ setPage, isLoggedIn, userId, setIsLoggedIn, orderHistory }) {
  return (
    <main>
      <Header
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="guide-page">
        <p className="eyebrow">ORDER HISTORY</p>
        <h1>결제 내역 확인</h1>

        <div className="review-list">
          {orderHistory.length === 0 ? (
            <div>
              <strong>아직 결제 내역이 없습니다.</strong>
              <p>상품을 결제하면 이곳에 주문 내역이 표시됩니다.</p>
            </div>
          ) : (
            orderHistory.map((order, index) => (
              <div key={index}>
                <strong>결제 상품 : {order.productName}</strong>
                <p>주문 번호 : {order.orderNumber}</p>
                <p>결제 시간 : {order.paymentTime}</p>
                <p>결제 금액 : {order.paymentAmount}</p>
                <p>결제 방법 : {order.paymentMethod}</p>
              </div>
            ))
          )}
        </div>

        <div className="delivery-status-box">
          <h2>배송 진행 상태</h2>
          <div className="delivery-placeholder">배송 상태 이미지 영역</div>
          <p>
            나중에 이미지 업로드 시
            <br />
            배송 현황 이미지가 표시됩니다.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <span>HOME</span>
        <span>VAS</span>
        <span>SHOP</span>
        <span>ORDERS</span>
      </div>

      <div className="footer-main">
        <div>
          <div className="footer-logo">
            <Plane size={24} />
            PASSTO
          </div>
          <p>고객센터 : 02-000-0000 &nbsp;&nbsp; 운영시간 : 평일 09:00 ~ 18:00</p>
          <p>
            상호명 : 패스토 &nbsp;&nbsp; 대표 : 코룡이 &nbsp;&nbsp;
            사업자등록번호 : 123-45-67890
          </p>
          <p>주소 : 충청남도 천안시</p>
          <p>© 2026 PASSTO. All rights reserved.</p>
        </div>

        <div className="socials">
          <span>◎</span>
          <span>f</span>
          <span>▶</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("intro");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("passto_user");
  const [orderHistory, setOrderHistory] = useState([]);

  if (page === "intro") {
    return (
      <Intro
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        userId={userId}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  if (page === "auth") {
    return (
      <Auth
        setPage={setPage}
        setIsLoggedIn={setIsLoggedIn}
        userId={userId}
        setUserId={setUserId}
      />
    );
  }

  if (page === "naverAuth") {
    return (
      <NaverAuth
        setPage={setPage}
        setIsLoggedIn={setIsLoggedIn}
        setUserId={setUserId}
      />
    );
  }

  if (page === "kakaoAuth") {
    return (
      <KakaoAuth
        setPage={setPage}
        setIsLoggedIn={setIsLoggedIn}
        setUserId={setUserId}
      />
    );
  }

  if (page === "googleAuth") {
    return (
      <GoogleAuth
        setPage={setPage}
        setIsLoggedIn={setIsLoggedIn}
        setUserId={setUserId}
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <Auth
        setPage={setPage}
        setIsLoggedIn={setIsLoggedIn}
        userId={userId}
        setUserId={setUserId}
      />
    );
  }

  const commonProps = {
    setPage,
    isLoggedIn,
    userId,
    setIsLoggedIn,
    orderHistory,
    setOrderHistory
  };

  if (page === "home") return <Home {...commonProps} />;
  if (page === "vas") return <Vas {...commonProps} />;
  if (page === "detail") return <Detail {...commonProps} />;
  if (page === "cart") return <Cart {...commonProps} />;
  if (page === "checkout") return <Checkout {...commonProps} />;
  if (page === "complete") return <Complete {...commonProps} />;
  if (page === "orders") return <Orders {...commonProps} />;

  return <Home {...commonProps} />;
}
