import React, { useState } from 'react';
import styles from './ResponsiveImages.module.scss';

const ResponsiveImages: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<'basic' | 'sizes' | 'art-direction' | 'density'>('basic');

  return (
    <div className={styles.container}>
      <h1>Understanding Responsive Images with srcset</h1>

      <div className={styles.navigation}>
        <button
          className={selectedExample === 'basic' ? styles.active : ''}
          onClick={() => setSelectedExample('basic')}
        >
          Basic srcset
        </button>
        <button
          className={selectedExample === 'sizes' ? styles.active : ''}
          onClick={() => setSelectedExample('sizes')}
        >
          srcset + sizes
        </button>
        <button
          className={selectedExample === 'art-direction' ? styles.active : ''}
          onClick={() => setSelectedExample('art-direction')}
        >
          Art Direction
        </button>
        <button
          className={selectedExample === 'density' ? styles.active : ''}
          onClick={() => setSelectedExample('density')}
        >
          Pixel Density
        </button>
      </div>

      <div className={styles.content}>
        {selectedExample === 'basic' && (
          <div className={styles.example}>
            <h2>Basic srcset with width descriptors</h2>
            <p>
              The browser chooses the most appropriate image based on the device's screen width.
              Resize your browser window to see different images load.
            </p>

            <div className={styles.imageContainer}>
              <img
                src="https://picsum.photos/400/300"

                srcSet="https://picsum.photos/400/300 400w,
                        https://picsum.photos/800/600 800w,
                        https://picsum.photos/1200/900 1200w"

                alt="Responsive image with width descriptors"

                className={styles.responsiveImage}
              />
            </div>

            <div className={styles.codeExample}>
              <h3>Code:</h3>
              <pre>
                {`<img 
                src="https://picsum.photos/400/300" 
                       
                srcSet="https://picsum.photos/400/300 400w,
                https://picsum.photos/800/600 800w, 
                https://picsum.photos/1200/900 1200w"
                      alt="Responsive image"
                    />`}
              </pre>
            </div>

            <div className={styles.explanation}>
              <h3>How it works:</h3>
              <ul>
                <li><strong>400w</strong>: Image is 400px wide</li>
                <li><strong>800w</strong>: Image is 800px wide</li>
                <li><strong>1200w</strong>: Image is 1200px wide</li>
                <li>Browser selects image closest to the display size needed</li>
                <li>Fallback <code>src</code> is used for older browsers</li>
                <p>The w in the srcSet attribute stands for "width descriptor" in pixels. It's used in conjunction with the srcSet and sizes attributes to help the browser choose the most appropriate image based on the screen size and resolution.

                </p>
              </ul>
            </div>
          </div>
        )}

        {selectedExample === 'sizes' && (
          <div className={styles.example}>
            <h2>srcset with sizes attribute</h2>
            <p>
              The <code>sizes</code> attribute tells the browser what size the image will be displayed at different breakpoints.
            </p>

            <div className={styles.imageContainer}>
              <img
                //Fallback src is used for older browsers
                src="https://picsum.photos/400/300"
                srcSet="https://picsum.photos/400/300 400w,
                        https://picsum.photos/800/600 800w,
                        https://picsum.photos/1200/900 1200w,
                        https://picsum.photos/1600/1200 1600w"
                sizes="(max-width: 600px) 100vw,
                       (max-width: 900px) 50vw,
                       33vw"
                alt="Responsive image with sizes"
                className={styles.responsiveImage}
              />
            </div>

            <div className={styles.codeExample}>
              <h3>Code:</h3>
              <pre>
                {`<img
                    src="https://picsum.photos/400/300"
                    srcSet="https://picsum.photos/400/300 400w,
                            https://picsum.photos/800/600 800w,
                            https://picsum.photos/1200/900 1200w,
                            https://picsum.photos/1600/1200 1600w"
                    sizes="(max-width: 600px) 100vw,
                          (max-width: 900px) 50vw,
                          33vw"
                    alt="Responsive image"
                  />`}
              </pre>
            </div>

            <div className={styles.explanation}>
              <h3>sizes attribute breakdown:</h3>
              <ul>
                <li><strong>(max-width: 600px) 100vw</strong>: On screens ≤600px, image takes full viewport width</li>
                <li><strong>(max-width: 900px) 50vw</strong>: On screens 601-900px, image takes 50% viewport width</li>
                <li><strong>33vw</strong>: On screens &gt;900px, image takes 33% viewport width</li>
                <li>Browser uses this info to select the most appropriate image</li>
              </ul>
            </div>
          </div>
        )}

        {selectedExample === 'art-direction' && (
          <div className={styles.example}>
            <h2>Art Direction with picture element</h2>
            <p>
              Use different images for different screen sizes, not just different sizes of the same image.
            </p>

            <div className={styles.imageContainer}>
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet="https://picsum.photos/1200/600"
                />
                <source
                  media="(min-width: 600px)"
                  srcSet="https://picsum.photos/800/400"
                />
                <img
                  src="https://picsum.photos/400/300"
                  alt="Art direction example"
                  className={styles.responsiveImage}
                />
              </picture>
            </div>

            <div className={styles.codeExample}>
              <h3>Code:</h3>
              <pre>
                {`<picture>
  <source
    media="(min-width: 900px)"
    srcSet="https://picsum.photos/1200/600"
  />
  <source
    media="(min-width: 600px)"
    srcSet="https://picsum.photos/800/400"
  />
  <img
    src="https://picsum.photos/400/300"
    alt="Art direction example"
  />
</picture>`}
              </pre>
            </div>

            <div className={styles.explanation}>
              <h3>Art Direction benefits:</h3>
              <ul>
                <li>Use completely different images for different contexts</li>
                <li>Landscape image on desktop, portrait on mobile</li>
                <li>Different crops or compositions for different screen sizes</li>
                <li>Better user experience with contextually appropriate images</li>
              </ul>
            </div>
          </div>
        )}

        {selectedExample === 'density' && (
          <div className={styles.example}>
            <h2>Pixel Density (DPR) with srcset</h2>
            <p>
              Provide different images for different pixel densities (1x, 2x, 3x).
            </p>

            <div className={styles.imageContainer}>
              <img
                src="https://picsum.photos/400/300"
                srcSet="https://picsum.photos/400/300 1x,
                        https://picsum.photos/800/600 2x,
                        https://picsum.photos/1200/900 3x"
                alt="High DPI image"
                className={styles.responsiveImage}
              />
            </div>

            <div className={styles.codeExample}>
              <h3>Code:</h3>
              <pre>
                {`<img
  src="https://picsum.photos/400/300"
  srcSet="https://picsum.photos/400/300 1x,
          https://picsum.photos/800/600 2x,
          https://picsum.photos/1200/900 3x"
  alt="High DPI image"
/>`}
              </pre>
            </div>

            <div className={styles.explanation}>
              <h3>Pixel Density breakdown:</h3>
              <ul>
                <li><strong>1x</strong>: Standard resolution (96 DPI)</li>
                <li><strong>2x</strong>: Retina displays (192 DPI)</li>
                <li><strong>3x</strong>: Ultra-high DPI displays (288 DPI)</li>
                <li>Browser automatically selects based on device pixel ratio</li>
                <li>Ensures crisp images on all devices</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className={styles.tips}>
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Always provide a fallback src</strong> for older browsers</li>
          <li><strong>Use width descriptors (w)</strong> for responsive images</li>
          <li><strong>Use density descriptors (x)</strong> for high-DPI displays</li>
          <li><strong>Include sizes attribute</strong> when using width descriptors</li>
          <li><strong>Test on real devices</strong> to ensure proper image selection</li>
          <li><strong>Optimize images</strong> for web (WebP, AVIF formats)</li>
        </ul>
      </div>

      <div className={styles.debug}>
        <h2>Debug Information</h2>
        <p>Current viewport width: <span id="viewport-width">{window.innerWidth}px</span></p>
        <p>Device pixel ratio: <span id="device-pixel-ratio">{window.devicePixelRatio}x</span></p>
        <p>User agent: <span id="user-agent">{navigator.userAgent}</span></p>
      </div>
    </div>
  );
};

export default ResponsiveImages; 