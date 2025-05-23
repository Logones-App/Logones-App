import { Card, Dropdown } from "react-bootstrap";

export default function Crm1TopDeals() {
  return (
    <Card className="overflow-hidden custom-card">
      <Card.Header className=" justify-content-between">
        <Card.Title>Top Deals</Card.Title>
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
              Year
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>
        <ul className="list-unstyled crm-top-deals mb-0">
          <li>
            <div className="d-flex align-items-top flex-wrap">
              <div className="me-2">
                <span className="avatar avatar-sm avatar-rounded">
                  <img src="/assets/images/faces/10.jpg" alt="" />
                </span>
              </div>
              <div className="flex-fill">
                <p className="fw-semibold mb-0">Michael Jordan</p>
                <span className="text-muted fs-12">
                  michael.jordan@example.com
                </span>
              </div>
              <div className="fw-semibold fs-15">$2,893</div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-top flex-wrap">
              <div className="me-2">
                <span className="avatar avatar-sm avatar-rounded bg-warning-transparent fw-semibold">
                  EK
                </span>
              </div>
              <div className="flex-fill">
                <p className="fw-semibold mb-0">Emigo Kiaren</p>
                <span className="text-muted fs-12">amigo.kiaren@gmail.com</span>
              </div>
              <div className="fw-semibold fs-15">$4,289</div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-top flex-wrap">
              <div className="me-2">
                <span className="avatar avatar-sm avatar-rounded">
                  <img src="/assets/images/faces/12.jpg" alt="" />
                </span>
              </div>
              <div className="flex-fill">
                <p className="fw-semibold mb-0">Randy Origoan</p>
                <span className="text-muted fs-12">
                  randy.origoan@gmail.com
                </span>
              </div>
              <div className="fw-semibold fs-15">$6,347</div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-top flex-wrap">
              <div className="me-2">
                <span className="avatar avatar-sm avatar-rounded bg-success-transparent fw-semibold">
                  GP
                </span>
              </div>
              <div className="flex-fill">
                <p className="fw-semibold mb-0">George Pieterson</p>
                <span className="text-muted fs-12">
                  george.pieterson@gmail.com
                </span>
              </div>
              <div className="fw-semibold fs-15">$3,894</div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-top flex-wrap">
              <div className="me-2">
                <span className="avatar avatar-sm avatar-rounded bg-primary-transparent fw-semibold">
                  KA
                </span>
              </div>
              <div className="flex-fill">
                <p className="fw-semibold mb-0">Kiara Advain</p>
                <span className="text-muted fs-12">
                  kiaraadvain214@gmail.com
                </span>
              </div>
              <div className="fw-semibold fs-15">$2,679</div>
            </div>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}
