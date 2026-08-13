/* MagicLight AI Hub – main.js */

document.addEventListener('DOMContentLoaded', () => {
  // Copy coupon code to clipboard
  document.querySelectorAll('.copy-coupon-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('fy9f6ug28');
        const original = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => { btn.textContent = original; }, 2000);
      } catch {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = 'fy9f6ug28';
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        const original = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => { btn.textContent = original; }, 2000);
      }
    });
  });

  // Basic affiliate click tracking
  document.querySelectorAll('.affiliate-cta').forEach(link => {
    link.addEventListener('click', () => {
      console.log('Affiliate CTA clicked:', link.href || link.getAttribute('href'));
    });
  });
});
