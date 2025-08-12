import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';  // ایمپورت مستقیم از URL برای پلی‌فیل
// برای هندل کردن اسکرول و ویو که در سی اسس گفته شده برای مرورگر فایرفاکس که اجرا کنه 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
