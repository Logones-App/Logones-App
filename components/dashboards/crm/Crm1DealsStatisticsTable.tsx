import { Card, Dropdown, Form } from "react-bootstrap";
import { Dealsstatistics } from "@/shared/data/dashboards/crmdata";
import Link from "next/link";

export default function Crm1DealsStatisticsTable() {
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title as="a">Deals Statistics</Card.Title>
        <div className="d-flex flex-wrap gap-2">
          <div>
            <Form.Control
              className="form-control-sm"
              type="text"
              placeholder="Search Here"
              aria-label=".form-control-sm example"
            />
          </div>
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By
              <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" role="menu">
              <Dropdown.Item as="li" href="#">
                New
              </Dropdown.Item>
              <Dropdown.Item as="li" href="#">
                Popular
              </Dropdown.Item>
              <Dropdown.Item as="li" href="#">
                Relevant
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="table-responsive">
          <table className="table text-nowrap table-hover border table-bordered">
            <thead>
              <tr>
                <th scope="row" className="ps-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel1"
                    value=""
                    aria-label="..."
                  />
                </th>
                <th scope="col">Sales Rep</th>
                <th scope="col">Category</th>
                <th scope="col">Mail</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Dealsstatistics.map((idx) => (
                <tr key={Math.random()}>
                  <th scope="row" className="ps-4">
                    {idx.ckeck}
                  </th>
                  <td>
                    <div className="d-flex align-items-center fw-semibold">
                      <span className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={idx.src} />
                      </span>
                      {idx.text1}
                    </div>
                  </td>
                  <td>{idx.text2}</td>
                  <td>{idx.text3}</td>
                  <td>
                    <span className={`badge bg-${idx.color}`}>{idx.text4}</span>
                  </td>
                  <td>{idx.text5}</td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <Link
                        aria-label="anchor"
                        href="#"
                        scroll={false}
                        className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light"
                      >
                        <i className="ri-download-2-line"></i>
                      </Link>
                      <Link
                        aria-label="anchor"
                        href="#"
                        scroll={false}
                        className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"
                      >
                        <i className="ri-edit-line"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex align-items-center">
          <div>
            Showing 5 Entries{" "}
            <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation" className="pagination-style-4">
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <Link href="#" scroll={false} className="page-link">
                    Prev
                  </Link>
                </li>
                <li className="page-item active">
                  <Link href="#" scroll={false} className="page-link">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link href="#" scroll={false} className="page-link">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    href="#"
                    scroll={false}
                    className="page-link text-primary"
                  >
                    next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}
