var DATA = {
    trucks: [ 
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
            ]}


var TruckProfile = React.createClass({
    render: function() {
        return (
                <div>
          
        <div className='hidden-sm hidden-xs hidden-md'>
          <div className="row">
          <div className="col-lg-3">
            <a href="#" className="thumbnail">
              <img src="./img/elCaz.jpg"/>
            </a>
          </div>

          <div className="col-lg-9 truckPage-vert-push-sm">
            <h1 className="profile-title">El Cazador</h1><br></br>
            <h5 className="profile-city">Missoula, MT</h5>
            <div className="row truckPage-left-spacer-sm">
              <div className="col-lg-1 well  well-orange text-center">Breakfast</div>
              <div className="col-lg-1 well well-orange text-center">Dinner</div>
              <div className="col-lg-1 well well-orange text-center">Lunch</div>
            </div>
          </div>
        </div>
      <div className="row">
        <div className="col-lg-3 col-lg-offset-1">
          <h3 className="white">Info</h3>
          <p className="white">At El Cazador, located in beautiful downtown Missoula, we believe in providing a great dining experience for all of our customers. We take exceptional pride in providing the best tasting Mexican food in all of Montana. Only the freshest ingredients are used in our authentic and traditional Mexican dishes. We think of our customers as part of our family and we will make you feel welcome and right at home.</p>
        </div>

        <div className="col-lg-3 col-lg-offset-1">
          <h3 className="white">Payment</h3>
          
          <div className="row white">
            <div className="col-lg-6">
              <i className="fa fa-cc-visa fa-5x"></i>
            </div>
            <div className="col-lg-6">
              <i className="fa fa-cc-mastercard fa-5x"></i>
            </div>
          </div>
          <div className="row white">
            <div className="col-lg-6">
              <i className="fa fa-cc-amex fa-5x"></i> 
            </div>   
            <div className="col-lg-6">
              <i className="fa fa-money money-icon-lg"></i>    
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-lg-offset-1">
          <h3 className="white">Cuisine</h3>
          <div className="well well-orange-cuisine text-center">Mexican</div>
          <h3 className="white">Food Options</h3>
            <img src="./img/vegan.png"/>
            <img src="./img/organic.png"/>
            <img src="./img/glutenFree.png"/>
        </div>
      </div>
      <div className="row row-spacing">
        <div className="col-lg-3 col-lg-offset-1">
            <h3 className="white top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Monday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Tuesday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Wednesday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Thursday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Friday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Saturday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Sunday</td>
                    <td>9 - 5</td>
                </tr>
                
            </h4></table>
            
        </div>
        <div className="col-lg-7 col-lg-offset-1">
          <img src="./img/map.png" className="truckList-map-aside"/>
        </div>

      </div>
    </div>
          
          
          
          
          
          
          
        <div className='hidden-lg hidden-sm hidden-xs'>
          <div className="row">
              <div className="col-md-3">
                <a href="#" className="thumbnail">
                  <img src="./img/elCaz.jpg"/>
                </a>
              </div>

              <div className="col-md-7 truckPage-vert-push-sm">
                <h1 className="profile-title">El Cazador</h1><br></br>
                <h5 className="profile-city">Missoula, MT</h5>  
              </div>    

              <div className="col-md-2">
                  <div className="well well-orange text-center truckPage-stacking-cat-md">Breakfast</div>
                  <div className="well well-orange text-center truckPage-stacking-cat-md">Dinner</div>
                  <div className="well well-orange text-center truckPage-stacking-cat-md">Lunch</div>
              </div>
          </div>
            
      <div className="row">
        <div className="col-md-11 col-md-offset-1">
          <h3 className="white">Info</h3>
          <p className="white">At El Cazador, located in beautiful downtown Missoula, we believe in providing a great dining experience for all of our customers. We take exceptional pride in providing the best tasting Mexican food in all of Montana. Only the freshest ingredients are used in our authentic and traditional Mexican dishes. We think of our customers as part of our family and we will make you feel welcome and right at home.</p>
        </div>

        <div className="col-md-3 col-md-offset-2">
          <h3 className="white">Payment</h3>
          
          <div className="row white">
            <div className="col-md-6">
              <i className="fa fa-cc-visa fa-5x"></i>
            </div>
            <div className="col-md-6">
              <i className="fa fa-cc-mastercard fa-5x"></i>
            </div>
          </div>
          <div className="row white">
            <div className="col-md-6">
              <i className="fa fa-cc-amex fa-5x"></i> 
            </div>   
            <div className="col-md-6">
              <i className="fa fa-money money-icon-lg"></i>    
            </div>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-3">
          <h3 className="white">Cuisine</h3>
          <div className="well well-orange-cuisine text-center">Mexican</div>
          <h3 className="white">Food Options</h3>
            <img src="./img/vegan.png"/>
            <img src="./img/organic.png"/>
            <img src="./img/glutenFree.png"/>
        </div>
      </div>
      <div className="row vertical-center truckPage-vh-50">
        <div className="col-md-3 col-md-offset-1">
            <h3 className="white top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Monday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Tuesday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Wednesday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Thursday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Friday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Saturday</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Sunday</td>
                    <td>9 - 5</td>
                </tr>
                
            </h4></table>
            
        </div>
        <div className="col-md-7 col-md-offset-1">
          <img src="./img/map.png" className="truckList-map-below"/>
        </div>

      </div>
    </div>
          
          
          
          
          
          
          
        <div className='hidden-xs hidden-md hidden-lg'>
          <div className="row">
              <div className="col-sm-3">
                <a href="#" className="thumbnail">
                  <img src="./img/elCaz.jpg"/>
                </a>
              </div>

              <div className="col-sm-7 truckPage-vert-push-sm">
                <h1 className="profile-title-sm">El Cazador</h1><br></br>
                <h5 className="profile-city-sm">Missoula, MT</h5>  
              </div>    

              <div className="col-sm-2">
                  <div className="well well-orange text-center truckPage-stacking-cat-sm">Breakfast</div>
                  <div className="well well-orange text-center truckPage-stacking-cat-sm">Dinner</div>
                  <div className="well well-orange text-center truckPage-stacking-cat-sm">Lunch</div>
              </div>
          </div>
            
      <div className="row">
        <div className="col-sm-11 col-sm-offset-1">
          <h3 className="white">Info</h3>
          <p className="white">At El Cazador, located in beautiful downtown Missoula, we believe in providing a great dining experience for all of our customers. We take exceptional pride in providing the best tasting Mexican food in all of Montana. Only the freshest ingredients are used in our authentic and traditional Mexican dishes. We think of our customers as part of our family and we will make you feel welcome and right at home.</p>
        </div>
      </div>

      <div className="row vertical-center truckPage-vh-10">
        <div className="col-sm-3 col-sm-offset-2">
          <h3 className="white">Payment</h3>
          
          <div className="row white">
            <div className="col-sm-6">
              <i className="fa fa-cc-visa fa-4x"></i>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-cc-mastercard fa-4x"></i>
            </div>
          </div>
          <div className="row white">
            <div className="col-sm-6">
              <i className="fa fa-cc-amex fa-4x"></i> 
            </div>   
            <div className="col-sm-6">
              <i className="fa fa-money money-icon-sm"></i>    
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-sm-offset-3">
          <h3 className="white">Cuisine</h3>
          <div className="well well-orange-cuisine text-center truckPage-cusine-sm">Mexican</div>
          <h3 className="white">Food Options</h3>
            <div className="row">
                <div className="col-sm-4 truckPage-opt-sm">
                    <img src="./img/vegan.png" className="img-responsive"/>
                </div>
                <div className="col-sm-4 truckPage-opt-sm">
                    <img src="./img/organic.png" className="img-responsive"/>
                </div>
                <div className="col-sm-4 truckPage-opt-sm">
                    <img src="./img/glutenFree.png" className="img-responsive"/>
                </div>
            </div>
        </div>
      </div>
      <div className="row vertical-center truckPage-vh-40">
        <div className="col-sm-3 col-sm-offset-1">
            <h3 className="white top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Mon</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Tues</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Weds</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Thurs</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Fri</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Sat</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Sun</td>
                    <td>9 - 5</td>
                </tr>
                
            </h4></table>
            
        </div>
        <div className="col-sm-7 col-sm-offset-1">
          <img src="./img/map.png" className="truckList-map-below"/>
        </div>

      </div>
    </div>
          
          
          
          
          
          
        <div className='hidden-sm hidden-md hidden-lg'>
          <div className="row">
              <div className="col-sm-3">
                <a href="#" className="thumbnail">
                  <img src="./img/elCaz.jpg"/>
                </a>
              </div>

              <div className="col-sm-7 truckPage-vert-push-sm">
                <h1 className="profile-title text-center profile-title-sm">El Cazador</h1><br></br>
                <h5 className="profile-city text-center profile-city-sm">Missoula, MT</h5>  
              </div>    

              <div className="col-xs-4">
                  <div className="well well-orange text-center truckPage-horiz-cat-sm">Breakfast</div>
              </div>
              <div className="col-xs-4">
                  <div className="well well-orange text-center truckPage-horiz-cat-sm">Dinner</div>
              </div>
              <div className="col-xs-4">
                  <div className="well well-orange text-center truckPage-horiz-cat-sm">Lunch</div>
              </div>
          </div>
            
      <div className="row">
        <div className="col-sm-11 col-sm-offset-1 truckPage-spacer-sm">
          <h3 className="white text-center">Info</h3>
          <p className="white">At El Cazador, located in beautiful downtown Missoula, we believe in providing a great dining experience for all of our customers. We take exceptional pride in providing the best tasting Mexican food in all of Montana. Only the freshest ingredients are used in our authentic and traditional Mexican dishes. We think of our customers as part of our family and we will make you feel welcome and right at home.</p>
        </div>
      </div>

      <div className="row vertical-center truckPage-vh-10">
          <div className="col-xs-6">
              <h3 className="white text-center">Cuisine</h3>
          </div>
          <div className="col-xs-6">
              <h3 className="white text-center">Food Opt.</h3>
          </div>
      </div>      
            
      <div className="row vertical-center truckPage-vh-10">
          <div className="col-xs-6">
            <div className="well well-orange-cuisine text-center truckPage-cuisine-xs">Mexican</div>
          </div>
          <div className="col-xs-6">
            <div className="row">
                <div className="col-xs-4 truckPage-opt-sm">
                    <img src="./img/vegan.png" className="img-responsive"/>
                </div>
                <div className="col-xs-4 truckPage-opt-sm">
                    <img src="./img/organic.png" className="img-responsive"/>
                </div>
                <div className="col-xs-4 truckPage-opt-sm">
                    <img src="./img/glutenFree.png" className="img-responsive"/>
                </div>
            </div>
          </div>
        </div>
            
    <div className="row truckPage-vh-10">
            <div className="col-xs-12 center-block">
              <h3 className="white text-center">Payment</h3>
              
              <div className="row white">
                <div className="col-xs-3 col-xs-offset-3">
                  <i className="fa fa-cc-visa fa-3x"></i>
                </div>
                <div className="col-xs-3">
                  <i className="fa fa-cc-mastercard fa-3x"></i>
                </div>
              </div>
              <div className="row white">
                <div className="col-xs-3 col-xs-offset-3">
                  <i className="fa fa-cc-amex fa-3x"></i> 
                </div>   
                <div className="col-xs-3">
                  <i className="fa fa-money money-icon-xs"></i>    
                </div>
              </div>
            </div>
     </div>
            
    <div className="row vertical-center center-block truckPage-vh-50">
        <div className="col-xs-12 center-block">
            <h3 className="white text-center top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Mon</td>
                    <td>Closed</td>
                    <td>Fri</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Tues</td>
                    <td>9 - 5</td>
                    <td>Sat</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Weds</td>
                    <td>Closed</td>
                    <td>Sun</td>
                    <td>9 - 5</td>
                </tr>
                <tr className="white">
                    <td>Thurs</td>
                    <td>9 - 5</td>
                    <td></td>
                    <td></td>
                </tr>
                
            </h4></table>
            
        </div>
    </div>
            
    <div className="row vertical-center truckPage-vh-10 truckPage-map-holder-xs">        
        <div className="col-sm-7 col-sm-offset-1">
          <img src="./img/map.png" className="truckList-map-below"/>
        </div>

    </div>
    </div>

                </div>
            );
    }
});


//var TruckBox = React.createClass({
//    //Set initial state-----------------
//    getInitialState: function(){
//        return{data: []};
//    },
//    //Fetch data from our server--------------
//    loadTrucksFromServer: function(){
//        $.ajax({
//            url:this.props.url,
//            dataType:"json",
//            cache: false,
//            success: function(data){
//                console.log("inside success")
//                this.setState({data: data});
//            }.bind(this),
//            error: function(xhr, status, err){
//                console.log("broken url is " + this.props.url);
//                console.error(this.props.url, status, err.toString());
//            }.bind(this)
//        });
//    },
//    //Mount components------------------
//    componentDidMount: function(){
//        this.loadTrucksFromServer();
////    },
//    render: function() {
//        return (
//            <div>
//                <TruckList data={this.state.data}/>
//            </div>
//        );
//    }
//});


React.render(<TruckProfile/>, document.getElementById("react-box"));
