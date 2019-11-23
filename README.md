# Empathy For Dotcom
This is a random empathy generator for Automatticians to generate random use-cases to test on WP.com

<a href="https://empathyfor.com"><image src="https://d1czrtm2mp3lak.cloudfront.net/items/1a0T0T351g2B0e1I0Z3o/Screen%20Shot%202019-11-22%20at%209.16.50%20PM.png" width="191" height="45"></a>

## Notes
Visit https://empathyfor.com and you will be auto-assigned a random use-case which is a combination of:

- **User Type** (business, blog, pro, e-commerce, etc...)
- **Vertical** (fitness, restaurant, travel, etc...)
- **Device** (web, mobile phone, tablet)
- **Connection speed** (regular, fast 3g, slow 3g) Toggle through Chrome dev tools network tab
- **Budget constraints** ($X you are willing to spend)
- **Time available** (X minutes you have available to get something launched)

Rick suggested that I make the option weighted, so I've made that adjustment.

## Q&A

**How do I record my session on a mobile phone or tablet?**

If you have an iPhone or iPad and you have Mac OS X 10.10 Yosemite, you already have a built-in recorder. To start, connect your iPhone/iPad to your Mac using a lightning cable and launch Quicktime Player. Click the File menu and choose "New Movie Recording." Click the arrow to the right of the record button and you'll see your phone as a choice. If you want to record audio as well, change the microphone to your phone as well. This will allow you to record whatever you're doing on your phone. (credit [CNET](https://www.cnet.com/how-to/how-to-record-your-iphones-screen-and-audio-using-a-mac/))

## Deploying changes
- Git clone this repo
- Ask @davemart-in to add you to this project
- Run `npm install -g firebase-tools`
- Run `firebase login`
- Run `firebase init` (select hosting, then 'empathy-for-dotcom' project)
- Make changes
- Run `firebase deploy`