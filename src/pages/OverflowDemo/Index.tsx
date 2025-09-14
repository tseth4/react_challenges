import React, { useState } from 'react';
import styles from './OverflowDemo.module.scss';

const OverflowDemo: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<'problem' | 'solutions' | 'flex-tricks' | 'real-world'>('problem');

  const longText = "This is a very long text that will cause overflow issues in containers that don't have proper overflow handling. It contains many characters and will extend beyond the boundaries of its parent container if not handled correctly.";
  
  const veryLongText = "Helloooooooooooooooooooooooo000000000000000000000000000oooooooooooooooooooooooooo000000000000000000000000000oooooooooooooooooooooooooo000000000000000000000000000oooooooooooooooooooooooooo000000000000000000000000000oooooooooooooooooooooooooo000000000000000000000000000oooooooooooooooooooooooooo000000000000000000000000000oooooooooooooooooooooooooo000000000000000000000000000oo";

  return (
    <div className={styles.container}>
      <h1>CSS Overflow Containment Solutions</h1>
      <p>Understanding and fixing overflow issues in CSS layouts</p>
      
      <div className={styles.navigation}>
        <button 
          className={selectedExample === 'problem' ? styles.active : ''}
          onClick={() => setSelectedExample('problem')}
        >
          The Problem
        </button>
        <button 
          className={selectedExample === 'solutions' ? styles.active : ''}
          onClick={() => setSelectedExample('solutions')}
        >
          Basic Solutions
        </button>
        <button 
          className={selectedExample === 'flex-tricks' ? styles.active : ''}
          onClick={() => setSelectedExample('flex-tricks')}
        >
          Flex Tricks
        </button>
        <button 
          className={selectedExample === 'real-world' ? styles.active : ''}
          onClick={() => setSelectedExample('real-world')}
        >
          Real World Example
        </button>
      </div>

      <div className={styles.content}>
        {selectedExample === 'problem' && (
          <div className={styles.example}>
            <h2>The Overflow Problem</h2>
            <p>When content is larger than its container, it can break your layout and create horizontal scrollbars.</p>
            
            <div className={styles.problemContainer}>
              <h3>❌ Problem: Content overflows container</h3>
              <div className={styles.brokenContainer}>
                <div className={styles.overflowingContent}>
                  <h4>Vehicle Details</h4>
                  <p>{veryLongText}</p>
                </div>
              </div>
            </div>

            <div className={styles.problemContainer}>
              <h3>❌ Problem: Flex item doesn't shrink</h3>
              <div className={styles.flexContainer}>
                <div className={styles.flexItem}>Fixed width item</div>
                <div className={styles.flexItemOverflow}>
                  <p>{longText}</p>
                </div>
                <div className={styles.flexItem}>Another fixed item</div>
              </div>
            </div>

            <div className={styles.explanation}>
              <h3>Common Issues:</h3>
              <ul>
                <li><strong>Long text</strong> extends beyond container boundaries</li>
                <li><strong>Flex items</strong> don't shrink when content is too wide</li>
                <li><strong>Images</strong> break responsive layouts</li>
                <li><strong>Horizontal scrollbars</strong> appear unexpectedly</li>
              </ul>
            </div>
          </div>
        )}

        {selectedExample === 'solutions' && (
          <div className={styles.example}>
            <h2>Basic Overflow Solutions</h2>
            <p>Different CSS properties to control how overflow is handled.</p>
            
            <div className={styles.solutionGrid}>
              <div className={styles.solutionCard}>
                <h3>overflow: hidden</h3>
                <div className={styles.containerExample}>
                  <div className={styles.hiddenOverflow}>
                    <p>{longText}</p>
                  </div>
                </div>
                <div className={styles.codeBlock}>
                  <code>overflow: hidden;</code>
                </div>
                <p>Clips content that overflows</p>
              </div>

              <div className={styles.solutionCard}>
                <h3>overflow: scroll</h3>
                <div className={styles.containerExample}>
                  <div className={styles.scrollOverflow}>
                    <p>{longText}</p>
                  </div>
                </div>
                <div className={styles.codeBlock}>
                  <code>overflow: scroll;</code>
                </div>
                <p>Adds scrollbars when needed</p>
              </div>

              <div className={styles.solutionCard}>
                <h3>text-overflow: ellipsis</h3>
                <div className={styles.containerExample}>
                  <div className={styles.ellipsisOverflow}>
                    <p>{longText}</p>
                  </div>
                </div>
                <div className={styles.codeBlock}>
                  <code>text-overflow: ellipsis;<br/>white-space: nowrap;</code>
                </div>
                <p>Shows "..." for truncated text</p>
              </div>

              <div className={styles.solutionCard}>
                <h3>word-wrap: break-word</h3>
                <div className={styles.containerExample}>
                  <div className={styles.wordWrapOverflow}>
                    <p>{veryLongText}</p>
                  </div>
                </div>
                <div className={styles.codeBlock}>
                  <code>word-wrap: break-word;<br/>overflow-wrap: break-word;</code>
                </div>
                <p>Breaks long words to fit container</p>
              </div>
            </div>
          </div>
        )}

        {selectedExample === 'flex-tricks' && (
          <div className={styles.example}>
            <h2>Flex Container Overflow Tricks</h2>
            <p>Special techniques for handling overflow in flexbox layouts.</p>
            
            <div className={styles.flexTrick}>
              <h3>❌ Without min-width: 0</h3>
              <div className={styles.flexContainer}>
                <div className={styles.flexItem}>Fixed</div>
                <div className={styles.flexItemNoMinWidth}>
                  <p>{veryLongText}</p>
                </div>
                <div className={styles.flexItem}>Fixed</div>
              </div>
              <div className={styles.codeBlock}>
                <code>.flex-item {`{ flex: 1; }`}</code>
              </div>
            </div>

            <div className={styles.flexTrick}>
              <h3>✅ With min-width: 0</h3>
              <div className={styles.flexContainer}>
                <div className={styles.flexItem}>Fixed</div>
                <div className={styles.flexItemWithMinWidth}>
                  <p>{veryLongText}</p>
                </div>
                <div className={styles.flexItem}>Fixed</div>
              </div>
              <div className={styles.codeBlock}>
                <code>.flex-item {`{ flex: 1; min-width: 0; }`}</code>
              </div>
            </div>

            <div className={styles.flexTrick}>
              <h3>✅ With min-width: 0 + overflow hidden</h3>
              <div className={styles.flexContainer}>
                <div className={styles.flexItem}>Fixed</div>
                <div className={styles.flexItemWithOverflow}>
                  <p>{veryLongText}</p>
                </div>
                <div className={styles.flexItem}>Fixed</div>
              </div>
              <div className={styles.codeBlock}>
                <code>.flex-item {`{ flex: 1; min-width: 0; overflow: hidden; }`}</code>
              </div>
            </div>

            <div className={styles.explanation}>
              <h3>The min-width: 0 Trick</h3>
              <ul>
                <li><strong>Default behavior:</strong> Flex items have <code>min-width: auto</code></li>
                <li><strong>Problem:</strong> This prevents items from shrinking below their content size</li>
                <li><strong>Solution:</strong> Set <code>min-width: 0</code> to allow shrinking</li>
                <li><strong>Use case:</strong> Essential for responsive flex layouts</li>
              </ul>
            </div>
          </div>
        )}

        {selectedExample === 'real-world' && (
          <div className={styles.example}>
            <h2>Real World Example: Vehicle Details</h2>
            <p>Applying overflow solutions to a realistic component scenario.</p>
            
            <div className={styles.vehicleExample}>
              <h3>Your Original Problem</h3>
              <div className={styles.vehicleContainer}>
                <div className={styles.vehicleImage}>
                  <div className={styles.imagePlaceholder}>🚗</div>
                </div>
                <div className={styles.vehicleDetails}>
                  <h4>Vehicle Details</h4>
                  <p>{veryLongText}</p>
                </div>
              </div>
            </div>

            <div className={styles.vehicleExample}>
              <h3>✅ Solution 1: Scrollable Details</h3>
              <div className={styles.vehicleContainer}>
                <div className={styles.vehicleImage}>
                  <div className={styles.imagePlaceholder}>🚗</div>
                </div>
                <div className={styles.vehicleDetailsScrollable}>
                  <h4>Vehicle Details</h4>
                  <p>{veryLongText}</p>
                </div>
              </div>
            </div>

            <div className={styles.vehicleExample}>
              <h3>✅ Solution 2: Truncated with Ellipsis</h3>
              <div className={styles.vehicleContainer}>
                <div className={styles.vehicleImage}>
                  <div className={styles.imagePlaceholder}>🚗</div>
                </div>
                <div className={styles.vehicleDetailsEllipsis}>
                  <h4>Vehicle Details</h4>
                  <p>{veryLongText}</p>
                </div>
              </div>
            </div>

            <div className={styles.vehicleExample}>
              <h3>✅ Solution 3: Word Wrapping</h3>
              <div className={styles.vehicleContainer}>
                <div className={styles.vehicleImage}>
                  <div className={styles.imagePlaceholder}>🚗</div>
                </div>
                <div className={styles.vehicleDetailsWrapped}>
                  <h4>Vehicle Details</h4>
                  <p>{veryLongText}</p>
                </div>
              </div>
            </div>

            <div className={styles.codeComparison}>
              <h3>Code Comparison</h3>
              <div className={styles.codeGrid}>
                <div className={styles.codeColumn}>
                  <h4>❌ Problem</h4>
                  <pre>
{`.vehicleDetails {
  /* No overflow handling */
  max-width: 100%;
}`}
                  </pre>
                </div>
                <div className={styles.codeColumn}>
                  <h4>✅ Solution 1</h4>
                  <pre>
{`.vehicleDetails {
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}`}
                  </pre>
                </div>
                <div className={styles.codeColumn}>
                  <h4>✅ Solution 2</h4>
                  <pre>
{`.vehicleDetails {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`}
                  </pre>
                </div>
                <div className={styles.codeColumn}>
                  <h4>✅ Solution 3</h4>
                  <pre>
{`.vehicleDetails {
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.bestPractices}>
        <h2>Best Practices</h2>
        <div className={styles.practicesGrid}>
          <div className={styles.practiceCard}>
            <h3>🎯 Choose the Right Solution</h3>
            <ul>
              <li><strong>Scroll:</strong> When users need to see all content</li>
              <li><strong>Hidden:</strong> When overflow is not important</li>
              <li><strong>Ellipsis:</strong> For single-line text truncation</li>
              <li><strong>Word-wrap:</strong> For multi-line text content</li>
            </ul>
          </div>
          <div className={styles.practiceCard}>
            <h3>🔧 Flex Container Tips</h3>
            <ul>
              <li>Always use <code>min-width: 0</code> on flex items</li>
              <li>Combine with appropriate overflow handling</li>
              <li>Test on different screen sizes</li>
              <li>Consider accessibility (scrollbars, focus)</li>
            </ul>
          </div>
          <div className={styles.practiceCard}>
            <h3>📱 Responsive Considerations</h3>
            <ul>
              <li>Test overflow behavior on mobile</li>
              <li>Consider touch scrolling for mobile</li>
              <li>Use media queries for different solutions</li>
              <li>Ensure content remains accessible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverflowDemo;
