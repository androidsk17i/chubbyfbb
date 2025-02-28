document.addEventListener('DOMContentLoaded', () => {
    const generatePromptBtn = document.getElementById('generatePrompt');
    const randomizePromptBtn = document.getElementById('randomizePrompt');
    const copyButtons = document.querySelectorAll('.copy-button');

    // Define variations for each parameter
    const variations = {
        shotTypes: [
            "close-up portrait", "medium shot", "full body shot",
            "three-quarter view", "side profile", "candid shot",
            "dynamic angle", "low angle shot", "high angle shot",
            "eye-level shot"
        ],
        bodyFeatures: [
            "voluptuous figure", "curvy physique", "full-figured",
            "generous curves", "ample bosom", "well-endowed",
            "large breasts", "busty figure", "curvaceous body",
            "buxom figure"
        ],
        buildTypes: [
            "chubby yet muscular", "very muscular", "moderately muscular",
            "powerfully built", "athletically toned", "thick and strong",
            "bulky and powerful", "densely muscled", "heavily muscled",
            "robust and muscular", "solidly built", "stoutly muscular",
            "broadly muscular", "compactly muscular", "massively built",
            "thickly muscled", "substantially muscular", "impressively muscular",
            "prominently muscular", "noticeably muscular", "distinctly muscular",
            "evidently muscular", "visibly strong", "clearly muscular",
            "unmistakably muscular", "decidedly muscular", "markedly muscular",
            "obviously strong", "undeniably muscular", "definitively muscular"
        ],
        expressions: [
            "confident yet friendly", "determined", "smiling",
            "focused", "cheerful", "proud",
            "enthusiastic", "passionate", "serene",
            "composed", "radiating strength", "beaming",
            "self-assured", "content", "peaceful",
            "energetic", "vibrant", "spirited",
            "positive", "warm", "welcoming",
            "approachable", "pleasant", "gentle",
            "kind", "happy", "joyful",
            "satisfied", "fulfilled", "accomplished"
        ],
        poses: [
            "standing casually", "sitting relaxed", "leaning against a wall",
            "walking casually", "hands on hips", "arms crossed",
            "sitting on a bench", "stretching casually", "waving friendly",
            "casual stance", "resting on a chair", "lounging comfortably",
            "standing with hands in pockets", "casual walking pose", "relaxed standing pose",
            "sitting cross-legged", "leaning forward slightly", "standing with one hand on hip",
            "casual lean", "relaxed stance", "natural standing pose",
            "gentle stretch", "casual sitting", "relaxed walking",
            "natural pose", "comfortable stance", "easy pose",
            "relaxed position", "natural stance", "casual posture"
        ],
        clothing: [
            "wearing a stylish bikini", "in an elegant lingerie set", "wearing a lace-trimmed bikini",
            "in a revealing swimsuit", "wearing a delicate lingerie piece", "in a fashionable two-piece",
            "wearing a designer swimwear", "in an intricate lingerie ensemble", "wearing a chic bathing suit",
            "in a sophisticated bikini set", "wearing a luxurious lingerie set", "in a trendy swimwear",
            "wearing a glamorous beachwear", "in an alluring swimsuit", "wearing a refined bikini",
            "in an exquisite lingerie piece", "wearing a premium swimwear", "in a tasteful two-piece",
            "wearing an upscale bathing suit", "in a high-end bikini", "wearing a quality lingerie set",
            "in a flattering swimsuit", "wearing an attractive beachwear", "in a well-fitted bikini",
            "wearing a graceful lingerie piece", "in a beautiful swimwear", "wearing an elegant two-piece",
            "in a charming bathing suit", "wearing a refined swimsuit", "in a sophisticated beachwear",
            "nude"
        ],
        locations: [
            "busy city street", "train station platform", "public park",
            "shopping district", "city plaza", "outdoor cafe",
            "subway entrance", "pedestrian walkway", "bus stop",
            "city square", "marketplace", "urban park",
            "street corner", "downtown sidewalk", "outdoor mall",
            "city garden", "public courtyard", "promenade",
            "city waterfront", "outdoor market", "urban plaza",
            "city park path", "public square", "street market",
            "city boulevard", "outdoor shopping area", "urban walkway",
            "city center", "public garden", "metropolitan street"
        ],
        lighting: [
            "natural lighting", "studio lighting", "dramatic lighting",
            "soft ambient light", "golden hour glow", "warm lighting",
            "diffused sunlight", "gentle spotlighting", "atmospheric lighting",
            "professional lighting", "balanced lighting", "flattering lighting",
            "morning light", "evening glow", "sunset lighting",
            "indirect lighting", "side lighting", "rim lighting",
            "overhead lighting", "backlit", "front lighting",
            "mixed lighting", "dynamic lighting", "controlled lighting",
            "artistic lighting", "mood lighting", "complementary lighting",
            "enhanced lighting", "optimal lighting", "perfect lighting"
        ],
        faceTypes: [
            "cute feminine face", "delicate feminine features", "soft feminine features",
            "gentle feminine face", "pretty feminine face", "beautiful feminine features",
            "charming feminine face", "lovely feminine features", "graceful feminine face",
            "elegant feminine features"
        ],
        hairStyles: [
            "long flowing black hair", "long straight black hair", "long wavy black hair",
            "long silky black hair", "long lustrous black hair", "long smooth black hair",
            "long glossy black hair", "long sleek black hair", "long shiny black hair",
            "long beautiful black hair"
        ]
    };

    generatePromptBtn.addEventListener('click', () => {
        const mainPrompt = generatePrompt();
        setTimeout(() => {
            copyToClipboard('mainPromptOutput');
        }, 100);
    });
    
    randomizePromptBtn.addEventListener('click', () => {
        randomizeInputs();
        const mainPrompt = generatePrompt();
        setTimeout(() => {
            copyToClipboard('mainPromptOutput');
        }, 100);
    });
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            copyToClipboard(targetId);
        });
    });

    function randomizeInputs() {
        // Randomize age between 25 and 55
        document.getElementById('age').value = Math.floor(Math.random() * (55 - 25 + 1)) + 25;
        
        // Randomize select inputs
        const shotTypeSelect = document.getElementById('shotType');
        const buildTypeSelect = document.getElementById('buildType');
        const clothingSelect = document.getElementById('clothing');
        const expressionSelect = document.getElementById('expression');
        const poseSelect = document.getElementById('pose');
        const locationSelect = document.getElementById('location');
        const lightingSelect = document.getElementById('lighting');
        const samplerSelect = document.getElementById('sampler');
        const sizeSelect = document.getElementById('size');
        const faceTypeSelect = document.getElementById('faceType');
        const hairStyleSelect = document.getElementById('hairStyle');

        // Set random selected index for each select element
        shotTypeSelect.selectedIndex = Math.floor(Math.random() * shotTypeSelect.options.length);
        buildTypeSelect.selectedIndex = Math.floor(Math.random() * buildTypeSelect.options.length);
        clothingSelect.selectedIndex = Math.floor(Math.random() * clothingSelect.options.length);
        expressionSelect.selectedIndex = Math.floor(Math.random() * expressionSelect.options.length);
        poseSelect.selectedIndex = Math.floor(Math.random() * poseSelect.options.length);
        locationSelect.selectedIndex = Math.floor(Math.random() * locationSelect.options.length);
        lightingSelect.selectedIndex = Math.floor(Math.random() * lightingSelect.options.length);
        faceTypeSelect.selectedIndex = Math.floor(Math.random() * faceTypeSelect.options.length);
        hairStyleSelect.selectedIndex = Math.floor(Math.random() * hairStyleSelect.options.length);
        
        // Randomize checkboxes
        document.getElementById('sweat').checked = Math.random() < 0.7;
        document.getElementById('skinTexture').checked = Math.random() < 0.8;
        document.getElementById('muscleDefinition').checked = Math.random() < 0.9;

        // Randomize model settings
        document.getElementById('cfgScale').value = (Math.random() * 6 + 4).toFixed(1); // 4-10
        document.getElementById('steps').value = Math.floor(Math.random() * 31 + 20); // 20-50
        samplerSelect.selectedIndex = Math.floor(Math.random() * samplerSelect.options.length);
        sizeSelect.selectedIndex = Math.floor(Math.random() * sizeSelect.options.length);
    }

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generatePrompt() {
        const shotType = document.getElementById('shotType').options[document.getElementById('shotType').selectedIndex].value;
        const age = document.getElementById('age').value;
        const faceType = document.getElementById('faceType').options[document.getElementById('faceType').selectedIndex].value;
        const hairStyle = document.getElementById('hairStyle').options[document.getElementById('hairStyle').selectedIndex].value;
        const buildType = document.getElementById('buildType').options[document.getElementById('buildType').selectedIndex].value;
        const clothing = document.getElementById('clothing').options[document.getElementById('clothing').selectedIndex].value;
        const expression = document.getElementById('expression').options[document.getElementById('expression').selectedIndex].value;
        const pose = document.getElementById('pose').options[document.getElementById('pose').selectedIndex].value;
        const location = document.getElementById('location').options[document.getElementById('location').selectedIndex].value;
        const lighting = document.getElementById('lighting').options[document.getElementById('lighting').selectedIndex].value;
        const includeSweat = document.getElementById('sweat').checked;
        const includeSkinTexture = document.getElementById('skinTexture').checked;
        const includeMuscleDefinition = document.getElementById('muscleDefinition').checked;
        const qualityModifiers = document.getElementById('qualityModifiers').value;
        const negativePrompt = document.getElementById('negativePrompt').value;

        // Model settings
        const cfgScale = document.getElementById('cfgScale').value;
        const steps = document.getElementById('steps').value;
        const sampler = document.getElementById('sampler').value;
        const size = document.getElementById('size').value;

        // Base prompt components
        let promptParts = [];

        // Add shot type at the start
        if (shotType && shotType !== "undefined") promptParts.push(shotType);
        // Add non-empty components with cute and chubby description
        if (age) promptParts.push(`A cute and chubby ${age}-year-old Japanese woman bodybuilder`);
        if (faceType && faceType !== "undefined") promptParts.push(faceType);
        if (hairStyle && hairStyle !== "undefined") promptParts.push(hairStyle);
        promptParts.push(getRandomItem(variations.bodyFeatures));
        if (buildType && buildType !== "undefined") promptParts.push(buildType);
        if (clothing && clothing !== "undefined") promptParts.push(clothing);
        if (pose && pose !== "undefined") promptParts.push(pose);
        if (expression && expression !== "undefined") promptParts.push(expression);
        if (location && location !== "undefined") promptParts.push(`in a ${location}`);
        if (lighting && lighting !== "undefined") promptParts.push(lighting);

        // Optional details
        if (includeSweat) {
            promptParts.push('subtle sweat glistening on skin');
        }
        if (includeSkinTexture) {
            promptParts.push('detailed skin texture');
        }
        if (includeMuscleDefinition) {
            promptParts.push('well-defined muscle tone and definition');
        }

        // Add quality modifiers if they exist
        if (qualityModifiers) {
            promptParts.push(qualityModifiers);
        }

        // Filter out any empty strings and join with commas
        const mainPrompt = promptParts.filter(part => part && part.trim() !== '').join(', ');
        
        // Update all output areas
        document.getElementById('mainPromptOutput').value = mainPrompt;
        document.getElementById('negativePromptOutput').value = negativePrompt;
        document.getElementById('settingsOutput').value = 
`Model: juggernautXL_juggXILightningByRD.safetensors
CFG Scale: ${cfgScale}
Steps: ${steps}
Sampler: ${sampler}
Size: ${size}`;

        document.getElementById('completePromptOutput').value = 
`Main Prompt:
${mainPrompt}

Negative Prompt:
${negativePrompt}

Model: juggernautXL_juggXILightningByRD.safetensors
CFG Scale: ${cfgScale}
Steps: ${steps}
Sampler: ${sampler}
Size: ${size}`;

        // Return the generated main prompt
        return mainPrompt;
    }

    function copyToClipboard(targetId) {
        const textArea = document.getElementById(targetId);
        textArea.select();
        
        // Try to use the modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textArea.value).then(() => {
                updateCopyButtonState(targetId);
            });
        } else {
            // Fallback to the older method
            document.execCommand('copy');
            updateCopyButtonState(targetId);
        }
    }

    function updateCopyButtonState(targetId) {
        const buttons = document.querySelectorAll('.copy-button');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-target') === targetId) {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            }
        });
    }

    // Generate initial prompt on page load without copying
    generatePrompt();
}); 