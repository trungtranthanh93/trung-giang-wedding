import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Invitation() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Xin trân trọng báo tin vui</CS.CommonTitle>
      <CS.CommonBody>
        <S.InvitationBody>
          Từ một cuộc gặp gỡ định mệnh, tình yêu nảy nở đã kết thành trái ngọt.
          <br></br>
          Và hôm nay,<br></br>
          chúng tôi vô cùng hạnh phúc khi được sánh bước bên nhau<br></br>chính
          thức nên duyên vợ chồng.
          <br></br>
          <br></br>
          Nguyện ước bên nhau như ánh xuân rạng ngời,<br></br>
          Tựa vì sao sáng mãi soi đường cho nhau.<br></br>
          Chúng tôi nguyện sẽ yêu thương, trân trọng nhau trọn đời, cùng nhau
          xây dựng một gia đình hạnh phúc.<br></br>
          <br></br>
          Sự hiện diện của quý vị là niềm vui lớn và là nguồn động viên quý báu
          cho hạnh phúc của chúng tôi. <br />
          Kính mong quý vị đến chung vui và chia sẻ khoảnh khắc đáng nhớ này.
        </S.InvitationBody>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td>
                <b>Ông Trần Đức Hiền</b>
                <br />
                <b>Bà Trần Thị Tuyết</b>
              </td>
              <S.InvitationImageTd
                backgroundImage="/images/brush_trans_groom_light.png"
                style={{ padding: '0px 0px 0px 5px' }}
              >
                &nbsp;Con trai&nbsp;&nbsp;&nbsp;
                <br />
                <b>Trần Thành Trung</b>
              </S.InvitationImageTd>
            </tr>
            <tr>
              <td>
                <b>Ông Trịnh Minh Toàn</b>
                <br />
                <b>Bà Phan Thị Quyên</b>
              </td>
              <S.InvitationImageTd
                backgroundImage="/images/brush_trans_bride_light.png"
                style={{ padding: '0px 0px 0px 5px' }}
              >
                &nbsp;&nbsp;Con gái
                <span style={{ fontSize: '15px' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <br />
                <b>Trịnh Phan Giang</b>
              </S.InvitationImageTd>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.MainImg src="/images/gallery/HUY00113.jpg" alt="Love, love, love" />
    </CS.CommonContainer>
  );
}

export default Invitation;
