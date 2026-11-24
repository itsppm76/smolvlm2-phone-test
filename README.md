# SmolVLM2-500M raw phone test

Standalone browser page that runs `HuggingFaceTB/SmolVLM2-500M-Video-Instruct` (Apache 2.0) locally with transformers.js 4.3.2. Image plus text in, text out. Not connected to Shayari.

Open the page on your phone in Chrome, tap Load model (about 360 MB the first time, then cached), pick or take a photo, and tap Run. Use the WebGPU backend, and switch to WASM if it fails.

Status: the same model files and code path were run once on a laptop CPU (Node) and described a test image correctly. Not yet tried on a phone. Speed and memory on the phone are unverified.
