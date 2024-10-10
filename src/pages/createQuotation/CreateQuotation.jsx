import "./CreateQuotation.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import StyledSelect from "../../atoms/styledSelect/StyledSelect";
import { useState } from "react";
import BreadCrumbs from "../../atoms/breadcrumbs/BreadCrumbs";
import StyledButton from "../../atoms/styledButton/StyledButton";
import ProfileIcon from "../../atoms/profileIcon/ProfileIcon";
import ManImage from "../../assets/man.jpg";
import StyledChip from "../../atoms/styledChip/StyledChip";
import CircleIcon from "@mui/icons-material/Circle";
import StyledCard from "../../atoms/styledCard/StyledCard";
import House from "../../assets/house.jpg";
import { Grid2 } from "@mui/material";

const CreateQuotation = () => {
  const [organizationOptions, setOrganizationOptions] = useState([
    {
      value: 1,
      label: "Casagrand",
    },
  ]);

  const [breadcrumbs, setBreadCrumbs] = useState([
    {
      name: "Add Contact",
    },
    {
      name: "Lead Details",
    },
    {
      name: "Preview and Create Lead",
    },
    {
      name: "Quotation Details",
    },
    {
      name: "Preview and Create",
      step: 4,
    },
  ]);

  const [unitDetails, setUnitDetails] = useState([
    {
      image: House,
    },
    {
      image: House,
    },
    {
      image: House,
    },
    {
      image: House,
    },
    {
        image: House,
      },
      {
        image: House,
      },
  ]);

  return (
    <div className="createQuotationContainer">
      <div className="topBar">
        <div className="sectionInfoContainer">
          <div className="backIconContainer">
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </div>
          <div className="sectionName">Create Quotation To Existing Lead</div>
        </div>
        <div className="organizationSelectContainer">
          <StyledSelect options={organizationOptions} />
        </div>
      </div>
      <div className="createQuotationContentContainer">
        <div className="quotationContainer">
          <div className="breadCrumbContainer">
            <BreadCrumbs breadcrumbs={breadcrumbs} />
          </div>
          <div className="estateInfoContainer">
            <div className="leadContainer">
              <div className="sectionTitle">Lead Details</div>
              <div className="leadDetailsCardContainer">
                <div>
                  <ProfileIcon image={ManImage} type={"rounded"} />
                </div>
                <div className="leadOnlyDetailsContainer">
                  <div className="nameAndChipContainer">
                    <div>Tom Cruise</div>
                    <StyledChip content={"Prospect"} />
                  </div>
                  <div className="leadContactInfo">
                    +91 9090808012
                    <CircleIcon className="circleIcon" fontSize="inhereit" />
                    Tomcruise2515@mail.com
                  </div>
                </div>
              </div>
              <div className="horizontalLine"></div>
              <div className="sectionTitle">Quotation Details</div>
              <div>
                <div className="quotationDetailsUnderLeadContainer">
                  <div>
                    <div className="title">Lease Start Date </div>
                    <div>30 jan 22</div>
                  </div>
                  <div>
                    <div className="title">Lease End Date </div>
                    <div>30 jan 22</div>
                  </div>
                  <div>
                    <div className="title">Rent Start Date </div>
                    <div>30 jan 22</div>
                  </div>
                  <div>
                    <div className="title">Grace period </div>
                    <div>
                      90 days{" "}
                      <div className="graceperiodBracket">{"(Beginning)"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="unitDetailsContainer">
              <div className="sectionTitle">Unit Details</div>
              <div className="unitsGridContainer">
                <Grid2
                height={100}
                  justifyContent={"center"}
                  columnGap={2}
                  rowGap={2}
                  columns={2}
                  container
                >
                  {unitDetails?.map((data) => {
                    return (
                      <Grid2 item>
                        <StyledCard image={data.image} />
                      </Grid2>
                    );
                  })}
                </Grid2>
              </div>
            </div>
            <div className="quotationSummaryContainer">
              <div className="sectionTitle">Quotation Summary</div>
            </div>
          </div>
          <div className="buttonsContainer">
            <div>
              <StyledButton type="outlined" content={"Previous"} />
            </div>
            <div className="cancelCreateQuotationContainer">
              <StyledButton type="outlined" content={"Cancel"} />
              <StyledButton content={"Create Quotation"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuotation;
