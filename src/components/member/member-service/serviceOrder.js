import React, { useState, useEffect } from 'react'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getServiceOrder } from '../../../pages/member/actions/index'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../../css/member/member-info.scss'

const ServiceOrder = (props) => {
  //狗狗基本資料
  // console.log('length: ', props.data.length)
  useEffect(() => {
    props.getServiceOrder()
  }, [])
  let ServiceOrderList = []

  for (let i = 0; i < props.data.length; i++) {
    const orderId = props.data[i].orderId
    console.log('oId', orderId)
    ServiceOrderList.push(
      <tr className="order_show" onClick="" id={i} name={i}>
        {/* <th scope="row">{i + 1}</th> */}
        <td>{i + 1}</td>
        <td>{props.data[i] ? props.data[i].sId : ''}</td>
        <td>{props.data[i] ? props.data[i].sTimeStart : ''}</td>
        <td>{props.data[i] ? props.data[i].sPrice : ''}</td>
        <td>
          名字: {props.data[i] ? props.data[i].dName : ''}
          <br />
          品種: {props.data[i] ? props.data[i].dBreed : ''}
          <br />
          犬齡: {props.data[i] ? props.data[i].dAge : ''}
        </td>
        <td>
          {props.data[i] ? props.data[i].mCity : ''}

          {props.data[i] ? props.data[i].mDist : ''}

          {props.data[i] ? props.data[i].mAddr : ''}
        </td>
        <td>
          {props.data[i].orderStsId === 'o02' ? (
            <div
              className="btn btn-primary allListBtn"
              onClick={() => updateServerService(orderId)}
            >
              完成訂單
            </div>
          ) : (
            <div className="btn btn-primary allListBtn">評論</div>
          )}
        </td>
      </tr>
    )

    async function updateServerService(orderId) {
      const req = new Request(
        `http://localhost:6001/member/Sorder/update/${orderId}`,
        {
          method: 'POST',
          credentials: 'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ orderStsId: 'o03' }),
        }
      )
      const res = await fetch(req)
      const data = await res.json()
      console.log('oId: ', orderId)
    }
  }
  return (
    <div class="tab-content content serviceOrderListContainer" id="content1">
      <div>
        <h3>
          保姆訂單查詢
          <br />
        </h3>
        <div class="row">
          <div class="col-md-8">
            <div class="card card-width">
              <div class="card-body">
                <form name="myForm" method="POST" enctype="multipart/form-data">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">保姆編號</th>
                        <th scope="col">時間</th>
                        <th scope="col">價格</th>
                        <th scope="col">狗狗狀況</th>
                        <th scope="col">地址</th>
                        <th scope="col">功能</th>
                      </tr>
                    </thead>
                    <tbody>{ServiceOrderList}</tbody>
                    <tfoot>
                      <tr></tr>
                    </tfoot>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}
const mapStateToProps = (store) => {
  return { data: store.getServiceOrder }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getServiceOrder }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceOrder)
