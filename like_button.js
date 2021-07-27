'use strict';

const e = React.createElement;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { removed: false };
  }

  render() {
    if (this.state.removed) {
      return '';
    }

    return e(
      'li',
      { onClick: () => this.setState({ removed: true }) },
      'to do item'
    );
  }
}

const domContainer = document.querySelector('#to_do_container');
ReactDOM.render(e(ListItem), domContainer);