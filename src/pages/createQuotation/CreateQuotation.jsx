import './CreateQuotation.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import StyledSelect from '../../atoms/styledSelect/StyledSelect';
import { useState } from 'react';
import BreadCrumbs from '../../atoms/breadcrumbs/BreadCrumbs';
import StyledButton from '../../atoms/styledButton/StyledButton';
import ProfileIcon from '../../atoms/profileIcon/ProfileIcon';
import ManImage from '../../assets/man.jpg';
import StyledChip from '../../atoms/styledChip/StyledChip';
import CircleIcon from '@mui/icons-material/Circle';

const CreateQuotation = ()=>{
    const [organizationOptions,setOrganizationOptions] = useState([

        {
            value:1,label:'Casagrand'
        }
    ]);

    const [breadcrumbs,setBreadCrumbs] = useState([{
        name:'Add Contact'
    },
    {
        name:'Lead Details'
    },
    {
        name:'Preview and Create Lead'
    },
    {
        name:'Quotation Details'
    },
    {
        name:'Preview and Create',
        step:4
    }
])

    return(
        <div className='createQuotationContainer'>
            <div className='topBar'>
                   <div className='sectionInfoContainer'>
                       <div className='backIconContainer'><ArrowBackIosNewOutlinedIcon fontSize='small'/></div>
                       <div className='sectionName'>
                               Create Quotation To Existing Lead
                       </div>
                   </div>
                   <div className='organizationSelectContainer'>
                        <StyledSelect options={organizationOptions} />
                   </div>
            </div>
            <div className='createQuotationContentContainer'>
                 <div className='quotationContainer'>
                    <div className='breadCrumbContainer'>
                        <BreadCrumbs breadcrumbs={breadcrumbs} />
                    </div>
                    <div className='estateInfoContainer'>
                           <div className='leadContainer'>
                            <div className='sectionTitle'>Lead Details</div>
                            <div className='leadDetailsCardContainer'>
                            <div>
                                       <ProfileIcon image={ManImage} type={'rounded'} />
                                    
                                   </div>
                               <div className='leadOnlyDetailsContainer'>
                                   <div className='nameAndChipContainer'>
                                   <div>Tom Cruise</div>
                                   <StyledChip content={'Prospect'}/>
                                   </div>
                                    <div className='leadContactInfo'>
                                    +91 9090808012
                                    <CircleIcon fontSize='inhereit'/>
                                    Tomcruise2515@mail.com
                                    </div>
                               </div>
                            </div>
                           </div>
                           <div className='unitDetailsContainer'>
                                <div className='sectionTitle'>Unit Details</div>
                           </div>
                           <div className='quotationSummaryContainer'>
                                  <div className='sectionTitle'>Quotation Summary</div>
                           </div>
                    </div>
                    <div className='buttonsContainer'>
                        <div>
                            <StyledButton type='outlined' content={"Previous"} />
                        </div>
                        <div className='cancelCreateQuotationContainer'>
                            <StyledButton  type='outlined' content={"Cancel"}/>
                            <StyledButton content={"Create Quotation"}/>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )

}

export default CreateQuotation;