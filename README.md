# LMS Admin (демо)

Україномовний веб-макет адмін-панелі для Telegram-марафону (Next.js).

## Локально

```bash
npm install
npm run dev
```

Сервер розробки за замовчуванням у цьому проєкті на порту **3002** (`npm run dev`).

Репозиторій на GitHub: [Gomuro/lms-admin](https://github.com/Gomuro/lms-admin) (`https://github.com/Gomuro/lms-admin.git`), гілка **`main`**.

## Деплой: GitHub → Vercel

1. Новий клон / оновлення віддаленого репо (якщо ще не зроблено):

```bash
git remote add origin https://github.com/Gomuro/lms-admin.git
git branch -M main
git push -u origin main
```

2. На [vercel.com](https://vercel.com): **Add New → Project → Import** репозиторій `Gomuro/lms-admin` з GitHub.
3. Framework Preset: **Next.js**. Команда збірки та вихідний каталог залишити за замовчуванням (`next build`, каталог `.next`).
4. **Deploy**. Після деплою продакшен-URL відкриє ваш демо-сайт.

> `postinstall` запускає `patch-package` (патч до `next` для devtools). На Vercel це виконується після `npm install` і перед `next build`.
