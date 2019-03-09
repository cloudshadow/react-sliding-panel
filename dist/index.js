'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".cloud-sliding-panel-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 15000;\n  background-color: rgba(0, 0, 0, 0.3);\n  will-change: transform; }\n  .cloud-sliding-panel-container .panel-glass {\n    width: 100vw;\n    height: 30vh;\n    position: fixed;\n    z-index: 16000;\n    top: 0;\n    left: 0; }\n  .cloud-sliding-panel-container .panel-glass-side {\n    width: 30vw;\n    height: 100vh;\n    position: fixed;\n    z-index: 16000;\n    top: 0;\n    left: 70vw; }\n  .cloud-sliding-panel-container .panel-bottom {\n    width: 100vw;\n    height: 70vh;\n    position: fixed;\n    z-index: 16000;\n    background-color: #fff;\n    bottom: -70vh; }\n  .cloud-sliding-panel-container .panel-side {\n    width: 70vw;\n    height: 100vh;\n    position: fixed;\n    z-index: 16000;\n    background-color: #fff;\n    display: inline-block; }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.fadeIn {\n  animation-fill-mode: both;\n  animation-duration: .5;\n  animation-name: fadeIn; }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.fadeOut {\n  animation-fill-mode: both;\n  animation-duration: .5s;\n  animation-name: fadeOut; }\n\n@keyframes bottomPanelShow {\n  0% {\n    opacity: 0;\n    transform: translateY(0vh); }\n  100% {\n    opacity: 1;\n    transform: translateY(-70vh); } }\n\n.bottomPanelShow {\n  animation-fill-mode: both;\n  animation-duration: 1s;\n  animation-name: bottomPanelShow; }\n\n@keyframes bottomPanelHide {\n  0% {\n    opacity: 1;\n    transform: translateY(-70vh); }\n  100% {\n    opacity: 0;\n    transform: translateY(0vh); } }\n\n.bottomPanelHide {\n  animation-fill-mode: both;\n  animation-duration: .5s;\n  animation-name: bottomPanelHide; }\n\n@keyframes sidePanelShow {\n  0% {\n    opacity: 0;\n    transform: translateX(-70vw); }\n  100% {\n    opacity: 1;\n    transform: translateX(0vw); } }\n\n.sidePanelShow {\n  animation-fill-mode: both;\n  animation-duration: 1s;\n  animation-name: sidePanelShow; }\n\n@keyframes sidePanelHide {\n  0% {\n    opacity: 0;\n    transform: translateX(0vw); }\n  100% {\n    opacity: 1;\n    transform: translateX(-70vw); } }\n\n.sidePanelHide {\n  animation-fill-mode: both;\n  animation-duration: .5s;\n  animation-name: sidePanelHide; }\n";
styleInject(css);

var SlidingPanel = function SlidingPanel(props) {
  var closePanel = function closePanel() {
    document.getElementsByClassName("panel-".concat(props.type))[0].classList.remove("".concat(props.type, "PanelShow"));
    document.getElementsByClassName("panel-".concat(props.type))[0].classList.add("".concat(props.type, "PanelHide"));
    document.getElementsByClassName('cloud-sliding-panel-container')[0].classList.toggle('fadeOut');
    setTimeout(function () {
      props.closeFunc();
    }, 500);
  };

  if (props.isOpen) {
    return React.createElement("div", {
      className: "cloud-sliding-panel-container ".concat(props.type)
    }, React.createElement("div", {
      className: props.type === 'bottom' ? 'panel-glass' : 'panel-glass-side',
      onClick: function onClick() {
        return closePanel();
      }
    }), React.createElement("div", {
      className: (props.type === 'bottom' ? 'panel-bottom' : 'panel-side') + (props.isOpen ? " ".concat(props.type, "PanelShow") : " ".concat(props.type, "PanelHide"))
    }, props.children));
  } else {
    return React.createElement("div", null);
  }
};

SlidingPanel.propTypes = {
  type: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
  children: PropTypes.element
};

module.exports = SlidingPanel;
