function update() {
        const button = document.getElementById('button');
        const border = document.getElementById('border');
        const internal = document.getElementById('internal');
        const text = document.getElementById('text');

        button.setAttribute("width", "" + WebCC.Properties.Button_Width + "");
        button.setAttribute("height", "" + WebCC.Properties.Button_Height + "");

        border.setAttribute("width", "" + WebCC.Properties.Button_Width + "");
        border.setAttribute("height", "" + WebCC.Properties.Button_Height + "");
        border.setAttribute("rx", "" + WebCC.Properties.Released_Radius + "");
        border.setAttribute("fill", "" + toColor(WebCC.Properties.Released_BorderColor) + "");

        internal.setAttribute("width", "" + (WebCC.Properties.Button_Width - WebCC.Properties.Released_BorderSize * 2) + "");
        internal.setAttribute("height", "" + (WebCC.Properties.Button_Height - WebCC.Properties.Released_BorderSize * 2) + "");
        internal.setAttribute("x", "" + WebCC.Properties.Released_BorderSize + "");
        internal.setAttribute("y", "" + WebCC.Properties.Released_BorderSize + "");
        internal.setAttribute("rx", "" + WebCC.Properties.Released_Radius + "");
        internal.setAttribute("fill", "" + toColor(WebCC.Properties.Released_BackgroundColor) + "");

        text.setAttribute("font-Size", "" + WebCC.Properties.Released_TextSize + "");
        text.setAttribute("fill", "" + toColor(WebCC.Properties.Released_TextColor) + "");
        text.textContent = "" + WebCC.Properties.Released_Text + "";
}

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

function pressed() {
        const button = document.getElementById('button');
        const border = document.getElementById('border');
        const internal = document.getElementById('internal');
        const text = document.getElementById('text');

        button.setAttribute("width", "" + WebCC.Properties.Button_Width + "");
        button.setAttribute("height", "" + WebCC.Properties.Button_Height + "");

        border.setAttribute("width", "" + WebCC.Properties.Button_Width + "");
        border.setAttribute("height", "" + WebCC.Properties.Button_Height + "");
        border.setAttribute("rx", "" + WebCC.Properties.Pressed_Radius + "");
        border.setAttribute("fill", "" + toColor(WebCC.Properties.Pressed_BorderColor) + "");

        internal.setAttribute("width", "" + (WebCC.Properties.Button_Width - WebCC.Properties.Pressed_BorderSize * 2) + "");
        internal.setAttribute("height", "" + (WebCC.Properties.Button_Height - WebCC.Properties.Pressed_BorderSize * 2) + "");
        internal.setAttribute("x", "" + WebCC.Properties.Pressed_BorderSize + "");
        internal.setAttribute("y", "" + WebCC.Properties.Pressed_BorderSize + "");
        internal.setAttribute("rx", "" + WebCC.Properties.Pressed_Radius + "");
        internal.setAttribute("fill", "" + toColor(WebCC.Properties.Pressed_BackgroundColor) + "");

        text.setAttribute("font-Size", "" + WebCC.Properties.Pressed_TextSize + "");
        text.setAttribute("fill", "" + toColor(WebCC.Properties.Pressed_TextColor) + "");
        text.textContent = "" + WebCC.Properties.Pressed_Text + "";
}

function released() {
        const button = document.getElementById('button');
        const border = document.getElementById('border');
        const internal = document.getElementById('internal');
        const text = document.getElementById('text');

        button.setAttribute("width", "" + WebCC.Properties.Button_Width + "");
        button.setAttribute("height", "" + WebCC.Properties.Button_Height + "");

        border.setAttribute("width", "" + WebCC.Properties.Button_Width + "");
        border.setAttribute("height", "" + WebCC.Properties.Button_Height + "");
        border.setAttribute("rx", "" + WebCC.Properties.Released_Radius + "");
        border.setAttribute("fill", "" + toColor(WebCC.Properties.Released_BorderColor) + "");

        internal.setAttribute("width", "" + (WebCC.Properties.Button_Width - WebCC.Properties.Released_BorderSize * 2) + "");
        internal.setAttribute("height", "" + (WebCC.Properties.Button_Height - WebCC.Properties.Released_BorderSize * 2) + "");
        internal.setAttribute("x", "" + WebCC.Properties.Released_BorderSize + "");
        internal.setAttribute("y", "" + WebCC.Properties.Released_BorderSize + "");
        internal.setAttribute("rx", "" + WebCC.Properties.Released_Radius + "");
        internal.setAttribute("fill", "" + toColor(WebCC.Properties.Released_BackgroundColor) + "");

        text.setAttribute("font-Size", "" + WebCC.Properties.Released_TextSize + "");
        text.setAttribute("fill", "" + toColor(WebCC.Properties.Released_TextColor) + "");
        text.textContent = "" + WebCC.Properties.Released_Text + "";
}