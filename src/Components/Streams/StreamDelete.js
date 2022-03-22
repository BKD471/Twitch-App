import React, { Fragment } from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  getCurrentStreamId() {
    const { id } = this.props.match.params;
    return id;
  }

  componentDidMount() {
    const id = this.getCurrentStreamId();
    this.props.fetchStream(id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button ">
          Cancel
        </Link>
      </Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream)
      return "Are you sure, you want to delete this stream";

    return `Are you sure, you want to delete the stream with title: ${this.props.stream.title} `;
  }

  render() {
    return (
      <Modal
        title="Delete the Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
