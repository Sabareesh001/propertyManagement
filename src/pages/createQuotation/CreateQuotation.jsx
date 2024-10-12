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
import StyledCard from "./styledCard/StyledCard";
import House from "../../assets/house.jpg";
import { Divider, Grid2 } from "@mui/material";
import UnitDetailsModal from "./unitDetailsModal/UnitDetailsModal";
import House2 from "../../assets/house2.png";
import PricingTable from "./pricingTable/PricingTable";
import AddAmenities from "./addAmenities/AddAmenities";
const CreateQuotation = () => {
  const [organizationOptions, setOrganizationOptions] = useState([
    {
      value: 1,
      label: "Casagrand",
    },
  ]);
  const [isUnitDetailsModalOpen, setIsUnitDetailsModalOpen] = useState(false);
  const [isPricingTableModalOpen,setIsPricingTableModalOpen] = useState(false);
  const [isAddAmenitiesModalOpen,setIsAddAmenitiesModalOpen] = useState(false);
  const [selectedUnit,setSelectedUnit] = useState(0);
  const [unitImageList, setUnitImageList] = useState([
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
  ]);

  const [cardMenuOptions, setCardMenuOptions] = useState([
    {
      name: "Add Pricing Component",
      action: ()=>{setIsPricingTableModalOpen(true)}
    },
    {
      name: "Add Ammenities",
      action: ()=>{setIsAddAmenitiesModalOpen(true)},
    },
    {
      name: "Add Utitlities",
      action: null,
    },
    {
      name: "Add Discount",
      action: null,
    },
    {
      name: "Remove Component",
      action: null,
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
      name:'Jumeriah Estate',
      unitId:'UNT-1234',
      address:'Rubix Apartment, K Tower, Floor 1',
      company:'Jumeriah Golf Estate',
      beds:2,
      baths:2,
      bhk:2,
      area:2000
    },{
      image: House,
      name:'Jumeriah Estate',
      unitId:'UNT-1234',
      address:'Rubix Apartment, K Tower, Floor 1',
      company:'Jumeriah Golf Estate',
      beds:2,
      baths:2,
      bhk:2,
      area:2000
    },{
      image: House,
      name:'Jumeriah Estate',
      unitId:'UNT-1234',
      address:'Rubix Apartment, K Tower, Floor 1',
      company:'Jumeriah Golf Estate',
      beds:2,
      baths:2,
      bhk:2,
      area:2000
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
          <StyledSelect borderRadius="15px" background={"#F5F7FA"} options={organizationOptions} />
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
                  columnGap={2}
                  rowGap={2}
                  columns={2}
                  container
                >
                  {unitDetails?.map((data,i) => {
                    return (
                      <Grid2
                        
                        size={0.95}
                        item
                      >
                        <StyledCard onClickFunc={() => {
                          setIsUnitDetailsModalOpen(true);
                          setSelectedUnit(i)
                        }} unitDetails={data} cardMenuOptions={cardMenuOptions} />
                      </Grid2>
                    );
                  })}
                  <UnitDetailsModal
                    isOpen={isUnitDetailsModalOpen}
                    imageList={unitImageList}
                    unitDetails={unitDetails[selectedUnit]}
                    onClose={() => {
                      setIsUnitDetailsModalOpen(false);
                    }}
                  />
                  <PricingTable
                  isOpen={isPricingTableModalOpen}
                  onClose={()=>{setIsPricingTableModalOpen(false)}}
                  />
                  <AddAmenities
                  isOpen={isAddAmenitiesModalOpen}
                  onClose={()=>{setIsAddAmenitiesModalOpen(false)}}

                  
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
                    <div>3</div>
                    <div className="money">$ 3,600.00</div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Discount</div>
                    <div>10%</div>
                    <div>-$ 100.00</div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Refundable</div>
                    <div>0%</div>
                    <div>$ 0</div>
                  </div>
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div>Total Tax</div>
                    <div>18%</div>
                    <div className="money">$ 648.00</div>
                  </div>
                  <Divider />
                </div>
                <div className="QuotationSummaryContent">
                  <Divider />{" "}
                  <div className="QContentRows">
                    <div className="money">Quote Amount</div>
                    <div></div>
                    <div className="money">$ 4,148.00</div>
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
