import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 console.log('Current User:', currentUser);
 const [ profile, setProfile ] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = async () => {
  const credentials = { username: profile.username, password: profile.password };
  console.log('Saving profile with credentials:', credentials, 'and profile:', profile);
  await dispatch(updateUserThunk({ credentials, user: profile }));
};

 useEffect(() => {
  const loadProfile = async () => {
    const { payload } = await dispatch(profileThunk());
    setProfile(payload);
  };

  loadProfile();
}, []);

return (
  <div>
   <h1>Profile Screen</h1>
   {profile && (<div>
     <div>
      <label>First Name</label>
      <input type="text" value={profile.firstName}
       onChange={(event) => {
        const newProfile = {
         ...profile, firstName: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div>
     <div>
      <label>Last Name</label>
      <input type="text" value={profile.lastName}
       onChange={(event) => {
        const newProfile = {
         ...profile, lastName: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div></div>
   )}
   <button
    onClick={() => {
      dispatch(logoutThunk());
      navigate("/tuiter/login");
    }}>                   Logout</button>
   <button onClick={save}>Save  </button>
  </div> );
}
export default ProfileScreen;
 