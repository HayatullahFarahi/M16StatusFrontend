import React, { useState, useContext, useEffect } from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select';
import Message from './Massage';
import Loader from './Loader';
import { GlobalContext } from '../context/GlobalState';

const SearchForm = () => {
  const [m16, setM16] = useState('');
  const [location, setLocation] = useState('');
  const [organization, setOrganization] = useState('');
  const [budgetType, setBudgetType] = useState('');
  const [validForm, setValidForm] = useState(true);
  const [validationMsg, setValidationMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { searchFormData } = useContext(GlobalContext);
  const { getSearchFormData } = useContext(GlobalContext);

  const [token, setToken] = useState();

  const handleReCaptchaLoad = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.REACT_APP_ReCAPTCHA_Site_Key, {
          action: 'submit',
        })
        .then((token) => {
          setToken(token);
          console.log('token fetched successfully', token);
        });
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_ReCAPTCHA_Site_Key}`;
    script.addEventListener('load', handleReCaptchaLoad);
    document.body.appendChild(script);
  }, []);

  const selectThemePrams = (theme) => ({
    ...theme,
    borderRadius: '0.25rem',
    colors: {
      ...theme.colors,
      text: 'black',
      primary25: 'rgba(33, 33, 33, 0.1)',
      primary50: '#2bbbad73',
      primary: '#2bbbad',
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      m16 === '' ||
      location === '' ||
      organization === '' ||
      budgetType === ''
    ) {
      setValidForm(false);
      setValidationMsg('Please fill the input fields');
      setTimeout(() => {
        setValidForm(true);
        setValidationMsg('');
      }, 3000);
    } else {
      setLoading(true);
      console.log(token, 'submitted');
      console.log(
        process.env.REACT_APP_ReCAPTCHA_Site_Key,
        process.env.REACT_APP_TEST
      );
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <Container>
      <Card className='my-3 p-3 hover-shadow'>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Row className='p-3'>
              <Col>
                <Form.Group controlId='M16Code'>
                  <Form.Control
                    type='number'
                    placeholder='M16 Code'
                    value={m16}
                    required
                    onChange={(e) => setM16(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Select
                  defaultValue={organization}
                  onChange={setOrganization}
                  placeholder='Organization'
                  isClearable
                  options={searchFormData.organization}
                  theme={(theme) => selectThemePrams(theme)}
                />
              </Col>
            </Row>
            <Row className='p-3'>
              <Col>
                <Select
                  defaultValue={location}
                  onChange={setLocation}
                  placeholder='Location'
                  isClearable
                  options={searchFormData.location}
                  theme={(theme) => selectThemePrams(theme)}
                />
              </Col>
              <Col>
                <Select
                  defaultValue={budgetType}
                  onChange={setBudgetType}
                  placeholder='Budget Type'
                  isClearable
                  options={searchFormData.budgetType}
                  theme={(theme) => selectThemePrams(theme)}
                />
              </Col>
            </Row>

            <Row>
              <Col></Col>
              <Col>
                {/* <div
                  className='g-recaptcha'
                  data-sitekey={process.env.REACT_APP_ReCAPTCHA_Site_Key}
                  data-size='invisible'
                  data-callback='onSubmit'
                /> */}
                {loading ? (
                  <Loader />
                ) : (
                  <Button
                    type='submit'
                    variant='light'
                    className='search-button custom-color'
                    block
                  >
                    Search
                    <i
                      style={{ marginLeft: '1rem' }}
                      className='fa fa-search'
                    />
                  </Button>
                )}
              </Col>
              <Col></Col>
            </Row>
            {!validForm && (
              <Row className='my-3'>
                <Col>
                  <Message variant='danger'>{validationMsg}</Message>
                </Col>
              </Row>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchForm;
