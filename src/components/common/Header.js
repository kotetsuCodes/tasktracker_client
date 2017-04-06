import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';

class Header extends React.Component {
    constructor(props) {
        super();

    }

    render() {
        return (
          <div>
              Header test...
          </div>
        );
    }
}

Header.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);