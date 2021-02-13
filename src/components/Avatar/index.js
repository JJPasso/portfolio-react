import Person from "avataaars";
import React, { useState } from "react";

const Avatar = () => {
  const [eye, setEye] = useState("Happy");
  const [mouth, setMouth] = useState("Default");
  const setStyle = (ojo,boca) => {
      setMouth(boca);
      setEye(ojo);
  }


  return (
    <div onMouseOver={() => setStyle("WinkWacky","Tongue")} onMouseOut={() => setStyle("Happy","Default")}>
      <Person
        style={{width: '300px', height: '300px'}}
        avatarStyle="Circle"
        topType="LongHairNotTooLong"
        accessoriesType="Prescription02"
        hairColor="BrownDark"
        facialHairType="BeardLight"
        facialHairColor="Brown"
        clotheType="Hoodie"
        clotheColor="Heather"
        eyeType={eye}
        eyebrowType="RaisedExcitedNatural"
        mouthType={mouth}
        skinColor="Light"
      />
    </div>
  );
};

export default Avatar;
