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

  // Dynamic Latest Articles Loader for index.html / Pillar Page
  const articlesContainer = document.getElementById('latest-articles-grid');
  if (articlesContainer) {
    fetch('articles/index.json')
      .then(res => res.json())
      .then(data => {
        if (!data.articles || data.articles.length === 0) {
          articlesContainer.innerHTML = '<p class="text-xs text-slate-500 col-span-full text-center py-4">No articles published yet. New guides generated automatically via n8n pipeline!</p>';
          return;
        }
        articlesContainer.innerHTML = data.articles.map(art => `
          <a href="articles/${art.slug}.html" class="p-5 bg-slate-900 border border-slate-800 hover:border-indigo-500 rounded-xl transition group flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs text-indigo-400 font-semibold">
                <span>Article</span>
                <span class="text-slate-500 font-normal">${art.date || ''}</span>
              </div>
              <h3 class="text-base font-bold text-white group-hover:text-indigo-300 line-clamp-2">${art.title}</h3>
              <p class="text-xs text-slate-400 line-clamp-3">${art.description || ''}</p>
            </div>
            <div class="mt-4 text-xs font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Guide &rarr;
            </div>
          </a>
        `).join('');
      })
      .catch(err => {
        console.error('Failed to load articles index:', err);
      });
  }
});
