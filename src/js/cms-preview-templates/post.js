import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    let dl_files = entry.getIn(["data", "dl_files"]);
    let images = entry.getIn(["data", "images"]);

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div class="flex justify-between grey-3">
        <div>{ format(entry.getIn(["data", "date"]), "YYYY/M/D") }</div>
        <div class={`inform-category ${entry.getIn(["data", "categories"])}`}></div>
      </div>
      <div className="cms mw6">
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
      <ul class="dl_list">
        { dl_files && dl_files.map((value, index) => (
          <li key={index.toString()}>{value.get('name')}<button><a href="{value.get('url')}" target="_blank">ダウンロード</a></button></li>
        ))}
      </ul>
      <ul class="showcase">
        {images && images.map((value, index) => (
          <li key={index.toString()}>
            <figure>
              <img src={value.get('url')} style={{ "max-width": value.get('width') ? value.get('width') + "px" : '' }}></img>
              <figcaption>{value.get('caption')}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

    </div>;
  }
}
