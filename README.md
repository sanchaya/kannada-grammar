# ಕನ್ನಡ ವ್ಯಾಕರಣ

ಸಂಚಯ ಬ್ರ್ಯಾಂಡಿಂಗ್ ಹೊಂದಿರುವ ಕನ್ನಡ ವ್ಯಾಕರಣ ಅಧ್ಯಯನ ಅಪ್ಲಿಕೇಶನ್. ಇದು ಕನ್ನಡ ವ್ಯಾಕರಣದ ಮೂಲಭೂತ ವಿಷಯಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಪಾಠ, ಉದಾಹರಣೆ, ಅಭ್ಯಾಸಗಳ ರೂಪದಲ್ಲಿ ಕಲಿಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.

## ವೈಶಿಷ್ಟ್ಯಗಳು

- 18 ಕನ್ನಡ ವ್ಯಾಕರಣ ಪಾಠಗಳು
- ಕನ್ನಡದಲ್ಲೇ ಪಾಠ ವಿವರಣೆ, ಮುಖ್ಯ ಅಂಶಗಳು, ಉದಾಹರಣೆಗಳು ಮತ್ತು ಅಭ್ಯಾಸಗಳು
- ಪಾಠ, ವಿಭಾಗ ಮತ್ತು ಮಟ್ಟದ ಆಧಾರದ ಮೇಲೆ ಹುಡುಕಾಟ / ಆಯ್ಕೆ
- ಮೊಬೈಲ್ ಮತ್ತು ಡೆಸ್ಕ್‌ಟಾಪ್ ಎರಡಕ್ಕೂ ಹೊಂದುವ ವಿನ್ಯಾಸ
- ಸಂಚಯ ಲೋಗೋ ಮತ್ತು ಫೇವಿಕಾನ್ ಬಳಕೆ

## ತಂತ್ರಜ್ಞಾನ

- React
- TypeScript
- Vite
- Lucide React icons
- CSS

## ಅಗತ್ಯಗಳು

ಸ್ಥಳೀಯವಾಗಿ ಚಾಲನೆ ಮಾಡಲು ಕೆಳಗಿನವು ಬೇಕಾಗುತ್ತವೆ:

- Node.js 20 ಅಥವಾ ಹೊಸ ಆವೃತ್ತಿ
- npm

ಆವೃತ್ತಿ ಪರಿಶೀಲನೆ:

```bash
node --version
npm --version
```

## ಸ್ಥಾಪನೆ

ರೆಪೊಸಿಟರಿಯನ್ನು ಕ್ಲೋನ್ ಮಾಡಿ:

```bash
git clone https://github.com/sanchaya/kannada-grammar.git
cd kannada-grammar
```

ಅವಲಂಬನೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿ:

```bash
npm install
```

## ಸ್ಥಳೀಯ ಚಾಲನೆ

ಡೆವಲಪ್‌ಮೆಂಟ್ ಸರ್ವರ್ ಪ್ರಾರಂಭಿಸಿ:

```bash
npm run dev
```

ಬ್ರೌಸರ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ:

```text
http://localhost:5173/
```

ನೆಟ್ವರ್ಕ್‌ನಲ್ಲಿರುವ ಬೇರೆ ಸಾಧನದಿಂದ ಪರೀಕ್ಷಿಸಲು Vite ತೋರಿಸುವ Network URL ಬಳಸಿ.

## ನಿರ್ಮಾಣ

ಉತ್ಪಾದನಾ ನಿರ್ಮಾಣ ತಯಾರಿಸಲು:

```bash
npm run build
```

ನಿರ್ಮಿತ ಫೈಲ್‌ಗಳು `dist/` ಫೋಲ್ಡರ್‌ನಲ್ಲಿ ಸಿಗುತ್ತವೆ.

## ನಿರ್ಮಿತ ಅಪ್ಲಿಕೇಶನ್ ಪರೀಕ್ಷೆ

ಬಿಲ್ಡ್ ನಂತರ ಸ್ಥಳೀಯವಾಗಿ ಪೂರ್ವಾವಲೋಕನ ಮಾಡಲು:

```bash
npm run preview
```

## ಯೋಜನೆಯ ರಚನೆ

```text
.
├── public/
│   ├── favicon.png
│   └── sanchaya-logo.png
├── src/
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## ವಿಷಯ ಸಂಪಾದನೆ

ಪಾಠಗಳ ಡೇಟಾ [src/main.tsx](src/main.tsx) ಒಳಗಿನ `grammarModules` ಪಟ್ಟಿಯಲ್ಲಿ ಇದೆ.

ಪ್ರತಿ ಪಾಠದಲ್ಲಿ ಈ ಭಾಗಗಳಿವೆ:

- `kannadaTitle`: ಪಾಠದ ಕನ್ನಡ ಶೀರ್ಷಿಕೆ
- `category`: ಒಳಾಂಗಣ ವಿಭಾಗ ಕೀಲಿ
- `level`: ಒಳಾಂಗಣ ಮಟ್ಟ ಕೀಲಿ
- `focus`: ಪಾಠದ ಕೇಂದ್ರೀಯ ವಿಷಯ
- `lesson.intro`: ಪಾಠ ಪರಿಚಯ
- `lesson.keyPoints`: ಮುಖ್ಯ ಅಂಶಗಳು
- `lesson.examples`: ಉದಾಹರಣೆಗಳು
- `lesson.practice`: ಅಭ್ಯಾಸಗಳು

ಹೊಸ ಪಾಠ ಸೇರಿಸಲು `grammarModules` ಪಟ್ಟಿಗೆ ಹೊಸ ವಸ್ತು ಸೇರಿಸಿ. ವಿಭಾಗ ಅಥವಾ ಮಟ್ಟ ಹೊಸದಾದರೆ `categoryLabels` ಅಥವಾ `levelLabels` ಪಟ್ಟಿಯನ್ನೂ ನವೀಕರಿಸಿ.

## ವಿನ್ಯಾಸ ಸಂಪಾದನೆ

ಎಲ್ಲಾ ಮುಖ್ಯ ಶೈಲಿಗಳು [src/styles.css](src/styles.css) ನಲ್ಲಿ ಇವೆ.

ಮುಖ್ಯ ವಿಭಾಗಗಳು:

- Header ಮತ್ತು navigation
- Hero section
- Search/filter toolbar
- Module list
- Lesson detail panel
- Learning path
- Resource summary
- Responsive media queries

## ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ

ಕೋಡ್ ಬದಲಾವಣೆ ಮಾಡಿದ ನಂತರ ಕನಿಷ್ಠ ಈ ಪರಿಶೀಲನೆ ನಡೆಸಿ:

```bash
npm run build
```

ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಬೇಕಾದವು:

- Hero ಶೀರ್ಷಿಕೆ ಮೊಬೈಲ್‌ನಲ್ಲಿ overlap ಆಗಬಾರದು
- Navigation ಕನ್ನಡದಲ್ಲಿರಬೇಕು
- ಪಾಠ ಆಯ್ಕೆ ಮಾಡಿದಾಗ ಸ್ಥಳೀಯ lesson content ಕಾಣಬೇಕು
- Search ಮತ್ತು filters ಕೆಲಸ ಮಾಡಬೇಕು

## Deployment

ಈ ಅಪ್ಲಿಕೇಶನ್ static Vite build ಆಗಿರುವುದರಿಂದ GitHub Pages, Netlify, Vercel, Cloudflare Pages ಅಥವಾ ಯಾವುದೇ static hostingನಲ್ಲಿ deploy ಮಾಡಬಹುದು.

ಸಾಮಾನ್ಯ build command:

```bash
npm run build
```

Publish directory:

```text
dist
```

## ಪರವಾನಗಿ

ಈ ಯೋಜನೆಗೆ ಬೇಕಾದ ಪರವಾನಗಿ ವಿವರವನ್ನು repository maintainers ಸೇರಿಸಬಹುದು.
