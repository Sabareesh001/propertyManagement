import "./CreateQuotation.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import StyledSelect from "../../atoms/styledSelect/StyledSelect";
import { useContext, useState } from "react";
import BreadCrumbs from "../../atoms/breadcrumbs/BreadCrumbs";
import StyledButton from "../../atoms/styledButton/StyledButton";
import ProfileIcon from "../../atoms/profileIcon/ProfileIcon";

import StyledChip from "../../atoms/styledChip/StyledChip";
import CircleIcon from "@mui/icons-material/Circle";
import StyledCard from "./styledCard/StyledCard";
import { Divider, Grid2 } from "@mui/material";
import UnitDetailsModal from "./unitDetailsModal/UnitDetailsModal";

import PricingTable from "./pricingTable/PricingTable";
import AddAmenities from "./addAmenities/AddAmenities";
import AddUtilities from "./addUtitlities/AddUtilities";

import { CreateQuotationContext } from "../../contexts/createQuotationContext/CreateQuotationContext";

const CreateQuotation = () => {
  const {
    units,
    unitImageList,
    leadDetails,
    quotationDetails,
    quotationSummary,
  } = useContext(CreateQuotationContext);
  const [organizationOptions, setOrganizationOptions] = useState([
    {
      value: 1,
      label: "Casagrand",
    },
  ]);
  const [isUnitDetailsModalOpen, setIsUnitDetailsModalOpen] = useState(false);
  const [isPricingTableModalOpen, setIsPricingTableModalOpen] = useState(false);
  const [isAddAmenitiesModalOpen, setIsAddAmenitiesModalOpen] = useState(false);
  const [isAddUtilitiesModalOpen, setIsAddUtilitiesModalOpen] = useState(false);
  const [isEditingDiscount, setIsEditingDiscount] = useState(false);
  const [isDeletingComponents, setIsDeletingComponents] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const [cardMenuOptions, setCardMenuOptions] = useState([
    {
      name: "Add Pricing Component",
      action: () => {
        setIsPricingTableModalOpen(true);
      },
    },
    {
      name: "Add Ammenities",
      action: () => {
        setIsAddAmenitiesModalOpen(true);
      },
    },
    {
      name: "Add Utitlities",
      action: () => {
        setIsAddUtilitiesModalOpen(true);
      },
    },
    {
      name: "Add Discount",
      action: () => {
        setIsEditingDiscount(true);
        setIsUnitDetailsModalOpen(true);
      },
    },
    {
      name: "Remove Component",
      action: () => {
        setIsDeletingComponents(true);
        setIsUnitDetailsModalOpen(true);
      },
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
          <StyledSelect
            borderRadius="15px"
            background={"#F5F7FA"}
            options={organizationOptions}
          />
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
                  <ProfileIcon image={leadDetails?.image} type={"rounded"} />
                </div>
                <div className="leadOnlyDetailsContainer">
                  <div className="nameAndChipContainer">
                    <div>{leadDetails?.name}</div>
                    <StyledChip
                      content={
                        leadDetails?.isProspect ? "Prospect" : "Customer"
                      }
                    />
                  </div>
                  <div className="leadContactInfo">
                    {leadDetails?.mobile}
                    <CircleIcon className="circleIcon" fontSize="inhereit" />
                    {leadDetails?.email}
                  </div>
                </div>
              </div>
              <div className="horizontalLine"></div>
              <div className="sectionTitle">Quotation Details</div>
              <div>
                <div className="quotationDetailsUnderLeadContainer">
                  <div>
                    <div className="title">Lease Start Date </div>
                    <div>{quotationDetails?.lease_start_date}</div>
                  </div>
                  <div>
                    <div className="title">Lease End Date </div>
                    <div>{quotationDetails?.lease_end_date}</div>
                  </div>
                  <div>
                    <div className="title">Rent Start Date </div>
                    <div>{quotationDetails?.rent_start_date}</div>
                  </div>
                  <div>
                    <div className="title">Grace period </div>
                    <div>
                      {quotationDetails?.grace_period} days{" "}
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
                  columnGap={2}
                  rowGap={2}
                  columns={2}
                  container
                >
                  {units?.map((data, i) => {
                    return (
                      <Grid2 size={0.95} item>
                        <StyledCard
                          onClickDef = {()=>{setSelectedUnit(i)}}
                          onClickFunc={() => {
                            setIsUnitDetailsModalOpen(true);
                            setSelectedUnit(i);
                          }}
                          unitIndex={i}
                          unitDetails={data}
                          cardMenuOptions={cardMenuOptions}
                        />
                      </Grid2>
                    );
                  })}
                  <UnitDetailsModal
                  key={selectedUnit}
                    isOpen={isUnitDetailsModalOpen}
                    imageList={unitImageList}
                    editDiscount={isEditingDiscount}
                    isDeleting={isDeletingComponents}
                    unitDetails={units[selectedUnit]}
                    unitIndex={selectedUnit}
                    onClose={() => {
                      setIsUnitDetailsModalOpen(false);
                      setSelectedUnit(null);
                      if (isEditingDiscount) {
                        setIsEditingDiscount(false);
                      }
                      if (isDeletingComponents) {
                        setIsDeletingComponents(false);
                      }
                    }}
                  />
                  <PricingTable
                    isOpen={isPricingTableModalOpen}
                    onClose={() => {
                      setIsPricingTableModalOpen(false);
                    }}
                  />
                  <AddAmenities
                    isOpen={isAddAmenitiesModalOpen}
                    onClose={() => {
                      setIsAddAmenitiesModalOpen(false);
                    }}
                  />
                  <AddUtilities
                    isOpen={isAddUtilitiesModalOpen}
                    onClose={() => {
                      setIsAddUtilitiesModalOpen(false);
                    }}
                  />
                </Grid2>
              </div>
            </div>
            <div className="quotationSummaryContainer">
              <div className="sectionTitle">Quotation Summary</div>
              <div className="QuotationSummaryContentContainer">
                <div className="QuotationSummaryContent">
                  <div className="QContentRows">
                    <div>Description</div>
                    <div>Qty</div>
                    <div>Amount</div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Amount</div>
                    <div>{units?.length}</div>
                    <div className="money">
                      $ {quotationSummary?.total_amount}
                    </div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Discount</div>
                    <div>{((quotationSummary?.total_discount/quotationSummary?.total_amount)*100).toFixed(2)}%</div>
                    <div>-$ {quotationSummary?.total_discount}</div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Refundable</div>
                    <div>0%</div>
                    <div>$ {quotationSummary?.refundable}</div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Tax</div>
                    <div>18%</div>
                    <div className="money">$ {quotationSummary?.total_tax}</div>
                  </div>
                  <Divider />
                </div>
                <div className="QuotationSummaryContent">
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div className="money">Quote Amount</div>
                    <div></div>
                    <div className="money">
                      ${" "}
                      {quotationSummary?.total_amount +
                        quotationSummary?.total_refundable -
                        quotationSummary?.total_discount +
                        quotationSummary?.total_tax}
                    </div>
                  </div>
                </div>
              </div>
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
