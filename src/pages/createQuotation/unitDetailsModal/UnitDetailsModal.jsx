import { Box, Button, Dialog, Divider, ImageList, ImageListItem, Modal } from "@mui/material";
import "./UnitDetailsModal.css";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import SelectAllIcon from '@mui/icons-material/SelectAll';
import StyledChip from "../../../atoms/styledChip/StyledChip";
import BookIcon from '@mui/icons-material/BookOutlined';
import StyledButton from "../../../atoms/styledButton/StyledButton";
const UnitDetailsModal = ({ isOpen = false, onClose, imageList ,unitDetails}) => {
  return (
    <Dialog  maxWidth  open={isOpen} onClose={onClose}>
      <Box height={620} width={900}  sx={{
        padding:'15px',
        display:'flex',
        
        flexDirection:'column',
        gap:'10px'
    }}>
        <div className="titleAndCloseIcon">
          <div>Unit Details</div>
          <CloseIcon onClick={onClose} />
        </div>
        <Divider/>
        <div className="billAndImagesContainer">
          <div className="leftSectionContainer">
            <ImageList
            sx={{
           
            }}
            
            cols={4} >
              {imageList &&
                imageList.map((data,i) => {
                  return (
                    i<5?
                    <ImageListItem rows={i===0?2:null} cols={i===0?2:null}  >
                      <img style={
                        {position:'relative',
                            borderRadius:'5px'
                        }
                      } src={data?.image}></img>
                      {
                        i===4 && (imageList.length-5>0) &&
                        <div className="moreLabelContainer">
                            +{imageList.length-5}
                        </div>
                      }
                    </ImageListItem>:<></>
                  );
                })}
            </ImageList>
            <div className="nameAndIdContainer">
                {unitDetails.name}
                <div className="unitIdLabel">
                {unitDetails.unitId}
                  </div> 
               
            </div>
            <div>
                {unitDetails.address}
            </div>
            <div style={{
                justifyContent:'normal',
                gap:'10px'
              }} className="unitsCountContainer">
              <div style={{
                justifyContent:'normal'
              }} className="iconAndCountContainer">
                <LocalHotelIcon  className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails.beds}</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <BathtubIcon className="unitIcon" fontSize="inherit" />
                <div  className="units">{unitDetails.baths}</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <HomeIcon className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails.bhk} BHK</div>
              </div>
              <CircleIcon className="circle" fontSize="inherit" />
              <div className="iconAndCountContainer">
                <SelectAllIcon className="unitIcon" fontSize="inherit" />
                <div className="units">{unitDetails.area} Sq.ft</div>
              </div>
            </div>  
            <Divider/>
            <div className="handbookAndDownloadButtonContainer">
            <div className="bookIconContainer"><BookIcon sx={{fontSize:'20px'}} fontSize="inhereit"/> Handbook</div>
            <StyledButton haveBorder={false} type="primary" content={"View / Download"}/>
            
            </div>
          </div>
          <div className="secondSectionContainer">
            <div className="secondInnerContainer">
             
               <div className="pricingDetailsTableContainer">
               <div style={{color:'#091B29',fontSize:'14px',textTransform:'uppercase',paddingBottom:'5px',fontWeight:'bold'}}>Unit Price Details</div>
                    <div className="pricingDetailsRowContainer">
                      <div className="pricingDetailsRow">
                        <div>
                          Bill Name Here
                        </div>
                        <div>
                          $1000
                        </div>
                      </div>
                      <div className="pricingDetailsSubRow">
                        <div>
                          Discount
                        </div>
                        <div>
                          10%
                      </div>
                    </div>
                    </div>
                    <Divider/>
                    <div className="pricingDetailsRowContainer">
                      <div className="pricingDetailsRow">
                        <div>
                          Bill Name Here
                        </div>
                        <div>
                          $1000
                        </div>
                      </div>
                      <div className="pricingDetailsSubRow">
                        <div>
                          Discount
                        </div>
                        <div>
                          10%
                      </div>
                    </div>
                    </div>
                    <Divider/>
                    <div className="pricingDetailsRowContainer">
                      <div className="pricingDetailsRow">
                        <div>
                          Bill Name Here
                        </div>
                        <div>
                          $1000
                        </div>
                      </div>
                   
                    </div>
                    <Divider/>
                    <div className="pricingDetailsRowContainer">
                      <div className="pricingDetailsRow">
                        <div>
                          Bill Name Here
                        </div>
                        <div>
                          $1000
                        </div>
                      </div>
                     
                    </div>
                    <Divider/>
                    <div className="pricingDetailsRowContainer">
                      <div className="pricingDetailsRow">
                        <div>
                          Bill Name Here
                        </div>
                        <div>
                          $1000
                        </div>
                      </div>
                     
                    </div>
                    <Divider/>
                   
               </div>
               <div className="totalContainer">
                <div>
                  <div>
                    Final Total
                  </div>
                  <div>
                    $1,200
                  </div>
                </div>
               <StyledButton content={"Apply Discount"}/>

               </div>
            </div>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default UnitDetailsModal;
