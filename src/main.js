import { pages, profile, sections, themes } from "./content.js";

const $crt = document.getElementById("mainScreen");
const $frame = document.getElementById("frame");
const $bg = document.getElementById("bg");
const $themeLbl = document.getElementById("themeLbl");
const $themeSw = document.getElementById("themeSw");
const $zpct = document.getElementById("zpct");
const $body = document.getElementById("body");
const $tabbar = document.getElementById("tabbar");
const $subtabs = document.getElementById("subtabs");
const $badge = document.getElementById("badge");
const $pill = document.getElementById("pill");
const $count = document.getElementById("count");
const $winTitle = document.getElementById("winTitle");
const $startBtn = document.getElementById("startBtn");
const $startMenu = document.getElementById("startMenu");
const $startItems = document.getElementById("startItems");
const $themeBtn = document.getElementById("themeBtn");
const $clock = document.getElementById("clock");

const THEME_KEY = "shubh_theme";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let idx = 0;
let themeIdx = 0;
let zoom = 1.22;
let peek = 0;

function sectionOf(page) {
  return sections.find((s) => s.id === page.section) || sections[0];
}

function pageFromHash() {
  const raw = location.hash.replace(/^#\/?/, "").trim();
  if (!raw) return 0;
  const i = pages.findIndex((p) => p.id === raw);
  return i === -1 ? 0 : i;
}

function setHash(id) {
  const next = id === "home" ? "#/" : `#/${id}`;
  if (location.hash !== next && !(id === "home" && (location.hash === "" || location.hash === "#"))) {
    history.replaceState(null, "", next);
  }
}

function sweep() {
  if (reduceMotion) return;
  $crt.classList.remove("scanning");
  void $crt.offsetWidth;
  $crt.classList.add("scanning");
}

function render(animate) {
  const page = pages[idx];
  const sec = sectionOf(page);
  if (animate) sweep();
  $body.innerHTML = page.html;
  $body.scrollTop = 0;
  $winTitle.textContent = `${page.title} — Shubh`;
  $badge.textContent = sec.label.toUpperCase();
  $pill.textContent = page.title;
  $count.textContent = `${idx + 1}/${pages.length}`;
  document.title = `${page.winTitle.replace(" — ", " · ")}`;

  document.documentElement.style.setProperty("--accent", sec.accent);

  $tabbar.querySelectorAll(".tab").forEach((el) => {
    el.classList.toggle("active", el.dataset.sec === sec.id);
    el.setAttribute("aria-current", el.dataset.sec === sec.id ? "true" : "false");
  });

  const siblings = pages.filter((p) => p.section === sec.id);
  if (siblings.length > 1) {
    $subtabs.hidden = false;
    $subtabs.innerHTML = siblings
      .map(
        (p) =>
          `<button type="button" class="stab${p.id === page.id ? " active" : ""}" data-go="${p.id}">${p.title}</button>`
      )
      .join("");
  } else {
    $subtabs.hidden = true;
    $subtabs.innerHTML = "";
  }
}

function goIndex(i, animate = true) {
  const next = (i + pages.length) % pages.length;
  idx = next;
  setHash(pages[idx].id);
  render(animate);
  closeStart();
}

function goId(id) {
  const i = pages.findIndex((p) => p.id === id);
  if (i !== -1) goIndex(i);
}

function buildTabs() {
  $tabbar.innerHTML = sections
    .map((s) => `<button type="button" class="tab" data-sec="${s.id}">${s.label}</button>`)
    .join("");
}

function buildStart() {
  $startItems.innerHTML = sections
    .map(
      (s) =>
        `<button type="button" data-sec="${s.id}"><i style="background:${s.accent}"></i>${s.label}</button>`
    )
    .join("");
}

function openStart() {
  $startMenu.hidden = false;
  $startBtn.classList.add("open");
  $startBtn.setAttribute("aria-expanded", "true");
}

function closeStart() {
  $startMenu.hidden = true;
  $startBtn.classList.remove("open");
  $startBtn.setAttribute("aria-expanded", "false");
}

function place(el, box) {
  if (!box) {
    el.hidden = true;
    return;
  }
  const [l, t, r, b] = box.rect;
  el.hidden = false;
  el.style.top = `${t}%`;
  el.style.left = `${l}%`;
  el.style.width = `${r - l}%`;
  el.style.height = `${b - t}%`;
  el.style.borderRadius = "7px";
  el.style.clipPath = "none";
}

function applyFrame() {
  $frame.style.setProperty("--zoom", String(zoom));
  $frame.style.setProperty("--peek", `${peek}px`);
  $zpct.textContent = `${Math.round(zoom * 100)}%`;
}

function applyTheme(i) {
  themeIdx = (i + themes.length) % themes.length;
  const t = themes[themeIdx];
  $bg.src = t.src;
  $bg.alt = "";
  $themeLbl.textContent = t.label;
  $themeSw.style.background = t.swatch;
  place($crt, t.main);
  zoom = t.zoom ?? 1.22;
  peek = 0;
  applyFrame();
  try {
    localStorage.setItem(THEME_KEY, t.id);
  } catch {
    /* private mode */
  }
}

function tickClock() {
  const d = new Date();
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, "0");
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  const label = `${h}:${m} ${ap}`;
  document.querySelectorAll(".live-clock").forEach((el) => {
    el.textContent = label;
    if (el.tagName === "TIME") el.dateTime = d.toISOString();
  });
}

function boot() {
  idx = pageFromHash();
  buildTabs();
  buildStart();
  const saved = (() => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  })();
  const found = themes.findIndex((t) => t.id === (saved === "winter" ? "cosmos" : saved));
  const fallback = themes.findIndex((t) => t.id === "nightlife");
  applyTheme(found === -1 ? (fallback === -1 ? 0 : fallback) : found);
  render(false);
  tickClock();
  setInterval(tickClock, 30000);

  const finish = () => {
    $crt.classList.remove("booting");
  };
  if (reduceMotion) finish();
  else setTimeout(finish, 1400);
}

$tabbar.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-sec]");
  if (!btn) return;
  const i = pages.findIndex((p) => p.section === btn.dataset.sec);
  if (i !== -1) goIndex(i);
});

$subtabs.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-go]");
  if (btn) goId(btn.dataset.go);
});

document.getElementById("win").addEventListener("click", (e) => {
  const go = e.target.closest("#body [data-go]");
  if (go) {
    goId(go.dataset.go);
    return;
  }
  const nav = e.target.closest("#body [data-nav]");
  if (!nav) return;
  if (nav.dataset.nav === "prev") goIndex(idx - 1);
  else if (nav.dataset.nav === "next") goIndex(idx + 1);
  else if (nav.dataset.nav === "up") $body.scrollBy({ top: -80, behavior: "smooth" });
  else if (nav.dataset.nav === "down") $body.scrollBy({ top: 80, behavior: "smooth" });
});

document.getElementById("zin").addEventListener("click", () => {
  zoom = Math.min(2.15, Math.round((zoom + 0.15) * 100) / 100);
  applyFrame();
});
document.getElementById("zout").addEventListener("click", () => {
  zoom = Math.max(1, Math.round((zoom - 0.15) * 100) / 100);
  applyFrame();
});
document.getElementById("peekL").addEventListener("click", () => {
  peek = peek > 0 ? 0 : 220;
  applyFrame();
});
document.getElementById("peekR").addEventListener("click", () => {
  peek = peek < 0 ? 0 : -220;
  applyFrame();
});

document.getElementById("prev").addEventListener("click", () => goIndex(idx - 1));
document.getElementById("next").addEventListener("click", () => goIndex(idx + 1));
document.getElementById("navLeft").addEventListener("click", () => goIndex(idx - 1));
document.getElementById("navRight").addEventListener("click", () => goIndex(idx + 1));
document.getElementById("navUp").addEventListener("click", () => {
  $body.scrollBy({ top: -80, behavior: "smooth" });
});
document.getElementById("navDown").addEventListener("click", () => {
  $body.scrollBy({ top: 80, behavior: "smooth" });
});

$startBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if ($startMenu.hidden) openStart();
  else closeStart();
});

$startItems.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-sec]");
  if (!btn) return;
  const i = pages.findIndex((p) => p.section === btn.dataset.sec);
  if (i !== -1) goIndex(i);
});

document.addEventListener("click", (e) => {
  if (!$startMenu.hidden && !e.target.closest("#startMenu") && !e.target.closest("#startBtn")) {
    closeStart();
  }
});

$themeBtn.addEventListener("click", () => applyTheme(themeIdx + 1));

document.getElementById("win").addEventListener("submit", (e) => {
  if (e.target.id !== "contactForm") return;
  e.preventDefault();
  const data = new FormData(e.target);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const subject = encodeURIComponent(`Note from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` <${email}>` : ""}`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
});

window.addEventListener("keydown", (e) => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") {
    if (e.key === "Escape") document.activeElement.blur();
    return;
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    goIndex(idx - 1);
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    goIndex(idx + 1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    $body.scrollBy({ top: -60, behavior: "smooth" });
  } else if (e.key === "ArrowDown" || e.key === "PageDown") {
    e.preventDefault();
    $body.scrollBy({ top: 60, behavior: "smooth" });
  } else if (e.key === "PageUp") {
    e.preventDefault();
    $body.scrollBy({ top: -60, behavior: "smooth" });
  } else if (e.key === " " && tag !== "BUTTON" && tag !== "A") {
    e.preventDefault();
    $body.scrollBy({ top: 80, behavior: "smooth" });
  } else if (e.key === "Escape") {
    closeStart();
  }
});

window.addEventListener("hashchange", () => {
  const i = pageFromHash();
  if (i !== idx) {
    idx = i;
    render(true);
  }
});

boot();
