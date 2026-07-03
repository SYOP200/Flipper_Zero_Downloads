<img width="1024" height="246" alt="pixil-frame-0-4" src="https://github.com/user-attachments/assets/0b4770bc-bd89-433e-9c79-e38b815bfbeb" />

> **Navigation**
>
> [Overview](overview.md) | [Apps](apps.md) | [BadUSB](badusb.md) | [Firmware](firmware.md) | [GPIO](gpio.md) |
> [Graphics](graphics.md) | [Infrared](infrared.md) | [NFC](nfc.md) | [RFID](rfid.md) | [PicoPass](picopass.md) |
> [Scripts](scripts.md) | [Sub-GHz](subghz.md) | [UniRF](unirf.md) | [Playlists](playlists.md)

---

# 🖨️ 3D Printing

This page covers everything you need to print cases, enclosures, mounts, and accessories for your Flipper Zero — from finding files to assembling the final result. Whether you have never used a 3D printer before or you print every day, this guide has something for you.

---

## 📋 Table of contents

1. [What can you print?](#what-can-you-print)
2. [Where to find print files](#where-to-find-print-files)
3. [Beginner primer — how 3D printing works](#beginner-primer--how-3d-printing-works)
4. [Choosing your material](#choosing-your-material)
5. [Recommended print settings](#recommended-print-settings)
6. [Slicing your file](#slicing-your-file)
7. [Post-processing](#post-processing)
8. [Assembly guide](#assembly-guide)
9. [Troubleshooting common problems](#troubleshooting-common-problems)
10. [Submitting your own designs](#submitting-your-own-designs)

---

## What can you print?

The Flipper Zero community has designed hundreds of printable parts. The most popular categories are:

**Cases and enclosures**
Protective shells that wrap around the entire Flipper. Some are slim and minimal, others add rubber feet, belt clips, or lanyard loops. A good case protects your Flipper from drops and scratches without blocking any buttons, ports, or antennas.

**GPIO module mounts**
Brackets and frames that hold add-on modules — like the Wi-Fi dev board or a Raspberry Pi Zero — directly onto the Flipper's GPIO pins. These turn the Flipper into a compact, self-contained development platform.

**Screen protector frames**
Thin bezels that clip around the screen area and hold a small piece of acrylic or glass in place.

**Stands and desk mounts**
Stands that hold the Flipper upright on a desk while charging or displaying information.

**Belt clips and holsters**
Wearable accessories for carrying your Flipper every day.

**Antenna holders**
Mounts that position external antennas away from the body for better range with Sub-GHz and other radio features.

**Custom buttons and covers**
Replacement button caps in different colors or profiles.

---

## Where to find print files

All community-contributed 3D print files for this repository are stored in the **`3d-printing`** folder on the SD card layout, or linked below.

### Community sources

| Source | Best for |
|---|---|
| [Printables.com — Flipper Zero](https://www.printables.com/search/models?q=flipper+zero) | Largest library, user ratings and makes |
| [Thingiverse — Flipper Zero](https://www.thingiverse.com/search?q=flipper+zero) | Long-established community, many remixes |
| [MakerWorld — Flipper Zero](https://makerworld.com/en/search?keyword=flipper+zero) | Optimised for Bambu Lab printers, pre-configured profiles |
| [Cults3D — Flipper Zero](https://cults3d.com/en/search?q=flipper+zero) | Mix of free and paid designs |
| [GitHub — Official Flipper cases](https://github.com/flipperdevices/flipperzero-firmware) | Official reference designs from Flipper Devices |

### File formats you will encounter

| Format | What it is |
|---|---|
| `.stl` | The most common format. Ready to import into any slicer. |
| `.3mf` | Newer format. Can include colour, scale, and slicer settings. Preferred when available. |
| `.step` / `.f3d` | CAD source files. Use these if you want to modify the design in Fusion 360 or FreeCAD. |
| `.obj` | Less common. Supported by all slicers. |

> **Tip for beginners:** Always look for `.3mf` files first — they often include pre-configured print settings so you don't have to guess.

---

## Beginner primer — how 3D printing works

If you already own a printer and know how to use it, skip ahead to [Choosing your material](#choosing-your-material).

**The basic process has four steps:**

**Step 1 — Download a file.** You download a `.stl` or `.3mf` file from one of the sources above. This file describes the 3D shape of the part.

**Step 2 — Slice it.** You open the file in a piece of software called a **slicer**. The slicer converts the 3D shape into a set of instructions (called G-code) that tells the printer exactly where to move, how fast, and how hot to get.

**Step 3 — Print it.** The printer follows those instructions, melting plastic filament and depositing it layer by layer until the part is complete.

**Step 4 — Finish it.** You remove the part from the printer, peel off any supports, and do any sanding or assembly needed.

### Types of consumer 3D printers

Most community members use one of two types:

**FDM (Fused Deposition Modeling)** — the most common type. Melts plastic filament and builds parts layer by layer. Affordable, easy to use, and works well for functional parts like Flipper cases. Most files in this repository are designed for FDM printers.

**Resin (MSLA / SLA)** — uses UV light to cure liquid resin layer by layer. Produces much finer detail but requires more post-processing (washing and curing), and the resin is a hazardous chemical. Better suited for tiny, highly detailed parts.

> For Flipper Zero cases and accessories, **FDM is the recommended choice** unless you specifically want ultra-fine surface detail.

---

## Choosing your material

The filament material you use determines how strong, flexible, and heat-resistant your print will be.

### Quick comparison

| Material | Difficulty | Strength | Flexibility | Heat resistance | Best for |
|---|---|---|---|---|---|
| **PLA** | Easy | Good | Rigid | Low (~60 °C) | Most cases and accessories |
| **PETG** | Medium | Very good | Slight flex | Medium (~80 °C) | Cases that may sit in a hot car |
| **TPU** | Medium | Good | Very flexible | Medium | Shock-absorbing bumper cases |
| **ABS** | Hard | Very good | Rigid | High (~100 °C) | Rarely needed for Flipper parts |
| **ASA** | Hard | Very good | Rigid | High (~100 °C) | Outdoor or high-temperature use |

### Recommendations by use case

**Standard protective case** — use **PLA**. It is the easiest material to print, widely available, and strong enough for everyday use. Avoid leaving a PLA case in a hot car in summer — it can warp.

**Case for hot environments** (glove box, outdoor use) — use **PETG** or **ASA**. Both handle higher temperatures without warping. PETG is easier to print than ASA.

**Bumper or drop-protection case** — use **TPU** (flexible filament). TPU absorbs impacts but requires a printer with a direct-drive extruder to print reliably. Bowden extruders can struggle with flexible filaments.

**GPIO module mount** — use **PETG** or **PLA**. The mount needs to be dimensionally accurate and hold its shape — rigidity matters more than flexibility here.

---

## Recommended print settings

These settings work well for the majority of Flipper Zero cases and accessories. Adjust as needed for your specific printer and filament brand.

### General settings

| Setting | Recommended value | Notes |
|---|---|---|
| Layer height | 0.2 mm | Good balance of strength and detail. Use 0.15 mm for finer detail. |
| Wall count (perimeters) | 3–4 | More walls = stronger part. Use 4 for cases that will take drops. |
| Top / bottom layers | 4–5 | Ensures a solid, gap-free surface. |
| Infill density | 20–30% | Enough for structural rigidity. Go to 40% for parts under stress. |
| Infill pattern | Gyroid or grid | Gyroid is strong in all directions. Grid is faster. |
| Print speed | 40–60 mm/s | Slower = better surface quality and dimensional accuracy. |
| Cooling | On (100% fan) | For PLA and PETG. Helps with overhangs and bridging. |

### Material-specific temperatures

| Material | Nozzle temp | Bed temp | Enclosure needed? |
|---|---|---|---|
| PLA | 200–220 °C | 50–60 °C | No |
| PETG | 230–245 °C | 70–85 °C | Recommended |
| TPU | 220–240 °C | 30–60 °C | No |
| ABS | 230–250 °C | 100–110 °C | Yes |
| ASA | 240–260 °C | 90–110 °C | Yes |

> **Tip:** Always run a temperature tower or calibration print when using a new brand of filament — the same material from different manufacturers can behave very differently.

### Orientation tips

How you orient the part on the print bed has a big effect on strength and finish quality.

- Print cases **face down** (screen side toward the bed) for the best surface finish on the visible face.
- Print clips and snap-fit parts so the **snap direction is parallel to the layers** — layer lines running perpendicular to the snap will cause it to break easily.
- If a part has thin walls on all sides, adding a **brim** (2–5 mm) helps it stay stuck to the bed during printing.
- Avoid orientations where the Flipper's port openings face downward — bridging across a large hole without support rarely turns out clean.

### When to use supports

Most well-designed Flipper cases are **designed to print without supports** — check the designer's notes before adding them. Unnecessary supports inside a case are hard to remove and can damage delicate snap-fit features.

Use supports if:
- The part has an overhang greater than 45° with nothing underneath it.
- There is a hole or pocket on the underside of the print.

Use a **support interface layer** (available in most slicers) to make supports easier to remove cleanly.

---

## Slicing your file

A slicer converts your 3D file into printer instructions. These are the most widely used slicers:

| Slicer | Best for | Download |
|---|---|---|
| **Bambu Studio** | Bambu Lab printers. Has pre-configured profiles for many machines. | [bambulab.com](https://bambulab.com/en/download/studio) |
| **Orca Slicer** | Most printers. Fork of Bambu Studio with more advanced settings. | [github.com/SoftFever/OrcaSlicer](https://github.com/SoftFever/OrcaSlicer) |
| **PrusaSlicer** | Prusa printers and most others. Reliable and well-documented. | [prusa3d.com](https://www.prusa3d.com/prusaslicer/) |
| **Cura** | Beginners. Simple interface with a huge plugin library. | [ultimaker.com/cura](https://ultimaker.com/software/ultimaker-cura/) |

### Basic slicing workflow

**Step 1** — Open your slicer and select your printer model from the list. This loads the correct bed size and printer limits.

**Step 2** — Import your `.stl` or `.3mf` file. The part will appear on the virtual print bed.

**Step 3** — Orient the part using the rotate tool if needed (see orientation tips above).

**Step 4** — Set your material profile (PLA, PETG, etc.) and apply the print settings from the table above.

**Step 5** — Click **Slice**. The slicer will calculate the toolpaths and show you an estimated print time and filament usage.

**Step 6** — Preview the sliced result layer by layer to check for problems — look for gaps in walls, poor bridging, or missing features.

**Step 7** — Export the G-code to an SD card or send it directly to your printer.

---

## Post-processing

### Removing from the bed

Let the bed cool fully before removing the part — most prints release easily once the bed drops below 40 °C. If a part is stuck, flex the build plate gently (most modern plates are flexible) or use a thin spatula at the edge. Never pry hard from the center.

### Removing supports

Use flush cutters or needle-nose pliers to remove support structures. Work slowly around snap-fit tabs and thin walls — these can break if you twist too aggressively. A craft knife helps clean up any remaining support nubs.

### Sanding

For a smoother surface finish:

- Start with 120–180 grit sandpaper to remove layer lines.
- Move to 400 grit for a smoother feel.
- Finish with 800–1000 grit if you want a near-polished surface.
- Wet sanding (using water while sanding) reduces dust and gives a finer result.

### Fitting issues

If snap-fit clips are too tight or too loose, you can fix this without reprinting:

- **Too tight** — lightly sand the inside of the clip or the mating tab with 220 grit sandpaper.
- **Too loose** — apply a thin layer of superglue to the tab and let it cure fully before reassembling. This builds up just enough material to tighten the fit.

### Thread inserts (for screw-mount designs)

Some cases use M2 or M3 heat-set threaded inserts instead of snap clips. To install:

1. Heat your soldering iron to around 200 °C.
2. Place the brass insert on top of the printed hole.
3. Press gently and slowly with the iron until the insert sits flush.
4. Let it cool for 60 seconds before handling.

---

## Assembly guide

### Fitting a two-part snap case

Most Flipper cases consist of a front shell and a back shell that clip together around the device.

**Step 1** — Check fit dry first. Place the Flipper into the back shell and confirm it sits flat with all ports and buttons aligned before clipping anything.

**Step 2** — Check that all port openings line up — USB-C, GPIO header, speaker holes, and iButton port. Misalignment usually means the part was printed at the wrong scale. Check that your slicer was set to 100% scale.

**Step 3** — Align the front shell and press firmly along the edges — not the center — until you hear or feel the clips engage. Work around the perimeter gradually rather than pressing one spot hard.

**Step 4** — Test all buttons through the case. They should actuate cleanly with no sticking. If a button sticks, a support nub or rough surface inside the case is the usual cause — remove the case and clean it up with a craft knife.

### Fitting a GPIO module mount

**Step 1** — Power down your Flipper before attaching anything to the GPIO header.

**Step 2** — Seat your GPIO module (e.g. Wi-Fi dev board) onto the pins first, before fitting the printed mount. Confirm the module is fully seated and all pins are engaged.

**Step 3** — Slide the printed mount over the module and press it down onto the Flipper body. Most mounts locate on the GPIO header and one or two body features — check the designer's instructions for the specific mount.

**Step 4** — If the mount uses screws, use M2 screws and tighten gently — overtightening will crack a PLA mount.

### Fitting a screen protector frame

**Step 1** — Clean the Flipper screen with a microfibre cloth.

**Step 2** — Cut your protector material (acrylic sheet or tempered glass) to the size specified by the frame design. Most designs include a template or dimension in the description.

**Step 3** — Place the protector into the frame recess and clip the frame onto the Flipper body. Do not use adhesive unless the design specifically calls for it — it makes future removal very difficult.

---

## Troubleshooting common problems

### The print warped or lifted off the bed

The part pulled away from the bed mid-print, usually at the corners.

- Increase bed temperature by 5 °C.
- Add a brim of 3–5 mm in your slicer.
- Clean the bed with isopropyl alcohol before printing.
- If printing ABS or ASA, use an enclosure to keep the air temperature stable.

### The snap clips broke when I tried to clip the case

The clips snapped off during assembly.

- This usually means the part was printed with too few walls or too little infill. Reprint with 4 walls and 30% infill minimum.
- It can also mean the clip is oriented so the layer lines run perpendicular to the snap direction — reorient and reprint.
- For PLA, consider reprinting in PETG, which is less brittle.

### Buttons don't press through the case

The buttons actuate but feel stiff, or one button doesn't reach the switch.

- Check for support material or stringing inside the button openings. Remove with a craft knife.
- Check that the Flipper is seated fully into the case — it sometimes needs to be pressed down firmly before the front shell clips on.
- If the issue persists, the file may need scaling. Check the designer's page for notes on tolerances.

### The ports are misaligned

The USB-C port or GPIO header doesn't line up with the case openings.

- This is almost always a scale issue. Open the file in your slicer and confirm it is at 100% scale in all three axes.
- Some designers publish separate versions for different firmware variants or hardware revisions — check that you downloaded the correct version for your Flipper.

### Stringing between parts of the print

Thin strands of plastic connecting parts of the model that should be separate.

- Increase retraction distance by 0.5 mm increments.
- Increase travel speed.
- Dry your filament — moisture causes stringing significantly.

### Poor surface quality on the top face

The top surface looks rough or has gaps.

- Increase top layers to 5–6.
- Reduce print speed for the top surface (many slicers have a separate top surface speed setting).
- Ensure your cooling fan is running at full speed for the top layers.

---

## Submitting your own designs

If you have designed a case or accessory for the Flipper Zero and want to share it with the community through this repository, follow these guidelines.

### What to include

A good submission includes all of the following:

- **Print files** — `.stl` files for each individual part, plus a `.3mf` file if possible.
- **Source files** — `.step`, `.f3d` (Fusion 360), or `.FCStd` (FreeCAD) so others can modify your design.
- **A README** — a short text file describing what the design is for, what printer and settings you used, and any assembly notes.
- **Photos or renders** — at least one photo of a real printed part. Renders alone are not enough.
- **License** — state clearly how others may use your design. [Creative Commons CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) is recommended for open sharing.

### File naming convention

Use this format for your files:

```
[type]-[description]-[author].stl

Examples:
case-slim-front-jsmith.stl
case-slim-back-jsmith.stl
mount-wifi-devboard-jsmith.stl
stand-desk-angled-jsmith.stl
```

### Folder structure

Place your files in the `3d-printing` folder using this structure:

```
3d-printing/
- cases/
│   - your-design-name/
│       - README.md
│       - front.stl
│       - back.stl
│       - source.step
- accessories/
│   - your-design-name/
│       - README.md
│       - mount.stl
│       - source.f3d
```

### Design guidelines

Following these guidelines makes your design work well for more people:

- Design for **FDM printing without supports** wherever possible. Overhangs should stay under 45°.
- Use **snap-fit clips** rather than screws for cases — screws require hardware that not everyone has. If you use screws, specify the exact size (e.g. M2×6 self-tapping).
- Leave **0.2–0.3 mm clearance** on all faces that mate with the Flipper body. Printed parts are never perfectly accurate — tight fits work on your printer but may not work on someone else's.
- Leave **0.5 mm clearance** around button openings so buttons don't bind.
- Test the design on a **real printed part** before submitting — renders look perfect but prints reveal real problems.
- Include the **Flipper hardware revision** your design was tested against (e.g. "tested on Flipper Zero with standard firmware").

### Submitting via pull request

**Step 1** — Fork this repository on GitHub.

**Step 2** — Add your files to the correct folder following the structure above.

**Step 3** — Open a pull request with a short description of your design and a photo of the printed result.

**Step 4** — A maintainer will review your submission. Be ready to make small changes if requested — common feedback includes missing source files, unclear README, or tolerance issues noted by testers.

---

## 🔗 Useful links

- [Printables — Flipper Zero](https://www.printables.com/search/models?q=flipper+zero)
- [Thingiverse — Flipper Zero](https://www.thingiverse.com/search?q=flipper+zero)
- [MakerWorld — Flipper Zero](https://makerworld.com/en/search?keyword=flipper+zero)
- [Cults3D — Flipper Zero](https://cults3d.com/en/search?q=flipper+zero)
- [OrcaSlicer](https://github.com/SoftFever/OrcaSlicer)
- [PrusaSlicer](https://www.prusa3d.com/prusaslicer/)
- [Bambu Studio](https://bambulab.com/en/download/studio)
- [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura/)
- [Heat-set insert guide — CNC Kitchen](https://www.cnckitchen.com/blog/heat-set-inserts)
