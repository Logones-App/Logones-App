import { Card, Dropdown } from "react-bootstrap";
import Link from "next/link";

export default function Crm1RecentActivity() {
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>Recent Activity</Card.Title>
        <Dropdown className="">
          <Dropdown.Toggle
            aria-label="anchor"
            as="a"
            className="p-2 fs-12 text-muted "
            aria-expanded="false"
          >
            View All
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul" align="end">
            <Dropdown.Item href="#">Today</Dropdown.Item>
            <Dropdown.Item href="#">This Week</Dropdown.Item>
            <Dropdown.Item href="#">Last Week</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>
        <div>
          <ul className="list-unstyled mb-0 crm-recent-activity">
            {/* TODO: Ajoute ici les éléments de la timeline d'activité */}
            <li className="crm-recent-activity-content">
              <div className="d-flex align-items-top">
                <div className="me-3">
                  <span className="avatar avatar-xs bg-primary-transparent avatar-rounded">
                    <i className="bi bi-circle-fill fs-8"></i>
                  </span>
                </div>
                <div className="crm-timeline-content">
                  <span className="fw-semibold">
                    Update of calendar events &amp;
                  </span>
                  <span>
                    <Link
                      href="#"
                      scroll={false}
                      className="text-primary fw-semibold"
                    >
                      {" "}
                      Added new events in next week.
                    </Link>
                  </span>
                </div>
                <div className="flex-fill text-end">
                  <span className="d-block text-muted fs-11 op-7">4:45PM</span>
                </div>
              </div>
            </li>
            {/* ...autres éléments à ajouter ici... */}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}
