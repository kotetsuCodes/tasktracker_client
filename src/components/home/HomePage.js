import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/taskActions';

class HomePage extends React.Component {
    componentWillMount() {
        this.props.actions.getTasks();
    }


    render() {
        const tasks = this.props.tasks;
        return (
            <div>
                <div className="jumbotron">
                    <h1>Task Tracker</h1>
                    <p>The best way to manage your tasks.</p>
                    <Link to="login" className="btn btn-primary btn-lg">Log in as a test user</Link>
                </div>

                <Link to={'/tasks/new'} className="btn btn-primary"> + task</Link>

                <span>{tasks[0].Name}</span>

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    if(state.tasks && state.tasks.length > 0) {
        return {
            tasks: state.tasks
        };
    } else {
        return {
            tasks: [{}]
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);