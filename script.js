const header = document.querySelector(".site-header");
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const phoneActions = document.querySelectorAll("[data-phone-action]");
const galleryTriggers = document.querySelectorAll("[data-gallery]");
const modal = document.querySelector("[data-gallery-modal]");
const modalImage = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalCount = document.querySelector("[data-modal-count]");
const modalThumbs = document.querySelector("[data-modal-thumbs]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const caseButtons = document.querySelectorAll("[data-case]");
const caseResult = document.querySelector("[data-case-result]");

const phoneNumber = "+36 20 667 1832";

const galleries = {
  station: [
    {
      src: "https://images.unsplash.com/photo-1709536240401-58dff8e8d597?auto=format&fit=crop&w=1400&q=84",
      alt: "Üzemanyagpisztoly autó tanknyílásánál",
    },
    {
      src: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?auto=format&fit=crop&w=1400&q=84",
      alt: "Autó tankolása benzinkúton",
    },
    {
      src: "https://images.unsplash.com/photo-1635627529674-912a0176c6cc?auto=format&fit=crop&w=1400&q=84",
      alt: "Üzemanyagpisztoly közelről",
    },
    {
      src: "https://images.unsplash.com/photo-1709536240401-ae8f6ca55e18?auto=format&fit=crop&w=1400&q=84",
      alt: "Tankolási helyzet benzinkúton",
    },
  ],
  diesel: [
    {
      src: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?auto=format&fit=crop&w=1400&q=84",
      alt: "Autó tankolása benzinkúton",
    },
    {
      src: "https://images.unsplash.com/photo-1709536240401-58dff8e8d597?auto=format&fit=crop&w=1400&q=84",
      alt: "Tankolási hiba helyzet",
    },
    {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=84",
      alt: "Autó motortere javítás közben",
    },
    {
      src: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1400&q=84",
      alt: "Autós szerszámok és javítási környezet",
    },
  ],
  petrol: [
    {
      src: "https://images.unsplash.com/photo-1635627529674-912a0176c6cc?auto=format&fit=crop&w=1400&q=84",
      alt: "Üzemanyagpisztoly közelről",
    },
    {
      src: "https://images.unsplash.com/photo-1709536240401-ae8f6ca55e18?auto=format&fit=crop&w=1400&q=84",
      alt: "Tankolási helyzet benzinkúton",
    },
    {
      src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1400&q=84",
      alt: "Autószerelő munka közben",
    },
    {
      src: "https://images.unsplash.com/photo-1591179535738-0fe38055847b?auto=format&fit=crop&w=1400&q=84",
      alt: "Autós helyszíni munkafelszerelés",
    },
  ],
  engine: [
    {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=84",
      alt: "Autó motortere javítás közben",
    },
    {
      src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1400&q=84",
      alt: "Autószerelő munka közben",
    },
    {
      src: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1400&q=84",
      alt: "Autós szerszámok és javítási környezet",
    },
    {
      src: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?auto=format&fit=crop&w=1400&q=84",
      alt: "Benzinkúti helyzet autóval",
    },
  ],
  equipment: [
    {
      src: "https://images.unsplash.com/photo-1591179535738-0fe38055847b?auto=format&fit=crop&w=1400&q=84",
      alt: "Autós kéziszerszám és helyszíni munkafelszerelés",
    },
    {
      src: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1400&q=84",
      alt: "Autós szerszámok és javítási környezet",
    },
    {
      src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1400&q=84",
      alt: "Autószerelő munka közben",
    },
    {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=84",
      alt: "Autó motortere javítás közben",
    },
  ],
};

const caseMessages = {
  "not-started": {
    title: "Még ne indítsa be, és ne adja rá a gyújtást.",
    text: "Maradjon biztonságos helyen, készítse elő az autó típusát, az üzemanyag fajtáját és a betöltött mennyiséget, majd telefonáljon.",
  },
  ignition: {
    title: "Ne próbálkozzon további indítással.",
    text: "Mondja el telefonon, hogy a gyújtás már rá lett adva. Ez fontos, mert egyes autóknál az üzemanyag-szivattyú ilyenkor már dolgozhat.",
  },
  driven: {
    title: "Állítsa le biztonságosan, és ne menjen tovább.",
    text: "Ha már ment az autóval, számít, mennyi ideig járt a motor és milyen tünetet tapasztalt. Ezt telefonon röviden egyeztetjük.",
  },
  unknown: {
    title: "Ne találgasson, inkább egyeztessünk röviden.",
    text: "Ha nem biztos benne, mi került a tankba vagy pontosan mi történt, telefonon pár kérdéssel tisztázható a helyzet.",
  },
};

let activeGallery = [];
let activeImageIndex = 0;

const isDesktopBrowser = () =>
  !/Android|iPhone|iPad|iPod|Windows Phone|Mobi/i.test(navigator.userAgent);

const renderGallery = () => {
  const image = activeGallery[activeImageIndex];
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalCount.textContent = `${activeImageIndex + 1} / ${activeGallery.length}`;
  modalThumbs.innerHTML = "";

  activeGallery.forEach((galleryImage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `modal-thumb${index === activeImageIndex ? " is-active" : ""}`;
    button.setAttribute("aria-label", `${index + 1}. kép megnyitása`);

    const thumb = document.createElement("img");
    thumb.src = galleryImage.src;
    thumb.alt = "";

    button.append(thumb);
    button.addEventListener("click", () => {
      activeImageIndex = index;
      renderGallery();
    });
    modalThumbs.append(button);
  });
};

const openModal = (trigger) => {
  activeGallery = galleries[trigger.dataset.gallery] || galleries.station;
  activeImageIndex = 0;
  modalTitle.textContent = trigger.dataset.title || "Félretankolás mentés";
  modalText.textContent =
    trigger.dataset.text || "Telefonos egyeztetés után gyorsan tisztázható a következő lépés.";
  renderGallery();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
};

const moveGallery = (direction) => {
  activeImageIndex = (activeImageIndex + direction + activeGallery.length) % activeGallery.length;
  renderGallery();
};

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

phoneActions.forEach((phoneAction) => {
  phoneAction.dataset.originalText = phoneAction.textContent;

  phoneAction.addEventListener("click", async (event) => {
    if (!isDesktopBrowser()) {
      return;
    }

    event.preventDefault();

    try {
      await navigator.clipboard.writeText(phoneNumber);
      phoneAction.textContent = `Kimásolva: ${phoneNumber}`;
    } catch {
      phoneAction.textContent = phoneNumber;
    }

    window.setTimeout(() => {
      phoneAction.textContent = phoneAction.dataset.originalText;
    }, 1800);
  });
});

caseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    caseButtons.forEach((caseButton) => caseButton.classList.remove("is-active"));
    button.classList.add("is-active");

    const message = caseMessages[button.dataset.case];
    caseResult.querySelector("h3").textContent = message.title;
    caseResult.querySelector("p:last-child").textContent = message.text;
  });
});

galleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openModal(trigger));

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(trigger);
    }
  });
});

galleryPrev.addEventListener("click", () => moveGallery(-1));
galleryNext.addEventListener("click", () => moveGallery(1));

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }

  if (!modal.classList.contains("is-open")) {
    return;
  }

  if (event.key === "ArrowLeft") {
    moveGallery(-1);
  }

  if (event.key === "ArrowRight") {
    moveGallery(1);
  }
});
