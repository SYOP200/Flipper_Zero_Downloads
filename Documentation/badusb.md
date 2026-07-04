<img width="1024" height="246" alt="pixil-frame-0-4" src="https://github.com/user-attachments/assets/0b4770bc-bd89-433e-9c79-e38b815bfbeb" />

> **Navigation**
>
> [Overview](overview.md) | [Apps](apps.md) | [BadUSB](badusb.md) | [Firmware](firmware.md) | [GPIO](gpio.md) |
> [Graphics](graphics.md) | [Infrared](infrared.md) | [NFC](nfc.md) | [RFID](rfid.md) | [PicoPass](picopass.md) |
> [Scripts](scripts.md) | [Sub-GHz](subghz.md) | [UniRF](unirf.md) | [Playlists](playlists.md)

---

# ⌨️ BadUSB

BadUSB makes your Flipper pretend to be a USB keyboard. When plugged into a computer, it automatically "types" a pre-written script — faster than any human could.

The computer has no way to tell it apart from a real keyboard, so it follows every command in the script without question.

---

## ⚠️ Only use on devices you own

Do **not** use BadUSB on:

- school computers
- work computers
- public computers
- anything you don't own or have permission to test

Unauthorized use may be illegal in your region.

---

## 📂 Where to put your scripts

Copy `.txt` script files into the **`badusb`** folder on your Flipper's SD card using qFlipper.

Then on your Flipper, go to **BadUSB**, select your script, and plug into a computer to run it.

---

## 📝 How scripts work

Scripts are written in **Rubber Ducky syntax** — a simple text format where each line is one action. The Flipper reads the script top to bottom and executes each command in order.

### Common commands

| Command | What it does |
|---|---|
| `REM` | A comment — the Flipper ignores this line. Use it for notes. |
| `DELAY` | Wait for a number of milliseconds before the next command. 1000 = 1 second. |
| `STRING` | Type out whatever text follows on that line. |
| `ENTER` | Press the Enter key. |
| `GUI` | Hold the Windows key (or Command on Mac) while pressing another key. |
| `CTRL` | Hold Control while pressing another key. |
| `ALT` | Hold Alt while pressing another key. |
| `SHIFT` | Hold Shift while pressing another key. |

### Example script

```
REM Open Notepad on Windows and type a message

DELAY 1000
GUI r
DELAY 500
STRING notepad
ENTER
DELAY 1000
STRING Hello from Flipper Zero!
```

What this does, step by step:

1. Waits 1 second for the computer to recognise the "keyboard"
2. Presses `Windows + R` to open the Run dialog
3. Waits half a second for the dialog to appear
4. Types `notepad` and presses Enter to open it
5. Waits for Notepad to load
6. Types a message

---

## 💡 Tips

- Always start with a `DELAY 1000` or longer — computers need a moment to recognise a new keyboard before accepting input.
- Test scripts on your own machine first.
- Keep scripts simple and well-commented with `REM` so you remember what each part does.
- Scripts are plain `.txt` files — you can write them in any text editor.

---

## 🎬 Install walkthrough

https://github.com/user-attachments/assets/cda1512c-024c-40de-ad00-bf18e9e85e80

### Payload screen

![3GUDYkC5JgUWgo6RW8piO-omz_V33ZLFGQ2rbXBT8Ox-20250123-160117 jpg](https://github.com/user-attachments/assets/78bfbfe0-fd35-4fc2-8f90-9381277d948e)
