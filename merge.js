import fs from 'fs';
import path from 'path';

const fileKetQua = 'toan-bo-code.txt';
let noiDungGop = '';

function gopFile(thuMuc) {
    if (!fs.existsSync(thuMuc)) return;
    const danhSach = fs.readdirSync(thuMuc);

    for (const ten of danhSach) {
        const duongDan = path.join(thuMuc, ten);
        const thongTin = fs.statSync(duongDan);

        // Bỏ qua các thư mục không cần thiết
        if (ten === 'assets' || ten === 'images') continue;

        if (thongTin.isDirectory()) {
            gopFile(duongDan); // Quét tiếp vào thư mục con
        } else {
            // Chỉ lấy các file code chính
            if (duongDan.endsWith('.jsx') || duongDan.endsWith('.js') || duongDan.endsWith('.css')) {
                const noiDung = fs.readFileSync(duongDan, 'utf-8');
                noiDungGop += `\n\n// ==========================================\n`;
                noiDungGop += `// 📁 FILE: ${duongDan}\n`;
                noiDungGop += `// ==========================================\n\n`;
                noiDungGop += noiDung;
            }
        }
    }
}

console.log('🤖 Đang gom code lại cho bạn...');
gopFile('./src'); 

// Gom thêm file index.html ở ngoài (nếu có)
if (fs.existsSync('./index.html')) {
    const noiDungHTML = fs.readFileSync('./index.html', 'utf-8');
    noiDungGop += `\n\n// ==========================================\n`;
    noiDungGop += `// 📁 FILE: index.html\n`;
    noiDungGop += `// ==========================================\n\n`;
    noiDungGop += noiDungHTML;
}

fs.writeFileSync(fileKetQua, noiDungGop);
console.log(`✅ Xong! Bạn hãy kiểm tra file "${fileKetQua}" nha.`);