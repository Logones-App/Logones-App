"use client";
import React from "react";
import { Badge, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import {
  Candidatesdata,
  Candidatesdatas,
  Conversionratio,
  Profit,
  Profitearned,
  Revenueanalytics,
  Totalcustomers,
  Totaldeals,
  Totalrevenue,
} from "../../../../../shared/data/charts/dashboard";
import Link from "next/link";
import { Dealsstatistics } from "../../../../../shared/data/dashboards/crmdata";
import Seo from "../../../../../shared/layout-components/seo/seo";
import Crm1TargetCard from "@/components/dashboards/crm/Crm1TargetCard";
import Crm1TopDeals from "@/components/dashboards/crm/Crm1TopDeals";
import Crm1ProfitCard from "@/components/dashboards/crm/Crm1ProfitCard";
import Crm1StatsCards from "@/components/dashboards/crm/Crm1StatsCards";
import Crm1RevenueAnalytics from "@/components/dashboards/crm/Crm1RevenueAnalytics";
import Crm1DealsStatisticsTable from "@/components/dashboards/crm/Crm1DealsStatisticsTable";
import Crm1LeadsBySource from "@/components/dashboards/crm/Crm1LeadsBySource";
import Crm1DealsStatus from "@/components/dashboards/crm/Crm1DealsStatus";
import Crm1RecentActivity from "@/components/dashboards/crm/Crm1RecentActivity";

const Crm = () => {
  return (
    <>
      <Seo title={"CRM"} />

      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <p className="fw-semibold fs-18 mb-0">Welcome back, Json Taylor !</p>
          <span className="fs-semibold text-muted">
            Track your sales activity, leads and deals here.
          </span>
        </div>
        <div className="btn-list mt-md-0 mt-2">
          <button type="button" className="btn btn-primary btn-wave">
            <i className="ri-filter-3-fill me-2 align-middle d-inline-block"></i>
            Filters
          </button>
          <button type="button" className="btn btn-outline-secondary btn-wave">
            <i className="ri-upload-cloud-line me-2 align-middle d-inline-block"></i>
            Export
          </button>
        </div>
      </div>
      <Row>
        <Col xxl={9} xl={12}>
          <Row>
            <Col xl={4}>
              <Row>
                <Col xl={12}>
                  <Crm1TargetCard />
                </Col>
              </Row>
              <Col xl={12}>
                <Crm1TopDeals />
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} className=" col-12">
                <Crm1ProfitCard />
              </Col>
            </Col>
            <Col xl={8}>
              <Row>
                <Col xxl={12}>
                  <Crm1StatsCards />
                </Col>
                <Col xl={12}>
                  <Crm1RevenueAnalytics />
                </Col>
              </Row>
            </Col>
            <Col xl={12}>
              <Crm1DealsStatisticsTable />
            </Col>
          </Row>
        </Col>
        <Col xxl={3} xl={12}>
          <Row>
            <Col xxl={12} xl={12}>
              <Row>
                <Col xxl={12} xl={6}>
                  <Crm1LeadsBySource />
                </Col>
                <Col xxl={12} xl={6}>
                  <Crm1DealsStatus />
                </Col>
                <Col xxl={12}>
                  <Crm1RecentActivity />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
Crm.layout = "Contentlayout";

export default Crm;
