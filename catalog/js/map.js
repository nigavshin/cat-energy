ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938635, 30.323118],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'cat-energy метка',
            iconContent: '12'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map-pin.png',
            iconImageSize: [113, 106],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        
        .add(myPlacemarkWithContent);
});