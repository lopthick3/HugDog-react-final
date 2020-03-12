import React, { useState, useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import ServiceQuerySearch from '../../components/service/ServiceQuerySearch'
import ServiceQueryList from '../../components/service/ServiceQueryList'
import ServiceQueryMap from '../../components/service/ServiceQueryMap'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceQuery(props) {
  //讀取狀態
  // const [isloaded, setIsloaded] = useState(false)

  // useEffect(() => {
  //   // setTimeout(setIsloaded(true), 3000)
  //   setTimeout(() => {
  //     setIsloaded(true)
  //   }, 500)
  // }, [])

  return (
    <>
      <div className="Service ServiceQuery">
        <div className="container py-3">
          <Row>
            <Col className="mb-5">
              <ServiceQuerySearch />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ServiceQueryList />
            </Col>
            <Col md={6} className="d-none d-md-block">
              <ServiceQueryMap />
            </Col>
          </Row>
        </div>
        {/* <div className={`loading-bg ${isloaded ? 'fadeOut' : ''}`}>
          <Spinner animation="grow" variant="secondary" className="spinner" />
        </div> */}
      </div>
    </>
  )
}

export default ServiceQuery
