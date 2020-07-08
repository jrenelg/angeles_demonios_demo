
// ==== GENERAL SETTINGS ====

// Enable or disable the preloader by changing var preloader to 'on' or 'off' (disabling it is not reccomended)
var preloader = 'on';

// If var preloaderGIF is 'off', the default CSS3 animation preloader is used - set to 'on' and a GIF image preloader will be used, the loader.gif file in images folder
var preloaderGIF = 'off';


// Enable or disable the background image overlay (the squares) using 'on' or 'off'
var bgImgOverlay = 'on';

// Edit the colour of the CSS background overlay which darkens background images/video by using '#HEX' - use a HEX colour
var bgOverlayColour = '#000000';

// Edit the opacity of the colour overlay - determine how visible the background images/video are between '0' and '1.0'
var bgOverlayOpacity = '0.4';


// ************************************************************* //
// ==== SLIDESHOW BACKGROUND ====

// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// To use a single (static) image background, only use one image line below
var slideshowBackgroundURLS = [
	"images/background1.jpg",
	"images/background2.jpg",
	"images/background3.jpg",
];

// Variable slideshowFade = transition speed for fade animation, in milliseconds
var slideshowFade = 1000;

// Variable slideshowDuration = time each slide is shown for, in milliseconds
var slideshowDuration = 4000;


// ************************************************************* //
// ==== VIDEO BACKGROUND ====


// NOTE
// Video background cannot work on mobile devices due to device restrictions, instead shows slideshow
// If disabled slideshow is shown

// Enable Video Background - 'on' to enable, 'off' to disable
var videoBackground = 'off';

// Paste YouTube URL into the videoBackgronudURL variable - use YouTube link NOT embed code
// You must have http:// before the URL
var videoBackgroundURL = '';

// Set videoMuted to 'true' and background videos will be muted with no toggle mute button visible
// Set videoMuted to 'false' and videos will not be muted, and the toggle mute button will be visible on the site so users can turn off audio if they want
var videoMuted = true;


// ************************************************************* //
// ==== COUNTDOWN ====

// Enable the countdown by setting this to 'on' or disable it by setting the variable to 'off'
var countdownOnOff = 'on';

// Set up the date and time that will be counted down to
// Enter date in the format (24 hr clock): DD Month YYYY HH:MM:SS for example: 01 January 2015 23:04:00
var countdownDate = '31 March 2020 00:00:00';

// If neccessary (to change language of countdown), words used in countdown are found here
// Make sure you change the plural and singular forms (e.g. days and day)
var countdownLang_Days = 'days';
var countdownLang_Day = 'day';

var countdownLang_Hours = 'hours';
var countdownLang_Hour = 'hour';

var countdownLang_Minutes = 'minutes';
var countdownLang_Minute = 'minute';

var countdownLang_Seconds = 'seconds';
var countdownLang_Second = 'second';