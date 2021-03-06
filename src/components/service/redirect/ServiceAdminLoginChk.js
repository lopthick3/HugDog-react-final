import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { FiAlertTriangle } from 'react-icons/fi'

function ServiceAdminLoginChk(props) {
  return (
    <>
      <div className="Service ServiceLoginChk">
        <div className="container pt-3 pb-5">
          <Row>
            <Col>
              <div className="p-5 text-center">
                <h4 className="mb-3 text-danger">
                  <FiAlertTriangle /> 您尚未登入會員
                </h4>
                <h6 className="mb-3 text-muted">請登入使用保姆服務</h6>
                <Link
                  className="btn btn-theme"
                  to={{
                    pathname: '/login',
                    state: { from: props.location.pathname },
                  }}
                >
                  前往登入
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default withRouter(ServiceAdminLoginChk)
