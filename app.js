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
                name: "Wide Shot (WS)",
                description: "Shows the entire subject and their immediate surroundings, providing context and spatial relationships.",
                img: "https://via.placeholder.com/300x200",
                tags: ["establishing", "context", "full-body"],
                details: {
                    whyDesirable: "Essential for establishing scenes, showing character relationships, and capturing action sequences. Helps viewers understand the spatial layout and relationships between characters and their environment.",
                    examples: [
                        "A medieval marketplace bustling with activity, showing daily life",
                        "A dance sequence where you need to see full body movements",
                        "A western standoff showing the distance between gunfighters",
                        "A family gathering in their living room, establishing relationships"
                    ]
                }
            },
            {
                name: "Medium Wide Shot (MWS)",
                description: "Shows the subject from the knees up, balancing environment and character detail.",
                img: "https://via.placeholder.com/300x200",
                tags: ["balanced", "three-quarter", "conversation"],
                details: {
                    whyDesirable: "Perfect for group conversations, showing body language, and maintaining environmental context. Balances character detail with surroundings for natural, engaging scenes.",
                    examples: [
                        "Three friends walking down a neon-lit street at night, showing both expressions and environment",
                        "A family dinner scene where you want to see reactions and food",
                        "A business meeting where body language is important",
                        "A street performance with audience reactions visible"
                    ]
                }
            },
            {
                name: "Medium Shot (MS)",
                description: "Frames the subject from waist up, focusing on upper body language and facial expressions.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dialogue", "waist-up", "expression"],
                details: {
                    whyDesirable: "The workhorse of dialogue scenes. Perfect for interviews, conversations, and emotional moments.",
                    examples: [
                        "A detective interrogating a suspect across a table",
                        "A romantic dinner conversation",
                        "A heated argument between friends",
                        "A job interview"
                    ]
                }
            },
            {
                name: "Medium Close-Up (MCU)",
                description: "Shows the subject from chest up, emphasizing facial expressions while retaining some body language.",
                img: "https://via.placeholder.com/300x200",
                tags: ["expression", "emotion", "intimate"],
                details: {
                    whyDesirable: "Ideal for emotional scenes, important dialogue, or reaction shots.",
                    examples: [
                        "A character realizing a devastating truth",
                        "A romantic moment between two characters",
                        "A dramatic reveal in a mystery",
                        "A character's emotional breakdown"
                    ]
                }
            },
            {
                name: "Close-Up (CU)",
                description: "Tightly frames the subject's face, focusing on emotional expression and intimate details.",
                img: "https://via.placeholder.com/300x200",
                tags: ["emotion", "intimate", "face"],
                details: {
                    whyDesirable: "Creates emotional connection, shows character reactions, or highlights important details.",
                    examples: [
                        "Tears welling up in a character's eyes",
                        "A character's eyes widening in surprise",
                        "A character's lips curling into a smile",
                        "A character's face contorted in pain"
                    ]
                }
            },
            {
                name: "Extreme Close-Up (ECU)",
                description: "Shows extreme detail of a subject, often a specific feature or object.",
                img: "https://via.placeholder.com/300x200",
                tags: ["detail", "intensity", "dramatic"],
                details: {
                    whyDesirable: "Creates intensity, shows minute details, or emphasizes specific elements.",
                    examples: [
                        "A ticking pocket watch in trembling hands",
                        "A key turning in a lock",
                        "A gun being cocked",
                        "A character's eyes scanning a room"
                    ]
                }
            },
            {
                name: "Dutch Angle",
                description: "Tilts the camera off its horizontal axis to create unease or tension.",
                img: "https://via.placeholder.com/300x200",
                tags: ["tension", "dramatic", "psychological"],
                details: {
                    whyDesirable: "Used to convey psychological tension, disorientation, or dramatic moments.",
                    examples: [
                        "A character running through a twisted corridor",
                        "A character experiencing a nightmare",
                        "A character in a state of confusion",
                        "A dramatic plot twist"
                    ]
                }
            },
            {
                name: "Over-the-Shoulder (OTS)",
                description: "Films from behind one character's shoulder while facing another character.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dialogue", "perspective", "conversation"],
                details: {
                    whyDesirable: "Standard for dialogue scenes, establishes spatial relationships and eyelines.",
                    examples: [
                        "An intense negotiation scene",
                        "A romantic conversation",
                        "A heated argument",
                        "A job interview"
                    ]
                }
            },
            {
                name: "Point of View (POV)",
                description: "Shows the scene directly from a character's perspective.",
                img: "https://via.placeholder.com/300x200",
                tags: ["perspective", "subjective", "immersive"],
                details: {
                    whyDesirable: "Creates immersion, shows character perspective, or builds tension.",
                    examples: [
                        "Exploring a dark cave with a flickering flashlight",
                        "Looking through a sniper's scope",
                        "Reading a letter or document",
                        "Experiencing a character's memories"
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
                description: "Camera moves smoothly along tracks, creating fluid horizontal movement.",
                img: "https://via.placeholder.com/300x200",
                tags: ["movement", "smooth", "tracking"],
                details: {
                    whyDesirable: "Creates smooth, cinematic movement that can follow action, reveal information, or build emotional intensity. The fluid motion helps immerse viewers and can create powerful dramatic effects.",
                    examples: [
                        "Following a character walking through a transforming set, revealing changes over time",
                        "A slow push-in during an emotional monologue, increasing intimacy",
                        "Moving past a series of vignettes in a single take",
                        "Tracking alongside a car chase while maintaining smooth motion"
                    ]
                }
            },
            {
                name: "Dolly Zoom",
                description: "Simultaneously dollies and zooms in opposite directions, creating a vertigo effect.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertigo", "psychological", "dramatic"],
                details: {
                    whyDesirable: "Creates a powerful psychological effect where the background appears to shift dramatically while the subject remains the same size. Perfect for moments of realization, fear, or dramatic revelation.",
                    examples: [
                        "A character realizing they're standing on a skyscraper edge, emphasizing height",
                        "The moment a detective solves a complex case, warping reality",
                        "A horror scene where the corridor seems to stretch infinitely",
                        "A dream sequence where space becomes distorted"
                    ]
                }
            },
            {
                name: "Tracking Shot",
                description: "Camera follows alongside moving subjects, maintaining a consistent distance.",
                img: "https://via.placeholder.com/300x200",
                tags: ["following", "movement", "parallel"],
                details: {
                    whyDesirable: "Great for following action, revealing locations, or maintaining character focus.",
                    examples: [
                        "Following athletes running a race",
                        "Tracking a character through a crowded market",
                        "Moving alongside a vehicle in motion",
                        "Following a character through a complex environment"
                    ]
                }
            },
            {
                name: "Steadicam Shot",
                description: "Smooth, handheld camera movement using a stabilizing system.",
                img: "https://via.placeholder.com/300x200",
                tags: ["smooth", "handheld", "flowing"],
                details: {
                    whyDesirable: "Creates fluid movement while maintaining stability. Perfect for complex moving shots.",
                    examples: [
                        "Following a character through a crowded nightclub",
                        "Moving through a complex set with ease",
                        "Tracking a character in a dynamic environment",
                        "Creating a sense of realism in handheld shots"
                    ]
                }
            },
            {
                name: "Crane Shot",
                description: "Camera moves vertically and horizontally using a mechanical crane.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertical", "sweeping", "dramatic"],
                details: {
                    whyDesirable: "Creates dramatic reveals, establishes location, or shows scale.",
                    examples: [
                        "Rising from street level to reveal an entire cityscape",
                        "Moving over a landscape to show its vastness",
                        "Sweeping over a crowd to emphasize its size",
                        "Dramatically revealing a character's location"
                    ]
                }
            },
            {
                name: "Pan",
                description: "Camera rotates horizontally from a fixed position.",
                img: "https://via.placeholder.com/300x200",
                tags: ["horizontal", "rotation", "reveal"],
                details: {
                    whyDesirable: "Used for revealing information, following action, or connecting subjects.",
                    examples: [
                        "Panning across a room full of suspicious characters during a murder mystery",
                        "Following a character as they move across a room",
                        "Revealing a hidden object or clue",
                        "Connecting two characters in a scene"
                    ]
                }
            },
            {
                name: "Tilt",
                description: "Camera rotates vertically from a fixed position.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertical", "rotation", "reveal"],
                details: {
                    whyDesirable: "Shows height or depth, reveals information, or creates dramatic effect.",
                    examples: [
                        "Tilting up a massive ancient temple from ground to sky",
                        "Revealing a character's height or stature",
                        "Showing the depth of a room or environment",
                        "Creating a sense of drama or tension"
                    ]
                }
            },
            {
                name: "Whip Pan",
                description: "Extremely fast pan that blurs the image.",
                img: "https://via.placeholder.com/300x200",
                tags: ["fast", "transition", "energy"],
                details: {
                    whyDesirable: "Creates energy, transitions between scenes, or shows rapid movement.",
                    examples: [
                        "Whip panning between multiple conversations at a party",
                        "Transitioning between scenes with a fast-paced feel",
                        "Showing rapid movement or action",
                        "Creating a sense of urgency or excitement"
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
