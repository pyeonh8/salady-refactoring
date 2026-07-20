// ==============================================
// GNB 햄버거 메뉴
// ==============================================
const initGnb = () => {
  const toggle = document.querySelector(".gnb__toggle");
  const gnbList = document.querySelector(".gnb__list");
  const overlay = document.getElementById("gnb-overlay");
  if (!toggle) return;

  const open = () => {
    gnbList.classList.add("is-open");
    overlay.classList.add("is-active");

    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "메뉴 닫기");
  };

  const close = () => {
    gnbList.classList.remove("is-open");
    overlay.classList.remove("is-active");

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
  };

  toggle.addEventListener("click", () => {
    gnbList.classList.contains("is-open") ? close() : open();
  });

  gnbList.addEventListener("click", (e) => {
    if (e.target.closest(".gnb__item")) close();
  });

  overlay.addEventListener("click", close);

  // ESC 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
};

// ==============================================
// PC 슬라이더
// ==============================================
const initHeroSlider = () => {
  const bgs = document.querySelectorAll(".hero__bg-item");
  const slides = document.querySelectorAll(".hero__slide ");
  const imgs = document.querySelectorAll(".hero__img-item");
  const btns = document.querySelectorAll(".hero__control-btn");
  if (!bgs.length) return;

  // 초기화
  let bgCurrent = 0;
  let btnCurrent = 0;
  let timer;

  // 버튼 컨트롤 슬라이드
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      moveToSlide(i);
    });
  });

  const moveToSlide = (idx) => {
    [slides, imgs, btns].forEach((list) => {
      list.forEach((el, i) => {
        el.classList.toggle("is-active", i === idx);
      });
    });
    btns.forEach((btn, i) => btn.setAttribute("aria-selected", i === idx));
    btnCurrent = idx;
  };

  // 배경 자동 슬라이드
  const nextBg = () => {
    bgCurrent = (bgCurrent + 1) % bgs.length;
    bgs.forEach((el, i) => el.classList.toggle("is-active", i === bgCurrent));
  };

  const startAuto = () => {
    timer = setInterval(nextBg, 3500);
  };

  startAuto();
};

// ==============================================
// 모바일 슬라이더
// ==============================================

// ==============================================
// HTML 로드 후 스크립트 실행
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
  initGnb();
  initHeroSlider();
});
