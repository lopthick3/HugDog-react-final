import React from 'react'
import $ from 'jquery'
import Draggable from 'react-draggable'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../css/member/pokemon.scss'
class App extends React.Component {
  componentDidMount() {
    //需要搭配箭頭函式才能使用list
    $('#close').click(function() {
      $('.robot-container')
        .removeClass('appear')
        .addClass('disappear')
      $('.check')
        .removeClass('disappear')
        .addClass('appear')
      $('.coupon').css('display', 'none')
      var $src = $('#close').attr('src')
    })

    // $(function() {
    //   $('.draggable').draggable()
    // })

    $('.robot').click(function() {
      // $(".help").toggle("appear")
      $('.coupon').toggle('disappear')
    })

    const speed = '5'
    $('#speed').val(
      '您的位置為: (' +
        $('.box').css('top') +
        ' ,' +
        $('.box').css('left') +
        ')'
    )
    $(document).ready(function() {
      animateDiv()
    })
    $(document).ready(function() {
      animateDiv()
    })

    function makeNewPosition($container) {
      // Get viewport dimensions (remove the dimension of the div)
      $container = $container || $(window)
      var h = $container.height() - 50
      var w = $container.width() - 50

      var nh = Math.floor(Math.random() * h)
      var nw = Math.floor(Math.random() * w)

      return [nh, nw]
    }

    function animateDiv() {
      var $target = $('.a')
      var newq = makeNewPosition($target.parent())
      var oldq = $target.offset()
      var speed = calcSpeed([oldq.top, oldq.left], newq)

      $('.a').animate(
        {
          top: newq[0],
          left: newq[1],
        },
        speed,
        function() {
          animateDiv()
        }
      )
    }

    function calcSpeed(prev, next) {
      var x = Math.abs(prev[1] - next[1])
      var y = Math.abs(prev[0] - next[0])

      var greatest = x > y ? x : y

      var speedModifier = 0.1

      var speed = Math.ceil(greatest / speedModifier)

      return speed
    }
  }
  render() {
    return (
      <>
        <Draggable
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[1, 1]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          {/* <div>
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div> */}
          <div className="container pokemon handle" id="container">
            <img
              src="../../images/member/check.png"
              alt=""
              className="check disappear"
            />
            <div className="card coupon disappear">我是折價券</div>
            <div id="draggable" className="draggable">
              <div className="robot-container a" id="a">
                <img
                  src="../../images/member/close.png"
                  alt=""
                  id="close"
                  className="close"
                />
                <div className="robot" id="robot">
                  <ul className="list-group help">
                    <a href="https://www.google.com.tw/">
                      <li class="list-group-item active">
                        請問我有什麼可以幫您的嗎?
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      </>
    )
  }
}

export default App
