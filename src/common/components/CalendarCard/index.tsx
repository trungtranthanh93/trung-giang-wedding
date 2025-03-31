import { format } from 'date-fns';
import { ko, vi } from 'date-fns/locale';
import { DateFormatter, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import { color } from 'src/common/utils/styles';

function CalendarCard() {
  const today = new Date();
  const weddingDate = new Date(2025, 3, 6);

  const seasonEmoji: Record<string, string> = {
    winter: '⛄️',
    spring: '🌸',
    summer: '🌻',
    autumn: '🍂',
  };

  const getSeason = (month: Date): string => {
    const monthNumber = month.getMonth();
    if (monthNumber >= 11 && monthNumber < 2) return 'winter';
    if (monthNumber >= 2 && monthNumber < 5) return 'spring';
    if (monthNumber >= 5 && monthNumber < 8) return 'summer';
    else return 'autumn';
  };

  const formatCaption: DateFormatter = (date, options) => {
    const season = getSeason(date);
    return (
      <>
        <span role="img" aria-label={season}>
          {seasonEmoji[season]}
          &nbsp; &nbsp;
        </span>
        <S.CalendarTitle>
          {format(date, 'yyyy-MM-dd', { locale: options?.locale })}
        </S.CalendarTitle>
      </>
    );
  };

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(
    (weddingDate.getTime() - today.getTime()) / oneDay,
  );
  const absDiffDays = Math.abs(diffDays);
  // const commentLeftDays = diffDays > 0 ? 'Còn lại' : 'Đã qua';

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Lịch</CS.CommonTitle>
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonSubTitleLong>
            15h Ngày 06 tháng 04 năm 2025
          </CS.CommonSubTitleLong>
          <CS.CommonSubTitleLong>
            Lễ thành hôn của Thành Trung ❤ Phan Giang còn{' '}
            <a>{absDiffDays} ngày</a> sẽ được tổ chức.
          </CS.CommonSubTitleLong>
          <CS.CommonP>
            <b>
              [Tiệc nhà trai]{' '}
              <a>
                16 giờ, Chủ Nhật ngày 06/04/2025 tại Tư gia. Số 35, Hương Gia 3
                , Xã Phú Cường , Sóc Sơn, Hà nội.
              </a>
            </b>
          </CS.CommonP>
          <CS.CommonP>
            <b>
              [Tiệc nhà gái]{' '}
              <a>
                16 giờ, Thứ bảy ngày 05/04/2025 Tại Tư gia. Nhà văn hoá thôn Văn Ổ, xã
                Đại Đồng, Huyện Văn Lâm, Hưng Yên
              </a>
            </b>
          </CS.CommonP>
        </CS.CommonTextContainer>
        <S.CalendarContainer>
          <S.CalendarBody>
            <DayPicker
              mode="single"
              defaultMonth={weddingDate}
              modifiers={{ booked: weddingDate }}
              modifiersStyles={{
                booked: {
                  border: '2px solid',
                  color: color.wine,
                  fontSize: '1.3rem',
                },
              }}
              disableNavigation
              showOutsideDays
              locale={vi}
              styles={{
                caption: { color: color.wine },
                tfoot: { textAlign: 'center' },
              }}
              formatters={{ formatCaption }}
            />
          </S.CalendarBody>
        </S.CalendarContainer>
      </CS.CommonBody>
      <CS.CommonMargin margin="30px" />
    </CS.CommonContainer>
  );
}

export default CalendarCard;
