import React, { Component } from 'react';
import BannerImg from '../../resources/images/pc-1.jpg';
import '../../styles/Banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img src={BannerImg} className="banner-img"/>
      </div>
    );
  }
}
