@echo off
pushd "%~dp0"
git add -A
git status --short
git commit -m "feat: /services hub+spoke architecture with sidebar layout" -m "- 16 service pages: 1 hub + 5 category hubs + 10 sub-service pages" -m "- ServiceSidebar: search + quick-contact form + blog links" -m "- ServiceLayout: two-column sticky sidebar wrapper" -m "- Mega-dropdown navbar with all 5 service categories" -m "- 301 redirects for all legacy flat URLs in next.config.mjs" -m "- lib/blogData.ts with 19 blog post stubs" -m "- Keyword-optimized content from SEO gap analysis"
git push origin main
popd
echo EXIT_CODE=%ERRORLEVEL%
