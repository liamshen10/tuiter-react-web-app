import React, {useState} from "react";
import {createTuit} from "./reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        tuit: whatsHappening
      }
      dispatch(createTuit(newTuit));
      setWhatsHappening("");
   console.log(whatsHappening);
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/nasa.png" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <i AiOutlinePicture className="me-3"></i>
           <i HiOutlineGif className="me-3"></i>
           <i MdFormatListBulleted className="me-3"></i>
           <i BsEmojiSmile className="me-3"></i>
           <i TbCalendarStats className="me-3"></i>
           <i HiOutlineLocationMarker className="me-3"></i>
           <i BiBold className="me-3"></i>
           <i BiItalic className="me-3"></i>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;