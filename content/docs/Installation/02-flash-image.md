---
title: "Flash the RaspAP Image"
weight: 2
---

# Step 1 – Flash the RaspAP Image

In this step you will:

1. **Format** your microSD card.
2. **Download** the RaspAP prebuilt image.
3. Use **Raspberry Pi Imager** to write the image to the card.

This is the part where you should **double-check drive selection** so you don’t erase the wrong disk.

---

## 1. Format the microSD Card 
> ⚠️ **Warning:** This will erase the card. Make sure you picked the right drive.

1. Insert the microSD card into your computer.

   ![Micro SD to USB Adapter](../../../pictures/Micro-SD-to-USB-C-Adapter.png)

2. Download the SD Card Formatter:

{{< tabs >}}
{{% tab "macOS / Windows" %}}
<a href="https://www.sdcard.org/downloads/formatter/" target="_blank" rel="noopener">SD Card Formatter</a>
{{% /tab %}}
{{% tab "Linux" %}}
<a href="https://www.sdcard.org/downloads/sd-memory-card-formatter-for-linux/" target="_blank" rel="noopener">SD Card Formatter (Linux)</a>
{{% /tab %}}
{{< / tabs >}}

 After running it, you should see:

![SD Card Formatter Initial](../../../screenshots/SD-Card-Formatter-1.png)

3. Select the microSD card from the dropdown. **Quick format** the card. Please make sure that nothing else is on the selected SD card, because everything will be deleted. 

![SD Card Formatter Initial](../../../screenshots/SD-Card-Formatter-2.png)

4. If successful, you should see:

![SD Card Formatter Initial](../../../screenshots/SD-Card-Formatter-3.png)


---

## 2. Download the RaspAP Prebuilt Image

1. Download the correct operating system to be used for this process by navigating to the [Quick Start](https://raspap.com/quick-start/){target="_blank"} subsection of the RaspAP website. Click on the “custom OS image” link.
![RaspAP Website](../../../screenshots/RaspAP-Website.png)

2. Download the zip file with the image that has the format ```raspap-trixie-arm64-lite-[version].img.zip```:
![RaspAP download page in browser](../../../screenshots/RaspAP-Github.png "RaspAP download page (placeholder)")

3. Note the folder where the `.img.zip` file is saved. You will need this later.
---

## 3. Use Raspberry Pi Imager 

Now we’ll use **Raspberry Pi Imager** to write the RaspAP image to the microSD card and pre-configure some settings.


1. Download the **Raspberry Pi Imager** from the [Software](https://www.raspberrypi.com/software/){target="_blank"} subsection of the Raspberry Pi official site.
![Raspberry-Pi-Imager-Download](../../../screenshots/Raspberry-Pi-Imager-Download.png)

2. Once you have downloaded the Raspberry Pi Imager, make sure to take note of where the location of the download is in your files, this imager will be used to configure your raspberry pi.
   ![rpi-imager-1.9.6.dmg](../../../screenshots/Downloaded-Imager.png)

3. Run the imager, and select your Raspberry Pi Device, Operating System, and Storage.
![](../../../screenshots/Raspberry-Pi-Imager-1.png)

4. When you select <span style="color: blue; font-weight: bold;"> CHOOSE DEVICE </span> under the Raspberry Pi Device prompt, there should be a list of various Raspberry Pi devices to pop up. Select the device that you are using currently.

5. When you select <span style="color: green; font-weight: bold;"> CHOOSE OS </span> under the Operating System prompt, there should also be a list of various OS systems. In this case you want to select “Use custom”.
![](../../../screenshots/Raspberry-Pi-Imager-2.png)

6. Once you have selected this make sure to choose the image file downloaded during a previous [step.]({{< relref "#2-download-the-raspap-prebuilt-image" >}})

7. When you select <span style="color: orange; font-weight: bold;"> CHOOSE STORAGE </span> under the Storage prompt, select the formated Micro SD Card. If you are using multiple SD cards make sure to choose the one that is formatted correctly.
![](../../../screenshots/Raspberry-Pi-Imager-3.png)

7. When you have chosen all of your components that you are using, click **Next → Edit settings**:
![](../../../screenshots/Raspberry-Pi-Imager-4.png)
   - Set **hostname** (e.g., `raspap-router`).
   - Create a **username and password** (write them down).
   - Optionally configure **Wi-Fi** if you want the Pi to join your existing network on first boot.
   - Set **time zone** and **keyboard layout**.
   ![](../../../screenshots/Raspberry-Pi-Imager-5.png)

> [!INFO]
> Step 6 is optional, recommended for future troubleshooting.

6. Open the **Services** tab:
   - Enable **SSH**.
   - Allow **password login** or add your SSH public key.

7. Save the settings and confirm the write operation.
![](../../../screenshots/Raspberry-Pi-Imager-4.png)

8. Wait for the write and verify steps to finish, then safely eject the microSD card.
![](../../../screenshots/Raspberry-Pi-Imager-6.png)


Once you’ve flashed the SD card and safely ejected it, you’re ready for **first boot**.
