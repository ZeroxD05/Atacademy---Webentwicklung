// Challenges data (30 tasks with tips)
const challenges = [
  {
    id: 1,
    type: "coding",
    title: "Basic HTML: Cat Photo App - Step 1",
    instructions: 'Add an h1 element with the text "CatPhotoApp".',
    starterCode: "<html><body></body></html>",
    test: function (code) {
      return /<h1>CatPhotoApp<\/h1>/.test(code);
    },
    tips: [
      "Use the <h1> tag for the main heading.",
      'Ensure the text inside <h1> is exactly "CatPhotoApp".',
      "Place the <h1> tag inside the <body>.",
    ],
  },
  {
    id: 2,
    type: "coding",
    title: "Basic HTML: Cat Photo App - Step 2",
    instructions: 'Add a paragraph with "See more cat photos in our gallery."',
    starterCode: "<html><body><h1>CatPhotoApp</h1></body></html>",
    test: function (code) {
      return /<p>See more cat photos in our gallery\.<\/p>/.test(code);
    },
    tips: [
      "Use the <p> tag for paragraphs.",
      "Match the text exactly, including the period.",
      "Place the <p> tag after the <h1>.",
    ],
  },
  {
    id: 3,
    type: "quiz",
    title: "Quiz: HTML Basics",
    instructions:
      '<div class="quiz-container"><h3>What does HTML stand for?</h3><div class="quiz-option"><input type="radio" name="q3" value="a" id="q3a"><label for="q3a">Hyper Text Markup Language</label></div><div class="quiz-option"><input type="radio" name="q3" value="b" id="q3b"><label for="q3b">Hyperlinks and Text Markup Language</label></div><div class="quiz-option"><input type="radio" name="q3" value="c" id="q3c"><label for="q3c">Home Tool Markup Language</label></div><div class="quiz-feedback" id="quiz-feedback">Please select an option.</div></div>',
    starterCode: "",
    test: function (input) {
      return input === "a";
    },
    tips: [
      "HTML is about structuring content on the web.",
      'Focus on the term "Markup Language".',
      "Eliminate options that sound unrelated to web tech.",
    ],
  },
  {
    id: 4,
    type: "coding",
    title: "Basic CSS: Cafe Menu - Step 1",
    instructions:
      "Add a style element and set body background-color to burlywood.",
    starterCode: "<html><head></head><body><h1>Cafe Menu</h1></body></html>",
    test: function (code) {
      return /body\s*{\s*background-color:\s*burlywood;\s*}/.test(code);
    },
    tips: [
      "Add a <style> tag in the <head>.",
      "Use the CSS property background-color.",
      'Ensure "burlywood" is spelled correctly.',
    ],
  },
  {
    id: 5,
    type: "coding",
    title: "Basic CSS: Cafe Menu - Step 2",
    instructions: "Set h1 color to brown.",
    starterCode:
      "<html><head><style>body { background-color: burlywood; }</style></head><body><h1>Cafe Menu</h1></body></html>",
    test: function (code) {
      return /h1\s*{\s*color:\s*brown;\s*}/.test(code);
    },
    tips: [
      "Add the h1 rule inside the <style> tag.",
      "Use the CSS property color.",
      'Ensure "brown" is spelled correctly.',
    ],
  },
  {
    id: 6,
    type: "fill-blank",
    title: "Fill in the Blank: CSS Selector",
    instructions: "To select all paragraphs, use _____ { color: blue; }",
    starterCode: "",
    test: function (input) {
      return input && input.trim().toLowerCase() === "p";
    },
    tips: [
      "Think of the HTML tag for paragraphs.",
      "CSS selectors often match tag names directly.",
      "The answer is a single letter.",
    ],
  },
  {
    id: 7,
    type: "coding",
    title: "Applied Visual Design: Text Align",
    instructions: "Center h2 text with text-align: center;",
    starterCode:
      "<html><head><style></style></head><body><h2>Centered Text</h2></body></html>",
    test: function (code) {
      return /h2\s*{\s*text-align:\s*center;\s*}/.test(code);
    },
    tips: [
      "Add the h2 rule in the <style> tag.",
      "Use text-align: center; exactly.",
      'Ensure no typos in "center".',
    ],
  },
  {
    id: 8,
    type: "quiz",
    title: "Quiz: Block vs Inline",
    instructions:
      '<div class="quiz-container"><h3>Which is a block element?</h3><div class="quiz-option"><input type="radio" name="q8" value="a" id="q8a"><label for="q8a">&lt;span&gt;</label></div><div class="quiz-option"><input type="radio" name="q8" value="b" id="q8b"><label for="q8b">&lt;div&gt;</label></div><div class="quiz-option"><input type="radio" name="q8" value="c" id="q8c"><label for="q8c">&lt;img&gt;</label></div><div class="quiz-feedback" id="quiz-feedback">Please select an option.</div></div>',
    starterCode: "",
    test: function (input) {
      return input === "b";
    },
    tips: [
      "Block elements take the full width.",
      "Inline elements sit within a line of text.",
      'Think about which tag creates a new "block".',
    ],
  },
  {
    id: 9,
    type: "coding",
    title: "Responsive Principles: Media Query",
    instructions:
      "Add a media query for max-width: 600px setting body background to lightblue.",
    starterCode: "<html><head><style></style></head><body></body></html>",
    test: function (code) {
      return /@media\s*\(max-width:\s*600px\)\s*{\s*body\s*{\s*background:\s*lightblue;\s*}\s*}/.test(
        code
      );
    },
    tips: [
      "Use @media (max-width: 600px) in <style>.",
      "Apply background: lightblue; to body.",
      "Ensure proper syntax for media queries.",
    ],
  },
  {
    id: 10,
    type: "coding",
    title: "CSS Flexbox: Display Flex",
    instructions: "Set .container to display: flex;",
    starterCode:
      '<html><head><style>.container { }</style></head><body><div class="container"><div>1</div><div>2</div></div></body></html>',
    test: function (code) {
      return /\.container\s*{\s*display:\s*flex;\s*}/.test(code);
    },
    tips: [
      "Add display: flex; to .container.",
      "Ensure the class selector starts with a dot.",
      "Check for correct CSS syntax.",
    ],
  },
  {
    id: 11,
    type: "project",
    title: "Project: Tribute Page",
    instructions:
      'Build a tribute page with id="main", title, image with id="img-div", caption, and tribute info. Use media queries for responsiveness.',
    starterCode:
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Tribute Page</title><style></style></head><body></body></html>',
    test: function (code) {
      return (
        code.includes('<main id="main">') &&
        code.includes('<img id="image"') &&
        code.includes('id="tribute-info"') &&
        /@media/.test(code)
      );
    },
    tips: [
      'Include a <main> with id="main".',
      'Add an image inside a div with id="img-div".',
      "Use @media for responsive styling.",
    ],
  },
  {
    id: 12,
    type: "coding",
    title: "CSS Grid: Display Grid",
    instructions: "Set .grid to display: grid; with 2 columns.",
    starterCode:
      '<html><head><style>.grid { }</style></head><body><div class="grid"><div>1</div><div>2</div></div></body></html>',
    test: function (code) {
      return /\.grid\s*{\s*display:\s*grid;\s*grid-template-columns:\s*(auto|1fr)\s*(auto|1fr);\s*}/.test(
        code
      );
    },
    tips: [
      "Use display: grid; for .grid.",
      "Add grid-template-columns: auto auto; or similar.",
      "Ensure the class selector starts with a dot.",
    ],
  },
  {
    id: 13,
    type: "fill-blank",
    title: "Fill in the Blank: Flex Direction",
    instructions: "To stack flex items vertically, use flex-direction: _____;",
    starterCode: "",
    test: function (input) {
      return input && input.trim().toLowerCase() === "column";
    },
    tips: [
      "Flex-direction controls item arrangement.",
      "Think of stacking items vertically.",
      "The answer is a single word.",
    ],
  },
  {
    id: 14,
    type: "coding",
    title: "Accessibility: Alt Text",
    instructions: 'Add an img with alt="A cat photo".',
    starterCode: "<html><body></body></html>",
    test: function (code) {
      return /<img\s+[^>]*alt="A cat photo"[^>]*>/.test(code);
    },
    tips: [
      "Use the <img> tag with an alt attribute.",
      "Ensure the alt text matches exactly.",
      "Place the <img> inside the <body>.",
    ],
  },
  {
    id: 15,
    type: "quiz",
    title: "Quiz: Semantic HTML",
    instructions:
      '<div class="quiz-container"><h3>What is semantic HTML?</h3><div class="quiz-option"><input type="radio" name="q15" value="a" id="q15a"><label for="q15a">Using tags like &lt;header&gt;, &lt;footer&gt;</label></div><div class="quiz-option"><input type="radio" name="q15" value="b" id="q15b"><label for="q15b">Styling with CSS</label></div><div class="quiz-option"><input type="radio" name="q15" value="c" id="q15c"><label for="q15c">JavaScript functions</label></div><div class="quiz-feedback" id="quiz-feedback">Please select an option.</div></div>',
    starterCode: "",
    test: function (input) {
      return input === "a";
    },
    tips: [
      "Semantic HTML improves accessibility.",
      "Focus on tags that describe content purpose.",
      "Eliminate options unrelated to HTML structure.",
    ],
  },
  {
    id: 16,
    type: "project",
    title: "Project: Survey Form",
    instructions:
      'Build a survey form with id="survey-form", name, email, number inputs, dropdown, radio, checkboxes, textarea. Make responsive.',
    starterCode:
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Survey Form</title><style></style></head><body></body></html>',
    test: function (code) {
      return (
        code.includes('<form id="survey-form">') &&
        code.includes('<input id="name"') &&
        code.includes("<select") &&
        /@media/.test(code)
      );
    },
    tips: [
      'Use a <form> with id="survey-form".',
      'Include inputs with type="text", "email", "number".',
      "Add @media for responsive design.",
    ],
  },
  {
    id: 17,
    type: "coding",
    title: "Advanced CSS: Box Shadow",
    instructions: "Add box-shadow: 0 0 10px black to .box.",
    starterCode:
      '<html><head><style>.box { }</style></head><body><div class="box"></div></body></html>',
    test: function (code) {
      return /\.box\s*{\s*box-shadow:\s*0\s*0\s*10px\s*black;\s*}/.test(code);
    },
    tips: [
      "Add box-shadow to the .box class.",
      "Use the exact values: 0 0 10px black.",
      "Ensure the rule is in the <style> tag.",
    ],
  },
  {
    id: 18,
    type: "coding",
    title: "Responsive: Viewport Meta",
    instructions:
      'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    starterCode: "<html><head></head><body></body></html>",
    test: function (code) {
      return /<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1.0"\s*\/?>/.test(
        code
      );
    },
    tips: [
      "Add the meta tag in the <head>.",
      "Ensure the content attribute matches exactly.",
      "Self-closing tag is optional.",
    ],
  },
  {
    id: 19,
    type: "fill-blank",
    title: "Fill in the Blank: Grid Gap",
    instructions: "To add space between grid items, use grid-gap: _____px;",
    starterCode: "",
    test: function (input) {
      return input && /^\d+$/.test(input.trim());
    },
    tips: [
      "Grid-gap adds space between grid items.",
      "The answer is any number (e.g., 10).",
      "Ensure you only enter digits.",
    ],
  },
  {
    id: 20,
    type: "project",
    title: "Project: Product Landing Page",
    instructions:
      "Build a landing page with navbar, header, video or form, pricing. Use Flexbox or Grid, make responsive.",
    starterCode:
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Product Landing</title><style></style></head><body></body></html>',
    test: function (code) {
      return (
        code.includes('<nav id="nav-bar">') &&
        (code.includes("display: flex;") || code.includes("display: grid;")) &&
        /@media/.test(code)
      );
    },
    tips: [
      'Include a <nav> with id="nav-bar".',
      "Use display: flex; or display: grid; in CSS.",
      "Add @media for responsiveness.",
    ],
  },
  {
    id: 21,
    type: "coding",
    title: "CSS Variables: Using var()",
    instructions:
      "Define a CSS variable --main-color: #4b0082; and apply it to h1 color.",
    starterCode:
      "<html><head><style>:root { }</style></head><body><h1>Test</h1></body></html>",
    test: function (code) {
      return (
        /:root\s*{\s*--main-color:\s*#4b0082;\s*}/ &&
        /h1\s*{\s*color:\s*var\(--main-color\);\s*}/.test(code)
      );
    },
    tips: [
      "Define --main-color in :root.",
      "Use var(--main-color) for h1 color.",
      "Ensure exact syntax for CSS variables.",
    ],
  },
  {
    id: 22,
    type: "quiz",
    title: "Quiz: CSS Specificity",
    instructions:
      '<div class="quiz-container"><h3>Which selector has highest specificity?</h3><div class="quiz-option"><input type="radio" name="q22" value="a" id="q22a"><label for="q22a">.class</label></div><div class="quiz-option"><input type="radio" name="q22" value="b" id="q22b"><label for="q22b">#id</label></div><div class="quiz-option"><input type="radio" name="q22" value="c" id="q22c"><label for="q22c">element</label></div><div class="quiz-feedback" id="quiz-feedback">Please select an option.</div></div>',
    starterCode: "",
    test: function (input) {
      return input === "b";
    },
    tips: [
      "ID selectors have higher specificity than classes.",
      "Element selectors are the least specific.",
      "Think about which selector targets uniquely.",
    ],
  },
  {
    id: 23,
    type: "coding",
    title: "Responsive Images: Max Width",
    instructions: "Set img to max-width: 100%; height: auto;",
    starterCode:
      '<html><head><style>img { }</style></head><body><img src="cat.jpg"></body></html>',
    test: function (code) {
      return /img\s*{\s*max-width:\s*100%;\s*height:\s*auto;\s*}/.test(code);
    },
    tips: [
      "Add max-width: 100%; to img in <style>.",
      "Use height: auto; to maintain aspect ratio.",
      "Ensure the rule applies to all <img> tags.",
    ],
  },
  {
    id: 24,
    type: "fill-blank",
    title: "Fill in the Blank: Media Query",
    instructions:
      "To target screens smaller than 768px, use @media (max-width: _____px)",
    starterCode: "",
    test: function (input) {
      return input && input.trim() === "768";
    },
    tips: [
      "Media queries use max-width for screen size.",
      "The answer is a number commonly used for tablets.",
      "Ensure you enter only the number 768.",
    ],
  },
  {
    id: 25,
    type: "project",
    title: "Project: Technical Documentation Page",
    instructions:
      'Build a documentation page with id="navbar", main with id="main-doc", at least 5 sections. Use CSS Grid or Flexbox, make responsive.',
    starterCode:
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Tech Docs</title><style></style></head><body></body></html>',
    test: function (code) {
      return (
        code.includes('<nav id="navbar">') &&
        code.includes('<main id="main-doc">') &&
        (code.match(/<section/g) || []).length >= 5 &&
        /@media/.test(code)
      );
    },
    tips: [
      'Include a <nav> with id="navbar".',
      'Use <main id="main-doc"> with 5+ <section>s.',
      "Add @media for responsive layout.",
    ],
  },
  {
    id: 26,
    type: "coding",
    title: "Advanced CSS: Pseudo-Class",
    instructions: "Add hover effect to change .btn background to green.",
    starterCode:
      '<html><head><style>.btn { background: blue; }</style></head><body><button class="btn">Click</button></body></html>',
    test: function (code) {
      return /\.btn:hover\s*{\s*background:\s*green;\s*}/.test(code);
    },
    tips: [
      "Use the :hover pseudo-class for .btn.",
      "Change background to green on hover.",
      "Ensure the rule is in the <style> tag.",
    ],
  },
  {
    id: 27,
    type: "quiz",
    title: "Quiz: CSS Units",
    instructions:
      '<div class="quiz-container"><h3>Which is a relative unit?</h3><div class="quiz-option"><input type="radio" name="q27" value="a" id="q27a"><label for="q27a">px</label></div><div class="quiz-option"><input type="radio" name="q27" value="b" id="q27b"><label for="q27b">rem</label></div><div class="quiz-option"><input type="radio" name="q27" value="c" id="q27c"><label for="q27c">cm</label></div><div class="quiz-feedback" id="quiz-feedback">Please select an option.</div></div>',
    starterCode: "",
    test: function (input) {
      return input === "b";
    },
    tips: [
      "Relative units scale with other elements.",
      "Absolute units like px or cm don’t scale.",
      "Think about units tied to font sizes.",
    ],
  },
  {
    id: 28,
    type: "coding",
    title: "Accessibility: Semantic Elements",
    instructions: 'Replace div with id="header" with a <header> tag.',
    starterCode: '<html><body><div id="header">Welcome</div></body></html>',
    test: function (code) {
      return (
        /<header>[\s\S]*Welcome[\s\S]*<\/header>/.test(code) &&
        !/<div id="header"/.test(code)
      );
    },
    tips: [
      'Replace <div id="header"> with <header>.',
      'Keep the content "Welcome" inside.',
      'Ensure no <div id="header"> remains.',
    ],
  },
  {
    id: 29,
    type: "fill-blank",
    title: "Fill in the Blank: Box Model",
    instructions: "The CSS property to set space outside an element is _____;",
    starterCode: "",
    test: function (input) {
      return input && input.trim().toLowerCase() === "margin";
    },
    tips: [
      "Think about the CSS box model.",
      "Space outside an element is not padding.",
      "The answer is a single word.",
    ],
  },
  {
    id: 30,
    type: "project",
    title: "Project: Personal Portfolio",
    instructions:
      'Build a portfolio with id="navbar", welcome section, projects section with id="projects", at least 4 project tiles, contact links. Use Flexbox or Grid, make responsive.',
    starterCode:
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Portfolio</title><style></style></head><body></body></html>',
    test: function (code) {
      return (
        code.includes('<nav id="navbar">') &&
        code.includes('<section id="welcome-section">') &&
        code.includes('<section id="projects">') &&
        (code.match(/<a[^>]*class="project-tile"/g) || []).length >= 4 &&
        /@media/.test(code)
      );
    },
    tips: [
      'Include a <nav> with id="navbar".',
      "Add a projects section with 4+ project-tile links.",
      "Use @media for responsiveness.",
    ],
  },
];

// Load progress from localStorage
let progress = { completed: [], current: 1 };
try {
  const saved = localStorage.getItem("progress");
  if (saved) {
    progress = JSON.parse(saved);
    if (!progress.completed || !Array.isArray(progress.completed)) {
      progress.completed = [];
    }
    if (
      !progress.current ||
      progress.current < 1 ||
      progress.current > challenges.length
    ) {
      progress.current = 1;
    }
  }
} catch (e) {
  console.error("Error parsing localStorage:", e);
  const instructions = document.getElementById("instructions");
  if (instructions) {
    instructions.innerHTML =
      '<p class="error">Error loading saved progress. Starting fresh.</p>';
  }
}
let currentChallengeId = progress.current || 1;

function loadChallenge(id) {
  const challenge = challenges.find((c) => c.id === id);
  if (!challenge) {
    const instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.innerHTML = '<p class="error">Challenge not found!</p>';
    }
    console.error("Challenge not found for id:", id);
    return;
  }

  try {
    const instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.innerHTML = `<h2>${
        challenge.title
      } (${challenge.type.toUpperCase()})</h2>${challenge.instructions}`;
    }
    const editor = document.getElementById("code-editor");
    const preview = document.querySelector(".preview");
    const tipsContainer = document.getElementById("tips-container");
    const tipsList = document.getElementById("tips-list");
    if (challenge.type === "coding" || challenge.type === "project") {
      editor.value = progress[id] || challenge.starterCode || "";
      editor.style.display = "block";
      preview.style.display = "block";
      updatePreview(editor.value);
    } else {
      editor.value = "";
      editor.style.display = "none";
      preview.style.display = "none";
    }
    // Load tips
    if (tipsList && tipsContainer) {
      tipsList.innerHTML = "";
      (challenge.tips || []).forEach((tip) => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
      });
      tipsContainer.style.display = "none";
    }
    currentChallengeId = id;
    updateNav();
    const nextButton = document.getElementById("next-challenge");
    if (nextButton) {
      nextButton.disabled = !progress.completed.includes(id);
    }
    if (challenge.type === "quiz") {
      const feedback = document.getElementById("quiz-feedback");
      if (feedback) {
        feedback.style.display = "none";
      }
    }
  } catch (e) {
    console.error("Error loading challenge:", e);
    const instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.innerHTML =
        '<p class="error">Error loading challenge. Please try another.</p>';
    }
  }
}

function updatePreview(code) {
  try {
    const iframe = document.getElementById("preview-frame");
    if (iframe) {
      iframe.srcdoc = code || "";
    }
  } catch (e) {
    console.error("Error updating preview:", e);
  }
}

function runTests() {
  const challenge = challenges.find((c) => c.id === currentChallengeId);
  if (!challenge) {
    alert("Challenge not found!");
    console.error("Challenge not found in runTests:", currentChallengeId);
    return;
  }

  let passed = false;
  try {
    if (challenge.type === "coding" || challenge.type === "project") {
      const code = document.getElementById("code-editor").value;
      passed = challenge.test(code);
      if (passed) progress[currentChallengeId] = code;
    } else if (challenge.type === "quiz") {
      const selected = document.querySelector(
        `input[name="q${currentChallengeId}"]:checked`
      );
      const feedback = document.getElementById("quiz-feedback");
      if (!selected) {
        if (feedback) {
          feedback.style.display = "block";
        }
        return;
      }
      if (feedback) {
        feedback.style.display = "none";
      }
      passed = challenge.test(selected.value);
    } else if (challenge.type === "fill-blank") {
      const input = prompt(challenge.instructions);
      passed = input !== null && challenge.test(input);
    }
    if (passed) {
      alert("Tests passed!");
      if (!progress.completed.includes(currentChallengeId)) {
        progress.completed.push(currentChallengeId);
      }
      progress.current = Math.min(currentChallengeId + 1, challenges.length);
      try {
        localStorage.setItem("progress", JSON.stringify(progress));
      } catch (e) {
        console.error("Error saving progress:", e);
        alert("Progress saved locally, but could not save to storage.");
      }
      const nextButton = document.getElementById("next-challenge");
      if (nextButton) {
        nextButton.disabled = false;
      }
      loadChallenge(progress.current);
    } else {
      alert("Tests failed. Try again.");
    }
  } catch (e) {
    console.error("Test error:", e);
    alert("Error running tests. Check console for details.");
  }
}

function nextChallenge() {
  try {
    loadChallenge(currentChallengeId + 1);
  } catch (e) {
    console.error("Error in nextChallenge:", e);
    alert("Error loading next challenge. Check console.");
  }
}

function showTips() {
  try {
    const tipsContainer = document.getElementById("tips-container");
    if (tipsContainer) {
      tipsContainer.style.display =
        tipsContainer.style.display === "block" ? "none" : "block";
    }
  } catch (e) {
    console.error("Error showing tips:", e);
    alert("Error showing tips. Check console.");
  }
}

function updateNav() {
  try {
    const list = document.getElementById("challenge-list");
    if (!list) throw new Error("Challenge list element not found");
    list.innerHTML = "";
    challenges.forEach((ch) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = `${ch.title} (${ch.type})`;
      a.href = "#";
      a.onclick = () => loadChallenge(ch.id);
      if (ch.id === currentChallengeId) a.classList.add("active");
      if (progress.completed.includes(ch.id)) a.classList.add("completed");
      li.appendChild(a);
      list.appendChild(li);
    });
  } catch (e) {
    console.error("Error updating nav:", e);
    const instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.innerHTML =
        '<p class="error">Error loading challenge list.</p>';
    }
  }
}

function toggleNav() {
  try {
    const nav = document.getElementById("nav-menu");
    if (nav) {
      const isOpen = nav.classList.contains("open");
      nav.classList.toggle("open");
      if (isOpen) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    } else {
      console.error("Nav element not found");
    }
  } catch (e) {
    console.error("Error toggling nav:", e);
  }
}

// Initialize event listeners and load challenge
document.addEventListener("DOMContentLoaded", () => {
  try {
    const runTestsButton = document.getElementById("run-tests");
    const nextChallengeButton = document.getElementById("next-challenge");
    const showTipsButton = document.getElementById("show-tips");
    const codeEditor = document.getElementById("code-editor");

    if (runTestsButton) {
      runTestsButton.addEventListener("click", runTests);
    } else {
      console.error("Run Tests button not found");
    }
    if (nextChallengeButton) {
      nextChallengeButton.addEventListener("click", nextChallenge);
    } else {
      console.error("Next Challenge button not found");
    }
    if (showTipsButton) {
      showTipsButton.addEventListener("click", showTips);
    } else {
      console.error("Show Tips button not found");
    }
    if (codeEditor) {
      codeEditor.addEventListener("input", (e) =>
        updatePreview(e.target.value)
      );
    } else {
      console.error("Code editor not found");
    }

    updateNav();
    loadChallenge(currentChallengeId);
  } catch (e) {
    console.error("Initialization error:", e);
    const instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.innerHTML =
        '<p class="error">Failed to initialize. Please refresh or check console.</p>';
    }
  }
});
