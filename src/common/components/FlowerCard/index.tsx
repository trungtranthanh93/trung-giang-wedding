import * as CS from "src/common/components/Styles";
import PhoneIcon from "@mui/icons-material/Phone";
import { color } from "src/common/utils/styles";
import CircleIcon from "../CircleIcon";

function FlowerCard() {
  return (
    <CS.CommonContainer>
      <CS.CommonMargin margin="30px" />
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonTable>
            <tbody>
              <tr>
                <td>
                  <CS.CommonSubSubTitle>Liên hệ chú rể</CS.CommonSubSubTitle>
                </td>
                <td style={{ padding: "0px 0px 0px 20px" }}>
                  <a href="tel:0386639018">
                    <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                  </a>
                </td>
                <td style={{ padding: "0px 0px 0px 10px" }}>
                  <a
                    href="https://zalo.me/0386639018"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg src="/images/zalo/zalo-nam-30.svg" alt="zalo" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <CS.CommonSubSubTitle>Liên hệ cô dâu</CS.CommonSubSubTitle>
                </td>
                <td style={{ padding: "0px 0px 0px 20px" }}>
                  <a href="tel:087-9999-321">
                    <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                  </a>
                </td>
                <td style={{ padding: "0px 0px 0px 10px" }}>
                  <a
                    href="https://zalo.me/0879999321"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg src="/images/zalo/zalo-nu-30.svg" alt="zalo" />
                  </a>
                </td>
              </tr>
            </tbody>
          </CS.CommonTable>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="50px" />
        <CS.CommonSubTitle>Chúc mừng</CS.CommonSubTitle>
        <CS.CommonTextContainer>
          <CS.CommonSubSubTitle>Mừng chú rể</CS.CommonSubSubTitle>
        </CS.CommonTextContainer>
        <CS.MainImg src="/images/qr/QR_chu_re.jpg" alt="Love, love, love" />
        <CS.CommonMargin margin="40px" />
        <CS.CommonTextContainer>
          <CS.CommonSubSubTitle>Mừng cô dâu</CS.CommonSubSubTitle>
        </CS.CommonTextContainer>
        <CS.MainImg src="/images/qr/QR_co_dau.jpg" alt="Love, love, love" />
      </CS.CommonBody>
      <CS.CommonMargin margin="40px" />
    </CS.CommonContainer>
  );
}

export default FlowerCard;
