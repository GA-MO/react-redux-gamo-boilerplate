import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as Action from '../actions/action'

// State
function mapStateToProps(state) {
  return {
    // myState: state.myState,
  }
}

// Action
const actions = {
  // myActionName: Action.myActionName,
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class StyleGuide extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    return (
      <div className='body-style-guide'>
        <div className='container'>
          {
            // =======================================================================
            // FONT STYLE
            // =======================================================================
          }
          <div className='section-style'>
            <h1>Font style</h1>
            <div className='font-title-big'>
              Lorem Ipsum is simply dummy text of the printing
            </div>
            <div className='font-title'>
              Lorem Ipsum is simply dummy text of the printing
            </div>
            <div className='font-desc-big'>
              Lorem Ipsum is simply dummy text of the printing
            </div>
            <div className='font-desc'>
              Lorem Ipsum is simply dummy text of the printing
            </div>
            <div className='font-desc-small'>
              Lorem Ipsum is simply dummy text of the printing
            </div>
            <br />
            <pre>
              <code className='html'>
                {`
                  <div className='font-title-big'></div>
                  <div className='font-title'></div>
                  <div className='font-desc-big'></div>
                  <div className='font-desc'></div>
                  <div className='font-desc-small'></div>
                `}
              </code>
            </pre>
          </div>
          <br />
          {
            // =======================================================================
            // TEXT LABEL
            // =======================================================================
          }
          <div className='section-style'>
            <h1>Text Label</h1>
            <p>
              Add Class
              {' '}
              <code>.black</code>
              ,
              {' '}
              <code>.gray</code>
              ,
              {' '}
              <code>.red</code>
              ,
              {' '}
              <code>.green</code>
              {' '}
              or
              {' '}
              <code>.blue</code>
              {' '}
              for button color.
            </p>
            <span className='text-label black'>Label</span>
            <span className='text-label'>Label</span>
            <span className='text-label red'>Label</span>
            <span className='text-label green'>Label</span>
            <span className='text-label blue'>Label</span>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet,
              {' '}
              <span className='text-label red'>consectetur</span>
              {' '}
              adipisicing elit. Sunt iusto assumenda voluptatibus perferendis obcaecati blanditiis recusandae doloremque dolorem excepturi, dolorum officia repellendus dolor eum fugit nulla. Ea alias quaerat, minus!
            </p>
            <br />
            <pre>
              <code>
                {`<span className='text-label'>Label</span>`}
              </code>
            </pre>
          </div>
          <br />
          {
            // =======================================================================
            // BOX MESSAGE
            // =======================================================================
          }
          <div className='section-style'>
            <h1>Box Message</h1>
            <p>
              Add Class
              {' '}
              <code>.loading</code>
              ,
              {' '}
              <code>.warning</code>
              ,
              {' '}
              <code>.error</code>
              , and
              {' '}
              <code>.success</code>
              {' '}
              for box color.
            </p>
            <div className='box-message-info'>
              Helow welcom to my site.
            </div>
            <div className='box-message-info loading'>
              Helow welcom to my site.
            </div>
            <div className='box-message-info warning'>
              Helow welcom to my site.
            </div>
            <div className='box-message-info error'>
              Helow welcom to my site.
            </div>
            <div className='box-message-info success'>
              Helow welcom to my site.
            </div>
            <br />
            <pre>
              <code>
                {`<span className='text-label'>Label</span>`}
              </code>
            </pre>
          </div>
          <br />
          {
            // =======================================================================
            // BUTTON STYLE
            // =======================================================================
          }
          <div className='section-style'>
            <h1>Button</h1>
            <br />
            <h4>Button default</h4>
            <p>
              Add Class
              {' '}
              <code>.black</code>
              ,
              {' '}
              <code>.gray</code>
              ,
              {' '}
              <code>.red</code>
              ,
              {' '}
              <code>.green</code>
              {' '}
              or
              {' '}
              <code>.blue</code>
              {' '}
              for button color.
            </p>
            <button className='button'>Button</button>
            <a href='#' className='button black'>Button</a>
            <a href='#' className='button gray'>Button</a>
            <a href='#' className='button red'>Button</a>
            <a href='#' className='button green'>Button</a>
            <a href='#' className='button blue'>Button</a>
            <br />
            <br />
            <pre>
              <code>
                {`<button className='button'>Button</button>`}
              </code>
            </pre>
            <br />
            <h4>Button with border</h4>
            <button className='button-outline'>Button</button>
            <a href='#' className='button-outline black'>Button</a>
            <a href='#' className='button-outline gray'>Button</a>
            <a href='#' className='button-outline red'>Button</a>
            <a href='#' className='button-outline green'>Button</a>
            <a href='#' className='button-outline blue'>Button</a>
            <br />
            <br />
            <pre>
              <code>
                {`<button className='button-outline'>Button</button>`}
              </code>
            </pre>
            <br />
            <h4>Size</h4>
            <p>
              Add Class
              {' '}
              <code>.large</code>
              ,
              {' '}
              <code>.small</code>
              {' '}
              or
              {' '}
              <code>.xsmall</code>
              {' '}
              for additional sizes.
            </p>
            <p><button className='button red large'>Large</button></p>
            <p><button className='button red'>Default</button></p>
            <p><button className='button red small'>Small</button></p>
            <p><button className='button red xsmall'>Extra Small</button></p>
            <br />
            <br />
            <h4>Disabled state</h4>
            <p>
              Add the
              {' '}
              <code>disabled</code>
              {' '}
              attribute and class
              {' '}
              <code>.disabled</code>
              {' '}
              to buttons.
            </p>
            <button className='button red disabled' disabled>Button</button>
            <button className='button-outline red disabled' disabled>
              Button
            </button>
            <br />
            <br />
            <br />
            {
              // =======================================================================
              // BUTTON STYLE INLINE
              // =======================================================================
            }
            <h4>Button inline</h4>
            <div className='button-inline'>
              <button className='button red'> Button </button>
              <a href='#' className='button green'> Button </a>
              <a href='#' className='button blue'> Button </a>
              <a href='#' className='button gray'> Button </a>
            </div>
            <br />
            <pre>
              <code className='html'>
                {`
                  <div className='button-inline'>
                    <a href='#' className='button green'> Next </a>
                    <a href='#' className='button blue'> OK </a>
                    <a href='#' className='button gray'> Cancel </a>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // BUTTON STYLE WITH ICON
              // =======================================================================
            }
            <h4>Button with icon</h4>
            <p>
              Get more icons
              {' '}
              <a
                href='http://fontawesome.io/icons/'
                className='link'
                target='_blank'
              >
                Font Awesome icon
              </a>
            </p>
            <button className='button red'>
              <i className='fa fa-trash' aria-hidden='true' /> Close{' '}
            </button>
            <br />
            <br />
            <pre>
              <code>
                {`<button className='button red'><i className='fa fa-trash'></i> Close</button>`}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // BUTTON STYLE INLINE GROUP
              // =======================================================================
            }
            <h4>Button inline group</h4>
            <div className='button-group'>
              <a href='#' className='button red active'> Button </a>
              <a href='#' className='button red'> Button </a>
              <a href='#' className='button red'> Button </a>
            </div>
            <br />
            <div className='button-group'>
              <a href='#' className='button-outline red active'> Button </a>
              <a href='#' className='button-outline red'> Button </a>
              <a href='#' className='button-outline red'> Button </a>
            </div>
            <br />
            <pre>
              <code className='html'>
                {`
                  <div className='button-group'>
                    <a href='#' className='button'> Button </a>
                    <a href='#' className='button'> Button </a>
                    <a href='#' className='button'> Button </a>
                  </div>
                `}
              </code>
            </pre>
            <br />
            <br />
            <h4>Button inline group Vertical</h4>
            <div className='button-group vertical'>
              <a href='#' className='button-outline red active'> Button </a>
              <a href='#' className='button-outline red'> Button </a>
              <a href='#' className='button-outline red'> Button </a>
            </div>
            <br />
            <pre>
              <code className='html'>
                {`
                  <div className='button-group vertical'>
                    <a href='#' className='button'> Button </a>
                    <a href='#' className='button'> Button </a>
                    <a href='#' className='button'> Button </a>
                  </div>
                `}
              </code>
            </pre>
            <br />
          </div>
          {
            // =======================================================================
            // FORM STYLE
            // =======================================================================
          }
          <div className='section-style'>
            <h1>Form style</h1>
            <div className='row'>
              <div className='D-4'>
                <div className='box-form-input'>
                  <label className='form-label'>Text</label>
                  <div className='wrap-form-input'>
                    <input className='form-input' placeholder='input text' />
                  </div>
                </div>
              </div>
              <div className='D-4'>
                <div className='box-form-input'>
                  <label className='form-label'>Select</label>
                  <div className='wrap-form-input'>
                    <select className='form-input'>
                      <option value='#'>option 1</option>
                      <option value='#'>option 2</option>
                      <option value='#'>option 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='D-4'>
                <div className='box-form-input'>
                  <label className='form-label'>Label</label>
                  <div className='wrap-form-input'>
                    <input
                      className='form-input'
                      placeholder='input disabled'
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <pre>
              <code className='html'>
                {`
                  <div className='box-form-input'>
                    <label className='form-label'>Label</label>
                    <div className='wrap-form-input'>
                      <input className='form-input' placeholder='input text..' />
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // FORM WITH VALIDATION
              // =======================================================================
            }
            <b>Form validation</b>
            <p>
              Add Class
              {' '}
              <code>.loading</code>
              ,
              {' '}
              <code>.warning</code>
              ,
              {' '}
              <code>.error</code>
              {' '}
              or
              {' '}
              <code>.success</code>
              {' '}
              for input status.
            </p>
            <br />
            <div className='row'>
              <div className='D-3'>
                <div className='box-form-input'>
                  <label className='form-label'>Text</label>
                  <div className='wrap-form-input loading'>
                    <input className='form-input' placeholder='input text' />
                  </div>
                </div>
              </div>
              <div className='D-3'>
                <div className='box-form-input'>
                  <label className='form-label'>Text</label>
                  <div className='wrap-form-input error'>
                    <input className='form-input' placeholder='input text' />
                    <div className='validation-label'>
                      Validation message field
                    </div>
                  </div>
                </div>
              </div>
              <div className='D-3'>
                <div className='box-form-input'>
                  <label className='form-label'>Text</label>
                  <div className='wrap-form-input warning'>
                    <input className='form-input' placeholder='input text' />
                    <div className='validation-label'>
                      Validation message field
                    </div>
                  </div>
                </div>
              </div>
              <div className='D-3'>
                <div className='box-form-input'>
                  <label className='form-label'>Text</label>
                  <div className='wrap-form-input success show-icon'>
                    <input className='form-input' placeholder='input text' />
                    <div className='validation-label'>
                      Validation message field
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <pre>
              <code className='html'>
                {`
                  // Class name = loading, error, warning, success

                  <div className='box-form-input'>
                    <label className='form-label'>Text</label>
                    <div className='wrap-form-input error'>
                      <input className='form-input' placeholder='input text' />
                      <div className='validation-label'>Validation message field</div>
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // FORM INLINE
              // =======================================================================
            }
            <b>Form inline</b>
            <br />
            <br />
            <div className='box-form-input inline'>
              <label className='form-label'>Text</label>
              <div className='wrap-form-input'>
                <input className='form-input' placeholder='input text' />
              </div>
              <label className='form-label'>Text</label>
              <div className='wrap-form-input'>
                <input className='form-input' placeholder='input text' />
              </div>
            </div>
            <pre>
              <code className='html'>
                {`
                  <div className='box-form-input inline'>
                    <label className='form-label'>Text</label>
                    <div className='wrap-form-input'>
                      <input className='form-input' placeholder='input text' />
                    </div>
                    <label className='form-label'>Text</label>
                    <div className='wrap-form-input'>
                      <input className='form-input' placeholder='input text' />
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // FORM INPUT
              // =======================================================================
            }
            <b>Form input group</b>
            <br />
            <br />
            <div className='box-form-input-group'>
              <div className='box-form-input'>
                <label className='form-label'>Text</label>
                <div className='wrap-form-input'>
                  <input className='form-input' placeholder='input text' />
                </div>
              </div>
              <div className='box-form-input'>
                <label className='form-label'>Text</label>
                <div className='wrap-form-input'>
                  <input className='form-input' placeholder='input text' />
                </div>
              </div>
              <div className='box-form-input'>
                <label className='form-label'>Text</label>
                <div className='wrap-form-input'>
                  <input className='form-input' placeholder='input text' />
                </div>
              </div>
            </div>
            <div className='box-form-input-group'>
              <div className='box-form-input'>
                <div className='wrap-form-input'>
                  <input className='form-input' placeholder='input text' />
                </div>
              </div>
              <div className='box-form-input'>
                <div className='wrap-form-input'>
                  <input className='form-input' placeholder='input text' />
                </div>
              </div>
              <div className='box-form-input'>
                <div className='wrap-form-input'>
                  <input className='form-input' placeholder='input text' />
                </div>
              </div>
            </div>
            <pre>
              <code className='html'>
                {`
                  <div className='box-form-input-group'>
                    <div className='box-form-input'>
                      <label className='form-label'>Text</label>
                      <div className='wrap-form-input'>
                        <input className='form-input' placeholder='input text' />
                      </div>
                    </div>
                    <div className='box-form-input'>
                      <label className='form-label'>Text</label>
                      <div className='wrap-form-input'>
                        <input className='form-input' placeholder='input text' />
                      </div>
                    </div>
                    <div className='box-form-input'>
                      <label className='form-label'>Text</label>
                      <div className='wrap-form-input'>
                        <input className='form-input' placeholder='input text' />
                      </div>
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // INPUT WIHT BUTTON
              // =======================================================================
            }
            <b>Input with button</b>
            <br />
            <br />
            <div className='row'>
              <div className='D-4'>
                <div className='box-input-with-button'>
                  <div className='wrap-form-input'>
                    <input
                      type='text'
                      className='form-input'
                      placeholder='Input text...'
                    />
                  </div>
                  <span className='input-group-button'>
                    <button className='button red small' type='button'>
                      Button
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <pre>
              <code className='html'>
                {`
                  <div className='box-input-with-button'>
                    <div className='wrap-form-input'>
                      <input type='text' className='form-input' placeholder='Input text...' />
                    </div>
                    <span className='input-group-button'>
                      <button className='button red small' type='button'>Button</button>
                    </span>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // RADIO INPUT
              // =======================================================================
            }
            <b>Input radio</b>
            <br />
            <br />
            <div className='input-radio'>
              <label>
                <input type='radio' name='radio' />
                <span className='input' />
              </label>
            </div>
            <br />
            <br />
            <div className='form-input-radio'>
              <label>
                <input type='radio' name='optradio' checked />Input radio
                <span className='input' />
              </label>
              <label>
                <input type='radio' name='optradio' />Input radio
                <span className='input' />
              </label>
            </div>
            <div className='form-input-radio inline'>
              <label>
                <input type='radio' name='optradio' checked />Input radio inline
                <span className='input' />
              </label>
              <label>
                <input type='radio' name='optradio' />Input radio inline
                <span className='input' />
              </label>
            </div>
            <pre>
              <code className='html'>
                {`
                  <div className='input-radio'>
                    <label>
                      <input type='radio' name='radio' />
                      <span className='input'></span>
                    </label>
                  </div>

                  // Form

                  <div className='form-input-radio'>
                    <label>
                      <input type='radio' name='radio' checked />Input radio
                      <span className='input'></span>
                    </label>
                    <label>
                      <input type='radio' name='radio' />Input radio
                      <span className='input'></span>
                    </label>
                  </div>

                  // Inline

                  <div className='form-input-radio inline'>
                    <label>
                      <input type='radio' name='radio' checked />Input radio inline
                      <span className='input'></span>
                    </label>
                    <label>
                      <input type='radio' name='optradio' />Input radio inline
                      <span className='input'></span>
                    </label>
                  </div>
                `}
              </code>
            </pre>
            <br />
            {
              // =======================================================================
              // CHECKBOX INPUT
              // =======================================================================
            }
            <b>Input checkbox</b>
            <br />
            <br />
            <div className='input-checkbox'>
              <label>
                <input type='checkbox' name='checkbox' />
                <span className='input' />
              </label>
            </div>
            <br />
            <div className='form-input-checkbox'>
              <label>
                <input type='checkbox' name='checkbox' />Input checkbox
                <span className='input' />
              </label>
              <label>
                <input type='checkbox' name='checkbox' />Input checkbox
                <span className='input' />
              </label>
            </div>
            <div className='form-input-checkbox inline'>
              <label>
                <input type='checkbox' name='checkbox' />Input checkbox inline
                <span className='input' />
              </label>
              <label>
                <input type='checkbox' name='checkbox' />Input checkbox inline
                <span className='input' />
              </label>
            </div>
            <pre>
              <code className='html'>
                {`
                  <div className='input-checkbox'>
                    <label>
                      <input type='checkbox' name='checkbox' />
                      <span className='input'></span>
                    </label>
                  </div>

                  // Form

                  <div className='form-input-checkbox'>
                    <label>
                      <input type='checkbox' name='checkbox' />Input checkbox
                      <span className='input'></span>
                    </label>
                    <label>
                      <input type='checkbox' name='checkbox' />Input checkbox
                      <span className='input'></span>
                    </label>
                  </div>

                  // Inline

                  <div className='form-input-radio inline'>
                    <label>
                      <input type='checkbox' name='checkbox' />Input checkbox inline
                      <span className='input'></span>
                    </label>
                    <label>
                      <input type='radio' name='optradio' />Input radio inline
                      <span className='input'></span>
                    </label>
                  </div>
                `}
              </code>
            </pre>
          </div>
          <br />
        </div>
      </div>
    )
  }
}
