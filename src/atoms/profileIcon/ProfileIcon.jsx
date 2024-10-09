import './ProfileIcon.css';

const ProfileIcon = ({image,type})=>{
    return(
        <div className={`profileImageContainer ${type}`}>
            <img src={image}></img>
        </div>
    )
}

export default ProfileIcon;