import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  renderStream() {
    if (!this.props.stream) return;
    return (
      <div className="item" key={this.props.stream.id}>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {this.props.stream.title}
          <div className="description">{this.props.stream.description}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, {
  fetchStream,
  editStream,
})(StreamEdit);
