// Cache DOM elements
const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cardsContainer');
let activeCard = null;
let isRendering = false;
let renderTimeout = null;

// Handle clicks outside expanded cards
document.addEventListener('click', (e) => {
    if (activeCard && !activeCard.contains(e.target)) {
        activeCard.classList.remove('expanded');
        activeCard = null;
    }
});

// Create card element with optimizations
function createCard(item) {
    // Create elements outside of fragment
    const card = document.createElement('div');
    const content = document.createElement('div');
    const details = document.createElement('div');
    
    // Set classes
    card.className = 'card';
    content.className = 'card-content';
    details.className = 'details';
    
    // Create content HTML string
    const contentHTML = `
        <h3>${item.name}</h3>
        <p class="description">${item.description}</p>
        <div class="tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // Create details HTML string
    const detailsHTML = `
        <p><strong>Why it's desirable:</strong> ${item.details.whyDesirable}</p>
        <div class="examples">
            <strong>Examples:</strong>
            <ul>
                ${item.details.examples.map(example => {
                    if (typeof example === 'string') {
                        return `<li>${example}</li>`;
                    }
                    return `<li>${example.film} - ${example.scene}: ${example.description}</li>`;
                }).join('')}
            </ul>
        </div>
    `;
    
    // Set innerHTML once
    content.innerHTML = contentHTML;
    details.innerHTML = detailsHTML;
    
    // Append children
    card.appendChild(content);
    card.appendChild(details);
    
    // Add click handler with debounce
    let clickTimeout;
    card.addEventListener('click', (e) => {
        if (e.target.closest('.details') || isRendering) return;
        
        // Clear previous timeout
        clearTimeout(clickTimeout);
        
        // Set new timeout
        clickTimeout = setTimeout(() => {
            // Set rendering flag
            isRendering = true;
            
            // Use requestAnimationFrame for smooth transitions
            requestAnimationFrame(() => {
                // Close other cards first
                if (activeCard && activeCard !== card) {
                    activeCard.classList.remove('expanded');
                }
                
                // Wait for next frame to toggle current card
                requestAnimationFrame(() => {
                    card.classList.toggle('expanded');
                    activeCard = card.classList.contains('expanded') ? card : null;
                    
                    // Clear rendering flag
                    isRendering = false;
                });
            });
        }, 50); // Small delay to prevent double-clicks
    });
    
    return card;
}

// Render cards with optimizations
function renderCards(searchTerm = '') {
    // Clear previous render timeout
    clearTimeout(renderTimeout);
    
    // Set new timeout to debounce renders
    renderTimeout = setTimeout(() => {
        // Set rendering flag
        isRendering = true;
        
        // Clear container and active card
        cardsContainer.innerHTML = '';
        activeCard = null;
        
        // Create fragment for batch update
        const fragment = document.createDocumentFragment();
        let hasResults = false;
        
        // Convert search term once
        const normalizedSearch = searchTerm.toLowerCase();
        
        // Add matching cards to fragment
        content.forEach(category => {
            category.items.forEach(item => {
                if (matchesSearch(item, normalizedSearch)) {
                    hasResults = true;
                    fragment.appendChild(createCard(item));
                }
            });
        });
        
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
            // Single DOM update
            cardsContainer.appendChild(fragment);
            cardsContainer.classList.toggle('no-results', !hasResults);
            
            // Clear rendering flag
            isRendering = false;
        });
    }, 100); // Small delay to batch updates
}

// Search helper with optimizations
function matchesSearch(item, searchTerm) {
    if (!searchTerm) return true;
    
    // Convert to lowercase once
    const name = item.name.toLowerCase();
    const description = item.description.toLowerCase();
    const whyDesirable = item.details.whyDesirable.toLowerCase();
    
    // Check each field
    if (name.includes(searchTerm) || 
        description.includes(searchTerm) || 
        whyDesirable.includes(searchTerm)) {
        return true;
    }
    
    // Check tags
    if (item.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
        return true;
    }
    
    // Check examples
    return item.details.examples.some(example => {
        if (typeof example === 'string') {
            return example.toLowerCase().includes(searchTerm);
        }
        return (
            example.film.toLowerCase().includes(searchTerm) ||
            example.scene.toLowerCase().includes(searchTerm) ||
            example.description.toLowerCase().includes(searchTerm)
        );
    });
}

// Initialize with optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Force reflow to prevent rendering issues
    document.body.style.transform = 'translateZ(0)';
    
    // Initial render
    renderCards();
    
    // Debounced search handler
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        // Clear previous timeout
        clearTimeout(searchTimeout);
        
        // Set new timeout
        searchTimeout = setTimeout(() => {
            // Only render if not already rendering
            if (!isRendering) {
                renderCards(searchInput.value);
            }
        }, 300);
    });
    
    // Remove loading class
    document.body.classList.remove('js-loading');
});
