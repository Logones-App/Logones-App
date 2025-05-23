import { Card } from "react-bootstrap";
import Link from "next/link";
import { Profit } from "@/shared/data/charts/dashboard";

export default function Crm1TargetCard() {
  return (
    <Card className="custom-card crm-highlight-card">
      <Card.Body className="pe-0">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="fw-semibold fs-18 text-fixed-white mb-2">
              Your target is incomplete
            </div>
            <span className="d-block fs-12 text-fixed-white">
              <span className="op-7">You have completed</span>{" "}
              <span className="fw-semibold text-warning">48%</span>{" "}
              <span className="op-7">
                of the given target, you can also check your status
              </span>
              .
            </span>
            <span className="d-block fw-semibold mt-1">
              <Link className="text-fixed-white" href="#!">
                <u>Click here</u>
              </Link>
            </span>
          </div>
          <div>
            <div id="crm-main">
              <Profit />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
