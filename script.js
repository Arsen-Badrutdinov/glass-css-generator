const opacitySlider = document.getElementById('opacity');
const blurSlider = document.getElementById('blur');
const opacityVal = document.getElementById('opacity-val');
const blurVal = document.getElementById('blur-val');
const preview = document.getElementById('preview');
const codeOutput = document.getElementById('css-code');

function updateGlass() {
    const o = opacitySlider.value;
    const b = blurSlider.value;
    
    opacityVal.textContent = o;
    blurVal.textContent = b;
    
    const bg = `rgba(255, 255, 255, ${o})`;
    const bl = `blur(${b}px)`;
    
    preview.style.background = bg;
    preview.style.backdropFilter = bl;
    preview.style.webkitBackdropFilter = bl;
    
    const code = `background: rgba(255, 255, 255, ${o});
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${b}px);
-webkit-backdrop-filter: blur(${b}px);
border: 1px solid rgba(255, 255, 255, 0.3);`;
    
    codeOutput.textContent = code;
}

opacitySlider.addEventListener('input', updateGlass);
blurSlider.addEventListener('input', updateGlass);

// Init
updateGlass();
