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
  QrCode,
  ShieldCheck,
  Package,
  CreditCard
} from "lucide-react";

const PRODUCT_PRICE = 39800;

function Header({ page, setPage }) {
  return (
    <header className="site-header">
      <button className="logo" onClick={() => setPage("intro")}>
        <Plane size={24} />
        <span>PASSTO</span>
      </button>

      <nav>
        <button onClick={() => setPage("home")}>HOME</button>
        <button onClick={() => setPage("about")}>ABOUT US</button>
        <button onClick={() => setPage("home")}>SHOP</button>
        <button onClick={() => setPage("guide")}>COMMUNITY</button>
      </nav>

      <button className="login-mini" onClick={() => setPage("auth")}>
        <User size={18} />
        LOGIN
      </button>

      <button className="mobile-menu">
        <Menu />
      </button>
    </header>
  );
}

function Intro({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />
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

      <section className="simple-section">
        <h2>여행 준비, 이제 상품처럼 쉽게 고르세요.</h2>
        <div className="feature-grid">
          <div>
            <ShieldCheck />
            <h3>기내 반입 규정 대응</h3>
            <p>100ml 이하 액체류, 지퍼백, 보조배터리 가이드까지 확인</p>
          </div>
          <div>
            <Package />
            <h3>국가별 맞춤 키트</h3>
            <p>일본 여행에 필요한 실사용 준비물을 번들로 구성</p>
          </div>
          <div>
            <QrCode />
            <h3>QR 여행 가이드</h3>
            <p>공항에서 바로 확인 가능한 모바일 체크리스트 제공</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Auth({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />
      <section className="auth-page">
        <div className="auth-card">
          <p className="eyebrow">WELCOME TO PASSTO</p>
          <h2>로그인 / 회원가입</h2>
          <p>
            PASSTO는 MVP 프로토타입입니다.
            <br />
            아래 버튼을 누르면 홈 화면으로 이동합니다.
          </p>

          <input placeholder="이메일" />
          <input placeholder="비밀번호" type="password" />

          <button className="primary-btn" onClick={() => setPage("home")}>
            로그인하기
          </button>
          <button className="secondary-btn" onClick={() => setPage("home")}>
            회원가입하고 시작하기
          </button>
          <button className="kakao-btn" onClick={() => setPage("home")}>
            카카오로 계속하기
          </button>
        </div>
      </section>
    </main>
  );
}

function Home({ setPage }) {
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
      <Header setPage={setPage} />

      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">PASSTO TRAVEL SHOP</p>
          <h1>
            여행할 나라를 검색하면
            <br />
            맞춤 키트를 추천합니다.
          </h1>
          <p>
            현재 MVP에서는 일본 여행 키트를 중심으로
            규정 기반 여행 준비 상품을 제공합니다.
          </p>

          <div className="search-area">
            <Search size={22} />
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
          <p>
            현재 PASSTO MVP에서는 일본 여행 키트만 제공하고 있습니다.
            추후 국가별 키트를 확장할 예정입니다.
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

function Detail({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />

      <section className="detail-page">
        <div className="detail-img">🎒</div>

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

          <div className="detail-box">
            <h3>구성품</h3>
            <ul>
              <li>샴푸 50ml / 바디워시 50ml / 치약 25ml</li>
              <li>ICAO 규격 지퍼백</li>
              <li>110V 일본 어댑터</li>
              <li>동전지갑 / 미니타월 / 접이식 쇼핑백</li>
              <li>QR 여행 가이드</li>
            </ul>
          </div>

          <div className="detail-box">
            <h3>PASSTO가 추천하는 이유</h3>
            <ul>
              <li>기내 반입 가능한 용량만 담았어요.</li>
              <li>일본은 110V 전압을 사용해 어댑터가 필요해요.</li>
              <li>공항에서 바로 확인 가능한 QR 가이드를 제공해요.</li>
            </ul>
          </div>

          <button className="primary-btn" onClick={() => setPage("cart")}>
            장바구니 담기 <ShoppingBag size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Cart({ setPage }) {
  const [qty, setQty] = useState(1);
  const total = PRODUCT_PRICE * qty;

  return (
    <main>
      <Header setPage={setPage} />

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
            <p>
              <span>QR 가이드</span>
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

function Checkout({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />

      <section className="checkout-page">
        <h1>결제</h1>

        <div className="checkout-grid">
          <div className="payment-form">
            <h3>배송 정보</h3>
            <input placeholder="이름" />
            <input placeholder="연락처" />
            <input placeholder="주소" />

            <h3>결제 방법</h3>
            <button className="pay-option">카카오페이</button>
            <button className="pay-option">신용카드</button>
            <button className="pay-option">무통장입금</button>
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
            <hr />
            <p className="total">
              <span>총 결제 금액</span>
              <strong>₩39,800</strong>
            </p>
            <button className="primary-btn" onClick={() => setPage("complete")}>
              결제 완료하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Complete({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />

      <section className="complete-page">
        <CheckCircle size={90} />
        <h1>구매가 완료되었습니다.</h1>
        <p>
          이제 여행 준비는 끝!
          <br />
          QR 가이드와 함께 일본 여행을 준비해보세요.
        </p>

        <button className="primary-btn" onClick={() => setPage("guide")}>
          QR 가이드 보기
        </button>
      </section>

      <Footer />
    </main>
  );
}

function Guide({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />

      <section className="guide-page">
        <p className="eyebrow">QR GUIDE</p>
        <h1>일본 여행 QR 가이드</h1>
        <div className="guide-grid">
          <div>
            <h3>✅ 기내 반입 가능</h3>
            <p>100ml 이하 액체류, 지퍼백 1개</p>
          </div>
          <div>
            <h3>⚠️ 주의</h3>
            <p>보조배터리는 기내 반입 기준 확인</p>
          </div>
          <div>
            <h3>❌ 금지</h3>
            <p>날카로운 물건, 허용되지 않은 액체류</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function About({ setPage }) {
  return (
    <main>
      <Header setPage={setPage} />
      <AboutSection />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <span>HOME</span>
        <span>ABOUT US</span>
        <span>SHOP</span>
        <span>COMMUNITY</span>
      </div>

      <div className="footer-main">
        <div>
          <div className="footer-logo">
            <Plane size={24} />
            PASSTO
          </div>
          <p>
            고객센터 : 02-000-0000 &nbsp;&nbsp;
            운영시간 : 평일 09:00 ~ 18:00
          </p>
          <p>
            상호명 : 패스토 &nbsp;&nbsp; 대표 : 이승훈 &nbsp;&nbsp;
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

  if (page === "intro") return <Intro setPage={setPage} />;
  if (page === "auth") return <Auth setPage={setPage} />;
  if (page === "home") return <Home setPage={setPage} />;
  if (page === "about") return <About setPage={setPage} />;
  if (page === "detail") return <Detail setPage={setPage} />;
  if (page === "cart") return <Cart setPage={setPage} />;
  if (page === "checkout") return <Checkout setPage={setPage} />;
  if (page === "complete") return <Complete setPage={setPage} />;
  if (page === "guide") return <Guide setPage={setPage} />;

  return <Intro setPage={setPage} />;
}
