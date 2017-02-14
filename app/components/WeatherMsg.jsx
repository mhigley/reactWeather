var React = require('react');

var WeatherMsg = React.createClass({
    render: function(location, temp){
        var {location, temp} = this.props;

        return (
            <h3>It is {temp} cold in {location}</h3>
        );
    }
});

module.exports = WeatherMsg;
