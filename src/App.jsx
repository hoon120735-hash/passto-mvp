import React, { useState } from "react";
import {
  Home,
  Globe2,
  ClipboardList,
  Sparkles,
  ShoppingBag,
  CheckCircle,
  Plane,
  Menu,
  ArrowRight,
  ChevronLeft,
  Plus,
  Minus,
  QrCode,
  ShieldCheck,
  AlertTriangle,
  XCircle
} from "lucide-react";

const countries = [
  {
    name: "일본",
    emoji: "🇯🇵",
    image: "🗻",
    desc: ["동전 사용이 많아요", "110V 어댑터 필요", "기내 액체 규정 주의"],
    tags: ["110V", "동전", "온천타월"]
  },
  {
    name: "싱가포르",
    emoji: "🇸🇬",
    image: "🏙️",
    desc: ["엄격한 반입 규정", "벌금 주의", "더운 날씨 대비"],
    tags: ["선크림", "벌금주의", "반입제한"]
  },
  {
    name: "호주",
    emoji: "🇦🇺",
    image: "🎭",
    desc: ["자연 보호 규정", "의약품 반입 주의", "자외선 강함"],
    tags: ["선크림", "상비약", "UV케어"]
  },
  {
    name: "태국",
    emoji: "🇹🇭",
    image: "🛕",
    desc: ["더운 날씨 주의", "전자담배 반입 금지", "벌금 규정 주의"],
    tags: ["모기기피제", "쿨팩", "물티슈"]
  }
];

const zones = [
  {
    title: "Zone 1",
    name: "기내 반입 OK",
    desc: "보안 검색 걱정 없이 가볍게 통과!",
    items: "샴푸 50ml · 바디워시 50ml · 치약 25ml · 지퍼백",
    color: "blue"
  },
  {
    title: "Zone 2",
    name: "일본 필수 아이템",
    desc: "일본에서 더 편하게, 더 유용하게!",
    items: "110V 어댑터 · 동전지갑 · 미니타월 · 접이식 쇼핑백",
    color: "yellow"
  },
  {
    title: "Zone 3",
    name: "안심 QR 가이드",
    desc: "여행 불안 ZERO! QR로 바로 확인",
    items: "기내 반입 가이드 · 금지품목 · 체크리스트",
    color: "cream"
  }
];

function BottomNav({ page, setPage }) {
  const nav = [
    [0, "홈", Home],
    [1, "국가", Globe2],
    [2, "입력", ClipboardList],
    [4, "추천", Sparkles],
    [5, "결제", ShoppingBag]
  ];

  return (
    <div className="bottom-nav">
      {nav.map(([id, label, Icon]) => (
        <button
          key={label}
          className={page === id ? "nav-active" : ""}
          onClick={() => setPage(id)}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

function Header({ title, back, setPage }) {
  return (
    <div className="header">
      {back ? (
        <button className="icon-btn" onClick={() => setPage(back)}>
          <ChevronLeft size={22} />
        </button>
      ) : (
        <strong className="logo">PASSTO</strong>
      )}
      {title && <strong>{title}</strong>}
      <button className="icon-btn">
        <Menu size={20} />
      </button>
    </div>
  );
}

function Landing({ setPage }) {
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
          검색은 줄이고,<br />
          <span>여행은 더 가볍게.</span>
        </h1>
        <p>
          나라별 규정·준비물·기내 반입까지<br />
          PASSTO가 한 번에 정리해드려요.
        </p>

        <div className="trust-row">
          <div><ShieldCheck />규정 걱정<br /><b>ZERO</b></div>
          <div><ShoppingBag />필수 준비물<br /><b>자동 추천</b></div>
          <div><Sparkles />검색 시간<br /><b>90% 절약</b></div>
        </div>

        <button className="primary-btn" onClick={() => setPage(1)}>
          내 여행 준비 시작하기 <ArrowRight size={18} />
        </button>
        <button className="secondary-btn" onClick={() => setPage(4)}>
          일본 여행 키트 먼저 보기
        </button>
      </section>
      <BottomNav page={0} setPage={setPage} />
    </main>
  );
}

function Country({ setPage }) {
  return (
    <main className="phone">
      <Header back={0} setPage={setPage} />
      <section className="content">
        <h2>어디로 여행가시나요?</h2>
        <p>국가별 규정과 필수 준비물을 맞춤 추천해드려요.</p>

        <div className="country-grid">
          {countries.map((c, i) => (
            <button
              key={c.name}
              className={`country-card ${i === 0 ? "selected" : ""}`}
              onClick={() => setPage(2)}
            >
              <div className="country-top">
                <strong>{c.emoji} {c.name}</strong>
                <span>{c.image}</span>
              </div>
              <ul>
                {c.desc.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <div className="chip-row">
                {c.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </button>
          ))}
        </div>
      </section>
      <BottomNav page={1} setPage={setPage} />
    </main>
  );
}

function InputPage({ setPage }) {
  return (
    <main className="phone">
      <Header back={1} setPage={setPage} />
      <section className="content">
        <h2>여행 정보를 알려주세요</h2>
        <p>맞춤 추천을 위해 몇 가지만 여쭤볼게요 😊</p>

        <div className="form-card">
          <label>어디로 여행 가시나요?</label>
          <button>🇯🇵 일본</button>

          <label>얼마 동안 머무르시나요?</label>
          <button>3박 4일</button>

          <label>수하물은 어떻게 가져가시나요?</label>
          <div className="choice-row">
            <button className="choice-active">기내용만</button>
            <button>위탁 포함</button>
          </div>

          <label>누구와 여행하시나요?</label>
          <div className="choice-row">
            <button>혼자</button>
            <button className="choice-active">친구</button>
            <button>가족</button>
          </div>

          <label>여행 시기는 언제인가요?</label>
          <button>봄 · 3~5월</button>
        </div>

        <button className="primary-btn" onClick={() => setPage(3)}>
          분석 시작하기 <ArrowRight size={18} />
        </button>
      </section>
      <BottomNav page={2} setPage={setPage} />
    </main>
  );
}

function Analyze({ setPage }) {
  return (
    <main className="phone analyze">
      <section className="analyze-box">
        <div className="cloud"></div>
        <Plane className="fly" size={64} />
        <h2>당신의 여행 준비를<br />분석 중이에요...</h2>
        <div className="circle">86%</div>
        <ul className="check-list">
          <li>기내 반입 규정 확인 중</li>
          <li>일본 필수 준비물 분석 중</li>
          <li>친구 여행 패턴 확인 중</li>
          <li>맞춤 여행 키트 구성 중...</li>
        </ul>
        <button className="primary-btn" onClick={() => setPage(4)}>
          결과 보기
        </button>
      </section>
    </main>
  );
}

function Recommend({ setPage }) {
  return (
    <main className="phone">
      <Header back={2} setPage={setPage} />
      <section className="content">
        <h2>당신을 위한 일본 여행 키트</h2>
        <p>규정 걱정 없이, 여행만 즐기세요!</p>

        <div className="reason-card">
          <strong>PASSTO가 선택한 이유</strong>
          <ul>
            <li>기내 반입 가능한 용량만 담았어요.</li>
            <li>일본 여행에서 꼭 필요한 아이템이에요.</li>
            <li>검색할 필요 없이 모두 준비했어요.</li>
            <li>안심하고 여행에 집중하세요!</li>
          </ul>
        </div>

        {zones.map((z) => (
          <div key={z.title} className={`zone-card ${z.color}`}>
            <small>{z.title}</small>
            <h3>{z.name}</h3>
            <p>{z.desc}</p>
            <span>{z.items}</span>
          </div>
        ))}

        <div className="price-line">
          <span>총 20개 아이템</span>
          <strong>₩39,800</strong>
        </div>

        <button className="primary-btn" onClick={() => setPage(5)}>
          장바구니 담기
        </button>
      </section>
      <BottomNav page={4} setPage={setPage} />
    </main>
  );
}

function Cart({ setPage }) {
  return (
    <main className="phone">
      <Header back={4} setPage={setPage} />
      <section className="content">
        <h2>장바구니와 결제</h2>
        <p>자사몰 MVP 검증을 위해 번들 선택, 장바구니, 결제 흐름을 한 화면에 요약했습니다.</p>

        <div className="cart-card">
          <div className="thumb">🎒</div>
          <div>
            <strong>Japan Edition Full Kit</strong>
            <p>기내용 규정 대응 + 일본 실사용 패키지</p>
            <b>₩39,800</b>
          </div>
          <div className="qty"><Minus size={14} />1<Plus size={14} /></div>
        </div>

        <div className="cart-card">
          <div className="thumb">♨️</div>
          <div>
            <strong>Onsen & Convenience Set</strong>
            <p>추가 옵션 묶음</p>
            <b>₩12,900</b>
          </div>
          <div className="qty"><Minus size={14} />1<Plus size={14} /></div>
        </div>

        <div className="summary">
          <p><span>상품 금액</span><b>₩52,700</b></p>
          <p><span>배송비</span><b>₩0</b></p>
          <p><span>QR 가이드</span><b>무료</b></p>
          <hr />
          <p className="total"><span>예상 결제 금액</span><b>₩52,700</b></p>
        </div>

        <div className="qr-included">
          <QrCode />
          <div>
            <strong>QR 가이드 포함</strong>
            <p>기내 반입 가이드, 일본 입국 팁, 체크리스트까지 모두 드려요!</p>
          </div>
        </div>

        <button className="primary-btn" onClick={() => setPage(6)}>
          결제하기 ₩52,700
        </button>
      </section>
      <BottomNav page={5} setPage={setPage} />
    </main>
  );
}

function QRGuide({ setPage }) {
  return (
    <main className="phone">
      <Header title="여행 QR 가이드" back={5} setPage={setPage} />
      <section className="content">
        <div className="tab-row">
          <button className="tab-active">기내 반입</button>
          <button>위탁 수하물</button>
          <button>입국 팁</button>
          <button>체크리스트</button>
        </div>

        <h3>기내 반입 한눈에 보기</h3>
        <div className="guide-grid">
          <div className="guide ok">
            <ShieldCheck />
            <strong>가능</strong>
            <p>100ml 이하 액체류</p>
          </div>
          <div className="guide warn">
            <AlertTriangle />
            <strong>주의</strong>
            <p>보조배터리</p>
          </div>
          <div className="guide no">
            <XCircle />
            <strong>금지</strong>
            <p>날카로운 물건</p>
          </div>
        </div>

        <div className="list-card">
          <p>액체류 규정 <span>100ml 이하, 1L 지퍼백 1개까지</span></p>
          <p>보조배터리 규정 <span>100Wh 이하 기내 반입 가능</span></p>
          <p>일본 입국 팁 <span>세관 신고, 면세 범위 안내</span></p>
          <p>일본 여행 체크리스트 <span>놓치기 쉬운 준비물 확인</span></p>
        </div>

        <div className="kakao-box">
          궁금한 점이 있으신가요?<br />
          카카오톡 1:1 문의하기
        </div>

        <button className="primary-btn" onClick={() => setPage(7)}>
          구매 완료 화면 보기
        </button>
      </section>
      <BottomNav page={5} setPage={setPage} />
    </main>
  );
}

function Complete({ setPage }) {
  return (
    <main className="phone complete">
      <section className="content center">
        <CheckCircle className="big-check" />
        <h2>구매가 완료되었어요!</h2>
        <p>이제 여행 준비는 끝!<br />설레는 여행만 남았어요 ✈️</p>

        <div className="summary">
          <p><span>주문번호</span><b>PS2024-0507-1234</b></p>
          <p><span>주문 상품</span><b>Japan Edition Full Kit 외 1건</b></p>
          <p><span>결제 금액</span><b>₩52,700</b></p>
          <p><span>배송 예정일</span><b>5/10 도착 예정</b></p>
        </div>

        <button className="secondary-btn">주문 내역 보기</button>
        <button className="primary-btn" onClick={() => setPage(6)}>
          QR 가이드 바로 가기
        </button>

        <div className="finish-visual">🧳 🛂 📱</div>
      </section>
    </main>
  );
}

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
