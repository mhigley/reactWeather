var React = require('react');

var WeatherMsg = React.createClass({
    render: function(location, temp){
        var {location, temp} = this.props;

        return (
            <p>It is {temp} cold in {location}</p>
        );
    }
});

module.exports = WeatherMsg;
