/**
 * Watoko — WebGL Mesh Gradient
 * GPU-rendered flowing gradient using simplex noise in fragment shader.
 * Inspired by Stripe / giga.ai mesh gradient technique.
 */
(function () {
    var canvas = document.getElementById('gradientCanvas');
    if (!canvas) return;

    var gl = canvas.getContext('webgl', { alpha: false, antialias: false });
    if (!gl) {
        // Fallback: just show the CSS gradient
        canvas.style.display = 'none';
        return;
    }

    // --- Shaders ---

    var vertexSource = [
        'attribute vec2 a_position;',
        'void main() {',
        '    gl_Position = vec4(a_position, 0.0, 1.0);',
        '}'
    ].join('\n');

    var fragmentSource = [
        'precision highp float;',
        'uniform float u_time;',
        'uniform vec2 u_resolution;',
        '',
        '// --- Simplex 2D noise (Ashima Arts, MIT) ---',
        'vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }',
        'vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }',
        'vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }',
        '',
        'float snoise(vec2 v) {',
        '    const vec4 C = vec4(0.211324865405187, 0.366025403784439,',
        '                       -0.577350269189626, 0.024390243902439);',
        '    vec2 i = floor(v + dot(v, C.yy));',
        '    vec2 x0 = v - i + dot(i, C.xx);',
        '    vec2 i1;',
        '    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);',
        '    vec4 x12 = x0.xyxy + C.xxzz;',
        '    x12.xy -= i1;',
        '    i = mod289(i);',
        '    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));',
        '    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);',
        '    m = m * m;',
        '    m = m * m;',
        '    vec3 x = 2.0 * fract(p * C.www) - 1.0;',
        '    vec3 h = abs(x) - 0.5;',
        '    vec3 ox = floor(x + 0.5);',
        '    vec3 a0 = x - ox;',
        '    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);',
        '    vec3 g;',
        '    g.x = a0.x * x0.x + h.x * x0.y;',
        '    g.yz = a0.yz * x12.xz + h.yz * x12.yw;',
        '    return 130.0 * dot(m, g);',
        '}',
        '',
        '// Fractal Brownian Motion — stacks noise octaves for richness',
        'float fbm(vec2 p) {',
        '    float value = 0.0;',
        '    float amplitude = 0.5;',
        '    float frequency = 1.0;',
        '    for (int i = 0; i < 5; i++) {',
        '        value += amplitude * snoise(p * frequency);',
        '        frequency *= 2.0;',
        '        amplitude *= 0.5;',
        '    }',
        '    return value;',
        '}',
        '',
        '// Smooth blend overlay',
        'vec3 blendOverlay(vec3 base, vec3 blend) {',
        '    return mix(',
        '        2.0 * base * blend,',
        '        1.0 - 2.0 * (1.0 - base) * (1.0 - blend),',
        '        step(0.5, base)',
        '    );',
        '}',
        '',
        'void main() {',
        '    vec2 uv = gl_FragCoord.xy / u_resolution;',
        '    float t = u_time * 0.08;',
        '',
        '    // Warm pastel palette',
        '    vec3 cream   = vec3(1.0, 0.98, 0.96);',
        '    vec3 peach   = vec3(1.0, 0.78, 0.60);',
        '    vec3 salmon  = vec3(0.98, 0.55, 0.45);',
        '    vec3 rose    = vec3(1.0, 0.68, 0.72);',
        '    vec3 amber   = vec3(1.0, 0.62, 0.35);',
        '    vec3 lavender = vec3(0.78, 0.68, 0.90);',
        '',
        '    // Flowing noise layers — different speeds and scales create ribbon effect',
        '    // Layer 1: large, slow sweep',
        '    float n1 = fbm(vec2(uv.x * 1.4 + t * 0.6, uv.y * 0.8 - t * 0.3));',
        '    // Layer 2: medium, counter-flow',
        '    float n2 = fbm(vec2(uv.x * 2.0 - t * 0.4, uv.y * 1.2 + t * 0.5));',
        '    // Layer 3: fine, fast accents',
        '    float n3 = fbm(vec2(uv.x * 1.8 + t * 0.7, uv.y * 2.2 - t * 0.2));',
        '    // Layer 4: ultra-slow background swell',
        '    float n4 = snoise(vec2(uv.x * 0.6 + t * 0.15, uv.y * 0.4 - t * 0.1));',
        '    // Layer 5: wave distortion',
        '    float wave = snoise(vec2(uv.x * 3.0 + t * 1.2, uv.y * 0.5));',
        '',
        '    // Warp UV for organic flow',
        '    vec2 warpedUV = uv + 0.06 * vec2(n1, n2);',
        '    float n5 = fbm(warpedUV * 1.5 + t * 0.3);',
        '',
        '    // Build color through layered mixing with smoothstep for ribbon edges',
        '    vec3 color = cream;',
        '',
        '    // Broad peach wash — sweeps bottom to mid',
        '    float mask1 = smoothstep(-0.1, 0.6, n1) * smoothstep(0.0, 0.5, 1.0 - uv.y + n4 * 0.3);',
        '    color = mix(color, peach, mask1 * 0.7);',
        '',
        '    // Salmon ribbon — defined band',
        '    float mask2 = smoothstep(0.1, 0.35, n2) * smoothstep(0.35, 0.1, n2 - 0.3);',
        '    mask2 *= smoothstep(0.1, 0.6, 1.0 - uv.y + wave * 0.15);',
        '    color = mix(color, salmon, mask2 * 0.65);',
        '',
        '    // Rose pink sweep',
        '    float mask3 = smoothstep(-0.2, 0.5, n3) * smoothstep(0.15, 0.7, 1.0 - uv.y + n1 * 0.2);',
        '    color = mix(color, rose, mask3 * 0.5);',
        '',
        '    // Amber accent — thin hot line',
        '    float mask4 = smoothstep(0.2, 0.38, n5) * smoothstep(0.38, 0.2, n5 - 0.15);',
        '    mask4 *= smoothstep(0.2, 0.8, 1.0 - uv.y + n2 * 0.25);',
        '    color = mix(color, amber, mask4 * 0.55);',
        '',
        '    // Lavender highlight — subtle cool note at edges',
        '    float mask5 = smoothstep(0.0, 0.5, n4) * smoothstep(0.3, 0.9, uv.x + n3 * 0.15);',
        '    mask5 *= smoothstep(0.3, 0.7, 1.0 - uv.y);',
        '    color = mix(color, lavender, mask5 * 0.3);',
        '',
        '    // Subtle overlay blend for depth',
        '    vec3 highlight = mix(peach, rose, n5 * 0.5 + 0.5);',
        '    float overlayMask = smoothstep(0.2, 0.7, 1.0 - uv.y + n1 * 0.2) * 0.15;',
        '    color = mix(color, blendOverlay(color, highlight), overlayMask);',
        '',
        '    // Top fade to white — keep text area clean',
        '    float topFade = smoothstep(0.75, 0.35, uv.y);',
        '    color = mix(cream, color, topFade);',
        '',
        '    gl_FragColor = vec4(color, 1.0);',
        '}',
    ].join('\n');

    // --- WebGL setup ---

    function createShader(type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    var vs = createShader(gl.VERTEX_SHADER, vertexSource);
    var fs = createShader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vs || !fs) return;

    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program error:', gl.getProgramInfoLog(program));
        return;
    }
    gl.useProgram(program);

    // Full-screen triangle (covers viewport with a single triangle)
    var positions = new Float32Array([
        -1, -1,
         3, -1,
        -1,  3
    ]);
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    var uTime = gl.getUniformLocation(program, 'u_time');
    var uResolution = gl.getUniformLocation(program, 'u_resolution');

    // --- Resize handling ---
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
        var w = canvas.clientWidth;
        var h = canvas.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
    }

    resize();
    window.addEventListener('resize', resize);

    // --- Animation loop ---
    var startTime = performance.now();
    var running = true;
    var rafId = null;

    function render() {
        if (!running) { rafId = null; return; }
        var elapsed = (performance.now() - startTime) / 1000.0;
        gl.uniform1f(uTime, elapsed);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        rafId = requestAnimationFrame(render);
    }

    function start() {
        if (running && rafId !== null) return;
        running = true;
        if (rafId === null) rafId = requestAnimationFrame(render);
    }

    function stop() {
        running = false;
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    }

    // Pause render loop when canvas is offscreen — saves GPU and unjank scrolling
    if ('IntersectionObserver' in window) {
        var visObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    start();
                } else {
                    stop();
                }
            });
        }, { threshold: 0 });
        visObserver.observe(canvas);
    }

    // Pause when tab is hidden
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stop();
        } else {
            start();
        }
    });

    rafId = requestAnimationFrame(render);
})();
