import { Card, Dropdown } from "react-bootstrap";
import { Revenueanalytics } from "@/shared/data/charts/dashboard";

export default function Crm1RevenueAnalytics() {
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>Revenue Analytics</Card.Title>
        <Dropdown className="">
          <Dropdown.Toggle
            aria-label="anchor"
            as="a"
            className="p-2 fs-12 text-muted no-caret"
            aria-expanded="false"
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
        <div className="content-wrapper">
          <div id="crm-revenue-analytics">
            <Revenueanalytics />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
