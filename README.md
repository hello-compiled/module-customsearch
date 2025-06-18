# CustomSearch for Magento 2

**Clean, minimal search form replacement for Magento 2.**  
Replaces the default Luma/Blank search with a Tailwind-friendly and theme-agnostic version.

---

## ✨ Features

- Removes Magento's default `top.search` block
- Injects a lightweight custom search bar into the header
- No layout overrides required
- Works on Luma, Blank, and Tailwind-based themes
- Easily restyled with CSS or utility classes

## 🎨 Styling

To override the search background, add this to your theme’s CSS:

```css
#search_mini_form {
	background-color: #000;
	color: #fff;
}
---

## 📦 Installation

```bash
composer require compiled/module-customsearch
bin/magento setup:upgrade
bin/magento setup:static-content:deploy -f
bin/magento cache:flush