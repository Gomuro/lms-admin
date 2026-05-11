# LMS Admin (демо)

Україномовний веб-макет адмін-панелі для Telegram-марафону (Next.js).

## Локально

```bash
npm install
npm run dev
```

Сервер розробки за замовчуванням у цьому проєкті на порту **3002** (`npm run dev`).

## Деплой: GitHub → Vercel

1. Створіть **порожній** репозиторій на GitHub (без README при клонуванні або додайте remote до вже ініціалізованого проєкту).

2. Прив’яжіть remote і запуште гілку `main`:

```bash
git remote add origin https://github.com/<ВАШ_НІК>/<НАЗВА_РЕПО>.git
git branch -M main
git push -u origin main
```

3. На [vercel.com](https://vercel.com): **Add New → Project → Import** репозиторій з GitHub.
4. Framework Preset: **Next.js**. Команда збірки та вихідний каталог залишити за замовчуванням (`next build`, каталог `.next`).
5. **Deploy**. Після деплою продакшен-URL відкриє ваш демо-сайт.

> `postinstall` запускає `patch-package` (патч до `next` для devtools). На Vercel це виконується після `npm install` і перед `next build`.
