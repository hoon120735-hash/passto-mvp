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
  CreditCard
} from "lucide-react";

const PRODUCT_PRICE = 39800;
const QR_LINK =
  "https://claude.ai/public/artifacts/c259cd38-f8cb-49c2-bf99-9c378c00d1c8";

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
  const login = () => {
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
          <p>로그인하면 홈 화면으로 이동합니다.</p>

          <input
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input placeholder="비밀번호" type="password" />

          <button className="primary-btn" onClick={login}>
            로그인하기
          </button>
          <button className="secondary-btn" onClick={login}>
            회원가입하고 시작하기
          </button>
          <button className="kakao-btn" onClick={login}>
            카카오로 계속하기
          </button>
        </div>
      </section>
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

      <section className="home-airport-hero">
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

            <p className="home-sub-text">
              현재 MVP에서는 일본 여행 키트를 중심으로 제공합니다.
            </p>

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
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");
  const [question, setQuestion] = useState("");

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

          <button className="primary-btn" onClick={() => setPage("cart")}>
            장바구니 담기 <ShoppingBag size={18} />
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
                  <td colSpan="3">
                    주문 및 결제 완료 후 1~3일 이내 도착 예정입니다.
                  </td>
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

function Checkout({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
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

function Orders({ setPage, isLoggedIn, userId, setIsLoggedIn }) {
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
          <div>
            <strong>결제 상품 : 일본 여행 키트</strong>
            <p>결제 시간 : 2026-05-08 01:45</p>
            <p>결제 금액 : ₩39,800</p>
          </div>
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("passto_user");

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
    setIsLoggedIn
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
