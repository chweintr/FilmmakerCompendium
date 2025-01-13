const content = [
    {
        category: "Shot Types",
        items: [
            {
                name: "Extreme Close-Up Shot (ECU)",
                description: "Focuses on a very small detail, like an eye or an object.",
                tags: ["intense", "microscopic", "revealing", "focused"],
                details: {
                    whyDesirable: "Creates intense intimacy or highlights crucial details. Perfect for emotional moments or revealing important objects.",
                    examples: [
                        { film: "Requiem for a Dream", scene: "Drug Injection", description: "Extreme focus on a needle" },
                        "A single tear rolling down a character's cheek",
                        "A key detail in a mystery plot",
                        "An intense emotional reaction in someone's eyes"
                    ]
                }
            },
            {
                name: "Close-Up Shot (CU)",
                description: "Tightly framed shot that shows detail or emotion.",
                tags: ["intimate", "detailed", "emotional", "personal", "intense", "focused"],
                details: {
                    whyDesirable: "Creates emotional connection and emphasizes character reactions. Essential for dramatic moments.",
                    examples: [
                        { film: "Psycho", scene: "Shower Scene", description: "Focus on Marion's eye" },
                        "A character's reaction to devastating news",
                        "An intimate moment between two characters",
                        "A crucial emotional turning point"
                    ]
                }
            },
            {
                name: "Medium Shot (MS)",
                description: "Shows subject from waist up, balancing detail and context.",
                tags: ["balanced", "natural", "neutral", "engaging", "personal"],
                details: {
                    whyDesirable: "Perfect for dialogue and character interaction. Shows both facial expressions and body language.",
                    examples: [
                        { film: "Casablanca", scene: "Rick's Café", description: "Conversations between Rick and Ilsa" },
                        "A business meeting between characters",
                        "A casual conversation in a café",
                        "An interview scene"
                    ]
                }
            },
            {
                name: "Extreme Wide Shot (EWS)",
                description: "Shows the subject from a great distance, emphasizing their environment and surroundings.",
                tags: ["establishing", "landscape", "environment", "epic"],
                details: {
                    whyDesirable: "Used to establish location, show scale, or create a sense of isolation. Perfect for epic moments, establishing new locations, or showing the relationship between characters and their environment.",
                    examples: [
                        "A lone warrior standing atop a mountain peak at sunrise, emphasizing their solitude",
                        "A sprawling cityscape revealing the scale of an urban environment",
                        "A tiny boat in a vast ocean during a storm, highlighting nature's power",
                        "An army assembling on a battlefield, showing the epic scale of conflict"
                    ]
                }
            },
            {
                name: "Two-Shot",
                description: "Frames two subjects in a single composition.",
                tags: ["relational", "balanced", "dialogue", "character-focused"],
                details: {
                    whyDesirable: "Shows relationship dynamics and interactions between characters. Perfect for dialogue scenes.",
                    examples: [
                        { film: "The Social Network", scene: "Mark and Eduardo's Conversations", description: "Emphasizes relationship dynamics" },
                        "A romantic scene between two characters",
                        "A tense standoff between rivals",
                        "A parent-child conversation"
                    ]
                }
            },
            {
                name: "POV Shot",
                description: "Puts the audience in the eyes of a character.",
                tags: ["immersive", "intimate", "subjective", "perspective"],
                details: {
                    whyDesirable: "Creates direct connection with character perspective and heightens audience immersion.",
                    examples: [
                        { film: "Goodfellas", scene: "Henry Hill's Perspective", description: "Walking through the Copacabana club" },
                        "Looking through binoculars or a telescope",
                        "A character's dizzy or disoriented view",
                        "A first-person action sequence"
                    ]
                }
            },
            {
                name: "Insert Shot",
                description: "Highlights a specific detail in the scene.",
                tags: ["detail-oriented", "focused", "narrative"],
                details: {
                    whyDesirable: "Draws attention to important details and provides crucial story information.",
                    examples: [
                        { film: "Pulp Fiction", scene: "Briefcase Open", description: "Close-up of mysterious glowing briefcase" },
                        "A ticking clock showing time pressure",
                        "A hidden clue being discovered",
                        "A character's hand gripping a weapon"
                    ]
                }
            },
            {
                name: "Wide Shot (WS)",
                description: "Shows entire subject and their surroundings.",
                tags: ["expansive", "contextual", "epic", "establishing"],
                details: {
                    whyDesirable: "Establishes location and context. Shows the relationship between characters and their environment.",
                    examples: [
                        { film: "Lawrence of Arabia", scene: "Desert Journey", description: "Expansive desert landscapes" },
                        "A character walking through a bustling city",
                        "A wide view of a battlefield",
                        "An establishing shot of a new location"
                    ]
                }
            },
            {
                name: "Dutch Angle Shot",
                description: "Camera tilted to create a diagonal composition.",
                tags: ["disorienting", "dramatic", "psychological"],
                details: {
                    whyDesirable: "Creates unease and psychological tension. Perfect for thriller and horror scenes.",
                    examples: [
                        { film: "Thor", scene: "Asgard Scenes", description: "Stylized tilted perspective" },
                        "A character's mental breakdown",
                        "A scene of confusion or chaos",
                        "A moment of psychological distress"
                    ]
                }
            }
        ]
    },
    {
        category: "Camera Movements",
        items: [
            {
                name: "Dolly Shot",
                description: "Camera moves smoothly towards or away from the subject.",
                tags: ["smooth", "purposeful", "dynamic", "revealing"],
                details: {
                    whyDesirable: "Creates fluid movement and emotional impact. Perfect for revealing or emphasizing elements.",
                    examples: [
                        { film: "Jaws", scene: "Beach Realization", description: "Zoom and dolly simultaneously" },
                        "A dramatic character revelation",
                        "A slow approach to an important object",
                        "Following a character through a scene"
                    ]
                }
            },
            {
                name: "Tracking Shot",
                description: "Camera follows a subject, maintaining a consistent distance.",
                tags: ["immersive", "continuous", "dynamic"],
                details: {
                    whyDesirable: "Creates immersive experience and maintains connection with subject. Perfect for action sequences.",
                    examples: [
                        { film: "1917", scene: "Trench Sequence", description: "One-take tracking through the trenches" },
                        "Following a character through a crowded space",
                        "Tracking alongside a moving vehicle",
                        "Following a chase sequence"
                    ]
                }
            },
            {
                name: "Dolly Zoom",
                description: "Combines dolly movement with zoom to create vertigo effect.",
                tags: ["psychological", "distorted", "dramatic"],
                details: {
                    whyDesirable: "Creates disorienting effect and psychological tension. Perfect for moments of realization or fear.",
                    examples: [
                        { film: "Vertigo", scene: "Bell Tower", description: "Classic vertigo effect" },
                        "A character's moment of realization",
                        "A dramatic reveal of height or depth"
                    ]
                }
            },
            {
                name: "Whip Pan",
                description: "Rapid camera movement from one subject to another.",
                tags: ["energetic", "fast", "transitional"],
                details: {
                    whyUseThis: "Adds energy and dynamism to transitions or action scenes.",
                    examples: [
                        "Whipping between two characters in a heated argument.",
                        {
                            film: "The Grand Budapest Hotel",
                            scene: "Comedic Transitions",
                            description: "Whip pans used for quick and dynamic scene changes."
                        }
                    ]
                }
            },
            {
                name: "Arc Shot",
                description: "Camera moves in a circular motion around the subject.",
                tags: ["cinematic", "immersive", "rotational"],
                details: {
                    whyUseThis: "Creates dynamic perspective and reveals multiple angles. Perfect for dramatic moments.",
                    examples: [
                        "A 360-degree shot around a character during an intense moment.",
                        {
                            film: "The Avengers",
                            scene: "Assembling Heroes",
                            description: "Epic arc shot of the Avengers preparing for battle."
                        }
                    ]
                }
            }
        ]
    },
    {
        category: "Lens Types",
        items: [
            {
                name: "Wide-Angle Lens",
                description: "Captures a broader field of view with exaggerated perspective.",
                tags: ["expansive", "distorted", "environmental"],
                details: {
                    whyDesirable: "Creates dramatic depth and perspective. Perfect for architectural shots and landscapes.",
                    examples: [
                        { film: "The Grand Budapest Hotel", scene: "Hotel Exterior", description: "Symmetrical wide-angle shots" },
                        "A dramatic landscape vista",
                        "An architectural interior",
                        "A scene emphasizing depth and scale"
                    ]
                }
            },
            {
                name: "Telephoto Lens",
                description: "Long focal length that compresses perspective and isolates subjects.",
                tags: ["compressed", "isolated", "intimate"],
                details: {
                    whyDesirable: "Isolates subjects and creates intimate feel. Perfect for portraits and distant subjects.",
                    examples: [
                        { film: "The Graduate", scene: "Benjamin Running", description: "Compressed perspective running sequence" },
                        "A character observed from afar",
                        "A compressed city street scene",
                        "An intimate portrait moment"
                    ]
                }
            },
            {
                name: "Macro Lens",
                description: "Extreme close-up capability for tiny subjects.",
                tags: ["detailed", "microscopic", "precise"],
                details: {
                    whyDesirable: "Reveals microscopic details. Perfect for extreme close-ups of small objects.",
                    examples: [
                        { film: "Microcosmos", scene: "Insect Close-ups", description: "Detailed insect photography" },
                        "Water droplets on a surface",
                        "Extreme detail of an eye",
                        "Tiny mechanical parts"
                    ]
                }
            },
            {
                name: "Anamorphic Lens",
                description: "Creates a wide, cinematic field of view with signature horizontal lens flares and oval bokeh.",
                tags: ["cinematic", "widescreen", "flare"],
                details: {
                    whyDesirable: "Produces distinctive cinematic look. Perfect for epic scenes and creating film aesthetic.",
                    examples: [
                        { film: "Blade Runner 2049", scene: "City Scenes", description: "Dramatic anamorphic cityscapes" },
                        "Dramatic lens flares in night scenes",
                        "Wide landscape vistas",
                        "Science fiction environments"
                    ]
                }
            }
        ]
    },
    {
        category: "Lighting Techniques",
        items: [
            {
                name: "Three-Point Lighting",
                description: "Standard setup using key, fill, and back lights.",
                tags: ["basic", "professional", "versatile"],
                details: {
                    whyDesirable: "Creates professional, balanced lighting. Foundation for most lighting setups.",
                    examples: [
                        { film: "The Godfather", scene: "Office Scenes", description: "Classic three-point lighting" },
                        "Interview setups",
                        "Studio portrait scenes",
                        "Professional presentations"
                    ]
                }
            },
            {
                name: "Rembrandt Lighting",
                description: "Creates dramatic shadows with triangle of light under eye.",
                tags: ["dramatic", "artistic", "shadowy"],
                details: {
                    whyDesirable: "Creates dramatic, painterly look. Perfect for character portraits and moody scenes.",
                    examples: [
                        { film: "Barry Lyndon", scene: "Candlelit Scenes", description: "Natural Rembrandt-style lighting" },
                        "Character portraits",
                        "Period drama scenes",
                        "Dramatic monologues"
                    ]
                }
            },
            {
                name: "Silhouette Lighting",
                description: "Subject is backlit to create dark silhouette.",
                tags: ["dramatic", "mysterious", "artistic"],
                details: {
                    whyDesirable: "Creates dramatic mystery and visual impact. Perfect for reveals and dramatic entrances.",
                    examples: [
                        { film: "Apocalypse Now", scene: "Kurtz Scenes", description: "Dramatic silhouetted figure" },
                        "Mystery character reveals",
                        "Dramatic entrances",
                        "Artistic transitions"
                    ]
                }
            },
            {
                name: "High-Key Lighting",
                description: "Creates bright, low-contrast scenes with minimal shadows.",
                tags: ["bright", "cheerful", "clean"],
                details: {
                    whyDesirable: "Creates positive, clean aesthetic. Perfect for comedies and commercials.",
                    examples: [
                        { film: "La La Land", scene: "Dance Numbers", description: "Bright, optimistic lighting" },
                        "Comedy scenes",
                        "Commercial product shots",
                        "Fashion photography"
                    ]
                }
            }
        ]
    }
];

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
    
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p class="description">${item.description}</p>
        <div class="tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="details">
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
        </div>
    `;
    
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
    // Clear container
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
