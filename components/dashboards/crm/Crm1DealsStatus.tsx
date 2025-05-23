import { Card, Dropdown, Badge } from "react-bootstrap";

export default function Crm1DealsStatus() {
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>Deals Status</Card.Title>
        <Dropdown className="">
          <Dropdown.Toggle
            aria-label="anchor"
            as="a"
            className="p-2 fs-12 text-muted no-caret"
          >
            View All
            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul">
            <Dropdown.Item href="#">Today</Dropdown.Item>
            <Dropdown.Item href="#">This Week</Dropdown.Item>
            <Dropdown.Item href="#">Last Week</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <h4 className="fw-bold mb-0">4,289</h4>
          <div className="ms-2">
            <Badge bg=" bg-success-transparent">
              1.02<i className="ri-arrow-up-s-fill align-mmiddle ms-1"></i>
            </Badge>
            <span className="text-muted ms-2">compared to last week</span>
          </div>
        </div>
        <div className="progress-stacked progress-animate progress-xs mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "21%" }}
          ></div>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "26%" }}
          ></div>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "35%" }}
          ></div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "18%" }}
          ></div>
        </div>
        <ul className="list-unstyled mb-0 pt-2 crm-deals-status">
          <li className="primary">
            <div className="d-flex align-items-center justify-content-between">
              <div>Successful Deals</div>
              <div className="fs-12 text-muted">987 deals</div>
            </div>
          </li>
          <li className="info">
            <div className="d-flex align-items-center justify-content-between">
              <div>Pending Deals</div>
              <div className="fs-12 text-muted">1,073 deals</div>
            </div>
          </li>
          <li className="warning">
            <div className="d-flex align-items-center justify-content-between">
              <div>Rejected Deals</div>
              <div className="fs-12 text-muted">1,674 deals</div>
            </div>
          </li>
          <li className="success">
            <div className="d-flex align-items-center justify-content-between">
              <div>Upcoming Deals</div>
              <div className="fs-12 text-muted">921 deals</div>
            </div>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}
