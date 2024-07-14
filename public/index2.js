window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.5639635 , lng: 126.8916867 },
        zoom: 10
    });
    
    const malls = [
        { label: "C", name: "코액스몰", lat: 37.5113211, lng: 127.0569946},
        { label: "L", name: "롯데타워", lat: 37.5124641, lng: 127.102543},
        { label: "T", name: "티원", lat: 37.5125021, lng: 127.0428437},
    ];

    const bounds = new google.maps.LatLngBounds();   //지도 가장자리 없애고 타이트하게 마커 배치
    const infoWindow = new google.maps.InfoWindow(); //마커 클릭 시 추가 정보 띄우기
    
    malls.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng},
            label,
            map
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.panTo(marker.position);  //마커 클릭 시 마커를 기준으로 지조 중심으로 이동
            infoWindow.setContent(name); //마커 클릭 시 나올 추가 정보 지정
            infoWindow.open({
                anchor: marker,
                map
            })
        })
    }); 

    map.fitBounds(bounds);
};