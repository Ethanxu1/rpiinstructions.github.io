---
title: Install Operating System and Rasp AP
weight: 3
---
# Installing the Operating System and Rasp AP
---
1. Download the correct operating system to be used for this process by navigating to the [Quick Start](https://raspap.com/quick-start/) subsection of the RaspAP website. Click on the “custom OS image” link.
![](/screenshots/RaspAP-Website.png)
2. Download the following operating system file “raspap-trixie-arm64-lite-3.4.7.img.zip” from the [GitHub](https://github.com/RaspAP/raspap-webgui/releases/tag/3.4.7) page. You will need this later.
![](/screenshots/RaspAP-Github.png)
3. Download the Raspberry Pi Imager from the [Software](https://www.raspberrypi.com/software/) subsection of the Raspberry Pi official site.
![](/screenshots/Raspberry-Pi-Imager-Download.png)
4. Once you have downloaded the Raspberry Pi Imager, make sure to take note of where the location of the download is in your files, this imager will be used to configure your raspberry pi.
![rpi-imager-1.9.6.dmg](/screenshots/Downloaded-Imager.png)
5. With the imager program running (from step 4), you have the option to select your Raspberry Pi Device, Operating System, and Storage. 
![](/screenshots/Raspberry-Pi-Imager-1.png)
6. When you select “CHOOSE DEVICE” under the Raspberry Pi Device prompt, there should be a list of various Raspberry Pi devices to pop up. Select the device that you are using currently.
7. When you select “CHOOSE OS” under the Operating System prompt, there should also be a list of various OS systems. In this case you want to select “Use custom”.
![](/screenshots/Raspberry-Pi-Imager-2.png)
8. Once you have selected this make sure to choose the downloaded file from [Install Operating Systems and Rasp AP].
9. When you select “CHOOSE STORAGE” under the Storage prompt, select the formated Micro SD Card. If you are using multiple SD cards make sure to choose the one that is formatted correctly.
![](/screenshots/Raspberry-Pi-Imager-3.png)
10. When you have chosen all of your components that you are using, you can now click “NEXT” in the imager, and then select “EDIT SETTINGS” in the next window.
![](/screenshots/Raspberry-Pi-Imager-4.png)
11. In the “General” tab of the new window, you want to make sure of a few things 
    - Create a username and password (might want to make a note of it).
    - Select the current Wi-Fi router that you are using now that has an SSID and a password, some internet providers will not have this option.
    - Select your Wireless LAN country, if necessary.
    - Check the box for “Set locale settings”, and then provide your timezone as well as your keyboard layout.
    - Then, save all of your edits.
![](/screenshots/Raspberry-Pi-Imager-5.png)
12. Now you want to click the “Services” tab and then “Enable SSH” which will then have you select “allow public-key authentication key” (make sure you have a public key to generate).
13. This will be all for the OS customization settings, click yes to move on.
![](/screenshots/Raspberry-Pi-Imager-4.png)
14. This next part of the process may take a little bit of time. Make sure you’ve selected the correct formatted SD card. Once the process is done, you should be prompted to eject your newly formatted SD card.
![](/screenshots/Raspberry-Pi-Imager-6.png)

