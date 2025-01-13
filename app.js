// Cache DOM elements
const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cardsContainer');
let activeCard = null;

// Handle clicks outside expanded cards
document.addEventListener('click', (e) => {
    if (activeCard && !activeCard.contains(e.target)) {
        activeCard.classList.remove('expanded');
        activeCard = null;
    }
});

// Create card element
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Create main content first
    const mainContent = document.createElement('div');
    mainContent.className = 'card-main';
    mainContent.innerHTML = `
        <h3 class="card-title">${item.name}</h3>
        <p class="description">${item.description}</p>
        <div class="tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // Create details section separately
    const details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = `
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
    
    // Append both sections to card
    card.appendChild(mainContent);
    card.appendChild(details);
    
    // Click handler with position adjustment
    card.addEventListener('click', (e) => {
        if (e.target.closest('.details')) {
            return;
        }
        
        e.stopPropagation();
        
        // Close previously active card
        if (activeCard && activeCard !== card) {
            activeCard.classList.remove('expanded');
        }
        
        // Toggle current card
        const wasExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        
        // Update active card reference
        activeCard = wasExpanded ? null : card;
        
        // Ensure expanded card is visible
        if (!wasExpanded) {
            const cardRect = card.getBoundingClientRect();
            const detailsHeight = card.querySelector('.details').offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (cardRect.bottom + detailsHeight > windowHeight) {
                const scrollTarget = card.offsetTop - 20;
                window.scrollTo({
                    top: scrollTarget,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    return card;
}

// Render cards
function renderCards(searchTerm = '') {
    // Clear container and active card
    cardsContainer.innerHTML = '';
    activeCard = null;
    
    // Create fragment for batch update
    const fragment = document.createDocumentFragment();
    let hasResults = false;
    
    // Add matching cards to fragment
    content.forEach(category => {
        category.items.forEach(item => {
            if (matchesSearch(item, searchTerm)) {
                hasResults = true;
                fragment.appendChild(createCard(item));
            }
        });
    });
    
    // Single DOM update
    cardsContainer.appendChild(fragment);
    cardsContainer.classList.toggle('no-results', !hasResults);
}

// Search helper
function matchesSearch(item, searchTerm) {
    if (!searchTerm) return true;
    
    searchTerm = searchTerm.toLowerCase();
    return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        item.details.whyDesirable.toLowerCase().includes(searchTerm) ||
        item.details.examples.some(example => {
            if (typeof example === 'string') {
                return example.toLowerCase().includes(searchTerm);
            }
            return (
                example.film.toLowerCase().includes(searchTerm) ||
                example.scene.toLowerCase().includes(searchTerm) ||
                example.description.toLowerCase().includes(searchTerm)
            );
        })
    );
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Force reflow to prevent rendering issues
    document.body.style.transform = 'translateZ(0)';
    
    // Initial render
    renderCards();
    
    // Add search handler with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderCards(searchInput.value);
        }, 300);
    });
});
