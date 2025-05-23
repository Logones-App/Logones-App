import { Card, Dropdown } from "react-bootstrap";
import { Profitearned } from "@/shared/data/charts/dashboard";

export default function Crm1ProfitCard() {
  return (
    <Card className="custom-card">
      <Card.Header className=" justify-content-between">
        <Card.Title>Profit Earned</Card.Title>
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
            <Dropdown.Item as="li" href="#!">
              Today
            </Dropdown.Item>
            <Dropdown.Item as="li" href="#!">
              This Week
            </Dropdown.Item>
            <Dropdown.Item as="li" href="#!">
              Last Week
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body className=" py-0 ps-0">
        <div id="crm-profits-earned">
          <Profitearned />
        </div>
      </Card.Body>
    </Card>
  );
}
