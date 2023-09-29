import {useState}from 'react'

const UserProfileCard = () => {
    const [userName, setUserName]= useState('')
    const [userImage, setUserImage]= useState('')
    const [userBio, setUserBio]= useState('')
    const [profile, setProfile]= useState([{userName, userImage, userBio}])
let nameValue;
let imageValue;
let bioValue;
const formRender = () =>{
    setUserName(nameValue)
    setUserImage(imageValue)
    setUserBio(bioValue)
}
const showInfo = () =>{
    setProfile(
    profile.map((person)=>{
        <>
        <p>User Name: {person[0]}</p>
        <p>User Image: {person[1]}</p>
        <p>User Bio: {person[2]}</p>
        </>
    }))
}


  return (
    <>
    <div>UserProfileCard</div>
    <h3>Please Enter your Information</h3>
<form>
<input value={nameValue} onSubmit={formRender} placeholder= 'User Name'></input>
<input value={imageValue} onSubmit={formRender} placeholder= 'Use Image'></input>
<input value={bioValue} onSubmit={formRender} placeholder='UserBio'></input>
<button onClick={showInfo}>Submit</button>

</form>


    </>
  )
}

export default UserProfileCard