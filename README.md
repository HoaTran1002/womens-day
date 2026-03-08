# 🌸 Happy Women's Day — Website Chúc Mừng Ngày 8/3

Một website tĩnh đẹp và cảm xúc dành cho ngày Quốc tế Phụ nữ 8/3, được xây dựng bằng **Next.js 14**, **TailwindCSS**, và **Framer Motion**.

---

## ✨ Tính năng

- 🌸 **Flower Particles** — Hoa rơi nhẹ nhàng trên toàn trang
- 🎊 **Confetti** — Bắn confetti màu hồng/tím khi xem lời chúc
- ⌨️ **Typing Animation** — Lời chúc được "gõ" từng chữ như người thật
- 🔄 **Loading Screen** — Màn hình chờ cute với hoa xoay tròn
- 🖱️ **Interactive Effects** — Hover animations, parallax mouse tracking
- 📱 **Responsive** — Đẹp trên mọi thiết bị (mobile-first)
- 🎨 **Glass Morphism** — Giao diện hiện đại, trong suốt

---

## 🗂️ Cấu trúc Project

```
womens-day/
├── app/
│   ├── layout.tsx          # Root layout + metadata SEO
│   ├── page.tsx            # Trang chủ "/"
│   ├── message/
│   │   └── page.tsx        # Trang lời chúc "/message"
│   ├── gallery/
│   │   └── page.tsx        # Trang bộ sưu tập "/gallery"
│   └── about/
│       └── page.tsx        # Trang cảm ơn "/about"
├── components/
│   ├── Hero.tsx            # Hero section trang chủ
│   ├── MessageCard.tsx     # Card lời chúc + typing + confetti
│   ├── GalleryGrid.tsx     # Grid bộ sưu tập
│   ├── FlowerAnimation.tsx # Hoa rơi nền
│   ├── LoadingScreen.tsx   # Màn hình loading
│   ├── Navigation.tsx      # Navbar
│   └── Footer.tsx          # Footer
├── data/
│   └── messages.ts         # 20 lời chúc tiếng Việt
├── styles/
│   └── globals.css         # Global CSS + animations
├── next.config.js          # Static export config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Hướng dẫn chạy project

### Bước 1: Clone hoặc giải nén project

```bash
cd womens-day
```

### Bước 2: Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### Bước 3: Chạy development server

```bash
npm run dev
```

Mở trình duyệt tại **http://localhost:3000** 🎉

### Bước 4: Build static site

```bash
npm run build
```

File tĩnh sẽ được xuất ra thư mục `out/`

---

## 🌐 Deploy lên Vercel (Miễn phí)

### Cách 1: Qua Vercel CLI

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

### Cách 2: Qua GitHub + Vercel Dashboard

1. **Push code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "🌸 Happy Women's Day website"
   git remote add origin https://github.com/your-username/womens-day.git
   git push -u origin main
   ```

2. **Import vào Vercel:**
   - Vào [vercel.com](https://vercel.com) → Đăng nhập bằng GitHub
   - Click **"New Project"**
   - Chọn repository `womens-day`
   - Framework: **Next.js** (tự động detect)
   - Click **"Deploy"** ✅

3. **Auto deploy:**
   - Mỗi lần bạn `git push`, Vercel tự động deploy phiên bản mới!

### ⚙️ Vercel Settings (nếu cần)

- **Build Command:** `npm run build`
- **Output Directory:** `out`
- **Install Command:** `npm install`

---

## 🎨 Tùy chỉnh

### Thêm lời chúc mới
Mở file `data/messages.ts` và thêm vào mảng `messages`:

```typescript
{
  id: 21,
  text: "Lời chúc của bạn ở đây...",
  author: "Tên tác giả",
}
```

### Đổi màu sắc
Màu sắc chính được định nghĩa trong `styles/globals.css`:
```css
:root {
  --pink-soft: #fce7f3;
  --purple-medium: #ddd6fe;
}
```

### Thêm trang mới
1. Tạo thư mục mới trong `app/`
2. Thêm file `page.tsx`
3. Cập nhật navigation trong `components/Navigation.tsx`

---

## 🛠️ Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| Next.js | 14.2.3 | Framework (App Router) |
| TypeScript | ^5 | Type safety |
| TailwindCSS | ^3.4 | Styling |
| Framer Motion | ^11 | Animations |
| canvas-confetti | ^1.9 | Confetti effect |
| Google Fonts | - | Playfair Display + Inter |

---

## 📸 Các trang

| URL | Mô tả |
|-----|-------|
| `/` | Trang chủ với Hero section |
| `/message` | Lời chúc với typing animation |
| `/gallery` | Bộ sưu tập hoa |
| `/about` | Lời tri ân phụ nữ |

---

## 💡 Performance

- ✅ Static Site Generation (SSG)
- ✅ Image optimization
- ✅ Lazy loading components
- ✅ Font optimization (Google Fonts)
- ✅ Mobile-first responsive design

---

Made with ❤️ for all amazing women 🌸
# womens-day
