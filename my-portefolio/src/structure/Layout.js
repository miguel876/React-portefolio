import React, { Component } from 'react';
import Banner from '../structure/components/Banner.js';
import Introduction from '../structure/components/Introduction.js';
import Projects from '../structure/components/Projects.js';
import '../styles/Layout.scss';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnimating: false,
            scrolledY: 0,
        };
    }
    
    componentDidMount() {
        //this.scrollEffect();
    }

    scrollEffect = () => {
        let windowY = 0;
        window.onscroll = function (e) {
            windowY = window.scrollY;
        };

        this.setState({scrolledY: windowY});

        document.body.style.transform = 'translate3d(0px,0px,0px)';
        document.addEventListener('scroll', function(e){
            document.body.scrollTop = 0;
        });

        document.addEventListener('wheel', this.wheelListener);
    }

    

    wheelListener = (e) => {
        //console.log(window.scrollY);

        //console.log(e);
        
        let pageHeight = window.innerHeight;
        console.log(this.state.scrolledY);
        
        if(e.deltaY > 0) {
          this.scrollPage(-(pageHeight + this.state.scrolledY));
        } else {
          this.scrollPage(+(pageHeight - this.state.scrolledY));
        }
    }

    scrollPage = (scrollSize) => {
        //console.log(scrollSize);
        if(this.state.isAnimating){
          return;
        }

        this.setState({isAnimating: true});
        let yPos = this.getNewYPos(scrollSize);
        document.body.style.transform = 'translate3d(0px,'+ yPos + ',0px)';  
    }

    getNewYPos = (add) => {
        let oldYPos = document.body.style.transform.split(',')[1];
        oldYPos = parseInt(oldYPos.replace(/px/,''));
        let newYPos = oldYPos + add;
        if(newYPos > 0){
          this.setState({isAnimating: false});
        }
        return Math.min(0, newYPos) + 'px';
    }

  render() {
    return (
      <div className="Layout">
        <Banner />
        <Introduction />
        <Projects />
      </div>
    );
  }
}












