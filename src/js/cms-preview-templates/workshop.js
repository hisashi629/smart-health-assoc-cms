import React from "react";
import Markdown from "react-markdown";

export default class WorkshopPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <section class="markdown">
      <Markdown source={entry.getIn(["data", "body"])} />
    </section>
  }
}
