---
title: 'Access to WhatsApp Blocked Again'
date: '2024-10-31'
tags: ['whatsapp', 'proxy']
draft: false
summary: This article explores how to use a proxy server with WhatsApp to overcome access restrictions in regions where the app is blocked.
---

This article delves into the technical aspects of WhatsApp's features, focusing on how to overcome access restrictions.

## Background

Due to ongoing political issues, internet access is currently restricted in Mozambique, affecting platforms like WhatsApp. As of today, October 31, many people are still unable to connect to WhatsApp. A friend of mine was affected by this, motivating me to find a technical workaround.

## Initial Attempts: Using a VPN

While some people have been using VPNs to bypass these restrictions, I wanted to explore alternative methods. I remembered that WhatsApp offers a feature designed specifically for situations like this.

## Using a Proxy Server with WhatsApp

To address access issues, [WhatsApp supports using a proxy server](https://faq.whatsapp.com/1299035810920553). In case you're unfamiliar, a proxy server acts as an intermediary between a user's device and the internet, routing requests to provide access even when direct connections are restricted.

![image](https://www.fortinet.com/content/dam/fortinet/images/cyberglossary/proxy-server-1.jpeg)

A proxy server helps users access WhatsApp in regions where the app is blocked or restricted by acting as an intermediary. When you send a message through WhatsApp while connected to a proxy, your request is routed to the proxy server first, which then forwards it to WhatsApp’s servers. This process masks your original IP address, making it appear as though you are connecting from a different location where WhatsApp is accessible. By using a proxy, you can effectively bypass government censorship and continue communicating freely, even in restrictive environments.

## Setting Up a Proxy Server with Docker

After searching online for accessible proxy servers without success, I decided to set up my own. Fortunately, [WhatsApp provides a Docker image](https://github.com/WhatsApp/proxy) that simplifies this process. The documentation offers more in-depth instructions.

1. **Pulling the Docker Image**: I pulled the Docker image to my VPS (Virtual Private Server).
```bash
docker pull facebook/whatsapp_proxy:latest
```
2. **Configuring and Exposing Ports**: Two essential ports need to be exposed:
    - **5222** for chat services
    - **7777** for media sharing
    - **8199** (optional) to show the proxy status
```bash
docker run -it -p 5222:5222 -p 8199:8199 -p 7777:7777 whatsapp_proxy:1.0
```

At first, I only exposed port 5222, which allowed basic text messaging but restricted media sharing. Only after exposing port 7777 was I able to send media files.

## Configuring the Proxy in WhatsApp
Once the proxy server is set up, configuring it in WhatsApp is straightforward. Follow these steps:

1. **Open WhatsApp** on your phone.
2. Go to **Settings** > **Storage and Data** > **Proxy**.
3. **Turn on** the “Use Proxy” option.
4. **Enter the Proxy Address**: Type in the IP address or domain of your configured proxy server (e.g., `yourproxyserver.com` or `123.456.789.0`).
5. Set the Ports:
    - Set the **chat port** to **5222**.
    - Set the **media port** to **7777**.
6. Tap **Save**.

If connected successfully, you should see a status indicator in WhatsApp confirming the proxy connection.

![image](/blog/screenshot-whatsapp-proxy.jpg)

Through this setup, I was able to restore full WhatsApp functionality despite the restrictions. For others facing similar issues, this method might offer a reliable alternative to VPNs for maintaining access.
