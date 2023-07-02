import React, { useEffect, useState, useRef } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import IntroduceCandidate from "./IntroduceCandidate";
import styles from "./style.module.css";
import "../../bootstrap.scss";

const value = `
<div class="row">
  <div class="col-md-8">
      <h2>ACCOUNT MANAGER (AM)</h2>

      <div class="mt-2">
          <b>Tình trạng:</b><span class='badge badge-success'>Đang tuyển</span>
      </div>

      <div class="rbxnew-box mt-2">
          <h6 class="rbx-subtitle">Chi tiết công việc</h6>
          <p><font>- Assist sales to have in-depth communication with customers, and accurately grasp customer demands and business needs</font></p><p><font>- Responsible for leading the Vietnamese team to organize project management of project demand research, program confirmation, program development, implementation training, on-line and acceptance</font></p><p><font>- Responsible for MES project progress monitoring, quality management, internal and external communication management, maintaining good customer relationship, and work communication and coordination of cooperation units</font></p><p><font>- Form a case knowledge base in the form of documents through project experience summary</font></p><p><font>- Complete other tasks assigned by the leaders.</font></p><p></p>
          <h6 class="rbx-subtitle">Yêu cầu</h6>
          <p><font>- Production management or related</font></p><p><font>- Familiar with the workshop business process of manufacturing enterprises, and equipped with the business knowledge of intelligent manufacturing</font></p><p><font>- More than 5 years working experience, good at communication, guide customer needs; have factory practical work experience is better</font></p><p><font>- Practical experience in demand analysis and business abstraction; good text description and communication skills; excellent expression skills, document writing ability, skilled use of Office, Visio, PPT and other related office, prototype and process design software</font></p><p><font>- Familiar with the general software system development process and quality control methods</font></p><p><font>- Have strong learning willingness and learning ability, have strong interest in new things and new fields, are willing to contact unfamiliar fields and businesses, and are willing to think</font></p><p><font>- Have a strong commitment, willing to be responsible for myself and the work process and results</font></p><p><font>- Strong management ability and communication and coordination ability</font></p><p><font>- Can adapt to business trips</font></p><p><font>- Good Chinese language, no communication barriers.</font></p><p></p>
          <h6 class="rbx-subtitle">Lương và Quyền lợi</h6>
          <p><br></p>
      </div>
  </div>
  <div class="col-md-4">
      <div class="row">
          <div class="col-md-6 ">
              <button type="button" class="btn btn-primary" onclick="loaduv(366);">Giới thiệu Ứng viên</button>
          </div>
          <div class="col-md-6 rbx-rtext">
              <button type="button" class="btn btn-light" id="btn_svnew" onclick="savenews(366);" data-val="1">
                  <i class="far fa-heart fa-fw mr5"></i> Lưu
              </button>
          </div>
      </div>
      
      <div class="alert alert-info mt-4">
          <div class="row">
              <div class="col-md-4">Loại công việc</div>
              <div class="col-md-8 rbx-jbval">To&#224;n thời gian cố định</div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Mức lương</div>
              <div class="col-md-8 rbx-jbval">78</div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Kinh nghiệm</div>
              <div class="col-md-8 rbx-jbval">Tr&#234;n 5 năm</div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Cấp bậc</div>
              <div class="col-md-8 rbx-jbval"></div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Tỉnh/thành</div>
              <div class="col-md-8 rbx-jbval">Miền Bắc -Bắc Ninh</div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Số lượng</div>
              <div class="col-md-8 rbx-jbval">0</div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Bảo hành</div>
              <div class="col-md-8 rbx-jbval">0 ngày</div>
          </div>
          <div class="row mt-2">
              <div class="col-md-4">Hoa hồng</div>
              <div class="col-md-8 rbx-jbval">0</div>
          </div>
      </div>
      <div class="card">
          <h6 class="card-header">Công ty</h6>
          <div class="card-body">
                      <strong class="rbx-subtitle">Quy mô:</strong>
100000 nh&#226;n sự                        <br />
                      <strong class="rbx-subtitle">Mô tả:</strong>
Từ năm 2018 đến nay, RBOX đã và đang phục vụ nhu cầu nhân lực cho hàng trăm công ty có uy tín cao đến từ các ngành nghề khác nhau, từ Lao động phổ thông đến nhân sự cao cấp. Không chỉ tuyển dụng cho các công ty ở Việt Nam, RBOX còn cung ứng nhân sự cho các doanh nghiệp tại Quốc gia khác như: Malaysia, Philippines, Trung Quốc,... cùng Apec Group - Tập đoàn Châu Á Thái Bình Dương.
          </div>
      </div>
  </div>
</div>
`;
export default function DetailedContent() {
  return (
    <>
      <div className="flex items-center mb-2">
        <IntroduceCandidate
          nameButton="Giới thiệu ứng viên"
          classButton="py-1.5 px-4 text-lg text-white border rounded-lg bg-rbox-button hover:opacity-90"
        />
        <button className="ml-4 py-1 px-3 text-[#3a3b45] bg-[#f8f9fc] rounded-md text-lg flex items-center hover:text-red-500">
          {<AiOutlineHeart className="pr-2 text-2xl" />}
          Lưu
        </button>
      </div>
      <div
        className={`${styles.modal_detail_candidate} bootstrap_css`}
        dangerouslySetInnerHTML={{
          __html: value
            .replace(
              `<button type="button" class="btn btn-primary" onclick="loaduv(366);">Giới thiệu Ứng viên</button>`,
              ""
            )
            .replace(
              `<button type="button" class="btn btn-light" id="btn_svnew" onclick="savenews(366);" data-val="1"><i class="far fa-heart fa-fw mr5"></i> Lưu</button>`,
              ""
            ),
        }}
      ></div>
    </>
  );
}
