document.addEventListener('DOMContentLoaded', function () {
	const searchForm = document.querySelector('.search-form');
	const searchInput = document.getElementById('search');
	const searchButton = document.querySelector('.search-button');

	if (!searchInput || !searchButton || !searchForm) return;

	// ✅ Click button → show input
	searchButton.addEventListener('click', function (e) {
		e.preventDefault();
		searchInput.classList.add('active');
		searchButton.classList.add('active');
		searchInput.focus();
	});

	// ✅ Click outside → hide input
	document.addEventListener('click', function (e) {
		if (!searchForm.contains(e.target)) {
			searchInput.classList.remove('active');
			searchButton.classList.remove('active');
		}
	});

	// ✅ Enter key → submit form
	searchInput.addEventListener('keydown', function (e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			searchForm.submit();
		}
	});
});