// Show a popup overlay when any flag is clicked 
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.country-grid');
    if (!grid) return;
    grid.addEventListener('click', function (e) {
        let li = e.target.closest('li');
        if (!li || !grid.contains(li)) return;
        const flag = li.querySelector('.flag-container');
        if (!flag) return;
        // Remove previous selection
        grid.querySelectorAll('li.selected').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
        // Clone flag and get country name
        const flagClone = flag.cloneNode(true);
        const countryName = li.querySelector('div')?.innerText || '';
        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.className = 'flag-popup-overlay';
        overlay.innerHTML = `
        <div class="flag-popup">
            <button class="flag-popup-close" title="Close">&times;</button>
            <div class="flag-popup-country">${countryName}</div>
        </div>`;
        overlay.querySelector('.flag-popup').insertBefore(flagClone, overlay.querySelector('.flag-popup-country').nextSibling);
        document.body.appendChild(overlay);
        // Close logic
        overlay.querySelector('.flag-popup-close').onclick = () => overlay.remove();
        overlay.onclick = (ev) => { if (ev.target === overlay) overlay.remove(); };
        // Remove selection on close
        overlay.addEventListener('transitionend', () => li.classList.remove('selected'));
    });
});