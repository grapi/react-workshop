const React = require('react');

var HelloMessage = React.createClass({
    render: function(){
        return <div>hello {this.props.name}</div>;
    }
});

module.exports = HelloMessage;

