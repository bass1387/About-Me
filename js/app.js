console.log(React);
console.log(ReactDOM);

var Billiard = React.createClass({
  
  render: function() {
	return (
	  <div>
	      <h1>Бильярд - моя страсть</h1>
		  <div className="img right">
		    <div><img src="/images/billiard.jpg"></img></div>
			<div className="img_cap">Чемпионат области по пирамиде</div>
		  </div>
          <div className="text">
		    <p>Я профессионально занимаюсь русским бильярдом более 10 лет. 
		    В этот спорт я пришёл 1 сентября 2005 года благодаря своему отцу, 
		    с которым мы постоянно ходили играть в Американский ПУЛ. 
		    Я постоянно проигрывал, что очень не любил, поэтому решил пойти в "Школу бильярда", 
		    чтобы улучшить свои навыки и обыграть отца.</p>
		    <p>Тренировочный процесс меня настолько затянул, что я не мог оторваться от бильярдного стола, 
		    тренируясь все свое свободное время (по 8 часов в выходные дни). 
		    Рерультат тренировок не заставил себя долго ждать, и вскоре я стал играть наравне с более опытними спортсменами. 
		    Спустя 3 года удачно выступил на Кубке Губернатора Пензенсой области, обыграв одного кандидата в мастера спорта 
		    и чемпионку России среди женщин. Проиграл я в 1/16 финала мастеру спорта из Оренбурга, который впоследствие 
		    взял меня к себе в ученики. </p>
		    <p>На данный момент я не только выполнил и неоднократно подтвердил звание кандидата в мастера спорта, 
		    но и воспитал 3 юных кандидатов в мастера спорта, чем очень горжусь!!</p>
		  </div>
	  </div>
	);
  },
});


var Photo = React.createClass({
  
  render: function() {
	return (
	  <div>
	    <h1> Фотография </h1>
		<div className="img right">
		    <div><img src="/images/photo.jpg"></img></div>
			<div className="img_cap">Одна из самых любимых фото.</div>
		</div>
		<div className="text">
		    <p>Фотографией я начал увлекаться чуть позже. Увлечение началось со снимков на обычную мыльницу, 
			затем я попробовал плёночную "зеркалку" Зоркий, но и он вскоре уже мог удовлетворить моих потребностей 
			к качесву фото. В связи с этим был приобретен цифровой зеркальный фотоаппарат NIKON.</p>
		    <p>Вот тут-то передо мной и открылись бесконечные возможности фотографии, полная свобода творчества, 
			которая позволяет делать очень классные фото.</p>
		  </div>
	  </div>
	);
  },
});


var Web = React.createClass({
  
  render: function() {
	return (
	  <div>
	    <h1> WEB дизайн </h1>
		<div className="img right">
		    <div>
			  <a href="http://safira58.ru" target="_blank"><img src="/images/safira.jpg"></img></a>
			  <a href="http://дента58.рф" target="_blank"><img src="/images/denta.jpg"></img></a>
			</div>
			<div className="img_cap">Созданные сайты</div>
		</div> 
		<div className="text">
		    <p>Любовь к написнию сайтов пришла ко мне относительно недавно, во время учёбы в институте по специальности 
			"Радиотехника". Да уж вот я такой я разносторонний. Спасибо создателям программы обучения за то, что они включили 
			основы web-дизайна. Этот курс длился всего семестр, но стал моим самым любимым за всё время обучения. Тогда я понял,
			 что мне нужно было идти на web-разработку, ведь это та область, которая мне действительно нравится.</p>
		    <p>Закончив таки специальность "Радиотехника" я самостоятельно начал доучивать HTML и CSS, затем перешёл к Javascript.
			Огромное спасибо моему другу, который подсказал источники, такие как сайт coursera.com, в которых очень много подробно
			 изложенных курсов от университетов со всего мира!!</p>
			<p>В планах на будущее у меня освоить специализацию full-stack web developer, которую освоить одному мне не под силу.
			Поэтому хочу работать в команде единомышленников, обмеиваться опытом и конечно пополнять копилку своих знаний и 
			прокачивать скиллы web-разработки!</p>
		  </div>
	  </div>
	);
  },
});


var Buttons = React.createClass({
	
	//устанавливаем начальное состояние (state)
  getInitialState: function() { 
    return {
      billiardChecked: true,
      photoChecked: false,
      webChecked: false
    };
  },
 
 /* не получилось вызвать внутри billiardClick, photoClick, webClick 
  changeBackground: function() {
    var a = document.getElementById("buttons");
	if (this.billiardChecked) {
	  return(a.style.background = "url(/images/billiard_bg.jpg) repeat");
	} else {
	    if (this.photoChecked) {
	      return(a.style.background = "url(/images/photo_bg.jpg) repeat");
	    } else {
	      if (this.webChecked) {
	        return(a.style.background = "url(/images/web_bg.jpg) repeat");
	      }
	  }
	} 
  },*/
  
  billiardClick: function(e) {
	var a = document.getElementById("buttons");
    e.preventDefault();
    this.setState({billiardChecked: true, photoChecked: false, webChecked: false});
	a.style.background = "url(/images/billiard_bg.jpg) repeat";
	a.className = 'buttons billiard';
  },
  
  photoClick: function(e) {
	var a = document.getElementById("buttons");	
	e.preventDefault();
    this.setState({billiardChecked: false, photoChecked: true, webChecked: false});
	a.style.background = 'url(/images/photo_bg.jpg) 0% 0% / cover no-repeat';
	a.className = "buttons photo";
  },
  
  webClick: function(e) {
	var a = document.getElementById("buttons");	
    e.preventDefault();
    this.setState({billiardChecked: false, photoChecked: false, webChecked: true});
	a.style.background = "url(/images/web_bg.jpg) 0% 0% / cover no-repeat";
	a.className = "buttons";
  },
  
  render: function() {
	var billiardChecked = this.state.billiardChecked,
        photoChecked = this.state.photoChecked,
        webChecked = this.state.webChecked;
    return (
      <div className="buttons billiard" id="buttons">
        <button
          className='billiard'
          onClick={this.billiardClick}
          ref='billiard_button'
          disabled={billiardChecked}
          >
          Бильярд
        </button>
		<button
          className=''
          onClick={this.photoClick}
          ref='photo_button'
          disabled={photoChecked}
          >
          Фотография
        </button>
		<button
          className=''
          onClick={this.webClick}
          ref='web_button'
          disabled={webChecked}
          >
          WEB-дизайн
        </button>
		<div id="billiard" className={(billiardChecked ? '' : 'none') + ' article'}>
  		  <Billiard />
		</div>
		<div id="photo" className={(photoChecked ? '' : 'none') + ' article'}>
		  <Photo />
		</div>
		<div id="web" className={(webChecked ? '' : 'none') + ' article'}>
  		  <Web />
		</div>
      </div>
    );
  },
});


var Me = React.createClass({
  render: function() {
    return (
      <div>
        <Buttons />
      </div>
    );
  }
});


ReactDOM.render(
  <Me />,
  document.getElementById('root')
);