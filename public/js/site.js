/* Ben Curzon portfolio: accordions, image viewer, music links dialog, contact form.
   Plain JavaScript, no dependencies. */
(function () {
  'use strict';
  var DATA = {"gallery": [{"src": "/images/ash-the-best-of-vinyl-package.webp", "label": "Ash — The Best Of, vinyl package"}, {"src": "/images/ash-tour-t-shirt-designs.webp", "label": "Ash — tour t-shirt designs"}, {"src": "/images/muse-haarp-artwork-spread-chris.webp", "label": "Muse — HAARP artwork spread, Chris"}, {"src": "/images/muse-haarp-artwork-spread-dom.webp", "label": "Muse — HAARP artwork spread, Dom"}, {"src": "/images/muse-dom-dvd-sleeve.webp", "label": "Muse — Dom DVD sleeve"}, {"src": "/images/muse-haarp-box-set.webp", "label": "Muse — HAARP box set"}, {"src": "/images/muse-matt-dvd-sleeve.webp", "label": "Muse — Matt DVD sleeve"}, {"src": "/images/muse-live-at-rome-olympic-stadium-cover-mock.webp", "label": "Muse — Live at Rome Olympic Stadium, cover mock"}, {"src": "/images/muse-the-resistance-tour-tickets-posters.webp", "label": "Muse — The Resistance Tour, tickets & posters"}, {"src": "/images/muse-the-resistance-tour-logo-treatment.webp", "label": "Muse — The Resistance Tour, logo treatment"}, {"src": "/images/ziq-bilious-paths-vinyl.webp", "label": "µ-Ziq — Bilious Paths, vinyl"}, {"src": "/images/one-the-data-report-2010-press-conference.webp", "label": "ONE — The Data Report 2010, press conference"}, {"src": "/images/one-data-report-trade-investment-spread.webp", "label": "ONE — Data Report, Trade & Investment spread"}, {"src": "/images/one-data-report-health-spread.webp", "label": "ONE — Data Report, Health spread"}, {"src": "/images/one-the-data-report-2010-cover.webp", "label": "ONE — The Data Report 2010, cover"}, {"src": "/images/one-data-report-2010-cover-detail.webp", "label": "ONE — Data Report 2010, cover detail"}, {"src": "/images/one-the-data-report-2009-press-conference.webp", "label": "ONE — The Data Report 2009, press conference"}, {"src": "/images/one-campaign-t-shirt.webp", "label": "ONE — campaign t-shirt"}, {"src": "/images/planet-mu-presents-club-night-posters.webp", "label": "Planet Mu Presents — club night posters"}, {"src": "/images/planet-mu-20th-anniversary-tote-bags.webp", "label": "Planet Mu — 20th anniversary tote bags"}, {"src": "/images/starkey-knob-twiddler-serato-pressing.webp", "label": "Starkey — Knob Twiddler, Serato pressing"}, {"src": "/images/burned-as-witches-self-titled-vinyl-gatefold.webp", "label": "Burned As Witches — self-titled, vinyl gatefold"}, {"src": "/images/melodia-start-screen.webp", "label": "Melodia — start screen"}, {"src": "/images/melodia-piano-roll-single-melody.webp", "label": "Melodia — piano-roll, single melody"}, {"src": "/images/melodia-counter-melody-voice.webp", "label": "Melodia — counter-melody voice"}, {"src": "/images/melodia-midi-download.webp", "label": "Melodia — MIDI download"}, {"src": "/images/redesigned-onboarding-flow-business-set-up-business-mode.webp", "label": "Onboarding flow redesign — mobile screens"}, {"src": "/images/the-platform-dashboard-redesigned-for-a-compact-mobile-v.webp", "label": "Dashboard redesigned for compact mobile viewports"}, {"src": "/images/early-sketches-of-the-ai-advisor-conversational-flow-on.webp", "label": "Early sketches of the AI advisor conversational flow on mobile"}, {"src": "/images/help-me-choose-the-guided-phone-and-plan-journey-for-tel.webp", "label": "Help me choose: the guided phone and plan journey for telco retail"}, {"src": "/images/edf-smart-home-store-research-analytics-review-hypothesi.webp", "label": "EDF smart home store research: analytics review, hypothesis and blockers to energy efficiency"}, {"src": "/images/workshop-whiteboards-store-audit-concept-ideas-and-compe.webp", "label": "Workshop whiteboards: store audit, concept ideas and competitor analysis"}, {"src": "/images/concept-ideas-and-header-copy-with-early-store-wireframe.webp", "label": "Concept ideas and header copy, with early store wireframes"}, {"src": "/images/the-conversations-modular-mobile-and-a-b-optimised-conte.webp", "label": "The conversations: modular, mobile and A/B optimised content"}, {"src": "/images/edf-smart-home-store-designs-energy-usage-before-and-aft.webp", "label": "EDF smart home store designs: energy usage before and after, and product recommendations by category"}, {"src": "/images/edf-smart-home-store-designs-customer-story-article-and.webp", "label": "EDF smart home store designs: customer story article and related products"}, {"src": "/images/rakuten-blueprints-ui-kit-typography-colour-icons-form-i.webp", "label": "Rakuten Blueprints UI kit: typography, colour, icons, form inputs, buttons, cards, headers, modals, tables, alerts and grid breakpoints"}, {"src": "/images/rakuten-advertising-design-language-cheat-sheet-colour-p-2.webp", "label": "Rakuten Advertising design language cheat sheet: colour palette, typography, UI components, visual language and iconography"}, {"src": "/images/copywriting-assistant-figma-plugin-community-listing-and.webp", "label": "Copywriting Assistant Figma plugin: community listing and the Generate and Scrutinise tabs"}, {"src": "/images/work-in-progress-user-flow-an-advertiser-invites-an-infl.webp", "label": "Influencer invite flow (work in progress): advertiser invite, registration, verification, offer, onboarding and first post"}, {"src": "/images/early-conversation-flow-map-for-creating-an-offer-the-ag.webp", "label": "Early conversation flow map: creating an offer, with the agent's questions, choices and an edit loop"}, {"src": "/images/early-flow-map-for-assigning-an-offer-with-two-scenarios.webp", "label": "Early flow map: assigning an offer, with two scenarios, preview cards and edit paths"}, {"src": "/images/value-proposition-canvas-workshop-edf-smart-home-store-v.webp", "label": "Value proposition canvas workshop: EDF Smart Home Store mapped against the Energy Savers customer segment"}, {"src": "/images/full-edf-smart-home-store-page-on-a-tablet-customer-stor.webp", "label": "Full EDF Smart Home Store page: customer story, related products and savings by category"}, {"src": "/images/mirai-clickthrough.gif", "label": "Mirai in use: reviewing partner applications and inviting recommended creators from interactive cards in the chat"}, {"src": "/images/mirai-on-a-laptop-five-pending-partner-applications-show.webp", "label": "Mirai in use: five pending partner applications as cards, each with an assessment, commission control and approve or decline buttons"}], "groups": [[6, 7, 3, 5, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 11, 1, 2, 22], [41, 42], [45, 46], [43, 31, 32, 33, 34, 44, 29, 30], [28, 27, 40], [37, 38, 39], [23, 26, 24, 25]]};
  var GALLERY = DATA.gallery, GROUPS = DATA.groups;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- sticky nav: measure its height, add a solid background once scrolled ---------- */
  var nav = $('#site-nav');
  if (nav) {
    var setNavH = function () {
      document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
    };
    var onScroll = function () {
      nav.classList.toggle('is-stuck', (window.pageYOffset || document.documentElement.scrollTop) > 4);
    };
    setNavH(); onScroll();
    window.addEventListener('resize', setNavH);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setNavH);
  }

  /* ---------- accordions: one open at a time ---------- */
  function setAccordion(btn, open) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.hidden = !open;
    var head = btn.closest('.cs-head, .cs-ghead');
    var icon = head && head.querySelector('.cs-icon, .cs-gicon');
    if (icon) icon.textContent = open ? '\u2212' : '+';
    return head;
  }
  $$('.acc-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      var closedOther = false;
      if (open) {
        $$('.acc-btn[aria-expanded="true"]').forEach(function (other) {
          if (other !== btn) { setAccordion(other, false); closedOther = true; }
        });
      }
      var head = setAccordion(btn, open);
      /* closing a panel above can push the one just opened out of view: bring its header back under the nav */
      if (open && closedOther && head) head.scrollIntoView({ block: 'start' });
    });
  });

  /* ---------- modal helpers ---------- */
  var lastFocus = null;
  function focusables(root) {
    return $$('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])', root).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
  }
  function trap(root, e) {
    if (e.key !== 'Tab') return;
    var f = focusables(root);
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---------- image viewer ---------- */
  var lb = $('#lightbox'), lbImg = $('#lb-img'), lbLabel = $('#lb-label'), lbHint = $('#lb-hint'), lbNav = $('#lb-nav');
  var current = 0;
  function groupOf(n) {
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].indexOf(n) >= 0) return GROUPS[i];
    return null;
  }
  function show(n) {
    var item = GALLERY[n - 1];
    if (!item) return;
    current = n;
    lbImg.src = item.src;
    lbImg.alt = item.label;
    lbLabel.textContent = item.label;
    var g = groupOf(n);
    lbNav.hidden = !g;
    lbHint.textContent = g
      ? (g.indexOf(n) + 1) + ' of ' + g.length + ' · Use the arrows to browse · Click anywhere else to close'
      : 'Click anywhere to close';
  }
  function step(d) {
    var g = groupOf(current);
    if (!g) return;
    var p = g.indexOf(current);
    show(g[(p + d + g.length) % g.length]);
  }
  function openViewer(n, from) {
    lastFocus = from || document.activeElement;
    show(n);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    var c = $('.lb-close', lb);
    if (c) c.focus();
  }
  function closeViewer() {
    lb.hidden = true;
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $$('[data-zoom]').forEach(function (img) {
    var n = parseInt(img.getAttribute('data-zoom'), 10);
    img.addEventListener('click', function () { openViewer(n, img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openViewer(n, img); }
    });
  });
  $$('[data-close-lightbox]').forEach(function (el) {
    el.addEventListener('click', function (e) { if (e.target.closest('[data-lb-prev], [data-lb-next]')) return; closeViewer(); });
  });
  $$('[data-lb-prev]').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); step(-1); }); });
  $$('[data-lb-next]').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); step(1); }); });

  /* ---------- music links ---------- */
  var music = $('#music-modal');
  function openMusic(from) {
    lastFocus = from || document.activeElement;
    music.hidden = false;
    document.body.style.overflow = 'hidden';
    var a = $('a', music);
    if (a) a.focus();
  }
  function closeMusic() {
    music.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $$('[data-open-music]').forEach(function (b) { b.addEventListener('click', function () { openMusic(b); }); });
  $$('[data-close-music]').forEach(function (b) { b.addEventListener('click', closeMusic); });

  document.addEventListener('keydown', function (e) {
    if (!lb.hidden) {
      if (e.key === 'Escape') { closeViewer(); return; }
      if (e.key === 'ArrowLeft') { step(-1); return; }
      if (e.key === 'ArrowRight') { step(1); return; }
      trap(lb, e);
    } else if (!music.hidden) {
      if (e.key === 'Escape') { closeMusic(); return; }
      trap(music, e);
    }
  });

  /* ---------- contact form (Netlify Forms) ---------- */
  var form = $('#contact-form'), sent = $('#form-sent'), err = $('#form-error'), submit = $('#form-submit');
  function showError(msg) { err.textContent = msg; err.hidden = false; }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var email = String(data.get('email') || '').trim();
      var message = String(data.get('message') || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
        showError('Please add a valid email address and a message.');
        return;
      }
      err.hidden = true;
      submit.disabled = true;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      }).then(function (r) {
        if (!r.ok) throw new Error('bad status');
        form.hidden = true;
        sent.hidden = false;
        sent.focus();
      }).catch(function () {
        showError('Sorry, that did not send. Please try again in a moment.');
      }).then(function () { submit.disabled = false; });
    });
    $('#form-reset').addEventListener('click', function () {
      form.reset();
      err.hidden = true;
      sent.hidden = true;
      form.hidden = false;
      $('#cf-name').focus();
    });
  }
})();
