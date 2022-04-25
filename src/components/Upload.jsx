import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState({});

  const [imgPreviewUrl, setImgPreviewUrl] = useState(null); //ใช้ preview

  const handleUploadImg = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const render = new FileReader(); //เรียก Class FileReader เพื่อแปลง file image ที่รับเข้ามา

    render.onloadend = () => {
      //เป็น eventของFileReaderเมื่อโหลดภาพเสร็จ
      setFile(file);
      setImgPreviewUrl(render.result);
    };
    render.readAsDataURL(file); //เป็นส่วนของการแสดงรูป
  };

  const onClickUpload = async () => {
    const formData = new FormData(); //สร้างตัวแปร มารับ Class FormData
    formData.append("file", file); //arg แรกนั้นเป็น ชื่อ Key ส่วน arg2 เป็น Value
    const uploadImg = await axios({
      method: "post",
      url: "http://localhost:3001/upload",
      data: formData,
    });
  };
  return (
    <React.Fragment>
      <img
        src={
          imgPreviewUrl
            ? imgPreviewUrl
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
        }
        className="w-[480px] h-[480px]"
      />
      <input type="file" onChange={handleUploadImg} />
      <button
        onClick={onClickUpload}
        className="rounded-md ml-[20px] text-[#fff] bg-red-400 w-[15%] h-auto "
      >
        Uplaod
      </button>
    </React.Fragment>
  );
}

export default Upload;
