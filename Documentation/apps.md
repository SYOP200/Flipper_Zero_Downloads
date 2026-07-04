<img width="1024" height="246" alt="pixil-frame-0-4" src="https://github.com/user-attachments/assets/0b4770bc-bd89-433e-9c79-e38b815bfbeb" />

> **Navigation**
>
> [Overview](overview.md) | [Apps](apps.md) | [BadUSB](badusb.md) | [Firmware](firmware.md) | [GPIO](gpio.md) |
> [Graphics](graphics.md) | [Infrared](infrared.md) | [NFC](nfc.md) | [RFID](rfid.md) | [PicoPass](picopass.md) |
> [Scripts](scripts.md) | [Sub-GHz](subghz.md) | [UniRF](unirf.md) | [Playlists](playlists.md)

---

# 🧩 Apps

Custom applications — called **FAPs** (Flipper Application Packages) — extend what your Flipper can do. The community has built games, tools, protocol testers, and much more.

---

## 📲 Installing community apps

**Step 1** — Find a `.fap` file from a trusted source, such as the [Flipper Application Catalog](https://lab.flipper.net/) or a community GitHub repo.

**Step 2** — Copy the `.fap` file to the correct folder on your SD card. Apps are sorted by category:

```
/apps/Games/
/apps/Tools/
/apps/Examples/
/apps/USB/
```

**Step 3** — Restart your Flipper. Hold the back button for 5 seconds. Then navigate to **Applications** in the main menu to find your new app.

---

## 📝 Tips for app files

- Include a description so other users know what your app does.
- Add screenshots when sharing publicly.
- Respect the license of any code you borrow or build on.

---

## 🛠️ Building your own app

Apps are written in **C** and built using the official Flipper firmware toolchain. This section gives you a beginner-friendly overview of how it all fits together.

### What you need before you start

- Basic knowledge of C programming
- A Flipper Zero device for testing
- A computer running Windows, macOS, or Linux
- Git installed
- A USB cable

### How the Flipper runs your app

Your app sits on top of the Flipper firmware, which handles all the hardware details for you. Think of the firmware as the foundation — your app uses its tools to draw on screen, read button presses, and access hardware like NFC or GPIO.

```
┌─────────────────────────────────────┐
│         Your App (FAP)              │
│  - Your custom logic                │
│  - Screen drawing                   │
│  - Button handling                  │
└─────────────┬───────────────────────┘
              │ uses
┌─────────────▼───────────────────────┐
│       Flipper Firmware (Core)       │
│  - Hardware drivers                 │
│  - GUI system                       │
│  - API framework                    │
└─────────────┬───────────────────────┘
              │ runs on
┌─────────────▼───────────────────────┐
│       Flipper Zero Hardware         │
└─────────────────────────────────────┘
```

### Every app follows the same lifecycle

No matter how simple or complex your app is, it always runs through these same stages:

```
App starts
    ↓
Set up screen and input
(ViewPort, queue, callbacks)
    ↓
Enter event loop ←─────┐
    ↓                  │
Wait for button press  │
    ↓                  │
Handle the event ──────┘
    ↓
Back button pressed? → Exit
    ↓
Clean up and exit
```

---

## 📁 File structure

Every app lives in its own folder inside `applications_user` and needs exactly two files:

```
flipperzero-firmware/
└── applications_user/
    └── hello_world/
        ├── application.fam   ← app metadata
        └── hello_world.c     ← app code
```

### application.fam — metadata

This file tells the build system your app's name, ID, and where it appears in the menu:

```python
App(
    appid="hello_world",
    name="Hello World",
    apptype=FlipperAppType.EXTERNAL,
    entry_point="hello_world_app",
    stack_size=2 * 1024,
    fap_category="Examples",
)
```

### hello_world.c — the code
 
A minimal app that displays text and exits when you press the back button:

```c
#include <furi.h>
#include <gui/gui.h>

// Draw on the screen
static void app_draw_callback(Canvas* canvas, void* ctx) {
    UNUSED(ctx);
    canvas_clear(canvas);
    canvas_set_font(canvas, FontPrimary);
    canvas_draw_str(canvas, 25, 30, "Hello World!");
}

// Handle button presses
static void app_input_callback(InputEvent* input_event, void* ctx) {
    furi_assert(ctx);
    FuriMessageQueue* event_queue = ctx;
    furi_message_queue_put(event_queue, input_event, FuriWaitForever);
}

// Main entry point
int32_t hello_world_app(void* p) {
    UNUSED(p);

    FuriMessageQueue* event_queue = furi_message_queue_alloc(8, sizeof(InputEvent));

    ViewPort* view_port = view_port_alloc();
    view_port_draw_callback_set(view_port, app_draw_callback, NULL);
    view_port_input_callback_set(view_port, app_input_callback, event_queue);

    Gui* gui = furi_record_open(RECORD_GUI);
    gui_add_view_port(gui, view_port, GuiLayerFullscreen);

    InputEvent event;
    bool running = true;

    while(running) {
        if(furi_message_queue_get(event_queue, &event, 100) == FuriStatusOk) {
            if(event.type == InputTypePress && event.key == InputKeyBack) {
                running = false;
            }
        }
    }

    // Always clean up when you're done
    gui_remove_view_port(gui, view_port);
    view_port_free(view_port);
    furi_message_queue_free(event_queue);
    furi_record_close(RECORD_GUI);

    return 0;
}
```

---

## 🎨 Drawing on the screen

The Flipper screen is 128 × 64 pixels. You draw on it inside the draw callback using `Canvas` functions:

| Function | What it does |
|---|---|
| `canvas_clear(canvas)` | Wipe the screen completely |
| `canvas_set_font(canvas, FontPrimary)` | Choose a font size |
| `canvas_draw_str(canvas, x, y, "text")` | Draw text at position x, y |
| `canvas_draw_box(canvas, x, y, w, h)` | Draw a filled rectangle |
| `canvas_draw_frame(canvas, x, y, w, h)` | Draw an empty rectangle |
| `canvas_draw_line(canvas, x1, y1, x2, y2)` | Draw a line between two points |

---

## 🕹️ Reading button presses

The Flipper has 6 buttons you can listen for in your event loop:

| Key constant | Button |
|---|---|
| `InputKeyUp` | Up |
| `InputKeyDown` | Down |
| `InputKeyLeft` | Left |
| `InputKeyRight` | Right |
| `InputKeyOk` | Center / OK |
| `InputKeyBack` | Back |

---

## 🔨 Building and deploying

### Set up the build environment

```bash
git clone --recursive https://github.com/flipperdevices/flipperzero-firmware.git
cd flipperzero-firmware
./fbt        # Linux / macOS
.\fbt.cmd    # Windows
```

### Build your app

```bash
./fbt fap_hello_world
```

This creates a `.fap` file in `build/f7-firmware-D/.extapps/`.

### Deploy to your Flipper via USB

```bash
./fbt launch_app APPSRC=applications_user/hello_world
```

### Or copy manually

1. Connect your Flipper via USB.
2. Copy the `.fap` file to `/ext/apps/Examples/` on the device.
3. Disconnect and go to **Apps → Examples → Hello World**.

---

## 💡 Tips for beginners

- ✅ Start with Hello World and get it running before adding any features.
- ✅ Every `_alloc()` call needs a matching `_free()` — always clean up your resources.
- ✅ Test frequently on the actual device — the emulator doesn't catch everything.
- ✅ Read existing app code in `applications/examples` to learn common patterns.
- ❌ Don't skip cleanup — leaving resources allocated causes crashes and freezes.

---

## 🔗 Resources

- [Flipper Developer Docs](https://developer.flipper.net/)
- [Firmware GitHub Repository](https://github.com/flipperdevices/flipperzero-firmware)
- [API Reference](https://developer.flipper.net/flipperzero/doxygen/)
- [Flipper Application Catalog](https://lab.flipper.net/)
- [Awesome Flipper Zero](https://github.com/djsime1/awesome-flipperzero)
- [Community Discord](https://flipperzero.one/discord)
