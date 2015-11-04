var Header = React.createClass({
   render: function() {
       return (
                <div>
                    <nav className="navbar navbar-inverse navbar-static-top hidden-xs">
					  <div className="navbar-header">
					    <a className="navbar-brand" href="#">
					        <img src="./img/logo_notext.png"/>
					      </a>
					      <a href="/index.html" className="navbar-brand">
					        <h3 id="brand-text-md">
					          Truck Yeah!
					        </h3>
					      </a>
					    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					      <span className="icon-bar"></span>
					      <span className="icon-bar"></span>
					      <span className="icon-bar"></span>
					    </button>
					  </div>
					  <div className="navbar-collapse collapse">
					    <ul className="nav navbar-nav">
					      <li className="active"><a href="/index.html">Home</a></li>
					      <li><a href="#about">About</a></li>
					      <li><a href="#contact">Contact</a></li>
					    </ul>
					  </div>
					</nav>

					<nav className="navbar navbar-inverse navbar-static-top hidden-sm hidden-md hidden-lg">
					  <div className="navbar-header">
					    <a className="navbar-brand" href="#">
					      <img src="./img/logo_notext_sm.png"/>
					      </a>
					      <a href="/index.html" className="navbar-brand">
					        <h5 id="brand-text-sm">
					          Truck Yeah!
					        </h5>
					      </a>
					    <button type="button" id="toggle-button-sm" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					      <span className="icon-bar"></span>
					      <span className="icon-bar"></span>
					      <span className="icon-bar"></span>
					    </button>
					  </div>
					  <div className="navbar-collapse collapse">
					    <ul className="nav navbar-nav">
					      <li className="active"><a href="/index.html">Home</a></li>
					      <li><a href="#about">About</a></li>
					      <li><a href="#contact">Contact</a></li>
					    </ul>
					  </div>
					</nav>
                </div>
       );
   }
});

var HomeBody = React.createClass({
   render: function() {
       return (
                <div>
					<section>
					  <div className="my-header">
					    <div className="container-fluid vertical-center" id="btn-container">
					    <div className="container" id="btn-row">
					      <div className="row">
					        <div className="col-md-12 text-center">
					          <h1 className="white">Go Truck Yourself.</h1>
					        </div>
					      </div>
					      <div className="row">
					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block" onclick="location.href='truckList.html'">
					            <h3>EAT NOW.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>EAT NOW.</h2>
					          </button>
					        </div>
					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block" onclick="location.href='truckList.html'">
					            <h3>BREAKFAST.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>BREAKFAST.</h2>
					          </button>
					        </div>

					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block">
					            <h3>LUNCH.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>LUNCH.</h2>
					          </button>
					        </div>

					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block" onclick="location.href='truckList.html'">
					            <h3>DINNER.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>DINNER.</h2>
					          </button>
					        </div>
					      </div>
					      </div>
					    </div>
					  </div>
					</section>
                </div>
       );
   }
});

var HomePage = React.createClass({
    render: function() {
        return (
            <div>
            <div>
                <Header/>
            </div>
            <div>
                <HomeBody/>
            </div>
            </div>
        );
    }
});

React.render(<HomePage/>, document.body);
