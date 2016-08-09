import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'

class StyleGuide extends React.Component {
  static propTypes = {
    // name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="container text-center">
        <div className="D-8 text-left">
          <div className="section-style">
            <h1>Font style</h1>
            <div className="font-title-big">24px - Lorem Ipsum is simply dummy text of the printing</div>
            <div className="font-title">20px - Lorem Ipsum is simply dummy text of the printing</div>
            <div className="font-desc-big">18px - Lorem Ipsum is simply dummy text of the printing</div>
            <div className="font-desc">16px - Lorem Ipsum is simply dummy text of the printing</div>
            <div className="font-desc-small">14px - Lorem Ipsum is simply dummy text of the printing</div>
            <br />
            <pre>
              <code className="html">
                {`
                  <div class="font-title-big"></div>
                  <div class="font-title"></div>
                  <div class="font-desc-big"></div>
                  <div class="font-desc"></div>
                  <div class="font-desc-small"></div>
                `}
              </code>
            </pre>
          </div>
          <br />
          <div className="section-style">
            <h1>Button</h1>
            <b>Button 1</b>
            <br />
            <br />
            <a href="" className="button"> Default </a>
            <a href="" className="button gold"> Gold </a>
            <button className="button red"> Close </button>
            <a href="" className="button green"> Next </a>
            <a href="" className="button blue"> OK </a>
            <a href="" className="button gray"> Cancel </a>
            <a href="" className="button disable"> disable </a>
            <br />
            <br />
            <a href="" className="button-outline"> Default </a>
            <a href="" className="button-outline gold"> Gold </a>
            <button className="button-outline red"> Close </button>
            <a href="" className="button-outline green"> Next </a>
            <a href="" className="button-outline blue"> OK </a>
            <a href="" className="button-outline gray"> Cancel </a>
            <a href="" className="button-outline disable"> disable </a>
            <br />
            <br />
            <a href="" className="button small"> Default </a>
            <a href="" className="button gold small"> Gold </a>
            <button className="button red small"> Close </button>
            <a href="" className="button green small"> Next </a>
            <a href="" className="button blue small"> OK </a>
            <a href="" className="button gray small"> Cancel </a>
            <a href="" className="button disable small"> disable </a>
            <br />
            <br />
            <button className="button red small full"> Close </button>
            <br />
            <pre>
              <code className="html">
                {`
                  <button class="button red"> Close </button>
                  <a href="" class="button green"> Next </a>
                  <a href="" class="button-outline green"> Next </a>

                  // small

                  <a href="" class="button small"> OK </a>

                  // full
                  
                  <a href="" class="button full"> OK </a>
                `}
              </code>
            </pre>
            <br />
            <b>Button inline</b>
            <br />
            <br />
            <div className="button-inline">
              <a href="" className="button-outline small"> Default </a>
              <a href="" className="button-outline gold small"> Gold </a>
              <button className="button red small"> Close </button>
              <a href="" className="button green small"> Next </a>
              <a href="" className="button blue small"> OK </a>
              <a href="" className="button gray small"> Cancel </a>
              <a href="" className="button disable small"> disable </a>
            </div>
            <br />
            <pre>
              <code className="html">
                {`
                  <div class="button-inline">
                    <a href="" class="button green"> Next </a>
                    <a href="" class="button blue"> OK </a>
                    <a href="" class="button gray"> Cancel </a>
                    <a href="" class="button disable"> disable </a>
                  </div>
                `}
              </code>
            </pre>
            <br />
            <b>Button with icon</b>
            <br />
            <a href="http://fontawesome.io/icons/" target="_blank">Font Awesome icon</a>
            <br />
            <br />
            <button className="button red"><i className="fa fa-trash" aria-hidden="true"></i> Close </button>
            <br />
            <br />
            <pre>
              <code className="html">
                {`
                  <button class="button red"><i class="fa fa-trash"></i> Close </button>
                  <a class="button red"><i class="fa fa-trash"></i> Close </a>
                `}
              </code>
            </pre>
            <br />
            <b>Button inline group</b>
            <br />
            <br />
            <div className="button-group">
              <a href="" className="button red"> Button </a>
              <a href="" className="button red"> Button </a>
              <a href="" className="button red"> Button </a>
            </div>
            <br />
            <div className="button-group">
              <a href="" className="button-outline red"> Button </a>
              <a href="" className="button-outline red"> Button </a>
              <a href="" className="button-outline red"> Button </a>
            </div>
            <br />
            <div className="button-group">
              <a href="" className="button-outline red"> Button </a>
              <a href="" className="button red"> Button </a>
            </div>
            <br />
            <pre>
              <code className="html">
                {`
                  <div class="button-group">
                    <a href="" class="button"> Button </a>
                    <a href="" class="button"> Button </a>
                    <a href="" class="button"> Button </a>
                  </div>
                `}
              </code>
            </pre>
          </div>
          <br />
          <div className="section-style">
            <h1>Form style</h1>
            <div className="row">
              <div className="D-4">
                <div className="box-form-input">
                  <label className="form-label">Text</label>
                  <input className="form-input" placeholder="input text" />
                </div>
              </div>
              <div className="D-4">
                <div className="box-form-input">
                  <label className="form-label">Select</label>
                  <select className="form-input">
                    <option value="" >option 1</option>
                    <option value="" >option 2</option>
                    <option value="" >option 3</option>
                  </select>
                </div>
              </div>
              <div className="D-4">
                <div className="box-form-input">
                  <label className="form-label">Label</label>
                  <input className="form-input" placeholder="input disabled" disabled />
                </div>
              </div>
            </div>
            <pre>
              <code className="html">
                {`
                  <div class="box-form-input">
                    <label class="form-label">Text</label>
                    <input class="form-input" placeholder="input text" />
                  </div>
                `}
              </code>
            </pre>
            <br />
            <b>Form inline</b>
            <br />
            <br />
            <div className="box-form-input inline">
              <input className="form-input" placeholder="input text" />
              <label className="form-label">Text</label>
              <input className="form-input" placeholder="input text" />
            </div>
            <pre>
              <code className="html">
                {`
                  <div class="box-form-input inline">
                    <input class="form-input" placeholder="input text" />
                    <label class="form-label">Text</label>
                    <input class="form-input" placeholder="input text" />
                  </div>
                `}
              </code>
            </pre>
            <br />
            <b>Form input group</b>
            <br />
            <br />
            <div className="box-form-input-group">
              <input className="form-input" placeholder="input text" />
              <input className="form-input" placeholder="input text" />
              <input className="form-input" placeholder="input text" />
            </div>
            <pre>
              <code className="html">
                {`
                  <div class="box-form-input-group">
                    <input class="form-input" placeholder="input text" />
                    <input class="form-input" placeholder="input text" />
                    <input class="form-input" placeholder="input text" />
                  </div>
                `}
              </code>
            </pre>
            <br />
            <b>Input with button</b>
            <br />
            <br />
            <div className="row">
              <div className="D-4">
                <div className="box-input-with-button">
                  <input type="text" className="form-input" placeholder="Input text..." />
                  <span className="input-group-button">
                    <button className="button red small" type="button">Button</button>
                  </span>
                </div>
              </div>
            </div>
            <pre>
              <code className="html">
                {`
                  <div class="box-input-with-button">
                    <input type="text" class="form-input" placeholder="Input text..." />
                    <span class="input-group-button">
                      <button class="button red small" type="button">Button</button>
                    </span>
                  </div>
                `}
              </code>
            </pre>
            <br />
            <b>Input radio</b>
            <br />
            <br />
            <div className="input-radio">
              <label>
                <input type="radio" name="radio" />
                <span className="input"></span>
              </label>
            </div>
            <br />
            <br />
            <div className="form-input-radio">
              <label>
                <input type="radio" name="optradio" checked />Input radio
                <span className="input"></span>
              </label>
              <label>
                <input type="radio" name="optradio" />Input radio
                <span className="input"></span>
              </label>
            </div>
            <div className="form-input-radio inline">
              <label>
                <input type="radio" name="optradio" checked />Input radio inline
                <span className="input"></span>
              </label>
              <label>
                <input type="radio" name="optradio" />Input radio inline
                <span className="input"></span>
              </label>
            </div>
            <pre>
              <code className="html">
                {`
                  <div className="input-radio">
                    <label>
                      <input type="radio" name="radio" />
                      <span className="input"></span>
                    </label>
                  </div>

                  // Form

                  <div class="form-input-radio">
                    <label>
                      <input type="radio" name="radio" checked />Input radio
                      <span class="input"></span>
                    </label>
                    <label>
                      <input type="radio" name="radio" />Input radio
                      <span class="input"></span>
                    </label>
                  </div>

                  // Inline

                  <div class="form-input-radio inline">
                    <label>
                      <input type="radio" name="radio" checked />Input radio inline
                      <span class="input"></span>
                    </label>
                    <label>
                      <input type="radio" name="optradio" />Input radio inline
                      <span class="input"></span>
                    </label>
                  </div>
                `}
              </code>
            </pre>
            <br />
            <b>Input checkbox</b>
            <br />
            <br />
            <div className="input-checkbox">
              <label>
                <input type="checkbox" name="checkbox" />
                <span className="input"></span>
              </label>
            </div>
            <br />
            <div className="form-input-checkbox">
              <label>
                <input type="checkbox" name="checkbox" />Input checkbox
                <span className="input"></span>
              </label>
              <label>
                <input type="checkbox" name="checkbox" />Input checkbox
                <span className="input"></span>
              </label>
            </div>
            <div className="form-input-checkbox inline">
              <label>
                <input type="checkbox" name="checkbox" />Input checkbox inline
                <span className="input"></span>
              </label>
              <label>
                <input type="checkbox" name="checkbox" />Input checkbox inline
                <span className="input"></span>
              </label>
            </div>
            <pre>
              <code className="html">
                {`
                  <div className="input-checkbox">
                    <label>
                      <input type="checkbox" name="checkbox" />
                      <span className="input"></span>
                    </label>
                  </div>

                  // Form

                  <div class="form-input-checkbox">
                    <label>
                      <input type="checkbox" name="checkbox" />Input checkbox
                      <span class="input"></span>
                    </label>
                    <label>
                      <input type="checkbox" name="checkbox" />Input checkbox
                      <span class="input"></span>
                    </label>
                  </div>

                  // Inline

                  <div class="form-input-radio inline">
                    <label>
                      <input type="checkbox" name="checkbox" />Input checkbox inline
                      <span class="input"></span>
                    </label>
                    <label>
                      <input type="radio" name="optradio" />Input radio inline
                      <span class="input"></span>
                    </label>
                  </div>
                `}
              </code>
            </pre>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(StyleGuide)
