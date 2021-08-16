# GitárHub

Training 360 - Full Stack API fejlesztő tanfolyam vizsgaremek

Belépési adatok:

Felhasználónév: admin@gmail.com

Jelszó: admin_pw

_______________________________

GitárHub – User Storyk

1.	Adminként szeretném egy felületen látni az összes adatbázis főmenüjét, hogy átlátható legyen és könnyen megtaláljak mindent az oldalon.

Elfogadási kritérium: egy felületen megjelenik a ‘Felhasználók’ , ‘Gitárok’ ,  ‘Rendelések’ , ‘Szállítások’ , ‘Számlák’  menüpont, külön-külön kártyákon, melyekre kattintva az adott menüpontra navigál.

FELHASZNÁLÓK

2.	Adminként szeretném a ‘Felhasználók’ menüpontra kattintva látni az összes Felhasználó listáját, amelyben lehessen  a listában található kifejezésekre keresni és a fejlécek alapján rendezni.

Elfogadási kritérium: a ‘Felhasználók’ menüpontra kattintva megjelenik a felhasználók listája, felül egy keresőmezővel, amelyben lehet kifejezésekre keresni, és a fejlécekre kattintva rendezi a mezőket az alkalmazás növekvő vagy csökkenő sorrendbe.

3.	Adminként szeretnék új felhasználót hozzáadni a listához, hogy ha valaki pl. sikertelenül regisztrál, manuálisan is hozzá lehessen adni.

Elfogadási kritérium: a felületen található egy gomb, amivel új felhasználó adható hozzá a listához.

4.	Adminként szeretnék tudni felhasználókat szerkeszteni, hogy ha egy felhasználó valamely adata megváltozik, tudjam frissíteni az új adatra.

Elfogadási kritérium: a felhasználók listájában található egy szerkesztés gomb, amelyre kattintva megjelenik az adott felhasználó részletes adatlapja, szerkeszthető formában. A szerkesztő alján ‘Mentés’ gomb, melyre kattintással elmenti a módosításokat, valamint ‘Mégse’ gomb, mellyel mentés nélkül tér vissza a lista nézetre.

5.	Adminként szeretnék tudni felhasználókat törölni a rendszerből, hogy hibás regisztráció esetén, vagy akár hosszú inaktivitás miatt képes legyek eltávolítani a listából.

Elfogadási kritérium: a listában a felhasználók nevei mellett legyen egy törlés gomb, amelyre kattintva egy felugró ablakos megerősítő üzenet leokézása után az adott felhasználó törlődik a listából, ‘Mégse’ választása esetén viszont a listában marad.

GITÁROK

6.	Adminként szeretném tudni kilistázni az összes gitárt, és a listában keresni, sorbarendezni fejlécek alapján, hogy minél könnyebb legyen megtalálni egy általam keresett gitárt.

Elfogadási kritérium: A ‘Gitárok’ menüpontra kattintva megjeleníti a gitárok listáját, melyben lehet egy keresőmezőbe írva keresni, és a fejlécekre kattintva sorbarendezni.

7.	Adminként szeretnék tudni új gitárt hozzáadni a listához, hogy ha valami miatt pl. törlődik egy gitár, de még van róla másolat, vissza lehessen tenni a listába.

Elfogadási kritérium:  a listában található egy hozzáadás gomb, melyre kattintva megjelenik egy szerkesztő panel, ahol tudok hozzáadni gitárt a ‘Mentés’ gombra kattintással, illetve a ‘Mégse’ gombbal kilép a panelből mentés nélkül.

8.	Adminként szeretném tudni szerkeszteni a gitárok adatlapját. 

Elfogadási kritérium: a listában található egy szerkesztés gomb a gitárok mellett, melyre kattintva megjelenik egy szerkesztő felület, ahol tudok a gitár adataiban, tulajdonságaiban szerkeszteni, beleírni, törölni.

9.	Adminként szeretnék tudni gitárt törölni, hogy pl. duplikáció esetén a felesleges bejegyzést el tudjam távolítani.

Elfogadási kritérium: a listában a gitárok mellett találhtató egy törlés gomb, melyre kattintva egy megerősítő kérdés után az OK-ra kattintva az adott gitár törlődik, ‘Mégse’ választása esetén viszont a helyén marad.

MEGRENDELÉSEK

10.	 Adminként szeretném tudni kilistázni az összes megrendelést, hogy egy oldalon tudjam mindet áttekinteni.

Elfogadási kritérium: a főmenüben a ‘Megrendelések’ menüpontra kattintva megjelenik a megrendelések listája, és egy megrendelés címére kattintva megjelenik a hozzá tartozó rendelés. 

11.	 Adminként szeretnék tudni új megrendelést hozzáadni.

Elfogadási kritérium: a megrendelések listáján legyen egy új rendelés hozzáadása gomb vagy ikon, melyre kattintva felugró ablakban adhatok hozzá megrendelést az ‘Elküldés’ gombra kattintással, illetve a ‘Mégse’ gombra kattintással kilép az ablakból a megrendelés elküldése nélkül.

12.	Adminként szeretnék tudni szerkeszteni egy megrendelést, hogy ha pl. valaki téves címet adott meg, ki tudjam javítani.

Elfogadási kritérium: minden megrendelésnél legyen egy szerkesztés gomb, melyre kattintással megjelenik egy szerkesztő ablak, melynek alján egy ‘Mentés’ és egy ‘Mégse’ gomb helyezkedik el. Előbbi elmenti a változtatásokat, utóbbi kilép a változtatások mentése nélkül.

13. Adminként szeretnék tudni megrendeléseket törölni, hogy ha valaki esetleg téves megrendelést adott le, el tudjam távolítani azt.

Elfogadási kritérium: a megrendelések listájában legyen egy törlés gomb, melyre kattintva felugró ablak jelenik meg egy megerősítő kérdéssel, aminél ha OK-ra kattintunk, törlődjön, Mégse-re kattintunk, akkor pedig a helyén maradjon az elem.

SZÁLLÍTÁS
   
14.	 Adminként szeretném tudni kilistázni az összes szállítást, amely létre lett hozva a gitárok megrendelésekor, és ezekben keresni, illetve sorba rendezni.

Elfogadási kritérium: a főmenüben a ‘Szállítás’ menüpontra kattintva listázza az összes kiszállítási adatlapot, melyek között egy keresőmező segítségével lehet keresni, és a fejlécek alapján sorbarendezni.

15.	 Adminként szeretnék tudni új kiszállítási adatlapot létrehozni az oldalon.

Elfogadási kritérium: a 'Szállítás' menüpontban legyen egy 'Új kiszállítás létrehozása' gomb vagy ikon, mely megnyomásakor felugrik egy ablak, ahol megadhatjuk az új szállítás adatait.

16.	 Adminként szeretnék tudni kiszállítási adatlapot szerkeszteni, átírni.

Elfogadási kritérium: a 'Szállítás' menüpontban legyen egy 'Címke szerkesztése' gomb vagy ikon, amelyre kattintva felugrik egy szerkesztőablak, ahol be lehet írni az új adatokat, majd az ‘Ok’ vagy a ‘Mégse’ gombra kattintással elmenteni a változtatásokat ill. kilépni mentés nélkül.

17.	 Adminként szeretnék szállítási adatlapot törölni az oldalról.

Elfogadási kritérium: a 'Szállítás' menüpontban legyen egy gomb a szállítási adatlap törlésére, amelyre kattintva felugró ablak kérdezi meg a törlés megerősítését. Az ‘Ok’ gombbal törli az adatlapot, a ‘Mégse’ gombra kattintással viszont a helyén marad.

SZÁMLÁK
      
18.	Adminként szeretném kilistázni az összes számlát, amelyek a megrendelésekhez érkeztek, és az időpontok, felhasználónevek szerint sorbarendezni a listát növekvő vagy csökkenő sorrendbe.

Elfogadási kritérium: a Főmenüben a 'Számlák' menüpontot választva listázza ki a számlákat, amelyet a megrendelés időpontja, a megrendelő neve, email címe, és a megrendelés értéke alapján lehet a fejlécre kattintva sorba rendezni.

19.	Adminként szeretnék lekérni egy adott megrendeléshez tartozó számlát.

Elfogadási kritérium: a listában a számla sorára kattintva megjelenik a kért számla.

20. Adminként szeretném tudni szerkeszteni a számlákat.

Elfogadási kritérium: a számláknál legyen lehetőség az adott számla szerkesztésére, megváltoztatására.

21. Adminként szeretnék tudni számlákat törölni.

Elfogadási kritérium: a számlák listájában és adatlapján legyen lehetőség egy-egy számla törlésére.

_______________________________

További információk:

Megvalósítás időtartama: 10 hét

Prioritás: Magas

További fejlesztési lehetőségek: az Admin mellett a Felhasználói felület létrehozása
