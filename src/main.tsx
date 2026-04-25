import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpenText,
  CheckCircle2,
  Filter,
  GraduationCap,
  Languages,
  LibraryBig,
  Search,
  Sparkles,
} from "lucide-react";
import "./styles.css";

type Example = {
  kannada: string;
  meaning: string;
};

type GrammarModule = {
  id: number;
  title: string;
  kannadaTitle: string;
  category: string;
  level: "Foundation" | "Structure" | "Usage";
  focus: string;
  learnersUse: string;
  lesson: {
    intro: string;
    keyPoints: string[];
    examples: Example[];
    practice: string[];
  };
};

const grammarModules: GrammarModule[] = [
  {
    id: 1,
    title: "Kannada Alphabet",
    kannadaTitle: "ಕನ್ನಡ ವರ್ಣಮಾಲೆ",
    category: "Script",
    level: "Foundation",
    focus: "ಸ್ವರಗಳು, ವ್ಯಂಜನಗಳು, ಧ್ವನಿ-ಅಕ್ಷರ ಸಂಬಂಧ",
    learnersUse: "ಕನ್ನಡ ಓದುವ ಆರಂಭಕ್ಕೆ ಬೇಕಾದ ಅಕ್ಷರ ಗುರುತಿಸುವಿಕೆ.",
    lesson: {
      intro:
        "ಕನ್ನಡವನ್ನು ಎಡದಿಂದ ಬಲಕ್ಕೆ ಬರೆಯಲಾಗುತ್ತದೆ. ಪ್ರತಿ ಅಕ್ಷರವು ಒಂದು ಧ್ವನಿಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಸ್ವರಗಳು ಸ್ವತಂತ್ರವಾಗಿ ಬರಬಹುದು; ವ್ಯಂಜನಗಳಿಗೆ ಸ್ವರ ಸೇರಿಸಿದಾಗ ಪೂರ್ಣ ಅಕ್ಷರ ರೂಪ ಸಿಗುತ್ತದೆ.",
      keyPoints: [
        "ಮುಖ್ಯ ಸ್ವರಗಳು: ಅ, ಆ, ಇ, ಈ, ಉ, ಊ, ಋ, ಎ, ಏ, ಐ, ಒ, ಓ, ಔ.",
        "ವರ್ಗೀಯ ವ್ಯಂಜನಗಳು ಉಚ್ಚಾರಣಾ ಸ್ಥಾನಗಳ ಪ್ರಕಾರ ಗುಂಪಾಗುತ್ತವೆ: ಕವರ್ಗ, ಚವರ್ಗ, ಟವರ್ಗ, ತವರ್ಗ, ಪವರ್ಗ.",
        "ಅವರ್ಗೀಯ ವ್ಯಂಜನಗಳು: ಯ, ರ, ಲ, ವ, ಶ, ಷ, ಸ, ಹ, ಳ.",
        "ಕನ್ನಡ ವ್ಯಂಜನದಲ್ಲಿ ಸಹಜವಾಗಿ 'ಅ' ಧ್ವನಿ ಇರುತ್ತದೆ: ಕ = ಕ ಧ್ವನಿ, ಮ = ಮ ಧ್ವನಿ.",
      ],
      examples: [
        { kannada: "ಅರಿವು", meaning: "ಸ್ವರದಿಂದ ಆರಂಭವಾಗುವ ಪದ." },
        { kannada: "ಕಾಡು", meaning: "ವ್ಯಂಜನ ಮತ್ತು ದೀರ್ಘಸ್ವರ ಇರುವ ಪದ." },
        { kannada: "ಬೆಳಕು", meaning: "ವಿವಿಧ ಸ್ವರಚಿಹ್ನೆಗಳಿರುವ ಪದ." },
        { kannada: "ಹೊಸತನ", meaning: "ಹ, ಸ, ತ, ನ ವ್ಯಂಜನಗಳ ಅಭ್ಯಾಸ." },
      ],
      practice: ["ಸ್ವರಗಳನ್ನು ಕ್ರಮವಾಗಿ ಓದಿ ಬರೆಯಿರಿ.", "ಕ, ಚ, ಟ, ತ, ಪ ವರ್ಗಗಳಲ್ಲಿ ಪ್ರತಿ ವರ್ಗದ ಐದು ಅಕ್ಷರಗಳನ್ನು ಹೇಳಿ.", "ನಿಮ್ಮ ಹೆಸರಿನ ಅಕ್ಷರಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ ಬರೆಯಿರಿ."],
    },
  },
  {
    id: 2,
    title: "Additional Features of Kannada Alphabet",
    kannadaTitle: "ಹೆಚ್ಚುವರಿ ಗುಣಗಳು",
    category: "Script",
    level: "Foundation",
    focus: "ಸ್ವರಚಿಹ್ನೆಗಳು, ಅನುಸ್ವಾರ, ವಿಸರ್ಗ, ಅರ್ಧಾಕ್ಷರ",
    learnersUse: "ಪೂರ್ಣ ಪದಗಳನ್ನು ಓದುವಾಗ ಕಾಣುವ ಚಿಹ್ನೆಗಳನ್ನು ಗುರುತಿಸಲು.",
    lesson: {
      intro:
        "ಸ್ವರವು ವ್ಯಂಜನಕ್ಕೆ ಸೇರಿದಾಗ ಸ್ವರಚಿಹ್ನೆಯಾಗಿ ಕಾಣುತ್ತದೆ. ಕ + ಿ = ಕಿ, ಕ + ೂ = ಕೂ. ಅನುಸ್ವಾರ, ವಿಸರ್ಗ, ಒತ್ತು ಮುಂತಾದ ಗುರುತುಗಳು ಪದದ ಉಚ್ಚಾರಣೆ ಮತ್ತು ರೂಪವನ್ನು ಬದಲಾಯಿಸುತ್ತವೆ.",
      keyPoints: [
        "ಸ್ವತಂತ್ರ ಸ್ವರ: ಇ. ವ್ಯಂಜನಕ್ಕೆ ಸೇರಿದ ಸ್ವರಚಿಹ್ನೆ: ಕಿ.",
        "ಅನುಸ್ವಾರ: ಅಂ. ಉದಾಹರಣೆ: ಅಂಕ, ಸಂಚಯ.",
        "ವಿಸರ್ಗ: ಅಃ. ಇದು ಸಂಸ್ಕೃತ ಮೂಲದ ಪದಗಳಲ್ಲಿ ಹೆಚ್ಚು ಕಾಣಿಸುತ್ತದೆ.",
        "ಅರ್ಧಾಕ್ಷರ ಎಂದರೆ ಸಹಜ 'ಅ' ಇಲ್ಲದ ವ್ಯಂಜನ ರೂಪ.",
      ],
      examples: [
        { kannada: "ಗ + ಿ = ಗಿ", meaning: "ವ್ಯಂಜನಕ್ಕೆ ಇ ಸ್ವರಚಿಹ್ನೆ ಸೇರಿದ ರೂಪ." },
        { kannada: "ದ + ೋ = ದೋ", meaning: "ದ ವ್ಯಂಜನಕ್ಕೆ ಓ ಸ್ವರಚಿಹ್ನೆ ಸೇರಿದ ರೂಪ." },
        { kannada: "ಸಂಪತ್ತು", meaning: "ಅನುಸ್ವಾರ ಮತ್ತು ಒತ್ತಕ್ಷರ ಕಾಣುವ ಪದ." },
        { kannada: "ಶಾಂತಿಃ", meaning: "ವಿಸರ್ಗ ಗುರುತನ್ನು ಗಮನಿಸಲು ಮಾದರಿ ರೂಪ." },
      ],
      practice: ["ಕ ಅಕ್ಷರಕ್ಕೆ ಎಲ್ಲಾ ಸ್ವರಚಿಹ್ನೆಗಳನ್ನು ಸೇರಿಸಿ ಬರೆಯಿರಿ.", "ಅನುಸ್ವಾರ ಇರುವ ಐದು ಪದಗಳನ್ನು ಹುಡುಕಿ.", "ಕಾ, ಕಿ, ಕು, ಕೆ, ಕೋ ಧ್ವನಿಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಓದಿ."],
    },
  },
  {
    id: 3,
    title: "Consonant Clusters",
    kannadaTitle: "ಒತ್ತಕ್ಷರಗಳು",
    category: "Script",
    level: "Foundation",
    focus: "ಎರಡು ಅಥವಾ ಹೆಚ್ಚು ವ್ಯಂಜನಗಳ ಸಂಯೋಜನೆ",
    learnersUse: "ಒತ್ತಕ್ಷರ ಇರುವ ಪದಗಳನ್ನು ಸುಲಭವಾಗಿ ಓದಲು.",
    lesson: {
      intro:
        "ಒತ್ತಕ್ಷರದಲ್ಲಿ ಒಂದು ವ್ಯಂಜನದ ನಂತರ ಮತ್ತೊಂದು ವ್ಯಂಜನ ಬರುತ್ತದೆ. ಮೊದಲ ವ್ಯಂಜನದ 'ಅ' ಧ್ವನಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ ಅಥವಾ ಅಡಗುತ್ತದೆ. ಕನ್ನಡದಲ್ಲಿ ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಕೆಳಭಾಗದ ಒತ್ತು ರೂಪವಾಗಿ ಕಾಣುತ್ತದೆ.",
      keyPoints: [
        "ಕ್ + ಕ = ಕ್ಕ, ತ್ + ತ = ತ್ತ, ನ್ + ನ = ನ್ನ.",
        "ಒತ್ತಕ್ಷರವನ್ನು ಓದುವಾಗ ವ್ಯಂಜನಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ ನಂತರ ಸೇರಿಸಿ ಓದುವುದು ಸಹಾಯಕ.",
        "ಸಂಸ್ಕೃತ ಮೂಲದ ಪದಗಳಲ್ಲಿ ಸಂಕೀರ್ಣ ಒತ್ತಕ್ಷರಗಳು ಹೆಚ್ಚು ಕಾಣುತ್ತವೆ.",
        "ಬರಹದಲ್ಲಿ ಸಣ್ಣ ಬದಲಾವಣೆ ಉಚ್ಚಾರಣೆಯಲ್ಲಿ ದೊಡ್ಡ ವ್ಯತ್ಯಾಸ ತರಬಹುದು.",
      ],
      examples: [
        { kannada: "ಮೆಟ್ಟಿಲು", meaning: "ಟ್ಟ ಒತ್ತಕ್ಷರ ಇರುವ ಪದ." },
        { kannada: "ಹಬ್ಬ", meaning: "ಬ್ಬ ಒತ್ತಕ್ಷರ ಇರುವ ಪದ." },
        { kannada: "ಬಣ್ಣ", meaning: "ಣ್ಣ ಒತ್ತಕ್ಷರ ಇರುವ ಪದ." },
        { kannada: "ಕ್ರಿಯೆ", meaning: "ಕ್ರ ಸಂಯುಕ್ತ ರೂಪದ ಅಭ್ಯಾಸ." },
      ],
      practice: ["ಕ್ಕ, ಗ್ಗ, ತ್ತ, ನ್ನ, ಲ್ಲ ಇರುವ ಪದಗಳನ್ನು ತಲಾ ಎರಡು ಬರೆಯಿರಿ.", "ಪುಸ್ತಕ ಪದದಲ್ಲಿ ಯಾವ ಒತ್ತಕ್ಷರ ಇದೆ?", "ಪ್ರಶ್ನೆ ಪದವನ್ನು ಧ್ವನಿಗಳಾಗಿ ಬೇರ್ಪಡಿಸಿ ಓದಿ."],
    },
  },
  {
    id: 4,
    title: "Imperative Mood",
    kannadaTitle: "ಆಜ್ಞಾರ್ಥಕ ರೂಪಗಳು",
    category: "Verbs",
    level: "Usage",
    focus: "ಆಜ್ಞೆ, ವಿನಂತಿ, ಸೂಚನೆ ಹೇಳುವ ಕ್ರಿಯಾರೂಪ",
    learnersUse: "ದೈನಂದಿನ ಮಾತುಕತೆಯಲ್ಲಿ ಹೇಳಿ, ಮಾಡಿ, ಬನ್ನಿ ರೀತಿಯ ರೂಪಗಳನ್ನು ಬಳಸಲು.",
    lesson: {
      intro:
        "ಆಜ್ಞಾರ್ಥಕ ರೂಪವು ಯಾರಿಗಾದರೂ ಕೆಲಸ ಮಾಡಲು ಹೇಳುವಾಗ ಬಳಸುವ ಕ್ರಿಯಾರೂಪ. ಕನ್ನಡದಲ್ಲಿ ಹತ್ತಿರದವರ ಜೊತೆ ಸರಳ ರೂಪ, ಗೌರವದ ಸಂದರ್ಭಗಳಲ್ಲಿ ಮೃದುವಾದ ರೂಪ ಬಳಸಲಾಗುತ್ತದೆ.",
      keyPoints: [
        "ಸರಳ ರೂಪ: ಬಾ, ಹೋಗು, ಓದು, ಮಾಡು.",
        "ಗೌರವ/ಬಹುವಚನ ರೂಪ: ಬನ್ನಿ, ಹೋಗಿ, ಓದಿ, ಮಾಡಿ.",
        "ವಿನಂತಿ ಮೃದುಗೊಳಿಸಲು ದಯವಿಟ್ಟು, ಸ್ವಲ್ಪ, ಒಮ್ಮೆ ಮುಂತಾದ ಪದಗಳನ್ನು ಸೇರಿಸಬಹುದು.",
        "ನಿಷೇಧ ಆಜ್ಞೆ: ಬರಬೇಡ, ಹೋಗಬೇಡಿ, ಮಾಡಬೇಡಿ.",
      ],
      examples: [
        { kannada: "ನೋಟ್ಸ್ ತೆರೆ.", meaning: "ಸ್ನೇಹಿತನಿಗೆ ಹೇಳುವ ಸರಳ ಆಜ್ಞೆ." },
        { kannada: "ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ.", meaning: "ಗೌರವದ ವಿನಂತಿ." },
        { kannada: "ಈ ಪದವನ್ನು ಮತ್ತೆ ಬರೆಯಿರಿ.", meaning: "ತರಗತಿ ಸೂಚನೆ." },
        { kannada: "ಇಲ್ಲಿ ಶಬ್ದ ಮಾಡಬೇಡಿ.", meaning: "ನಿಷೇಧ ಆಜ್ಞೆ." },
      ],
      practice: ["ಬರು, ಹೋಗು, ತಿನ್ನು, ಬರೆಯು ಕ್ರಿಯೆಗಳ ಗೌರವ ರೂಪಗಳನ್ನು ಬರೆಯಿರಿ.", "ಮೂರು ವಿನಂತಿ ವಾಕ್ಯಗಳನ್ನು ರಚಿಸಿ.", "ಮಾಡು ಕ್ರಿಯೆಯಿಂದ ನಿಷೇಧ ಆಜ್ಞೆ ರಚಿಸಿ."],
    },
  },
  {
    id: 5,
    title: "Pronoun",
    kannadaTitle: "ಸರ್ವನಾಮ",
    category: "Parts of Speech",
    level: "Structure",
    focus: "ನಾಮಪದದ ಬದಲು ಬರುವ ಪದಗಳು",
    learnersUse: "ವಾಕ್ಯಗಳಲ್ಲಿ ಪುನರಾವರ್ತನೆ ತಪ್ಪಿಸಿ ಸರಳವಾಗಿ ಹೇಳಲು.",
    lesson: {
      intro:
        "ಸರ್ವನಾಮಗಳು ವ್ಯಕ್ತಿ, ವಸ್ತು, ಸ್ಥಳ ಅಥವಾ ಗುಂಪನ್ನು ಸೂಚಿಸುತ್ತವೆ. ಮಾತನಾಡುವವನು, ಕೇಳುವವನು, ಮೂರನೇ ವ್ಯಕ್ತಿ ಎಂಬ ವ್ಯತ್ಯಾಸ ಕನ್ನಡದಲ್ಲಿ ಮುಖ್ಯ.",
      keyPoints: [
        "ಪ್ರಥಮ ಪುರುಷ: ನಾನು, ನಾವು.",
        "ದ್ವಿತೀಯ ಪುರುಷ: ನೀನು, ನೀವು.",
        "ತೃತೀಯ ಪುರುಷ: ಅವನು, ಅವಳು, ಅದು, ಅವರು, ಅವು.",
        "ಸಮೀಪ/ದೂರ ಸೂಚಕ: ಇದು, ಅದು, ಇವರು, ಅವರು.",
      ],
      examples: [
        { kannada: "ನಾವು ಇಂದು ಅಭ್ಯಾಸ ಮಾಡುತ್ತೇವೆ.", meaning: "ನಾವು ಎಂಬ ಪ್ರಥಮ ಪುರುಷ ಬಹುವಚನ." },
        { kannada: "ನೀನು ಈ ಪದವನ್ನು ಓದು.", meaning: "ನೀನು ಎಂಬ ಹತ್ತಿರದ ಸಂಬೋಧನೆ." },
        { kannada: "ಅವರು ಸಭೆಗೆ ಬಂದರು.", meaning: "ಅವರು ಎಂಬ ಗೌರವ/ಬಹುವಚನ ರೂಪ." },
        { kannada: "ಅದು ಹಳೆಯ ಫಲಕ.", meaning: "ಅದು ಎಂಬ ವಸ್ತು ಸೂಚಕ ಸರ್ವನಾಮ." },
      ],
      practice: ["ನಾನು, ನೀನು, ಅವನು ಬಳಸಿ ತಲಾ ಒಂದು ವಾಕ್ಯ ರಚಿಸಿ.", "ಇದು ಮತ್ತು ಅದು ಬಳಸಿ ಎರಡು ವಾಕ್ಯಗಳನ್ನು ಬರೆಯಿರಿ.", "ಅವರು ಪದವು ಗೌರವಕ್ಕೂ ಬಹುವಚನಕ್ಕೂ ಹೇಗೆ ಬಳಕೆಯಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ."],
    },
  },
  {
    id: 6,
    title: "Noun",
    kannadaTitle: "ನಾಮಪದ",
    category: "Parts of Speech",
    level: "Structure",
    focus: "ವ್ಯಕ್ತಿ, ಸ್ಥಳ, ವಸ್ತು, ಭಾವನೆಗಳ ಹೆಸರು",
    learnersUse: "ವಾಕ್ಯದ ವಿಷಯ, ಕರ್ಮ, ಸಂಬಂಧಗಳನ್ನು ಕಟ್ಟಲು.",
    lesson: {
      intro:
        "ನಾಮಪದವು ಹೆಸರು ಹೇಳುವ ಪದ. ಕನ್ನಡದಲ್ಲಿ ನಾಮಪದಕ್ಕೆ ವಚನ, ವಿಭಕ್ತಿ, ಸಂಬಂಧ ರೂಪಗಳು ಸೇರಬಹುದು. ಜೀವಿ/ಅಜೀವಿ ಮತ್ತು ಗೌರವ ವ್ಯತ್ಯಾಸವೂ ರೂಪ ಆಯ್ಕೆಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತದೆ.",
      keyPoints: [
        "ವ್ಯಕ್ತಿ: ರಾಮ, ಅಕ್ಕ, ಗುರು.",
        "ಸ್ಥಳ: ಬೆಂಗಳೂರು, ಮನೆ, ಶಾಲೆ.",
        "ವಸ್ತು: ಪುಸ್ತಕ, ಮರ, ಹೂವು.",
        "ಬಹುವಚನ: ಪುಸ್ತಕಗಳು, ಮಕ್ಕಳು, ಗುರುಗಳು.",
      ],
      examples: [
        { kannada: "ಕಲಾವಿದ ಚಿತ್ರ ಬಿಡಿಸುತ್ತಾನೆ.", meaning: "ಕಲಾವಿದ ಎಂಬ ವ್ಯಕ್ತಿನಾಮ ಬಳಕೆ." },
        { kannada: "ಗ್ರಂಥಾಲಯ ಶಾಂತವಾಗಿದೆ.", meaning: "ಗ್ರಂಥಾಲಯ ಎಂಬ ಸ್ಥಳನಾಮ ಬಳಕೆ." },
        { kannada: "ಗಡಿಯಾರ ನಿಧಾನವಾಗಿ ನಡೆಯುತ್ತಿದೆ.", meaning: "ಗಡಿಯಾರ ಎಂಬ ವಸ್ತುನಾಮ ಬಳಕೆ." },
        { kannada: "ಸಹನೆ ಒಳ್ಳೆಯ ಗುಣ.", meaning: "ಸಹನೆ ಎಂಬ ಭಾವನಾಮ ಬಳಕೆ." },
      ],
      practice: ["ಐದು ವ್ಯಕ್ತಿನಾಮಗಳು ಮತ್ತು ಐದು ವಸ್ತುನಾಮಗಳು ಬರೆಯಿರಿ.", "ಮನೆ, ಹೂವು, ಮಗು ಪದಗಳ ಬಹುವಚನ ರೂಪಗಳನ್ನು ಬರೆಯಿರಿ.", "ನಾಮಪದಕ್ಕೆ ಒಂದು ಗುಣವಾಚಕ ಸೇರಿಸಿ ಮೂರು ವಾಕ್ಯ ರಚಿಸಿ."],
    },
  },
  {
    id: 7,
    title: "Verbless Sentences",
    kannadaTitle: "ಕ್ರಿಯಾಪದ ರಹಿತ ವಾಕ್ಯಗಳು",
    category: "Sentences",
    level: "Usage",
    focus: "ಸ್ಪಷ್ಟ ಕ್ರಿಯಾಪದ ಇಲ್ಲದ ವಾಕ್ಯಗಳು",
    learnersUse: "ಪರಿಚಯ, ಗುರುತು, ಸ್ವಾಮ್ಯ, ಗುಣ ಹೇಳುವ ಸರಳ ವಾಕ್ಯಗಳಿಗೆ.",
    lesson: {
      intro:
        "ಕನ್ನಡದಲ್ಲಿ ಕೆಲವು ವಾಕ್ಯಗಳಲ್ಲಿ 'ಇದೆ' ಅಥವಾ 'ಆಗಿದೆ' ಎಂಬ ಕ್ರಿಯಾಪದ ಇಲ್ಲದಿದ್ದರೂ ಅರ್ಥ ಪೂರ್ಣವಾಗಿರುತ್ತದೆ. ವಿಶೇಷವಾಗಿ ಪರಿಚಯ, ಗುರುತು, ಗುಣ, ಸ್ವಾಮ್ಯ ಹೇಳುವಾಗ ಇದು ಸಾಮಾನ್ಯ.",
      keyPoints: [
        "ನಾನು ವಿದ್ಯಾರ್ಥಿ = ನಾನು ವಿದ್ಯಾರ್ಥಿಯಾಗಿದ್ದೇನೆ ಎಂಬ ಅರ್ಥ.",
        "ಅವಳು ವೈದ್ಯೆ = ಅವಳು ವೈದ್ಯೆಯಾಗಿದ್ದಾಳೆ ಎಂಬ ಅರ್ಥ.",
        "ಆ ಮನೆ ದೊಡ್ಡದು = ಮನೆಯ ಗುಣವನ್ನು ಹೇಳುವ ವಾಕ್ಯ.",
        "ಈ ಚಾವಿ ನನ್ನದು = ಸ್ವಾಮ್ಯವನ್ನು ಹೇಳುವ ವಾಕ್ಯ.",
      ],
      examples: [
        { kannada: "ಇವರು ನಮ್ಮ ಮಾರ್ಗದರ್ಶಿ.", meaning: "ವ್ಯಕ್ತಿಯ ಗುರುತು ಹೇಳುತ್ತದೆ." },
        { kannada: "ಈ ಕೋಣೆ ಶಾಂತ.", meaning: "ಸ್ಥಳದ ಗುಣ ಹೇಳುತ್ತದೆ." },
        { kannada: "ಅದು ನನ್ನ ಪೆನ್.", meaning: "ಸ್ವಾಮ್ಯ ಸಂಬಂಧ ಹೇಳುತ್ತದೆ." },
        { kannada: "ನಾಳೆಯ ಕೆಲಸ ಮುಖ್ಯ.", meaning: "ವಿಷಯದ ಮಹತ್ವ ಹೇಳುತ್ತದೆ." },
      ],
      practice: ["ನಿಮ್ಮ ಪರಿಚಯವನ್ನು ಮೂರು ಕ್ರಿಯಾಪದ ರಹಿತ ವಾಕ್ಯಗಳಲ್ಲಿ ಬರೆಯಿರಿ.", "ಇದು, ಅದು, ಅವರು ಬಳಸಿ ವಾಕ್ಯಗಳನ್ನು ರಚಿಸಿ.", "ದೊಡ್ಡದು, ಚಿಕ್ಕದು, ಒಳ್ಳೆಯದು ಪದಗಳಿಂದ ವಾಕ್ಯ ಮಾಡಿ."],
    },
  },
  {
    id: 8,
    title: "The Present Tense",
    kannadaTitle: "ವರ್ತಮಾನ ಕಾಲ",
    category: "Verbs",
    level: "Structure",
    focus: "ಈಗ ನಡೆಯುವ, ಅಭ್ಯಾಸದ, ಸಾಮಾನ್ಯ ಕ್ರಿಯೆಗಳು",
    learnersUse: "ದಿನಚರಿ, ಈಗಿನ ಸ್ಥಿತಿ, ಅಭ್ಯಾಸ ಹೇಳಲು.",
    lesson: {
      intro:
        "ವರ್ತಮಾನ ಕಾಲವು ಈಗಿನ ಸ್ಥಿತಿ, ಅಭ್ಯಾಸ, ಅಥವಾ ನಡೆಯುತ್ತಿರುವ ಕ್ರಿಯೆಯನ್ನು ಹೇಳುತ್ತದೆ. ಕನ್ನಡದಲ್ಲಿ 'ಇರು' ಕ್ರಿಯೆಯ ರೂಪಗಳು ಮತ್ತು -ತ್ತ- ಗುರುತು ಮುಖ್ಯ.",
      keyPoints: [
        "ಸ್ಥಿತಿ: ನಾನು ಇಲ್ಲಿದ್ದೇನೆ, ಅವಳು ಮನೆಯಲ್ಲಿ ಇದ್ದಾಳೆ.",
        "ಅಭ್ಯಾಸ: ನಾನು ಪ್ರತಿದಿನ ಓದುತ್ತೇನೆ.",
        "ನಡೆಯುತ್ತಿರುವ ಕ್ರಿಯೆ: ನಾನು ಓದುತ್ತಿದ್ದೇನೆ.",
        "ಕ್ರಿಯಾರೂಪವು ವ್ಯಕ್ತಿ, ವಚನ, ಲಿಂಗಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಬದಲಾಗುತ್ತದೆ.",
      ],
      examples: [
        { kannada: "ನಾನು ಪ್ರತಿದಿನ ಹೊಸ ಪದ ಬರೆಯುತ್ತೇನೆ.", meaning: "ಅಭ್ಯಾಸದ ಕ್ರಿಯೆ." },
        { kannada: "ಅವಳು ಈಗ ಟಿಪ್ಪಣಿ ಓದುತ್ತಿದ್ದಾಳೆ.", meaning: "ಈಗ ನಡೆಯುತ್ತಿರುವ ಕ್ರಿಯೆ." },
        { kannada: "ನಾವು ತರಗತಿಯಲ್ಲಿ ಇದ್ದೇವೆ.", meaning: "ಈಗಿನ ಸ್ಥಿತಿ." },
        { kannada: "ಮಕ್ಕಳು ಪ್ರಶ್ನೆ ಕೇಳುತ್ತಿದ್ದಾರೆ.", meaning: "ಬಹುವಚನ ಕರ್ತೃ ಜೊತೆಗೆ ವರ್ತಮಾನ ರೂಪ." },
      ],
      practice: ["ಬರು, ಓದು, ತಿನ್ನು ಕ್ರಿಯೆಗಳ ವರ್ತಮಾನ ರೂಪಗಳನ್ನು ಬರೆಯಿರಿ.", "ನಿಮ್ಮ ದಿನಚರಿಯ ಮೂರು ವಾಕ್ಯಗಳನ್ನು ಬರೆಯಿರಿ.", "ಒಂದು ಸ್ಥಿತಿ ವಾಕ್ಯ ಮತ್ತು ಒಂದು ನಡೆಯುತ್ತಿರುವ ಕ್ರಿಯೆ ವಾಕ್ಯ ರಚಿಸಿ."],
    },
  },
  {
    id: 9,
    title: "The Past Tense",
    kannadaTitle: "ಭೂತ ಕಾಲ",
    category: "Verbs",
    level: "Structure",
    focus: "ಮುಗಿದ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಹಳೆಯ ಘಟನೆಗಳು",
    learnersUse: "ಕಥೆ ಹೇಳಲು, ವರದಿ ಮಾಡಲು, ನೆನಪುಗಳನ್ನು ಹೇಳಲು.",
    lesson: {
      intro:
        "ಭೂತ ಕಾಲವು ಈಗಾಗಲೇ ನಡೆದ ಕ್ರಿಯೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಕನ್ನಡದಲ್ಲಿ ಕ್ರಿಯೆಯ ಧಾತುವಿಗೆ ಭೂತರೂಪದ ಗುರುತು ಮತ್ತು ವ್ಯಕ್ತಿ-ಲಿಂಗ ಅಂತ್ಯಗಳು ಸೇರುತ್ತವೆ.",
      keyPoints: [
        "ಬರು -> ಬಂದೆ, ಬಂದನು, ಬಂದಳು, ಬಂದರು.",
        "ಮಾಡು -> ಮಾಡಿದೆ, ಮಾಡಿದನು, ಮಾಡಿದಳು.",
        "ಓದು -> ಓದಿದೆ, ಓದಿದನು, ಓದಿದರು.",
        "ವಾಕ್ಯದಲ್ಲಿ ನಿನ್ನೆ, ಹಿಂದೆ, ಆಗ ಮುಂತಾದ ಕಾಲಪದಗಳು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
      ],
      examples: [
        { kannada: "ನಾನು ಬೆಳಿಗ್ಗೆ ಪಾಠ ಮರುಕಳಿಸಿದೆ.", meaning: "ಈಗಾಗಲೇ ಮುಗಿದ ಕ್ರಿಯೆ." },
        { kannada: "ಅವನು ನಕ್ಷೆ ನೋಡಿದನು.", meaning: "ಪುರುಷ ಏಕವಚನ ಭೂತರೂಪ." },
        { kannada: "ಅವಳು ಉತ್ತರ ಬರೆದಳು.", meaning: "ಸ್ತ್ರೀ ಏಕವಚನ ಭೂತರೂಪ." },
        { kannada: "ನಾವು ಹೊಸ ನಿಯಮ ಕಲಿತೆವು.", meaning: "ಪ್ರಥಮ ಪುರುಷ ಬಹುವಚನ ಭೂತರೂಪ." },
      ],
      practice: ["ಇಂದು ಮಾಡಿದ ಮೂರು ಕೆಲಸಗಳನ್ನು ಭೂತಕಾಲದಲ್ಲಿ ಬರೆಯಿರಿ.", "ಬರು, ಹೋಗು, ಮಾಡು ಕ್ರಿಯೆಗಳ ಭೂತರೂಪಗಳನ್ನು ಬರೆಯಿರಿ.", "ನಿನ್ನೆ ಪದ ಬಳಸಿ ಎರಡು ವಾಕ್ಯ ರಚಿಸಿ."],
    },
  },
  {
    id: 10,
    title: "The Future Tense",
    kannadaTitle: "ಭವಿಷ್ಯತ್ ಕಾಲ",
    category: "Verbs",
    level: "Structure",
    focus: "ಮುಂದೆ ನಡೆಯುವ ಕ್ರಿಯೆಗಳು, ಯೋಜನೆ, ಊಹೆ",
    learnersUse: "ಯೋಜನೆ, ನಿರ್ಧಾರ, ಮುಂದಿನ ಕೆಲಸಗಳನ್ನು ಹೇಳಲು.",
    lesson: {
      intro:
        "ಭವಿಷ್ಯತ್ ಕಾಲವು ಮುಂದೆ ನಡೆಯುವ ಕ್ರಿಯೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಕನ್ನಡದಲ್ಲಿ ಹಲವಾರು ಸಂದರ್ಭಗಳಲ್ಲಿ ಅಭ್ಯಾಸ/ಸಾಮಾನ್ಯ ವರ್ತಮಾನ ಮತ್ತು ಭವಿಷ್ಯ ರೂಪಗಳು ಒಂದೇ ರೀತಿಯಾಗಿ ಕಾಣಬಹುದು; ಸಂದರ್ಭವೇ ಅರ್ಥ ಕೊಡುತ್ತದೆ.",
      keyPoints: [
        "ನಾನು ನಾಳೆ ಬರುತ್ತೇನೆ = ಸಂದರ್ಭದಿಂದ ಭವಿಷ್ಯ ಅರ್ಥ ಸಿಗುತ್ತದೆ.",
        "ಅವಳು ಮುಂದಿನ ವಾರ ಹೋಗುತ್ತಾಳೆ.",
        "ನಾವು ಪರೀಕ್ಷೆ ಬರೆಯುತ್ತೇವೆ.",
        "ಭವಿಷ್ಯ ಸೂಚಕ ಪದಗಳು: ನಾಳೆ, ಮುಂದೆ, ಮುಂದಿನ ವಾರ, ನಂತರ.",
      ],
      examples: [
        { kannada: "ನಾನು ಸಂಜೆ ಅಭ್ಯಾಸ ಮುಂದುವರಿಸುತ್ತೇನೆ.", meaning: "ಮುಂದೆ ಮಾಡುವ ನಿರ್ಧಾರ." },
        { kannada: "ಅವರು ಮುಂದಿನ ತಿಂಗಳು ಕಾರ್ಯಾಗಾರ ನಡೆಸುತ್ತಾರೆ.", meaning: "ಯೋಜಿತ ಭವಿಷ್ಯ ಕ್ರಿಯೆ." },
        { kannada: "ನಾವು ಹೊಸ ಪಾಠ ಸೇರಿಸುತ್ತೇವೆ.", meaning: "ಗುಂಪಿನ ಮುಂದಿನ ಕೆಲಸ." },
        { kannada: "ಮಧ್ಯಾಹ್ನ ಗಾಳಿ ಹೆಚ್ಚಾಗಬಹುದು.", meaning: "ಸಾಧ್ಯತೆ ಸೂಚಿಸುವ ಭವಿಷ್ಯ ಅರ್ಥ." },
      ],
      practice: ["ನಾಳೆ ನೀವು ಮಾಡುವ ಮೂರು ಕೆಲಸಗಳನ್ನು ಬರೆಯಿರಿ.", "ಬರು, ನೋಡು, ಕಲಿಯು ಕ್ರಿಯೆಗಳ ಭವಿಷ್ಯ ರೂಪಗಳನ್ನು ರಚಿಸಿ.", "ಮುಂದಿನ ವಾರ ಪದ ಬಳಸಿ ಎರಡು ವಾಕ್ಯ ಬರೆಯಿರಿ."],
    },
  },
  {
    id: 11,
    title: "Cases",
    kannadaTitle: "ವಿಭಕ್ತಿಗಳು",
    category: "Noun Forms",
    level: "Structure",
    focus: "ನಾಮಪದದ ವಾಕ್ಯ ಸಂಬಂಧ ತೋರಿಸುವ ಪ್ರತ್ಯಯಗಳು",
    learnersUse: "ಯಾರು, ಯಾರನ್ನು, ಯಾರಿಗೆ, ಯಾರಿಂದ, ಯಾರಲ್ಲಿ ಎಂಬ ಸಂಬಂಧಗಳನ್ನು ಹೇಳಲು.",
    lesson: {
      intro:
        "ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು ನಾಮಪದದ ಕೆಲಸವನ್ನು ವಾಕ್ಯದಲ್ಲಿ ತೋರಿಸುತ್ತವೆ. ಕರ್ತೃ, ಕರ್ಮ, ಕರಣ, ಸಂಪ್ರದಾನ, ಸಂಬಂಧ, ಸ್ಥಳ, ಸಂಬೋಧನೆ ಮುಂತಾದ ಅರ್ಥಗಳು ವಿಭಕ್ತಿಯಿಂದ ಸ್ಪಷ್ಟವಾಗುತ್ತವೆ.",
      keyPoints: [
        "ಪ್ರಥಮಾ: ಕವಿಯು, ಮರವು.",
        "ದ್ವಿತೀಯಾ: ಕವಿಯನ್ನು, ಮರವನ್ನು.",
        "ಚತುರ್ಥೀ: ಕವಿಗೆ, ಮರಕ್ಕೆ.",
        "ಷಷ್ಟೀ/ಸಪ್ತಮೀ: ಕವಿಯ, ಮರದ; ಮನೆಯಲ್ಲಿ, ಶಾಲೆಯಲ್ಲಿ.",
      ],
      examples: [
        { kannada: "ಶಿಕ್ಷಕನು ನಿಯಮ ವಿವರಿಸಿದನು.", meaning: "ಕರ್ತೃ ವಿಭಕ್ತಿ ಬಳಕೆ." },
        { kannada: "ನಾನು ಫಲಕವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿದೆ.", meaning: "ಕರ್ಮ ವಿಭಕ್ತಿ ಬಳಕೆ." },
        { kannada: "ಅವನು ಗೆಳತಿಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿದನು.", meaning: "ಸಂಪ್ರದಾನ ವಿಭಕ್ತಿ ಬಳಕೆ." },
        { kannada: "ದೀಪ ಕಿಟಕಿಯ ಬಳಿಯಲ್ಲಿ ಇದೆ.", meaning: "ಸ್ಥಳ ಸಂಬಂಧ ತೋರಿಸುವ ರೂಪ." },
      ],
      practice: ["ಮರ ಪದಕ್ಕೆ ಅನ್ನು, ಕ್ಕೆ, ದ, ಅಲ್ಲಿ ಸೇರಿಸಿ ಬರೆಯಿರಿ.", "ಯಾರಿಗೆ? ಎಂಬ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುವ ಮೂರು ವಾಕ್ಯ ಮಾಡಿ.", "ನಿಮ್ಮ ಮನೆಯಲ್ಲಿರುವ ವಸ್ತುಗಳನ್ನು ಸ್ಥಳ ವಿಭಕ್ತಿಯಿಂದ ಹೇಳಿ."],
    },
  },
  {
    id: 12,
    title: "Participles",
    kannadaTitle: "ಕೃದಂತಗಳು",
    category: "Verbs",
    level: "Usage",
    focus: "ಕ್ರಿಯೆಯಿಂದ ಬಂದ ವಿವರಣೆ ಅಥವಾ ಜೋಡಣೆ ರೂಪಗಳು",
    learnersUse: "ಎರಡು ವಿಚಾರಗಳನ್ನು ಒಂದೇ ವಾಕ್ಯದಲ್ಲಿ ಸಹಜವಾಗಿ ಸೇರಿಸಲು.",
    lesson: {
      intro:
        "ಕೃದಂತಗಳು ಕ್ರಿಯೆಯಿಂದ ರೂಪುಗೊಂಡು ನಾಮಪದವನ್ನು ವಿವರಿಸಬಹುದು ಅಥವಾ ಎರಡು ಕ್ರಿಯೆಗಳನ್ನು ಜೋಡಿಸಬಹುದು. ಕನ್ನಡದಲ್ಲಿ ಇದು ದೀರ್ಘ, ಸಹಜ ವಾಕ್ಯಗಳನ್ನು ಕಟ್ಟಲು ಮುಖ್ಯ.",
      keyPoints: [
        "ಮಾಡಿದ ಕೆಲಸ = ಈಗಾಗಲೇ ಮುಗಿದ ಕೆಲಸ.",
        "ಬರುವ ಅತಿಥಿ = ಬರಲಿರುವ ಅಥವಾ ಬರುತ್ತಿರುವ ವ್ಯಕ್ತಿ.",
        "ಓದಿ ಹೇಳು = ಓದಿದ ನಂತರ ಹೇಳು.",
        "ತಿಂದ ನಂತರ, ಹೋಗುವ ಮೊದಲು ರೀತಿಯ ರೂಪಗಳು ಕಾಲ ಸಂಬಂಧ ತೋರಿಸುತ್ತವೆ.",
      ],
      examples: [
        { kannada: "ನಾವು ತಯಾರಿಸಿದ ಪಟ್ಟಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.", meaning: "ಮುಗಿದ ಕ್ರಿಯೆಯಿಂದ ಬಂದ ವಿವರಣೆ." },
        { kannada: "ಮಾತನಾಡಿ ಮುಗಿಸಿ ನಂತರ ಬರೆಯಿರಿ.", meaning: "ಕ್ರಮವಾಗಿ ನಡೆಯುವ ಎರಡು ಕ್ರಿಯೆಗಳು." },
        { kannada: "ಬರಲಿರುವ ಪರೀಕ್ಷೆಗೆ ಸಿದ್ಧರಾಗಿ.", meaning: "ಮುಂದಿನ ಕ್ರಿಯೆಯನ್ನು ಸೂಚಿಸುವ ರೂಪ." },
        { kannada: "ಕೇಳಿದ ಪ್ರಶ್ನೆಗೆ ಸರಳವಾಗಿ ಉತ್ತರಿಸಿ.", meaning: "ಹಿಂದೆ ನಡೆದ ಕ್ರಿಯೆ ನಾಮಪದವನ್ನು ವಿವರಿಸುತ್ತದೆ." },
      ],
      practice: ["ಬರೆ, ಓದು, ಬರು ಕ್ರಿಯೆಯಿಂದ ಕೃದಂತ ರೂಪಗಳನ್ನು ಮಾಡಿ.", "ಎರಡು ಚಿಕ್ಕ ವಾಕ್ಯಗಳನ್ನು ಒಂದು ಕೃದಂತ ವಾಕ್ಯವನ್ನಾಗಿ ಮಾಡಿ.", "ಮಾಡಿದ, ಮಾಡುವ, ಮಾಡಿ ಪದಗಳಿಂದ ವಾಕ್ಯ ರಚಿಸಿ."],
    },
  },
  {
    id: 13,
    title: "Adjectives and Adverbs",
    kannadaTitle: "ಗುಣವಾಚಕಗಳು ಮತ್ತು ಕ್ರಿಯಾ ವಿಶೇಷಣಗಳು",
    category: "Parts of Speech",
    level: "Usage",
    focus: "ನಾಮಪದ ಮತ್ತು ಕ್ರಿಯೆಯನ್ನು ವಿವರಿಸುವ ಪದಗಳು",
    learnersUse: "ವಿವರಣೆ, ಗುಣ, ರೀತಿ, ಪ್ರಮಾಣ ಸ್ಪಷ್ಟಪಡಿಸಲು.",
    lesson: {
      intro:
        "ಗುಣವಾಚಕವು ನಾಮಪದವನ್ನು ವಿವರಿಸುತ್ತದೆ; ಕ್ರಿಯಾ ವಿಶೇಷಣವು ಕ್ರಿಯೆ ಹೇಗೆ, ಯಾವಾಗ, ಎಷ್ಟು, ಎಲ್ಲಿ ನಡೆಯುತ್ತದೆ ಎಂದು ವಿವರಿಸುತ್ತದೆ.",
      keyPoints: [
        "ಗುಣವಾಚಕ: ಒಳ್ಳೆಯ, ದೊಡ್ಡ, ಚಿಕ್ಕ, ಹೊಸ, ಕೆಂಪು.",
        "ಕ್ರಿಯಾ ವಿಶೇಷಣ: ಚೆನ್ನಾಗಿ, ಬೇಗ, ನಿಧಾನವಾಗಿ, ನಿನ್ನೆ, ಇಲ್ಲಿ.",
        "ಕನ್ನಡದಲ್ಲಿ ಗುಣವಾಚಕ ಸಾಮಾನ್ಯವಾಗಿ ನಾಮಪದದ ಮುಂದೆ ಬರುತ್ತದೆ.",
        "ವಿಶೇಷಣವನ್ನು ಹೆಚ್ಚಿಸಲು ತುಂಬಾ, ಬಹಳ, ಸ್ವಲ್ಪ ಬಳಸಬಹುದು.",
      ],
      examples: [
        { kannada: "ನೀಲಿ ಫಲಕ ಗೋಡೆಯ ಮೇಲೆ ಇದೆ.", meaning: "ನೀಲಿ ಎಂಬ ಗುಣವಾಚಕ." },
        { kannada: "ಅವನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿದನು.", meaning: "ಸ್ಪಷ್ಟವಾಗಿ ಎಂಬ ಕ್ರಿಯಾ ವಿಶೇಷಣ." },
        { kannada: "ಚಿಕ್ಕ ಟಿಪ್ಪಣಿ ಸಾಕಾಯಿತು.", meaning: "ಚಿಕ್ಕ ಎಂಬ ಗುಣವಾಚಕ." },
        { kannada: "ಅವರು ಶಾಂತವಾಗಿ ಕೇಳಿದರು.", meaning: "ಶಾಂತವಾಗಿ ಎಂಬ ರೀತಿ ಸೂಚನೆ." },
      ],
      practice: ["ಐದು ಗುಣವಾಚಕಗಳನ್ನು ಬರೆಯಿರಿ.", "ಚೆನ್ನಾಗಿ, ಬೇಗ, ನಿಧಾನವಾಗಿ ಬಳಸಿ ವಾಕ್ಯ ರಚಿಸಿ.", "ಒಂದು ನಾಮಪದಕ್ಕೆ ಮೂರು ಬೇರೆ ಗುಣವಾಚಕ ಸೇರಿಸಿ."],
    },
  },
  {
    id: 14,
    title: "Numerals",
    kannadaTitle: "ಅಂಕೆಗಳು",
    category: "Vocabulary",
    level: "Foundation",
    focus: "ಸಂಖ್ಯೆಗಳು, ಎಣಿಕೆ, ಪ್ರಮಾಣ",
    learnersUse: "ದಿನಾಂಕ, ಬೆಲೆ, ಪ್ರಮಾಣ, ವಿಳಾಸ, ತರಗತಿ ಅಭ್ಯಾಸಗಳಿಗೆ.",
    lesson: {
      intro:
        "ಸಂಖ್ಯೆಗಳು ಭಾಷೆಯ ಮೂಲ ಬಳಕೆಯಲ್ಲಿ ತುಂಬಾ ಮುಖ್ಯ. ಕನ್ನಡದಲ್ಲಿ ಅಂಕೆಗಳನ್ನು ಪದರೂಪದಲ್ಲೂ, ಚಿಹ್ನೆಯ ರೂಪದಲ್ಲೂ ಕಲಿಯುವುದು ಓದು ಮತ್ತು ಮಾತಿಗೆ ಸಹಾಯಕ.",
      keyPoints: [
        "೧ ಒಂದು, ೨ ಎರಡು, ೩ ಮೂರು, ೪ ನಾಲ್ಕು, ೫ ಐದು.",
        "೬ ಆರು, ೭ ಏಳು, ೮ ಎಂಟು, ೯ ಒಂಬತ್ತು, ೧೦ ಹತ್ತು.",
        "ಪ್ರಮಾಣ ಹೇಳಲು ಸಂಖ್ಯೆಯ ನಂತರ ನಾಮಪದ ಬರುತ್ತದೆ: ಎರಡು ಪುಸ್ತಕಗಳು.",
        "ಕ್ರಮಸಂಖ್ಯೆ: ಮೊದಲ, ಎರಡನೇ, ಮೂರನೇ.",
      ],
      examples: [
        { kannada: "ನಮ್ಮ ಗುಂಪಿನಲ್ಲಿ ಆರು ಜನರಿದ್ದಾರೆ.", meaning: "ಆರು ಸಂಖ್ಯೆಯ ಬಳಕೆ." },
        { kannada: "ಇಂದು ಇಪ್ಪತ್ತೈದನೇ ದಿನ.", meaning: "ಕ್ರಮಸಂಖ್ಯೆಯ ಬಳಕೆ." },
        { kannada: "ಮೂರು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.", meaning: "ಸಂಖ್ಯೆ + ನಾಮಪದ ರೂಪ." },
        { kannada: "ಎರಡನೇ ಸಾಲಿನಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ.", meaning: "ಕ್ರಮ ಸೂಚಿಸುವ ರೂಪ." },
      ],
      practice: ["೧ ರಿಂದ ೨೦ ರವರೆಗೆ ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ.", "ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ.", "ಸಂಖ್ಯೆ + ನಾಮಪದ ರೂಪದ ಐದು ವಾಕ್ಯಗಳನ್ನು ಮಾಡಿ."],
    },
  },
  {
    id: 15,
    title: "Causative Suffixes",
    kannadaTitle: "ಪ್ರೇರಣಾತ್ಮಕ ಪ್ರತ್ಯಯಗಳು",
    category: "Verbs",
    level: "Usage",
    focus: "ಯಾರನ್ನಾದರೂ ಕೆಲಸ ಮಾಡಿಸುವ ಕ್ರಿಯಾರೂಪ",
    learnersUse: "ಮಾಡಿಸು, ಓದಿಸು, ಬರೆಯಿಸು ರೀತಿಯ ಅರ್ಥಗಳನ್ನು ಹೇಳಲು.",
    lesson: {
      intro:
        "ಪ್ರೇರಣಾತ್ಮಕ ರೂಪವು ಕರ್ತೃ ಸ್ವತಃ ಕೆಲಸ ಮಾಡುವುದಲ್ಲ, ಮತ್ತೊಬ್ಬರಿಂದ ಕೆಲಸ ಮಾಡಿಸುವುದನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಕನ್ನಡದಲ್ಲಿ -ಇಸು/-ಸು ರೂಪಗಳು ಸಾಮಾನ್ಯ.",
      keyPoints: [
        "ಓದು -> ಓದಿಸು: ಓದಲು ಮಾಡು ಅಥವಾ ಕಲಿಸು.",
        "ಮಾಡು -> ಮಾಡಿಸು: ಮತ್ತೊಬ್ಬರಿಂದ ಮಾಡಿಸು.",
        "ಬರೆ -> ಬರೆಯಿಸು: ಬರೆಯಲು ಮಾಡು.",
        "ವಾಕ್ಯದಲ್ಲಿ ಮಾಡಿಸುವವನು, ಮಾಡುವವನು, ಕೆಲಸ ಎಂಬ ಮೂರು ಭಾಗಗಳು ಬರಬಹುದು.",
      ],
      examples: [
        { kannada: "ತರಬೇತುದಾರರು ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ ವಾಕ್ಯ ಬರೆಯಿಸಿದರು.", meaning: "ಬರೆಯಿಸುವ ಕ್ರಿಯೆ." },
        { kannada: "ಅವಳು ಕೆಲಸವನ್ನು ಸಮಯಕ್ಕೆ ಮುಗಿಸಿಸಿದಳು.", meaning: "ಮುಗಿಸಲು ಮಾಡಿಸಿದ ಅರ್ಥ." },
        { kannada: "ಅಜ್ಜಿ ಮಗುವಿಗೆ ಹಾಲು ಕುಡಿಸಿದಳು.", meaning: "ಕುಡಿಯಲು ಮಾಡಿಸಿದ ಅರ್ಥ." },
        { kannada: "ನಾನು ಫಲಕವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿಸಿದೆ.", meaning: "ಸ್ವತಃ ಮಾಡದೆ ಮಾಡಿಸಿದ ಕ್ರಿಯೆ." },
      ],
      practice: ["ಓದು, ಬರೆ, ಕುಡಿ ಕ್ರಿಯೆಗಳ ಪ್ರೇರಣಾತ್ಮಕ ರೂಪಗಳನ್ನು ಬರೆಯಿರಿ.", "ಮಾಡು ಮತ್ತು ಮಾಡಿಸು ನಡುವಿನ ಅರ್ಥ ವ್ಯತ್ಯಾಸವನ್ನು ಉದಾಹರಣೆಯಿಂದ ತೋರಿಸಿ.", "ಯಾರಿಂದಲಾದರೂ ಕೆಲಸ ಮಾಡಿಸಿದ ಅನುಭವದ ವಾಕ್ಯ ಬರೆಯಿರಿ."],
    },
  },
  {
    id: 16,
    title: "The Potential, Obligative and Conditional Verbs",
    kannadaTitle: "ಕ್ರಿಯಾ ಪದಗಳ ವಿವಿಧ ರೂಪಗಳು",
    category: "Verbs",
    level: "Usage",
    focus: "ಸಾಧ್ಯತೆ, ಕಡ್ಡಾಯ, ಷರತ್ತು",
    learnersUse: "ಬಲ್ಲೆ, ಬೇಕು, ಇದ್ದರೆ ರೀತಿಯ ಅರ್ಥಗಳನ್ನು ಹೇಳಲು.",
    lesson: {
      intro:
        "ಕ್ರಿಯಾಪದದ ಕೆಲವು ರೂಪಗಳು ಕ್ರಿಯೆ ನಡೆದಿದೆಯೇ ಎಂಬುದಕ್ಕಿಂತ ಸಾಧ್ಯವೇ, ಮಾಡಬೇಕೇ, ಯಾವ ಷರತ್ತಿನಲ್ಲಿ ಆಗುತ್ತದೆ ಎಂಬ ಅರ್ಥವನ್ನು ನೀಡುತ್ತವೆ.",
      keyPoints: [
        "ಸಾಧ್ಯತೆ: ಬರಬಹುದು, ಮಾಡಬಹುದು, ಓದಬಹುದು.",
        "ಸಾಮರ್ಥ್ಯ: ನನಗೆ ಕನ್ನಡ ಓದಲು ಬರುತ್ತದೆ.",
        "ಕಡ್ಡಾಯ/ಅವಶ್ಯಕತೆ: ಬರಬೇಕು, ಓದಬೇಕು, ಮಾಡಬೇಕು.",
        "ಷರತ್ತು: ಬಂದರೆ, ಮಾಡಿದರೆ, ಓದಿದರೆ.",
      ],
      examples: [
        { kannada: "ನಾನು ಈ ಲಿಪಿಯನ್ನು ಓದಬಹುದು.", meaning: "ಸಾಧ್ಯತೆ ಸೂಚನೆ." },
        { kannada: "ನೀವು ಉತ್ತರವನ್ನು ಪೂರ್ಣವಾಗಿ ಬರೆಯಬೇಕು.", meaning: "ಕಡ್ಡಾಯ/ಅವಶ್ಯಕತೆ." },
        { kannada: "ಸಮಯ ಸಿಕ್ಕರೆ ನಾವು ಮರುಕಳಿಸುತ್ತೇವೆ.", meaning: "ಷರತ್ತು ಸೂಚನೆ." },
        { kannada: "ಅವನಿಗೆ ವೇಗವಾಗಿ ಟೈಪ್ ಮಾಡಲು ಬರುತ್ತದೆ.", meaning: "ಸಾಮರ್ಥ್ಯ ಸೂಚನೆ." },
      ],
      practice: ["ಮಾಡು ಕ್ರಿಯೆಯಿಂದ ಸಾಧ್ಯತೆ, ಕಡ್ಡಾಯ, ಷರತ್ತು ರೂಪಗಳನ್ನು ಮಾಡಿ.", "ಬೇಕು ಪದ ಬಳಸಿ ಮೂರು ವಾಕ್ಯ ರಚಿಸಿ.", "ಬಂದರೆ ಪದದಿಂದ ಒಂದು ಷರತ್ತು ವಾಕ್ಯ ಬರೆಯಿರಿ."],
    },
  },
  {
    id: 17,
    title: "The Interrogatives",
    kannadaTitle: "ಪ್ರಶ್ನಾರ್ಥಕ ಪದಗಳು",
    category: "Sentences",
    level: "Usage",
    focus: "ಪ್ರಶ್ನೆ ಪದಗಳು ಮತ್ತು ಪ್ರಶ್ನೆ ರಚನೆ",
    learnersUse: "ಮಾತುಕತೆ, ಮಾಹಿತಿ ಕೇಳುವುದು, ಅರ್ಥ ಪರಿಶೀಲನೆಗೆ.",
    lesson: {
      intro:
        "ಪ್ರಶ್ನಾರ್ಥಕ ಪದಗಳು ಮಾಹಿತಿ ಕೇಳಲು ಉಪಯೋಗವಾಗುತ್ತವೆ. ಕನ್ನಡದಲ್ಲಿ ಯಾರು, ಏನು, ಎಲ್ಲಿ, ಯಾವಾಗ, ಹೇಗೆ, ಏಕೆ, ಎಷ್ಟು ಮುಂತಾದ ಪದಗಳು ಪ್ರಮುಖ.",
      keyPoints: [
        "ಯಾರು = ವ್ಯಕ್ತಿ ಕೇಳಲು, ಏನು = ವಸ್ತು/ವಿಷಯ ಕೇಳಲು.",
        "ಎಲ್ಲಿ = ಸ್ಥಳ ಕೇಳಲು, ಯಾವಾಗ = ಕಾಲ ಕೇಳಲು.",
        "ಹೇಗೆ = ರೀತಿ ಕೇಳಲು, ಏಕೆ/ಯಾಕೆ = ಕಾರಣ ಕೇಳಲು.",
        "ಹೌದು/ಇಲ್ಲ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ಧ್ವನಿ ಮತ್ತು ವಾಕ್ಯಕ್ರಮವೂ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      ],
      examples: [
        { kannada: "ಈ ಪಾಠವನ್ನು ಯಾರು ಓದಿದರು?", meaning: "ಕರ್ತೃ ಕೇಳುವ ಪ್ರಶ್ನೆ." },
        { kannada: "ನಿಮ್ಮ ಟಿಪ್ಪಣಿ ಎಲ್ಲಿ ಇದೆ?", meaning: "ಸ್ಥಳ ಕೇಳುವ ಪ್ರಶ್ನೆ." },
        { kannada: "ಈ ಗುರುತು ಏನು ಸೂಚಿಸುತ್ತದೆ?", meaning: "ವಿಷಯ ಕೇಳುವ ಪ್ರಶ್ನೆ." },
        { kannada: "ಅಭ್ಯಾಸವನ್ನು ಯಾವಾಗ ಸಲ್ಲಿಸಬೇಕು?", meaning: "ಕಾಲ ಕೇಳುವ ಪ್ರಶ್ನೆ." },
      ],
      practice: ["ಯಾರು, ಏನು, ಎಲ್ಲಿ ಬಳಸಿ ತಲಾ ಒಂದು ಪ್ರಶ್ನೆ ಮಾಡಿ.", "ನಿಮ್ಮ ಸ್ನೇಹಿತನಿಗೆ ಕೇಳಲು ಐದು ಪ್ರಶ್ನೆ ಬರೆಯಿರಿ.", "ಒಂದು ಹೇಳಿಕೆ ವಾಕ್ಯವನ್ನು ಪ್ರಶ್ನೆಯಾಗಿ ಬದಲಿಸಿ."],
    },
  },
  {
    id: 18,
    title: "The Written and Spoken Styles",
    kannadaTitle: "ಲಿಖಿತ ಮತ್ತು ಆಡು ಮಾತಿನ ರೀತಿಗಳು",
    category: "Style",
    level: "Usage",
    focus: "ಬರಹದ ಕನ್ನಡ ಮತ್ತು ಮಾತಿನ ಕನ್ನಡದ ವ್ಯತ್ಯಾಸ",
    learnersUse: "ಯಾವ ಸಂದರ್ಭಕ್ಕೆ ಯಾವ ಭಾಷಾರೀತಿ ಸೂಕ್ತ ಎಂದು ಆಯ್ಕೆ ಮಾಡಲು.",
    lesson: {
      intro:
        "ಕನ್ನಡದಲ್ಲಿ ಬರಹದ ಶೈಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ಕ್ರಮಬದ್ಧ ಮತ್ತು ಪೂರ್ಣ ರೂಪದಲ್ಲಿರುತ್ತದೆ. ಆಡು ಮಾತಿನಲ್ಲಿ ಸಂಕ್ಷಿಪ್ತ ರೂಪಗಳು, ಪ್ರದೇಶೀಯ ವ್ಯತ್ಯಾಸಗಳು, ವೇಗದ ಉಚ್ಚಾರಣೆಗಳು ಕಾಣುತ್ತವೆ.",
      keyPoints: [
        "ಬರಹ: ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.",
        "ಮಾತು: ನಾನು ಮನೆಗೆ ಹೋಗ್ತಿದ್ದೀನಿ / ಹೋಗ್ತಾ ಇದ್ದೀನಿ.",
        "ಗೌರವ ಸಂದರ್ಭಗಳಲ್ಲಿ ಪೂರ್ಣ, ಮೃದುವಾದ ರೂಪಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ಒಳ್ಳೆಯದು.",
        "ಪ್ರದೇಶಾನುಸಾರ ಪದಗಳು ಮತ್ತು ಉಚ್ಚಾರಣೆ ಬದಲಾಗಬಹುದು.",
      ],
      examples: [
        { kannada: "ನೀವು ಇಂದು ಹೇಗಿದ್ದೀರಿ?", meaning: "ಮರ್ಯಾದೆಯ ಬರಹ/ಮಾತಿನ ರೂಪ." },
        { kannada: "ಇವತ್ತು ಹೇಗಿದ್ದೀರಾ?", meaning: "ಸಹಜ ಮಾತಿನ ರೂಪ." },
        { kannada: "ಅವರು ಸಭೆಗೆ ಬರುತ್ತಿದ್ದಾರೆ.", meaning: "ಪೂರ್ಣ ಬರಹದ ರೂಪ." },
        { kannada: "ಅವರು ಸಭೆಗೆ ಬರ್ತಿದ್ದಾರೆ.", meaning: "ಸಂಕುಚಿತ ಆಡು ಮಾತಿನ ರೂಪ." },
      ],
      practice: ["ಮೂರು ಬರಹದ ವಾಕ್ಯಗಳನ್ನು ಆಡು ಮಾತಿನ ರೂಪಕ್ಕೆ ಬದಲಿಸಿ.", "ಗೌರವ ಮಾತು ಮತ್ತು ಸ್ನೇಹಿತರ ಮಾತು ಎಂಬ ಎರಡು ಸಂದರ್ಭಗಳಿಗೆ ವಾಕ್ಯ ರಚಿಸಿ.", "ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಬಳಸುವ ಒಂದು ಪ್ರದೇಶೀಯ ಪದವನ್ನು ಬರೆಯಿರಿ."],
    },
  },
];

const categoryLabels: Record<string, string> = {
  All: "ಎಲ್ಲ",
  Script: "ಲಿಪಿ",
  Verbs: "ಕ್ರಿಯಾಪದಗಳು",
  "Parts of Speech": "ಪದಭಾಗಗಳು",
  Sentences: "ವಾಕ್ಯಗಳು",
  "Noun Forms": "ನಾಮರೂಪಗಳು",
  Vocabulary: "ಪದಸಂಪತ್ತು",
  Style: "ಶೈಲಿ",
};

const levelLabels: Record<GrammarModule["level"] | "All", string> = {
  All: "ಎಲ್ಲ",
  Foundation: "ಮೂಲಭೂತ",
  Structure: "ರಚನೆ",
  Usage: "ಬಳಕೆ",
};

const categories = ["All", ...Array.from(new Set(grammarModules.map((item) => item.category)))];
const levels: Array<GrammarModule["level"] | "All"> = ["All", "Foundation", "Structure", "Usage"];

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [activeModule, setActiveModule] = useState(grammarModules[0]);

  const filteredModules = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return grammarModules.filter((module) => {
      const matchesCategory = category === "All" || module.category === category;
      const matchesLevel = level === "All" || module.level === level;
      const lessonText = [
        module.title,
        module.kannadaTitle,
        module.category,
        module.focus,
        module.lesson.intro,
        ...module.lesson.keyPoints,
        ...module.lesson.examples.map((example) => `${example.kannada} ${example.meaning}`),
      ].join(" ");
      return matchesCategory && matchesLevel && lessonText.toLocaleLowerCase().includes(normalizedQuery);
    });
  }, [category, level, query]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#modules">
          <img src="/sanchaya-logo.png" alt="ಸಂಚಯ" />
          <span>
            <strong>ಸಂಚಯ</strong>
            <small>ಕನ್ನಡ ವ್ಯಾಕರಣ</small>
          </span>
        </a>
        <nav aria-label="ಮುಖ್ಯ ನ್ಯಾವಿಗೇಶನ್">
          <a href="#modules">ಪಾಠಗಳು</a>
          <a href="#path">ಕಲಿಕೆಯ ಕ್ರಮ</a>
          <a href="#resources">ಒಳಗೊಂಡದ್ದು</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            ಒಂದೇ ಕಡೆ ಕನ್ನಡ ವ್ಯಾಕರಣ
          </p>
          <h1>ಕನ್ನಡ ವ್ಯಾಕರಣ ಕಲಿಯಲು ಸಂಪೂರ್ಣ ಅಧ್ಯಯನ ಸ್ಥಳ.</h1>
          <p>
            ಕನ್ನಡ ವ್ಯಾಕರಣದ ಮೂಲ ವಿಷಯಗಳನ್ನು ಇಲ್ಲಿ ಕನ್ನಡ ವಿವರಣೆ, ಉದಾಹರಣೆ, ಅಭ್ಯಾಸಗಳೊಂದಿಗೆ
            ಒಂದೇ ಅನುಭವವಾಗಿ ಜೋಡಿಸಲಾಗಿದೆ.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#modules">
              <BookOpenText size={18} />
              ಪಾಠಗಳನ್ನು ಆರಂಭಿಸಿ
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="ವ್ಯಾಕರಣ ಅವಲೋಕನ">
          <div>
            <strong>18</strong>
            <span>ಸ್ಥಳೀಯ ಪಾಠಗಳು</span>
          </div>
          <div>
            <strong>6</strong>
            <span>ವಿಷಯ ವಿಭಾಗಗಳು</span>
          </div>
          <div>
            <strong>ಕನ್ನಡ</strong>
            <span>ವಿವರಣೆ + ಉದಾಹರಣೆ + ಅಭ್ಯಾಸ</span>
          </div>
        </aside>
      </section>

      <section className="toolbar" id="modules">
        <div className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ಪಾಠ, ಕನ್ನಡ ಹೆಸರು, ಉದಾಹರಣೆ ಅಥವಾ ವಿಷಯ ಹುಡುಕಿ"
            aria-label="ವ್ಯಾಕರಣ ಪಾಠ ಹುಡುಕಿ"
          />
        </div>

        <label className="select-control">
          <Filter size={17} />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="ವಿಭಾಗದಿಂದ ಆರಿಸಿ">
            {categories.map((item) => (
              <option key={item} value={item}>{categoryLabels[item] ?? item}</option>
            ))}
          </select>
        </label>

        <div className="segmented" aria-label="ಮಟ್ಟದಿಂದ ಆರಿಸಿ">
          {levels.map((item) => (
            <button key={item} className={level === item ? "active" : ""} onClick={() => setLevel(item)}>
              {levelLabels[item]}
            </button>
          ))}
        </div>
      </section>

      <section className="module-layout">
        <div className="module-grid" aria-live="polite">
          {filteredModules.map((module) => (
            <button
              key={module.id}
              className={`module-card ${activeModule.id === module.id ? "selected" : ""}`}
              onClick={() => setActiveModule(module)}
            >
              <span className="module-number">{String(module.id).padStart(2, "0")}</span>
              <span className="module-meta">{categoryLabels[module.category]} · {levelLabels[module.level]}</span>
              <strong>{module.kannadaTitle}</strong>
              <span className="kannada-title">{module.focus}</span>
            </button>
          ))}
        </div>

        <article className="detail-panel">
          <span className="module-number large">{String(activeModule.id).padStart(2, "0")}</span>
          <p className="detail-kicker">{categoryLabels[activeModule.category]} · {levelLabels[activeModule.level]}</p>
          <h2>{activeModule.kannadaTitle}</h2>
          <h3>{activeModule.focus}</h3>
          <p className="lesson-intro">{activeModule.lesson.intro}</p>

          <section className="lesson-section">
            <h4>ಮುಖ್ಯ ಅಂಶಗಳು</h4>
            <ul>
              {activeModule.lesson.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="lesson-section">
            <h4>ಉದಾಹರಣೆಗಳು</h4>
            <div className="example-list">
              {activeModule.lesson.examples.map((example) => (
                <div className="example-row" key={example.kannada}>
                  <strong>{example.kannada}</strong>
                  <span>{example.meaning}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="lesson-section">
            <h4>ಅಭ್ಯಾಸ</h4>
            <ol>
              {activeModule.lesson.practice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        </article>
      </section>

      <section className="learning-path" id="path">
        <div className="section-heading">
          <p className="eyebrow">
            <GraduationCap size={16} />
            ಕಲಿಕೆಯ ಕ್ರಮ
          </p>
          <h2>ಅಕ್ಷರದಿಂದ ವಾಕ್ಯಶೈಲಿವರೆಗೆ ಕ್ರಮವಾಗಿ ಕಲಿಯಿರಿ.</h2>
        </div>
        <div className="path-grid">
          <PathStep title="ಅಕ್ಷರ ಓದಿ" icon={<Languages size={22} />} text="ವರ್ಣಮಾಲೆ, ಸ್ವರಚಿಹ್ನೆ, ಒತ್ತಕ್ಷರ, ಅಂಕೆಗಳು." />
          <PathStep title="ಪದಭಾಗ ಕಟ್ಟಿರಿ" icon={<LibraryBig size={22} />} text="ನಾಮಪದ, ಸರ್ವನಾಮ, ವಿಭಕ್ತಿ, ಗುಣವಾಚಕ." />
          <PathStep title="ಕ್ರಿಯೆ ಬಳಸಿ" icon={<CheckCircle2 size={22} />} text="ಕಾಲಗಳು, ಆಜ್ಞಾರ್ಥಕ, ಕೃದಂತ, ಪ್ರೇರಣಾತ್ಮಕ ರೂಪಗಳು." />
          <PathStep title="ವಾಕ್ಯ ಅಭ್ಯಾಸ ಮಾಡಿ" icon={<BookOpenText size={22} />} text="ಪ್ರಶ್ನೆ, ಕ್ರಿಯಾಪದ ರಹಿತ ವಾಕ್ಯ, ಬರಹ-ಮಾತಿನ ಶೈಲಿ." />
        </div>
      </section>

      <section className="resources" id="resources">
        <div>
          <p className="eyebrow">ಈ ಅಪ್ಲಿಕೇಶನ್ ಒಳಗೊಂಡಿರುವುದು</p>
          <h2>ಪಾಠ, ಉದಾಹರಣೆ, ಅಭ್ಯಾಸ ಎಲ್ಲವೂ ಇಲ್ಲೇ.</h2>
        </div>
        <div className="resource-links">
          <div className="resource-note">ಕನ್ನಡದಲ್ಲಿನ ಸರಳ ವಿವರಣೆಗಳು</div>
          <div className="resource-note">ಪ್ರತಿ ಪಾಠಕ್ಕೆ ಉಪಯುಕ್ತ ಉದಾಹರಣೆಗಳು</div>
          <div className="resource-note">ಸ್ವಯಂ ಅಭ್ಯಾಸಕ್ಕೆ ಚಿಕ್ಕ ಕೆಲಸಗಳು</div>
        </div>
      </section>
    </main>
  );
}

function PathStep({ title, icon, text }: { title: string; icon: React.ReactNode; text: string }) {
  return (
    <div className="path-step">
      <span>{icon}</span>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
