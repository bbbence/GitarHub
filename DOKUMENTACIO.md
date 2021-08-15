## **1. Az alkalmazás célja**

A GitárHub egy webshop alkalmazás, amely gitárok online árusítására és vásárlására szolgál. A felhasználóknak lehetősége van az oldalra regisztrálni, belépni, kilépni, a gitárokat megtekinteni, megrendelni, kiválasztani a szállítás módját, valamint megtekinteni a vásárlásaikról kiállított számlákat. A vizsgaremek fejlesztése folyamán az alkalmazás adminisztrációs felülete fog elkészülni, melyben az adminisztrátor megtekintheti, szerkesztheti, törölheti az egyes elemeket (felhasználók, gitárok, rendelések, kiszállítási adatok, számlák), illetve újakat is hozzáadhat.

## **2. Az alkalmazás telepítése**

- A célgépre klónozza le a https://github.com/bbbence/GitarHub repository tartalmát
- Telepítse a függőségeket az `npm i` parancs segítségével
- Amennyiben szükséges, telepítse az Angular keretrendszert az `npm i -g @angular/cli` paranccsal

## **3. Az alkalmazás konfigurálása**

Állítsa be az API végpont elérési útvonalát a _base.service.ts_ állományban.

## **4. Az alkalmazás indítása**

Indítsa el a megadott Docker containert.

## **5. A végpontok dokumentációja**

1. GET /api/user (- felhasználó lista lekérése)

2. GET /api/user/userId (- egy felhasználó lekerese Id alapján)

3. POST /api/user/userId (- új felhasználó létrehozása)

4. PUT /api/user/userId (- felhasználó updatelése)

5. DELETE /api/user/userId  (- felhasználó törlése Id alapján)

6. GET /api/guitar/  (- az összes gitár listázása)

7. GET /api/guitar/guitarId  (- egy gitár megtekintése Id alapján)

8. POST /api/guitar/guitarId (- új gitár hozzádása)

9. PUT /api/guitar/guitarId  (- egy gitár adatlapjának szerkesztése Id alapján) 

10. DELETE /api/guitar/guitarId (- egy gitár adatlapjának törlése Id alapján)

11. GET /api/order (- összes megrendelés listázása)

12. GET /api/order/orderId (- egy megrendelés megtekintése Id alapján)

13. POST /api/order/orderId (- új megrendelés létrehozása)

14. PUT /api/order/orderId (- megrendelés szerkesztése Id alapján)

15. DELETE /api/order/orderId (- megrendelés törlése Id alapján)

16. GET /api/shipping/ (-összes kiszállítási lap listázása)

17. GET /api/shipping/shippingId  (- egy kiszállítási lap lekérése Id alapján)

18. POST /api/shipping/shippingId (- egy új kiszállítási lap létrehozása)

19. PUT /api/shipping/shippingId (- egy kiszállítási lap szerkesztése Id alapján)

20. DELETE /api/shipping/shippingId (- egy kiszállítási lap törlése Id alapján)

21. GET /api/bill/ (-összes számla listázása)

22. GET /api/bill/billId  (- egy számla lekérése Id alapján)

23. POST /api/bill/billId (- egy új számla létrehozása)

24. PUT /api/bill/billId (- egy számla szerkesztése Id alapján)

25. DELETE /api/bill/billId (- egy számla törlése Id alapján)