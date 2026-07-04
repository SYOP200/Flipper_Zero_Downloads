<img width="1024" height="246" alt="pixil-frame-0-4" src="https://github.com/user-attachments/assets/0b4770bc-bd89-433e-9c79-e38b815bfbeb" />

> **Navigation**
>
> [Overview](overview.md) | [Apps](apps.md) | [BadUSB](badusb.md) | [Firmware](firmware.md) | [GPIO](gpio.md) |
> [Graphics](graphics.md) | [Infrared](infrared.md) | [NFC](nfc.md) | [RFID](rfid.md) | [PicoPass](picopass.md) |
> [Scripts](scripts.md) | [Sub-GHz](subghz.md) | [UniRF](unirf.md) | [Playlists](playlists.md)

---

# 🔌 GPIO

The Flipper Zero has 18 pins on its top edge that let you connect external hardware — things like LEDs, buttons, sensors, and other chips.

GPIO stands for **General Purpose Input/Output**. Some pins supply power, some send and receive signals, and some support special communication protocols.

---

## 🔑 Pin types explained

**Power pins** supply electricity to your modules. Use these to power your external hardware — not to send signals.

- `5V` — outputs 5 volts. Useful for modules that need more power.
- `3V3` — outputs 3.3 volts. Works with most modern sensors and chips.

**Ground pins (GND)** are the reference point for all signals. Every circuit needs at least one ground connection to complete the loop.

**I/O pins** are for sending and receiving digital signals at 3.3 V. You use these to control LEDs, read buttons, or talk to chips.

**Special-function pins** support communication protocols like SPI, I2C, and UART. Use these to connect more advanced modules that need a specific protocol to communicate.

> ⚠️ All I/O pins operate at **3.3 V**. Do not connect 5 V signals directly to an I/O pin — you can permanently damage your Flipper.

---

## 📌 Pin reference

| Pin | Label | Type | Voltage | Common use |
|---|---|---|---|---|
| 1 | 5V | Power | 5 V | Power-hungry modules |
| 2 | 3V3 | Power | 3.3 V | Most sensors and chips |
| 3–7 | GND | Ground | 0 V | Circuit reference |
| 8 | GND | Ground | 0 V | Circuit reference |
| 9 | PC0 | I/O | 3.3 V | General digital I/O |
| 10 | PC1 | I/O | 3.3 V | General digital I/O |
| 11 | PC3 | I/O | 3.3 V | General digital I/O |
| 12 | PB2 | I/O | 3.3 V | General digital I/O |
| 13 | PB3 (TX) | UART | 3.3 V | Serial transmit |
| 14 | PB4 (RX) | UART | 3.3 V | Serial receive |
| 15 | PB6 (SCL) | I2C | 3.3 V | I2C clock |
| 16 | PB7 (SDA) | I2C | 3.3 V | I2C data |
| 17 | PA4 (CS) | SPI | 3.3 V | SPI chip select |
| 18 | PA6 (MISO) | SPI | 3.3 V | SPI data in |

---

## ✅ Safety checklist

Before wiring anything up, go through this list:

- ✅ **Double-check your wiring** before powering on — a short circuit can damage your Flipper or your module.
- ✅ **Always connect ground** — signals only make sense relative to a shared ground reference.
- ✅ **Use a resistor with LEDs** — a 330Ω resistor protects both the LED and the I/O pin.
- ✅ **Verify your module's voltage** — if it runs at 5 V logic, you need a level shifter before connecting to Flipper's 3.3 V pins.
- ❌ **Never connect 5 V to a 3.3 V I/O pin** — this will permanently damage the Flipper.
- ❌ **Don't connect unknown power sources** — always check the voltage of any external supply first.

---

## 🖼️ Pin diagrams

### Module GPIO

<img width="5000" height="1000" alt="pin layout" src="https://github.com/user-attachments/assets/5bf90e1c-2740-4355-9db2-98efb728a1c7" />

### Pin layout

![rDj495vJHGg8Ae5H_4vdo_image png](https://github.com/user-attachments/assets/d0e1d266-a9f5-487a-a1c0-201e7220235c)

### Pin layout (alternate view)

![zRucuAM1fjos-_rn5VdBb_flipperzeropinout jpg](https://github.com/user-attachments/assets/a0538a23-c729-48b7-85c1-48f6286d831a)

---

## 🔗 Further reading

- [Official GPIO documentation](https://docs.flipper.net/gpio-and-modules)
- [Flipper Zero pinout reference](https://developer.flipper.net/flipperzero/doxygen/)
