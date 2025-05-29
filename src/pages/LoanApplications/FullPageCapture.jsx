// // import React, { useState } from 'react';
// // import jsPDF from 'jspdf';

// // const FullPageCapture = ({ targetElementId }) => {
// //   const [isCapturing, setIsCapturing] = useState(false);
// //   const [progress, setProgress] = useState(0);

// //   const captureFullPage = async () => {
// //     const element = document.querySelector('.sbi-form-container') || 
// //                    document.getElementById('sbi-form-container');
    
// //     if (!element) {
// //       alert('Form element not found');
// //       return;
// //     }

// //     setIsCapturing(true);
// //     setProgress(0);

// //     try {
// //       // Force garbage collection if available
// //       if (window.gc) {
// //         window.gc();
// //       }

// //       // Import html2canvas dynamically to reduce initial memory footprint
// //       const html2canvas = await import('html2canvas');
      
// //       setProgress(0.2);

// //       // Optimized capture settings for memory efficiency
// //       const canvas = await html2canvas.default(element, {
// //         scale: 1.5, // Reduced from 2 to save memory
// //         useCORS: true,
// //         allowTaint: true,
// //         backgroundColor: '#ffffff',
// //         logging: false,
// //         width: element.offsetWidth,
// //         height: element.offsetHeight,
// //         scrollX: 0,
// //         scrollY: 0,
// //         removeContainer: true,
// //         foreignObjectRendering: false, // Disable to reduce memory usage
// //         imageTimeout: 5000,
// //         onclone: (clonedDoc) => {
// //           // Clean up cloned document to reduce memory
// //           const scripts = clonedDoc.querySelectorAll('script');
// //           scripts.forEach(script => script.remove());
// //           return clonedDoc;
// //         }
// //       });

// //       setProgress(0.7);

// //       // Create PDF with memory-efficient settings
// //       const pdf = new jsPDF('p', 'mm', 'a4');
// //       const pageWidth = pdf.internal.pageSize.getWidth();
// //       const pageHeight = pdf.internal.pageSize.getHeight();
      
// //       // Convert canvas to image with compression
// //       const imgData = canvas.toDataURL('image/jpeg', 0.8); // Use JPEG with compression
      
// //       // Calculate dimensions
// //       const imgWidth = canvas.width;
// //       const imgHeight = canvas.height;
// //       const ratio = Math.min(pageWidth / (imgWidth * 0.264583), pageHeight / (imgHeight * 0.264583));
      
// //       const width = imgWidth * 0.264583 * ratio;
// //       const height = imgHeight * 0.264583 * ratio;
// //       const x = (pageWidth - width) / 2;
// //       const y = 10;

// //       // Add image to PDF
// //       pdf.addImage(imgData, 'JPEG', x, y, width, height);

// //       setProgress(0.9);

// //       // Generate filename and save
// //       const now = new Date();
// //       const timestamp = now.getFullYear() + 
// //                        String(now.getMonth() + 1).padStart(2, '0') + 
// //                        String(now.getDate()).padStart(2, '0') + '_' +
// //                        String(now.getHours()).padStart(2, '0') + 
// //                        String(now.getMinutes()).padStart(2, '0');
      
// //       pdf.save(`sbi-loan-form-${timestamp}.pdf`);

// //       setProgress(1);

// //       // Clean up memory
// //       canvas.width = 0;
// //       canvas.height = 0;
      
// //       // Force garbage collection again if available
// //       if (window.gc) {
// //         window.gc();
// //       }

// //     } catch (error) {
// //       console.error('Capture failed:', error);
// //       alert('Screenshot capture failed due to memory constraints. Try closing other tabs and refreshing the page.');
// //     } finally {
// //       setIsCapturing(false);
// //       setProgress(0);
      
// //       // Additional cleanup
// //       setTimeout(() => {
// //         if (window.gc) {
// //           window.gc();
// //         }
// //       }, 1000);
// //     }
// //   };

// //   return (
// //     <div style={{ 
// //       marginTop: '30px', 
// //       padding: '25px', 
// //       backgroundColor: '#f8f9fa', 
// //       borderRadius: '12px', 
// //       border: '1px solid #e0e6ed',
// //       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
// //       maxWidth: '940px',
// //       margin: '30px auto 0 auto'
// //     }}>
// //       <div style={{ textAlign: 'center' }}>
// //         <button 
// //           onClick={captureFullPage}
// //           disabled={isCapturing}
// //           style={{
// //             background: isCapturing 
// //               ? 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)' 
// //               : 'linear-gradient(135deg, #4a3c9a 0%, #6f42c1 100%)',
// //             color: 'white',
// //             border: 'none',
// //             padding: '14px 28px',
// //             fontSize: '16px',
// //             fontWeight: '600',
// //             borderRadius: '8px',
// //             cursor: isCapturing ? 'not-allowed' : 'pointer',
// //             transition: 'all 0.3s ease',
// //             boxShadow: isCapturing 
// //               ? 'none' 
// //               : '0 4px 15px rgba(74, 60, 154, 0.3)',
// //             minWidth: '250px'
// //           }}
// //         >
// //           {isCapturing ? (
// //             <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
// //               <div style={{
// //                 width: '16px',
// //                 height: '16px',
// //                 border: '2px solid transparent',
// //                 borderTop: '2px solid white',
// //                 borderRadius: '50%',
// //                 animation: 'spin 1s linear infinite'
// //               }}></div>
// //               Capturing... {Math.round(progress * 100)}%
// //             </span>
// //           ) : (
// //             <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
// //               <span style={{ fontSize: '18px' }}>📄</span>
// //               Save as PDF (Memory Optimized)
// //             </span>
// //           )}
// //         </button>
        
// //         {isCapturing && (
// //           <div style={{ marginTop: '20px' }}>
// //             <div style={{
// //               width: '100%',
// //               height: '6px',
// //               backgroundColor: '#e9ecef',
// //               borderRadius: '10px',
// //               overflow: 'hidden'
// //             }}>
// //               <div style={{ 
// //                 height: '100%',
// //                 backgroundColor: '#4a3c9a',
// //                 width: `${progress * 100}%`,
// //                 transition: 'width 0.3s ease',
// //                 borderRadius: '10px'
// //               }}></div>
// //             </div>
// //             <p style={{ fontSize: '14px', color: '#6c757d', margin: '10px 0 0 0' }}>
// //               Processing form... Please keep this tab active.
// //             </p>
// //           </div>
// //         )}
        
// //         <div style={{
// //           marginTop: '15px',
// //           padding: '10px',
// //           backgroundColor: '#e3f2fd',
// //           border: '1px solid #bbdefb',
// //           borderRadius: '6px',
// //           fontSize: '12px',
// //           color: '#1565c0'
// //         }}>
// //           💡 <strong>Tip:</strong> Close other browser tabs before capturing to prevent memory issues.
// //         </div>
// //       </div>
      
// //       <style>
// //         {`
// //           @keyframes spin {
// //             0% { transform: rotate(0deg); }
// //             100% { transform: rotate(360deg); }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default FullPageCapture;

// import React, { useState } from 'react';

// const FullPageCapture = ({ targetElementId }) => {
//   const [isCapturing, setIsCapturing] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [showSplitWarning, setShowSplitWarning] = useState(false);
//   const [screenshotCount, setScreenshotCount] = useState(0);

//   // Constants from the extension
//   const CAPTURE_DELAY = 150;
//   const MAX_PRIMARY_DIMENSION = 15000 * 2;
//   const MAX_SECONDARY_DIMENSION = 4000 * 2;
//   const MAX_AREA = MAX_PRIMARY_DIMENSION * MAX_SECONDARY_DIMENSION;

//   function max(nums) {
//     return Math.max.apply(Math, nums.filter(function(x) { return x; }));
//   }

//   function initScreenshots(totalWidth, totalHeight) {
//     const badSize = (totalHeight > MAX_PRIMARY_DIMENSION ||
//                      totalWidth > MAX_PRIMARY_DIMENSION ||
//                      totalHeight * totalWidth > MAX_AREA);
//     const biggerWidth = totalWidth > totalHeight;
//     const maxWidth = (!badSize ? totalWidth :
//                       (biggerWidth ? MAX_PRIMARY_DIMENSION : MAX_SECONDARY_DIMENSION));
//     const maxHeight = (!badSize ? totalHeight :
//                        (biggerWidth ? MAX_SECONDARY_DIMENSION : MAX_PRIMARY_DIMENSION));
//     const numCols = Math.ceil(totalWidth / maxWidth);
//     const numRows = Math.ceil(totalHeight / maxHeight);

//     const result = [];
//     let canvasIndex = 0;

//     for (let row = 0; row < numRows; row++) {
//       for (let col = 0; col < numCols; col++) {
//         const canvas = document.createElement('canvas');
//         canvas.width = (col === numCols - 1 ? totalWidth % maxWidth || maxWidth : maxWidth);
//         canvas.height = (row === numRows - 1 ? totalHeight % maxHeight || maxHeight : maxHeight);

//         const left = col * maxWidth;
//         const top = row * maxHeight;

//         result.push({
//           canvas: canvas,
//           ctx: canvas.getContext('2d'),
//           index: canvasIndex,
//           left: left,
//           right: left + canvas.width,
//           top: top,
//           bottom: top + canvas.height
//         });

//         canvasIndex++;
//       }
//     }

//     return result;
//   }

//   function filterScreenshots(imgLeft, imgTop, imgWidth, imgHeight, screenshots) {
//     const imgRight = imgLeft + imgWidth;
//     const imgBottom = imgTop + imgHeight;
//     return screenshots.filter(function(screenshot) {
//       return (imgLeft < screenshot.right &&
//               imgRight > screenshot.left &&
//               imgTop < screenshot.bottom &&
//               imgBottom > screenshot.top);
//     });
//   }

//   function getPositions(element) {
//     const body = document.body;
//     const originalBodyOverflowYStyle = body ? body.style.overflowY : '';
//     const originalX = window.scrollX;
//     const originalY = window.scrollY;
//     const originalOverflowStyle = document.documentElement.style.overflow;

//     // try to make pages with bad scrolling work
//     if (body) {
//       body.style.overflowY = 'visible';
//     }

//     const widths = [
//       document.documentElement.clientWidth,
//       body ? body.scrollWidth : 0,
//       document.documentElement.scrollWidth,
//       body ? body.offsetWidth : 0,
//       document.documentElement.offsetWidth
//     ];
//     const heights = [
//       document.documentElement.clientHeight,
//       body ? body.scrollHeight : 0,
//       document.documentElement.scrollHeight,
//       body ? body.offsetHeight : 0,
//       document.documentElement.offsetHeight
//     ];

//     // Changed from const to let to allow reassignment
//     let fullWidth = max(widths);
//     const fullHeight = max(heights);
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const arrangements = [];
//     const scrollPad = 200;
//     const yDelta = windowHeight - (windowHeight > scrollPad ? scrollPad : 0);
//     const xDelta = windowWidth;
//     let yPos = fullHeight - windowHeight;
//     let xPos;

//     // During zooming, there can be weird off-by-1 types of things...
//     if (fullWidth <= xDelta + 1) {
//       fullWidth = xDelta; // Now this works because fullWidth is declared with let
//     }

//     // Disable all scrollbars
//     document.documentElement.style.overflow = 'hidden';

//     while (yPos > -yDelta) {
//       xPos = 0;
//       while (xPos < fullWidth) {
//         arrangements.push([xPos, yPos]);
//         xPos += xDelta;
//       }
//       yPos -= yDelta;
//     }

//     return {
//       arrangements,
//       fullWidth,
//       fullHeight,
//       windowWidth,
//       windowHeight,
//       cleanup: function() {
//         document.documentElement.style.overflow = originalOverflowStyle;
//         if (body) {
//           body.style.overflowY = originalBodyOverflowYStyle;
//         }
//         window.scrollTo(originalX, originalY);
//       }
//     };
//   }

//   async function captureVisibleTab() {
//     return new Promise((resolve) => {
//       // Use html2canvas to simulate chrome.tabs.captureVisibleTab
//       import('html2canvas').then(html2canvas => {
//         html2canvas.default(document.body, {
//           width: window.innerWidth,
//           height: window.innerHeight,
//           scrollX: window.scrollX,
//           scrollY: window.scrollY,
//           useCORS: true,
//           allowTaint: true,
//           scale: window.devicePixelRatio || 1,
//           backgroundColor: null
//         }).then(canvas => {
//           resolve(canvas.toDataURL('image/png'));
//         }).catch(() => {
//           resolve(null);
//         });
//       });
//     });
//   }

//   async function processArrangements(arrangements, fullWidth, fullHeight, windowWidth, windowHeight) {
//     const numArrangements = arrangements.length;
//     const screenshots = [];
//     let processedCount = 0;

//     for (const [x, y] of arrangements) {
//       window.scrollTo(x, y);

//       const data = {
//         x: window.scrollX,
//         y: window.scrollY,
//         complete: processedCount / numArrangements,
//         windowWidth: windowWidth,
//         totalWidth: fullWidth,
//         totalHeight: fullHeight,
//         devicePixelRatio: window.devicePixelRatio || 1
//       };

//       setProgress(data.complete);

//       // Wait for things to settle
//       await new Promise(resolve => setTimeout(resolve, CAPTURE_DELAY));

//       // Capture visible area
//       const dataUrl = await captureVisibleTab();
      
//       if (dataUrl) {
//         const image = new Image();
//         await new Promise(resolve => {
//           image.onload = function() {
//             data.image = { width: image.width, height: image.height };

//             // Adjust for scaling differences
//             if (data.windowWidth !== image.width) {
//               const scale = image.width / data.windowWidth;
//               data.x *= scale;
//               data.y *= scale;
//               data.totalWidth *= scale;
//               data.totalHeight *= scale;
//             }

//             // Initialize screenshots if needed
//             if (!screenshots.length) {
//               Array.prototype.push.apply(
//                 screenshots,
//                 initScreenshots(data.totalWidth, data.totalHeight)
//               );
//               if (screenshots.length > 1) {
//                 setShowSplitWarning(true);
//                 setScreenshotCount(screenshots.length);
//               }
//             }

//             // Draw on matching screenshot canvases
//             filterScreenshots(
//               data.x, data.y, image.width, image.height, screenshots
//             ).forEach(function(screenshot) {
//               screenshot.ctx.drawImage(
//                 image,
//                 data.x - screenshot.left,
//                 data.y - screenshot.top
//               );
//             });

//             resolve();
//           };
//           image.src = dataUrl;
//         });
//       }

//       processedCount++;
//     }

//     setProgress(1);
//     return screenshots;
//   }

//   function downloadScreenshots(screenshots) {
//     screenshots.forEach(function(screenshot, index) {
//       const link = document.createElement('a');
//       const now = new Date();
//       const timestamp = now.getFullYear() + 
//                        String(now.getMonth() + 1).padStart(2, '0') + 
//                        String(now.getDate()).padStart(2, '0') + '_' +
//                        String(now.getHours()).padStart(2, '0') + 
//                        String(now.getMinutes()).padStart(2, '0');
      
//       const filename = screenshots.length > 1 
//         ? `sbi-loan-form-${timestamp}-part${index + 1}.png`
//         : `sbi-loan-form-${timestamp}.png`;
      
//       link.download = filename;
//       link.href = screenshot.canvas.toDataURL('image/png');
      
//       // Trigger download
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     });
//   }

//   const captureFullPage = async () => {
//     const element = document.querySelector('.sbi-form-container') || 
//                    document.getElementById('sbi-form-container');
    
//     if (!element) {
//       alert('Form element not found');
//       return;
//     }

//     setIsCapturing(true);
//     setProgress(0);
//     setShowSplitWarning(false);
//     setScreenshotCount(0);

//     try {
//       const { arrangements, fullWidth, fullHeight, windowWidth, windowHeight, cleanup } = getPositions(element);
      
//       console.log('fullHeight', fullHeight, 'fullWidth', fullWidth);
//       console.log('windowWidth', windowWidth, 'windowHeight', windowHeight);
//       console.log('arrangements', arrangements.length);

//       const screenshots = await processArrangements(arrangements, fullWidth, fullHeight, windowWidth, windowHeight);
      
//       cleanup();
      
//       // Download the screenshots
//       downloadScreenshots(screenshots);
      
//     } catch (error) {
//       console.error('Capture failed:', error);
//       alert('Screenshot capture failed. Please try again.');
//     } finally {
//       setIsCapturing(false);
//       setProgress(0);
//       setShowSplitWarning(false);
//     }
//   };

//   return (
//     <div style={{ 
//       marginTop: '30px', 
//       padding: '25px', 
//       backgroundColor: '#f8f9fa', 
//       borderRadius: '12px', 
//       border: '1px solid #e0e6ed',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//       maxWidth: '940px',
//       margin: '30px auto 0 auto'
//     }}>
//       <div style={{ textAlign: 'center' }}>
//         <button 
//           onClick={captureFullPage}
//           disabled={isCapturing}
//           style={{
//             background: isCapturing 
//               ? 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)' 
//               : 'linear-gradient(135deg, #4a3c9a 0%, #6f42c1 100%)',
//             color: 'white',
//             border: 'none',
//             padding: '14px 28px',
//             fontSize: '16px',
//             fontWeight: '600',
//             borderRadius: '8px',
//             cursor: isCapturing ? 'not-allowed' : 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: isCapturing 
//               ? 'none' 
//               : '0 4px 15px rgba(74, 60, 154, 0.3)',
//             minWidth: '280px'
//           }}
//         >
//           {isCapturing ? (
//             <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
//               <div style={{
//                 width: '16px',
//                 height: '16px',
//                 border: '2px solid transparent',
//                 borderTop: '2px solid white',
//                 borderRadius: '50%',
//                 animation: 'spin 1s linear infinite'
//               }}></div>
//               Capturing... {Math.round(progress * 100)}%
//             </span>
//           ) : (
//             <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
//               <span style={{ fontSize: '18px' }}>📷</span>
//               Capture Full Page as PNG
//             </span>
//           )}
//         </button>
        
//         {isCapturing && (
//           <div style={{ marginTop: '25px' }}>
//             <div style={{
//               width: '100%',
//               height: '8px',
//               backgroundColor: '#e9ecef',
//               borderRadius: '20px',
//               overflow: 'hidden',
//               marginBottom: '15px',
//               boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
//             }}>
//               <div style={{ 
//                 height: '100%',
//                 background: 'linear-gradient(90deg, #4a3c9a 0%, #6f42c1 50%, #4a3c9a 100%)',
//                 width: `${progress * 100}%`,
//                 transition: 'width 0.3s ease',
//                 borderRadius: '20px'
//               }}></div>
//             </div>
//             <p style={{ 
//               fontSize: '14px', 
//               color: '#6c757d', 
//               margin: 0,
//               fontWeight: '500'
//             }}>
//               📸 Screen capture in progress, please wait for completion.
//             </p>
//           </div>
//         )}
        
//         {showSplitWarning && (
//           <div style={{
//             marginTop: '20px',
//             padding: '15px',
//             backgroundColor: '#fff3cd',
//             border: '1px solid #ffeaa7',
//             borderRadius: '8px',
//             color: '#856404',
//             fontSize: '14px',
//             fontWeight: '500'
//           }}>
//             <span style={{ fontSize: '16px', marginRight: '8px' }}>⚠️</span>
//             Note: Your page is too large for Chrome to capture as one image. It will be split into {screenshotCount} images.
//           </div>
//         )}
//       </div>
      
//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default FullPageCapture;

import React, { useState } from 'react';

const FullPageCapture = ({ targetElementId }) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate chrome.tabs.captureVisibleTab using getDisplayMedia
  // const captureVisibleTab = async () => {
  //   try {
  //     // Request screen capture permission (similar to Chrome extension)
  //     const stream = await navigator.mediaDevices.getDisplayMedia({
  //       video: {
  //         mediaSource: 'screen',
  //         width: { ideal: window.screen.width },
  //         height: { ideal: window.screen.height }
  //       }
  //     });

  //     const video = document.createElement('video');
  //     video.srcObject = stream;
  //     video.play();

  //     return new Promise((resolve) => {
  //       video.addEventListener('loadedmetadata', () => {
  //         const canvas = document.createElement('canvas');
  //         canvas.width = video.videoWidth;
  //         canvas.height = video.videoHeight;
          
  //         const ctx = canvas.getContext('2d');
  //         ctx.drawImage(video, 0, 0);
          
  //         // Stop the stream
  //         stream.getTracks().forEach(track => track.stop());
          
  //         resolve(canvas.toDataURL('image/png'));
  //       });
  //     });
  //   } catch (error) {
  //     console.error('Screen capture failed:', error);
  //     return null;
  //   }
  // };
  const captureVisibleTab = async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mediaSource: 'screen',
        width: { ideal: window.screen.width },
        height: { ideal: window.screen.height }
      },
      audio: false,
      selfBrowserSurface: "include", // This allows current tab to be shown
      surfaceSwitching: "include",
      systemAudio: "exclude"
    });

    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    return new Promise((resolve) => {
      video.addEventListener('loadedmetadata', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0);
        
        stream.getTracks().forEach(track => track.stop());
        resolve(canvas.toDataURL('image/png'));
      });
    });
  } catch (error) {
    console.error('Screen capture failed:', error);
    return null;
  }
};


  // Chrome extension's exact positioning logic
  const getPositions = () => {
    const body = document.body;
    const originalBodyOverflowYStyle = body ? body.style.overflowY : '';
    const originalX = window.scrollX;
    const originalY = window.scrollY;
    const originalOverflowStyle = document.documentElement.style.overflow;

    if (body) {
      body.style.overflowY = 'visible';
    }

    const widths = [
      document.documentElement.clientWidth,
      body ? body.scrollWidth : 0,
      document.documentElement.scrollWidth,
      body ? body.offsetWidth : 0,
      document.documentElement.offsetWidth
    ];
    const heights = [
      document.documentElement.clientHeight,
      body ? body.scrollHeight : 0,
      document.documentElement.scrollHeight,
      body ? body.offsetHeight : 0,
      document.documentElement.offsetHeight
    ];

    const max = (nums) => Math.max.apply(Math, nums.filter(x => x));
    
    let fullWidth = max(widths);
    const fullHeight = max(heights);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const scrollPad = 200;
    const yDelta = windowHeight - (windowHeight > scrollPad ? scrollPad : 0);
    const xDelta = windowWidth;

    if (fullWidth <= xDelta + 1) {
      fullWidth = xDelta;
    }

    document.documentElement.style.overflow = 'hidden';

    const arrangements = [];
    let yPos = fullHeight - windowHeight;

    while (yPos > -yDelta) {
      let xPos = 0;
      while (xPos < fullWidth) {
        arrangements.push([xPos, yPos]);
        xPos += xDelta;
      }
      yPos -= yDelta;
    }

    return {
      arrangements,
      fullWidth,
      fullHeight,
      windowWidth,
      windowHeight,
      cleanup: () => {
        document.documentElement.style.overflow = originalOverflowStyle;
        if (body) {
          body.style.overflowY = originalBodyOverflowYStyle;
        }
        window.scrollTo(originalX, originalY);
      }
    };
  };

  const captureFullPage = async () => {
    setIsCapturing(true);
    setProgress(0);

    try {
      const { arrangements, fullWidth, fullHeight, cleanup } = getPositions();
      
      // Create final canvas
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = fullWidth;
      finalCanvas.height = fullHeight;
      const finalCtx = finalCanvas.getContext('2d');
      
      // Fill with white background
      finalCtx.fillStyle = '#ffffff';
      finalCtx.fillRect(0, 0, fullWidth, fullHeight);

      let processedCount = 0;

      for (const [x, y] of arrangements) {
        window.scrollTo(x, y);
        setProgress(processedCount / arrangements.length);
        
        // Wait for scroll to settle (Chrome extension delay)
        await new Promise(resolve => setTimeout(resolve, 150));
        
        // Capture using screen capture API (closest to Chrome extension)
        const dataUrl = await captureVisibleTab();
        
        if (dataUrl) {
          const img = new Image();
          await new Promise(resolve => {
            img.onload = () => {
              // Calculate the portion of the image that corresponds to our scroll position
              const sourceX = Math.max(0, window.scrollX - x);
              const sourceY = Math.max(0, window.scrollY - y);
              const sourceWidth = Math.min(img.width - sourceX, window.innerWidth);
              const sourceHeight = Math.min(img.height - sourceY, window.innerHeight);
              
              finalCtx.drawImage(
                img,
                sourceX, sourceY, sourceWidth, sourceHeight,
                window.scrollX, window.scrollY, sourceWidth, sourceHeight
              );
              resolve();
            };
            img.src = dataUrl;
          });
        }
        
        processedCount++;
      }

      cleanup();
      setProgress(1);

      // Download the final image
      const link = document.createElement('a');
      const now = new Date();
      const timestamp = now.getFullYear() + 
                       String(now.getMonth() + 1).padStart(2, '0') + 
                       String(now.getDate()).padStart(2, '0') + '_' +
                       String(now.getHours()).padStart(2, '0') + 
                       String(now.getMinutes()).padStart(2, '0');
      
      link.download = `sbi-loan-form-${timestamp}.png`;
      link.href = finalCanvas.toDataURL('image/png');
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Capture failed:', error);
      alert('Screen capture failed. Please ensure you grant screen sharing permission.');
    } finally {
      setIsCapturing(false);
      setProgress(0);
    }
  };

  return (
    <div style={{ 
      marginTop: '30px', 
      padding: '25px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '12px', 
      border: '1px solid #e0e6ed',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '940px',
      margin: '30px auto 0 auto'
    }}>
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={captureFullPage}
          disabled={isCapturing}
          style={{
            background: isCapturing 
              ? 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)' 
              : 'linear-gradient(135deg, #4a3c9a 0%, #6f42c1 100%)',
            color: 'white',
            border: 'none',
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: isCapturing ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: isCapturing 
              ? 'none' 
              : '0 4px 15px rgba(74, 60, 154, 0.3)',
            minWidth: '300px'
          }}
        >
          {isCapturing ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid transparent',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
              Capturing... {Math.round(progress * 100)}%
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>📸</span>
              Capture with Screen Share (Chrome-like)
            </span>
          )}
        </button>
        
        {isCapturing && (
          <div style={{ marginTop: '25px' }}>
            <div style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#e9ecef',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '15px'
            }}>
              <div style={{ 
                height: '100%',
                backgroundColor: '#4a3c9a',
                width: `${progress * 100}%`,
                transition: 'width 0.3s ease',
                borderRadius: '20px'
              }}></div>
            </div>
            <p style={{ fontSize: '14px', color: '#6c757d', margin: 0 }}>
              📸 Screen capture in progress... Grant permission when prompted.
            </p>
          </div>
        )}
        
        <div style={{
          marginTop: '15px',
          padding: '12px',
          backgroundColor: '#e3f2fd',
          border: '1px solid #bbdefb',
          borderRadius: '6px',
          fontSize: '13px',
          color: '#1565c0'
        }}>
          💡 <strong>Note:</strong> This method uses screen capture API (like Chrome extensions) for pixel-perfect quality. You'll be prompted to share your screen - select "Chrome Tab" for best results.
        </div>
      </div>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default FullPageCapture;
