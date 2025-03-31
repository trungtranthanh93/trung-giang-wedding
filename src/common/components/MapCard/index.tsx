import { useState, useRef } from 'react';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import copyToClipboard from 'src/common/utils';

function MapCard() {
  const mapRef = useRef<HTMLElement | null | any>(null);

  const name = 'Tư gia';
  const lat = 37.4800335;
  const lon = 126.8953833;

  setTimeout(() => {
    if (typeof naver !== 'undefined') {
      const center = new naver.maps.LatLng(lat, lon);
      mapRef.current = new naver.maps.Map('map', {
        center: center,
        disableDoubleClickZoom: false,
        disableDoubleTapZoom: false,
        disableTwoFingerTapZoom: false,
        draggable: false,
        keyboardShortcuts: false,
        pinchZoom: false,
        scrollWheel: false,
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.LEFT_CENTER,
        },
        zoomOrigin: center,
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lon),
        map: mapRef.current,
        animation: naver.maps.Animation.BOUNCE,
      });

      const contentHtml = `
        <div style="padding:10px; text-align:center;">
          <h4>Tư gia</h4>
          <a href="https://goo.gl/maps/XfczX" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/150" style="width: 40vw; max-width: 150px;" />
          </a>
        </div>`;

      const mapElement = document.getElementById('map');
      const mapElementWidth =
        mapElement?.offsetWidth === undefined ? 0 : mapElement.offsetWidth;
      const mapElementHeight =
        mapElement?.offsetHeight === undefined ? 0 : mapElement.offsetHeight;

      const offsetX = mapElementWidth * 0.15;
      const offsetY = mapElementHeight * -0.15;
      const wineShopInfoWindow = new naver.maps.InfoWindow({
        content: contentHtml,
        anchorSkew: true,
        pixelOffset: new naver.maps.Point(offsetX, offsetY),
      });

      const listener = naver.maps.Event.addListener(
        marker,
        'click',
        function (e) {
          if (wineShopInfoWindow.getMap()) {
            wineShopInfoWindow.close();
            mapRef.current.setCenter(center);
          } else {
            wineShopInfoWindow.open(mapRef.current, marker);
          }
        },
      );
    }
  }, 100);

  const navigateNaverMap = () => {
    location.href =
      'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=' +
      lat +
      '&elng=' +
      lon +
      '&etitle=' +
      name;
  };

  const navigateKakaoMap = () => {
    location.href =
      'https://map.kakao.com/link/to/' + name + ',' + lat + ',' + lon;
  };

  const navigateTMap = () => {
    location.href =
      'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx7179ddde21ca4bfb8e6b03c710138f41&name=' +
      name +
      '&lon=' +
      lon +
      '&lat=' +
      lat;
  };
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Địa chỉ nhà trai</CS.CommonTitle>
      <CS.CommonBody>
        <S.MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d929.9697550568026!2d105.78943863112087!3d21.196964372028535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzQ4LjciTiAxMDXCsDQ3JzIyLjEiRQ!5e0!3m2!1svi!2s!4v1743411153965!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </S.MapContainer>
        <CS.CommonMargin margin="10px" />
        <CS.CommonTable>
          <tbody>
            <tr>
              <td style={{ padding: '0px 0px 6px 0px' }}>
                <a>
                  <CS.CommonSubSubTitle>Bản đồ</CS.CommonSubSubTitle>
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 10px' }}>
                <CS.ImageContainer width="30px">
                  <a
                    href="https://maps.app.goo.gl/4rx9KGXNV3Ytobrq6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg
                      src="/images/share/google-map.jpg"
                      alt="google map"
                    />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <b>
              [Địa chỉ nhà trai]{' '}
              <a
                onClick={() => {
                  copyToClipboard(
                    'Nhà 35, Hương Gia 3, Xã Phú Cường, Huyện Sóc Sơn, TP Hà Nội',
                  );
                }}
              >
                Nhà 35, Hương Gia 3, Xã Phú Cường, Huyện Sóc Sơn, TP Hà Nội
              </a>
            </b>
          </CS.CommonP>
        </CS.CommonTextContainer>
      </CS.CommonBody>
      <CS.CommonTitle>Địa chỉ nhà gái</CS.CommonTitle>
      <CS.CommonBody>
        <S.MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.88482708602!2d106.0543479752557!3d20.99725338064421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU5JzUwLjEiTiAxMDbCsDAzJzI0LjkiRQ!5e0!3m2!1svi!2s!4v1743411071551!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </S.MapContainer>
        <CS.CommonMargin margin="10px" />
        <CS.CommonTable>
          <tbody>
            <tr>
              <td style={{ padding: '0px 0px 6px 0px' }}>
                <a>
                  <CS.CommonSubSubTitle>Bản đồ</CS.CommonSubSubTitle>
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 10px' }}>
                <CS.ImageContainer width="30px">
                  <a
                    href="https://maps.app.goo.gl/zwFjnNEMwYCxR7eKA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CS.MainImg
                      src="/images/share/google-map.jpg"
                      alt="google map"
                    />
                  </a>
                </CS.ImageContainer>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <b>
              [Địa chỉ nhà gái]{' '}
              <a
                onClick={() => {
                  copyToClipboard('Xã đại đồng ');
                }}
              >
                Nhà văn hoá thôn Văn Ổ, xã Đại Đồng, huyện Văn Lâm , tỉnh Hưng
                Yên
              </a>
            </b>
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="50px" />
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default MapCard;
