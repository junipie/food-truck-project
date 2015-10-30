var newTruck = {trucks: [ 
    {truckName: "Noodle Wagon",
        city: "Missoula, MT",
        description: "A Friendly Asian Food Truck",
        cuisine: ["Asian"],
        currentLocation: undefined,
        monTime: "9-5",
        tuesTime: "9-5",
        wedTime: "9-5",
        thurTime: "9-5",
        friTime: "9-5",
        satTime: "9-5",
        sunTime: "9-5",
        timeCategory: undefined,
        payment: undefined,
        foodOptions: ["Vegan", "Organic", "Gluten Free"],
        facebook: undefined,
        twitter: undefined},
    {truckName: "El Cazador",
        city: "Missoula, MT",
        description: "A Friendly Mexican Food Truck",
        cuisine: ["Mexican"],
        currentLocation: undefined,
        monTime: "9-5",
        tuesTime: "9-5",
        wedTime: "9-5",
        thurTime: "9-5",
        friTime: "9-5",
        satTime: "9-5",
        sunTime: "9-5",
        timeCategory: undefined,
        payment: undefined,
        foodOptions: ["Vegan", "Organic", "Gluten Free"],
        facebook: undefined,
        twitter: undefined},
    {truckName: "Big Dipper",
        city: "Missoula, MT",
        description: "A Friendly Mexican Food Truck",
        cuisine: ["Dessert"],
        currentLocation: undefined,
        monTime: "9-5",
        tuesTime: "9-5",
        wedTime: "9-5",
        thurTime: "9-5",
        friTime: "9-5",
        satTime: "9-5",
        sunTime: "9-5",
        timeCategory: undefined,
        payment: undefined,
        foodOptions: ["Vegan", "Organic", "Gluten Free"],
        facebook: undefined,
        twitter: undefined},
    {truckName: "Bob's Food Truck",
        city: "Missoula, MT",
        description: "A Friendly Mexican Food Truck",
        cuisine: ["American"],
        currentLocation: undefined,
        monTime: "9-5",
        tuesTime: "9-5",
        wedTime: "9-5",
        thurTime: "9-5",
        friTime: "9-5",
        satTime: "9-5",
        sunTime: "9-5",
        timeCategory: undefined,
        payment: undefined,
        foodOptions: ["Vegan", "Organic", "Gluten Free"],
        facebook: undefined,
        twitter: undefined},
    {truckName: "Dobi Noodles",
        city: "Missoula, MT",
        description: "A Friendly Mexican Food Truck",
        cuisine: ["Asian"],
        currentLocation: undefined,
        monTime: "9-5",
        tuesTime: "9-5",
        wedTime: "9-5",
        thurTime: "9-5",
        friTime: "9-5",
        satTime: "9-5",
        sunTime: "9-5",
        timeCategory: undefined,
        payment: undefined,
        foodOptions: ["Vegan", "Organic", "Gluten Free"],
        facebook: undefined,
        twitter: undefined}
        ]
      }

//var StudentPanels = React.createclassName({
//    render: function() {
//        var students = this.props.data.items.map(function(k){
//        return (
//				<div>
//                   <div classNameName="col-md-4">
//                   <div classNameName="panel panel-default">
//                       <div classNameName="panel-heading">
//                           <h3 classNameName="panel-title">Student {k.id}</h3>
//                       </div>
//                       <div classNameName="panel-body">
//                           <p>{k.name}</p>
//                           <p>{k.email}</p>
//                           <p>{k.gpa}</p>
//                       </div>
//                   </div>
//                   </div>
//				</div>
//        	)
//    });
//        return (
//            <div>
//            {students}
//            </div>
//            );
//    }
//});
//

var App = React.createClass({
    render: function() {
        var trucks = this.props.data.trucks.map(function(k){
            return (
                <div>
                    
                    <div className="well clearfix">
                      <div className="col-sm-9 hidden-xs">
                        <h2>{k.truckName}</h2><br></br>
                        <div className="row">
                            <div className='col-xs-4'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-med">{k.cuisine[0]}</div>
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
                        <h2>{k.truckName}</h2><br></br>
                        <div className="row">
                            <div className='col-xs-4 hidden-sm hidden-md hidden-lg'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-sm">{k.cuisine[0]}</div>
                            </div>
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
            )
        });
        
        return (
				<div>
                    {trucks}
                </div>
        	);
    }
});

React.render(<App data={newTruck}/>, document.getElementById('react-box'))
