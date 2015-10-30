
var TruckList = React.createClass({
    render: function() {
        var oneTruck = this.props.data.map(function(truck){
            return (
                <div>
                    <div className="well clearfix">
                      <div className="col-sm-9 hidden-xs">
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                            <div className='col-xs-4'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-sm">{truck.cuisine}</div>
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
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                            <div className='col-xs-4 hidden-sm hidden-md hidden-lg'>
                                <div className="well well-orange-cuisine text-center truckList-cuisine-sm">{truck.cuisine}</div>
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
                    {oneTruck}
                </div>
            );
    }
});


var TruckBox = React.createClass({
    //Set initial state-----------------
    getInitialState: function(){
        return{data: []};
    },
    //Fetch data from our server--------------
    loadTrucksFromServer: function(){
        $.ajax({
            url:this.props.url,
            dataType:"json",
            cache: false,
            success: function(data){
                console.log("inside success")
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log("broken url is " + this.props.url);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    //Mount components------------------
    componentDidMount: function(){
        this.loadTrucksFromServer();
    },
    render: function() {
        return (
            <div>
                <TruckList data={this.state.data}/>
            </div>
        );
    }
});


React.render(<TruckBox url="/api/trucks/"/>, document.getElementById("react-box"));
