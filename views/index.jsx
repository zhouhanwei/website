import React from 'react';
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <DefaultLayout title={this.props.title}>
          <div>Hello {this.props.title}</div>
        </DefaultLayout>
    );
  }
}

export default HelloMessage;