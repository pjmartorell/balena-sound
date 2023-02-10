"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[99],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,b=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return o?a.createElement(b,n(n({ref:t},p),{},{components:o})):a.createElement(b,n({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var u=2;u<i;u++)n[u]=o[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8471:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=o(7462),r=(o(7294),o(3905));const i={},n="Support",s={unversionedId:"support",id:"support",title:"Support",description:"Troubleshooting",source:"@site/docs/07-support.md",sourceDirName:".",slug:"/support",permalink:"/balena-sound/support",draft:!1,editUrl:"https://github.com/pjmartorell/balena-sound/edit/master/docs/07-support.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Device support",permalink:"/balena-sound/device-support"}},l={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"No audio",id:"no-audio",level:3},{value:"Description",id:"description",level:4},{value:"Solution",id:"solution",level:4},{value:"Audio cuts or is very stuttery",id:"audio-cuts-or-is-very-stuttery",level:3},{value:"Description",id:"description-1",level:4},{value:"Explanation",id:"explanation",level:4},{value:"Known workarounds",id:"known-workarounds",level:4},{value:"Use a USB Bluetooth dongle",id:"use-a-usb-bluetooth-dongle",level:5},{value:"Disable multi-room feature",id:"disable-multi-room-feature",level:5},{value:"Change Power Supply Unit (PSU)",id:"change-power-supply-unit-psu",level:5},{value:"Rolling back to balenaOS 2.38 / Reduce Bluetooth UART baud rate",id:"rolling-back-to-balenaos-238--reduce-bluetooth-uart-baud-rate",level:5},{value:"Audio is delayed",id:"audio-is-delayed",level:3},{value:"Description",id:"description-2",level:4},{value:"Explanation",id:"explanation-1",level:4},{value:"Workarounds",id:"workarounds",level:4},{value:"Multiroom is not working",id:"multiroom-is-not-working",level:3},{value:"Description",id:"description-3",level:4},{value:"Solution",id:"solution-1",level:4},{value:"No audio on HDMI output on Raspberry Pi 4",id:"no-audio-on-hdmi-output-on-raspberry-pi-4",level:3},{value:"Description",id:"description-4",level:4},{value:"Workaround",id:"workaround",level:4},{value:"No audio when using balenaOS 64 bit on Raspberry Pi 3&#39;s",id:"no-audio-when-using-balenaos-64-bit-on-raspberry-pi-3s",level:3},{value:"Description",id:"description-5",level:4},{value:"Workaround",id:"workaround-1",level:4},{value:"Contact us",id:"contact-us",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"support"},"Support"),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"This section provides troubleshooting guidance for a few common pitfalls users have faced when deploying balenaSound."),(0,r.kt)("h3",{id:"no-audio"},"No audio"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"No audio is coming out of your speaker system."),(0,r.kt)("h4",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Ensure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You correctly plugged an audio or HDMI cable to your device"),(0,r.kt)("li",{parentName:"ul"},"You are connected to the device and streaming audio to it via any of the supported alternatives")),(0,r.kt)("p",null,"If you are using a DAC, make sure your DAC is on the supported list ",(0,r.kt)("a",{parentName:"p",href:"audio-interfaces#dac-boards"},"here")," and that you applied the required configuration changes. If your DAC is not on the list, please let us know by opening an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/new"},"issue"),". We will work with you to find the correct configuration and add the DAC to the supported list."),(0,r.kt)("h3",{id:"audio-cuts-or-is-very-stuttery"},"Audio cuts or is very stuttery"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"When streaming audio via bluetooth to a Raspberry Pi 3 B/B+ that is running balenaSound, you experience the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio output has intermittent cuts every few seconds. This can be anything from once every few seconds to multiple bursts per second."),(0,r.kt)("li",{parentName:"ul"},"The service logs show one of the following errors:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"21.12.19 22:35:35 (+1100) bluetooth-audio /usr/bin/bluealsa: SBC decoding error: No such process\n21.12.19 22:35:35 (+1100) bluetooth-audio /usr/bin/bluealsa: Missing RTP packet: 27632 != 27630\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"audio  E: [bluetooth] a2dp-codec-sbc.c: SBC decoding error (-3)\naudio  E: [bluetooth] module-bluez5-device.c: Decoding error\naudio  D: [bluetooth] module-bluez5-device.c: IO thread failed\naudio  D: [pulseaudio] module-bluez5-device.c: Switching the profile to off due to IO thread failure.\naudio  D: [pulseaudio] module-rescue-streams.c: No evacuation source found.\n")),(0,r.kt)("h4",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"Stuttering issues on the Raspberry Pi 3 family are related to a known problem with the BCM43438/CYW43438 chip where Bluetooth and WiFi signals interfere with each other. Both the chip manufacturer (Cypress) and the Raspberry Pi Foundation have acknowledged this and there are several upstream open issues that address it. Unfortunately this doesn't seem to be a high priority task for them. Here are the relevant GitHub issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/linux/issues/1552"},"https://github.com/raspberrypi/linux/issues/1552")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/linux/issues/2264"},"https://github.com/raspberrypi/linux/issues/2264")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/linux/issues/1444"},"https://github.com/raspberrypi/linux/issues/1444")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/linux/issues/1402"},"https://github.com/raspberrypi/linux/issues/1402")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Arkq/bluez-alsa/issues/60"},"https://github.com/Arkq/bluez-alsa/issues/60"))),(0,r.kt)("h4",{id:"known-workarounds"},"Known workarounds"),(0,r.kt)("p",null,'At the moment there is no "official" solution to this problem. The following workarounds have proven to work or at least reduce the frequency of the audio cuts. Your milleage might vary depending on your use case so be sure to test them all.'),(0,r.kt)("h5",{id:"use-a-usb-bluetooth-dongle"},"Use a USB Bluetooth dongle"),(0,r.kt)("p",null,"This is the official recommendation made by the Raspberry Pi Foundation. Adding a USB Bluetooth dongle to your board removes the interference problems happening at the onboard WiFi/BT chip. balenaSound will automatically detect the bluetooth dongle and configure itself to use it in place of the board's bluetooth."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.amazon.com/TP-Link-Bluetooth-Receiver-Controllers-UB400/dp/B07V1SZCY6/ref=sr_1_7"},"This")," dongle has been tested to work for this, but any dongle really should work."),(0,r.kt)("h5",{id:"disable-multi-room-feature"},"Disable multi-room feature"),(0,r.kt)("p",null,"Using multi-room has proven to make this issue a lot more frequent and noticeable; most likely due to the increased resource usage that it requires."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are ",(0,r.kt)("em",{parentName:"li"},"not")," using multi-room (you only have one device on your balenaSound fleet) you can disable it to alleviate the problem. Check our ",(0,r.kt)("a",{parentName:"li",href:"customization/#general"},"docs")," to find out how."),(0,r.kt)("li",{parentName:"ul"},"If you are using multi-room consider changing the ",(0,r.kt)("inlineCode",{parentName:"li"},"master server")," from which you stream to other devices to a Raspberry Pi 4. Raspberry Pi 3's can exhibit audio stuttering when working as ",(0,r.kt)("inlineCode",{parentName:"li"},"master server")," but they work fine if you use them as ",(0,r.kt)("inlineCode",{parentName:"li"},"clients"),".")),(0,r.kt)("h5",{id:"change-power-supply-unit-psu"},"Change Power Supply Unit (PSU)"),(0,r.kt)("p",null,"Bad quality power supply units are more likely to trigger this problem. Investing in a good power supply unit is always a good idea!\nWe recommend using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/products/raspberry-pi-universal-power-supply/"},"original Raspberry Pi power supply")," and if not possible at least one that conforms to the power requirements described in ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/hardware/raspberrypi/power/README.md"},"here"),"."),(0,r.kt)("p",null,"Thank you ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MatthewCroughan"},"@MatthewCroughan")," for the thorough ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/62#issuecomment-605265537"},"investigation and testing"),"!"),(0,r.kt)("h5",{id:"rolling-back-to-balenaos-238--reduce-bluetooth-uart-baud-rate"},"Rolling back to balenaOS 2.38 / Reduce Bluetooth UART baud rate"),(0,r.kt)("p",null,"Raspberry Pi 3's before rev 1.3 have no HW flow control on the UART that controls the Bluetooth modem. This causes occasional data loss which result in the audio stuttering problem described above. Reducing the UART baud rate to ",(0,r.kt)("inlineCode",{parentName:"p"},"460800")," lessens the problem significantly when compared to the default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"921600"),"."),(0,r.kt)("p",null,"This however requires advanced knowledge and usage of balenaOS. So the advised change is to roll back to balenaOS version 2.38.0+rev1 which uses a default baud rate of ",(0,r.kt)("inlineCode",{parentName:"p"},"921600")," but has other firmware configuration that avoids this problem. In order to roll back your balenaOS version you will need to re-flash your SD card and re-provision your device."),(0,r.kt)("p",null,"We are currently working on bringing back the configuration present in balenaOS 2.38 to the latest version so that the roll back is not necessary; you can keep track of it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/balena-os/balena-raspberrypi/issues/476"},"here"),"."),(0,r.kt)("h3",{id:"audio-is-delayed"},"Audio is delayed"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"When playing audio from any source it takes a few seconds for it to start/stop playing (usually 2-3 seconds). This is especially noticeable when streaming audio from a video source as it's not in sync with the image."),(0,r.kt)("h4",{id:"explanation-1"},"Explanation"),(0,r.kt)("p",null,"balenaSound uses many technologies to provide audio streaming capabilities. All these layers of software introduce a small amount of delay that in the end add up to something that can be noticeable. We understand that this means that balenaSound is not suitable for certain applications (streaming audio from video sources for instance) but we believe this is an acceptable tradeoff for all the cool features we offer."),(0,r.kt)("h4",{id:"workarounds"},"Workarounds"),(0,r.kt)("p",null,"There are however workarounds that you might want to take if you are willing to sacrifice some features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airplay streaming has a built-in two-second delay. Using a different audio source will obviously yield better results."),(0,r.kt)("li",{parentName:"ul"},"If you are ",(0,r.kt)("em",{parentName:"li"},"not")," using the multi-room feature you can disable it; multi-room adds the most of the perceived delay as it needs it to sync audio across devices. Check our ",(0,r.kt)("a",{parentName:"li",href:"customization/#general"},"docs")," to find out how to disable it.")),(0,r.kt)("h3",{id:"multiroom-is-not-working"},"Multiroom is not working"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Streaming audio to a device works fine but other devices on the network don't sync to it."),(0,r.kt)("h4",{id:"solution-1"},"Solution"),(0,r.kt)("p",null,"Multi-room is enabled by default in all device types. Ensure your device is properly configured. You can see the list of default modes of operation ",(0,r.kt)("a",{parentName:"p",href:"device-support"},"here"),"."),(0,r.kt)("p",null,"If your device is properly configured and still can't get multi-room to work try power cycling the ",(0,r.kt)("inlineCode",{parentName:"p"},"master server")," device. Devices might have missed the event broadcast where a device announces itself as a new ",(0,r.kt)("inlineCode",{parentName:"p"},"master server"),", by rebooting it we force the device to send them again."),(0,r.kt)("h3",{id:"no-audio-on-hdmi-output-on-raspberry-pi-4"},"No audio on HDMI output on Raspberry Pi 4"),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"HDMI audio output is currently not working as intended on Raspberry Pi 4. See this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/79"},"issue")," for details."),(0,r.kt)("h4",{id:"workaround"},"Workaround"),(0,r.kt)("p",null,"You can force HDMI audio to work by setting the device environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"BALENA_HOST_CONFIG_hdmi_mode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zchbndcc9"},"@zchbndcc9")," for finding this workaround."),(0,r.kt)("h3",{id:"no-audio-when-using-balenaos-64-bit-on-raspberry-pi-3s"},"No audio when using balenaOS 64 bit on Raspberry Pi 3's"),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"No audio coming out from either the audio jack or HDMI when using balenaOS 64 bit on a Raspberry Pi 3."),(0,r.kt)("p",null,"For details see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/balena-labs-projects/balena-sound/issues/82"},"https://github.com/balena-labs-projects/balena-sound/issues/82")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/balena-io/balena-supervisor/issues/1245"},"https://github.com/balena-io/balena-supervisor/issues/1245"))),(0,r.kt)("h4",{id:"workaround-1"},"Workaround"),(0,r.kt)("p",null,"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"vc4-kms-v3d")," dtoverlay setting from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Device Configuration")," section of your device."),(0,r.kt)("h2",{id:"contact-us"},"Contact us"),(0,r.kt)("p",null,"If you have any questions regarding balenaSound, whether it's an issue not listed in the troubleshooting section, a request for a new feature or DAC, or simply if you want to discuss about the project, feel free to reach us at our ",(0,r.kt)("a",{parentName:"p",href:"https://forums.balena.io"},"forums")," or open an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/new"},"issue")," on our GitHub repository. Thanks for trying out balenaSound!"))}d.isMDXComponent=!0}}]);