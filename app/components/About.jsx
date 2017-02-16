var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
    render: function(){
        return (
            <div>
                <h1 className="text-center page-title">About</h1>
                <p>Here is information that I've learned.</p>
                <ol>
                    <li><a href="https://facebook.github.io/react" target="_blank">Powered by React</a></li>
                    <li><a href="http://foundation.zurb.com/" target="_blank">Style by Foundation</a></li>
                    <li><a href="http://openweathermap.org/" target="_blank">Weather by openWeatherMap</a></li>
                    <li><a href="https://github.com/mhigley/reactWeather" target="_blank">My Github</a></li>
                </ol>
            </div>
        );
    }
});

module.exports = About;
