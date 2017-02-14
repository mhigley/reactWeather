var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage){
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function(){
        var {isLoading, location, temp} = this.state;

        function renderMsg(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }else if(temp && location){
                return <WeatherMsg temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMsg()}
            </div>
        );
    }
});

module.exports = Weather;
