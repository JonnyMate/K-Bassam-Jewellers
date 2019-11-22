import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class ParallaxComponent extends Component {
  render() {
    return (
      <div className="parallax-container">
        <Parallax
          pages={3}
          scrolling={false}
          horizontal
          ref={ref => (this.parallax = ref)}
          className="parallax"
        >
          <ParallaxLayer offset={0} speed={0.5} className="layer">
            <img
              onClick={() => this.parallax.scrollTo(1)}
              src="https://pbs.twimg.com/media/CgeGt4MWcAE7N6a?format=jpg&name=4096x4096"
              alt="Wedding ring"
            />
            <h1 className="arrow">&#187;</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} className="layer">
            <img
              onClick={() => this.parallax.scrollTo(2)}
              src="https://pbs.twimg.com/media/CfhOlQaWEAAgNH1?format=jpg&name=4096x4096"
              alt="Medallion"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} className="layer">
            <img
              onClick={() => this.parallax.scrollTo(0)}
              src="https://pbs.twimg.com/media/CfXZjJLWEAAZo9U?format=jpg&name=4096x4096"
              alt="Jewellery"
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxComponent;
