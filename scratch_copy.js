const fs = require('fs');
const path = require('path');

const userHome = process.env.USERPROFILE || 'C:\\Users\\nagaraj';
const src = path.join(userHome, '.gemini', 'antigravity', 'brain', 'b084ee27-0b41-470a-b9ed-16e671c421be', 'popcorn_hero_theme_1787377945380.png');
const dest = path.join(__dirname, 'public', 'images', 'projects', 'popcorn-hero-theme.png');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('SUCCESS: Copied popcorn image to public/images/projects/popcorn-hero-theme.png');
} else {
  console.error('SRC NOT FOUND:', src);
}
