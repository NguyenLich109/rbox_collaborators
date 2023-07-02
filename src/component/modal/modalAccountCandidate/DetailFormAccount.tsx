import React from "react";

import styles from "../modalCandidate/style.module.css";
import "../../bootstrap.scss";

const value = `
<div class="row mb-4">
    <div class="col-md-9">
        <div class="form-group">
            <label for="uvHoTen" class="field-required">Họ tên</label>
            <input type="text" id="uvHoTen" class="form-control required" />
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label> </label>
                    <span class="badge badge-pill badge-success fsz-90">Đang hoạt động</span>

        </div>
    </div>
</div>


<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#uvAppInfo" type="button" role="tab" aria-controls="home" aria-selected="true">Thông tin</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="strength-tab" data-toggle="tab" data-target="#uvOtherInfo" type="button" role="tab" aria-controls="strength" aria-selected="false">Đánh giá sơ bộ</button>
    </li>

    <li class="nav-item" role="presentation">
        <button class="nav-link" id="logs-tab" data-toggle="tab" data-target="#uvLogs" type="button" role="tab" aria-controls="logs" aria-selected="false">Ghi nhận</button>
    </li>
</ul>

<div class="tab-content mt-4">
    <div id="uvAppInfo" class="tab-pane active">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvDob" class="field-required">Ngày sinh</label>
                    <input type="date" id="uvDob" class="form-control required" value="2005-01-01" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvGender">Gender</label>
                    <select id="uvGender" class="form-control">
                        <option value="U" >Không xác định</option>
                        <option value="O" >Khác</option>
                        <option value="F" >Nữ</option>
                        <option value="M" >Nam</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvIdNumber">Số CMND/CCCD</label>
                    <input type="text" id="uvIdNumber" class="form-control" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvIssuePlace">Nơi cấp</label>
                    <input type="text" id="uvIssuePlace" class="form-control" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvEmail" class="field-required">Email</label>
                    <input type="text" id="uvEmail" class="form-control required" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvPhone" class="field-required">Phone</label>
                    <input type="text" id="uvPhone" class="form-control required" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvStreet">Số nhà</label>
                    <input type="text" id="uvStreet" class="form-control" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvWard">Phường / Xã</label>
                    <input type="text" id="uvWard" class="form-control" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvDistrict">Quận / Huyện</label>
                    <input type="text" id="uvDistrict" class="form-control" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="uvCity">Tỉnh / Thành phố</label>
                    <select id="uvCity" class="form-control">
                        <option value="hcm" >Tp Hồ Chí Minh</option>
                        <option value="hno" >Hà Nội</option>
                        <option value="hpg" >Hải Phòng</option>
                        <option value="dna" >Đà Nẵng</option>
                        <option value="dni" >Đồng Nai</option>
                        <option value="cno" >Cần Thơ</option>
                        <option value="nan" >Nghệ An</option>
                        <option value="bdg" >Bình Dương</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="fl_cv">Đính kèm CV</label>
                    <input type="file" name="fl_cv" id="file_cv" class="form-control-file" data-val=""/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="alert alert-danger mt-3 rbx-hide" id="flcv_msg" ></div>
            </div>
        </div>
    </div>

    <div class="tab-pane" id="uvOtherInfo">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="uvNoteStrengh">Thế mạnh</label>
                    <textarea id="uvNoteStrengh" class="form-control"></textarea>
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <label for="uvNoteExperience">Kinh nghiệm</label>
                    <textarea id="uvNoteExperience" class="form-control"></textarea>
                </div>
            </div>
        </div>
    </div>

    <div class="tab-pane" id="uvLogs">
        <table class="table">
            <tr>
                <th style="width:120px">Ngày ghi nhận</th>
                <th>Thông tin</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</div>
<div class="alert alert-warning mt-3" role="alert">
    Lưu ý: mục in đậm là bắt buộc điền
</div>
<div class="row mt-4">
    <div class="col-md-12 text-right">

                <button class="btn btn-warning mr-4" id="btnClockUv" onclick="set_status(0,1)">Khóa ứng viên</button>


        <button class="btn btn-primary" id="btnSaveUv" data-val="0">Lưu lại</button>
    </div>
</div>

<script type="text/javascript">
    $("#btnSaveUv").on("click", function () {

        debugger;
        is_valid = true;
        $("input.required").each(function () {
            $(this).removeClass('valid-fail');

            val = $(this).val();
            if (val == "" || val == undefined) {
                $(this).addClass('valid-fail');
                is_valid = false;
            }
        });

        if (is_valid == false)
            return false;

        var uvUpd = {
            "id": $(this).attr('data-val'),
            "name": $('#uvHoTen').val(),
            "email": $('#uvEmail').val(),
            "phone": $('#uvPhone').val(),
            "id_number": $('#uvIdNumber').val(),
            "issue_place": $('#uvIssuePlace').val(),
            "dob": $('#uvDob').val(),
            "gender": $('#uvGender option:selected').val(),
            "street": $('#uvStreet').val(),
            "ward_id": $('#uvWard').val(),
            "district_id": $('#uvDistrict').val(),
            "city_id": $('#uvCity option:selected').val(),
            "note_strength": $('#uvNoteStrengh').val(),
            "note_experience": $('#uvNoteExperience').val(),
            "attach_file": $('#file_cv').attr('data-val'),
        }

        console.log(uvUpd);
        $("#btnSaveUv").attr("disabled", true);
        $("#btnClockUv").attr("disabled", true);
        $("#btnOpenUv").attr("disabled", true);


        $.post("/RboxApplicant/SaveApplicant", { "data": "" + JSON.stringify(uvUpd) + "" }, function (result) {
            console.log(result);
            alert(result.message);
            $('#tbluv').DataTable().ajax.reload();
            $("#modelUvInfo").modal("hide");
            $("#btnSaveUv").attr("disabled", false);
            $("#btnClockUv").attr("disabled", false);
            $("#btnOpenUv").attr("disabled", false);
        });

    });

    function set_status(uv, sta) {
        $.post("/RboxApplicant/SetStatusApplicant?uv=" + uv + "&sta=" + sta, function (result) {
            console.log(result);
            alert(result.message);
            $("#modelUvInfo").modal("hide");
            $("#btnSaveUv").attr("disabled", false);
            $("#btnClockUv").attr("disabled", false);
            $("#btnOpenUv").attr("disabled", false);
        });
    }

    $('#file_cv').change(function () {

        // Checking whether FormData is available in browser
        if (window.FormData !== undefined) {
            $('.loader').show();
            var fileUpload = $("#file_cv").get(0);
            var files = fileUpload.files;

            // Create FormData object
            var fileData = new FormData();

            // Looping over all files and add it to FormData object
            for (var i = 0; i < files.length; i++) {
                fileData.append(files[i].name, files[i]);
            }

            // Adding one more key to FormData object
            fileData.append('username', 'Manas');
            $('#file_cv').attr("data-val", "");
            $.ajax({
                url: '/RboxImport/UploadCV',
                type: "POST",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                data: fileData,
                success: function (result) {
                    
                    console.log(result);
                    $('#flcv_msg').html(result.message);
                    $('#flcv_msg').removeClass("rbx-hide");
                    $('#file_cv').attr("data-val", result.data_return);
                    //
                    if (result.code == 1) {
                        $('#flcv_msg').removeClass("alert-danger");
                        $('#flcv_msg').addClass("alert-info");
                    }
                    else{
                        $('#flcv_msg').removeClass("alert-info");
                        $('#flcv_msg').addClass("alert-danger");
                    }
                },
                error: function (err) {
                    $('#flcv_msg').html("Lỗi khi upload file, vui lòng liên hệ quản trị viên!");
                    $('#flcv_msg').removeClass("rbx-hide");
                }
            });
        }
        else {
            alert("FormData is not supported.");
        }
    });
</script>
`;

export default function DetailFormAccount() {
  return (
    <div
      className={`${styles.modal_detail_candidate} bootstrap_account_css`}
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    ></div>
  );
}
