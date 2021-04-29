import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ step, stage, iconClass }) => {
  return (
    <div className={step ? 'step completed' : 'step'}>
      <div className='step-icon-wrap'>
        <div className='step-icon'>
          <i className={iconClass}></i>
        </div>
      </div>
      <h4 className='step-title'>{stage}</h4>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.bool.isRequired,
  stage: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default Step;
