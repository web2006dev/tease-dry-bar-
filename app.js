/* ========================================================
   TEASE DRY BAR — VIZAG (LAWSONS BAY COLONY)
   Core Application Logic, Visual Lookbook, Filters & WhatsApp Engine
   ======================================================== */

const BRAND_DATA = {
  name: "Tease Dry Bar",
  tagline: "Hair • Makeup • Nails • Selfcare",
  rating: 4.8,
  reviewsCount: 290,
  vizagPhone: "9346715808",
  vizagPhoneDisplay: "093467 15808",
  hyderabadPhone: "9000925725",
  vijayawadaPhone: "9703334499",
  instagram: "_teasedrybar",
  instagramUrl: "https://www.instagram.com/_teasedrybar",
  vizagAddress: "1st floor, 4-51-11, PVR Building, Lawsons Bay Colony, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530017",
  openingHour: 10,  // 10:00 AM
  closingHour: 20.5 // 8:30 PM
};

// --- Curated High-Fashion Visual Lookbook Items ---
const LOOKBOOK_ITEMS = [
  {
    id: "look-1",
    category: "hair",
    categoryName: "Hair & Blowouts",
    title: "Butterfly Layers & Signature Volume Blowout",
    subtitle: "Vizag Flagship Salon",
    img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80",
    quote: "It starts with what needs to go, takes shape between the snips and layers, and ends with a cut that feels completely fresh."
  },
  {
    id: "look-2",
    category: "bridal",
    categoryName: "Telugu Bridal",
    title: "Timeless Telugu Bride & Floral Hair Artistry",
    subtitle: "Bridal Suite Vizag",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    quote: "Rooted in tradition, radiant in every frame, and graceful in every detail✨ Timeless, elegant Telugu bride."
  },
  {
    id: "look-3",
    category: "nails",
    categoryName: "Nail Couture",
    title: "Stiletto French & Glazed Donut Chrome",
    subtitle: "Nail Bar Lawsons Bay",
    img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
    quote: "Why settle for ordinary when your nails can be this sculpted? High-gloss chrome over custom almond tips."
  },
  {
    id: "look-4",
    category: "spa",
    categoryName: "Pedicures & Selfcare",
    title: "Relaxing Coffee Pedicure & Foot Exfoliation",
    subtitle: "Spa Lounge",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80",
    quote: "Nice ambiance, relaxing coffee pedicure done by sandhya. Freshly brewed organic grounds & warm hydro-soak."
  },
  {
    id: "look-5",
    category: "hair",
    categoryName: "Hair & Blowouts",
    title: "Hair Botox Precision Texture Transformation",
    subtitle: "Treatment Station",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80",
    quote: "Healthy-looking hair, smoother texture, zero frizz, and that radiant mirror shine."
  },
  {
    id: "look-6",
    category: "bridal",
    categoryName: "Telugu Bridal",
    title: "Dewy Glass-Skin Reception Glam",
    subtitle: "Bridal Artistry",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    quote: "Dewy, dreamy, and dripping in confidence. Glowing skin and effortless detailing made for the spotlight."
  },
  {
    id: "look-7",
    category: "nails",
    categoryName: "Nail Couture",
    title: "Hand-Painted 3D Floral & Gold Foil Accents",
    subtitle: "Bespoke Nail Studio",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    quote: "From soft pastel florals to statement 3D charms, crafted for every mood and celebration."
  },
  {
    id: "look-8",
    category: "lashes",
    categoryName: "Lashes & Brows",
    title: "Fluttery Hybrid Eyelash Extensions",
    subtitle: "Lash Lounge",
    img: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80",
    quote: "Weightless individual volume lashes crafted to accentuate your natural eye shape effortlessly."
  },
  {
    id: "look-9",
    category: "hair",
    categoryName: "Hair & Blowouts",
    title: "Couture Face-Framing Layers & Hollywood Waves",
    subtitle: "Dry Bar Styling",
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80",
    quote: "Sometimes all it takes is the right hairdo to transform the entire vibe. A little styling, a gorgeous finish."
  },
  {
    id: "look-10",
    category: "spa",
    categoryName: "Pedicures & Selfcare",
    title: "Waterless Luxury Pedicure & Callus Smoothing",
    subtitle: "Selfcare Suite",
    img: "https://images.unsplash.com/photo-1512290900672-1f486a605f2c?auto=format&fit=crop&w=1200&q=80",
    quote: "Medical-grade gentle callus exfoliation followed by restorative foot massage and herbal hydration."
  }
];

// --- Services Menu ---
const TEASE_SERVICES = [
  // Hair & Dry Bar
  {
    id: "service-blowout",
    category: "hair",
    categoryLabel: "Hair & Dry Bar",
    name: "Signature Dry Bar Blowout",
    price: "₹750",
    time: "35 mins",
    desc: "Aromatherapy hair wash, high-volume brush sculpture & mirror-gloss mist.",
    badge: "Most Loved"
  },
  {
    id: "service-haircut",
    category: "hair",
    categoryLabel: "Hair & Dry Bar",
    name: "Butterfly Cut & Custom Layers",
    price: "₹1,200",
    time: "45 mins",
    desc: "Personalized architecture, face-framing fringe & bouncy styling.",
    badge: "Trending"
  },
  {
    id: "service-botox",
    category: "hair",
    categoryLabel: "Hair & Dry Bar",
    name: "Hair Botox Smoothing Therapy",
    price: "₹3,800",
    time: "120 mins",
    desc: "Intensive anti-frizz collagen infusion restoring high elasticity and softness.",
    badge: "Bestseller"
  },

  // Nail Couture
  {
    id: "service-acrylics",
    category: "nails",
    categoryLabel: "Nail Couture",
    name: "Full Set Sculpted Acrylics (Stiletto / Almond)",
    price: "₹2,200",
    time: "80 mins",
    desc: "Custom nail extension architecture, balance apex & choice of gel polish.",
    badge: "Signature"
  },
  {
    id: "service-russian-gel",
    category: "nails",
    categoryLabel: "Nail Couture",
    name: "Russian Dry Manicure & Gel Polish",
    price: "₹1,100",
    time: "45 mins",
    desc: "Diamond e-file cuticle detailing with chip-resistant 3-week gel color.",
    badge: null
  },
  {
    id: "service-3d-art",
    category: "nails",
    categoryLabel: "Nail Couture",
    name: "3D Floral & Glazed Chrome Art",
    price: "₹799",
    time: "35 mins",
    desc: "Handmade acrylic florals, chrome glazed powder & Swarovski crystals.",
    badge: "Couture"
  },

  // Pedicures & Self-care
  {
    id: "service-coffee-pedi",
    category: "spa",
    categoryLabel: "Pedicures & Selfcare",
    name: "Signature Relaxing Coffee Pedicure",
    price: "₹1,400",
    time: "55 mins",
    desc: "Fresh organic coffee scrub, hot hydro soak, callus treatment & foot massage.",
    badge: "Client Favorite"
  },
  {
    id: "service-back-massage",
    category: "spa",
    categoryLabel: "Pedicures & Selfcare",
    name: "De-Stress Back & Neck Massage",
    price: "₹1,200",
    time: "35 mins",
    desc: "Warm botanical herbal oils targeting desk strain and tension knots.",
    badge: null
  },
  {
    id: "service-waxing",
    category: "spa",
    categoryLabel: "Pedicures & Selfcare",
    name: "Brazilian & Body Waxing Ritual",
    price: "₹2,400",
    time: "45 mins",
    desc: "Painless gentle peel-off wax with soothing post-treatment aloe mist.",
    badge: null
  },

  // Bridal & Glam
  {
    id: "service-telugu-bridal",
    category: "glam",
    categoryLabel: "Bridal & Glamour",
    name: "Telugu Traditional Bridal Hair & HD Makeup",
    price: "₹12,500",
    time: "180 mins",
    desc: "Timeless bridal look: HD dewy base, floral jadai hairdo, drape setting & lashes.",
    badge: "Bridal Flagship"
  },
  {
    id: "service-cocktail-glam",
    category: "glam",
    categoryLabel: "Bridal & Glamour",
    name: "Cocktail & Sangeet Party Glam",
    price: "₹4,500",
    time: "75 mins",
    desc: "Defined eyes, modern messy buns or glam Hollywood waves with luminous skin.",
    badge: null
  },
  {
    id: "service-lashes",
    category: "glam",
    categoryLabel: "Bridal & Glamour",
    name: "Volume Eyelash Extensions (Full Set)",
    price: "₹2,800",
    time: "75 mins",
    desc: "Featherlight faux mink lashes customized to your eye curve.",
    badge: "Popular"
  }
];

// --- Live IST Status ---
function updateLiveStatus() {
  const statusEl = document.getElementById("salon-status-indicator");
  if (!statusEl) return;

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5)); // IST UTC+5:30
  
  const hour = istDate.getHours() + (istDate.getMinutes() / 60);
  const isOpen = hour >= BRAND_DATA.openingHour && hour < BRAND_DATA.closingHour;

  if (isOpen) {
    statusEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block mr-1.5"></span>
      <span class="text-emerald-400 font-bold text-xs tracking-wider uppercase">Open Now · Closes 8:30 PM</span>
    `;
  } else {
    statusEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-400 inline-block mr-1.5"></span>
      <span class="text-amber-300 font-bold text-xs tracking-wider uppercase">Closed Now · Opens 10:00 AM</span>
    `;
  }
}

// --- Render Lookbook Photos ---
let activeLookbookFilter = "all";

function renderLookbook() {
  const container = document.getElementById("lookbook-grid");
  if (!container) return;

  const items = LOOKBOOK_ITEMS.filter(item => 
    activeLookbookFilter === "all" || item.category === activeLookbookFilter
  );

  container.innerHTML = items.map(item => `
    <div onclick="openLightbox('${item.img}', '${item.title}', '${item.subtitle}', '${item.quote}')" 
         class="lookbook-card group rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 shadow-md">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/90 via-[#0C0C0E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
        <span class="text-[10px] font-bold uppercase tracking-widest text-champagne-light block">
          ${item.categoryName}
        </span>
        <h4 class="font-serif text-base sm:text-lg font-bold text-white mt-1 leading-snug">
          ${item.title}
        </h4>
        <p class="text-xs text-stone-300 mt-1 line-clamp-2 italic font-sans font-light">
          "${item.quote}"
        </p>
        <span class="text-[10px] text-amber-300 font-bold mt-2 uppercase tracking-wider flex items-center gap-1">
          <span>Tap to zoom look</span>
          <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
        </span>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

function setupLookbookPills() {
  document.querySelectorAll(".lookbook-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".lookbook-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeLookbookFilter = pill.dataset.filter;
      renderLookbook();
    });
  });
}

// --- Render Services Menu ---
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = TEASE_SERVICES.map(s => `
    <div class="glass-card-champagne rounded-2xl p-5 sm:p-6 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700">
            ${s.categoryLabel}
          </span>
          ${s.badge ? `
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D4B28C]/20 text-[#D4B28C] border border-[#D4B28C]/40">
              ${s.badge}
            </span>
          ` : ''}
        </div>

        <h3 class="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#D4B28C] transition-colors leading-snug mt-1">
          ${s.name}
        </h3>

        <p class="text-xs text-stone-400 mt-2 leading-relaxed">
          ${s.desc}
        </p>
      </div>

      <div class="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between">
        <div>
          <span class="text-[10px] text-stone-500 uppercase tracking-widest block font-medium">Starts From</span>
          <div class="flex items-baseline gap-1.5">
            <span class="text-xl font-bold text-white font-display">${s.price}</span>
            <span class="text-[11px] text-stone-400">· ${s.time}</span>
          </div>
        </div>

        <button onclick="openBookingModal('${s.id}')" class="px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold bg-stone-800 hover:bg-[#D4B28C] hover:text-[#0C0C0E] text-stone-200 border border-stone-700 transition-all flex items-center gap-1">
          <span>Book</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// --- Interactive Before / After Slider ---
function initBeforeAfterSlider() {
  const slider = document.getElementById("tease-ba-container");
  if (!slider) return;

  const beforeLayer = document.getElementById("tease-ba-before");
  const handle = document.getElementById("tease-ba-handle");
  const line = document.getElementById("tease-ba-line");

  let isDragging = false;

  const setPos = (clientX) => {
    const rect = slider.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    if (percent < 5) percent = 5;
    if (percent > 95) percent = 95;

    beforeLayer.style.width = `${percent}%`;
    line.style.left = `${percent}%`;
    handle.style.left = `${percent}%`;
  };

  const startDrag = (e) => {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPos(clientX);
  };
  const stopDrag = () => { isDragging = false; };
  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPos(clientX);
  };

  slider.addEventListener("mousedown", startDrag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("mousemove", onDrag);

  slider.addEventListener("touchstart", startDrag, { passive: true });
  window.addEventListener("touchend", stopDrag);
  window.addEventListener("touchmove", onDrag, { passive: true });
}

// --- Booking Modal Management ---
function openBookingModal(preselectedServiceId = null) {
  const modal = document.getElementById("booking-modal");
  const select = document.getElementById("booking-service-select");
  const dateInput = document.getElementById("booking-date-input");
  if (!modal) return;

  // Populate select
  if (select) {
    select.innerHTML = TEASE_SERVICES.map(s => `
      <option value="${s.id}" ${s.id === preselectedServiceId ? 'selected' : ''}>
        ${s.name} — ${s.price} (${s.time})
      </option>
    `).join("");
  }

  // Set min date
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Submit Booking via WhatsApp ---
function handleBookingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("client-name")?.value.trim();
  const phone = document.getElementById("client-phone")?.value.trim();
  const serviceId = document.getElementById("booking-service-select")?.value;
  const branch = document.getElementById("booking-branch-select")?.value || "Vizag Flagship (Lawsons Bay Colony)";
  const date = document.getElementById("booking-date-input")?.value;
  const time = document.getElementById("booking-time-select")?.value;
  const note = document.getElementById("client-notes")?.value.trim() || "None";

  if (!name || !phone || !date || !time) {
    showToast("Please complete your name, phone, date, and preferred time.");
    return;
  }

  const selectedService = TEASE_SERVICES.find(s => s.id === serviceId) || TEASE_SERVICES[0];
  const refCode = "TDB-" + Math.floor(1000 + Math.random() * 9000);

  const messageText = 
`✨ *NEW APPOINTMENT RESERVATION* ✨
*Tease Dry Bar — ${branch}*
━━━━━━━━━━━━━━━━━━━━━━━━━
🔖 *Booking ID:* ${refCode}
👤 *Client Name:* ${name}
📞 *Mobile:* ${phone}
💅 *Requested Service:* ${selectedService.name}
💰 *Price Est.:* ${selectedService.price} (${selectedService.time})
📅 *Date:* ${date}
⏰ *Time:* ${time}
📍 *Branch:* ${branch}
📝 *Notes:* ${note}
━━━━━━━━━━━━━━━━━━━━━━━━━
_Kindly confirm my appointment slot. Thank you!_`;

  // Direct to Vizag desk: 9346715808
  const waUrl = `https://wa.me/91${BRAND_DATA.vizagPhone}?text=${encodeURIComponent(messageText)}`;

  closeBookingModal();
  showReceiptModal({
    refCode,
    name,
    phone,
    serviceName: selectedService.name,
    servicePrice: selectedService.price,
    branch,
    date,
    time,
    waUrl
  });
}

// --- Receipt Voucher Modal ---
function showReceiptModal(data) {
  const modal = document.getElementById("receipt-modal");
  const content = document.getElementById("receipt-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="text-center pb-4 border-b border-stone-800">
      <div class="w-12 h-12 mx-auto rounded-full bg-[#D4B28C]/20 text-[#D4B28C] flex items-center justify-center mb-2 border border-[#D4B28C]/40">
        <i data-lucide="check" class="w-6 h-6"></i>
      </div>
      <span class="text-[10px] uppercase font-bold tracking-widest text-[#D4B28C]">Reservation Summary</span>
      <h3 class="font-serif text-2xl font-bold text-white mt-0.5">Booking Prepared</h3>
      <p class="text-xs text-stone-400 mt-1">Ref ID: <span class="font-mono font-bold text-white">${data.refCode}</span></p>
    </div>

    <div class="py-4 space-y-2 text-xs sm:text-sm text-stone-300">
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Client:</span>
        <span class="font-semibold text-white">${data.name}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Mobile:</span>
        <span class="font-semibold text-white">${data.phone}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Service:</span>
        <span class="font-semibold text-[#D4B28C] text-right">${data.serviceName}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Price:</span>
        <span class="font-bold text-white">${data.servicePrice}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Schedule:</span>
        <span class="font-semibold text-white">${data.date} at ${data.time}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Location:</span>
        <span class="font-semibold text-stone-300 text-right text-[11px]">${data.branch}</span>
      </div>
    </div>

    <div class="pt-3 flex flex-col gap-2">
      <a href="${data.waUrl}" target="_blank" class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-colors">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
        <span>Send WhatsApp Confirmation (093467 15808)</span>
      </a>
      <button onclick="closeReceiptModal()" class="w-full py-2 text-xs text-stone-400 hover:text-white uppercase tracking-wider font-semibold">
        Close Window
      </button>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
}

function closeReceiptModal() {
  const modal = document.getElementById("receipt-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Lightbox Modal ---
function openLightbox(imgSrc, title, subtitle, quote) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const t = document.getElementById("lightbox-title");
  const s = document.getElementById("lightbox-subtitle");
  const q = document.getElementById("lightbox-quote");
  if (!modal || !img) return;

  img.src = imgSrc;
  if (t) t.innerText = title;
  if (s) s.innerText = subtitle;
  if (q) q.innerText = quote ? `"${quote}"` : "";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Copy & Toast Utility ---
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(label ? `${label} copied!` : "Copied to clipboard!");
  }).catch(() => {
    showToast("Copy failed. Please copy manually.");
  });
}

function showToast(msg) {
  let toast = document.getElementById("tease-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "tease-toast";
    toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-stone-900 border border-[#D4B28C]/40 text-white text-xs font-semibold shadow-2xl transition-all duration-300 opacity-0 pointer-events-none flex items-center gap-2";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-[#D4B28C]"></i> ${msg}`;
  if (window.lucide) lucide.createIcons();

  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 3200);
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000);

  renderLookbook();
  setupLookbookPills();
  renderServices();
  initBeforeAfterSlider();

  const form = document.getElementById("appointment-form");
  if (form) form.addEventListener("submit", handleBookingSubmit);

  // Close modals on Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBookingModal();
      closeReceiptModal();
      closeLightbox();
    }
  });

  // Modal backdrop click
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeBookingModal();
        closeReceiptModal();
        closeLightbox();
      }
    });
  });

  if (window.lucide) lucide.createIcons();
});
