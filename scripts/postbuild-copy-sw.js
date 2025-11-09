const fs = require('fs');
const path = require('path');
const outDir = path.join(process.cwd(), 'out');
const srcSw = path.join(process.cwd(), 'public', 'sw.js');
const srcManifest = path.join(process.cwd(), 'public', 'manifest.webmanifest');
if (fs.existsSync(outDir)) {
  try {
    fs.copyFileSync(srcSw, path.join(outDir, 'sw.js'));
    fs.copyFileSync(srcManifest, path.join(outDir, 'manifest.webmanifest'));
    console.log('PWA files copied to out/');
  } catch (e) { console.error('Copy SW failed', e); }
}
