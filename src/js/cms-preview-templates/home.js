import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])}/>
        <div class="main-message">
          {entry.getIn(["data", "message"])}
        </div>
        <div class="col-xs-9">
          <h2 class="content-header">お知らせ</h2>
          <ul class="information">
            <li>
              <a href="#">
                <ul class="inform-data">
                  <li class="inform-date">2018/08/29</li>
                  <li class="inform-category report"></li>
                  <li class="inform-title">お知らせ１</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#">
                <ul class="inform-data">
                  <li class="inform-date">2018/08/28</li>
                  <li class="inform-category event"></li>
                  <li class="inform-title">お知らせ２</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#">
                <ul class="inform-data">
                  <li class="inform-date">2018/08/27</li>
                  <li class="inform-category topic"></li>
                  <li class="inform-title">お知らせ３</li>
                </ul>
              </a>
            </li>
            <li>
              <a href="#">
                <ul class="inform-data">
                  <li class="inform-date">2018/08/26</li>
                <li class="inform-category notification"></li>
                  <li class="inform-title">お知らせ４</li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        <ul class="col-xs-3 side-banner-list">
          <li class="side-banner phone-banner">
            <dl>
              <dt>お電話でのご質問・お問い合わせ</dt>
              <dd>050-3509-7859</dd>
            </dl>
          </li>
          <li class="side-banner general-banner">
            <a href="/contact">お問い合わせ</a>
          </li>
          <li class="side-banner general-banner">
            <a href="/">検体測定地図検索</a>
          </li>
          <li class="side-banner doc-dl-banner">
            <a href="/">資料ダウンロード</a>
          </li>
          <li class="side-banner general-banner">
            <a href="/register">新規会員登録</a>
          </li>
        </ul>
       </div>
  }
}