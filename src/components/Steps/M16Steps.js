import React, { useContext } from 'react';
import '../../assets/css/steps.css';
import { Card } from 'react-bootstrap';
import Step from './Step';
import StepsData from './StepsData';
import { GlobalContext } from '../../context/GlobalState';

const M16Steps = () => {
  const { stages } = useContext(GlobalContext);
  return (
    <div className='main_container'>
      <h1>M16 Stages</h1>
      <div className='container padding-bottom-3x mb-1'>
        <Card className='mb-3'>
          <Card.Body>
            <div className='steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x'>
              <Step
                step={stages.count > 0 && true}
                iconClass='fa fa-file-import'
                stage='M16 Created'
              />
              <Step
                step={stages.count > 1 && true}
                iconClass='fa fa-spinner'
                stage='Approval Requested'
              />
              <Step
                step={stages.count > 2 && true}
                iconClass='fa fa-check'
                stage='Approved'
              />
              <Step
                step={stages.count > 3 && true}
                iconClass='fa fa-file-export'
                stage='Released'
              />
            </div>
            <StepsData />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default M16Steps;
