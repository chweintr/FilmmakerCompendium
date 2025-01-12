console.log("Filmmaker's Compendium is ready!");

// Content data with comprehensive categories and detailed information
const content = [
    {
        category: "Lens Types",
        items: [
            {
                name: "Anamorphic Lens",
                description: "Creates distinctive cinematic widescreen shots with signature horizontal lens flares and oval bokeh.",
                img: "https://via.placeholder.com/300x200",
                tags: ["cinematic", "widescreen", "horizontal flares", "oval bokeh"],
                details: "Originally developed for cinema to create wide aspect ratios without losing resolution. Popular in films like Blade Runner and Inception. Creates a unique 2.39:1 aspect ratio with characteristic horizontal lens flares."
            },
            {
                name: "Wide-Angle Lens",
                description: "Captures expansive scenes with a broader field of view, perfect for landscapes and architectural shots.",
                img: "https://via.placeholder.com/300x200",
                tags: ["landscape", "wide", "spacious", "architecture"],
                details: "Typically ranges from 16-35mm. Great for environmental portraits and establishing shots. Can create dramatic perspective effects when used close to subjects."
            },
            {
                name: "Telephoto Lens",
                description: "Brings distant subjects closer with a compressed perspective, ideal for wildlife and sports.",
                img: "https://via.placeholder.com/300x200",
                tags: ["compression", "distance", "sports", "wildlife"],
                details: "Ranges from 70mm to 600mm and beyond. Creates beautiful background blur and compression. Essential for wildlife documentaries and sports coverage."
            },
            {
                name: "Macro Lens",
                description: "Enables extreme close-up photography with 1:1 magnification or greater.",
                img: "https://via.placeholder.com/300x200",
                tags: ["close-up", "detail", "macro", "nature"],
                details: "Reveals tiny details invisible to the naked eye. Popular in nature documentaries and product photography. Requires careful focus due to extremely shallow depth of field."
            }
        ]
    },
    {
        category: "Shot Types",
        items: [
            {
                name: "Extreme Wide Shot",
                description: "Shows the subject from a great distance, emphasizing their surroundings and environment.",
                img: "https://via.placeholder.com/300x200",
                tags: ["establishing", "landscape", "environment"],
                details: "Often used as establishing shots in films. Shows scale and context. Common in epic films and nature documentaries."
            },
            {
                name: "Medium Shot",
                description: "Frames the subject from waist up, balancing detail and context.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dialogue", "waist-up", "conversation"],
                details: "The workhouse of dialogue scenes. Shows body language while maintaining intimacy. Perfect for interviews and conversations."
            },
            {
                name: "Over-the-Shoulder",
                description: "Films from behind one character's shoulder while facing the other character.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dialogue", "perspective", "conversation"],
                details: "Creates depth and maintains screen direction in dialogue scenes. Helps establish eyelines and spatial relationships between characters."
            }
        ]
    },
    {
        category: "Camera Movements",
        items: [
            {
                name: "Dolly Shot",
                description: "Camera moves smoothly along tracks or rails, creating fluid motion.",
                img: "https://via.placeholder.com/300x200",
                tags: ["movement", "tracking", "smooth"],
                details: "Creates smooth, cinematic movement. Can be used for dramatic reveals or to follow action. Famous example: Goodfellas Copacabana scene."
            },
            {
                name: "Steadicam Shot",
                description: "Stabilized camera movement that follows action smoothly while operator walks.",
                img: "https://via.placeholder.com/300x200",
                tags: ["stabilized", "following", "movement"],
                details: "Invented by Garrett Brown. Revolutionary for mobile camera work. Famous in The Shining's hallway scenes."
            },
            {
                name: "Crane Shot",
                description: "Camera moves vertically, horizontally, or in an arc using a crane or jib.",
                img: "https://via.placeholder.com/300x200",
                tags: ["vertical", "sweeping", "dramatic"],
                details: "Creates dramatic reveals and establishes scale. Often used in musical numbers and epic scenes. Classic example: Gone with the Wind's Atlanta depot scene."
            }
        ]
    },
    {
        category: "Lighting Techniques",
        items: [
            {
                name: "Rembrandt Lighting",
                description: "Creates a triangle of light on the subject's cheek, named after the painter's style.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dramatic", "portrait", "shadow"],
                details: "Classic portrait lighting technique. Creates depth and drama. One side of face is lit with triangle of light under eye on shadow side."
            },
            {
                name: "Split Lighting",
                description: "Illuminates half the face while leaving the other in shadow.",
                img: "https://via.placeholder.com/300x200",
                tags: ["dramatic", "contrast", "noir"],
                details: "Creates dramatic contrast. Popular in film noir. Emphasizes texture and form. Great for mysterious or villainous characters."
            },
            {
                name: "Butterfly Lighting",
                description: "Creates a butterfly-shaped shadow under the nose.",
                img: "https://via.placeholder.com/300x200",
                tags: ["glamour", "beauty", "portrait"],
                details: "Classic Hollywood glamour lighting. Flattering for most faces. Light positioned directly above camera, pointing down at subject."
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
                        const searchText = `${item.name} ${item.description} ${item.tags.join(" ")} ${category.category} ${item.details}`.toLowerCase();
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
