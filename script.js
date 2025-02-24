const promptData = {
    shotType: [
        "Close-up portrait",
        "Full body shot",
        "Mid-shot from waist up",
        "Over-the-shoulder selfie",
        "Candid shot from behind",
        "Low angle shot",
        "High angle shot",
        "Dutch angle shot",
        "Profile shot",
        "Wide shot",
        "Extreme close-up of face",
        "Action shot",
        "Mirror selfie",
        "Group photo",
        "Silhouette shot",
        "Three-quarter view portrait",
        "Dramatic upward angle",
        "Bird's eye view",
        "Worm's eye view",
        "Side profile action shot",
        "Dynamic motion blur shot",
        "Candid walking shot",
        "Natural pose snapshot",
        "Artistic blur effect",
        "Dramatic shadow play",
        "Backlit silhouette shot",
        "Environmental portrait",
        "Lifestyle action shot",
        "Casual snapshot style",
        "Professional studio style",
        "Documentary style shot",
        "Street photography style",
        "Fashion photography angle",
        "Sports action shot",
        "Dramatic perspective shot",
        "Intimate close-up",
        "Editorial style shot",
        "Glamour photography angle",
        "Fitness action shot",
        "Competition style photo",
        "Behind-the-scenes shot",
        "Natural light portrait",
        "Artistic composition shot",
        "Dramatic lighting shot",
        "Casual lifestyle shot",
        "Power pose shot",
        "Strength showcase shot",
        "Dynamic movement capture",
        "Candid reaction shot",
        "Victory pose capture"
    ],
    pose: [
        "Casual standing pose with hands on hips",
        "Walking confidently",
        "Flexing biceps with a smile",
        "Sitting cross-legged",
        "Lying on beach towel",
        "Double bicep pose",
        "Victory pose",
        "Natural walking pose",
        "Stretching pose",
        "Workout action shot",
        "Relaxed leaning pose",
        "Competition pose",
        "Playful jumping",
        "Meditation pose",
        "Dancing pose",
        "Front lat spread pose",
        "Back double bicep pose",
        "Side chest pose",
        "Most muscular pose",
        "Abdominal and thigh pose",
        "Side tricep pose",
        "Front relaxed stance",
        "Back relaxed pose",
        "Quarter turn pose",
        "Side oblique pose",
        "Vacuum pose",
        "Crab most muscular",
        "Standing relaxed pose",
        "Front twisting pose",
        "Side serratus pose",
        "Rear lat spread",
        "Hands clasped behind head",
        "Standing proud pose",
        "Warrior pose",
        "Power stance",
        "Graceful stretching pose",
        "Dynamic twisting pose",
        "Casual seated pose",
        "Confident striding pose",
        "Playful flexing pose",
        "Elegant standing pose",
        "Strong side pose",
        "Powerful front pose",
        "Dramatic stance",
        "Relaxed shoulder pose",
        "Athletic ready stance",
        "Graceful arms raised",
        "Dynamic movement pose",
        "Strength demonstration pose",
        "Classic bodybuilding pose"
    ],
    lighting: [
        "Soft natural daylight",
        "Golden hour sunset glow",
        "Dramatic gym lighting",
        "Moody street lights",
        "Bright beach sunshine",
        "Neon lights",
        "Overcast diffused light",
        "Backlit silhouette",
        "Studio-style lighting",
        "Candlelight",
        "Morning sunrise",
        "Blue hour lighting",
        "Harsh midday sun",
        "Indoor warm lighting",
        "Dramatic side lighting",
        "Rim lighting effect",
        "Split lighting setup",
        "Butterfly lighting pattern",
        "Loop lighting style",
        "Rembrandt lighting",
        "Broad lighting effect",
        "Short lighting style",
        "Natural window light",
        "Artificial gym fluorescents",
        "LED color lighting",
        "Soft box lighting",
        "Ring light effect",
        "Dramatic spotlight",
        "Ambient room lighting",
        "Mixed natural and artificial",
        "Sunset streaming rays",
        "Dawn's early light",
        "Twilight ambiance",
        "Studio strobe lighting",
        "Dramatic shadows",
        "High key lighting",
        "Low key lighting",
        "Cinematic lighting",
        "Fashion photography lighting",
        "Documentary style lighting",
        "Moody atmospheric lighting",
        "Contrast lighting",
        "Soft diffused glow",
        "Dynamic light trails",
        "Dramatic backlighting",
        "Natural reflection lighting",
        "Urban street lighting",
        "Artistic light painting",
        "Environmental lighting",
        "Dramatic key lighting"
    ],
    scene: [
        "Modern gym interior",
        "Scenic beach at sunset",
        "Urban street corner",
        "Cozy home setting",
        "Public park",
        "Rooftop with city view",
        "Natural forest backdrop",
        "Competition stage",
        "Hotel room",
        "Pool side",
        "Mountain backdrop",
        "Studio setting",
        "Garden setting",
        "Industrial urban background",
        "Luxury spa interior",
        "CrossFit box environment",
        "Outdoor workout area",
        "Private gym setting",
        "Beach workout space",
        "City skyline background",
        "Natural hot springs",
        "Zen garden atmosphere",
        "Historic building backdrop",
        "Modern apartment interior",
        "Rustic gym setting",
        "Traditional dojo",
        "Urban playground",
        "Waterfall background",
        "Desert landscape",
        "Tropical paradise",
        "Snow-covered scene",
        "Underground gym",
        "High-rise view",
        "Athletic track",
        "Boxing gym interior",
        "Yoga studio setting",
        "Power lifting gym",
        "Beach sunset backdrop",
        "Cherry blossom park",
        "Metropolitan street",
        "Ancient temple grounds",
        "Modern fitness center",
        "Natural rock formation",
        "Urban rooftop garden",
        "Traditional Japanese garden",
        "Contemporary art gallery",
        "Historic castle grounds",
        "Bamboo forest setting",
        "Coastal cliff backdrop",
        "Sakura-lined street"
    ],
    camera: [
        "iPhone camera with natural grain",
        "Samsung phone camera with slight blur",
        "Pixel phone camera with HDR",
        "Slightly overexposed phone shot",
        "Film-like phone camera effect",
        "Motion blur effect",
        "Vintage filter look",
        "Raw unedited phone shot",
        "Portrait mode with bokeh",
        "Wide angle lens effect",
        "Night mode phone camera",
        "Soft focus effect",
        "High contrast phone shot",
        "Low light grainy effect",
        "Ultra HD phone camera",
        "Huawei phone camera portrait",
        "OnePlus phone night mode",
        "Xiaomi AI camera mode",
        "OPPO phone beauty mode",
        "Vivo phone natural tone",
        "Instagram filter effect",
        "Snapchat camera style",
        "TikTok video still",
        "Amateur DSLR look",
        "Phone camera live photo",
        "Digital noise aesthetic",
        "Smartphone HDR+ mode",
        "Mobile camera portrait",
        "Phone camera pro mode",
        "Candid phone snapshot",
        "Natural phone camera",
        "Smartphone telephoto lens",
        "Mobile macro mode",
        "Phone camera burst shot",
        "Smartphone panorama crop",
        "Mobile camera raw format",
        "Phone camera film simulation",
        "Smartphone lens flare",
        "Mobile camera light trail",
        "Phone camera long exposure",
        "Amateur photography style",
        "Casual phone snapshot",
        "Quick capture mode",
        "Spontaneous phone shot",
        "Natural lighting capture",
        "Mobile camera art filter",
        "Phone camera vintage mode",
        "Smartphone color grade",
        "Mobile camera natural look",
        "Phone camera authentic style"
    ],
    clothing: [
        "form-fitting sports bra and compression shorts",
        "supportive workout top and high-waist leggings",
        "well-fitted competition bikini",
        "stretchy athletic tank top and shorts",
        "custom-sized crop top and yoga pants",
        "reinforced sports bra and workout shorts",
        "properly fitted athletic wear",
        "supportive swimming suit",
        "size-appropriate workout outfit",
        "comfortable gym attire",
        "flattering athletic dress",
        "properly sized compression wear",
        "well-fitted training suit",
        "custom competition outfit",
        "tailored athleisure wear",
        "moisture-wicking sports set",
        "breathable mesh workout top",
        "supportive racerback sports bra",
        "high-impact training outfit",
        "flexible yoga wear",
        "competition posing suit",
        "professional stage bikini",
        "custom bodybuilding attire",
        "performance fitness wear",
        "premium gym outfit",
        "ergonomic training clothes",
        "competition prep wear",
        "muscle showcase outfit",
        "figure competition suit",
        "physique display wear",
        "strength training gear",
        "premium athletic set",
        "professional sports outfit",
        "competition ready attire",
        "muscle definition wear",
        "body-conscious training suit",
        "premium workout ensemble",
        "competition stage wear",
        "muscle showcase clothing",
        "professional training gear",
        "premium sports outfit",
        "competition style wear",
        "muscle display attire",
        "professional gym wear",
        "premium training suit",
        "competition prep outfit",
        "muscle definition gear",
        "professional workout wear",
        "premium athletic outfit",
        "competition ready gear"
    ],
    expression: [
        "Confident smile",
        "Focused determination",
        "Playful grin",
        "Natural laugh",
        "Serious expression",
        "Peaceful meditation face",
        "Victory celebration",
        "Candid happiness",
        "Fierce competition face",
        "Relaxed smile",
        "Energetic expression",
        "Thoughtful gaze",
        "Friendly smile",
        "Determined focus",
        "Joyful expression",
        "Powerful smirk",
        "Intense concentration",
        "Serene meditation",
        "Triumphant grin",
        "Competitive focus",
        "Proud smile",
        "Strong determination",
        "Peaceful contentment",
        "Victorious joy",
        "Focused intensity",
        "Natural happiness",
        "Confident poise",
        "Meditative calm",
        "Achievement smile",
        "Competitive spirit",
        "Graceful expression",
        "Powerful presence",
        "Inner peace look",
        "Success smile",
        "Focused energy",
        "Natural grace",
        "Confident aura",
        "Zen-like calm",
        "Victory expression",
        "Competitive edge",
        "Radiant confidence",
        "Powerful focus",
        "Peaceful strength",
        "Triumphant look",
        "Intense dedication",
        "Natural radiance",
        "Strong presence",
        "Meditative peace",
        "Achievement glow",
        "Competitive fire"
    ],
    physique: [
        "showing off her muscular arms and large chest",
        "highlighting her powerful build and curvy figure",
        "emphasizing her strong shoulders and busty frame",
        "displaying her thick muscular thighs and ample curves",
        "showcasing her impressive muscles and voluptuous form",
        "featuring her robust build and feminine curves",
        "demonstrating her strength while maintaining feminine features",
        "revealing her powerful physique and generous proportions",
        "exhibiting her muscular definition and curvaceous figure",
        "showing her athletic build and full figure",
        "flexing her well-developed biceps and full chest",
        "presenting her strong core and curvy silhouette",
        "displaying her muscular back and feminine profile",
        "showing her powerful legs and shapely figure",
        "highlighting her broad shoulders and feminine curves",
        "emphasizing her strong trapezius and full bust",
        "featuring her defined deltoids and curvy form",
        "showcasing her muscular quadriceps and thick build",
        "demonstrating her powerful calves and full thighs",
        "revealing her strong forearms and feminine shape",
        "exhibiting her muscular abs and curvy waist",
        "displaying her strong lats and full chest",
        "showing her powerful glutes and thick legs",
        "highlighting her muscular definition and busty frame",
        "emphasizing her strong neck and feminine features",
        "featuring her robust core and curvy hips",
        "showcasing her powerful arms and full figure",
        "demonstrating her strong back and feminine curves",
        "revealing her muscular shoulders and ample chest",
        "exhibiting her thick build and shapely form",
        "displaying her athletic muscles and curvy silhouette",
        "showing her powerful physique and feminine grace",
        "highlighting her strong build and voluptuous shape",
        "emphasizing her muscular tone and full curves",
        "featuring her robust frame and feminine allure",
        "showcasing her powerful presence and curvy form",
        "demonstrating her strength and feminine beauty",
        "revealing her muscular power and shapely figure",
        "exhibiting her strong foundation and curvy profile",
        "displaying her athletic prowess and feminine charm",
        "showing her powerful stance and full figure",
        "highlighting her muscular achievement and curvy form",
        "emphasizing her strong nature and feminine appeal",
        "featuring her robust energy and shapely silhouette",
        "showcasing her powerful spirit and curvy grace",
        "demonstrating her strength and feminine poise",
        "revealing her muscular confidence and full form",
        "exhibiting her strong character and curvy beauty",
        "displaying her athletic excellence and feminine strength",
        "showing her powerful essence and shapely presence"
    ]
};

const basePrompts = [
    "A photorealistic amateur photo of a beautiful chubby muscular Japanese female bodybuilder with large breasts",
    "A stunning candid shot of a curvaceous muscular Japanese fitness model with a voluptuous figure",
    "A natural amateur photograph of a powerful plus-size Japanese bodybuilding champion with a busty physique",
    "A realistic casual photo of a strong thick-built Japanese fitness enthusiast with an ample chest",
    "An authentic snapshot of a confident full-figured Japanese female athlete with impressive muscles"
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function initializeDropdowns() {
    // Add base prompts to dropdown
    const basePromptSelect = document.querySelector('select[data-category="basePrompt"]');
    basePrompts.forEach((prompt, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = prompt.substring(0, 50) + '...';
        basePromptSelect.appendChild(option);
    });

    // Add options for each category
    Object.entries(promptData).forEach(([category, items]) => {
        const select = document.querySelector(`select[data-category="${category}"]`);
        if (select) {
            items.forEach((item, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = item;
                select.appendChild(option);
            });
        }
    });
}

function getSelectedOrRandom(category) {
    const select = document.querySelector(`select[data-category="${category}"]`);
    if (select.value === 'random') {
        return getRandomElement(category === 'basePrompt' ? basePrompts : promptData[category]);
    } else {
        return (category === 'basePrompt' ? basePrompts : promptData[category])[select.value];
    }
}

function generatePrompt(useRandom = false) {
    let allPrompts = [];
    
    // Generate 5 different variations
    for (let i = 0; i < 5; i++) {
        // Start with base prompt
        let prompt = useRandom ? 
            getRandomElement(basePrompts) : 
            getSelectedOrRandom('basePrompt');
        
        prompt += " ";
        
        // Add elements in order
        const categories = [
            {type: 'clothing', prefix: 'wearing', connector: ', '},
            {type: 'pose', prefix: '', connector: ', '},
            {type: 'physique', prefix: '', connector: ', '},
            {type: 'expression', prefix: 'with a', connector: ', '},
            {type: 'scene', prefix: 'in a', connector: ', '},
            {type: 'lighting', prefix: 'illuminated by', connector: ', '},
            {type: 'camera', prefix: 'captured with', connector: ', '},
            {type: 'shotType', prefix: 'taken as a', connector: ''}
        ];

        categories.forEach(({type, prefix, connector}) => {
            const element = useRandom ? 
                getRandomElement(promptData[type]) : 
                getSelectedOrRandom(type);
            prompt += `${prefix ? prefix + ' ' : ''}${element}${connector}`;
        });

        // Clean up and add to array
        prompt = prompt.trim().replace(/,\s*$/, "") + ".";
        allPrompts.push(prompt);
    }

    // Update display
    updatePromptDisplay(allPrompts);
}

function updatePromptDisplay(prompts) {
    const promptOutput = document.getElementById('promptOutput');
    promptOutput.innerHTML = prompts.map((prompt, index) => `
        <div class="prompt-card" id="prompt-${index}">
            <div class="prompt-text">${prompt}</div>
            <button class="copy-btn" data-prompt="${index}">Copy</button>
        </div>
    `).join('');

    // Add click handlers for copy buttons
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.prompt;
            copyToClipboard(prompts[index], button);
        });
    });
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.classList.add('copied');
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        })
        .catch(err => console.error('Failed to copy prompt:', err));
}

// Event Listeners
document.getElementById('generateBtn').addEventListener('click', () => generatePrompt(false));
document.getElementById('randomBtn').addEventListener('click', () => generatePrompt(true));

// Initialize dropdowns and generate first prompt on page load
initializeDropdowns();
generatePrompt(true); 