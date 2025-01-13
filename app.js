console.log("Filmmaker's Compendium is ready!");

// Content data with comprehensive categories and detailed information
const content = [
    {
        category: "Shot Types",
        items: [
            {
                name: "Extreme Close-Up Shot (ECU)",
                description: "Focuses on a very small detail, like an eye or an object.",
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
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
                img: "https://via.placeholder.com/300x200",
                tags: ["psychological", "distorted", "dramatic"],
                details: {
                    whyDesirable: "Creates disorienting effect and psychological impact. Perfect for moments of realization or fear.",
                    examples: [
                        { film: "Vertigo", scene: "Staircase Scene", description: "Classic Hitchcock effect" },
                        "A character's moment of shocking realization",
                        "A scene of growing anxiety or fear",
                        "A dramatic reveal of height or depth"
                    ]
                }
            },
            {
                name: "Whip Pan",
                description: "Rapid camera movement from one subject to another.",
                img: "https://via.placeholder.com/300x200",
                tags: ["energetic", "fast", "transitional"],
                details: {
                    whyDesirable: "Creates dynamic transitions and high energy. Perfect for fast-paced sequences.",
                    examples: [
                        { film: "Baby Driver", scene: "Car Chase", description: "Quick pans during action" },
                        "Quick transitions between conversations",
                        "Following rapid action sequences",
                        "Creating dynamic scene transitions"
                    ]
                }
            },
            {
                name: "Arc Shot",
                description: "Camera moves in a circular motion around the subject.",
                img: "https://via.placeholder.com/300x200",
                tags: ["cinematic", "immersive", "rotational"],
                details: {
                    whyDesirable: "Creates dynamic perspective and reveals multiple angles. Perfect for dramatic moments.",
                    examples: [
                        { film: "The Matrix", scene: "Trinity Kick", description: "Dynamic arc motion around character" },
                        "A dramatic character introduction",
                        "A moment of triumph or revelation",
                        "A fight scene highlight"
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
                img: "https://via.placeholder.com/300x200",
                tags: ["wide", "landscape", "architecture"],
                details: {
                    whyDesirable: "Great for landscapes, architecture, or creating dramatic perspective effects.",
                    examples: [
                        "Wide-angle shot of a gothic cathedral's interior with dramatic leading lines",
                        "Capturing a sweeping landscape",
                        "Showing the grandeur of a building",
                        "Creating a sense of space or openness"
                    ]
                }
            },
            {
                name: "Telephoto Lens",
                description: "Magnifies distant subjects with compressed perspective.",
                img: "https://via.placeholder.com/300x200",
                tags: ["compression", "distance", "isolation"],
                details: {
                    whyDesirable: "Ideal for wildlife, sports, or creating compressed perspective effects.",
                    examples: [
                        "Telephoto shot of a lion stalking its prey in the savanna",
                        "Capturing distant action or sports",
                        "Showing a character's isolation or loneliness",
                        "Creating a sense of compression or intimacy"
                    ]
                }
            },
            {
                name: "Prime Lens",
                description: "Fixed focal length lens with superior optical quality.",
                img: "https://via.placeholder.com/300x200",
                tags: ["sharp", "fixed", "quality"],
                details: {
                    whyDesirable: "Provides excellent image quality and low-light performance.",
                    examples: [
                        "Portrait using a 85mm prime lens with beautiful bokeh",
                        "Capturing high-quality images in low light",
                        "Showing a character's features with sharpness",
                        "Creating a sense of intimacy or closeness"
                    ]
                }
            },
            {
                name: "Zoom Lens",
                description: "Variable focal length lens offering flexibility.",
                img: "https://via.placeholder.com/300x200",
                tags: ["versatile", "variable", "flexible"],
                details: {
                    whyDesirable: "Allows quick focal length changes without switching lenses.",
                    examples: [
                        "Documentary shot zooming from wide to close-up during action",
                        "Capturing a scene with changing focal lengths",
                        "Showing a character's reaction with a quick zoom",
                        "Creating a sense of dynamism or energy"
                    ]
                }
            },
            {
                name: "Macro Lens",
                description: "Specialized for extreme close-up photography.",
                img: "https://via.placeholder.com/300x200",
                tags: ["close-up", "detail", "microscopic"],
                details: {
                    whyDesirable: "Reveals tiny details invisible to the naked eye.",
                    examples: [
                        "Macro shot of morning dew on a spider's web",
                        "Capturing the details of a small object",
                        "Showing the texture of a surface",
                        "Creating a sense of wonder or curiosity"
                    ]
                }
            },
            {
                name: "Fisheye Lens",
                description: "Ultra-wide lens creating strong circular distortion.",
                img: "https://via.placeholder.com/300x200",
                tags: ["distortion", "ultra-wide", "circular"],
                details: {
                    whyDesirable: "Creates unique perspective distortion effects.",
                    examples: [
                        "Fisheye shot of a skateboarder mid-trick in a halfpipe",
                        "Capturing a wide scene with distortion",
                        "Showing a character's distorted perspective",
                        "Creating a sense of playfulness or experimentation"
                    ]
                }
            },
            {
                name: "Anamorphic Lens",
                description: "Creates a wide, cinematic field of view with signature horizontal lens flares and oval bokeh.",
                img: "https://via.placeholder.com/300x200",
                tags: ["cinematic", "widescreen", "flare"],
                details: {
                    whyDesirable: "Delivers the classic Hollywood cinematic look with unique characteristics like horizontal lens flares and oval bokeh. Perfect for creating an epic, theatrical feel in your shots.",
                    examples: [
                        "Science fiction scenes with dramatic lens flares from spacecraft lights",
                        "Wide landscape shots with distinctive cinematic feel",
                        "Night city scenes with beautiful oval bokeh from street lights",
                        "Action sequences with dynamic anamorphic distortion"
                    ]
                }
            },
            {
                name: "Tilt-Shift Lens",
                description: "Specialized lens for perspective control and selective focus effects.",
                img: "https://via.placeholder.com/300x200",
                tags: ["perspective", "miniature", "architectural"],
                details: {
                    whyDesirable: "Offers unique creative possibilities from correcting perspective in architectural shots to creating miniature effects. Can make real-world scenes appear like detailed models.",
                    examples: [
                        "Architectural photography maintaining parallel vertical lines",
                        "Cityscape shots that make buildings look like miniature models",
                        "Product photography with precise focus control",
                        "Creative portraits with selective focus planes"
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
                img: "https://via.placeholder.com/300x200",
                tags: ["standard", "professional", "balanced"],
                details: {
                    whyDesirable: "Creates professional, well-balanced lighting for most situations.",
                    examples: [
                        "Three-point lighting setup for a corporate interview",
                        "A standard lighting setup for a news broadcast",
                        "A balanced lighting setup for a product commercial",
                        "A professional lighting setup for a film or TV show"
                    ]
                }
            },
            {
                name: "Rembrandt Lighting",
                description: "Creates dramatic shadows with a triangle of light under the eye on the shadowed side of the face.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dramatic", "portrait", "shadow"],
                details: {
                    whyDesirable: "Creates a classical, painterly look with dramatic shadows and depth. Perfect for character portraits and moody scenes that require sophisticated lighting.",
                    examples: [
                        "Character portraits in period dramas",
                        "Dramatic interviews or monologues",
                        "Film noir detective scenes",
                        "Renaissance-inspired historical scenes"
                    ]
                }
            },
            {
                name: "Split Lighting",
                description: "Lights exactly half the face, leaving the other half in shadow.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dramatic", "contrast", "noir"],
                details: {
                    whyDesirable: "Creates extreme contrast that can symbolize duality or internal conflict. Powerful for dramatic scenes and character moments revealing hidden depths.",
                    examples: [
                        "A character struggling with moral decisions",
                        "Villain reveals in thriller scenes",
                        "Psychological horror moments",
                        "Dramatic confessional scenes"
                    ]
                }
            },
            {
                name: "Butterfly Lighting",
                description: "Creates a butterfly-shaped shadow under the nose.",
                img: "https://via.placeholder.com/300x200",
                tags: ["glamour", "beauty", "portrait"],
                details: {
                    whyDesirable: "Classic Hollywood glamour lighting technique.",
                    examples: [
                        "Vintage Hollywood portrait",
                        "Glamorous fashion photography",
                        "Beauty shots with soft, flattering light",
                        "Romantic portraits with warm, golden light"
                    ]
                }
            },
            {
                name: "Natural Lighting",
                description: "Uses available light from windows or outdoors.",
                img: "https://via.placeholder.com/300x200",
                tags: ["natural", "soft", "realistic"],
                details: {
                    whyDesirable: "Creates realistic, motivated lighting situations.",
                    examples: [
                        "Natural window light illuminating a morning scene",
                        "Outdoor scenes using available sunlight",
                        "Soft, natural light for a romantic scene",
                        "Realistic lighting for a documentary or news segment"
                    ]
                }
            },
            {
                name: "Low-Key Lighting",
                description: "Creates dark, shadowy scenes with high contrast.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dark", "moody", "contrast"],
                details: {
                    whyDesirable: "Perfect for noir, horror, or dramatic scenes.",
                    examples: [
                        "Low-key lighting in a detective's office at night",
                        "A dark and moody horror scene",
                        "A dramatic scene with high contrast",
                        "A film noir-inspired scene with deep shadows"
                    ]
                }
            },
            {
                name: "High-Key Lighting",
                description: "Creates bright, low-contrast scenes with minimal shadows.",
                img: "https://via.placeholder.com/300x200",
                tags: ["bright", "cheerful", "clean"],
                details: {
                    whyDesirable: "Used in commercials, comedies, or upbeat scenes.",
                    examples: [
                        "High-key lighting in a bright, modern kitchen commercial",
                        "A cheerful scene with minimal shadows",
                        "A clean and minimalist aesthetic",
                        "A comedic scene with bright, upbeat lighting"
                    ]
                }
            },
            {
                name: "Practical Lighting",
                description: "Uses visible light sources within the scene.",
                img: "https://via.placeholder.com/300x200",
                tags: ["realistic", "motivated", "diegetic"],
                details: {
                    whyDesirable: "Creates realistic lighting motivated by visible sources.",
                    examples: [
                        "Scene lit only by practical lamps and computer screens",
                        "A character reading a book by a table lamp",
                        "A room lit by a fireplace",
                        "A scene lit by neon signs or streetlights"
                    ]
                }
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    
    // Add filter buttons
    const filterContainer = document.createElement("div");
    filterContainer.className = "filter-buttons";
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        ${content.map(category => 
            `<button class="filter-btn" data-filter="${category.category.toLowerCase().replace(/\s+/g, '-')}">${category.category}</button>`
        ).join("")}
    `;
    main.appendChild(filterContainer);

    // Create search results container
    const searchResults = document.createElement("div");
    searchResults.id = "search-results";
    searchResults.className = "grid";
    searchResults.style.display = "none";
    main.appendChild(searchResults);

    // Generate content sections
    content.forEach(category => {
        const section = document.createElement("section");
        section.id = category.category.toLowerCase().replace(/\s+/g, "-");
        section.innerHTML = `
            <h2>${category.category}</h2>
            <div class="grid">
                ${category.items.map(item => `
                    <div class="card" data-tags="${item.tags.join(" ")}" data-category="${category.category}">
                        <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200'">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                        </div>
                        <div class="expanded-content">
                            <div class="details-section">
                                <h4>Why Use This</h4>
                                <p>${item.details.whyDesirable}</p>
                                <h4>Examples</h4>
                                <ul>
                                    ${item.details.examples.map(example => `<li>${example}</li>`).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
        main.appendChild(section);
    });

    // Setup event handlers
    const searchInput = document.getElementById("search-input");
    const allCards = document.querySelectorAll(".card");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const sections = document.querySelectorAll("section");

    // Function to show modal
    function showModal(content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        // Add content to modal...
        document.body.appendChild(modal);
        
        // Prevent content jump when modal opens
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = scrollbarWidth + 'px';
        document.body.classList.add('modal-open');
        
        // Fade in modal
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });
        
        // Close modal on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }

    // Function to close modal
    function closeModal(modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.paddingRight = '';
            document.body.classList.remove('modal-open');
        }, 300);
    }

    // Debounce search input to prevent rapid updates
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add debounced search handler
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        performSearch(searchTerm);
    }, 150));

    // Filter functionality
    filterContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        searchResults.style.display = "none";
        sections.forEach(section => section.style.display = "block");

        const filter = btn.dataset.filter;
        allCards.forEach(card => {
            if (filter === "all") {
                card.style.display = "block";
            } else {
                const category = card.closest("section").id;
                card.style.display = category === filter ? "block" : "none";
            }
        });

        sections.forEach(section => {
            const hasVisibleCards = Array.from(section.querySelectorAll('.card'))
                .some(card => card.style.display !== "none");
            section.style.display = hasVisibleCards ? "block" : "none";
        });
    });

    // Search functionality with debouncing
    let searchTimeout;
    searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = searchInput.value.toLowerCase().trim();
            
            if (query.length > 0) {
                filterBtns.forEach(btn => btn.classList.remove("active"));
                document.querySelector('[data-filter="all"]').classList.add("active");
                
                sections.forEach(section => section.style.display = "none");
                searchResults.style.display = "grid";
                searchResults.innerHTML = ""

                let results = [];
                content.forEach(category => {
                    category.items.forEach(item => {
                        const searchText = `${item.name} ${item.description} ${item.tags.join(" ")} ${category.category} ${item.details.whyDesirable} ${item.details.examples.join(" ")}`.toLowerCase();
                        if (searchText.includes(query)) {
                            results.push({ ...item, category: category.category });
                        }
                    });
                });

                if (results.length > 0) {
                    results.forEach(result => {
                        const resultCard = document.createElement("div");
                        resultCard.className = "card";
                        resultCard.innerHTML = `
                            <div class="category-label">${result.category}</div>
                            <img src="${result.img}" alt="${result.name}" onerror="this.src='https://via.placeholder.com/300x200'">
                            <h3>${result.name}</h3>
                            <p>${result.description}</p>
                            <div class="tags">
                                ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                            </div>
                            <div class="expanded-content">
                                <div class="details-section">
                                    <h4>Why Use This</h4>
                                    <p>${result.details.whyDesirable}</p>
                                    <h4>Examples</h4>
                                    <ul>
                                        ${result.details.examples.map(example => `<li>${example}</li>`).join("")}
                                    </ul>
                                </div>
                            </div>
                        `;
                        searchResults.appendChild(resultCard);
                    });
                } else {
                    searchResults.innerHTML = `
                        <div class="no-results">
                            <p>No results found for "${query}"</p>
                            <p>Try different keywords or check your spelling</p>
                        </div>
                    `;
                }
            } else {
                document.querySelector('[data-filter="all"]').click();
            }
        }, 300);
    });

    // Card expansion
    document.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        if (!card) return;

        const wasExpanded = card.classList.contains("expanded");
        allCards.forEach(c => {
            if (c !== card && c.classList.contains("expanded")) {
                c.style.transition = "all 0.3s ease";
                c.classList.remove("expanded");
            }
        });

        if (!wasExpanded) {
            card.style.transition = "all 0.3s ease";
            card.classList.add("expanded");
            
            const cardRect = card.getBoundingClientRect();
            const isVisible = (cardRect.top >= 0) && (cardRect.bottom <= window.innerHeight);
            if (!isVisible) {
                card.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        }
    });

    // Initial state
    document.querySelector('[data-filter="all"]').click();
});

function performSearch(searchTerm) {
    // Perform search logic here
    console.log(`Searching for: ${searchTerm}`);
}
