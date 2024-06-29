"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserImage = ({ userImage }) => {
  const [image, setImage] = useState(String(userImage));

  const [imgFlag, setImgFlag] = useState(true);

  function handleImgError() {
    setImgFlag((prev) => !prev);
  }
  function dumpImage() {
    setImgFlag((prev) => !prev);
    return "avatar.png";
  }
  useEffect(() => {
    console.log("archit");
  }, [image]);

  function handleeeror() {
    setImage("/avatar.png");
  }

  return (
    <Image
      src={image}
      onError={handleeeror}
      alt="sadadada"
      width={40}
      height={40}
      className="user-table-userImage"
    />
  );
};

export default UserImage;
