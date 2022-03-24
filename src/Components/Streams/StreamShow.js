import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  getCurrentStreamId() {
    const { id } = this.props.match.params;
    return id;
  }
  componentWillUnmount() {
    this.player.destroy();
  }

  componentDidMount() {
    const id = this.getCurrentStreamId();
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) return;

    const id = this.getCurrentStreamId();
    this.player = flv.createPlayer({
      type: "flv", //
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  renderStream() {
    if (!this.props.stream) return "Loading....";
    const { title, description } = this.props.stream;
    return (
      <div className="content">
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
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
