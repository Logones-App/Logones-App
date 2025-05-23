import { Card } from "react-bootstrap";
import Link from "next/link";
import { Conversionratio } from "@/shared/data/charts/dashboard";

export default function CrmStatsCardConversion() {
  return (
    <Card className=" custom-card overflow-hidden">
      <Card.Body>
        <div className="d-flex align-items-top justify-content-between">
          <div>
            <span className="avatar avatar-md avatar-rounded bg-success">
              <i className="ti ti-wave-square fs-16"></i>
            </span>
          </div>
          <div className="flex-fill ms-3">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div>
                <p className="text-muted mb-0">Conversion Ratio</p>
                <h4 className="fw-semibold mt-1">12.08%</h4>
              </div>
              <div id="crm-conversion-ratio">
                <Conversionratio />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div>
                <Link className="text-success" href="#">
                  View All
                  <i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i>
                </Link>
              </div>
              <div className="text-end">
                <p className="mb-0 text-danger fw-semibold">-12%</p>
                <span className="text-muted op-7 fs-11">this month</span>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
