import { Breadcrumbs as BreadcrumbsMui } from '@mui/material';
import './BreadCrumbs.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import StepBadge from '../stepBadge/StepBadge';

const BreadCrumbs = ({breadcrumbs})=>{
    return(
        <div className='breadCrumbsContainer'>
                        <BreadcrumbsMui  separator={<ArrowForwardIosOutlinedIcon className='breadcrumbSeparator' fontSize='inhereit' style={{color:'#5078E1'}}/>}>
                        {
                            breadcrumbs?.map((crumb)=>{
                                return(
                                    <div className='breadcrumb'>
                                     {crumb.step&& <StepBadge count={crumb.step}/>}
                                     {crumb.name}
                                    </div>
                                )
                            })
                        }
                        </BreadcrumbsMui>
                    </div>
    )
}

export default BreadCrumbs;