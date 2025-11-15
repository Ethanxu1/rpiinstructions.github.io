---
title: "Hardware & Software Requirements"
weight: 1
---

# Hardware & Software Required

This section lists the **hardware** and **software** you’ll need before you start flashing anything.  
Prices are approximate and will vary by store and region, but they give a rough idea of the budget.

---

## Raspberry Pi Options

These are the most beginner-friendly options.

![Raspberry Pi](../../../pictures/Raspberry-Pi.png)

### Raspberry Pi Zero / Zero 2 W

- **Raspberry Pi Zero or Zero 2 W** (Zero 2 W recommended for stability)
  - Only one built-in network interface (Wi-Fi).
  - Needs a **USB-to-Ethernet adapter** (recommended) or **USB Wi-Fi adapter** for the second interface.
  - **Approx. price:** around **$25** for the board, plus the cost of adapters.

This setup is compact and great for travel, but slightly more fragile for beginners because of the extra adapters.

### Raspberry Pi 3B or Newer (3B+, 4, 5)

- These models have **built-in Wi-Fi and an Ethernet port**, so **no additional network adapters** are needed.
- Plug Ethernet into the Pi for upstream internet and use Wi-Fi as your hotspot.
- **Approx. price:** usually **$46–$128**, depending on model and kit.

**Recommended for most beginners** because the wiring and configuration are much simpler.

{{< hint info >}}
If you have a choice, start with a <strong>Pi 3B or newer</strong> for simpler wiring and easier troubleshooting.
{{< /hint >}}

---

## Other Hardware

![Ethernet Cable](../../../pictures/Ethernet-Cable.png) 

### Ethernet Cable (or Wi-Fi Adapter)

- Used to **connect the Pi to the internet**:
  - Pi Ethernet port → modem or existing router LAN port.
- If you are doing a more advanced setup (e.g., Pi Zero with two Wi-Fi adapters), you may instead use a **USB Wi-Fi adapter** as your second interface.
- **Approx. price:**
  - Ethernet cable: **$5–$15**
  - Basic USB Wi-Fi adapter (if needed): **$10–$20**

---

![MicroSD Card](../../../pictures/SD-Card.png)

### Storage – MicroSD Card

- **MicroSD card (≥16 GB)** used to store the OS and RaspAP.
- You will **flash** this card with a pre-configured RaspAP image or Raspberry Pi OS.
- Larger or faster cards make updates and logging smoother, but any decent 16 GB+ card works.
- **Approx. price:** **$5+** depending on size and speed.

{{< hint danger >}}
Warning: Please make sure <strong>nothing important is on the selected SD card</strong>. Everything will be permanently deleted when you flash the image.
{{< /hint >}}

---

![Power Adapter](../../../pictures/Power-Adapter.png)

### Power Adapter

- A **reliable 5V power supply**, at least **1.2A** for lighter boards and **2A or more** for Pi 3/4/5.
- Unstable or under-powered adapters can cause random reboots and strange behavior.
- **Approx. price:** around **$10**.

---

![Micro SD to USB Adapter](../../../pictures/Micro-SD-to-USB-C-Adapter.png)

### MicroSD to USB Adapter

- Only needed if your computer does **not** have a built-in microSD slot.
- Lets you plug the microSD card into a USB-A or USB-C port so you can flash it.
- **Approx. price:** usually **$5–$15**.

---

### Monitor (Optional)

- A **monitor + keyboard** can be helpful if:
  - headless setup fails,
  - or you need to debug early boot issues.
- Not required if you configure SSH and Wi-Fi correctly using Raspberry Pi Imager.
- **Approx. price:** highly variable; you can often borrow an existing monitor/TV.

---

## Software / Downloads

You will need two main pieces of software:

1. **RaspAP prebuilt OS image**  
   - Download the latest **custom Raspberry Pi OS Lite image with RaspAP pre-installed** from the RaspAP “Simple Setup / Quick Start” page.
   - This gives you a ready-to-use router image with RaspAP already configured.

2. **Raspberry Pi Imager**  
   - Official tool from the Raspberry Pi Foundation used to **flash the RaspAP image** onto your microSD card.
   - Available for **macOS, Windows, and Linux**.

We’ll walk through using Raspberry Pi Imager in the next section, with tabbed instructions for **macOS, Windows, and Linux** so you can follow along on your own machine.
