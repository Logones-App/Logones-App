import { Card } from "react-bootstrap";
import Link from "next/link";
import { Totaldeals } from "@/shared/data/charts/dashboard";

export default function CrmStatsCardDeals() {
  return (
    <Card className=" custom-card overflow-hidden">
      <Card.Body>
        <div className="d-flex align-items-top justify-content-between">
          <div>
            <span className="avatar avatar-md avatar-rounded bg-warning">
              <i className="ti ti-briefcase fs-16"></i>
            </span>
          </div>
          <div className="flex-fill ms-3">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div>
                <p className="text-muted mb-0">Total Deals</p>
                <h4 className="fw-semibold mt-1">2,543</h4>
              </div>
              <div id="crm-total-deals">
                <Totaldeals />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div>
                <Link className="text-warning" href="#">
                  View All
                  <i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i>
                </Link>
              </div>
              <div className="text-end">
                <p className="mb-0 text-success fw-semibold">+19%</p>
                <span className="text-muted op-7 fs-11">this month</span>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
