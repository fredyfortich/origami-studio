# Origami Studio

Sketch a section, fold it into a plate structure, and walk through it. Runs in the browser, no install.

**Live:** https://fredyfortich.github.io/origami-studio/

## What it does

1. **Sketch.** Draw one stroke for the section of the structure, or load an example (there is a Randomize option too).
2. **Fold.** Sweep the section by extruding it, revolving it around an axis, or as hypar umbrellas. Choose a crease pattern (pleats, Yoshimura diamonds, Miura-ori herringbone), then set width, length, fold count, facets, fold depth and shell thickness. A schematic crease diagram shows mountain and valley folds. Designs can be saved in the browser and reloaded.
3. **Visit.** `W` `A` `S` `D` to move, drag to look, right-drag to orbit, `Q` / `E` down and up, `Shift` to run, wheel to dolly. "Eye level" puts the camera at 1.7 m.
4. **Export.** Download an OBJ (metres, Z up, ready for Rhino) with the shell, crease lines and columns, and copy a render prompt built from the model, a material and a setting.

The folds are geometric, not true rigid origami: plates are placed along the sketch, so the result is not guaranteed to unfold flat.

## Precedents

The patterns come from Yoshimaru Yoshimura's buckling pattern and Koryo Miura's Miura-ori, and from built folded plates such as the UNESCO Conference Hall in Paris (Breuer, Nervi, Zehrfuss), St. John's Abbey Church (Breuer) and the Chapel of St-Loup (Buri and Weinand with Localarchitecture). The hypar mode follows Félix Candela's umbrella shells.

## Files

- `studio.html` is the source: one file with markup, styles and script. It loads three.js r128 from cdnjs.
- `index.html` is the same page wrapped as a standalone document. Rebuild it after editing the source:

```bash
node build.js
```

AI rendering of views is a local-only feature and is not part of this repository.
