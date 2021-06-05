import React, { Component } from 'react';
import BannerImg from '../../resources/images/pc-1.jpg';
import '../../styles/Banner.scss';

export default class Banner extends Component {

  render() {
    const { t } = this.props;

    return (
      <div className="banner">
        <div className="banner-img" ></div>
        <div className="banner-container">
          <div className="banner-text-container">
            <div className="banner-text-container-h1">Welcome</div>
            <div className="banner-text-container-h2">to my Online Resume</div>
            <div className="banner-text-container-h3">Miguel Santos</div>
          </div>
          <div className="banner-bottom">
            <div className="arrow-down-container">
                <div className="arrow-down arrow-down-1"></div>
                <div className="arrow-down arrow-down-2"></div>
            </div>
            <span>Swipe for more</span>
          </div>
        </div>
      </div>
    );
  }
}
