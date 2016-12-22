var React = require('react');
var Examples = require('Examples');
var {Link} = require('react-router');

var Examples = React.createClass({

  render: function() {

    return (

      <div>
        <h3 className="text-center"> Examples!</h3>
        <p>Here are a few example locations to try out</p>
        <ol>
          <li>
            <Link to="/?location=Toronto">Toronto, ON</Link>
          </li>
          <li>
            <Link to='/?location=Tokyo'>Tokyo, Japan</Link>

          </li>


        </ol>
      </div>


    );



  }




});

module.exports = Examples;
