const IMG_ROOT = "/logos/companies";
const images = [
  {
    src: `${IMG_ROOT}/schibsted.png`,
    title: "schibsted",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAABe2lDQ1BpY2MAACjPlZE9SMNAHMVfU6UqEQc7iDhkqE4WxIo4SisWwUJpK7TqYHLpFzRpSFJcHAXXgoMfi1UHF2ddHVwFQfADxMnRSdFFSvxfUmgRKnjhuB/v8h537wChUWGa1TMFaLptpuJRKZtblQKvENFPXwSizCwjkV7MoOv4uoePr3dhnoX/jUE1bzHAJxHPM8O0iTeIZzdtg/M+cZCVZJX4nHjSpAMSP3Jd8fiNc9FlgWcGzUwqRhwkloodrHQwK5ka8QxxSNV0yheyHquctzhrlRprnZPfUMzrK2mu0xxDHEtIIAkJCmooowIbYVp1UiykaD/axT/q+pPkUshVBiPHAqrQILt+8Df43a1ViEx7SWIU6H1xnI9xILALNOuO833sOM0TwP8MXOltf7UBzH2SXm9roSNgaBu4uG5ryh5wuQOMPBmyKbuSn6ZQKADvZ/RMOWD4FhhY83pr7eP0AchQV8s3wMEhMFGk7PUu9+7r7O3Pf1r9/QByuXKnDsV3VAAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX////z8/P19fX+/v77+/v4+Pj6+vrBwcGxsbG0tLSoqKicnJy3t7ewsLCysrK4uLjZ2dmzs7OsrKyrq6uurq7AwMApKCaZRcrPAAAAAWJLR0QWfNGoGQAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YDCAsVHKE8VboAAAHBelRYdFJhdyBwcm9maWxlIHR5cGUgaWNjAAA4y6VTW44cIQz85xQ5gvGzOU4PNFLuf4EYDPPa2UibWGq1KGO7bBfpd63p1zA1TDAMT9CqpM0ImCakTS9jQ0E2RgQ5pMiJAHaxu6t/JT4aATVpVjIy4CbEKgz/YN2rDkZ5A42w3Zn90NIP7zd12kYahTIumCF5Y2Bo0VLW5SA18wnBxssReGbne/g4Fn7WwLEmH+ccYzjaI+AFv+odtyd8E3J8JGLfTFDFvIaN4AGf8W/up0HVUFucaTvYZ+ECWC04uxecN267NU4OVxN939LeZFXRS0RoByy3J/ARAruO2EnI2NpoVIfSxP/uUL80hoxtna+4MyQhuBLgO4H0dwb5fDAQWMUwis0iFEWYPZH28SD8yw8G8HgSTzYUDG8Cdk0pEeGzIDNUjkhpVx9GKPNsZTLsrcDEb2ee/7YqUaszUXUWnxhoj87o6JGQykemyKUHo37Mbdy08seEWGz67Zj/fDQHNLts7m2ORHvyqG4zL54WQ5AyAylkBqfcXnS33tN9aye1GSgcAuNa58VSyrkqROIu9Tvd7WG/rR32m/sivP9I9CrE9AcIhCBkj56STQAAAC1JREFUCNdjYCAEGJmYWVhBDDYGdg5OLm4eXj5+PgYBQR5+ISFeYRFRggYgAQBBNQEwASDpeAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMy0wOFQxMToyMToxMCswMDowMMkUXAYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDMtMDhUMTE6MjE6MTArMDA6MDC4SeS6AAAAG3RFWHRpY2M6Y29weXJpZ2h0AFB1YmxpYyBEb21haW62kTFbAAAAInRFWHRpY2M6ZGVzY3JpcHRpb24AR0lNUCBidWlsdC1pbiBzUkdCTGdBEwAAABV0RVh0aWNjOm1hbnVmYWN0dXJlcgBHSU1QTJ6QygAAAA50RVh0aWNjOm1vZGVsAHNSR0JbYElDAAAAAElFTkSuQmCC",
    about:
      "Schibsted Media Group is an international media group. The company has its headquarters in Oslo, Norway. Schibsted is a global family of digital consumer brands leading the way across media, online marketplaces and technology ventures.",
    link: "https://schibsted.com/",
  },
  {
    src: `${IMG_ROOT}/adevinta.png`,
    title: "adevinta",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAbFBMVEUAAAApANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIpANIAAAB9qEvcAAAAI3RSTlMAAAgEBgUBAwJKQUxROjRLRz1TZGJ9XWZZeQoPHhkREBIbII4vggEAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5gMJBwwOeCMT6wAAAD5JREFUCNdjYMAKGOGAgYmZhZWRjZ2Rg5GBk4ubh5ePn19AkEFIWERUTERcQliSQUpaRlZOXkFaUQlZG1YAAINGAruttg7oAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTA5VDA3OjExOjUyKzAwOjAw0KGK7gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0wOVQwNzoxMTo1MiswMDowMKH8MlIAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMzkwrdfEFwAAABh0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNzMw6VbneQAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjAzNDY3Nzcw8O9qswAAABN0RVh0VGh1bWI6OlNpemUAMjUzNTJCQgfGsUkAAAAldEVYdFRodW1iOjpVUkkAZmlsZTovL29yaWcvQURFLk9MX0JJRy5wbmdA6xN3AAAAAElFTkSuQmCC",
    about:
      "Adevinta is a global classifieds specialist, with online marketplaces in 15 countries. Adevintas portfolio of digital brands unlock the full value in every person, place and thing by creating perfect matches on the world’s most trusted marketplaces.",
    link: "https://adevinta.com/",
  },
  {
    src: `${IMG_ROOT}/pharmeasy.png`,
    title: "pharmeasy",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX////////////////r9vOf08bm9PD////k8+/b7+r9/v7n9PGv28+o18vs9vP5/PzB49ql1sr3+/q/4tnL5+Dm9PDl8/Da7unJ5t/O6eKd0sWj1ciY0MKd08Wp2Mya0cOUzsCTzr/7/fz6/fzy+fj1+/n4/Pv2+/nx+ffy+fft9/QEh4tRAAAAB3RSTlP7/f75/f39SXnIfwAAAAFiS0dEAIgFHUgAAAAHdElNRQfmAwkHDA54IxPrAAAAUElEQVQI12NgYIQAJmYGdhhgAjM5OLnY2RlBTG4eXj4ok19AUAjEFBYRFROXkOTgYGGQkpaRlZOXUVBkZVBSVlFVU9fQ1GJDGMbIwAhjMgAA2hoE4Id+mGwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMDlUMDc6MTE6NTQrMDA6MDCzcb/UAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTA5VDA3OjExOjU0KzAwOjAwwiwHaAAAAABJRU5ErkJggg==",
    about:
      "PharmEasy is an Indian healthcare “super app” that provides on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic tests, and teleconsultations services",
    link: "https://pharmeasy.in/",
  },
  {
    src: `${IMG_ROOT}/india-gold.jpeg`,
    title: "india-gold",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAABe2lDQ1BpY2MAACjPlZE9SMNAHMVfU6UqEQc7iDhkqE4WxIo4SisWwUJpK7TqYHLpFzRpSFJcHAXXgoMfi1UHF2ddHVwFQfADxMnRSdFFSvxfUmgRKnjhuB/v8h537wChUWGa1TMFaLptpuJRKZtblQKvENFPXwSizCwjkV7MoOv4uoePr3dhnoX/jUE1bzHAJxHPM8O0iTeIZzdtg/M+cZCVZJX4nHjSpAMSP3Jd8fiNc9FlgWcGzUwqRhwkloodrHQwK5ka8QxxSNV0yheyHquctzhrlRprnZPfUMzrK2mu0xxDHEtIIAkJCmooowIbYVp1UiykaD/axT/q+pPkUshVBiPHAqrQILt+8Df43a1ViEx7SWIU6H1xnI9xILALNOuO833sOM0TwP8MXOltf7UBzH2SXm9roSNgaBu4uG5ryh5wuQOMPBmyKbuSn6ZQKADvZ/RMOWD4FhhY83pr7eP0AchQV8s3wMEhMFGk7PUu9+7r7O3Pf1r9/QByuXKnDsV3VAAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX////z8/P19fX+/v77+/v4+Pj6+vrBwcGxsbG0tLSoqKicnJy3t7ewsLCysrK4uLjZ2dmzs7OsrKyrq6uurq7AwMApKCaZRcrPAAAAAWJLR0QWfNGoGQAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+YDCAsVHKE8VboAAAHBelRYdFJhdyBwcm9maWxlIHR5cGUgaWNjAAA4y6VTW44cIQz85xQ5gvGzOU4PNFLuf4EYDPPa2UibWGq1KGO7bBfpd63p1zA1TDAMT9CqpM0ImCakTS9jQ0E2RgQ5pMiJAHaxu6t/JT4aATVpVjIy4CbEKgz/YN2rDkZ5A42w3Zn90NIP7zd12kYahTIumCF5Y2Bo0VLW5SA18wnBxssReGbne/g4Fn7WwLEmH+ccYzjaI+AFv+odtyd8E3J8JGLfTFDFvIaN4AGf8W/up0HVUFucaTvYZ+ECWC04uxecN267NU4OVxN939LeZFXRS0RoByy3J/ARAruO2EnI2NpoVIfSxP/uUL80hoxtna+4MyQhuBLgO4H0dwb5fDAQWMUwis0iFEWYPZH28SD8yw8G8HgSTzYUDG8Cdk0pEeGzIDNUjkhpVx9GKPNsZTLsrcDEb2ee/7YqUaszUXUWnxhoj87o6JGQykemyKUHo37Mbdy08seEWGz67Zj/fDQHNLts7m2ORHvyqG4zL54WQ5AyAylkBqfcXnS33tN9aye1GSgcAuNa58VSyrkqROIu9Tvd7WG/rR32m/sivP9I9CrE9AcIhCBkj56STQAAAC1JREFUCNdjYCAEGJmYWVhBDDYGdg5OLm4eXj5+PgYBQR5+ISFeYRFRggYgAQBBNQEwASDpeAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMy0wOFQxMToyMToxMCswMDowMMkUXAYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDMtMDhUMTE6MjE6MTArMDA6MDC4SeS6AAAAG3RFWHRpY2M6Y29weXJpZ2h0AFB1YmxpYyBEb21haW62kTFbAAAAInRFWHRpY2M6ZGVzY3JpcHRpb24AR0lNUCBidWlsdC1pbiBzUkdCTGdBEwAAABV0RVh0aWNjOm1hbnVmYWN0dXJlcgBHSU1QTJ6QygAAAA50RVh0aWNjOm1vZGVsAHNSR0JbYElDAAAAAElFTkSuQmCC",
    about:
      "Indiagold is an Indian financial services company providing instant gold loans and secure gold locker services across India. Supporting over 2 million customers across India.",
    link: "https://indiagold.co/",
  },
  {
    src: `${IMG_ROOT}/zopa.png`,
    title: "zopa",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEX////9//74/f39///7/v7+///8/v7p+viK5dza9/SS59647+qy7uiZ6ODc9/SQ5971/fzm+feX6ODj+fef6uLB8ezC8u3I8+/P9PHo+viLA6koAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+YDCQcMDngjE+sAAAA0SURBVAjXY2AgBBiZmFlY2dgYGBkY2Dk4ubh5ePn4BRgEhYRFRMXEJbgkGVgZoSpZCZoFAEszAWLNX5b6AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTA5VDA3OjExOjU0KzAwOjAws3G/1AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0wOVQwNzoxMTo1NCswMDowMMIsB2gAAAAASUVORK5CYII=",
    about:
      "Zopa is a British financial services company which offers deposit accounts and credit cards. Widely known and recognized as one of the first peer-to-peer lending companies in the world",
    link: "https://zopa.com/",
  },
  {
    src: `${IMG_ROOT}/pacewisdom.jpeg`,
    title: "pacewisdom",
    url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMHCP/EACYQAAEDAwMCBwAAAAAAAAAAAAECBBEDBRIABiETMQcUIoOSwdH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABwRAQACAQUAAAAAAAAAAAAAAAEAAhExQZHB8P/aAAwDAQACEQMRAD8A39uTde4B4iW5Fqft12AYpq9Ku3NIc+vrFRyECYx547GeKQL1byJD5sfeT+6EWW305wYNkz3xopH1poYNQI8tS+A0AGklSjVVtny98AbT/9k=",
    about:
      "Pace Wisdom Solutions is a deep-tech Product engineering and consulting firm. With offices in San Francisco, USA & India.",
    link: "https://pacewisdom.com/",
  },
  {
    src: `${IMG_ROOT}/talentier.png`,
    title: "talentier",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEU727k527g827l/59G38uW28uW18eW58uaj7t5I3b4627lE3byw8ePT9+/1/fud7dw/3LpB3LtG3b3M9u3L9u3K9exA3LvL9ezG9Oqo7+A927pj4sdK3r7///9HphAvAAAAAWJLR0Qd6wNxkQAAAAd0SU1FB+YDCQcMDngjE+sAAABCSURBVAjXY2BABoxwFhMzCysbOwcnFwMXNw8vHx8vvwBIVFBIWESICayCS0BUVACqWkwcwZSQhJkhJS3DBTcZzAIAdGcCYV+xMFcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMDlUMDc6MTE6NTQrMDA6MDCzcb/UAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTA5VDA3OjExOjU0KzAwOjAwwiwHaAAAAABJRU5ErkJggg==",
    about:
      "Talentier is a platform for sourcing candidates from multiple recruitment agencies. Combining machine learning with an extensive network of independent job hunters, they help clients find specialized headhunters",
    link: "https://talentier.es/",
  },
  {
    src: `${IMG_ROOT}/leboncoin.png`,
    title: "leboncoin",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAqFBMVEX5o3v2dTn1ain1ayr1ayn1bSz1ayr1ain1bi/1ayn1bzD2ekD2dDf1cDH4mm34lWb1by/2dTj1cjT1cjT1cTP1cTL1cTL2djn2dDf1aSf1aij1ain1aSj2dDj1ayr2fkX3jVv3jVr1cTL5oXj3i1j3ilf5oHf1cjT3h1L1bCz3iFT4lmj4lGX2fEL2ekD3hlL2dTj5rIj5qIL5o3v5oXf5n3X5poD///9IfW16AAAAHnRSTlMjXV9eXvb6+vr6Xvr6X/r6X132+vr69l1dX15eX100O3GZAAAAAWJLR0Q3MLi4RwAAAAd0SU1FB+YDCQcMDngjE+sAAABtSURBVAjXDcbpAkJAFAbQb+ZyB2lRg6KMZBmVaPP+j1bn1wGEJMchKQDhsvI8xa6A5MKUZ1OwBHF1qZu2YgL5XW1t0/n/qv56u9teEYLF8BjHaQgJy9Xz9f585/UG0XandazjJAX2hyzPs+MJP3cUCFJ2Q3aZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTA5VDA3OjExOjUzKzAwOjAwdtaBWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0wOVQwNzoxMTo1MyswMDowMAeLOeYAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",
    about:
      "Leboncoin is the number one website in France for buying and selling on the Internet, with over 28 million monthly unique visitors.",
    link: "https://www.leboncoin.fr/",
  },
  {
    src: `${IMG_ROOT}/corotos.jpeg`,
    title: "corotos",
    url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+EAikV4aWYAAE1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAASShgAHAAAAMQAAAFCgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAAQVNDSUkAAAAxLjE5LTIyQi1PVE82WVpJQTNDUjVEN1hHSVRVUlhKSTNBSS4wLjItOAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAgJ/8QAIRAAAgICAgIDAQAAAAAAAAAAAQIDBAURBiEABwgTMWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHxEBAAEDBQEBAAAAAAAAAAAAARECAyEABBIxUWGB/9oADAMBAAIRAxEAPwDVX298o8vX+RmCGA9h+vanAYHgjyle1maMFlpftdZARIRMq6C6KghtdaG28oSl7d4tk6UNmtyTA2K1hFliljvRskqMNhgQdEEEEEeNl4Hg5mkZ8LiXaZi8hapGS7HfZ67PZ7/p8TDxzH14ljjoUkjQBVVYFAUD8AGvzxC7stvTW3aeUoHZEHwpM5y9uJ60ba3d5OCUkTkKpV9mt/AAPNf/2Q==",
    about:
      "Corotos is the largest marketplace in Dominican Republic, with over 2 million monthly unique visitors.",
    link: "https://www.corotos.com.do/",
  },
  {
    src: `${IMG_ROOT}/visitingmedia.svg`,
    title: "visiting media",
    url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+EAikV4aWYAAE1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAASShgAHAAAAMQAAAFCgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAAQVNDSUkAAAAxLjE5LTIyQi1PVE82WVpJQTNDUjVEN1hHSVRVUlhKSTNBSS4wLjItOAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAgJ/8QAIRAAAgICAgIDAQAAAAAAAAAAAQIDBAURBiEABwgTMWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHxEBAAEDBQEBAAAAAAAAAAAAARECAyEABBIxUWGB/9oADAMBAAIRAxEAPwDVX298o8vX+RmCGA9h+vanAYHgjyle1maMFlpftdZARIRMq6C6KghtdaG28oSl7d4tk6UNmtyTA2K1hFliljvRskqMNhgQdEEEEEeNl4Hg5mkZ8LiXaZi8hapGS7HfZ67PZ7/p8TDxzH14ljjoUkjQBVVYFAUD8AGvzxC7stvTW3aeUoHZEHwpM5y9uJ60ba3d5OCUkTkKpV9mt/AAPNf/2Q==",
    about:
      "Visiting Media is the world’s leading virtual sales enablement platform. With their platform - TrueTour, which makes it incredibly fast and easy for salespeople to find and present their sales and marketing materials during face-to-face selling and when selling virtually via screen share.",
    link: "https://visitingmedia.com/",
  },
  {
    src: `${IMG_ROOT}/ishir.jpeg`,
    title: "ishir",
    url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+EAikV4aWYAAE1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAASShgAHAAAAMQAAAFCgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAAQVNDSUkAAAAxLjE5LTIyQi1PVE82WVpJQTNDUjVEN1hHSVRVUlhKSTNBSS4wLjItOAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAgJ/8QAIRAAAgICAgIDAQAAAAAAAAAAAQIDBAURBiEABwgTMWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHxEBAAEDBQEBAAAAAAAAAAAAARECAyEABBIxUWGB/9oADAMBAAIRAxEAPwDVX298o8vX+RmCGA9h+vanAYHgjyle1maMFlpftdZARIRMq6C6KghtdaG28oSl7d4tk6UNmtyTA2K1hFliljvRskqMNhgQdEEEEEeNl4Hg5mkZ8LiXaZi8hapGS7HfZ67PZ7/p8TDxzH14ljjoUkjQBVVYFAUD8AGvzxC7stvTW3aeUoHZEHwpM5y9uJ60ba3d5OCUkTkKpV9mt/AAPNf/2Q==",
    about:
      "ISHIR is a global diversified outsourced IT services company which brings Offshore Outsourcing to clients’ doorstep.",
    link: "https://www.ishir.com/",
  },
  {
    src: `${IMG_ROOT}/borderlessminds.png`,
    title: "borderless minds",
    url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+EAikV4aWYAAE1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAASShgAHAAAAMQAAAFCgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAAQVNDSUkAAAAxLjE5LTIyQi1PVE82WVpJQTNDUjVEN1hHSVRVUlhKSTNBSS4wLjItOAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAgJ/8QAIRAAAgICAgIDAQAAAAAAAAAAAQIDBAURBiEABwgTMWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHxEBAAEDBQEBAAAAAAAAAAAAARECAyEABBIxUWGB/9oADAMBAAIRAxEAPwDVX298o8vX+RmCGA9h+vanAYHgjyle1maMFlpftdZARIRMq6C6KghtdaG28oSl7d4tk6UNmtyTA2K1hFliljvRskqMNhgQdEEEEEeNl4Hg5mkZ8LiXaZi8hapGS7HfZ67PZ7/p8TDxzH14ljjoUkjQBVVYFAUD8AGvzxC7stvTW3aeUoHZEHwpM5y9uJ60ba3d5OCUkTkKpV9mt/AAPNf/2Q==",
    about:
      "BorderlessMind makes building, managing, and retaining a remote team a whole lot easier and faster.",
    link: "https://www.borderlessmind.com/",
  },
];

export default images;
