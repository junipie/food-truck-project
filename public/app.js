var MapHolderLg = React.createClass({
  render: function(){
    return(
      <div>
        <div className='vertical-center truckList-map-container-aside'>
          <img src="./img/map.png" className="truckList-map-aside"/>
        </div>
      </div>
    )
  }
});

var MapHolderSm = React.createClass({
  render: function(){
    return(
      <div>
        <div className='truckList-map-container-below'>
          <img src="./img/map.png" className="center-block truckList-map-below"/>
        </div>
      </div>
    )
  }
});

var MapHolderGlobal = React.createClass({
  render: function(){
    return(
        <div>        
         <div className="col-lg-6 hidden-md hidden-sm hidden-xs">
            <MapHolderLg/>
          </div>

          <div className="col-xs-12 hidden-lg">
            <MapHolderSm/>
          </div>
        </div>
      )
  }
});


var TruckList = React.createClass({

    render: function() {
      // ACCESS THE TOGGLE FUNCTION AND ASSOCIATE IT WITH THE BUTTON
        var self = this;
        var oneTruck = this.props.data.map(function(truck){
            var cuisineLoop = truck.cuisine.map(function(cuisine){
              return(
                <div>
                  <div className="col-xs-4">
                    <div className="well well-orange-cuisine text-center truckList-cuisine-sm">{cuisine}</div>
                  </div>
                </div>
                )
            });
            var truckProfileID = truck._id;

            return (
                <div>
                    <div className="well clearfix">
                      <div className="col-sm-9 hidden-xs">
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                            <div>{cuisineLoop}</div>
                        </div>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <img src="img/openSign.png" className="hidden-md truckList-open-lg"/>
                        <img src="img/openSign.png" className="hidden-sm hidden-lg truckList-open-md"/>
                        <button onClick={self.props.toggleProfileID.bind(this, truckProfileID)} className="btn btn-warning ghost-list-button center-block hidden-sm hidden-xs truckList-learn-md">Learn More</button>
                        <button onClick={self.props.toggleProfileID.bind(this, truckProfileID)} className="btn btn-warning ghost-list-button center-block hidden-md hidden-lg">Learn<br></br> More</button>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href={truck.facebook}><button className="btn btn-warning ghost-list-button center-block truckList-social-responsive">
                              <i className="fa fa-facebook"></i>
                            </button></a>
                          </div>
                          <div className="col-sm-6">
                            <a href={truck.twitter}><button className="btn btn-warning ghost-list-button center-block truckList-social-responsive">
                              <i className="fa fa-twitter"></i>
                            </button></a>
                          </div>
                        </div>
                      </div>

            
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <img src="img/openSign.png" className="hidden-sm truckList-open-xs"/>
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                                <div>{cuisineLoop}</div>
                        </div>
                        </div>
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <div className="row">
                          <div className="col-xs-6">
                            <button onClick={self.props.toggleProfileID.bind(this, truckProfileID)} className="btn btn-warning ghost-list-button center-block">Learn More</button>
                          </div>  
                          <div className="col-xs-3">
                            <a href={truck.facebook}><button className="btn btn-warning ghost-list-button center-block">
                              <i className="fa fa-facebook"></i>
                            </button></a>
                          </div>
                          <div className="col-xs-3">
                            <a href={truck.twitter}><button className="btn btn-warning ghost-list-button center-block">
                              <i className="fa fa-twitter"></i>
                            </button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            )
        });
        
        return (
                <div>
                    {oneTruck}
                </div>
            );
    }
});

var TruckListHolder = React.createClass({
  render: function(){
    return (
        <div className="col-lg-6 col-md-12">
          <TruckList data={this.props.data} toggleTruckList={this.props.toggleTruckList} toggleProfileID={this.props.toggleProfileID}/>
        </div>
      )
  }
});

var TruckBox = React.createClass({
    //Set initial state-----------------
    getInitialState: function(){
        return{truckList: true, mapHolder: true, truckProfile: false, profileID: null, singleTruck: []};
    },
    toggleTruckList: function(event){
      this.setState({truckList: !this.state.truckList});
      this.setState({truckProfile: !this.state.truckProfile});
      this.setState({mapHolder: !this.state.mapHolder});
    },


    // CREATE A TOGGLE STATE FOR TRUCK ID
    toggleProfileID: function (id) {
        function filterData(item){
          return item._id === id;
        }

        var filtered = this.props.data.filter(filterData);

        this.setState({singleTruck: filtered});

        this.toggleTruckList();
    },

    render: function() {
      var truckList = this.state.truckList ? <TruckListHolder data={this.props.data} toggleTruckList={this.toggleTruckList} toggleProfileID={this.toggleProfileID}/> : null
      var mapHolder = this.state.mapHolder ? <MapHolderGlobal toggleTruckList={this.toggleTruckList}/> : null
      var truckProfile = this.state.truckProfile ? <TruckProfileBox toggleTruckList={this.toggleTruckList} data={this.state.singleTruck[0]}/> : null
        return (
            <div>
            <section>
              <div className="truckList-header">
                <div className="container-fluid" id="btn-container">
                  <div className="container" id="btn-row">
                    <div className="row">
                        {truckList}
                        {mapHolder}
                        {truckProfile}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        );
    }
});


// React.render(<TruckBox url="/api/trucks/"/>, document.getElementById("react-box"));