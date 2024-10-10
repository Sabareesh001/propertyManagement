import { Breadcrumbs, Select } from '@mui/material';
import './CreateQuotation.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import StyledSelect from '../../atoms/styledSelect/StyledSelect';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
const CreateQuotation = ()=>{
    const [organizationOptions,setOrganizationOptions] = useState([

        {
            value:1,label:'Casagrand'
        }
    ]);

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
                    <div className='breadCrumbsContainer'>
                        <Breadcrumbs  separator={<ArrowForwardIosOutlinedIcon className='breadcrumbSeparator' fontSize='inhereit' style={{color:'#5078E1'}}/>}>
                        <div className='breadcrumb'>Hello</div>
                        <div className='breadcrumb'>Hello</div>
                        </Breadcrumbs>
                    </div>
                 </div>
            </div>
        </div>
    )

}

export default CreateQuotation;