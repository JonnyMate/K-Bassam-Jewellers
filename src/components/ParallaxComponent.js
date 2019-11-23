import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class ParallaxComponent extends Component {
  componentDidMount() {
    let i = 1;
    setInterval(() => {
      // Prevents page from crashing after moving away from homepage
      if (this.parallax === null) {
        return;
      }

      this.parallax.scrollTo(i);
      i === 4 ? (i = 0) : i++;
    }, 4500);
  }

  render() {
    return (
      // Image Carousel
      <div className="parallax-container">
        <Parallax
          pages={5}
          scrolling={false}
          horizontal
          ref={ref => (this.parallax = ref)}
          className="parallax"
        >
          {/* Images */}
          <ParallaxLayer offset={0} speed={0.2} className="layer">
            <img
              src="http://www.jewla.com/Images/jewla_header.jpg"
              alt="Banner"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} className="layer">
            <img
              src="https://pbs.twimg.com/media/CgeGt4MWcAE7N6a?format=jpg&name=4096x4096"
              alt="Wedding ring"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2} className="layer">
            <img
              src="https://pbs.twimg.com/media/CNaPR9jWsAARbl-?format=jpg&name=medium"
              alt="Watch"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.2} className="layer">
            <img
              src="https://pbs.twimg.com/media/CQPCaYyWUAASiKq?format=jpg&name=medium"
              alt="Ring"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.2} className="layer">
            <img
              src="https://pbs.twimg.com/media/CGvhAS9WoAAF3Fe?format=jpg&name=medium"
              alt="Earrings"
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxComponent;
