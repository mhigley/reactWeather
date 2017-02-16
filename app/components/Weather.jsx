var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    render: function(){
        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMsg(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }else if(temp && location){
                return <WeatherMsg temp={temp} location={location}/>;
            }
        }

        function renderError(){
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMsg()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
