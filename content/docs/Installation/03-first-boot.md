---
title: "First Boot and Connecting"
weight: 3
---

# Step 2 – First Boot & Connecting to RaspAP

In this step you’ll:

- plug everything into the Raspberry Pi,
- power it up,
- connect to the default RaspAP Wi-Fi,
- log into the web interface.

---

## 1. Wire Up the Raspberry Pi

1. Insert the freshly flashed **microSD card** into the Pi.

![Inserting microSD card into Raspberry Pi](../../../pictures/Insert-MicroSD-Card.png)

2. Connect the **Ethernet cable**:
   - one end to the Pi’s Ethernet port:
      ![Connecting Ethernet cable from Pi to home router](../../../pictures/Plug-in-Ethernet-to-RPI.png "Connect Pi to router via Ethernet (placeholder)")
   - the other end to your **modem** or **upstream router**.


3. Plug in the **power supply** to the Pi and then to a wall outlet.

   ![Powering on Raspberry Pi](../../../pictures/Plug-in-power-to-RPI.png "Power on the Pi (placeholder)")

Give the Pi **2–3 minutes** on first boot. It will expand the filesystem and start the RaspAP services.

---

## 2. Default RaspAP Hotspot Settings

After setup, RaspAP creates a default Wi-Fi network and web admin login. By default, these are:

| Setting | Value |
|---------|-------|
| **IP Address** | `10.3.141.1` |
| **Username** | `admin` |
| **Password** | `secret` |
| **DHCP range** | `10.3.141.50 - 10.3.141.254`|
| **SSID** | `RaspAP` |
| **Password** | `ChangeMe` |

> These defaults are public and widely documented.  
> We’ll **change them for security** in the next section.

---

## 3. Connect from a Laptop or Phone

1. On your laptop or phone, open the list of Wi-Fi networks.
2. Look for the network named **`RaspAP`** and connect using password **`ChangeMe`**.

   ![Wi-Fi menu showing RaspAP network](../../../screenshots/Wifi-Name.png "RaspAP SSID in Wi-Fi list (placeholder)")

3. Once connected, open a browser and go to:

   - `http://10.3.141.1`

4. You should see the **RaspAP login page**.

   ![RaspAP login page in browser](../../../screenshots/Rasp-AP-Login.png "RaspAP login screen (placeholder)")

5. Log in with:

   - Username: `admin`  
   - Password: `secret`

   If this works, you’re now inside the RaspAP web interface and ready to customize your router.

   ![RaspAP home page in browser](../../../screenshots/Rasp-AP-Home.png "RaspAP login screen (placeholder)")

> [!DANGER]
> **Warning:** do not turn on 5G unless you have the required hardware. Doing so will cause the PI to disconnect and will require commandline intervention or reinstallation. No Raspberry Pi model has built-in 5G broadcasting capabilities.
