// global kakao
import styled from "styled-components";
import { useEffect } from "react";
import cn from "classnames";

const { kakao } = window;

const DetailMap = () => {

  // 카카오 지도 연동
    useEffect(() => {
      let container = document.getElementById("map");

      let options = {
        center: new window.kakao.maps.LatLng(35.85133, 127.734086),
        level: 3,
      };
      
      // 지도 생성      
      let map = new window.kakao.maps.Map(container, options);
      
      // 주소-좌표 변환 객체를 생성합니다
      let geocoder = new kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(`서울특별시 강남구 테헤란로 207 아가방빌딩 14층`, function(result, status) {

          // 정상적으로 검색이 완료됐으면 
          if (status === kakao.maps.services.Status.OK) {

              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              let marker = new kakao.maps.Marker({
                  map: map,
                  position: coords
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // let infowindow = new kakao.maps.InfoWindow({
              //     content: null
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
          } 
      });    
      //드래그 막기
      map.setDraggable(false);
      //줌 막기
      map.setZoomable(false);

      console.log("loading kakaomap");
    }, []);



  return (
    <DetailMapST>
      <div className="wrap">
        <span className="header">마감일</span>
        <span className="body">2021.11.30</span>
      </div>
      <div className="wrap">
        <span className="header">근무지역</span>
        <span className="body">서울특별시 강남구 테헤란로 207 아가방빌딩 14층</span>
      </div>
      <div className={cn("Map")}>
        <div className={cn("MapContainer")} id="map">
        </div>
      </div>
    </DetailMapST>
  )
}

export default DetailMap;

const DetailMapST = styled.div`
margin-bottom: 40px;

.wrap {
  display: flex;
  margin-bottom: 20px;
}

.header {
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: #999;
}

.body {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.Map, .MapContainer {
  width: 700px;
  height: 254px;
}
`