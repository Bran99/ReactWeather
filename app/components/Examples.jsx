var React = require('react'),
    {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Yorktown">Yorktown, NY</Link>
        </li>
        <li>
          <Link to="/?location=New%20York">New York, NY</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples
