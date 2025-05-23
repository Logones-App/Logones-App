import { Card, Dropdown } from "react-bootstrap";
import { Candidatesdatas } from "@/shared/data/charts/dashboard";

export default function Crm1LeadsBySource() {
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>Leads By Source</Card.Title>
        <Dropdown className="">
          <Dropdown.Toggle
            aria-label="anchor"
            as="a"
            className="btn btn-icon btn-sm btn-light no-caret"
            aria-expanded="false"
          >
            <i className="fe fe-more-vertical"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul">
            <Dropdown.Item as="li" href="#">
              Week
            </Dropdown.Item>
            <Dropdown.Item as="li" href="#">
              Month
            </Dropdown.Item>
            <Dropdown.Item as="li" href="#">
              Link
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body className="overflow-hidden p-0">
        <div className="leads-source-chart d-flex align-items-center justify-content-center ">
          <Candidatesdatas />
          <div className="lead-source-value">
            <span className="d-block fs-14">Total</span>
            <span className="d-block fs-25 fw-bold">4,145</span>
          </div>
        </div>
        {/* ...autres sous-blocs à ajouter ici si besoin... */}
      </Card.Body>
    </Card>
  );
}
