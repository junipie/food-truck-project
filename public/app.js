//var DATA = {
//  title: 'University of Montana: Student Directory',
//  items: [
//    { id: 1, name: 'John', email: 'John@u.mt.com', gpa: 4.0 },
//    { id: 2, name: 'Sarah', email: 'Sarah@u.mt.com', gpa: 3.0 },
//    { id: 3, name: 'Paul', email: 'Paul@u.mt.com', gpa: 2.7 },
//    { id: 4, name: 'Emily', email: 'Emily@u.mt.com', gpa: 2.6 },
//    { id: 5, name: 'Derek', email: 'Derek@u.mt.com', gpa: 3.8 },
//    { id: 6, name: 'Kathy', email: 'Kathy@u.mt.com', gpa: 3.9 },
//    { id: 7, name: 'Brina', email: 'Brina@u.mt.com', gpa: 2.7 },
//    { id: 8, name: 'Clare', email: 'Clare@u.mt.com', gpa: 3.6 },
//    { id: 9, name: 'Mike', email: 'Mike@u.mt.com', gpa: 2.0 },
//  ]
//};

var App = React.createClass({
    render: function() {
        return (
				<div>
            
                    <div className="well clearfix">
                      <div className="col-sm-9 hidden-xs">
                        <h2>El Cazador</h2><br></br>
                        <div className="row">
                            <div className='col-xs-4'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-med">Mexican</div>
                            </div>
                            <div className='col-xs-4'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-med">Asian</div>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <img src="img/openSign.png" className="hidden-md truckList-open-lg"/>
                        <img src="img/openSign.png" className="hidden-sm hidden-lg truckList-open-md"/>
                        <button className="btn btn-warning ghost-list-button center-block hidden-sm hidden-xs truckList-learn-md">Learn More</button>
                        <button className="btn btn-warning ghost-list-button center-block hidden-md hidden-lg">Learn<br></br> More</button>
                        <div className="row">
                          <div className="col-sm-6">
                            <button className="btn btn-warning ghost-list-button center-block truckList-social-responsive">
                              <i className="fa fa-facebook"></i>
                            </button>
                          </div>
                          <div className="col-sm-6">
                            <button className="btn btn-warning ghost-list-button center-block truckList-social-responsive">
                              <i className="fa fa-twitter"></i>
                            </button>
                          </div>
                        </div>
                      </div>

            
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <img src="img/openSign.png" className="hidden-sm truckList-open-xs"/>
                        <h2>El Cazador</h2><br></br>
                        <div className="row">
                            <div className='col-xs-4 hidden-sm hidden-md hidden-lg'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-sm">Mexican</div>
                            </div>
                            <div className='col-xs-4 hidden-sm hidden-md hidden-lg'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-sm">Asian</div>
                            </div>
                        </div>
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <div className="row">
                          <div className="col-xs-6">
                            <button className="btn btn-warning ghost-list-button center-block">Learn More</button>
                          </div>  
                          <div className="col-xs-3">
                            <button className="btn btn-warning ghost-list-button center-block">
                              <i className="fa fa-facebook"></i>
                            </button>
                          </div>
                          <div className="col-xs-3">
                            <button className="btn btn-warning ghost-list-button center-block">
                              <i className="fa fa-twitter"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            
                </div>
        	);
    }
});

React.render(<App/>, document.getElementById('react-box'))
