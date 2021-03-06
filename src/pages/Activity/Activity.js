import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FiSearch } from 'react-icons/fi'

//引入自己的css
import '../../css/activity/activity2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Component1 from './components/Component1'
import IconMenu from './components/IconMenu'
import ActCard from '../../components/activity/ActCard'

function ActivityMain(props) {
  const [activityClassData, setActivityClassData] = useState([])
  const [activityLectureData, setActivityLectureData] = useState([])
  const [activitySaleData, setActivitySaleData] = useState([])
  const [activityQueryData, setActivityQueryData] = useState([])
  const [search, setSearch] = useState('')

  //fetch搜尋資料
  async function getActQueryData() {
    // alert('aaa')
    // console.log('set', search)
    const req = new Request(
      `http://localhost:6001/activity_querySearch/?search=${search}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const res = await fetch(req)
    const data = await res.json()
    console.log('搜尋資料', data)

    setActivityQueryData(data.activity_event)
    // console.log(data.activity_event)
  }

  //   useEffect(() => {
  //     // console.log(search)
  //     // setSearch(search)
  //   }, [search])

  useEffect(() => {
    getActQueryData()
  }, [])

  function handleSearch(el) {
    if (el.charCode === 13) {
      setSearch(el.target.value)
      getActQueryData(search)
    }
  }

  function handleSearchType(type) {
    setSearch(type)
    getActQueryData(search)
  }

  useEffect(() => {
    // Your code here
    $('.event-icon .icon_time1').click(function () {
      $('.icon_dropdown-menu').removeClass('active')
      $('.icon_dropdown-menu1').addClass('active')
    })
    $('.event-icon .icon_categories').click(function () {
      $('.icon_dropdown-menu').removeClass('active')
      $('.icon_dropdown-menu2').addClass('active')
    })
    $('.event-icon .icon_location').click(function () {
      $('.icon_dropdown-menu').removeClass('active')
      $('.icon_dropdown-menu3').addClass('active')
    })
    $('.event-icon .icon_keyword').click(function () {
      $('.icon_dropdown-menu').removeClass('active')
      $('.icon_dropdown-menu4').addClass('active')
    })
    // $('.event-icon').mouseleave(function () {
    //   $('.icon_dropdown-menu').removeClass('active')
    // })
    $('.icon_dropdown-menu').mouseover(function () {
      $(this).addClass('active')
    })
    // $('.icon_dropdown-menu').mouseleave(function () {
    //   $(this).removeClass('active')
    // })
    // $('.activity-main2').click(function () {
    //   $('.icon_dropdown-menu').removeClass('active')
    // })

    //fetch課程資料
    async function getActClassData() {
      const req = new Request(
        `http://localhost:6001/activity_event/pageClass`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data)
      setActivityClassData(data)
    }
    getActClassData()

    //fetch講座資料
    async function getActLectureData() {
      const req = new Request(
        `http://localhost:6001/activity_event/pagelecture`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data)
      setActivityLectureData(data)
    }
    getActLectureData()

    //fetch優惠活動
    async function getActSaleData() {
      const req = new Request(`http://localhost:6001/activity_event/pagesale`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data)
      setActivitySaleData(data)
    }
    getActSaleData()

    // getActQueryData()
  }, [])
  return (
    <>
      <div className="">
        <Component1 className="component1"></Component1>
      </div>
      <div className="container activity-main2">
        <IconMenu />
        <hr />
        <div className="dropdown_menu menu1 row">
          <div className="col-6 icon_dropdown-menu icon_dropdown-menu1 px-4 pb-4">
            <div className="d-flex justify-content-around ">
              <Link>
                <div type="button" onClick={() => handleSearchType('課程')}>
                  全部
                </div>
              </Link>
              <Link>
                <div className="">進行中</div>
              </Link>
              <Link>
                <div type="button" onClick={() => handleSearchType('送小禮')}>
                  預告中
                </div>
              </Link>
              <Link>
                <div type="button" onClick={() => handleSearchType('優惠')}>
                  已截止
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown_menu menu2 row">
          <div className="col-6 icon_dropdown-menu icon_dropdown-menu2 px-4 pb-4">
            <div className="d-flex justify-content-around">
              <div>
                <Link type="button" onClick={() => handleSearchType('優惠')}>
                  優惠活動
                </Link>
              </div>
              <div className="">
                <Link type="button" onClick={() => handleSearchType('講座')}>
                  講座活動
                </Link>
              </div>
              <div className="">
                <Link type="button" onClick={() => handleSearchType('課程')}>
                  課程活動
                </Link>
              </div>
              <div className="">
                <Link type="button" onClick={() => handleSearchType('活動')}>
                  所有活動
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown_menu menu3 row">
          <div className="col-6 icon_dropdown-menu icon_dropdown-menu3 px-4 pb-4">
            <div className="d-flex justify-content-around">
              <Link>
                <div className="">台北市</div>
              </Link>
              <Link>
                <div className="">新北市</div>
              </Link>
              <Link>
                <div className="">其他縣市</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown_menu menu4 row">
          <div className="col-6 icon_dropdown-menu icon_dropdown-menu4 px-4">
            <div className="">
              <div className="input-group-prepend">
                {/* <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="button-addon1"
                  onClick={(search) => getActQueryData(search)}
                >
                  <IconContext.Provider
                    value={{
                      color: 'black',
                      size: '1.5rem',
                    }}
                  >
                    <FiSearch />
                  </IconContext.Provider>
                </button> */}
              </div>
              <input
                type="text"
                className="form-control search-input "
                placeholder="請輸入搜尋關鍵字"
                value={search}
                onKeyPress={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="new-activity">
          <h4>所有活動</h4>
          <div className="row">
            {activityQueryData.map((v, i) => (
              <div className="col-lg-4" key={i}>
                <ActCard data={v} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ActivityMain)
