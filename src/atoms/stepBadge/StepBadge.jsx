import './StepBadge.css';

const StepBadge = ({count = 1 })=>{
        return(
            <div className='stepBadgeContainer'>
                <div className='stepBadge'>{count}</div>
            </div>
        )
}

export default StepBadge