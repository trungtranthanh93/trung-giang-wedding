import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function Footer() {
  return (
    <CS.CommonContainer>
      <CS.CommonBody>
        <S.FooterBody>
          Created by{' '}
          <a
            href="https://github.com/trungtranthanh93"
            target="_blank"
            rel="noopener noreferrer"
          >
            TrungTran
          </a>{' '}
          .
        </S.FooterBody>
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default Footer;
