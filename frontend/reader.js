(function (){
	var app = angular.module("reader", [ ]);

	app.controller('ReaderController', function (){
		this.book = book;
		this.currentChapter = null;

		this.setCurrentChapter = function (key){
			this.currentChapter = book.chapters[key];
		};
	});

	app.controller('CurrentWordController',['$interval', function($interval) {
		this.playing = false;
		this.words = null;
		this.currentWord = null;
		this.interval = null;

		this.setWords = function (chapter){
			this.words = chapter.split(" ");
			this.currentWord = 0;
		}

		this.setCurrentWord = function (cwNum){
			this.currentWord = cwNum;
		}

		this.incrementCurrent = function (){
			this.currentWord++;
			if (this.currentWord > this.words.length) {
				this.clearInterval();
				this.togglePlaying();
				this.currentWord = 0;
			};
		}

		this.clearInterval = function (){
			$interval.cancel(this.interval);
		}

		this.togglePlaying = function (){
			this.playing = !this.playing;

			if (this.playing) {
				this.interval = $interval(this.incrementCurrent.bind(this), 220);
			} else {
				this.clearInterval();
			}
		}
	}]);

	var book = {
		title: "Parasol",
		author: "Jordan Holliday",
		coverUrl: "http://i.imgur.com/p32fIw9.jpg",
		chapter: "Thanks a lot, but setTimeout is finishing the loop at each point, I use other approach and its working fine"
	}
})();
