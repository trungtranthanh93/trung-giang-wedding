import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import * as CS from 'src/common/components/Styles';
import { color } from 'src/common/utils/styles';
import CircleIcon from '../CircleIcon';

function Contact() {
  const defaultMessage = '2023년 4월 8일 인환 ❤ 채윤 의 결혼식을 축하드립니다!';

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
                <td style={{ padding: '0px 0px 0px 20px' }}>
                  <a href="tel:0386639018">
                    <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 10px' }}>
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
                <td style={{ padding: '0px 0px 0px 20px' }}>
                  <a href="tel:087-9999-321">
                    <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 10px' }}>
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
        <CS.CommonSubTitle>Liên hệ với chủ nhà</CS.CommonSubTitle>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td colSpan={2}>
                <CS.CommonTextContainer>
                  <CS.CommonSubSubTitle>Nhà chú rể</CS.CommonSubSubTitle>
                </CS.CommonTextContainer>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonTextContainer>
                  <CS.CommonSubSubTitle>Nhà cô dâu</CS.CommonSubSubTitle>
                </CS.CommonTextContainer>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <CS.CommonSubSubTitle>
                  Bố <b>Trần Đức Hiền</b>
                </CS.CommonSubSubTitle>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonSubSubTitle>
                  Bố <b>Trịnh Minh Toàn</b>
                </CS.CommonSubSubTitle>
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:0988767334">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td style={{ width: '35px' }}>
                <a
                  href="https://zalo.me/0988767334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CS.MainImg src="/images/zalo/zalo-nam-30.svg" alt="zalo" />
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 60px' }}>
                <a href="tel:0912337538">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td style={{ width: '35px' }}>
                <a
                  href="https://zalo.me/0912337538"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CS.MainImg src="/images/zalo/zalo-nu-30.svg" alt="zalo" />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <CS.CommonSubSubTitle>
                  Mẹ <b>Trần Thị Tuyết</b>
                </CS.CommonSubSubTitle>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonSubSubTitle>
                  Mẹ <b>Phan Thị Quyên</b>
                </CS.CommonSubSubTitle>
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:0988767334">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td style={{ width: '35px' }}>
                <a
                  href="https://zalo.me/0988767334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CS.MainImg src="/images/zalo/zalo-nam-30.svg" alt="zalo" />
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 60px' }}>
                <a href="tel:0941129456">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td style={{ width: '35px' }}>
                <a
                  href="https://zalo.me/0941129456"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CS.MainImg src="/images/zalo/zalo-nu-30.svg" alt="zalo" />
                </a>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.CommonMargin margin="40px" />
    </CS.CommonContainer>
  );
}

export default Contact;
