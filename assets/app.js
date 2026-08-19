"use strict";

const PROGRAM_START = new Date(2026, 7, 10, 12, 0, 0);
const STORAGE_KEY = "fitmass-legacy-progress-v2";
const WEIGHTS_STORAGE_KEY = "fitmass-legacy-weights-v1";

const exercise = (name, detail, tempo, sets, reps, rest) => ({
  type: "exercise", name, detail, tempo, sets, reps, rest
});

const superset = (rest, exercises, label = "Superset") => ({
  type: "superset", label, rest, exercises
});

const workouts = {
  push: {
    title: "Push",
    blocks: [
      exercise("Développé couché", "Machine convergente, barre libre ou barre guidée", "20X0", "5", "6-6-6-5-5", "libre"),
      exercise("Développé incliné", "Aux haltères - banc à 45/60°", "2010", "3", "12", "60'"),
      exercise("Dips", "Aux barres parallèles", "2010", "1", "30", "minimum"),
      exercise("Écartés semi inclinés", "Banc à 20/30° ou peck deck", "2010", "3", "12", "45'"),
      exercise("Élévations latérales", "Poulie réglée aux genoux", "1010", "3", "15", "45'"),
      exercise("California press", "", "2010", "3", "15", "45'"),
      exercise("French press", "Avec un haltère ou barre EZ - demie amplitude basse", "2010", "2", "15", "45'")
    ]
  },

  pull: {
    title: "Pull",
    blocks: [
      exercise("Tractions", "Ou tirage vertical pronation", "20X0", "5", "6", "libre"),
      exercise("Tirage horizontal", "Unilatéral - focus dorsaux", "2010", "3", "12", "30'"),
      exercise("Tirage bras tendus", "Unilatéral poulie haute - chercher l'étirement", "2010", "3", "12", "20'"),
      exercise("Rowing buste penché", "Aux haltères - focus trapèzes", "1010", "3", "15", "60'"),
      exercise("Écartés arrière d'épaule", "Unilatéral", "2010", "2", "15", "30'"),
      exercise("Curl incliné", "Banc incliné à 60°", "2010", "3", "15", "45'"),
      exercise("Curl barre", "Prise pronation", "2010", "3", "20", "45'")
    ]
  },

  legs: {
    title: "Legs",
    blocks: [
      exercise("Hack Squat", "Ou squat pendule ou squat barre guidé", "30X0", "5", "8-8-6-6-6", "libre"),
      exercise('"Staggered Stance" Squat', "Un côté = une série", "2010", "2", "12", "60'"),
      exercise("Leg extension", "Dossier reculé au maximum", "2010", "3", "15", "45'"),
      exercise("Leg curl", "Assis de préférence", "2010", "3", "15", "45'"),
      exercise("Step up", "Faire toutes les reps d'un côté avant de passer à l'autre", "2020", "2", "15", "40'"),
      exercise("Hyperextensions", "Focus ischios", "2010", "3", "15", "60'"),
      exercise("Mollets debout", "Au poids du corps", "1010", "1", "100", "minimum")
    ]
  },

  upper1: {
    title: "Upper 1",
    blocks: [
      exercise("Tirage vertical", "Prise supination - stretch en fin de série", "20X0", "4", "8 + (15 sec)", "90-120'"),
      exercise("Développé pectoraux machine", "Droit ou décliné, ou Smith machine - double rest-pause sur la dernière série", "20X0", "4", "8", "90-120'"),
      superset("30'", [
        exercise("Tirage bûcheron", "", "101", "3", "8", ""),
        exercise("Développé militaire", "Unilatéral debout", "2010", "3", "8", "")
      ]),
      exercise("Écartés semi inclinés", "Ou pec deck - stretch en fin de série", "3010", "3", "8 + (15 sec)", "60'"),
      exercise("Dips machine", "Ou dips lestés focus triceps - double rest-pause sur la dernière série", "2010", "3", "10-8", "90-120'")
    ]
  },

  lower1: {
    title: "Lower 1",
    blocks: [
      exercise("Fentes bulgares", "Focus fessiers", "2010", "3", "10-8", "45'"),
      exercise("Hack Squat", "Ou squat pendule ou squat guidé", "3010", "4", "10-8", "120-150'"),
      exercise("Leg curl", "Assis de préférence - double rest-pause sur la dernière série", "20X0", "4", "8", "90'"),
      exercise("Soulevé de terre jambes tendues", "Avec barre - stretch en fin de série", "3010", "3", "8", "90-120'"),
      superset("60'", [
        exercise("Mollets à la presse à cuisses", "", "2010", "3", "10", ""),
        exercise("Mollets debout", "Pieds au sol au poids du corps", "rapide", "3", "max", "")
      ])
    ]
  },

  upper2: {
    title: "Upper 2",
    blocks: [
      exercise("Overhead press", "Debout - double rest-pause sur la dernière série", "rapide", "3", "10-8", "90-120'"),
      exercise("Développé semi incliné", "Aux haltères", "20X0", "4", "8-6", "90-120'"),
      exercise("Tirage grand dorsal", "Unilatéral - double dégressif sur la dernière série", "2010", "3", "8", "45'"),
      superset("90'", [
        exercise("Face pull", "Poulie au niveau de la poitrine", "2010", "4", "10", ""),
        exercise("Élévations latérales complètes", "", "2020", "4", "10", "")
      ]),
      exercise("Curl incliné", "Banc incliné à 60° - stretch en fin de série", "2010", "3", "8", "90'")
    ]
  },

  lower2: {
    title: "Lower 2",
    blocks: [
      exercise("Leg extension", "Dossier reculé au maximum - double dégressif sur la dernière série", "20X0", "4", "8", "90'"),
      exercise("Fentes en déplacement", "", "aucun", "3", "16 pas", "90-120'"),
      exercise("Presse à cuisses", "Pieds écartés", "20X0", "4", "10", "90-120'"),
      exercise("Hyperextensions", "Focus ischios", "2010", "4", "10", "60'"),
      exercise("Mollets assis", "Double rest-pause sur la dernière série", "2010", "3", "10", "45'")
    ]
  },

  fullbody1: {
    title: "Full Body 1",
    blocks: [
      exercise("Développé couché", "Barre libre ou barre guidée", "2010", "3", "12", "120'"),
      exercise("Rowing buste penché", "Focus trapèzes / deltoïde postérieur - pronation avec barre", "1010", "4", "15", "90'"),
      exercise("Squat avec cale sous les talons", "Barre libre ou barre guidée - charge = poids du corps - +5 reps à chaque séance", "2010", "1", "50 (rest-pause)", "minimum"),
      exercise("Fentes bulgares", "Focus fessiers - prendre la récupération entre les deux jambes", "2010", "3", "15", "60'"),
      exercise("Développé militaire", "Assis avec haltères - double dégressif sur la dernière série", "2010", "3", "12", "90'"),
      exercise("California press", "Barre guidée si possible - +10 demi-amplitudes rapides en fin de série", "2010", "3", "12 (+10)", "90'")
    ]
  },

  fullbody2: {
    title: "Full Body 2",
    blocks: [
      exercise("Soulevé de terre jambes tendues", "Avec haltères - stretch en fin de série", "2010", "3", "12 (+15 sec)", "120'"),
      exercise("Mollets à la presse à cuisses", "Stretch en fin de série", "2010", "3", "12 (+15 sec)", "45'"),
      exercise("Tirage grand dorsal", "Unilatéral - assis sur banc ou en position fentes", "2010", "3", "15", "45'"),
      exercise("Développé incliné", "À la machine convergente si possible, ou à la barre", "2010", "4", "15", "120'"),
      exercise("Curl Larry Scott", "À la machine, ou spider curl - double dégressif sur la dernière série", "2010", "4", "12", "90'"),
      exercise("Élévations latérales", "Double dégressif sur toutes les séries", "1010", "3", "10+5+5", "90'")
    ]
  },

  pecsdos: {
    title: "Pecs / Dos",
    blocks: [
      exercise("Développé semi incliné", "Aux haltères - inclinaison 20/30°", "20X0", "5", "12-10-8-6-6", "libre"),
      exercise("Tractions pronation", "Ou tirage vertical pronation", "20X0", "5", "12-10-8-6-6", "libre"),
      superset("90'", [
        exercise("Dips", "Lestés si nécessaire", "20X0", "3", "8", ""),
        exercise("Tirage bûcheron", "", "1010", "3", "8", "")
      ]),
      superset("90'", [
        exercise("Pec Deck", "Ou écartés couchés", "2010", "3", "10", ""),
        exercise("Rowing buste penché", "Aux haltères - focus trapèzes", "1010", "3", "10", "")
      ]),
      superset("60'", [
        exercise("Pompes", "", "1010", "4", "max", ""),
        exercise("Shrugs", "Barre libre", "2010", "4", "12", "")
      ])
    ]
  },

  epaulesbras: {
    title: "Épaules / Bras",
    blocks: [
      exercise("Développé militaire", "Barre libre ou guidée", "2010", "4", "10-10-8-6", "120'"),
      exercise("Élévations latérales", "Unilatéral - poulie réglée aux genoux", "2010", "4", "10", "30'"),
      exercise("Écartés arrière d'épaule", "Unilatéral - poulie réglée au visage", "2010", "4", "10", "30'"),
      superset("90'", [
        exercise("Curl incliné", "Banc incliné à 60°", "2010", "4", "10-8-8-6", ""),
        exercise("French press", "Banc incliné à 60°", "2010", "4", "10-8-8-6", "")
      ]),
      superset("90'", [
        exercise("Curl Zottman", "Assis", "2010", "4", "12", ""),
        exercise("Extension Poliquin", "Avec barre droite ou EZ", "2010", "4", "12", "")
      ])
    ]
  },

  jambes: {
    title: "Jambes",
    blocks: [
      exercise("Leg curl", "Assis de préférence", "20X0", "4", "12-8-8-6", "90'"),
      exercise("Leg extension", "Dossier reculé au maximum", "20X0", "4", "12-8-8-6", "90'"),
      exercise("Hack Squat", "Ou squat pendule ou squat guidé - RIR 5", "2010", "1", "15", "/"),
      exercise("Soulevé de terre jambes tendues", "Avec barre", "20X0", "3", "6 à 8", "libre"),
      exercise("Step up", "Toutes les reps d'un côté avant de passer à l'autre", "2010", "2", "10", "45'"),
      exercise("Mollets debout", "Pieds au sol avec barre libre", "1010", "3", "10", "45'")
    ]
  }
};

const schedules = [
  ["push", "pull", "legs"],
  ["push", "pull", "legs"],
  ["push", "pull", "legs"],
  ["push", "pull", "legs"],
  ["upper1", "lower1", "upper2"],
  ["lower2", "upper1", "lower1"],
  ["upper2", "lower2", "upper1"],
  ["lower1", "upper2", "lower2"],
  ["fullbody1", "fullbody2", "fullbody1"],
  ["fullbody2", "fullbody1", "fullbody2"],
  ["fullbody1", "fullbody2", "fullbody1"],
  ["fullbody2", "fullbody1", "fullbody2"],
  ["pecsdos", "epaulesbras", "jambes"],
  ["pecsdos", "epaulesbras", "jambes"],
  ["pecsdos", "epaulesbras", "jambes"],
  ["pecsdos", "epaulesbras", "jambes"]
];

const cycleNames = [
  "Push / Pull / Legs",
  "Upper / Lower",
  "Full Body",
  "Split avancé"
];

const state = { progress: loadProgress(), weights: loadWeights() };

function loadWeights() {
  try {
    const value = JSON.parse(localStorage.getItem(WEIGHTS_STORAGE_KEY));
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

function saveWeights() {
  try { localStorage.setItem(WEIGHTS_STORAGE_KEY, JSON.stringify(state.weights)); } catch {}
}

function loadProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch {}
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function startOfLocalDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
}

function currentWeekIndex() {
  const today = startOfLocalDay(new Date());
  const start = startOfLocalDay(PROGRAM_START);
  const elapsedDays = Math.floor((today - start) / 86400000);
  return Math.min(15, Math.max(0, Math.floor(elapsedDays / 7)));
}

function requestedWeekIndex() {
  const value = document.body.dataset.week || "current";
  if (value === "current") return currentWeekIndex();
  const parsed = Number.parseInt(value, 10) - 1;
  return Number.isFinite(parsed) ? Math.min(15, Math.max(0, parsed)) : currentWeekIndex();
}

function monthName(date, short = false) {
  const name = new Intl.DateTimeFormat("fr-FR", { month: short ? "short" : "long" }).format(date).replace(".", "");
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function dateRange(weekIndex, compact = false) {
  const start = addDays(PROGRAM_START, weekIndex * 7);
  const end = addDays(start, 6);
  const sameMonth = start.getMonth() === end.getMonth();
  if (compact) {
    return sameMonth
      ? `${start.getDate()}-${end.getDate()} ${monthName(start, true)}`
      : `${start.getDate()} ${monthName(start, true)} - ${end.getDate()} ${monthName(end, true)}`;
  }
  return sameMonth
    ? `${start.getDate()}-${end.getDate()} ${monthName(start)}`
    : `${start.getDate()} ${monthName(start)} - ${end.getDate()} ${monthName(end)}`;
}

function weekTitle(weekIndex) {
  const ordinal = weekIndex === 0 ? "1re semaine" : `${weekIndex + 1}e semaine`;
  return `Semaine ${dateRange(weekIndex)} (${ordinal})`;
}

function cycleIndexFor(weekIndex) { return Math.floor(weekIndex / 4); }

function pageHref(weekIndex) { return `semaine-${String(weekIndex + 1).padStart(2, "0")}.html`; }

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function flattenExercises(blocks) {
  return blocks.flatMap(block => block.type === "superset" ? block.exercises : [block]);
}

function workoutExerciseCount(workout) { return flattenExercises(workout.blocks).length; }

function sessionProgress(weekIndex, sessionIndex, count) {
  let done = 0;
  for (let i = 0; i < count; i += 1) {
    if (state.progress[`w${weekIndex + 1}-s${sessionIndex + 1}-e${i}`]) done += 1;
  }
  return { done, count };
}

function weekProgress(weekIndex) {
  let done = 0;
  let count = 0;
  schedules[weekIndex].forEach((key, sessionIndex) => {
    const sessionCount = workoutExerciseCount(workouts[key]);
    const progress = sessionProgress(weekIndex, sessionIndex, sessionCount);
    done += progress.done;
    count += progress.count;
  });
  return { done, count };
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${escapeHtml(value || "-")}</strong></div>`;
}

function targetRepsForSet(reps, setIndex, setCount) {
  const text = String(reps || "").trim();
  const parts = text.split("-").map(part => part.trim()).filter(Boolean);
  if (parts.length === setCount && parts.every(part => /^\d+(?:[.,]\d+)?$/.test(part))) {
    return parts[setIndex] || text;
  }
  return text;
}

function renderSetLoads(item, progressKey) {
  const setCount = Math.max(1, Number.parseInt(item.sets, 10) || 1);
  const fields = Array.from({ length: setCount }, (_, index) => {
    const weightKey = `${progressKey}-set${index + 1}`;
    const value = state.weights[weightKey] ?? "";
    const reps = targetRepsForSet(item.reps, index, setCount);
    return `
      <label class="load-field">
        <span>Série ${index + 1}${reps ? `<small>${escapeHtml(reps)} rep${reps === "1" ? "" : "s"}</small>` : ""}</span>
        <span class="load-input-wrap">
          <input
            type="number"
            inputmode="decimal"
            step="0.5"
            data-weight-key="${weightKey}"
            value="${escapeHtml(value)}"
            placeholder="0"
            aria-label="${escapeHtml(item.name)} - série ${index + 1} - charge en kilogrammes">
          <span>kg</span>
        </span>
      </label>`;
  }).join("");

  return `
    <div class="set-loads">
      <div class="set-loads-head">
        <strong>Charges par série</strong>
        <span class="load-saved-note">Sauvegarde automatique</span>
      </div>
      <div class="set-loads-grid">${fields}</div>
    </div>`;
}

function renderExerciseCard(item, progressKey) {
  const isDone = Boolean(state.progress[progressKey]);
  return `
    <article class="exercise-card${isDone ? " is-done" : ""}">
      <div class="exercise-top">
        <div>
          <h3>${escapeHtml(item.name)}</h3>
          ${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}
        </div>
        <label class="done-check">
          <input type="checkbox" data-progress-key="${progressKey}" ${isDone ? "checked" : ""}>
          Terminé
        </label>
      </div>
      <div class="metrics">
        ${metric("Tempo", item.tempo)}
        ${metric("Séries", item.sets)}
        ${metric("Reps", item.reps)}
        ${metric("Repos", item.rest)}
      </div>
      ${renderSetLoads(item, progressKey)}
    </article>`;
}

function renderWorkoutBlocks(blocks, weekIndex, sessionIndex) {
  let exerciseIndex = 0;
  return blocks.map(block => {
    if (block.type === "exercise") {
      const key = `w${weekIndex + 1}-s${sessionIndex + 1}-e${exerciseIndex++}`;
      return renderExerciseCard(block, key);
    }
    const cards = block.exercises.map(item => {
      const key = `w${weekIndex + 1}-s${sessionIndex + 1}-e${exerciseIndex++}`;
      return renderExerciseCard({ ...item, rest: item.rest || `après le bloc : ${block.rest}` }, key);
    }).join("");
    return `
      <section class="superset" aria-label="${escapeHtml(block.label)}">
        <div class="superset-head">
          <strong>${escapeHtml(block.label)}</strong>
          <span>Repos après le bloc : ${escapeHtml(block.rest)}</span>
        </div>
        ${cards}
      </section>`;
  }).join("");
}

function programStatus(weekIndex) {
  const today = startOfLocalDay(new Date());
  const start = startOfLocalDay(PROGRAM_START);
  const end = startOfLocalDay(addDays(PROGRAM_START, 111));
  const isHome = document.body.dataset.week === "current";
  if (!isHome) return "";
  if (today < start) {
    const days = Math.ceil((start - today) / 86400000);
    return `Le programme commence dans ${days} jour${days > 1 ? "s" : ""}. La semaine 1 est affichée en préparation.`;
  }
  if (today > end) return "Le programme est terminé. La dernière semaine reste affichée sur l'accueil.";
  return `Semaine en cours : ${weekIndex + 1} sur 16.`;
}

function renderMenu(activeWeek) {
  const current = currentWeekIndex();
  const isHome = document.body.dataset.week === "current";
  const nav = document.getElementById("weekNav");
  nav.innerHTML = schedules.map((_, index) => `
    <a class="week-link${!isHome && activeWeek === index ? " is-active" : ""}" href="${pageHref(index)}" ${!isHome && activeWeek === index ? 'aria-current="page"' : ""}>
      <span class="week-link-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="week-link-copy">
        <strong>Semaine ${index + 1}</strong>
        <span>${dateRange(index, true)} · ${cycleNames[cycleIndexFor(index)]}</span>
      </span>
      ${index === current ? '<span class="menu-badge">En cours</span>' : ""}
    </a>`).join("");

  document.querySelector(".drawer-home")?.classList.toggle("is-active", isHome);
  if (isHome) document.querySelector(".drawer-home")?.setAttribute("aria-current", "page");
}

function renderPage(weekIndex) {
  const cycleIndex = cycleIndexFor(weekIndex);
  const schedule = schedules[weekIndex];
  const weekProg = weekProgress(weekIndex);
  const status = programStatus(weekIndex);
  const isHome = document.body.dataset.week === "current";

  document.title = `${isHome ? "Semaine en cours" : `Semaine ${weekIndex + 1}`} - Fitmass Legacy`;
  document.querySelector("meta[name='description']")?.setAttribute("content", `${weekTitle(weekIndex)} - 3 séances du programme Fitmass Legacy Advanced.`);
  document.getElementById("heroEyebrow").textContent = isHome ? "Accueil · semaine en cours" : `Cycle ${cycleIndex + 1} · ${cycleNames[cycleIndex]}`;
  document.getElementById("heroTitle").innerHTML = isHome
    ? `Ta semaine <span>en cours</span>`
    : `Semaine <span>${String(weekIndex + 1).padStart(2, "0")}</span>`;
  document.getElementById("heroCopy").textContent = isHome
    ? "La page d'accueil affiche automatiquement la semaine correspondant à la date du jour. Les autres semaines sont accessibles depuis le menu."
    : "Cette page contient uniquement les trois séances de la semaine sélectionnée.";
  document.getElementById("headerCurrentWeek").innerHTML = `<strong>S${weekIndex + 1}</strong> · ${dateRange(weekIndex, true)}`;

  document.getElementById("weekMount").innerHTML = `
    <section class="progress-panel" aria-label="Progression de la semaine">
      <div>
        <div class="progress-copy">
          <strong>Progression de la semaine</strong>
          <span id="weekProgressText">${weekProg.done}/${weekProg.count} exercices</span>
        </div>
        <div class="progress-track" aria-hidden="true"><div class="progress-fill" id="weekProgressFill"></div></div>
      </div>
      <button class="small-button" id="resetWeek" type="button">Réinitialiser la semaine</button>
    </section>
    <section class="week-overview">
      <div class="week-number">${String(weekIndex + 1).padStart(2, "0")}</div>
      <div>
        <h2>${escapeHtml(weekTitle(weekIndex))}</h2>
        <p>Cycle ${cycleIndex + 1} · ${escapeHtml(cycleNames[cycleIndex])} · 3 séances</p>
      </div>
    </section>
    ${status ? `<p class="status-note">${escapeHtml(status)}</p>` : ""}
    <section class="sessions-list" aria-label="Séances de la semaine">
      ${schedule.map((workoutKey, sessionIndex) => {
        const workout = workouts[workoutKey];
        const count = workoutExerciseCount(workout);
        const progress = sessionProgress(weekIndex, sessionIndex, count);
        const sessionId = `session-${weekIndex + 1}-${sessionIndex + 1}`;
        return `
          <article class="session-card" data-session-card>
            <button class="session-toggle" type="button" aria-expanded="false" aria-controls="${sessionId}">
              <span class="session-index">${sessionIndex + 1}</span>
              <span class="session-main">
                <strong>${escapeHtml(workout.title)}</strong>
                <span data-session-progress="${sessionIndex}">${progress.done}/${progress.count} exercices terminés</span>
              </span>
              <span class="chevron" aria-hidden="true"></span>
            </button>
            <div class="collapse" id="${sessionId}">
              <div class="collapse-inner">
                <div class="session-content">
                  <div class="session-intro"><span>Séance ${sessionIndex + 1} · ${escapeHtml(workout.title)}</span><span>${count} exercices</span></div>
                  <div class="exercise-list">${renderWorkoutBlocks(workout.blocks, weekIndex, sessionIndex)}</div>
                </div>
              </div>
            </div>
          </article>`;
      }).join("")}
    </section>
    <nav class="week-pagination" aria-label="Navigation entre les semaines">
      <a class="${weekIndex === 0 ? "is-disabled" : ""}" href="${weekIndex === 0 ? "#" : pageHref(weekIndex - 1)}">
        <small>Semaine précédente</small><strong>${weekIndex === 0 ? "Début du programme" : `Semaine ${weekIndex}`}</strong>
      </a>
      <a class="${weekIndex === 15 ? "is-disabled" : ""}" href="${weekIndex === 15 ? "#" : pageHref(weekIndex + 1)}">
        <small>Semaine suivante</small><strong>${weekIndex === 15 ? "Fin du programme" : `Semaine ${weekIndex + 2}`}</strong>
      </a>
    </nav>`;

  updateProgressLabels(weekIndex);
  bindSessions();
  bindProgress(weekIndex);
  bindWeights();
  bindReset(weekIndex);
}

function updateProgressLabels(weekIndex) {
  const weekProg = weekProgress(weekIndex);
  const percent = weekProg.count ? (weekProg.done / weekProg.count) * 100 : 0;
  const fill = document.getElementById("weekProgressFill");
  const label = document.getElementById("weekProgressText");
  if (fill) fill.style.width = `${percent}%`;
  if (label) label.textContent = `${weekProg.done}/${weekProg.count} exercices · ${Math.round(percent)}%`;

  schedules[weekIndex].forEach((key, sessionIndex) => {
    const count = workoutExerciseCount(workouts[key]);
    const progress = sessionProgress(weekIndex, sessionIndex, count);
    const sessionLabel = document.querySelector(`[data-session-progress="${sessionIndex}"]`);
    if (sessionLabel) sessionLabel.textContent = `${progress.done}/${progress.count} exercices terminés`;
  });
}

function bindSessions() {
  document.querySelectorAll(".session-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-session-card]");
      const willOpen = !card.classList.contains("is-open");
      document.querySelectorAll("[data-session-card]").forEach(other => {
        if (other !== card) {
          other.classList.remove("is-open");
          other.querySelector(":scope > .session-toggle")?.setAttribute("aria-expanded", "false");
        }
      });
      card.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });
}

function bindProgress(weekIndex) {
  document.getElementById("weekMount").addEventListener("change", event => {
    const input = event.target.closest("input[data-progress-key]");
    if (!input) return;
    const key = input.dataset.progressKey;
    state.progress[key] = input.checked;
    if (!input.checked) delete state.progress[key];
    input.closest(".exercise-card")?.classList.toggle("is-done", input.checked);
    saveProgress();
    updateProgressLabels(weekIndex);
  });
}

function bindWeights() {
  const mount = document.getElementById("weekMount");
  if (!mount) return;

  mount.addEventListener("input", event => {
    const input = event.target.closest("input[data-weight-key]");
    if (!input) return;
    const key = input.dataset.weightKey;
    const value = input.value.trim();
    if (value === "") delete state.weights[key];
    else state.weights[key] = value;
    saveWeights();
  });
}

function bindReset(weekIndex) {
  document.getElementById("resetWeek")?.addEventListener("click", () => {
    if (!window.confirm(`Réinitialiser la progression de la semaine ${weekIndex + 1} ?`)) return;
    Object.keys(state.progress).forEach(key => {
      if (key.startsWith(`w${weekIndex + 1}-`)) delete state.progress[key];
    });
    saveProgress();
    document.querySelectorAll("input[data-progress-key]").forEach(input => {
      input.checked = false;
      input.closest(".exercise-card")?.classList.remove("is-done");
    });
    updateProgressLabels(weekIndex);
  });
}

function bindMenu() {
  const drawer = document.getElementById("menuDrawer");
  const overlay = document.getElementById("menuOverlay");
  const openButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("menuClose");
  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("menu-open");
    openButton.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    closeButton.focus();
  }

  function closeMenu() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    openButton.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    lastFocused?.focus();
  }

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", event => { if (event.key === "Escape" && drawer.classList.contains("is-open")) closeMenu(); });
}

const activeWeek = requestedWeekIndex();
renderMenu(activeWeek);
renderPage(activeWeek);
bindMenu();
