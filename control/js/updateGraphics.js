function update() {
        const loading = document.getElementById('loading');
        if (!loading) {
                console.error("Element #loading not found!");
                return;
        }

        const size = WebCC.Properties.LoadingSize;
        const color = WebCC.Properties.LoadingColor;
        const speed = WebCC.Properties.LoadingSpeed;

        if (size && !isNaN(size)) {
                console.log("Set LoadingSize:", size);
                loading.style.setProperty('--uib-size', size + 'px');
        } else {
                console.warn("Value error LoadingSize:", size);
        }

        loading.style.setProperty('--uib-color', toColor(color));
        loading.style.setProperty('--uib-speed', speed + "s");
}
window.update = update;

// Convert a WinCC Unified color number to a standard HTML5 color string, 
// e.g. "0xFF00FF00" (#Alpha-Red-Green-Blue) to "rgba(0,255,0,255)" (rgba(Red,Green,Blue,Alpha))
function toColor(num) {
        num >>>= 0;
        var b = num & 0xFF,
                g = (num & 0xFF00) >>> 8,
                r = (num & 0xFF0000) >>> 16,
                a = ((num & 0xFF000000) >>> 24) / 255;

        return 'rgba(' + [r, g, b, a].join(',') + ')';
}