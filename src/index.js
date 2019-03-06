import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const SlidingPanel = (props) => {
  const closePanel = () => {
    document.getElementsByClassName(`panel-${props.type}`)[0].classList.remove(`${props.type}PanelShow`);
    document.getElementsByClassName(`panel-${props.type}`)[0].classList.add(`${props.type}PanelHide`);
    document.getElementsByClassName('cloud-sliding-panel-container')[0].classList.toggle('fadeOut');
    setTimeout(() => {
      props.closeFunc();
    }, 500);
  };

  if (props.isOpen) {
    return (
      <div className={`cloud-sliding-panel-container ${props.type}`} >
        <div className={props.type === 'bottom' ? 'panel-glass' : 'panel-glass-side'} onClick={() => closePanel()} />
        <div className={(props.type === 'bottom' ? 'panel-bottom' : 'panel-side') + (props.isOpen ? ` ${props.type}PanelShow` : ` ${props.type}PanelHide`)} >
          {props.children}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

SlidingPanel.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hasButton: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default SlidingPanel;