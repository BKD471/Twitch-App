import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  getCurrentStreamId() {
    const { id } = this.props.match.params;
    return id;
  }
  componentDidMount() {
    const id = this.getCurrentStreamId();
    this.props.fetchStream(id);
  }

  renderStream() {
    if (!this.props.stream) return "Loading....";
    const { title, description } = this.props.stream;
    return (
      <div className="content">
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
  render() {
    return <div className="ui content">{this.renderStream()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
