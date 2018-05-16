var React = require('react'),
    {Link} = require('react-router')

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is my first React application.  You can search for the weather by city name using the search in the nav bar, or by clicking on <Link to="/">Get Weather</Link> and using the form there.
      </p>
      <p>
        You can view this project on my GitHub by clicking <a href="https://github.com/Bran99/ReactWeather" target="_blank _top">here</a>.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank _top">
            React
          </a> — This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank _top">
            Open Weather Map
          </a> — I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
}

module.exports = About
