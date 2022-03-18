const IMG_ROOT = "/skills";
const skills = [
  {
    src: `${IMG_ROOT}/earth.png`,
    title: "model earth using three-js",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAABe2lDQ1BpY2MAACjPlZE9SMNAHMVfU6UqEQc7iDhkqE4WxIo4SisWwUJpK7TqYHLpFzRpSFJcHAXXgoMfi1UHF2ddHVwFQfADxMnRSdFFSvxfUmgRKnjhuB/v8h537wChUWGa1TMFaLptpuJRKZtblQKvENFPXwSizCwjkV7MoOv4uoePr3dhnoX/jUE1bzHAJxHPM8O0iTeIZzdtg/M+cZCVZJX4nHjSpAMSP3Jd8fiNc9FlgWcGzUwqRhwkloodrHQwK5ka8QxxSNV0yheyHquctzhrlRprnZPfUMzrK2mu0xxDHEtIIAkJCmooowIbYVp1UiykaD/axT/q+pPkUshVBiPHAqrQILt+8Df43a1ViEx7SWIU6H1xnI9xILALNOuO833sOM0TwP8MXOltf7UBzH2SXm9roSNgaBu4uG5ryh5wuQOMPBmyKbuSn6ZQKADvZ/RMOWD4FhhY83pr7eP0AchQV8s3wMEhMFGk7PUu9+7r7O3Pf1r9/QByuXKnDsV3VAAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX////z8/P19fX+/v77+/v4+Pj6+vrBwcGxsbG0tLSoqKicnJy3t7ewsLCysrK4uLjZ2dmzs7OsrKyrq6uurq7AwMApKCaZRcrPAAAAAWJLR0QWfNGoGQAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YDCAsVHKE8VboAAAHBelRYdFJhdyBwcm9maWxlIHR5cGUgaWNjAAA4y6VTW44cIQz85xQ5gvGzOU4PNFLuf4EYDPPa2UibWGq1KGO7bBfpd63p1zA1TDAMT9CqpM0ImCakTS9jQ0E2RgQ5pMiJAHaxu6t/JT4aATVpVjIy4CbEKgz/YN2rDkZ5A42w3Zn90NIP7zd12kYahTIumCF5Y2Bo0VLW5SA18wnBxssReGbne/g4Fn7WwLEmH+ccYzjaI+AFv+odtyd8E3J8JGLfTFDFvIaN4AGf8W/up0HVUFucaTvYZ+ECWC04uxecN267NU4OVxN939LeZFXRS0RoByy3J/ARAruO2EnI2NpoVIfSxP/uUL80hoxtna+4MyQhuBLgO4H0dwb5fDAQWMUwis0iFEWYPZH28SD8yw8G8HgSTzYUDG8Cdk0pEeGzIDNUjkhpVx9GKPNsZTLsrcDEb2ee/7YqUaszUXUWnxhoj87o6JGQykemyKUHo37Mbdy08seEWGz67Zj/fDQHNLts7m2ORHvyqG4zL54WQ5AyAylkBqfcXnS33tN9aye1GSgcAuNa58VSyrkqROIu9Tvd7WG/rR32m/sivP9I9CrE9AcIhCBkj56STQAAAC1JREFUCNdjYCAEGJmYWVhBDDYGdg5OLm4eXj5+PgYBQR5+ISFeYRFRggYgAQBBNQEwASDpeAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMy0wOFQxMToyMToxMCswMDowMMkUXAYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDMtMDhUMTE6MjE6MTArMDA6MDC4SeS6AAAAG3RFWHRpY2M6Y29weXJpZ2h0AFB1YmxpYyBEb21haW62kTFbAAAAInRFWHRpY2M6ZGVzY3JpcHRpb24AR0lNUCBidWlsdC1pbiBzUkdCTGdBEwAAABV0RVh0aWNjOm1hbnVmYWN0dXJlcgBHSU1QTJ6QygAAAA50RVh0aWNjOm1vZGVsAHNSR0JbYElDAAAAAElFTkSuQmCC",
    about: "Model Earth using threejs with color and normal map",
    link: "earth",
  },
  {
    src: `${IMG_ROOT}/wave.png`,
    title: "Wave Function Animation",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAABe2lDQ1BpY2MAACjPlZE9SMNAHMVfU6UqEQc7iDhkqE4WxIo4SisWwUJpK7TqYHLpFzRpSFJcHAXXgoMfi1UHF2ddHVwFQfADxMnRSdFFSvxfUmgRKnjhuB/v8h537wChUWGa1TMFaLptpuJRKZtblQKvENFPXwSizCwjkV7MoOv4uoePr3dhnoX/jUE1bzHAJxHPM8O0iTeIZzdtg/M+cZCVZJX4nHjSpAMSP3Jd8fiNc9FlgWcGzUwqRhwkloodrHQwK5ka8QxxSNV0yheyHquctzhrlRprnZPfUMzrK2mu0xxDHEtIIAkJCmooowIbYVp1UiykaD/axT/q+pPkUshVBiPHAqrQILt+8Df43a1ViEx7SWIU6H1xnI9xILALNOuO833sOM0TwP8MXOltf7UBzH2SXm9roSNgaBu4uG5ryh5wuQOMPBmyKbuSn6ZQKADvZ/RMOWD4FhhY83pr7eP0AchQV8s3wMEhMFGk7PUu9+7r7O3Pf1r9/QByuXKnDsV3VAAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX////z8/P19fX+/v77+/v4+Pj6+vrBwcGxsbG0tLSoqKicnJy3t7ewsLCysrK4uLjZ2dmzs7OsrKyrq6uurq7AwMApKCaZRcrPAAAAAWJLR0QWfNGoGQAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YDCAsVHKE8VboAAAHBelRYdFJhdyBwcm9maWxlIHR5cGUgaWNjAAA4y6VTW44cIQz85xQ5gvGzOU4PNFLuf4EYDPPa2UibWGq1KGO7bBfpd63p1zA1TDAMT9CqpM0ImCakTS9jQ0E2RgQ5pMiJAHaxu6t/JT4aATVpVjIy4CbEKgz/YN2rDkZ5A42w3Zn90NIP7zd12kYahTIumCF5Y2Bo0VLW5SA18wnBxssReGbne/g4Fn7WwLEmH+ccYzjaI+AFv+odtyd8E3J8JGLfTFDFvIaN4AGf8W/up0HVUFucaTvYZ+ECWC04uxecN267NU4OVxN939LeZFXRS0RoByy3J/ARAruO2EnI2NpoVIfSxP/uUL80hoxtna+4MyQhuBLgO4H0dwb5fDAQWMUwis0iFEWYPZH28SD8yw8G8HgSTzYUDG8Cdk0pEeGzIDNUjkhpVx9GKPNsZTLsrcDEb2ee/7YqUaszUXUWnxhoj87o6JGQykemyKUHo37Mbdy08seEWGz67Zj/fDQHNLts7m2ORHvyqG4zL54WQ5AyAylkBqfcXnS33tN9aye1GSgcAuNa58VSyrkqROIu9Tvd7WG/rR32m/sivP9I9CrE9AcIhCBkj56STQAAAC1JREFUCNdjYCAEGJmYWVhBDDYGdg5OLm4eXj5+PgYBQR5+ISFeYRFRggYgAQBBNQEwASDpeAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMy0wOFQxMToyMToxMCswMDowMMkUXAYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDMtMDhUMTE6MjE6MTArMDA6MDC4SeS6AAAAG3RFWHRpY2M6Y29weXJpZ2h0AFB1YmxpYyBEb21haW62kTFbAAAAInRFWHRpY2M6ZGVzY3JpcHRpb24AR0lNUCBidWlsdC1pbiBzUkdCTGdBEwAAABV0RVh0aWNjOm1hbnVmYWN0dXJlcgBHSU1QTJ6QygAAAA50RVh0aWNjOm1vZGVsAHNSR0JbYElDAAAAAElFTkSuQmCC",
    about: "Wave function animation using threejs",
    link: "wave-function-animation",
  },
];

export default skills;
