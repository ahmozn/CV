import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { renderHtml } from './pdf-template.js';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const LOCALES_DIR = path.resolve(process.cwd(), 'src', 'locales');
const AVATAR_PATH = path.resolve(process.cwd(), 'src', 'assets', 'pp.jpg');

if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
}

function getBase64Image(filePath) {
    if (!fs.existsSync(filePath)) return null;
    const ext = path.extname(filePath).replace('.', '');
    const mime = ext === 'svg' ? 'svg+xml' : ext;
    const base64 = fs.readFileSync(filePath).toString('base64');
    return `data:image/${mime};base64,${base64}`;
}

const avatarSrc = getBase64Image(AVATAR_PATH);

async function buildPdfs() {
    const browser = await chromium.launch({ headless: true });
    const targets = [
        { lang: 'tr', file: 'CV_Ozhan_TR.pdf' },
        { lang: 'en', file: 'CV_Ozhan_EN.pdf' }
    ];

    for (const target of targets) {
        const jsonPath = path.join(LOCALES_DIR, `${target.lang}.json`);
        if (!fs.existsSync(jsonPath)) {
            console.warn(`[WARN] ${jsonPath} bulunamadı, atlanıyor.`);
            continue;
        }

        const raw = fs.readFileSync(jsonPath, 'utf-8');
        const data = JSON.parse(raw);
        data.lang = target.lang;

        const page = await browser.newPage();
        await page.setContent(renderHtml(data, avatarSrc), { waitUntil: 'networkidle' });

        const outputPath = path.join(DIST_DIR, target.file);
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true
        });

        console.log(`[OK] PDF oluşturuldu: dist/${target.file}`);
        await page.close();
    }

    await browser.close();
}

buildPdfs().catch(err => {
    console.error('[ERR] PDF derleme patladı:', err);
    process.exit(1);
});