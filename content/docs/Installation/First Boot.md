---
title: Log into RaspAP
weight: 4
---

# Logging into your Raspberry PI
---
# 1. Wire up your Raspberry PI
1. Insert the freshly flashed microSD card into the Pi.
2. Connect the Ethernet cable:
    - one end to the Pi’s Ethernet port,
    - the other end to your modem or upstream router.
3. Plug in the power supply to the Pi and then to a wall outlet.

Give the Pi 2–3 minutes on first boot. It will expand the filesystem and start the RaspAP services.

# 2. Connect to your Raspberry PI
1. Put your formatted SD card into your Raspberry Pi device and wait for a solid green light to show up on it. This will let you know that you can access the device via your Wi-Fi on your laptop or computer. It should show up as `RaspAP`.
2. The initial settings of your new router will be configured as follows:
| Setting | Value |
|---------|-------|
| **IP Address** | `10.3.141.1` |
| **Username** | `admin` |
| **Password** | `secret` |
| **DHCP range** | `10.3.141.50 - 10.3.141.254`|
| **SSID** | `RaspAP` |
| **Password** | `ChangeMe` |

{{< hint info >}}
Note: These values are widely documented so we will change them later
{{< /hint >}}
3. Log into your router by accessing your Raspberry PI IP address (`http://10.3.141.1`) through the web browser.  
4. In the next window put in the configured username and password from step 18 into your RaspAP administrator login
![](../../../screenshots/Rasp-AP-Login.png)
5. When you log into your router, you should see the status of your router. 
![](../../../screenshots/Rasp-AP-Home.png)
{{< hint danger >}}
<strong>Warning:</strong> Do not be tempted to switch to 5G unless you have the nessesary hardware attachments. Doing so will cause it to fail and you will need command line intervention if you don't want to reinstall. Even the Raspberry Pi 5 <strong>DOES NOT</strong> have 5G broadcasting capabilities
{{< /hint >}}
6. Make sure to change the necessary parameters like your Pre-shared key (PSK) by clicking the “Hotspot” tab on the left, and then go to the “Security” section.
![](../../../screenshots/Rasp-AP-Change-PW.png)
7. You have now created your own router, try it out, test the speeds, and enjoy.

