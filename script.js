var files = {
	"01_cougar": "Cougar",
	"02_toad": "Toad",
	"03_canadian-goose": "Canadian Goose",
	"04_macaw-parrot": "Macaw Parrot",
	"05_raven": "Raven",
	"06_mallard-duck": "Mallard Duck",
	"07_mallard-duck-freaking-out": "Mallard Duck\n(Freaking Out)",
	"08_cow": "Cow",
	"09_chicken": "Chicken",
	"10_chicken": "Chicken",
	"11_humming-bird": "Humming Bird",
	"12_sheep": "Sheep",
	"13_another-sheep": "Another Sheep",
	"14_yet-another-sheep": "Yet Another Sheep",
	"15_goat": "Goat",
	"16_chimpanzee": "Chimpanzee",
	"17_happy-cat": "Happy Cat",
	"18_content-cat": "Content Cat",
	"19_grumpy-cat": "Grumpy Cat",
	"20_grumpy-cat": "Grumpy Cat",
	"21_doge": "Doge",
	"22_pupper": "Pupper",
	"23_old-doggo": "Old Doggo",
	"24_diesel-engine-start-idle": "Diesel Engine\n(Start/Idle)",
	"25_backing-up": "Backing Up",
	"26_jet-engine-power-up": "Jet Engine\n(Power Up)",
	"27_f-16": "F-16",
	"28_bike-horn": "Bike Horn",
	"29_klaxon-horn": "Klaxon Horn",
	"30_water-drop": "Water Drop",
	"31_phone-on-vibrate": "Phone on Vibrate",
	"32_twitter-app-refresh": "Twitter App\n(Refresh)",
	"33_ping-pong": "Ping Pong",
	"34_lightsaber": "Lightsaber",
	"35_tie-figher": "Tie Figher",
	"36_sci-fi-power-down": "Sci-Fi Power Down",
	"37_sci-fi-epic-drop": "Sci-Fi Epic Drop",
	"38_auto-tune": "Auto-Tune",
	"39_possession": "Possession",
	"40_baby-crying": "Baby Crying",
	"41_skype-call": "Skype Call",
	"42_harmony": "Harmony\n(Not sure what to call this one)",
	"43_throat-singing": "Throat Singing",
	"44_applause": "Applause", 
};

var container = document.querySelector("#sounds");
var panels = Object.keys(files).map(function(name, i) {
	var audio = new Audio();
	audio.src = name + ".mp3";
	
	var item = container.appendChild(document.createElement("li"));
	item.addEventListener("click", function() {
		if(audio.paused) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		}
	});
	
	var div = item.appendChild(document.createElement("div"));
	
	var image = div.appendChild(document.createElement("img"));
	image.src = name + ".png";
	
	var title = files[name];
	title.split("\n").forEach(function(line, j) {
		if(j == 0) {
			div.appendChild(document.createElement("h2")).textContent = line;
		} else {
			div.appendChild(document.createElement("br"));
			div.appendChild(document.createTextNode(line));
		}
	});
	
	return {
		item: item,
		title: title.toLowerCase(),
	};
});

var input = document.querySelector("#search");
input.addEventListener("input", function() {
	var words = input.value.toLowerCase().match(/\w+/g);
	if(!words) words = [];
	panels.forEach(function(panel) {
		var visible = words.every(function(word) {
			return panel.title.indexOf(word) != -1;
		});
		console.log(words, panel.title, visible);
		
		panel.item.style.display = visible ? "" : "none";
	});
});

