console.log("Filmmaker's Compendium is ready!");

// Content data with comprehensive categories and detailed information
const content = [
    {
        category: "Shot Types",
        items: [
            {
                name: "Extreme Wide Shot (EWS)",
                description: "Shows the subject from a great distance, emphasizing their environment and surroundings.",
                img: "https://via.placeholder.com/300x200",
                tags: ["establishing", "landscape", "environment", "epic"],
                details: "Used to establish location, show scale, or create a sense of isolation. Common in epic films and nature documentaries.",
                example: "Extreme wide shot of a lone warrior standing atop a mountain peak at sunrise."
            },
            {
                name: "Wide Shot (WS)",
                description: "Shows the entire subject and their immediate surroundings, providing context and spatial relationships.",
                img: "https://via.placeholder.com/300x200",
                tags: ["establishing", "context", "full-body"],
                details: "Essential for establishing scenes, showing character relationships, or capturing action sequences.",
                example: "Wide shot of a medieval marketplace bustling with activity."
            },
            {
                name: "Medium Wide Shot (MWS)",
                description: "Shows the subject from the knees up, balancing environment and character detail.",
                img: "https://via.placeholder.com/300x200",
                tags: ["balanced", "three-quarter", "conversation"],
                details: "Great for group conversations, showing body language, or capturing movement while maintaining context.",
                example: "Medium wide shot of three friends walking down a neon-lit street at night."
            },
            {
                name: "Medium Shot (MS)",
                description: "Frames the subject from waist up, focusing on upper body language and facial expressions.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dialogue", "waist-up", "expression"],
                details: "The workhorse of dialogue scenes. Perfect for interviews, conversations, and emotional moments.",
                example: "Medium shot of a detective interrogating a suspect across a table."
            },
            {
                name: "Medium Close-Up (MCU)",
                description: "Shows the subject from chest up, emphasizing facial expressions while retaining some body language.",
                img: "https://via.placeholder.com/300x200",
                tags: ["expression", "emotion", "intimate"],
                details: "Ideal for emotional scenes, important dialogue, or reaction shots.",
                example: "Medium close-up of a character realizing a devastating truth."
            },
            {
                name: "Close-Up (CU)",
                description: "Tightly frames the subject's face, focusing on emotional expression and intimate details.",
                img: "https://via.placeholder.com/300x200",
                tags: ["emotion", "intimate", "face"],
                details: "Creates emotional connection, shows character reactions, or highlights important details.",
                example: "Close-up of tears welling up in a character's eyes."
            },
            {
                name: "Extreme Close-Up (ECU)",
                description: "Shows extreme detail of a subject, often a specific feature or object.",
                img: "https://via.placeholder.com/300x200",
                tags: ["detail", "intensity", "dramatic"],
                details: "Creates intensity, shows minute details, or emphasizes specific elements.",
                example: "Extreme close-up of a ticking pocket watch in trembling hands."
            },
            {
                name: "Dutch Angle",
                description: "Tilts the camera off its horizontal axis to create unease or tension.",
                img: "https://via.placeholder.com/300x200",
                tags: ["tension", "dramatic", "psychological"],
                details: "Used to convey psychological tension, disorientation, or dramatic moments.",
                example: "Dutch angle shot of a character running through a twisted corridor."
            },
            {
                name: "Over-the-Shoulder (OTS)",
                description: "Films from behind one character's shoulder while facing another character.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dialogue", "perspective", "conversation"],
                details: "Standard for dialogue scenes, establishes spatial relationships and eyelines.",
                example: "Over-the-shoulder shot during an intense negotiation scene."
            },
            {
                name: "Point of View (POV)",
                description: "Shows the scene directly from a character's perspective.",
                img: "https://via.placeholder.com/300x200",
                tags: ["perspective", "subjective", "immersive"],
                details: "Creates immersion, shows character perspective, or builds tension.",
                example: "POV shot of exploring a dark cave with a flickering flashlight."
            }
        ]
    },
    {
        category: "Camera Movements",
        items: [
            {
                name: "Dolly Shot",
                description: "Camera moves smoothly along tracks, creating fluid horizontal movement.",
                img: "https://via.placeholder.com/300x200",
                tags: ["movement", "smooth", "tracking"],
                details: "Creates smooth, cinematic movement. Perfect for following action or revealing scenes.",
                example: "Dolly shot following a character walking through a transforming set."
            },
            {
                name: "Dolly Zoom",
                description: "Simultaneously dollies and zooms in opposite directions, creating a vertigo effect.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertigo", "psychological", "dramatic"],
                details: "Also known as the Vertigo effect. Creates disorientation or emotional impact.",
                example: "Dolly zoom on a character realizing they're standing on a skyscraper edge."
            },
            {
                name: "Tracking Shot",
                description: "Camera follows alongside moving subjects, maintaining a consistent distance.",
                img: "https://via.placeholder.com/300x200",
                tags: ["following", "movement", "parallel"],
                details: "Great for following action, revealing locations, or maintaining character focus.",
                example: "Tracking shot following athletes running a race."
            },
            {
                name: "Steadicam Shot",
                description: "Smooth, handheld camera movement using a stabilizing system.",
                img: "https://via.placeholder.com/300x200",
                tags: ["smooth", "handheld", "flowing"],
                details: "Creates fluid movement while maintaining stability. Perfect for complex moving shots.",
                example: "Steadicam shot following a character through a crowded nightclub."
            },
            {
                name: "Crane Shot",
                description: "Camera moves vertically and horizontally using a mechanical crane.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertical", "sweeping", "dramatic"],
                details: "Creates dramatic reveals, establishes location, or shows scale.",
                example: "Crane shot rising from street level to reveal an entire cityscape."
            },
            {
                name: "Pan",
                description: "Camera rotates horizontally from a fixed position.",
                img: "https://via.placeholder.com/300x200",
                tags: ["horizontal", "rotation", "reveal"],
                details: "Used for revealing information, following action, or connecting subjects.",
                example: "Pan across a room full of suspicious characters during a murder mystery."
            },
            {
                name: "Tilt",
                description: "Camera rotates vertically from a fixed position.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertical", "rotation", "reveal"],
                details: "Shows height or depth, reveals information, or creates dramatic effect.",
                example: "Tilt up a massive ancient temple from ground to sky."
            },
            {
                name: "Whip Pan",
                description: "Extremely fast pan that blurs the image.",
                img: "https://via.placeholder.com/300x200",
                tags: ["fast", "transition", "energy"],
                details: "Creates energy, transitions between scenes, or shows rapid movement.",
                example: "Whip pan between multiple conversations at a party."
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
                details: "Great for landscapes, architecture, or creating dramatic perspective effects.",
                example: "Wide-angle shot of a gothic cathedral's interior with dramatic leading lines."
            },
            {
                name: "Telephoto Lens",
                description: "Magnifies distant subjects with compressed perspective.",
                img: "https://via.placeholder.com/300x200",
                tags: ["compression", "distance", "isolation"],
                details: "Ideal for wildlife, sports, or creating compressed perspective effects.",
                example: "Telephoto shot of a lion stalking its prey in the savanna."
            },
            {
                name: "Prime Lens",
                description: "Fixed focal length lens with superior optical quality.",
                img: "https://via.placeholder.com/300x200",
                tags: ["sharp", "fixed", "quality"],
                details: "Provides excellent image quality and low-light performance.",
                example: "Portrait using a 85mm prime lens with beautiful bokeh."
            },
            {
                name: "Zoom Lens",
                description: "Variable focal length lens offering flexibility.",
                img: "https://via.placeholder.com/300x200",
                tags: ["versatile", "variable", "flexible"],
                details: "Allows quick focal length changes without switching lenses.",
                example: "Documentary shot zooming from wide to close-up during action."
            },
            {
                name: "Macro Lens",
                description: "Specialized for extreme close-up photography.",
                img: "https://via.placeholder.com/300x200",
                tags: ["close-up", "detail", "microscopic"],
                details: "Reveals tiny details invisible to the naked eye.",
                example: "Macro shot of morning dew on a spider's web."
            },
            {
                name: "Fisheye Lens",
                description: "Ultra-wide lens creating strong circular distortion.",
                img: "https://via.placeholder.com/300x200",
                tags: ["distortion", "ultra-wide", "circular"],
                details: "Creates unique perspective distortion effects.",
                example: "Fisheye shot of a skateboarder mid-trick in a halfpipe."
            },
            {
                name: "Tilt-Shift Lens",
                description: "Specialized lens for perspective control and selective focus.",
                img: "https://via.placeholder.com/300x200",
                tags: ["perspective", "miniature", "architectural"],
                details: "Controls perspective in architectural shots or creates miniature effects.",
                example: "Tilt-shift cityscape making buildings look like toys."
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
                details: "Creates professional, well-balanced lighting for most situations.",
                example: "Three-point lighting setup for a corporate interview."
            },
            {
                name: "Rembrandt Lighting",
                description: "Creates dramatic shadows with a triangle of light under the eye.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dramatic", "portrait", "shadow"],
                details: "Classic portrait lighting technique creating depth and drama.",
                example: "Rembrandt lighting on a character in period costume."
            },
            {
                name: "Split Lighting",
                description: "Lights one half of the face, leaving the other in shadow.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dramatic", "contrast", "noir"],
                details: "Creates dramatic contrast, popular in film noir.",
                example: "Split lighting on a mysterious character in shadows."
            },
            {
                name: "Butterfly Lighting",
                description: "Creates a butterfly-shaped shadow under the nose.",
                img: "https://via.placeholder.com/300x200",
                tags: ["glamour", "beauty", "portrait"],
                details: "Classic Hollywood glamour lighting technique.",
                example: "Butterfly lighting for a vintage Hollywood portrait."
            },
            {
                name: "Natural Lighting",
                description: "Uses available light from windows or outdoors.",
                img: "https://via.placeholder.com/300x200",
                tags: ["natural", "soft", "realistic"],
                details: "Creates realistic, motivated lighting situations.",
                example: "Natural window light illuminating a morning scene."
            },
            {
                name: "Low-Key Lighting",
                description: "Creates dark, shadowy scenes with high contrast.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dark", "moody", "contrast"],
                details: "Perfect for noir, horror, or dramatic scenes.",
                example: "Low-key lighting in a detective's office at night."
            },
            {
                name: "High-Key Lighting",
                description: "Creates bright, low-contrast scenes with minimal shadows.",
                img: "https://via.placeholder.com/300x200",
                tags: ["bright", "cheerful", "clean"],
                details: "Used in commercials, comedies, or upbeat scenes.",
                example: "High-key lighting in a bright, modern kitchen commercial."
            },
            {
                name: "Practical Lighting",
                description: "Uses visible light sources within the scene.",
                img: "https://via.placeholder.com/300x200",
                tags: ["realistic", "motivated", "diegetic"],
                details: "Creates realistic lighting motivated by visible sources.",
                example: "Scene lit only by practical lamps and computer screens."
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
                            <p>${item.details}</p>
                            ${item.example ? `<p>Example: ${item.example}</p>` : ''}
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
                searchResults.innerHTML = "";

                let results = [];
                content.forEach(category => {
                    category.items.forEach(item => {
                        const searchText = `${item.name} ${item.description} ${item.tags.join(" ")} ${category.category} ${item.details} ${item.example || ''}`.toLowerCase();
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
                                <p>${result.details}</p>
                                ${result.example ? `<p>Example: ${result.example}</p>` : ''}
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
